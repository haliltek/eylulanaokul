import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/common/Logo';

export const metadata = {
  title: 'Yönetim Paneli | Eylül Çocuk Akademisi',
  description: 'Editoryal Dashboard, SEO Merkezi, Blog CMS ve Web Sitesi Yönetimi',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col antialiased selection:bg-[#0E4984] selection:text-white font-sans">
      {/* Üst Editoryal Header Bar */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="flex items-center gap-3">
            <Logo size="sm" />
            <div className="hidden sm:block pl-3 border-l border-slate-200">
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block">YÖNETİM KONSOLU</span>
              <span className="text-xs font-semibold text-slate-800">Eylül Çocuk Akademisi Kars</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Canlı Sistem Aktif
          </span>
          <Link
            href="/"
            target="_blank"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
          >
            Web Sitesini Aç &rarr;
          </Link>
        </div>
      </header>

      {/* Ana Çalışma Alanı */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}