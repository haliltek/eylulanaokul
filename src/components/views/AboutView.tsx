'use client';

import React from 'react';
import Link from 'next/link';
import { AboutPageData } from '@/types/cms';

interface AboutViewProps {
  data: AboutPageData;
}

export const AboutView: React.FC<AboutViewProps> = ({ data }) => {
  const { header, stats, values, showcase } = data || {};

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
              {/* Overline Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/60 backdrop-blur-sm text-primary mb-4 shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-secondary">psychiatry</span>
                <span className="font-label-sm text-label-sm tracking-wider uppercase">
                  {header?.badge || 'Biz Kimiz?'}
                </span>
              </div>

              {/* Main Heading Area */}
              <div className="max-w-3xl text-center flex flex-col items-center">
                <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-2">
                  {header?.title || 'Eylül Çocuk Akademisi'}
                </h1>
                <p className="font-headline-sm text-headline-sm text-secondary font-bold mb-6 tracking-normal">
                  Daha Mutlu Çocuklar, Daha Güçlü Yarınlar
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-center max-w-2xl">
                  {header?.description ||
                    'Eylül Çocuk Akademisi, 3-6 yaş grubu çocuklar için sevgi, ilgi ve özenle tasarlanmış bütüncül bir eğitim ortamıdır. Çocuğun bireysel özelliklerini dikkate alan, oyunla öğrenmeyi merkeze alan ve geleceğe güvenli adımlarla hazırlayan bir yaklaşımla eğitim veririz.'}
                </p>
              </div>

              {/* Stats Grid (4 Cards) */}
              <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-12 mb-16">
                {/* Stat Card 1 */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      workspace_premium
                    </span>
                  </div>
                  <span className="font-headline-md text-headline-md text-primary font-extrabold mb-1">
                    {stats?.[0]?.value || '12+'}
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                    {stats?.[0]?.label || 'Yıllık Deneyim'}
                  </span>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-full bg-primary-fixed/60 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[30px]">meeting_room</span>
                  </div>
                  <span className="font-headline-md text-headline-md text-primary font-extrabold mb-1">
                    {stats?.[1]?.value || '4'}
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                    {stats?.[1]?.label || 'Sınıf'}
                  </span>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-full bg-tertiary-fixed/60 flex items-center justify-center text-tertiary mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      child_care
                    </span>
                  </div>
                  <span className="font-headline-md text-headline-md text-primary font-extrabold mb-1">
                    {stats?.[2]?.value || '3-6'}
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                    {stats?.[2]?.label || 'Yaş'}
                  </span>
                </div>

                {/* Stat Card 4 */}
                <div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[30px]">supervisor_account</span>
                  </div>
                  <span className="font-headline-md text-headline-md text-primary font-extrabold mb-1">
                    {stats?.[3]?.value || 'Uzman'}
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                    {stats?.[3]?.label || 'Kadro'}
                  </span>
                </div>
              </div>

              {/* Values Section */}
              <div className="w-full flex flex-col items-center mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-[2px] bg-secondary/30 rounded-full" />
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Değerlerimiz</h2>
                  <span className="w-8 h-[2px] bg-secondary/30 rounded-full" />
                </div>

                {/* 5 Value Cards */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                  {/* Value 1: Sevgi */}
                  <div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary mb-4">
                      <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        favorite
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      {values?.[0]?.title || 'Sevgi'}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {values?.[0]?.desc || 'Koşulsuz kabul ve güven'}
                    </p>
                  </div>

                  {/* Value 2: İlgi */}
                  <div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-full bg-primary-fixed/50 flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-[28px]">search</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      {values?.[1]?.title || 'İlgi'}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {values?.[1]?.desc || 'Bireysel gelişim odağı'}
                    </p>
                  </div>

                  {/* Value 3: Özen */}
                  <div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-full bg-tertiary-fixed/50 flex items-center justify-center text-tertiary mb-4">
                      <span className="material-symbols-outlined text-[28px]">volunteer_activism</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      {values?.[2]?.title || 'Özen'}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {values?.[2]?.desc || 'Her detayda hassasiyet'}
                    </p>
                  </div>

                  {/* Value 4: Saygı */}
                  <div className="bg-surface-container-lowest rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary mb-4">
                      <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        spa
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      {values?.[3]?.title || 'Saygı'}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {values?.[3]?.desc || 'Farklılıklara değer'}
                    </p>
                  </div>

                  {/* Value 5: Güvenli Ortam */}
                  <div className="col-span-2 sm:col-span-1 bg-surface-container-lowest rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-full bg-primary-fixed/50 flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-[28px]">shield</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      {values?.[4]?.title || 'Güvenli Ortam'}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {values?.[4]?.desc || 'Huzurlu ve korunaklı yuva'}
                    </p>
                  </div>
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
                  <div className="lg:col-span-6 relative h-[360px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center"
                      alt={showcase?.imageAlt || 'Eylül Çocuk Akademisi sevgi dolu çocuk'}
                      src={
                        showcase?.image ||
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuAbHkyHF6gL2zHQy7ObwfbgqCVc0_IKOCb4j-2Kklgs1gQijyvNd1VnVRubKPthFi0RtL23koQd23NOsuO1clIZyRH0kl0SmlUXKmDX9CtoDvFWDFlX07rXo4aJS9Gr744f8uJw0CZ6m5tw1lmqhYU-pKbv5VME3y5LhQQKATG80IDyvRvix4XUoImO67rtQTAj6ai8FFw7YF7pA5HLPjslswNbRGTkZqwO1Q9zw3FCxbtNVOsEzlsC'
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent opacity-80 lg:opacity-40" />
                  </div>

                  {/* Quote & Inspiration Content */}
                  <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center items-start relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-secondary-fixed/50 flex items-center justify-center text-secondary mb-6 shadow-sm">
                      <span className="material-symbols-outlined text-[32px]">format_quote</span>
                    </div>
                    <blockquote className="font-headline-lg text-headline-lg text-primary tracking-tight leading-snug mb-6 font-bold">
                      “{showcase?.quote || 'Her çocuk, doğru destekle kendi ışığını keşfeder.'}”
                    </blockquote>
                    <div className="w-16 h-1 bg-secondary rounded-full mb-6" />
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
                      {showcase?.description ||
                        'Çocuklarımızın içindeki sonsuz potansiyeli; doğayı, sanatı, bilimi ve sosyal ilişkileri harmanlayan sıcak bir çatı altında sevgiyle yeşertiyoruz.'}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary-container text-on-secondary font-label-md text-label-md shadow-[0_4px_16px_rgba(252,143,52,0.35)] hover:bg-secondary hover:shadow-[0_6px_20px_rgba(148,74,0,0.4)] transition-all"
                        href="/kayit-ve-basvuru"
                      >
                        <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                        <span>Okulumuzu Ziyaret Edin</span>
                      </Link>
                      <Link
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high text-primary font-label-md text-label-md hover:bg-surface-container-highest transition-all"
                        href="/egitim-modeli/bem"
                      >
                        <span>Eğitim Modelimiz</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
