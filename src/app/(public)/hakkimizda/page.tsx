import React from 'react';
import { AboutView } from '@/components/views/AboutView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('about', '/hakkimizda');
}

export const revalidate = 0;

export default async function AboutPage() {
  const aboutData = await db.getAboutPage();

  return <AboutView data={aboutData} />;
}
