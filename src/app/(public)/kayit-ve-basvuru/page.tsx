import React from 'react';
import { Metadata } from 'next';
import { EnrollmentView } from '@/components/views/EnrollmentView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'Kayıt ve Başvuru | Eylül Çocuk Akademisi Anaokulu',
  description:
    '2024 - 2025 dönemi ön kayıtları başladı. 3 adımda kolay kayıt süreci, okul ziyareti planlama ve bilgi talep formu.',
};

export const revalidate = 0;

export default async function EnrollmentPage() {
  const enrollmentData = await db.getEnrollmentPage();

  return <EnrollmentView data={enrollmentData} />;
}
