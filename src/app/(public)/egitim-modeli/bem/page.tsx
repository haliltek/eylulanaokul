import React from 'react';
import { Metadata } from 'next';
import { BemView } from '@/components/views/BemView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'Bütünleştirilmiş Eğitim Modeli (BEM) | Eylül Çocuk Akademisi Anaokulu',
  description:
    'Sosyal Duygusal, Dil, Bilişsel, Sanat ve Yaratıcılık, Fiziksel ve Değerler Eğitimi olmak üzere 6 boyutta çocuğunuzun çok yönlü gelişimini destekleyen özgün modelimiz.',
};

export const revalidate = 0;

export default async function BemPage() {
  const bemData = await db.getBemPage();

  return <BemView data={bemData} />;
}
