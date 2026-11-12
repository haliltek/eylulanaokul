/** Ziyaretçi analitiği olay tipi ve gelen isteğin doğrulanması. */
export type AnalyticsEvent =
  | {
      type: 'pageview';
      path: string;
      title?: string;
      newVisitor: boolean;
      newSession: boolean;
      newPageInSession: boolean;
      secondPage: boolean;
      entryPath?: string;
      source: string;
    }
  | { type: 'leave'; path: string; seconds: number }
  | { type: 'click'; label: string; targetPath: string; category: string };

const BOT_RE = /bot|crawl|spider|slurp|preview|facebookexternalhit|whatsapp|telegram|headless|lighthouse|pingdom|uptime|curl|wget|python|axios|node-fetch/i;

export function isBot(userAgent: string | null): boolean {
  return !userAgent || BOT_RE.test(userAgent);
}

function cleanPath(v: unknown): string | null {
  if (typeof v !== 'string') return null;
  const p = v.split(/[?#]/)[0].slice(0, 200);
  if (!p.startsWith('/') || p.startsWith('/admin') || p.startsWith('/api') || p.startsWith('//')) return null;
  return p;
}

const text = (v: unknown, max: number) => (typeof v === 'string' ? v.replace(/\s+/g, ' ').trim().slice(0, max) : '');

/** Yönlendiren adresten trafik kaynağını sınıflandırır. */
export function classifySource(referrerHost: string, ownHost: string, utmSource = ''): string {
  const h = (utmSource || referrerHost).toLowerCase().replace(/^www\./, '');
  if (!h || (ownHost && h === ownHost.toLowerCase().replace(/^www\./, ''))) return 'Doğrudan / Yer İmi';
  if (/(^|\.)google\./.test(h) || h === 'google') return 'Google Arama';
  if (/bing\.|yandex\.|duckduckgo\.|yahoo\.|ecosia\.|^bing$|^yandex$/.test(h)) return 'Diğer Arama Motorları';
  if (/instagram|facebook|fb\.|^t\.co$|twitter|x\.com|linkedin|youtube|tiktok|whatsapp|wa\.me|pinterest|telegram/.test(h)) return 'Sosyal Medya';
  return 'Diğer Siteler';
}

/** İstek gövdesini doğrular; geçersizse null döner. */
export function parseAnalyticsEvent(body: any, ownHost: string): AnalyticsEvent | null {
  if (!body || typeof body !== 'object') return null;
  if (body.type === 'pageview') {
    const path = cleanPath(body.path);
    if (!path) return null;
    return {
      type: 'pageview',
      path,
      title: text(body.title, 120).replace(/\s*[|–-]\s*(Özel )?Eylül.*$/i, '') || undefined,
      newVisitor: body.newVisitor === true,
      newSession: body.newSession === true,
      newPageInSession: body.newPageInSession === true,
      secondPage: body.secondPage === true,
      entryPath: cleanPath(body.entryPath) || undefined,
      source: classifySource(text(body.referrer, 120), ownHost, text(body.utmSource, 40)),
    };
  }
  if (body.type === 'leave') {
    const path = cleanPath(body.path);
    const seconds = Math.round(Number(body.seconds));
    if (!path || !Number.isFinite(seconds) || seconds < 1) return null;
    return { type: 'leave', path, seconds: Math.min(seconds, 1800) };
  }
  if (body.type === 'click') {
    const label = text(body.label, 80);
    if (!label) return null;
    const category = ['Telefon', 'WhatsApp', 'Form', 'Harita', 'E-posta', 'Etkileşim'].includes(body.category) ? body.category : 'Etkileşim';
    return { type: 'click', label, targetPath: text(body.targetPath, 200) || '#', category };
  }
  return null;
}
