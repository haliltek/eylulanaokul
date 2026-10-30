import React from 'react';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { FloatingActionButtons } from '@/components/common/FloatingActionButtons';
import { DecorativeLeaves } from '@/components/common/DecorativeLeaves';
import { AnalyticsTracker } from '@/components/common/AnalyticsTracker';
import db from '@/lib/db';

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await db.getSiteSettings();

  return (
    <div className="min-h-screen flex flex-col bg-[#FEFAF2] text-slate-800 font-sans antialiased relative selection:bg-[#E5880B] selection:text-white overflow-x-hidden">
      {/* Canlı Ziyaretçi & Tıklama İzleyicisi */}
      <AnalyticsTracker />

      {/* Subtle organic leaves in corners */}
      <DecorativeLeaves />

      {/* Header */}
      <SiteHeader settings={settings} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <SiteFooter settings={settings} />

      {/* Fixed WhatsApp & Quick Booking Action Buttons */}
      <FloatingActionButtons
        whatsappNumber={settings.whatsappNumber}
        phoneNumber={settings.phone}
      />
    </div>
  );
}
