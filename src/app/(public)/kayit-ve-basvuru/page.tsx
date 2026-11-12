import React from 'react';
import { EnrollmentView } from '@/components/views/EnrollmentView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('enrollment', '/kayit-ve-basvuru');
}

export const revalidate = 0;

export default async function EnrollmentPage() {
  const enrollmentData = await db.getEnrollmentPage();

  return <EnrollmentView data={enrollmentData} />;
}
