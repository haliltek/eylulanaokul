import React from 'react';
import { BemView } from '@/components/views/BemView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('bem', '/egitim-modeli/bem');
}

export const revalidate = 0;

export default async function BemPage() {
  const bemData = await db.getBemPage();

  return <BemView data={bemData} />;
}
