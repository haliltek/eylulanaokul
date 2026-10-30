import React from 'react';
import { Metadata } from 'next';
import { ContactView } from '@/components/views/ContactView';
import db from '@/lib/db';

export const metadata: Metadata = {
  title: 'İletişim & Randevu | Eylül Çocuk Akademisi Anaokulu',
  description:
    'Çayyolu / Çankaya / Ankara adresimiz, telefon numaramız, harita krokisi ve doğrudan okul yöneticilerine ulaşabileceğiniz mesaj formu.',
};

export const revalidate = 0;

export default async function ContactPage() {
  const contactData = await db.getContactPage();

  return <ContactView data={contactData} />;
}
