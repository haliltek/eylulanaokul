import React from 'react';
import { Metadata } from 'next';
import { ParentsView } from '@/components/views/ParentsView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'Velilerimiz İçin & Aile Rehberliği | Eylül Çocuk Akademisi Anaokulu',
  description:
    'Veli portalı, sınıf duyuruları, etkinlik takvimi, öğrenci gelişim portfolyosu ve yemek menüsü ile kesintisiz okul-aile iş birliği.',
};

export const revalidate = 0;

export default async function ParentsPage() {
  const parentsData = await db.getParentsPage();

  return <ParentsView data={parentsData} />;
}
