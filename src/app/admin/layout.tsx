import React from 'react';

export const metadata = {
  title: 'Yönetim Paneli | Eylül Çocuk Akademisi',
  description: 'Web sitesi yönetim konsolu',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F4F6FA] text-slate-800 antialiased selection:bg-[#0E4984] selection:text-white font-sans">
      {children}
    </div>
  );
}
