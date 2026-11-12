'use client';

import React from 'react';
import Link from 'next/link';
import { AboutPageData } from '@/types/cms';
import { list, unquote } from '@/lib/content';

interface AboutViewProps {
  data: AboutPageData;
}

/** Okul binası fotoğrafı: /images/okul-bina.jpg dosyası varsa gösterilir, yoksa hiç yer kaplamaz. */
const SchoolPhoto: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [ok, setOk] = React.useState(true);
  if (!ok) return null;
  return (
    <div className="relative w-full mb-6 lg:mb-10">
      <div className="relative rounded-3xl overflow-hidden shadow-md aspect-[16/8] sm:aspect-[16/6]">
        <img src={src} alt={alt} className="w-full h-full object-cover" onError={() => setOk(false)} />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background to-transparent" />
      </div>
    </div>
  );
};

const STAT_ICONS = ['workspace_premium', 'meeting_room', 'child_care', 'supervisor_account'];
const VALUE_ICONS = ['favorite', 'visibility', 'volunteer_activism', 'spa', 'shield_with_house'];

export const AboutView: React.FC<AboutViewProps> = ({ data }) => {
  const { header, stats, values, valuesTitle, showcase } = data || ({} as AboutPageData);

  return (
    <div className="w-full bg-background">
      <main className="w-full bg-background">
        <div className="flex flex-col w-full">
          {/* Subtle organic decorative elements */}
          <div className="relative w-full overflow-hidden py-space-xl lg:py-24">
            {/* Ambient botanical blur backdrops */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-secondary-fixed/25 rounded-full blur-3xl opacity-70" />
            <div className="pointer-events-none absolute top-1/3 -right-24 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl opacity-60" />
            <div className="pointer-events-none absolute bottom-10 -left-20 w-80 h-80 bg-primary-fixed/20 rounded-full blur-3xl opacity-60" />

            <div className="relative max-w-6xl mx-auto px-margin-mobile lg:px-margin flex flex-col items-center">
              {header?.heroImage && <SchoolPhoto src={header.heroImage} alt={header.heroImageAlt} />}
              {/* Overline Tag */}
              <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/60 backdrop-blur-sm text-primary mb-4 shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-secondary">psychiatry</span>
                <span className="font-label-sm text-label-sm tracking-wider uppercase">
                  {header?.badge}
                </span>
              </div>

              {/* Main Heading Area */}
              <div className="max-w-3xl text-center flex flex-col items-center">
                <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-2">
                  {header?.title}
                </h1>
                <p className="font-headline-sm text-headline-sm text-secondary font-bold mb-6 tracking-normal">
                  {header?.subtitle}
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-center max-w-2xl">
                  {header?.description}
                </p>
              </div>

              {/* Stats Grid (4 Cards) */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 mb-10 sm:mb-16">
                {list(stats).map((st, i) => (
                  <div key={st.id || i} className="bg-surface-container-lowest rounded-2xl p-2.5 sm:p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl border border-secondary/40 bg-secondary-fixed/20 flex items-center justify-center text-secondary mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[22px] sm:text-[30px]">{STAT_ICONS[i % STAT_ICONS.length]}</span>
                    </div>
                    <span className="font-headline-md text-base sm:text-headline-md text-primary font-extrabold mb-0.5 sm:mb-1">{st.value}</span>
                    <span className="font-label-md text-[10px] sm:text-label-md leading-tight text-on-surface-variant font-medium">{st.label}</span>
                  </div>
                ))}
              </div>

              {/* Values Section */}
              <div className="w-full flex flex-col items-center mb-12 sm:mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-[2px] bg-secondary/30 rounded-full" />
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">{valuesTitle}</h2>
                  <span className="w-8 h-[2px] bg-secondary/30 rounded-full" />
                </div>

                {/* 5 Value Cards */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-5">
                  {list(values).map((v, i) => (
                    <div key={v.id || i} className="bg-surface-container-lowest rounded-2xl p-2 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl border border-secondary/40 bg-secondary-fixed/20 flex items-center justify-center text-secondary mb-2 sm:mb-4">
                        <span className="material-symbols-outlined text-[22px] sm:text-[28px]">{VALUE_ICONS[i % VALUE_ICONS.length]}</span>
                      </div>
                      <h3 className="font-headline-sm text-[11px] sm:text-headline-sm leading-tight text-primary mb-0.5 sm:mb-1">{v.title}</h3>
                      <p className="font-body-sm text-[10px] leading-tight sm:text-body-sm text-on-surface-variant">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Quote & Visual Showcase (Bottom Section) */}
              <div className="w-full relative rounded-3xl bg-surface-container-lowest overflow-hidden shadow-xl">
                {/* Botanical Organic Leaf Background Decoration */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 text-tertiary-fixed-dim/20">
                  <span className="material-symbols-outlined text-[260px] select-none">nest_eco_leaf</span>
                </div>
                <div className="pointer-events-none absolute -top-12 -left-12 text-secondary-fixed-dim/20 rotate-45">
                  <span className="material-symbols-outlined text-[220px] select-none">psychiatry</span>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center">
                  {/* Image Container (Child holding leaf) */}
                  <div className="lg:col-span-6 relative h-[300px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center"
                      alt={showcase?.imageAlt}
                      src={showcase?.image}
                    />
                    <div className="absolute inset-0 max-sm:bg-gradient-to-l sm:bg-gradient-to-t lg:bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent opacity-80 lg:opacity-40" />
                  </div>

                  {/* Quote & Inspiration Content */}
                  <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-start relative z-10 max-sm:absolute max-sm:inset-y-0 max-sm:right-0 max-sm:w-1/2 max-sm:p-3 max-sm:items-center">
                    <blockquote className="font-headline-lg text-headline-lg max-sm:text-[16px] max-sm:italic max-sm:text-center max-sm:mb-0 text-primary tracking-tight leading-snug mb-6 font-bold">
                      “{unquote(showcase?.quote)}”
                    </blockquote>
                    <div className="max-sm:hidden w-16 h-1 bg-secondary rounded-full mb-6" />
                    <p className="max-sm:hidden font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
                      {showcase?.description}
                    </p>
                    <div className="max-sm:hidden flex flex-wrap items-center gap-4">
                      <Link
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary-container text-on-secondary font-label-md text-label-md shadow-[0_4px_16px_rgba(252,143,52,0.35)] hover:bg-secondary hover:shadow-[0_6px_20px_rgba(148,74,0,0.4)] transition-all"
                        href={showcase?.primaryButtonLink || '/kayit-ve-basvuru'}
                      >
                        <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                        <span>{showcase?.primaryButtonText}</span>
                      </Link>
                      <Link
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high text-primary font-label-md text-label-md hover:bg-surface-container-highest transition-all"
                        href={showcase?.secondaryButtonLink || '/egitim-modeli/bem'}
                      >
                        <span>{showcase?.secondaryButtonText}</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobilde açıklama ve butonlar (masaüstünde görselin yanında görünür) */}
              <div className="sm:hidden w-full mt-4 space-y-3 text-center">
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{showcase?.description}</p>
                <div className="flex flex-col gap-2">
                  <Link href={showcase?.primaryButtonLink || '/kayit-ve-basvuru'} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary-container text-on-secondary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                    <span>{showcase?.primaryButtonText}</span>
                  </Link>
                  <Link href={showcase?.secondaryButtonLink || '/egitim-modeli/bem'} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-container-high text-primary font-label-md text-label-md">
                    <span>{showcase?.secondaryButtonText}</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
