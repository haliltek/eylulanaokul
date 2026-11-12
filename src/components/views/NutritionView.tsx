'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NutritionPageData } from '@/types/cms';
import { list } from '@/lib/content';

interface NutritionViewProps {
  data: NutritionPageData;
}

const INFO_ICONS = [
  { icon: 'water_drop', color: 'text-tertiary' },
  { icon: 'garden_cart', color: 'text-secondary' },
  { icon: 'psychology_alt', color: 'text-primary' },
];

export const NutritionView: React.FC<NutritionViewProps> = ({ data }) => {
  const { header, pillars, weeklyMenu, dietitianNote, heroImage, heroImageAlt, heroCard, menuBadge, menuTitle, mealLabels, infoCards } = data;
  const days = list(weeklyMenu);
  const [selectedDayId, setSelectedDayId] = useState<string>(days[0]?.dayId || 'pazartesi');
  const activeDayMenu = days.find((m) => m.dayId === selectedDayId) || days[0] || ({} as (typeof days)[number]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-9 sm:space-y-12">
      <div className="flex flex-col w-full">
        {/* Üst Hero Kutusu */}
        <div className="relative w-full overflow-hidden rounded-lg bg-surface-container-low shadow-sm">
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-8 text-center sm:px-6 sm:py-12">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-secondary-fixed/50 px-4 py-1 text-on-secondary-fixed">
              <span className="material-symbols-outlined text-label-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                eco
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">
                {header?.badge}
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary font-comfortaa">
              {header?.title}
            </h1>
            <p className="mt-2 font-headline-sm text-headline-sm text-secondary-container font-semibold">
              {header?.subtitle}
            </p>
            <p className="mt-3 max-w-2xl font-body-md text-body-md text-on-surface-variant">
              {header?.description}
            </p>

            <div className="relative mt-8 w-full overflow-hidden rounded-lg shadow-md">
              <img
                className="h-72 w-full object-cover object-center sm:h-96 md:h-[420px]"
                alt={heroImageAlt}
                src={heroImage}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800';
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-DEFAULT bg-surface-container-lowest/90 px-4 py-2.5 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:px-6 sm:py-3.5">
                <div className="flex items-center gap-3 text-left">
                  <span className="material-symbols-outlined text-primary text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    restaurant
                  </span>
                  <div>
                    <p className="font-label-md text-label-md text-primary font-bold">
                      {heroCard?.title}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {heroCard?.text}
                    </p>
                  </div>
                </div>
                <span className="hidden rounded-full bg-tertiary-fixed px-3 py-1 font-label-sm text-label-sm text-on-tertiary-fixed-variant sm:inline-block font-bold">
                  {heroCard?.badge}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4'lü Kart Izgarası */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list(pillars).map((pil, idx) => {
              const iconMap = ['spa', 'nutrition', 'soup_kitchen', 'favorite'];
              const bgMap = [
                'bg-secondary-fixed/40 text-secondary',
                'bg-primary-fixed text-primary',
                'bg-tertiary-fixed/40 text-tertiary',
                'bg-secondary-fixed/40 text-secondary-container',
              ];
              const icon = (pil as { icon?: string }).icon || iconMap[idx % 4];
              const iconClass = bgMap[idx % 4];

              return (
                <div
                  key={pil.id || idx}
                  className="group flex flex-col items-center rounded-lg bg-surface-container-lowest p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${iconClass} transition-transform duration-200 group-hover:scale-110`}>
                    <span className="material-symbols-outlined text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {icon}
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {pil.title}
                  </h2>
                  <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                    {pil.desc}
                  </p>
                </div>
              );
            })}
        </div>

        {/* Haftalık Yemek Menüsü Bölümü */}
        <div className="mt-8 rounded-lg bg-surface-container-lowest p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 border-b border-surface-container-high pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider">
                  {menuBadge}
                </span>
              </div>
              <h3 className="mt-1 font-headline-md text-headline-md text-primary font-bold">
                {menuTitle}
              </h3>
            </div>
            {/* Gün Sekmeleri */}
            <div className="flex flex-wrap gap-1.5 rounded-full bg-surface-container-low p-1.5">
              {days.map((d) => (
                <button
                  key={d.dayId}
                  onClick={() => setSelectedDayId(d.dayId)}
                  className={`rounded-full px-4 py-1.5 font-label-md text-label-md transition-all duration-150 ${
                    selectedDayId === d.dayId
                      ? 'bg-primary text-on-primary shadow-xs font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {d.dayName}
                </button>
              ))}
            </div>
          </div>

          {/* Menü Detayı */}
          <div className="mt-6 space-y-4">
            {/* Kahvaltı */}
            <div className="flex flex-col gap-2 rounded-lg bg-surface-container-low p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
              <div className="flex w-36 shrink-0 items-center gap-2 text-primary">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed/50 text-secondary">
                  <span className="material-symbols-outlined text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    bakery_dining
                  </span>
                </div>
                <span className="font-headline-sm text-label-lg font-bold text-primary">{mealLabels?.breakfast}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-body-md text-body-md text-on-surface">
                  {activeDayMenu.breakfast}
                </p>
              </div>
              <span className="self-start rounded-full bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant sm:self-center font-medium">
                {activeDayMenu.breakfastTime}
              </span>
            </div>

            {/* Öğle Yemeği */}
            <div className="flex flex-col gap-2 rounded-lg bg-surface-container-low p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
              <div className="flex w-36 shrink-0 items-center gap-2 text-primary">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-fixed/50 text-tertiary">
                  <span className="material-symbols-outlined text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    lunch_dining
                  </span>
                </div>
                <span className="font-headline-sm text-label-lg font-bold text-primary">{mealLabels?.lunch}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-body-md text-body-md text-on-surface">
                  {activeDayMenu.lunch}
                </p>
              </div>
              <span className="self-start rounded-full bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant sm:self-center font-medium">
                {activeDayMenu.lunchTime}
              </span>
            </div>

            {/* İkindi */}
            <div className="flex flex-col gap-2 rounded-lg bg-surface-container-low p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
              <div className="flex w-36 shrink-0 items-center gap-2 text-primary">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    cookie
                  </span>
                </div>
                <span className="font-headline-sm text-label-lg font-bold text-primary">{mealLabels?.snack}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-body-md text-body-md text-on-surface">
                  {activeDayMenu.snack}
                </p>
              </div>
              <span className="self-start rounded-full bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant sm:self-center font-medium">
                {activeDayMenu.snackTime}
              </span>
            </div>
          </div>

          {/* Özel Diyet & Alerjen Hassasiyeti Alt Barı */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-lg bg-surface-container-low px-5 py-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-fixed text-secondary">
                <span className="material-symbols-outlined text-headline-sm">no_food</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-primary font-bold">
                  {dietitianNote?.title}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {dietitianNote?.content}
                </p>
              </div>
            </div>
            <Link
              href={dietitianNote?.buttonLink || '/iletisim'}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary-container px-5 py-2 font-label-md text-label-md text-on-secondary shadow-sm transition-all duration-150 hover:bg-secondary hover:shadow"
            >
              <span>{dietitianNote?.buttonText}</span>
              <span className="material-symbols-outlined text-label-md">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* En Alttaki Bilgi Kartları */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {list(infoCards).map((c, i) => (
            <div key={c.id || i} className="relative overflow-hidden rounded-lg bg-surface-container-lowest p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-headline-md ${INFO_ICONS[i % INFO_ICONS.length].color}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                  {INFO_ICONS[i % INFO_ICONS.length].icon}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">{c.title}</h3>
              </div>
              <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
