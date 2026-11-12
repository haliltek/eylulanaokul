'use client';

import React from 'react';
import Link from 'next/link';
import { ActivitiesPageData } from '@/types/cms';
import { list } from '@/lib/content';

interface ActivitiesViewProps {
  data: ActivitiesPageData;
}

const ICONS = [
  { icon: 'piano', color: 'text-primary' },
  { icon: 'draw', color: 'text-secondary' },
  { icon: 'sports_gymnastics', color: 'text-tertiary' },
  { icon: 'neurology', color: 'text-primary' },
  { icon: 'nature_people', color: 'text-tertiary' },
  { icon: 'theater_comedy', color: 'text-secondary' },
  { icon: 'music_note', color: 'text-primary' },
  { icon: 'smart_toy', color: 'text-secondary' },
  { icon: 'volunteer_activism', color: 'text-tertiary' },
];

export const ActivitiesView: React.FC<ActivitiesViewProps> = ({ data }) => {
  const { header, activities, cta } = data || ({} as ActivitiesPageData);
  const itemsToRender = list(activities).map((act, i) => ({
    title: act.title,
    desc: act.description,
    icon: ICONS[i % ICONS.length].icon,
    iconColor: ICONS[i % ICONS.length].color,
    image: act.image,
    alt: act.title,
  }));

  return (
    <div className="w-full bg-background">
      <main className="w-full pt-4 pb-16 bg-background">
        <div className="flex flex-col w-full relative overflow-hidden">
          {/* Subtle Botanical Ambient Accents */}
          <div className="pointer-events-none absolute -top-16 -right-20 w-80 h-80 rounded-full bg-secondary-fixed/30 blur-3xl -z-10" />
          <div className="pointer-events-none absolute top-1/3 -left-28 w-96 h-96 rounded-full bg-tertiary-fixed/30 blur-3xl -z-10" />
          <div className="pointer-events-none absolute bottom-10 right-4 text-tertiary-fixed-dim/35 opacity-60 -z-10 select-none">
            <span className="material-symbols-outlined text-[180px] rotate-12">nest_eco_leaf</span>
          </div>
          <div className="pointer-events-none absolute top-24 left-10 text-secondary-fixed-dim/30 opacity-40 -z-10 select-none">
            <span className="material-symbols-outlined text-[130px] -rotate-45">psychiatry</span>
          </div>

          <div className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
            {/* Header Section matching visual style */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high/70 text-primary mb-space-sm shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-secondary">palette</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                  {header?.badge}
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-space-xs">
                {header?.title}
              </h1>
              <p className="font-headline-sm text-headline-sm text-secondary font-semibold mb-space-sm">
                {header?.subtitle}
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {header?.description}
              </p>

              {/* Organic Leaf Motif underneath Header */}
              <div className="flex items-center justify-center gap-2 mt-space-sm text-tertiary/60">
                <span className="w-12 h-0.5 rounded-full bg-tertiary-fixed-dim" />
                <span className="material-symbols-outlined text-[20px] text-tertiary">eco</span>
                <span className="w-12 h-0.5 rounded-full bg-tertiary-fixed-dim" />
              </div>
            </div>

            {/* 3x3 Activity Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter lg:gap-space-lg">
              {itemsToRender.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-surface-container-lowest rounded-lg p-space-md shadow-[0_8px_24px_-4px_rgba(22,53,90,0.05),0_2px_6px_-1px_rgba(230,126,34,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(13,59,102,0.12),0_4px_12px_-2px_rgba(230,126,34,0.08)] transition-all duration-300 flex flex-col items-center"
                >
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container mb-space-md relative">
                    {item.image && (
                      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={item.alt} src={item.image} />
                    )}
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <span className={`material-symbols-outlined text-[20px] ${item.iconColor}`}>
                        {item.icon}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight text-center group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-center mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Callout / CTA Banner */}
            <div className="mt-space-xl bg-surface-container rounded-xl p-space-lg lg:p-space-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm">
              <div className="flex flex-col gap-space-xs text-center md:text-left z-10 max-w-xl">
                <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                  {cta?.badge}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {cta?.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {cta?.text}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-space-sm z-10 w-full sm:w-auto">
                <Link
                  className="w-full sm:w-auto px-space-lg py-space-md rounded-full bg-secondary-container text-on-secondary font-label-lg text-label-lg shadow-[0_4px_16px_rgba(252,143,52,0.35)] hover:bg-secondary transition-all text-center flex items-center justify-center gap-space-xs"
                  href={cta?.primaryLink || '/kayit-ve-basvuru'}
                >
                  <span className="material-symbols-outlined text-[20px]">event_available</span>
                  <span>{cta?.primaryText}</span>
                </Link>
                <Link
                  className="w-full sm:w-auto px-space-lg py-space-md rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-primary hover:text-on-primary transition-all text-center flex items-center justify-center gap-space-xs"
                  href={cta?.secondaryLink || '/egitim-modeli/bem'}
                >
                  <span className="material-symbols-outlined text-[20px]">explore</span>
                  <span>{cta?.secondaryText}</span>
                </Link>
              </div>
              {/* Background decorative botanicals for banner */}
              <div className="pointer-events-none absolute -bottom-10 -left-10 text-tertiary-fixed-dim/30 select-none">
                <span className="material-symbols-outlined text-[160px]">nest_eco_leaf</span>
              </div>
              <div className="pointer-events-none absolute -top-10 -right-10 text-secondary-fixed-dim/30 select-none">
                <span className="material-symbols-outlined text-[160px]">psychiatry</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
