/**
 * İçerik yardımcıları.
 *
 * Sitedeki tüm yazılar/görseller `src/data/content/*` altındaki varsayılan içerikten gelir ve
 * yönetim panelinde kaydedilen değerler bunun üzerine bindirilir (deepMerge). Böylece:
 *  - Panelde hiç dokunulmamış alanlar varsayılan metni gösterir,
 *  - Panelde değiştirilen her alan sitede o anda görünür,
 *  - Koda yeni bir alan eklendiğinde eski kayıtlı veride olmasa bile otomatik görünür.
 */

type Obj = Record<string, any>;
const isObj = (v: unknown): v is Obj => !!v && typeof v === 'object' && !Array.isArray(v);

/**
 * Varsayılanın üzerine kayıtlı değeri bindirir.
 *  - Nesneler alan alan birleşir.
 *  - Diziler: kayıtlı dizi esastır (panelden silinen kart geri gelmez). Her eleman, aynı `id`'ye
 *    (yoksa aynı sıraya) sahip varsayılan elemanla birleştirilir; böylece yeni eklenen alanlar dolar.
 *  - Kayıtlı değer `undefined`/`null` ise varsayılan kullanılır; boş metin ("") bilinçli olarak korunur.
 */
export function deepMerge<T>(defaults: T, stored: unknown): T {
  if (stored === undefined || stored === null) return defaults;
  if (Array.isArray(defaults)) {
    if (!Array.isArray(stored)) return defaults;
    return stored.map((item, i) => {
      const byId = isObj(item) && item.id ? (defaults as any[]).find((d) => isObj(d) && d.id === item.id) : undefined;
      const base = byId ?? (defaults as any[])[i] ?? (defaults as any[])[0];
      return isObj(base) && isObj(item) ? deepMerge(base, item) : item;
    }) as unknown as T;
  }
  if (isObj(defaults)) {
    if (!isObj(stored)) return defaults;
    const out: Obj = { ...defaults };
    for (const [k, v] of Object.entries(stored)) out[k] = k in defaults ? deepMerge((defaults as Obj)[k], v) : v;
    return out as T;
  }
  return stored as T;
}

/** Metnin başındaki/sonundaki tırnak işaretlerini temizler (görünüm tırnağı kendisi ekler; çift tırnak oluşmaz). */
export function unquote(s?: string | null): string {
  return String(s ?? '').trim().replace(/^["“”«»'‘’]+|["“”«»'‘’]+$/g, '').trim();
}

/** Diziyi güvenle döndürür. */
export const list = <T,>(v: T[] | undefined | null): T[] => (Array.isArray(v) ? v : []);

/** "/yol" ya da "https://" bağlantısı mı? (boşsa düz metin olarak gösterilir) */
export const hasLink = (href?: string) => !!href && href.trim() !== '' && href.trim() !== '#';

/** "2026-10-18T10:00:00.000Z" → "18 Ekim 2026" (geçersizse metni olduğu gibi döndürür). */
export function formatDateTR(v?: string): string {
  if (!v) return '';
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return v;
  return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Istanbul' });
}
