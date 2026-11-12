import React from 'react';
import { CourseScheduleView } from '@/components/views/CourseScheduleView';
import db from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Özel Eylül Anaokulu Ders Programı | Kars',
  description: 'Özel Eylül Anaokulu 3, 4 ve 5 yaş grupları haftalık etkinlik, İngilizce ve gelişim ders programı.',
};

export default async function CourseSchedulePage() {
  return <CourseScheduleView data={await db.getPage('schedule')} />;
}
