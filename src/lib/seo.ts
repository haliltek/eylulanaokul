/**
 * SEO & analitik yardımcıları. Buradaki tüm sayılar gerçek ölçümden gelir; demo/simülasyon verisi yoktur.
 */
import type { SeoSuiteData, BlogPostItem } from '../types/cms';

/** Boş (sıfırlanmış) SEO & analitik verisi. */
export function createEmptySeoData(domain = ''): SeoSuiteData {
  return {
    serpbear: { domain, serpBearUrl: '', apiKey: '', lastUpdated: '', keywords: [] },
    unlighthouse: {
      lastScanAt: '',
      reportUrl: '',
      summary: { seo: 0, performance: 0, accessibility: 0, bestPractices: 0, totalPages: 0 },
      pages: [],
    },
    analytics: {
      summary: { totalVisitors: 0, uniqueVisitors: 0, totalPageViews: 0, avgSessionDurationSec: 0, bounceRate: 0, conversionCount: 0 },
      dailyTraffic: [],
      pageMetrics: [],
      clickEvents: [],
      trafficSources: [],
      counters: { since: new Date().toISOString(), bounces: 0, totalTimeSec: 0, timeSamples: 0, sources: {} },
    },
  };
}

export interface SeoCheck { ok: boolean; label: string }

/** Blog yazısı için içerikten hesaplanan SEO kontrol listesi ve puanı (0-100). */
export function blogSeoChecks(post: Pick<BlogPostItem, 'title' | 'excerpt' | 'content' | 'seo' | 'coverImage'>): { score: number; checks: SeoCheck[] } {
  const seo = post.seo || ({} as BlogPostItem['seo']);
  const metaTitle = (seo.metaTitle || post.title || '').trim();
  const metaDesc = (seo.metaDescription || post.excerpt || '').trim();
  const kw = (seo.focusKeyword || '').trim().toLocaleLowerCase('tr');
  const body = (Array.isArray(post.content) ? post.content.join(' ') : String(post.content || '')).toLocaleLowerCase('tr');
  const words = body.split(/\s+/).filter(Boolean).length;
  const has = (s: string) => !!kw && s.toLocaleLowerCase('tr').includes(kw);
  const checks: SeoCheck[] = [
    { ok: !!kw, label: 'Odak anahtar kelime girilmiş' },
    { ok: metaTitle.length >= 30 && metaTitle.length <= 65, label: `Meta başlık 30-65 karakter (şu an ${metaTitle.length})` },
    { ok: metaDesc.length >= 110 && metaDesc.length <= 165, label: `Meta açıklama 110-165 karakter (şu an ${metaDesc.length})` },
    { ok: has(metaTitle) || has(post.title || ''), label: 'Anahtar kelime başlıkta geçiyor' },
    { ok: has(metaDesc), label: 'Anahtar kelime meta açıklamada geçiyor' },
    { ok: has(body), label: 'Anahtar kelime yazı metninde geçiyor' },
    { ok: words >= 250, label: `Yazı en az 250 kelime (şu an ${words})` },
    { ok: !!post.coverImage, label: 'Kapak görseli var' },
  ];
  const score = Math.round((checks.filter((c) => c.ok).length / checks.length) * 100);
  return { score, checks };
}
