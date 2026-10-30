import React from 'react';
import { Metadata } from 'next';
import { VeliPortaliView } from '@/components/views/VeliPortaliView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'Veli-Öğretmen Portalı | Eylül Çocuk Akademisi Anaokulu',
  description:
    'Öğrencinizin günlük yoklama saati, dinlenme durumu, BEM gelişim gözlemleri, beslenme takip raporları ve sınıf duyuruları.',
};

export const revalidate = 0;

export default async function VeliPortaliPage() {
  const announcements = await db.getAnnouncements();
  const portfolios = await db.getStudentPortfolios();

  return (
    <VeliPortaliView
      initialAnnouncements={announcements}
      initialPortfolios={portfolios}
    />
  );
}
