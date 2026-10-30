/**
 * Yönetim paneli oturum doğrulaması (Edge + Node uyumlu, Web Crypto).
 * ADMIN_PASSWORD tanımlı değilse koruma kapalıdır (geriye dönük uyumluluk).
 */
export const ADMIN_COOKIE = 'admin_session';
const MAX_AGE_MS = 1000 * 60 * 60 * 12; // 12 saat

export function authEnabled(): boolean {
  return !!process.env.ADMIN_PASSWORD;
}

function secret(): string {
  return process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || '';
}

async function hmac(message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(secret()), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(message));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function createSessionToken(): Promise<string> {
  const ts = Date.now().toString();
  return `${ts}.${await hmac(ts)}`;
}

export async function verifySessionToken(token?: string | null): Promise<boolean> {
  if (!token) return false;
  const [ts, sig] = token.split('.');
  if (!ts || !sig) return false;
  const age = Date.now() - Number(ts);
  if (!Number.isFinite(age) || age < 0 || age > MAX_AGE_MS) return false;
  const expected = await hmac(ts);
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  return diff === 0;
}

export function passwordMatches(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD || '';
  if (!pw || input.length !== pw.length) return false;
  let diff = 0;
  for (let i = 0; i < pw.length; i++) diff |= pw.charCodeAt(i) ^ input.charCodeAt(i);
  return diff === 0;
}
