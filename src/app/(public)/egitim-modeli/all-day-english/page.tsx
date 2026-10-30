import React from 'react';
import { Metadata } from 'next';
import { EnglishView } from '@/components/views/EnglishView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'All Day English - Tam Gün İngilizce | Eylül Çocuk Akademisi Anaokulu',
  description:
    'Native ve çift dilli eğitimciler eşliğinde gün boyu doğal akışta İngilizce. Şarkılar, masallar, drama ve günlük iletişimle yabancı dili ana dili gibi benimserler.',
};

export const revalidate = 0;

export default async function EnglishPage() {
  const englishData = await db.getEnglishPage();

  return <EnglishView data={englishData} />;
}
