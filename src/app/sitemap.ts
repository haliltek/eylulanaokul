import type { MetadataRoute } from 'next';
import db from '@/lib/db';
import { PAGE_META, type PageSeo } from '@/data/content';
import { getSeoGlobal, siteBaseUrl } from '@/lib/seoMeta';

export const dynamic = 'force-dynamic';

/** Arama motorları için site haritası: dizinlemeye açık sayfalar ve yayındaki blog yazıları. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const g = await getSeoGlobal();
  if (!g.allowIndexing) return [];
  const base = siteBaseUrl(g);
  const entries: MetadataRoute.Sitemap = [];
  for (const p of PAGE_META) {
    if (p.key === 'layout' || p.key === 'seoGlobal') continue;
    const page = (await db.getPage(p.key)) as { seo?: PageSeo };
    if (page.seo?.noindex) continue;
    entries.push({ url: base + p.path, changeFrequency: 'weekly', priority: p.path === '/' ? 1 : 0.7 });
  }
  const blog = await db.getBlogData();
  for (const post of blog.posts || []) {
    if (post.status !== 'published') continue;
    const d = new Date(post.publishedAt);
    entries.push({ url: `${base}/blog/${post.slug}`, lastModified: isNaN(d.getTime()) ? undefined : d, changeFrequency: 'monthly', priority: 0.6 });
  }
  return entries;
}
