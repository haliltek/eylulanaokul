import React from 'react';
import { Metadata } from 'next';
import { PortalInfoView } from '@/components/views/PortalInfoView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'Veli Portalı | Eylül Çocuk Akademisi Anaokulu',
  description: 'Eylül Çocuk Akademisi veli portalı: duyurular, günlük akış, gelişim notları ve öğretmen iletişimi.',
};

export const dynamic = 'force-dynamic';

export default async function VeliPortaliPage() {
  return <PortalInfoView data={await db.getPage('portal')} />;
}
