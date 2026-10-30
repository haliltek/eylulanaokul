'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CampusPageData } from '@/types/cms';

interface CampusViewProps {
  data: CampusPageData;
}

export const CampusView: React.FC<CampusViewProps> = ({ data }) => {
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);
  const { header, virtualTour, facilities, gallery } = data || {};

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
                {header?.badge || 'Fiziksel İmkânlar ve Yerleşke'}
              </span>
            </div>

            {/* Main Title & Subtitle Pair */}
            <div className="space-y-1">
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                {header?.title || 'Okulumuz'}
              </h1>
              <p className="font-headline-md text-headline-md text-secondary-container font-bold">
                {header?.subtitle || 'Güvenli, Sağlıklı ve İlham Veren Bir Ortam'}
              </p>
            </div>

            {/* Descriptive Lead Paragraph */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed pt-space-xs">
              {header?.description ||
                "Eylül Çocuk Akademisi'nde çocuklarımızın güvenle büyümesi, öğrenmesi ve sosyalleşmesi için özenle tasarlanmış, ferah ve doğal ışık alan sınıflarımız, geniş oyun ve keşif alanlarımız bulunmaktadır."}
            </p>
          </section>
          {/* END: Page Header & Introductory Narrative */}

          {/* BEGIN: Campus Gallery Mosaic (4 Curated Photos) */}
          <section className="mt-space-lg w-full relative">
            {/* Background Ambient Glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-gradient-to-r from-secondary-fixed/30 via-tertiary-fixed/20 to-primary-fixed/20 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-stretch">
              {/* 1. Ferah Ahşap Sınıflar */}
              <div className="md:col-span-7 group relative bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={gallery?.[0]?.title || 'Montessori ve Doğal Ahşap Atölyeleri'}
                    src={
                      gallery?.[0]?.image ||
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUEjo9ZUCqHf32UKFjkA5D2wQxvju9qjMX-D_MSPE2QORQFbLCdNZY7u6C8jhkLy3XvDQWo8iJ9pkyPKQS5-3r-y_NAzdX2mlNA1sUsrphVqX_M9hKuI2kXrPqBTYwboAulTXIkrcGAm0h3pajyjECeRqEuXMAhwFlbpoq87qupfDRgWRn-rN0ACRSj6w79BOs4BhXwL0tRnliB70m0cB0Htwvosw54J6XVfj9_dhYNOdGZXyd6ktQ'
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-md text-label-md px-space-md py-1 rounded-full shadow-sm">
                    {gallery?.[0]?.category || 'Doğal Işıklı Sınıflar'}
                  </span>
                </div>
                <div className="p-space-md flex items-center justify-between bg-surface-container-lowest">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      {gallery?.[0]?.title || 'Montessori ve Doğal Ahşap Atölyeleri'}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {gallery?.[0]?.desc ||
                        'Çocuk ergonomisine uygun, tamamen doğal ahşap malzemelerle donatılmış geniş öğrenme alanları.'}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-low text-primary flex-shrink-0 ml-space-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-label-lg">fullscreen</span>
                  </div>
                </div>
              </div>

              {/* 2. Renkli Dinlenme & Okuma Köşesi */}
              <div className="md:col-span-5 group relative bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={gallery?.[1]?.title || 'Sıcak Masal & Oyun Köşesi'}
                    src={
                      gallery?.[1]?.image ||
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwMJCgn6ONAX8QrFWd3YuXmrO7E3u5FWK3Xb545MR2GGXliEjEFhlR7aHtTI9iCxhHCyN88wCP6odSqfPeewCFVxBqYrkwA_ujTL71cNGmd1thiPbKesfqsMYE3LJdg4LiOmFiv0r69YZyE0FomHTo7M4Hapw7VyaP0RcaP708kYLg_Pf159bzU9eEM0INlZ92ABD9832X915nwdU10OmDCalxOh5i1nIgRSFRNaKb2DwqetABr0d3'
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm text-secondary font-label-md text-label-md px-space-md py-1 rounded-full shadow-sm">
                    {gallery?.[1]?.category || 'Okuma & Dinlenme'}
                  </span>
                </div>
                <div className="p-space-md bg-surface-container-lowest">
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {gallery?.[1]?.title || 'Sıcak Masal & Oyun Köşesi'}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {gallery?.[1]?.desc ||
                      'Duygusal rahatlama ve kitap sevgisini pekiştiren yumuşak zeminli okuma alanı.'}
                  </p>
                </div>
              </div>

              {/* 3. Sanat & Üretim Atölyesi */}
              <div className="md:col-span-5 group relative bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={gallery?.[2]?.title || 'Yaratıcı Sanat & Tasarım Alanı'}
                    src={
                      gallery?.[2]?.image ||
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuDiGXd78fKBnSqMEf7jV3gsncuEhdTLbXW25Qvz3veuUd8RltUEpmJQ3XFAooO0YWQPFXL89MAknNYXDBioG6ylW0TAy3UexK83SUpSxCG5FNz957ZFHR3Y0GFCLMTDYI2mQxTqHaXMsQX0FzEAYLHeariuItq4_YeVn5KcB3APoYzDeJcjfyUzSB6XFLqLuShrIWRMuxIoWwqM3b1x7p2bgYCHAQ3jkQeD4cT-Gdmc7QF3FeY1nGE4'
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm text-tertiary font-label-md text-label-md px-space-md py-1 rounded-full shadow-sm">
                    {gallery?.[2]?.category || 'Görsel Sanatlar'}
                  </span>
                </div>
                <div className="p-space-md bg-surface-container-lowest">
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {gallery?.[2]?.title || 'Yaratıcı Sanat & Tasarım Alanı'}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {gallery?.[2]?.desc ||
                      'Boya, seramik ve özgür el sanatları etkinlikleriyle motor becerilerini geliştiren ferah stüdyo.'}
                  </p>
                </div>
              </div>

              {/* 4. Geniş Bahçe & Çocuk Parkı */}
              <div className="md:col-span-7 group relative bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={gallery?.[3]?.title || 'Doğal Çim Bahçe & Oyun Parkı'}
                    src={
                      gallery?.[3]?.image ||
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcVimafQaD2S34RBokdm0KCeZdebZPPUEHhW7eh93oDvxsYe7FTRIv8JMMkK8GE2eJ7iNuyZq6W7YJKdKFWsSHMCqsV2BPLOCt7V98AUERJ2kB-PhU9wESGhOE0n3jiBbQTvAk4JaOmIgBps5juOUULcvIYxth0M8gEEFMsH0F7NYR_9_BuD466vr93xoVe-sxsxlcvTXDIPfyFXUwjvHSyLO3vDhwXSLMMIygtyq_uuYigEV71sxA'
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-sm text-tertiary-container font-label-md text-label-md px-space-md py-1 rounded-full shadow-sm">
                    {gallery?.[3]?.category || 'Açık Hava & Doğa'}
                  </span>
                </div>
                <div className="p-space-md flex items-center justify-between bg-surface-container-lowest">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      {gallery?.[3]?.title || 'Doğal Çim Bahçe & Oyun Parkı'}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {gallery?.[3]?.desc ||
                        'Toprakla temas eden organik tarım bahçesi, güvenli kauçuk zeminli kaydırak ve hareket parkuru.'}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-low text-primary flex-shrink-0 ml-space-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-label-lg">nature_people</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END: Campus Gallery Mosaic */}

          {/* BEGIN: Interactive 360 Virtual Tour Callout Section */}
          <section className="mt-space-lg w-full relative">
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
                      className="material-symbols-outlined text-headline-lg animate-spin"
                      style={{ animationDuration: '12s', fontVariationSettings: "'FILL' 0" }}
                    >
                      360
                    </span>
                    <span className="absolute -bottom-1 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-secondary text-on-secondary">
                      CANLI
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-headline-md text-headline-md text-primary">
                      {virtualTour?.title || 'Sanal Tur İle Okulumuzu Keşfedin'}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                      {virtualTour?.description ||
                        'Okulumuzun iç ve dış tüm mekanlarını 360 derece panoramik görüntü kalitesiyle evinizin konforunda detaylıca inceleyin.'}
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
                    <span className="material-symbols-outlined text-label-lg">view_in_ar</span>
                    <span>{virtualTour?.buttonText || 'Sanal Turu Başlat'}</span>
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
                {/* 1. Randevu Alın */}
                <Link
                  className="flex flex-col items-center justify-center text-center p-space-md rounded-DEFAULT bg-surface-container-lowest hover:bg-surface-bright shadow-sm hover:shadow-md transition-all duration-200 group"
                  href="/kayit-ve-basvuru"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-space-xs">
                    <span className="material-symbols-outlined text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      calendar_month
                    </span>
                  </div>
                  <span className="font-label-lg text-label-lg text-primary group-hover:text-secondary-container transition-colors">
                    Randevu Alın
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 hidden sm:block">
                    Okulu bizzat ziyaret edin
                  </span>
                </Link>

                {/* 2. Tanıtım Kataloğu */}
                <a
                  className="flex flex-col items-center justify-center text-center p-space-md rounded-DEFAULT bg-surface-container-lowest hover:bg-surface-bright shadow-sm hover:shadow-md transition-all duration-200 group"
                  href="/iletisim"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary group-hover:scale-110 transition-transform mb-space-xs">
                    <span className="material-symbols-outlined text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      menu_book
                    </span>
                  </div>
                  <span className="font-label-lg text-label-lg text-primary group-hover:text-secondary-container transition-colors">
                    Tanıtım Kataloğu
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 hidden sm:block">
                    PDF broşürü indirin
                  </span>
                </a>

                {/* 3. Sanal Tur */}
                <button
                  onClick={() => setVirtualTourOpen(true)}
                  className="flex flex-col items-center justify-center text-center p-space-md rounded-DEFAULT bg-surface-container-lowest hover:bg-surface-bright shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
                  type="button"
                >
                  <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform mb-space-xs">
                    <span className="material-symbols-outlined text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      tour
                    </span>
                  </div>
                  <span className="font-label-lg text-label-lg text-primary group-hover:text-secondary-container transition-colors">
                    Sanal Tur
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 hidden sm:block">
                    360° interaktif gezi
                  </span>
                </button>

                {/* 4. Sık Sorulan Sorular */}
                <Link
                  className="flex flex-col items-center justify-center text-center p-space-md rounded-DEFAULT bg-surface-container-lowest hover:bg-surface-bright shadow-sm hover:shadow-md transition-all duration-200 group"
                  href="/velilerimiz-icin"
                >
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-space-xs">
                    <span className="material-symbols-outlined text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      help
                    </span>
                  </div>
                  <span className="font-label-lg text-label-lg text-primary group-hover:text-secondary-container transition-colors">
                    Sık Sorulan Sorular
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 hidden sm:block">
                    Merak edilen tüm detaylar
                  </span>
                </Link>
              </div>
            </div>
          </section>
          {/* END: Quick Action Navigation Bottom Bar */}
        </div>
      </main>

      {/* 360 Virtual Tour Modal */}
      {virtualTourOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setVirtualTourOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg"
            >
              ✕
            </button>
            <div className="text-center space-y-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold uppercase tracking-wider">
                360° Panoramik Ziyaret
              </span>
              <h3 className="text-2xl font-black text-primary font-headline-md">
                Eylül Çocuk Akademisi Sanal Turu
              </h3>
              <p className="text-slate-600 text-sm max-w-lg mx-auto">
                Montessori atölyelerimiz, sanat ve masal odalarımız ile yemyeşil bahçemiz 360 derece interaktif gezintiye hazır.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center border-4 border-amber-100">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUEjo9ZUCqHf32UKFjkA5D2wQxvju9qjMX-D_MSPE2QORQFbLCdNZY7u6C8jhkLy3XvDQWo8iJ9pkyPKQS5-3r-y_NAzdX2mlNA1sUsrphVqX_M9hKuI2kXrPqBTYwboAulTXIkrcGAm0h3pajyjECeRqEuXMAhwFlbpoq87qupfDRgWRn-rN0ACRSj6w79BOs4BhXwL0tRnliB70m0cB0Htwvosw54J6XVfj9_dhYNOdGZXyd6ktQ"
                alt="360 Sanal Tur Önizleme"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col items-center justify-center text-white">
                <span className="material-symbols-outlined text-6xl text-secondary-container animate-bounce">
                  360
                </span>
                <p className="font-bold text-base mt-2">
                  Gerçek Zamanlı 360° Sanal Tur Modülü
                </p>
                <Link
                  href="/kayit-ve-basvuru"
                  onClick={() => setVirtualTourOpen(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-secondary-container text-white font-bold text-xs uppercase tracking-wider hover:bg-secondary transition-colors"
                >
                  Okulda Canlı Tanıtım Randevusu Alın
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
