import type { MetadataRoute } from 'next';
import { getSeoGlobal, siteBaseUrl } from '@/lib/seoMeta';

export const dynamic = 'force-dynamic';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const g = await getSeoGlobal();
  const base = siteBaseUrl(g);
  return {
    rules: g.allowIndexing ? { userAgent: '*', allow: '/', disallow: ['/admin', '/api/'] } : { userAgent: '*', disallow: '/' },
    sitemap: `${base}/sitemap.xml`,
  };
}
