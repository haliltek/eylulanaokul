/**
 * Panelde girilen SEO bilgilerinden Next.js meta verisi üretir (başlık, açıklama, anahtar kelimeler,
 * canonical, Open Graph / sosyal medya paylaşımı, dizinleme izni).
 */
import type { Metadata } from 'next';
import db from './db';
import { SITE_CONTENT, type PageKey, type PageSeo } from '../data/content';

type Global = (typeof SITE_CONTENT)['seoGlobal'];

export async function getSeoGlobal(): Promise<Global> {
  return (await db.getPage('seoGlobal')) as Global;
}

/** Sitenin mutlak adresi (sitemap, canonical ve paylaşım görselleri için). */
export function siteBaseUrl(g: Global): string {
  const raw = (g.siteUrl || process.env.NEXT_PUBLIC_APP_URL || 'http://142.93.104.78:8089').trim();
  return raw.replace(/\/+$/, '');
}

const uniq = (arr: string[]) => {
  const seen = new Set<string>();
  return arr.map((s) => s.trim()).filter((s) => s && !seen.has(s.toLocaleLowerCase('tr')) && seen.add(s.toLocaleLowerCase('tr')));
};

export interface SeoInput {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
}

export async function buildMetadata(input: SeoInput): Promise<Metadata> {
  const g = await getSeoGlobal();
  const title = (input.title || '').trim() || g.defaultTitle;
  const description = (input.description || '').trim() || g.defaultDescription;
  const keywords = uniq([...(input.keywords || []), ...(g.keywords || [])]);
  const image = (input.ogImage || '').trim() || g.ogImage;
  const noindex = !!input.noindex || !g.allowIndexing;
  const images = image ? [image] : undefined;
  const ogBase = { title, description, url: input.path, siteName: g.siteName, locale: 'tr_TR', images };
  const openGraph: Metadata['openGraph'] =
    input.type === 'article'
      ? { ...ogBase, type: 'article', publishedTime: input.publishedTime, authors: input.authors }
      : { ...ogBase, type: 'website' };
  const twitter: Metadata['twitter'] = image
    ? { card: 'summary_large_image', title, description, images }
    : { card: 'summary', title, description };
  return {
    title: { absolute: title },
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: input.path },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph,
    twitter,
  };
}

/** Sayfa Editörü'nde girilen SEO alanlarıyla sayfa meta verisi. */
export async function pageMetadata(key: Exclude<PageKey, 'layout' | 'seoGlobal'>, path: string): Promise<Metadata> {
  const page = (await db.getPage(key)) as { seo?: PageSeo };
  return buildMetadata({ ...(page.seo || {}), path });
}
