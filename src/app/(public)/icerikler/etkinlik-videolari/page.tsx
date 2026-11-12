import React from 'react';
import { ActivityVideosView } from '@/components/views/ActivityVideosView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return pageMetadata('videos', '/icerikler/etkinlik-videolari');
}

export default async function ActivityVideosPage() {
  return <ActivityVideosView data={await db.getPage('videos')} />;
}
