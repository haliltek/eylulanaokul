import React from 'react';
import { EnglishView } from '@/components/views/EnglishView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('english', '/egitim-modeli/all-day-english');
}

export const revalidate = 0;

export default async function EnglishPage() {
  const englishData = await db.getEnglishPage();

  return <EnglishView data={englishData} />;
}
