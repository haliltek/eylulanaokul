import React from 'react';
import { PortalInfoView } from '@/components/views/PortalInfoView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('portal', '/veli-portali');
}

export const dynamic = 'force-dynamic';

export default async function VeliPortaliPage() {
  return <PortalInfoView data={await db.getPage('portal')} />;
}
