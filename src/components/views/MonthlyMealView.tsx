'use client';

import React, { useState } from 'react';
import { list } from '@/lib/content';
import type { mealsContent } from '@/data/content/meals';

type MealsData = typeof mealsContent;
const FEATURE_ICONS = ['eco', 'health_and_safety', 'event_available', 'soup_kitchen'];

export const MonthlyMealView: React.FC<{ data: MealsData }> = ({ data }) => {
  const weeks = list(data?.weeks);
  const [weekIdx, setWeekIdx] = useState(0);
  const [dayIdx, setDayIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const week = weeks[Math.min(weekIdx, weeks.length - 1)];
  const days = list(week?.days);
  const today = days[Math.min(dayIdx, days.length - 1)];
  const L = data?.mealLabels;
  const meals = today
    ? [
        { icon: 'bakery_dining', label: L?.breakfast, time: L?.breakfastTime, text: today.breakfast },
        { icon: 'restaurant', label: L?.lunch, time: L?.lunchTime, text: today.lunch },
        { icon: 'nutrition', label: L?.snack, time: L?.snackTime, text: today.snack },
      ].filter((m) => m.text)
    : [];

  return (
    <div className="w-full bg-background min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-16 space-y-6 sm:space-y-8">
        <header>
          <h1 className="font-headline-xl text-3xl sm:text-headline-xl text-primary tracking-tight leading-tight">{data?.title}</h1>
          <p className="font-headline-sm text-lg sm:text-headline-sm text-secondary font-bold mt-1">{data?.subtitle}</p>
        </header>

        {data?.coverImage && (
          <div className="relative rounded-3xl overflow-hidden shadow-md aspect-[16/8] sm:aspect-[16/6] bg-surface-container-high">
            <img src={data.coverImage} alt={data.coverImageAlt} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          {list(data?.features).map((f, i) => (
            <div key={f.id || i} className="bg-surface-container-lowest rounded-2xl p-2 sm:p-5 flex flex-col items-center text-center shadow-sm">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl border border-secondary/40 bg-secondary-fixed/20 flex items-center justify-center text-secondary mb-2 sm:mb-3">
                <span className="material-symbols-outlined text-[22px] sm:text-[30px]">{FEATURE_ICONS[i % FEATURE_ICONS.length]}</span>
              </div>
              <span className="text-[10px] sm:text-sm leading-tight font-semibold text-primary">{f.label}</span>
            </div>
          ))}
        </div>

        <section aria-label={data?.menuTitle} className="space-y-4">
          <div className="flex items-end justify-between gap-3 flex-wrap">
            <h2 className="font-headline-md text-xl sm:text-headline-md text-primary tracking-tight">
              {data?.menuTitle}
              {data?.monthLabel && <span className="ml-2 text-secondary">— {data.monthLabel}</span>}
            </h2>
            {weeks.length > 1 && (
              <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Hafta seçimi">
                {weeks.map((w, i) => (
                  <button
                    key={w.id || i}
                    type="button"
                    onClick={() => setWeekIdx(i)}
                    aria-pressed={weekIdx === i}
                    className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-colors cursor-pointer ${
                      weekIdx === i
                        ? 'bg-secondary-container text-on-secondary'
                        : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant/50 hover:text-primary'
                    }`}
                  >
                    {w.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-5 gap-1.5 sm:gap-3" role="tablist" aria-label="Gün seçimi">
            {days.map((d, i) => (
              <button
                key={d.id || i}
                type="button"
                role="tab"
                aria-selected={dayIdx === i}
                onClick={() => setDayIdx(i)}
                className={`py-2.5 sm:py-3 rounded-xl text-[11px] sm:text-sm font-bold transition-all cursor-pointer ${
                  dayIdx === i ? 'bg-primary text-white shadow-md' : 'bg-surface-container-lowest text-primary border border-outline-variant/40 hover:border-primary/40'
                }`}
              >
                {d.dayName}
              </button>
            ))}
          </div>

          <div className="space-y-2.5" role="tabpanel">
            {meals.map((m) => (
              <div key={m.icon} className="flex items-stretch gap-2 sm:gap-3">
                <div className="w-[112px] sm:w-44 shrink-0 bg-surface-container-lowest rounded-xl border border-outline-variant/40 px-2.5 sm:px-4 py-2.5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px] text-secondary">{m.icon}</span>
                  <div className="leading-tight">
                    <div className="text-xs sm:text-sm font-bold text-primary">{m.label}</div>
                    <div className="text-[10px] text-on-surface-variant">{m.time}</div>
                  </div>
                </div>
                <div className="flex-1 bg-surface-container-lowest rounded-xl border border-outline-variant/40 px-3 sm:px-5 py-2.5 flex items-center text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {data?.allergyNote && (
          <div className="flex items-center gap-3 px-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-[26px] text-primary/70">diversity_3</span>
            <p className="text-xs sm:text-sm leading-snug">{data.allergyNote}</p>
          </div>
        )}

        {data?.poster?.file && (
          <div className="text-center">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="text-xs font-semibold text-primary underline underline-offset-4 hover:text-secondary cursor-pointer"
            >
              {data.poster.buttonText}
            </button>
          </div>
        )}

        {modalOpen && data?.poster?.file && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm" onClick={() => setModalOpen(false)}>
            <div className="relative max-w-4xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center text-sm font-semibold transition cursor-pointer"
                aria-label="Kapat"
              >
                ✕
              </button>
              <h3 className="font-headline-sm text-xl text-primary mb-4">{data.poster.modalTitle}</h3>
              {/\.pdf(\?|$)/i.test(data.poster.file) ? (
                <iframe src={data.poster.file} title={data.poster.modalTitle} className="w-full h-[75vh] rounded-xl border border-stone-200" />
              ) : (
                <img src={data.poster.file} alt={data.poster.modalTitle} className="w-full max-h-[75vh] object-contain rounded-xl" />
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
