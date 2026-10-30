'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NutritionPageData } from '@/types/cms';

interface NutritionViewProps {
  data: NutritionPageData;
}

export const NutritionView: React.FC<NutritionViewProps> = ({ data }) => {
  const { header, pillars, weeklyMenu, dietitianNote } = data;
  const [selectedDayId, setSelectedDayId] = useState<string>('pazartesi');

  const daysList = [
    { id: 'pazartesi', name: 'Pazartesi' },
    { id: 'sali', name: 'Salı' },
    { id: 'carsamba', name: 'Çarşamba' },
    { id: 'persembe', name: 'Perşembe' },
    { id: 'cuma', name: 'Cuma' },
  ];

  const activeDayMenu =
    weeklyMenu?.find((m) => m.dayId === selectedDayId) || weeklyMenu?.[0] || {
      dayId: 'pazartesi',
      dayName: 'Pazartesi',
      breakfast: 'Zeytin, peynir, domates, salatalık, yumurta, tam tahıl ekmeği',
      breakfastTime: '08:45 - 09:30',
      lunch: 'Sebze çorbası, zeytinyağlı taze fasulye & bulgur pilavı, ev yapımı yoğurt, mevsim meyvesi',
      lunchTime: '12:00 - 13:00',
      snack: 'Günlük ılık süt, taze elma dilimleri, yulaflı fındıklı kurabiye',
      snackTime: '15:30 - 16:00',
    };

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
                {header?.badge || 'Eylül Mutfak Atölyesi'}
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary font-comfortaa">
              {header?.title || 'Doğal ve Dengeli Beslenme'}
            </h1>
            <p className="mt-2 font-headline-sm text-headline-sm text-secondary-container font-semibold">
              {header?.subtitle || 'Sağlıklı Çocuklar, Mutlu Yarınlar'}
            </p>
            <p className="mt-3 max-w-2xl font-body-md text-body-md text-on-surface-variant">
              {header?.description ||
                'Okulumuzda sunulan her öğün; uzman çocuk diyetisyenleri kontrolünde, yerel üreticilerden temin edilen taze ve mevsimsel besinlerle, mutfağımızda sevgiyle hazırlanır.'}
            </p>

            <div className="relative mt-8 w-full overflow-hidden rounded-lg shadow-md">
              <img
                className="h-72 w-full object-cover object-center sm:h-96 md:h-[420px]"
                alt="Özel Eylül Anaokulu doğal ve dengeli beslenme saati"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDPtPuOkoCFkx4vkNoJTLA0Ul1IQs_atMo-Mh2b-M4DK981siYIn5sPXDE7Z41c0lJrDUHSNWOtEC6jQE1mQAv-iYOxP69s4nGmJuMqRqamlIxH246wiGWbnCkw4h6tS-2on-7k5EygAAFeZagzxym3RSx0XZE11hkLk3Mc37UmdKrH5Z42tg_2DUENN6ADUzHkb8rP80gItK_k1kIvelwKiMCtZ6LyHO6MzPYMxMMSDKbPqUgZf-o"
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
                      GDO'suz &amp; Katkısız Mutfak Standartları
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Çocuklarımızın günlük enerji ve mikro-besin gereksinimlerine göre kalibre edilmiş öğünler.
                    </p>
                  </div>
                </div>
                <span className="hidden rounded-full bg-tertiary-fixed px-3 py-1 font-label-sm text-label-sm text-on-tertiary-fixed-variant sm:inline-block font-bold">
                  %100 Doğal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4'lü Kart Izgarası */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars && pillars.length > 0 ? (
            pillars.map((pil, idx) => {
              const iconMap = ['spa', 'nutrition', 'soup_kitchen', 'favorite'];
              const bgMap = [
                'bg-secondary-fixed/40 text-secondary',
                'bg-primary-fixed text-primary',
                'bg-tertiary-fixed/40 text-tertiary',
                'bg-secondary-fixed/40 text-secondary-container',
              ];
              const icon = pil.icon || iconMap[idx % 4];
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
            })
          ) : (
            <>
              <div className="group flex flex-col items-center rounded-lg bg-surface-container-lowest p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-fixed/40 text-secondary transition-transform duration-200 group-hover:scale-110">
                  <span className="material-symbols-outlined text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>
                    spa
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-primary font-bold">Taze ve Doğal</h2>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                  Mevsimine uygun organik sebze ve meyveler, soğuk sıkım zeytinyağı ve taze süt ürünleri kullanılır.
                </p>
              </div>
              <div className="group flex flex-col items-center rounded-lg bg-surface-container-lowest p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-fixed text-primary transition-transform duration-200 group-hover:scale-110">
                  <span className="material-symbols-outlined text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>
                    nutrition
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-primary font-bold">Diyetisyen Kontrolü</h2>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                  Aylık kalorik ve besin dengesi uzman çocuk beslenme danışmanımız tarafından onaylanır.
                </p>
              </div>
              <div className="group flex flex-col items-center rounded-lg bg-surface-container-lowest p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-tertiary-fixed/40 text-tertiary transition-transform duration-200 group-hover:scale-110">
                  <span className="material-symbols-outlined text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>
                    soup_kitchen
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-primary font-bold">Günlük Taze Pişirim</h2>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                  Endüstriyel hazır gıda veya donmuş ürün kullanılmaz; okul mutfağımızda her sabah taptaze pişirilir.
                </p>
              </div>
              <div className="group flex flex-col items-center rounded-lg bg-surface-container-lowest p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-fixed/40 text-secondary-container transition-transform duration-200 group-hover:scale-110">
                  <span className="material-symbols-outlined text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-primary font-bold">Dengeli Menü</h2>
                <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                  Kahvaltı, öğle yemeği ve ikindi atıştırmalığı ile 3 öğün zengin beslenme düzeni uygulanır.
                </p>
              </div>
            </>
          )}
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
                  Diyetisyen Onaylı
                </span>
              </div>
              <h3 className="mt-1 font-headline-md text-headline-md text-primary font-bold">
                Haftalık Yemek Menüsü
              </h3>
            </div>
            {/* Gün Sekmeleri */}
            <div className="flex flex-wrap gap-1.5 rounded-full bg-surface-container-low p-1.5">
              {daysList.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDayId(d.id)}
                  className={`rounded-full px-4 py-1.5 font-label-md text-label-md transition-all duration-150 ${
                    selectedDayId === d.id
                      ? 'bg-primary text-on-primary shadow-xs font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {d.name}
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
                <span className="font-headline-sm text-label-lg font-bold text-primary">Kahvaltı</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-body-md text-body-md text-on-surface">
                  {activeDayMenu.breakfast}
                </p>
              </div>
              <span className="self-start rounded-full bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant sm:self-center font-medium">
                {activeDayMenu.breakfastTime || '08:45 - 09:30'}
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
                <span className="font-headline-sm text-label-lg font-bold text-primary">Öğle Yemeği</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-body-md text-body-md text-on-surface">
                  {activeDayMenu.lunch}
                </p>
              </div>
              <span className="self-start rounded-full bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant sm:self-center font-medium">
                {activeDayMenu.lunchTime || '12:00 - 13:00'}
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
                <span className="font-headline-sm text-label-lg font-bold text-primary">İkindi</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-body-md text-body-md text-on-surface">
                  {activeDayMenu.snack}
                </p>
              </div>
              <span className="self-start rounded-full bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant sm:self-center font-medium">
                {activeDayMenu.snackTime || '15:30 - 16:00'}
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
                  {dietitianNote?.title || 'Özel Diyet & Alerjen Hassasiyeti'}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {dietitianNote?.content ||
                    'Alerji ve özel beslenme ihtiyaçları için bireysel planlama yapılır.'}
                </p>
              </div>
            </div>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary-container px-5 py-2 font-label-md text-label-md text-on-secondary shadow-sm transition-all duration-150 hover:bg-secondary hover:shadow"
            >
              <span>Diyetisyen İle Görüşün</span>
              <span className="material-symbols-outlined text-label-md">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* En Alttaki 3 Bilgi Kartı */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg bg-surface-container-lowest p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-headline-md text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                water_drop
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Doğal Sıvı Alımı</h3>
            </div>
            <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant">
              Okulumuzda paketli şekerli meyve suları ve asitli içecekler tüketilmez. Gün boyunca taze filtrelenmiş su, ayran ve bitki çayları sunulur.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-surface-container-lowest p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-headline-md text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                garden_cart
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Ekolojik Bahçe</h3>
            </div>
            <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant">
              Çocuklarımız anaokulu bahçemizdeki bostanda kendi nane, çilek ve domateslerini yetiştirerek topraktan sofraya gıda farkındalığı kazanırlar.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-surface-container-lowest p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-headline-md text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                psychology_alt
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Pozitif Sofra Kültürü</h3>
            </div>
            <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant">
              Yemek saatleri baskıdan uzak, arkadaşça paylaşım ve sofra adabı kazanım anlarıdır. Kendi porsiyonunu seçme ve deneme cesareti teşvik edilir.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
