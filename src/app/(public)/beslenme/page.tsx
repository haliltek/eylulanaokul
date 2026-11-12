import React from 'react';
import { NutritionView } from '@/components/views/NutritionView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('nutrition', '/beslenme');
}

export const revalidate = 0;

export default async function NutritionPage() {
  const nutritionData = await db.getNutritionPage();

  return <NutritionView data={nutritionData} />;
}
