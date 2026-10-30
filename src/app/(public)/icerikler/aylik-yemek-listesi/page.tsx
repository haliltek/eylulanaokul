import React from 'react';
import { MonthlyMealView } from '@/components/views/MonthlyMealView';

export const metadata = {
  title: 'Aylık Yemek Listesi | Özel Eylül Anaokulu Kars',
  description: 'Özel Eylül Anaokulu diyetisyen onaylı, 3 öğünlük taze ve doğal aylık yemek menüsü takvimi.',
};

export default function MonthlyMealPage() {
  return <MonthlyMealView />;
}
