'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../common/Logo';
import { SiteSettings } from '@/types/cms';
import { layoutContent } from '@/data/content/layout';

interface SiteHeaderProps {
  settings?: Partial<SiteSettings>;
  layout?: typeof layoutContent;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ settings, layout }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const phone = settings?.phone || '0 (551) 589 32 12';
  const phoneDisplay = settings?.phoneDisplay || '0 (551) 589 32 12';

  const L = layout || layoutContent;
  const navLinks = (L.menu || []).map((m) => ({ ...m, subLinks: m.subLinks && m.subLinks.length ? m.subLinks : undefined }));

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full pt-4 pb-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-50">
      <div className="flex items-center justify-between pb-3 border-b border-amber-100/60 lg:border-none">
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-7 text-[14px] font-bold text-slate-700">
          {navLinks.map((link) => {
            const hasSub = !!link.subLinks;
            const active = isActive(link.href);

            if (!hasSub) {
              return (
                <Link
                  key={link.id || link.label}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    active ? 'text-[#E5880B]' : 'hover:text-[#0E4984]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <div
                key={link.id || link.label}
                className="relative group py-2"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 transition-colors ${
                    active ? 'text-[#E5880B]' : 'hover:text-[#0E4984]'
                  }`}
                >
                  <span>{link.label}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === link.label ? 'rotate-180 text-[#E5880B]' : 'text-slate-400 group-hover:text-[#0E4984]'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-amber-100 p-2 transition-all duration-200 ${
                    openDropdown === link.label
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  {link.subLinks?.map((sub) => (
                    <Link
                      key={sub.id || sub.label}
                      href={sub.href}
                      className="block p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group/sub"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <div className="font-bold text-slate-800 text-xs group-hover/sub:text-[#0E4984]">
                        {sub.label}
                      </div>
                      {sub.desc && (
                        <div className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                          {sub.desc}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        {/* Header Right Action & CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href={L.header.ctaLink || '/kayit-ve-basvuru'}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E5880B] hover:bg-[#EA7C02] shadow-md shadow-[#E5880B]/25 hover:shadow-lg hover:shadow-[#E5880B]/35 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            {L.header.ctaText}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-[#0E4984] hover:bg-amber-100/50 focus:outline-none transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-amber-100 p-5 z-50 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <div key={link.id || link.label} className="border-b border-amber-50 pb-2">
                <Link
                  href={link.href}
                  className={`text-base font-extrabold flex items-center justify-between py-1.5 ${
                    isActive(link.href) ? 'text-[#E5880B]' : 'text-slate-800 hover:text-[#0E4984]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                </Link>

                {link.subLinks && (
                  <div className="pl-3 mt-1 space-y-1.5">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.id || sub.label}
                        href={sub.href}
                        className="block text-xs font-semibold text-slate-600 hover:text-[#0E4984] py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        • {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Contact & Action Links */}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href={L.header.ctaLink || '/kayit-ve-basvuru'}
                className="w-full text-center py-3 rounded-2xl bg-[#E5880B] text-white font-bold text-sm shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {L.header.ctaText}
              </Link>
              <div className="text-center text-xs text-slate-500 pt-1">
                {L.header.mobileCallLabel} <a href={`tel:${phone}`} className="font-bold text-[#0E4984]">{phoneDisplay}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
