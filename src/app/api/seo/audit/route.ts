import { NextResponse } from 'next/server';
import db from '@/lib/db';
import type { UnlighthousePageAudit } from '@/types/cms';

/**
 * Gerçek teknik SEO taraması: sitenin sayfalarını sunucunun kendisinden indirir ve HTML'i denetler
 * (başlık, açıklama, H1, görsel alt metinleri, canonical, dizinlenebilirlik, dil, mobil uyum, paylaşım etiketleri,
 * yanıt süresi ve sayfa boyutu). Puan, geçilen kontrollerin oranıdır.
 */
export const dynamic = 'force-dynamic';

const ROUTES = [
  { path: '/', title: 'Anasayfa' },
  { path: '/hakkimizda', title: 'Hakkımızda' },
  { path: '/okulumuz', title: 'Okulumuz' },
  { path: '/egitim-modeli/bem', title: 'BEM Eğitim Modeli' },
  { path: '/egitim-modeli/all-day-english', title: 'All Day English' },
  { path: '/etkinlikler', title: 'Etkinlikler' },
  { path: '/beslenme', title: 'Beslenme' },
  { path: '/velilerimiz-icin', title: 'Velilerimiz İçin' },
  { path: '/kayit-ve-basvuru', title: 'Kayıt ve Başvuru' },
  { path: '/iletisim', title: 'İletişim' },
  { path: '/blog', title: 'Blog' },
  { path: '/icerikler/etkinlik-videolari', title: 'Etkinlik Videoları' },
  { path: '/icerikler/ders-programi', title: 'Ders Programı' },
  { path: '/icerikler/aylik-yemek-listesi', title: 'Aylık Yemek Listesi' },
];

const decode = (s: string) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();

function metaContent(html: string, attr: 'name' | 'property', key: string): string | null {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const t of tags) {
    const k = t.match(new RegExp(`${attr}=["']([^"']+)["']`, 'i'))?.[1];
    if (k?.toLowerCase() === key) return decode(t.match(/content=["']([^"']*)["']/i)?.[1] || '');
  }
  return null;
}

function auditHtml(path: string, fallbackTitle: string, html: string, status: number, ms: number, bytes: number): UnlighthousePageAudit {
  const head = html.split(/<\/head>/i)[0] || html;
  const title = decode(head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
  const desc = metaContent(head, 'name', 'description') || '';
  const robots = (metaContent(head, 'name', 'robots') || '').toLowerCase();
  const canonical = /<link\b[^>]*rel=["']canonical["'][^>]*>/i.test(head);
  const viewport = !!metaContent(head, 'name', 'viewport');
  const ogTitle = !!metaContent(head, 'property', 'og:title');
  const lang = /<html\b[^>]*\blang=["'][^"']+["']/i.test(html);
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const imgs = html.match(/<img\b[^>]*>/gi) || [];
  const missingAlt = imgs.filter((t) => !/\balt=["'][^"']+["']/i.test(t) && !/aria-hidden=["']true["']/i.test(t)).length;
  const indexable = status === 200 && !robots.includes('noindex');

  const checks: [boolean, string][] = [
    [status === 200, `Sayfa HTTP ${status} döndü`],
    [!!title, 'Sayfa başlığı (title) yok'],
    [title.length >= 30 && title.length <= 65, `Başlık uzunluğu ${title.length} karakter (önerilen 30-65)`],
    [!!desc, 'Meta açıklama (description) yok'],
    [desc.length >= 110 && desc.length <= 165, `Meta açıklama ${desc.length} karakter (önerilen 110-165)`],
    [h1Count === 1, h1Count === 0 ? 'H1 başlığı yok' : `${h1Count} adet H1 var (1 olmalı)`],
    [missingAlt === 0, `${missingAlt} görselde alternatif metin (alt) yok`],
    [canonical, 'Canonical etiketi yok'],
    [indexable, 'Sayfa arama motorlarına kapalı (noindex)'],
    [lang, 'HTML dil (lang) etiketi yok'],
    [viewport, 'Mobil görünüm (viewport) etiketi yok'],
    [ogTitle, 'Sosyal medya paylaşım etiketi (og:title) yok'],
  ];
  const passed = checks.filter(([ok]) => ok).length;
  // Uzunluk kontrolleri, etiket hiç yoksa ayrıca sorun olarak yazılmasın
  const issues = checks
    .filter(([ok], i) => !ok && !((i === 2 && !title) || (i === 4 && !desc)))
    .map(([, msg]) => msg);

  return {
    path,
    title: title || fallbackTitle,
    seoScore: Math.round((passed / checks.length) * 100),
    performanceScore: 0,
    accessibilityScore: 0,
    bestPracticesScore: 0,
    lcpMs: 0,
    responseTimeMs: ms,
    statusCode: status,
    pageSizeKb: Math.round(bytes / 1024),
    titleLength: title.length,
    metaDescriptionLength: desc.length,
    h1Count,
    imagesMissingAlt: missingAlt,
    canonicalValid: canonical,
    indexable,
    issues,
  };
}

async function auditRoute(base: string, path: string, fallbackTitle: string): Promise<UnlighthousePageAudit> {
  const start = Date.now();
  try {
    const res = await fetch(base + path, { cache: 'no-store', headers: { 'user-agent': 'EylulSeoAudit/1.0 (bot)' }, signal: AbortSignal.timeout(20000) });
    const html = await res.text();
    return auditHtml(path, fallbackTitle, html, res.status, Date.now() - start, Buffer.byteLength(html));
  } catch (e: any) {
    return {
      path, title: fallbackTitle, seoScore: 0, performanceScore: 0, accessibilityScore: 0, bestPracticesScore: 0, lcpMs: 0,
      responseTimeMs: Date.now() - start, statusCode: 0, pageSizeKb: 0, titleLength: 0, metaDescriptionLength: 0, h1Count: 0,
      imagesMissingAlt: 0, canonicalValid: false, indexable: false, issues: [`Sayfaya ulaşılamadı: ${e?.message || 'bilinmeyen hata'}`],
    };
  }
}

export async function POST() {
  try {
    const base = `http://127.0.0.1:${process.env.PORT || 3000}`;
    const blog = await db.getBlogData();
    const routes = [
      ...ROUTES,
      ...(blog.posts || []).filter((p) => p.status === 'published').map((p) => ({ path: `/blog/${p.slug}`, title: p.title })),
    ];
    const pages: UnlighthousePageAudit[] = [];
    for (let i = 0; i < routes.length; i += 4) {
      pages.push(...(await Promise.all(routes.slice(i, i + 4).map((r) => auditRoute(base, r.path, r.title)))));
    }
    const avg = Math.round(pages.reduce((s, p) => s + p.seoScore, 0) / (pages.length || 1));
    const unlighthouse = {
      lastScanAt: new Date().toISOString(),
      reportUrl: '',
      summary: { seo: avg, performance: 0, accessibility: 0, bestPractices: 0, totalPages: pages.length },
      pages,
    };
    await db.updateSeoData({ unlighthouse });
    return NextResponse.json({ success: true, message: `${pages.length} sayfa tarandı.`, data: unlighthouse });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  const seoData = await db.getSeoData();
  return NextResponse.json({ success: true, data: seoData.unlighthouse });
}
