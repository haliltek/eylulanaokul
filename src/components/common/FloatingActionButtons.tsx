'use client';

import React from 'react';
import Link from 'next/link';

interface FloatingActionButtonsProps {
  whatsappNumber?: string;
  phoneNumber?: string;
}

export const FloatingActionButtons: React.FC<FloatingActionButtonsProps> = ({
  whatsappNumber = '905555550123',
  phoneNumber = '02125550123',
}) => {
  const cleanWhatsapp = whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Quick Appointment Floating Pill */}
      <Link
        href="/kayit-ve-basvuru"
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 text-[#0E4984] font-bold text-xs shadow-lg border border-amber-200/80 hover:bg-amber-50 hover:shadow-xl hover:scale-105 transition-all duration-200 backdrop-blur-md group"
      >
        <span className="w-2 h-2 rounded-full bg-[#74B127] animate-ping" />
        <span>Hızlı Randevu Al</span>
        <svg
          className="w-3.5 h-3.5 text-[#E5880B] group-hover:translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      {/* WhatsApp Floating Action Button */}
      <a
        href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
          'Merhaba, Eylül Çocuk Akademisi hakkında bilgi almak ve okul ziyareti planlamak istiyorum.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-200 group relative"
        aria-label="WhatsApp Danışma Hattı"
        title="WhatsApp ile Bilgi Alın"
      >
        {/* Glow effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm group-hover:blur-md -z-10 animate-pulse" />
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.17.579 4.205 1.594 5.961l-1.602 5.867 6.046-1.586c1.68 1.011 3.649 1.758 5.962 1.758 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
  );
};
