import React from 'react';
import { Metadata } from 'next';
import { AboutView } from '@/components/views/AboutView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'Hakkımızda | Eylül Çocuk Akademisi Anaokulu',
  description:
    '12 yıllık deneyimimiz, uzman eğitim kadromuz ve sevgi, ilgi, özen değerlerimizle çocuklarımızın özgürce keşfettiği güvenli bir eğitim yuvası sunuyoruz.',
};

export const revalidate = 0;

export default async function AboutPage() {
  const aboutData = await db.getAboutPage();

  return <AboutView data={aboutData} />;
}
