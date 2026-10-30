import React from 'react';
import { Metadata } from 'next';
import { db } from '@/lib/db';
import { BlogListView } from '@/components/views/BlogListView';

export const metadata: Metadata = {
  title: 'Eğitim & Ebeveynlik Blogu | Özel Eylül Anaokulu Kars',
  description: 'Kars anaokulu seçimi, okul öncesi Montessori eğitimi, BEM pedagojisi, beslenme ve çocuk gelişimi rehberi.',
  keywords: ['Kars anaokulu', 'Kars kreş', 'okul öncesi eğitim', 'çocuk gelişimi', 'Özel Eylül Anaokulu blog'],
  openGraph: {
    title: 'Eğitim & Ebeveynlik Blogu | Özel Eylül Anaokulu Kars',
    description: 'Kars anaokulu seçimi, okul öncesi Montessori eğitimi, BEM pedagojisi ve çocuk gelişimi rehberi.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const blogData = await db.getBlogData();

  return <BlogListView data={blogData} />;
}
