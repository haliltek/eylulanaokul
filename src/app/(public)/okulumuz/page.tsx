import React from 'react';
import { Metadata } from 'next';
import { CampusView } from '@/components/views/CampusView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'Okulumuz & Kampüsümüz | Eylül Çocuk Akademisi Anaokulu',
  description:
    'Montessori ahşap atölyeleri, masal odası, güvenli açık hava oyun parkı, yemekhanemiz ve 360° sanal tur ile okulumuzu keşfedin.',
};

export const revalidate = 0;

export default async function CampusPage() {
  const campusData = await db.getCampusPage();

  return <CampusView data={campusData} />;
}
