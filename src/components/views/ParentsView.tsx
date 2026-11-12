'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ParentsPageData } from '@/types/cms';
import { list, unquote } from '@/lib/content';

interface ParentsViewProps {
  data: ParentsPageData;
}

export const ParentsView: React.FC<ParentsViewProps> = ({ data }) => {
  const { header, portalModules, storyBanner, quickHelp, moduleModal } = data;
  type Mod = (typeof portalModules)[number];
  const [selectedModule, setSelectedModule] = useState<Mod | null>(null);
  const modulesToRender = list(portalModules);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-9 sm:space-y-12">
      <div className="flex flex-col w-full">
        {/* Top Intro Section with Decorative Botanical Leaf SVGs */}
        <section className="relative w-full text-center max-w-4xl mx-auto pt-2 pb-6 sm:pb-8 px-4">
          {/* Subtle natural decorative leaf left & right */}
          <div className="pointer-events-none absolute -top-4 -left-12 opacity-30 hidden md:block">
            <svg className="text-tertiary-container" fill="none" height="74" viewBox="0 0 100 100" width="74">
              <path d="M10,80 C30,40 70,20 90,10 C80,50 60,85 10,80 Z" fill="currentColor"></path>
              <path d="M10,80 Q50,50 90,10" stroke="#0e4a1c" strokeWidth="2.5"></path>
            </svg>
          </div>
          <div className="pointer-events-none absolute -top-2 -right-10 opacity-30 hidden md:block">
            <svg className="text-secondary-container" fill="none" height="68" viewBox="0 0 100 100" width="68">
              <path d="M20,15 C55,10 85,35 90,80 C50,85 20,65 20,15 Z" fill="currentColor"></path>
              <path d="M20,15 Q55,50 90,80" stroke="#944a00" strokeWidth="2"></path>
            </svg>
          </div>

          {/* Category Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-fixed/50 text-secondary mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
              {header?.badge}
            </span>
          </div>

          {/* Main Headings */}
          <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-2 font-comfortaa">
            {header?.title}
          </h1>
          <h2 className="font-headline-sm text-headline-sm text-secondary font-semibold mb-4">
            {header?.subtitle}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {header?.description}
          </p>
        </section>

        {/* Parent Portal 8-Grid Section */}
        <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 mb-10 sm:mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {modulesToRender.map((mod, idx) => {
              const isFirst = !!mod.isPrimary;

              if (isFirst) {
                return (
                  <Link
                    key={mod.id || idx}
                    href={mod.link || '/veli-portali'}
                    className="group relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-lg bg-primary text-on-primary shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden"
                  >
                    <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-white/10 pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-3 group-hover:bg-white/25 transition-colors">
                      <span className="material-symbols-outlined text-[28px] text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {mod.icon || 'badge'}
                      </span>
                    </div>
                    <span className="font-headline-sm text-label-lg font-bold tracking-tight text-white mb-1">
                      {mod.title}
                    </span>
                    <span className="font-body-sm text-[11px] text-primary-fixed-dim leading-tight">
                      {mod.subtitle}
                    </span>
                  </Link>
                );
              }

              return (
                <button
                  key={mod.id || idx}
                  type="button"
                  onClick={() => setSelectedModule(mod)}
                  className="group flex flex-col items-center justify-center p-5 sm:p-6 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed/50 flex items-center justify-center mb-3 group-hover:bg-secondary-fixed transition-colors">
                    <span className="material-symbols-outlined text-[26px] text-secondary">
                      {mod.icon}
                    </span>
                  </div>
                  <span className="font-headline-sm text-label-lg text-primary font-bold tracking-tight mb-1">
                    {mod.title}
                  </span>
                  <span className="font-body-sm text-[11px] text-outline leading-tight">
                    {mod.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Lower Visual Storytelling Section: Mother & Daughter Reading */}
        <section className="w-full max-w-5xl mx-auto px-2 sm:px-4">
          <div className="relative rounded-xl overflow-hidden bg-surface-container-low shadow-lg">
            {/* Photo Container */}
            <div className="relative w-full h-80 sm:h-96 md:h-[420px] overflow-hidden">
              <img
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                alt={storyBanner?.imageAlt}
                src={storyBanner?.image}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800';
                }}
              />
              {/* Subtle Natural Gradient Scrim from Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-95"></div>
              {/* Decorative organic leaf badge floating left bottom */}
              <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-md">
                <span className="w-3 h-3 rounded-full bg-tertiary-container animate-pulse"></span>
                <span className="font-label-md text-label-sm text-primary font-bold">
                  {storyBanner?.badgeText}
                </span>
              </div>
            </div>

            {/* Quote Banner directly anchoring below the photo inside the card wrapper */}
            <div className="relative px-6 py-6 sm:py-8 text-center bg-surface-container-lowest">
              {/* Botanical flourish above quote */}
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="h-[1px] w-12 bg-secondary-fixed-dim"></span>
                <span className="material-symbols-outlined text-secondary-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  eco
                </span>
                <span className="h-[1px] w-12 bg-secondary-fixed-dim"></span>
              </div>
              <blockquote className="font-headline-md text-headline-sm sm:text-headline-md text-primary italic max-w-2xl mx-auto tracking-tight leading-snug">
                “{unquote(storyBanner?.quote)}”
              </blockquote>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 font-medium">
                {storyBanner?.author}
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Quick Help & Notification Toast Bar */}
        <section className="w-full max-w-5xl mx-auto px-2 sm:px-4 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-lg bg-surface-container-lowest shadow-sm">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary">
                  support_agent
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-label-lg text-primary font-bold leading-tight">
                  {quickHelp?.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {quickHelp?.desc}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
              <Link
                href={quickHelp?.buttonLink || '/iletisim'}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-label-md text-label-md text-white bg-secondary-container hover:bg-secondary transition-all shadow-sm"
              >
                {quickHelp?.buttonText}
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Tıklanan modül için bilgilendirme modalı */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-2xl text-secondary">
                  {selectedModule.icon}
                </span>
                <h4 className="font-bold text-slate-800 text-base">{selectedModule.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModule(null)}
                className="w-7 h-7 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 font-bold"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {moduleModal?.text}
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <Link
                href={selectedModule.link || '/veli-portali'}
                className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-sm hover:bg-primary/90 transition"
              >
                {moduleModal?.buttonText}
              </Link>
              <button
                type="button"
                onClick={() => setSelectedModule(null)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
