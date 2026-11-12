import React from 'react';
import { Metadata } from 'next';
import { CampusView } from '@/components/views/CampusView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'Okulumuz & Kampüsümüz | Eylül Çocuk Akademisi Anaokulu',
  description:
    'Aydınlık sınıflarımız, masal köşemiz, doğal çim bahçemiz, yemekhanemiz ve tanıtım videolarıyla okulumuzu keşfedin.',
};

export const revalidate = 0;

export default async function CampusPage() {
  const campusData = await db.getCampusPage();

  return <CampusView data={campusData} />;
}
