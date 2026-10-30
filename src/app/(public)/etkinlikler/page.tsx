import React from 'react';
import { Metadata } from 'next';
import { ActivitiesView } from '@/components/views/ActivitiesView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'Zengin Etkinlik Dünyası | Eylül Çocuk Akademisi Anaokulu',
  description:
    'Piyano, resim, jimnastik, satranç, fen ve doğa, drama, ritim & orff, robotik kodlama ve değerler eğitimi atölyeleri.',
};

export const revalidate = 0;

export default async function ActivitiesPage() {
  const activitiesData = await db.getActivitiesPage();

  return <ActivitiesView data={activitiesData} />;
}
