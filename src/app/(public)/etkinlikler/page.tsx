import React from 'react';
import { ActivitiesView } from '@/components/views/ActivitiesView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('activities', '/etkinlikler');
}

export const revalidate = 0;

export default async function ActivitiesPage() {
  const activitiesData = await db.getActivitiesPage();

  return <ActivitiesView data={activitiesData} />;
}
