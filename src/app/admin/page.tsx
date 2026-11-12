import React from 'react';
import db from '@/lib/db';
import { AdminDashboardClient } from './AdminDashboardClient';

export const revalidate = 0; // Her zaman en taze CMS verisi

export default async function AdminPage() {
  const store = await db.getStore();
  const seo = await db.getSeoData();
  const allData = {
    ...store,
    pages: await db.getAllPages(),
    // API anahtarı tarayıcıya gönderilmez
    seo: { ...seo, serpbear: { ...seo.serpbear, apiKey: seo.serpbear.apiKey ? '••••••' : '' } },
  };

  return <AdminDashboardClient initialData={allData} />;
}
