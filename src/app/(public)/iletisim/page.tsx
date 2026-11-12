import React from 'react';
import { ContactView } from '@/components/views/ContactView';
import db from '@/lib/db';
import { pageMetadata } from '@/lib/seoMeta';

export async function generateMetadata() {
  return pageMetadata('contact', '/iletisim');
}

export const revalidate = 0;

export default async function ContactPage() {
  const contactData = await db.getContactPage();

  return <ContactView data={contactData} />;
}
