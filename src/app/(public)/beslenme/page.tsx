import React from 'react';
import { Metadata } from 'next';
import { NutritionView } from '@/components/views/NutritionView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'Doğal ve Dengeli Beslenme & Haftalık Menü | Eylül Çocuk Akademisi Anaokulu',
  description:
    'Okulumuzda dondurulmuş veya hazır gıda kullanılmaz. Uzman diyetisyen onaylı, her sabah taze pişirilen haftalık yemek menümüzü inceleyin.',
};

export const revalidate = 0;

export default async function NutritionPage() {
  const nutritionData = await db.getNutritionPage();

  return <NutritionView data={nutritionData} />;
}
