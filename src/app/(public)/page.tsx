import React from 'react';
import { HomeView } from '@/components/home/HomeView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('home', '/');
}

export const revalidate = 0; // Canlı CMS veri senkronizasyonu

export default async function HomePage() {
  const homeData = await db.getHomePage();

  return <HomeView data={homeData} />;
}
