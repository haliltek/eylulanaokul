import React from 'react';
import { ParentsView } from '@/components/views/ParentsView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('parents', '/velilerimiz-icin');
}

export const revalidate = 0;

export default async function ParentsPage() {
  const parentsData = await db.getParentsPage();

  return <ParentsView data={parentsData} />;
}
