import React from 'react';
import { MonthlyMealView } from '@/components/views/MonthlyMealView';
import db from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Aylık Yemek Listesi | Özel Eylül Anaokulu Kars',
  description: 'Özel Eylül Anaokulu diyetisyen onaylı, 3 öğünlük taze ve doğal aylık yemek menüsü takvimi.',
};

export default async function MonthlyMealPage() {
  return <MonthlyMealView data={await db.getPage('meals')} />;
}
