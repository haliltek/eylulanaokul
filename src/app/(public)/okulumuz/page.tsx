import React from 'react';
import { CampusView } from '@/components/views/CampusView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('campus', '/okulumuz');
}

export const revalidate = 0;

export default async function CampusPage() {
  const campusData = await db.getCampusPage();

  return <CampusView data={campusData} />;
}
