'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CampusPageData } from '@/types/cms';
import { list, hasLink } from '@/lib/content';
import { VideoEmbed } from '@/components/common/VideoEmbed';

interface CampusViewProps {
  data: CampusPageData;
}

export const CampusView: React.FC<CampusViewProps> = ({ data }) => {
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);
  const { header, virtualTour, areas, quickLinks } = data || ({} as CampusPageData);
  const cards = list(areas);

  return (
    <div className="w-full bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-9 sm:space-y-12">
        <div className="flex flex-col w-full">
          {/* BEGIN: Page Header & Introductory Narrative */}
          <section className="relative text-center max-w-4xl mx-auto space-y-space-sm px-margin-mobile sm:px-margin">
            {/* Top Decorative Micro-Accent */}
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-secondary-fixed/50 text-secondary">
              <span className="material-symbols-outlined text-label-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                eco
              </span>
              <span className="font-label-sm text-label-sm tracking-wide uppercase">
                {header?.badge}
              </span>
            </div>

            {/* Main Title & Subtitle Pair */}
            <div className="space-y-1">
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                {header?.title}
              </h1>
              <p className="font-headline-md text-headline-md text-secondary-container font-bold">
                {header?.subtitle}
              </p>
            </div>

            {/* Descriptive Lead Paragraph */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed pt-space-xs">
              {header?.description}
            </p>
          </section>
          {/* END: Page Header & Introductory Narrative */}

          {/* BEGIN: Campus Gallery Mosaic (4 Curated Photos) */}
          <section className="mt-space-lg w-full relative">
            {/* Background Ambient Glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-gradient-to-r from-secondary-fixed/30 via-tertiary-fixed/20 to-primary-fixed/20 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-stretch">
              {cards.map((g, i) => {
                // Mozaik düzen: 7-5 / 5-7 sütun; tek kalan kart tam genişlik
                const wide = i % 4 === 0 || i % 4 === 3;
                const span = cards.length % 2 === 1 && i === cards.length - 1 ? 'md:col-span-12' : wide ? 'md:col-span-7' : 'md:col-span-5';
                const tone = ['text-primary', 'text-secondary', 'text-tertiary', 'text-tertiary-container'][i % 4];
                return (
                  <div key={g.id || i} className={`${span} group relative bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}>
                    <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                      {g.image && (
                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={g.title} src={g.image} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      {g.category && (
                        <span className={`absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm ${tone} font-label-md text-label-md px-space-md py-1 rounded-full shadow-sm`}>
                          {g.category}
                        </span>
                      )}
                    </div>
                    <div className="p-space-md bg-surface-container-lowest">
                      <h3 className="font-headline-sm text-headline-sm text-primary">{g.title}</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{g.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          {/* END: Campus Gallery Mosaic */}

          {/* BEGIN: Interactive 360 Virtual Tour Callout Section */}
          <section id="video" className="mt-space-lg w-full relative scroll-mt-24">
            <div className="relative rounded-xl bg-gradient-to-r from-surface-container-low via-surface-container-lowest to-surface-container-low shadow-md overflow-hidden px-6 py-8 sm:py-10 sm:px-12">
              {/* Decorative Botanical Leaves in Card Background */}
              <div className="pointer-events-none absolute -bottom-6 -right-6 w-48 h-48 opacity-20">
                <svg className="w-full h-full text-secondary-container" fill="none" viewBox="0 0 200 200">
                  <path d="M170,30 C190,90 140,160 50,170 C70,100 100,50 170,30 Z" fill="currentColor" />
                  <path d="M130,50 C160,100 120,140 60,150" stroke="#003E80" strokeWidth="2.5" />
                </svg>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-space-md relative z-10">
                {/* Left: Badge + Descriptive Pitch */}
                <div className="flex flex-col sm:flex-row items-center gap-space-md text-center sm:text-left">
                  {/* 360 Badge */}
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-secondary-fixed text-on-secondary-fixed shadow-inner flex-shrink-0 group">
                    <span
                      className="material-symbols-outlined text-headline-lg"
                    >
                      smart_display
                    </span>
                    <span className="absolute -bottom-1 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-secondary text-on-secondary">
                      {virtualTour?.badge}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-headline-md text-headline-md text-primary">
                      {virtualTour?.title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                      {virtualTour?.description}
                    </p>
                  </div>
                </div>

                {/* Right: Primary CTA Action Button */}
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => setVirtualTourOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-label-lg">play_circle</span>
                    <span>{virtualTour?.buttonText}</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* END: Interactive 360 Virtual Tour Callout Section */}

          {/* BEGIN: Quick Action Navigation Bottom Bar */}
          <section className="mt-space-lg pt-space-xs pb-space-sm w-full">
            <div className="rounded-lg bg-surface-container-low px-space-md py-space-md shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm sm:gap-space-md">
                {list(quickLinks).map((q, i) => {
                  const cls = 'flex flex-col items-center justify-center text-center p-space-md rounded-DEFAULT bg-surface-container-lowest hover:bg-surface-bright shadow-sm hover:shadow-md transition-all duration-200 group';
                  const inner = (
                    <>
                      <div className="w-12 h-12 rounded-full bg-secondary-fixed/40 text-secondary flex items-center justify-center mb-space-xs group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                          {q.icon || 'arrow_forward'}
                        </span>
                      </div>
                      <span className="font-label-lg text-label-lg text-primary group-hover:text-secondary-container transition-colors">{q.title}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 hidden sm:block">{q.desc}</span>
                    </>
                  );
                  if (q.link === '#video')
                    return (
                      <button key={q.id || i} type="button" onClick={() => setVirtualTourOpen(true)} className={cls}>
                        {inner}
                      </button>
                    );
                  return (
                    <Link key={q.id || i} href={hasLink(q.link) ? q.link : '#'} className={cls}>
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
          {/* END: Quick Action Navigation Bottom Bar */}
        </div>
      </main>

      {/* Tanıtım videosu penceresi */}
      {virtualTourOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md" onClick={() => setVirtualTourOpen(false)}>
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setVirtualTourOpen(false)}
              aria-label="Kapat"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg"
            >
              ✕
            </button>
            <div className="text-center space-y-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold uppercase tracking-wider">
                {virtualTour?.badge}
              </span>
              <h3 className="text-2xl font-black text-primary font-headline-md">{virtualTour?.modalTitle}</h3>
              <p className="text-slate-600 text-sm max-w-lg mx-auto">
                {virtualTour?.videoUrl ? virtualTour?.modalText : virtualTour?.noVideoText}
              </p>
            </div>
            {virtualTour?.videoUrl && <VideoEmbed url={virtualTour.videoUrl} />}
            {hasLink(virtualTour?.modalButtonLink) && (
              <div className="mt-6 text-center">
                <Link
                  href={virtualTour!.modalButtonLink}
                  onClick={() => setVirtualTourOpen(false)}
                  className="inline-block px-6 py-2.5 rounded-full bg-secondary-container text-white font-bold text-xs uppercase tracking-wider hover:bg-secondary transition-colors"
                >
                  {virtualTour?.modalButtonText}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
