import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { BlogPostView } from '@/components/views/BlogPostView';
import { buildMetadata } from '@/lib/seoMeta';

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

  return buildMetadata({
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: [...(post.seo?.focusKeyword ? [post.seo.focusKeyword] : []), ...(post.seo?.keywords || [])],
    ogImage: post.coverImage,
    noindex: post.status !== 'published',
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await db.getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }


  const allBlogData = await db.getBlogData();
  const relatedPosts = (allBlogData.posts || []).filter((p) => p.slug !== slug);

  return <BlogPostView post={post} relatedPosts={relatedPosts} texts={await db.getPage('blogPage')} />;
}
