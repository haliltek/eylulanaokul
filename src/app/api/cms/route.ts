import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { isPageKey } from '@/data/content';
import { ADMIN_COOKIE, authEnabled, verifySessionToken } from '@/lib/adminAuth';

export const dynamic = 'force-dynamic';

async function isAdmin(request: Request): Promise<boolean> {
  if (!authEnabled()) return true;
  const cookie = request.headers.get('cookie') || '';
  const token = cookie.split(/;\s*/).find((c) => c.startsWith(`${ADMIN_COOKIE}=`))?.slice(ADMIN_COOKIE.length + 1);
  return verifySessionToken(token ? decodeURIComponent(token) : null);
}

/**
 * GET /api/cms?section=<sayfa>   → sayfanın sitede görünen içeriği (herkese açık)
 * GET /api/cms?section=settings  → site ayarları (herkese açık)
 * GET /api/cms                   → tüm veri deposu (yalnız yönetici; veli başvuruları gibi kişisel veri içerir)
 */
export async function GET(request: Request) {
  try {
    const section = new URL(request.url).searchParams.get('section');
    if (!section) {
      if (!(await isAdmin(request))) {
        return NextResponse.json({ success: false, error: 'Yetkisiz erişim.' }, { status: 401 });
      }
      return NextResponse.json({ success: true, data: { ...(await db.getStore()), pages: await db.getAllPages() } });
    }
    if (section === 'settings') return NextResponse.json({ success: true, data: await db.getSiteSettings() });
    if (isPageKey(section)) return NextResponse.json({ success: true, data: await db.getPage(section) });
    return NextResponse.json({ success: false, error: 'Bilinmeyen bölüm' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

/** POST { section, data } — yazma işlemleri middleware'de yönetici oturumuyla korunur. */
export async function POST(request: Request) {
  try {
    const { section, data } = await request.json();
    if (!section || data === undefined || data === null || typeof data !== 'object') {
      return NextResponse.json({ success: false, error: 'Bölüm ve veri zorunludur' }, { status: 400 });
    }
    if (JSON.stringify(data).length > 2_000_000) {
      return NextResponse.json({ success: false, error: 'İçerik çok büyük' }, { status: 413 });
    }
    let updated: unknown;
    if (section === 'settings') updated = await db.updateSiteSettings(data);
    else if (isPageKey(section)) updated = await db.updatePage(section, data);
    else return NextResponse.json({ success: false, error: 'Bilinmeyen bölüm' }, { status: 400 });
    return NextResponse.json({ success: true, message: 'İçerik başarıyla güncellendi', data: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
