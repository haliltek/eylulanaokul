import { NextResponse } from 'next/server';
import { ADMIN_COOKIE, authEnabled, createSessionToken, passwordMatches } from '@/lib/adminAuth';

const attempts = new Map<string, { n: number; t: number }>();

export async function POST(request: Request) {
  if (!authEnabled()) return NextResponse.json({ success: true });
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  const rec = attempts.get(ip);
  if (rec && Date.now() - rec.t < 10 * 60 * 1000 && rec.n >= 8) {
    return NextResponse.json({ success: false, error: 'Çok fazla deneme. Lütfen 10 dakika sonra tekrar deneyin.' }, { status: 429 });
  }
  const body = await request.json().catch(() => ({}));
  if (!passwordMatches(String(body.password || ''))) {
    attempts.set(ip, { n: (rec && Date.now() - rec.t < 10 * 60 * 1000 ? rec.n : 0) + 1, t: Date.now() });
    return NextResponse.json({ success: false, error: 'Şifre hatalı.' }, { status: 401 });
  }
  attempts.delete(ip);
  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_COOKIE, await createSessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 12,
  });
  return res;
}
