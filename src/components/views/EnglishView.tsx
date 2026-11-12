'use client';

import React from 'react';
import Link from 'next/link';
import { EnglishPageData } from '@/types/cms';
import { list, unquote } from '@/lib/content';
import { VideoEmbed } from '@/components/common/VideoEmbed';

interface EnglishViewProps {
  data: EnglishPageData;
}

const PILLAR_STYLE = [
  { bg: 'bg-secondary-fixed text-secondary', icon: 'wb_sunny' },
  { bg: 'bg-primary-fixed text-primary', icon: 'diversity_3' },
  { bg: 'bg-tertiary-fixed text-tertiary', icon: 'school' },
  { bg: 'bg-secondary-fixed text-secondary', icon: 'forum' },
];

export const EnglishView: React.FC<EnglishViewProps> = ({ data }) => {
  const { header, heroImage, heroImageAlt, heroBadge, pillars, quote, videoShowcase, galleryTitle, galleryBadge, photos, cta } =
    data || ({} as EnglishPageData);
  const [videoOpen, setVideoOpen] = React.useState(false);
  const [lightbox, setLightbox] = React.useState<number | null>(null);
  const pics = list(photos).filter((p) => p.image);

  return (
    <div className="w-full bg-background">
      <main className="w-full pt-4 pb-16 bg-background">
        <div className="flex flex-col w-full">
          {/* Subtle Botanical Ambient Background Element */}
          <div className="relative w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-md lg:pt-space-lg pb-space-xl">
            <div className="pointer-events-none absolute -top-8 right-6 text-tertiary-fixed-dim/20 select-none hidden lg:block">
              <span className="material-symbols-outlined text-[160px]">nest_eco_leaf</span>
            </div>

            {/* Section Header: All Day English */}
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm tracking-wide uppercase mb-space-xs">
                <span className="material-symbols-outlined text-[14px]">translate</span>
                {header?.badge}
              </span>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                {header?.title}
              </h1>
              <p className="font-headline-sm text-headline-sm text-secondary mt-1">
                {header?.subtitle}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed max-w-2xl">
                {header?.description}
              </p>
            </div>

            {/* Hero Image Showcase: Teacher & Child with Globe */}
            <div className="mt-space-lg max-w-4xl mx-auto relative group">
              <div className="overflow-hidden rounded-xl bg-surface-container shadow-md">
                <img
                  className="w-full h-[280px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={heroImageAlt}
                  src={heroImage}
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-6 sm:right-10 bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-md flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse" />
                <span className="font-label-md text-label-md text-primary font-bold">
                  {heroBadge}
                </span>
              </div>
            </div>

            {/* 4 Key Feature Cards */}
            <div className="mt-space-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter max-w-5xl mx-auto">
              {list(pillars).map((p, i) => (
                <div key={p.id || i} className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                  <div className={`w-14 h-14 rounded-full ${PILLAR_STYLE[i % PILLAR_STYLE.length].bg} flex items-center justify-center mb-space-sm group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {PILLAR_STYLE[i % PILLAR_STYLE.length].icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{p.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Quote & Video Showcase Section */}
            <div className="mt-space-xl max-w-4xl mx-auto flex flex-col items-center">
              {/* Quote */}
              <div className="flex items-center gap-space-sm mb-space-md text-center">
                <blockquote className="font-headline-md text-headline-md text-primary italic">
                  “{unquote(quote?.text)}”
                </blockquote>
              </div>

              {/* Video / Interactive Showcase Card */}
              <div className="w-full relative rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-surface-container" onClick={() => setVideoOpen(true)} role="button" aria-label="Videoyu oynat">
                <img
                  className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-102"
                  alt="İngilizce ders gözlem videosu"
                  src={videoShowcase?.thumbnail}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent flex flex-col justify-end p-space-md sm:p-space-lg">
                  {/* Play Trigger Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-secondary-container transition-all">
                      <span
                        className="material-symbols-outlined text-secondary group-hover:text-on-secondary text-[40px] ml-1"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 text-on-primary">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                      {videoShowcase?.label}
                    </span>
                    <p className="font-headline-sm text-headline-sm mt-0.5">
                      {videoShowcase?.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fotoğraf galerisi (panelden yönetilir) */}
            {pics.length > 0 && (
              <div className="mt-space-xl max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-space-sm">
                  <h2 className="font-headline-sm text-headline-sm text-primary">{galleryTitle}</h2>
                  <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">photo_library</span>
                    {galleryBadge}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
                  {pics.map((ph, i) => (
                    <button key={ph.id || i} type="button" onClick={() => setLightbox(i)} className="overflow-hidden rounded-DEFAULT bg-surface-container shadow-sm group">
                      <img className="w-full h-28 sm:h-32 object-cover transition-transform duration-300 group-hover:scale-110" alt={ph.caption} src={ph.image} />
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Bottom Action CTA */}
            <div className="mt-space-xl max-w-2xl mx-auto text-center flex flex-col items-center">
              <div className="bg-surface-container-low p-space-lg rounded-xl w-full flex flex-col items-center shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  {cta?.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md max-w-lg">
                  {cta?.text}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-space-sm">
                  <Link
                    className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-secondary-container text-on-secondary font-label-md text-label-md shadow-md hover:bg-secondary transition-all"
                    href={cta?.primaryLink || '/kayit-ve-basvuru'}
                  >
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    <span>{cta?.primaryText}</span>
                  </Link>
                  <Link
                    className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm"
                    href={cta?.secondaryLink || '/egitim-modeli/bem'}
                  >
                    <span className="material-symbols-outlined text-[18px]">menu_book</span>
                    <span>{cta?.secondaryText}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {videoOpen && (
        <div className="fixed inset-0 z-[80] bg-black/80 flex items-center justify-center p-4" onClick={() => setVideoOpen(false)}>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {videoShowcase?.videoUrl ? (
              <VideoEmbed url={videoShowcase.videoUrl} poster={videoShowcase.thumbnail} />
            ) : (
              <div className="rounded-2xl bg-white p-8 text-center text-slate-700 font-semibold">{videoShowcase?.noVideoText}</div>
            )}
            <button type="button" onClick={() => setVideoOpen(false)} className="mt-3 mx-auto block px-5 py-2 rounded-full bg-white text-slate-800 text-sm font-bold">Kapat</button>
          </div>
        </div>
      )}
      {lightbox !== null && pics[lightbox] && (
        <div className="fixed inset-0 z-[80] bg-black/85 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={pics[lightbox].image} alt={pics[lightbox].caption} className="w-full max-h-[80vh] object-contain rounded-2xl" />
            <figcaption className="mt-3 flex items-center justify-between text-white text-sm">
              <button type="button" onClick={() => setLightbox((lightbox - 1 + pics.length) % pics.length)} className="px-4 py-2 rounded-full bg-white/15">‹ Önceki</button>
              <span>{pics[lightbox].caption}</span>
              <button type="button" onClick={() => setLightbox((lightbox + 1) % pics.length)} className="px-4 py-2 rounded-full bg-white/15">Sonraki ›</button>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};
