import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, authEnabled, verifySessionToken } from '@/lib/adminAuth';

// Yazma işlemleri (POST/PUT/DELETE) yönetici girişi gerektiren API'ler
const PROTECTED_WRITE_API = ['/api/cms', '/api/blog', '/api/media', '/api/meals', '/api/settings', '/api/social', '/api/hr', '/api/seo'];
// Okuması da kişisel veri içeren API'ler
const PROTECTED_READ_API = ['/api/crm'];

export async function middleware(req: NextRequest) {
  if (!authEnabled()) return NextResponse.next();

  const { pathname } = req.nextUrl;
  const method = req.method;

  const isAdminPage = pathname === '/admin' || (pathname.startsWith('/admin/') && !pathname.startsWith('/admin/login'));
  const isWriteApi = method !== 'GET' && method !== 'HEAD' && PROTECTED_WRITE_API.some((p) => pathname.startsWith(p));
  // Ziyaretçi formu: POST /api/crm herkese açık; diğer yöntemler korumalı
  const isCrmProtected = PROTECTED_READ_API.some((p) => pathname.startsWith(p)) && method !== 'POST';

  if (!isAdminPage && !isWriteApi && !isCrmProtected) return NextResponse.next();

  const ok = await verifySessionToken(req.cookies.get(ADMIN_COOKIE)?.value);
  if (ok) return NextResponse.next();

  if (pathname.startsWith('/api/')) {
    return NextResponse.json({ success: false, error: 'Yetkisiz erişim. Lütfen yönetici girişi yapın.' }, { status: 401 });
  }
  const url = req.nextUrl.clone();
  url.pathname = '/admin/login';
  url.search = '';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};
