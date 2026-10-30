'use client';

import React from 'react';
import Link from 'next/link';
import { HomePageData } from '@/types/cms';

interface HomeViewProps {
  data: HomePageData;
}

export const HomeView: React.FC<HomeViewProps> = ({ data }) => {
  const { hero } = data;

  return (
    <div className="relative overflow-hidden">
      {/* BEGIN: MainContent */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-9 sm:space-y-12">
        {/* BEGIN: HeroSection */}
        <section className="relative hero-mask bg-amber-50/50 border border-amber-100/70" data-purpose="hero-banner">
          {/* Background Image with Gradient Overlay */}
          <div className="relative w-full min-h-[460px] md:min-h-[500px] lg:min-h-[530px] flex items-center overflow-hidden">
            {/* Background classroom girl image */}
            <div className="absolute inset-0 z-0">
              <img
                alt={hero?.heroImageAlt || "Eylül Çocuk Akademisi'nde mutlu öğrenci"}
                className="w-full h-full object-cover object-right sm:object-center transform scale-105"
                src={hero?.heroImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuAqqBvvgnitjIqoyH1pgnXbj3o4-F3EBt82a3u3eV1xvAXVhj6tXut0hX99r3X7k_NL9HykxwyoMAfDckVWNsua-e_pXcB3R84YrYxEZsoajqTAQxZT2l7p_1kSPuizUpKsEFIGHQbrMYEY_QZhoG4pm2RfCOqHIRe9NRR4maYaukvni2me_eE2Pj1a4XRvgH6ZiN9V771zsExQa-dWdT3CSSFClq1DC-CDQukG6_6r6u5t4Je3cqAu"}
              />
              {/* Gentle cream/white gradient mask favoring the left side for crisp text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50/95 via-amber-50/85 to-transparent sm:via-amber-50/60 sm:to-transparent" />
              {/* Soft bottom blur transition */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/40 to-transparent" />
            </div>

            {/* Hero Text Content Container */}
            <div className="relative z-10 max-w-xl lg:max-w-2xl px-6 sm:px-12 py-10 sm:py-16">
              {/* Decorative Quote Tagline */}
              <div className="mb-4">
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-brand-navy leading-[1.2]">
                  <span className="block italic font-sans text-brand-blue font-black">“Güvenle</span>
                  <span className="block italic font-sans text-brand-blue font-black ml-4 sm:ml-6">Bugüne,</span>
                  <span className="block italic font-sans text-brand-blue font-black">Umutla</span>
                  <span className="block italic font-sans text-brand-blue font-black ml-4 sm:ml-6">Yarına...”</span>
                </h1>
              </div>

              {/* Description paragraph */}
              <p className="text-slate-700 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-md mb-8">
                {hero?.description || 'Sevgi, ilgi ve özenle her çocuğun potansiyelini destekleyen bütüncül bir eğitim yaklaşımı.'}
              </p>

              {/* Call to Action */}
              <div>
                <Link
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm sm:text-base font-bold text-white bg-brand-accent hover:bg-brand-orange shadow-lg shadow-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/40 transition-all duration-200 transform hover:-translate-y-0.5"
                  href={hero?.ctaPrimaryLink || '/okulumuz'}
                >
                  {hero?.ctaPrimaryText || 'Okulumuzu Keşfedin'}
                </Link>
              </div>
            </div>

            {/* Optional soft leaf badge floating on right top edge */}
            <div className="absolute top-6 right-8 hidden lg:block opacity-60">
              <svg className="w-14 h-14 text-white/90 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </div>
          </div>
        </section>
        {/* END: HeroSection */}

        {/* BEGIN: CorePillarsFeatures */}
        {/* 5 Clean white pillar cards with outline icons and 2-line titles */}
        <section aria-label="Eğitim Yaklaşımı ve Ayrıcalıklarımız" className="py-2">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
            {/* Pillar 1: BEM Modeli */}
            <Link
              href="/egitim-modeli/bem"
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-amber-200 transition-all duration-200 group"
            >
              <div className="w-13 h-13 sm:w-14 sm:h-14 mb-3 flex items-center justify-center text-brand-blue group-hover:scale-105 transition-transform duration-200">
                {/* Graduation / Crest Icon */}
                <svg className="w-10 h-10 stroke-current" fill="none" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path d="M12 3L2 8l10 5 10-5-10-5zm0 8.5L5 8.7V14c0 3.87 3.13 7 7 7s7-3.13 7-7V8.7l-7 2.8z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="13.5" fill="none" r="2.5" strokeWidth="1.4" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-brand-navy leading-snug">
                BEM<br />
                <span className="font-bold text-[11px] sm:text-xs text-slate-700">Bütünleştirilmiş Eğitim Modeli</span>
              </h3>
            </Link>

            {/* Pillar 2: All Day English */}
            <Link
              href="/egitim-modeli/all-day-english"
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-amber-200 transition-all duration-200 group"
            >
              <div className="w-13 h-13 sm:w-14 sm:h-14 mb-3 flex items-center justify-center text-brand-blue group-hover:scale-105 transition-transform duration-200">
                {/* Speech bubbles / bilingual icon */}
                <svg className="w-10 h-10 stroke-current" fill="none" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-brand-navy leading-snug">
                All Day<br />
                <span className="font-bold text-[11px] sm:text-xs text-slate-700">English</span>
              </h3>
            </Link>

            {/* Pillar 3: İlkokula Hazırlık */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-amber-200 transition-all duration-200 group">
              <div className="w-13 h-13 sm:w-14 sm:h-14 mb-3 flex items-center justify-center text-brand-blue group-hover:scale-105 transition-transform duration-200">
                {/* Learning Child / Book Icon */}
                <svg className="w-10 h-10 stroke-current" fill="none" strokeWidth="1.6" viewBox="0 0 24 24">
                  <circle cx="12" cy="6" r="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 11c-3.5 0-6 2-6 5v2h12v-2c0-3-2.5-5-6-5z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 18l-2 3h16l-2-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-brand-navy leading-snug">
                İlkokula<br />
                <span className="font-bold text-[11px] sm:text-xs text-slate-700">Hazırlık</span>
              </h3>
            </div>

            {/* Pillar 4: Zengin Etkinlik Dünyası */}
            <Link
              href="/etkinlikler"
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-amber-200 transition-all duration-200 group"
            >
              <div className="w-13 h-13 sm:w-14 sm:h-14 mb-3 flex items-center justify-center text-brand-blue group-hover:scale-105 transition-transform duration-200">
                {/* Activity / Shapes / Toys Icon */}
                <svg className="w-10 h-10 stroke-current" fill="none" strokeWidth="1.6" viewBox="0 0 24 24">
                  <rect height="15" rx="2" strokeLinecap="round" strokeLinejoin="round" width="18" x="3" y="6" />
                  <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="8" cy="15" fill="currentColor" r="1.5" />
                  <path d="M14 14l2 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-brand-navy leading-snug">
                Zengin<br />
                <span className="font-bold text-[11px] sm:text-xs text-slate-700">Etkinlik Dünyası</span>
              </h3>
            </Link>

            {/* Pillar 5: Doğa ile Öğrenme */}
            <div className="col-span-2 md:col-span-1 bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md border border-slate-100 hover:border-amber-200 transition-all duration-200 group">
              <div className="w-13 h-13 sm:w-14 sm:h-14 mb-3 flex items-center justify-center text-brand-blue group-hover:scale-105 transition-transform duration-200">
                {/* Nature & Sprout / Tree Icon */}
                <svg className="w-10 h-10 stroke-current" fill="none" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path d="M12 21V11" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 11c0-4 4-7 8-7 0 5-4 7-8 7z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 15c0-3-3-5-6-5 0 4 3 5 6 5z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-brand-navy leading-snug">
                Doğa ile<br />
                <span className="font-bold text-[11px] sm:text-xs text-slate-700">Öğrenme</span>
              </h3>
            </div>
          </div>
        </section>
        {/* END: CorePillarsFeatures */}

        {/* BEGIN: VideoFeatureCard */}
        <section className="relative rounded-3xl overflow-hidden shadow-lg border border-amber-100" data-purpose="video-highlight-banner">
          <div className="relative w-full h-52 sm:h-64 md:h-72 lg:h-80 group cursor-pointer">
            {/* Classroom Kids Playing Background Image */}
            <img
              alt="Eylül Çocuk Akademisi sınıf içi etkinlikler ve oyun anları"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMJOcMj_5ofmln-7zxjodxrkIggHEPizxtTm6fTxnlJg9orzRErxF4C5ICuonpZmqeFVsCoQN4U8gzVHTAyoWKzH6YVhlZxg2nyUAe7x8QfWnJJHPMtuZyG7g7DBiVPoyzftXbVbzN_TdtqPQIBPLU7VGIZvsWhBlNtYwxeF0QEa68LKcxh3xhE3DrgfO0l31wjXMOFnKZ3aCzvZTY8pmeNzQ1MZ2zu8brUXpubQfpQIsbqyZpma6h"
            />
            {/* Dark and warm gradient overlays for readability and warmth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
            {/* Carousel navigation arrows */}
            <button
              aria-label="Önceki Video"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all backdrop-blur-sm"
              type="button"
            >
              <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </button>
            <button
              aria-label="Sonraki Video"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all backdrop-blur-sm"
              type="button"
            >
              <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </button>
            {/* Center Interactive Video Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/80 hover:bg-white text-brand-orange flex items-center justify-center shadow-xl backdrop-blur-md animate-play transition-transform">
                {/* Triangle Play Icon */}
                <svg className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Video Text Overlay Content */}
            <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 z-10 text-white">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight drop-shadow-md">
                Eylül'de Bir Gün
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 font-medium drop-shadow-sm mt-0.5">
                Okul yaşamımızı keşfedin.
              </p>
            </div>
          </div>
        </section>
        {/* END: VideoFeatureCard */}

        {/* BEGIN: DiscoverySectionTeaser */}
        <section className="relative py-8 sm:py-12 px-4 text-center max-w-3xl mx-auto" data-purpose="discovery-teaser">
          {/* Botanical watercolor leaves framing bottom/sides */}
          <div className="pointer-events-none absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/4 w-36 h-36 opacity-35 hidden sm:block">
            <svg fill="none" viewBox="0 0 100 100">
              <path d="M10,80 Q30,10 80,20 Q60,70 10,80 Z" fill="#E5880B" />
              <path d="M20,90 Q40,30 90,40" stroke="#C57004" strokeWidth="2" />
            </svg>
          </div>
          <div className="pointer-events-none absolute right-0 bottom-0 translate-x-1/3 translate-y-1/4 w-40 h-40 opacity-40 hidden sm:block">
            <svg fill="none" viewBox="0 0 100 100">
              <path d="M80,80 Q20,60 30,10 Q80,20 80,80 Z" fill="#2A7276" />
              <path d="M60,90 Q40,40 10,30" stroke="#1F575A" strokeWidth="2" />
            </svg>
          </div>
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            Her Çocuk Bir Keşif
          </h2>
          {/* Turkish description paragraph */}
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-7">
            Çocuklarımızın doğuştan gelen merak duygusunu besleyerek, deneyimleyerek öğrenmelerini ve kendi yeteneklerini güvenle keşfetmelerini sağlıyoruz. Uzman eğitim kadromuz ve doğayla iç içe öğrenme alanlarımızla geleceğe sevgiyle hazırlanıyoruz.
          </p>
          {/* Action Button */}
          <div>
            <Link
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-brand-accent hover:bg-brand-orange shadow-md shadow-brand-accent/25 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              href="/egitim-modeli/bem"
            >
              Eğitim Modelimizi İnceleyin
            </Link>
          </div>
        </section>
        {/* END: DiscoverySectionTeaser */}
      </main>
      {/* END: MainContent */}
    </div>
  );
};
