import React from 'react';
import { Metadata } from 'next';
import { HomeView } from '@/components/home/HomeView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'Eylül Çocuk Akademisi Anaokulu | Güvenle Bugüne, Umutla Yarına',
  description:
    'Eylül Çocuk Akademisi; 3-6 yaş butik sınıfları, Bütünleştirilmiş Eğitim Modeli (BEM), All Day English tam gün İngilizce, zengin etkinlik dünyası ve doğal beslenme felsefesiyle geleceğe sevgiyle hazırlıyor.',
};

export const revalidate = 0; // Canlı CMS veri senkronizasyonu

export default async function HomePage() {
  const homeData = await db.getHomePage();

  return <HomeView data={homeData} />;
}
