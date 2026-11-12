import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { BlogPostView } from '@/components/views/BlogPostView';

export const dynamic = 'force-dynamic';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await db.getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Yazı Bulunamadı | Özel Eylül Anaokulu',
    };
  }

  return {
    title: `${post.seo?.metaTitle || post.title} | Özel Eylül Anaokulu`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.focusKeyword ? [post.seo.focusKeyword, 'Özel Eylül Anaokulu', 'Kars anaokulu'] : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await db.getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Ziyaret sayacını artır (asenkron arka plan)
  db.incrementBlogPostViews(slug).catch(() => {});

  const allBlogData = await db.getBlogData();
  const relatedPosts = (allBlogData.posts || []).filter((p) => p.slug !== slug);

  return <BlogPostView post={post} relatedPosts={relatedPosts} texts={await db.getPage('blogPage')} />;
}
