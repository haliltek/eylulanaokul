import React from 'react';
import { MonthlyMealView } from '@/components/views/MonthlyMealView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return pageMetadata('meals', '/icerikler/aylik-yemek-listesi');
}

export default async function MonthlyMealPage() {
  return <MonthlyMealView data={await db.getPage('meals')} />;
}
