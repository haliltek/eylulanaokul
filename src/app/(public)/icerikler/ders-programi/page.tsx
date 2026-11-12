import React from 'react';
import { CourseScheduleView } from '@/components/views/CourseScheduleView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return pageMetadata('schedule', '/icerikler/ders-programi');
}

export default async function CourseSchedulePage() {
  return <CourseScheduleView data={await db.getPage('schedule')} />;
}
