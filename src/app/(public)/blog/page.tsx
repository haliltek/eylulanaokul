import React from 'react';
import { db } from '@/lib/db';
import { BlogListView } from '@/components/views/BlogListView';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('blogPage', '/blog');
}

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const blogData = await db.getBlogData();

  return <BlogListView data={blogData} texts={await db.getPage('blogPage')} />;
}
