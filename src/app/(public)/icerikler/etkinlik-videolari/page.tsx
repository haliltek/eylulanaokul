import React from 'react';
import { ActivityVideosView } from '@/components/views/ActivityVideosView';
import db from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Etkinlik Videoları | Özel Eylül Anaokulu Kars',
  description: 'Özel Eylül Anaokulu öğrencilerimizin müzik, sanat, drama ve İngilizce etkinlik videoları.',
};

export default async function ActivityVideosPage() {
  return <ActivityVideosView data={await db.getPage('videos')} />;
}
