import { NextResponse } from 'next/server';
import db from '@/lib/db';
import type { SerpKeywordItem } from '@/types/cms';

/**
 * Anahtar kelime sıralama takibi. Sıralamalar yalnız gerçek kaynaktan gelir: SerpBear (açık kaynak sıralama
 * takip aracı) bağlantısı tanımlıysa onun API'sinden çekilir; tanımlı değilse sıra "ölçülmedi" olarak kalır.
 */
export const dynamic = 'force-dynamic';

const today = () => new Date().toISOString().split('T')[0];
const publicView = (s: any) => ({ ...s, apiKey: s.apiKey ? '••••••' : '' });

async function fetchSerpBear(baseUrl: string, apiKey: string, domain: string): Promise<SerpKeywordItem[]> {
  const url = `${baseUrl.replace(/\/+$/, '')}/api/keywords?domain=${encodeURIComponent(domain)}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${apiKey}` }, cache: 'no-store', signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`SerpBear yanıtı: HTTP ${res.status}`);
  const json: any = await res.json();
  const list: any[] = Array.isArray(json?.keywords) ? json.keywords : [];
  return list.map((k) => {
    const hist = k.history && typeof k.history === 'object' ? Object.entries(k.history as Record<string, number>) : [];
    hist.sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime());
    const positions = hist.map(([, p]) => Number(p) || 0);
    const pos = Number(k.position) || 0;
    const prev = positions.length > 1 ? positions[positions.length - 2] : pos;
    const ranked = positions.filter((p) => p > 0);
    return {
      id: `sb-${k.ID ?? k.id ?? k.keyword}`,
      keyword: String(k.keyword || ''),
      device: k.device === 'mobile' ? 'mobile' : 'desktop',
      country: String(k.country || 'TR'),
      city: String(k.city || ''),
      position: pos,
      previousPosition: prev,
      bestPosition: ranked.length ? Math.min(...ranked) : pos,
      volume: Number(k.volume) || 0,
      url: String(k.url || ''),
      history: positions.slice(-14),
      tags: Array.isArray(k.tags) ? k.tags.map(String) : [],
      lastChecked: String(k.lastUpdated || '').split('T')[0] || today(),
    } as SerpKeywordItem;
  });
}

export async function GET() {
  const seo = await db.getSeoData();
  return NextResponse.json({ success: true, data: publicView(seo.serpbear) });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action } = body;
    const seo = await db.getSeoData();
    const sb = seo.serpbear;

    if (action === 'refresh') {
      if (!sb.serpBearUrl || !sb.apiKey) {
        return NextResponse.json(
          { success: false, error: 'Gerçek Google sıralamaları için SerpBear bağlantısı (adres ve API anahtarı) girilmelidir. Bağlantı yokken sıralama ölçülemez.' },
          { status: 400 },
        );
      }
      const remote = await fetchSerpBear(sb.serpBearUrl, sb.apiKey, sb.domain);
      // SerpBear'da olmayan, panelden eklenmiş kelimeler "ölçülmedi" olarak listede kalır
      const remoteNames = new Set(remote.map((k) => k.keyword.toLocaleLowerCase('tr')));
      const localOnly = sb.keywords.filter((k) => !k.id.startsWith('sb-') && !remoteNames.has(k.keyword.toLocaleLowerCase('tr')));
      sb.keywords = [...remote, ...localOnly];
      sb.lastUpdated = new Date().toISOString();
      await db.updateSeoData({ serpbear: sb });
      return NextResponse.json({ success: true, message: `${remote.length} anahtar kelimenin sıralaması SerpBear'dan alındı.`, data: publicView(sb) });
    }

    if (action === 'add') {
      const keyword = String(body.keyword || '').trim().slice(0, 120);
      if (!keyword) return NextResponse.json({ success: false, error: 'Anahtar kelime boş olamaz' }, { status: 400 });
      if (sb.keywords.some((k) => k.keyword.toLocaleLowerCase('tr') === keyword.toLocaleLowerCase('tr'))) {
        return NextResponse.json({ success: false, error: 'Bu anahtar kelime zaten listede' }, { status: 400 });
      }
      const kw: SerpKeywordItem = {
        id: `kw-${Date.now()}`,
        keyword,
        device: body.device === 'mobile' ? 'mobile' : 'desktop',
        country: 'TR',
        city: 'Kars',
        position: 0,
        previousPosition: 0,
        bestPosition: 0,
        volume: 0,
        url: String(body.url || '').trim().slice(0, 300),
        history: [],
        tags: [],
        lastChecked: '',
      };
      sb.keywords.unshift(kw);
      await db.updateSeoData({ serpbear: sb });
      return NextResponse.json({ success: true, message: 'Anahtar kelime takip listesine eklendi', data: kw });
    }

    if (action === 'delete') {
      if (!body.id) return NextResponse.json({ success: false, error: 'ID zorunludur' }, { status: 400 });
      sb.keywords = sb.keywords.filter((k) => k.id !== body.id);
      await db.updateSeoData({ serpbear: sb });
      return NextResponse.json({ success: true, message: 'Anahtar kelime silindi' });
    }

    if (action === 'update_settings') {
      if (typeof body.serpBearUrl === 'string') sb.serpBearUrl = body.serpBearUrl.trim();
      if (typeof body.apiKey === 'string' && body.apiKey !== '••••••') sb.apiKey = body.apiKey.trim();
      if (typeof body.domain === 'string' && body.domain.trim()) sb.domain = body.domain.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
      await db.updateSeoData({ serpbear: sb });
      return NextResponse.json({ success: true, message: 'Sıralama takip ayarları kaydedildi', data: publicView(sb) });
    }

    return NextResponse.json({ success: false, error: 'Geçersiz işlem' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
