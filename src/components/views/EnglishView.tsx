'use client';

import React from 'react';
import Link from 'next/link';
import { EnglishPageData } from '@/types/cms';

interface EnglishViewProps {
  data: EnglishPageData;
}

export const EnglishView: React.FC<EnglishViewProps> = ({ data }) => {
  const { header, heroImage, heroImageAlt, pillars, quote, videoShowcase, gallery } = (data as any) || {};

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
                {header?.badge || 'Çift Dilli Okul Öncesi Deneyimi'}
              </span>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                {header?.title || 'All Day English'}
              </h1>
              <p className="font-headline-sm text-headline-sm text-secondary mt-1">
                {header?.subtitle || 'Gün Boyu İngilizce, Doğal ve Kalıcı Öğrenme'}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed max-w-2xl">
                {header?.description ||
                  'Eylül Çocuk Akademisi’nde yabancı dil ayrı bir ders değil; oyunların, sanatın, yemek saatinin ve bahçe etkinliklerinin doğal bir parçasıdır. Anadili gibi konuşan çift öğretmen modeliyle çocuklarımız İngilizceyi duyarak, yaşayarak ve severek içselleştirir.'}
              </p>
            </div>

            {/* Hero Image Showcase: Teacher & Child with Globe */}
            <div className="mt-space-lg max-w-4xl mx-auto relative group">
              <div className="overflow-hidden rounded-xl bg-surface-container shadow-md">
                <img
                  className="w-full h-[280px] sm:h-[380px] lg:h-[430px] object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={heroImageAlt || 'All Day English Öğretmen ve Öğrenci'}
                  src={
                    heroImage ||
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuAIhDg4p8-gT_vNjaupVxMvU0BM4pvpL49udkQZ5Ol2cFtEwFhnwzEWuXCFlWivq37jmc2h7W-EPlaXlBykvmWvHpOPBI9R2omsbWD241a1OGYNynRhHpdbv-KlMJp--m4NdVsY_SnRf1zyvgFZFPFNIIr4fV-zvDCSyfpmiMQKiwwl7VtStT4LuAH3wqE0ToAYQYQf50eCxKmCatW4CeLflxfHnYpELKtFrqSBOhce_M-zCF7KKgn0'
                  }
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-6 sm:right-10 bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-md flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse" />
                <span className="font-label-md text-label-md text-primary font-bold">
                  Tam Zamanlı Çift Dilli Ortam
                </span>
              </div>
            </div>

            {/* 4 Key Feature Cards */}
            <div className="mt-space-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary mb-space-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    wb_sunny
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                  {pillars?.[0]?.title || 'Gün Boyu İngilizce'}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {pillars?.[0]?.desc || 'Sabah karşılamasından gün sonuna kadar süren doğal iletişim döngüsü.'}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-space-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    diversity_3
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                  {pillars?.[1]?.title || 'Sınıf + İngilizce Öğretmeni'}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {pillars?.[1]?.desc || 'Sınıfta aynı anda yer alan iki uzman eğitimci ile kesintisiz destek.'}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary mb-space-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    school
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                  {pillars?.[2]?.title || 'Cambridge Materyalleri'}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {pillars?.[2]?.desc || 'Uluslararası standartlarda erken çocukluk hikâye kitapları ve şarkıları.'}
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary mb-space-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    forum
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                  {pillars?.[3]?.title || 'Günlük Konuşma'}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {pillars?.[3]?.desc || 'Ezberden uzak; drama, tekerleme ve oyunla pekişen akıcı konuşma becerisi.'}
                </p>
              </div>
            </div>

            {/* Quote & Video Showcase Section */}
            <div className="mt-space-xl max-w-4xl mx-auto flex flex-col items-center">
              {/* Quote */}
              <div className="flex items-center gap-space-sm mb-space-md text-center">
                <span className="material-symbols-outlined text-secondary text-[24px]">format_quote</span>
                <blockquote className="font-headline-md text-headline-md text-primary italic">
                  “{quote?.text || 'İngilizce, yaşamın doğal bir parçası.'}”
                </blockquote>
                <span className="material-symbols-outlined text-secondary text-[24px] rotate-180">format_quote</span>
              </div>

              {/* Video / Interactive Showcase Card */}
              <div className="w-full relative rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-surface-container">
                <img
                  className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-102"
                  alt="İngilizce ders gözlem videosu"
                  src={
                    videoShowcase?.thumbnail ||
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDXJD_3d19T3mQ0xzBqu8_DswbaPm-S9hzi0sJYL3_hVzSHNBdmqhsF_TBq2XmAfGy879A0-5oXilRvEl7jhBPecGNeMjIglDP15witIYbLsW1l34yza_YvcjkjhooZ6YU3Th9tzcNirn_IrHs8wMd6bXYTUqDYEj2sxFw9l2NVxFrWe-ZR0ZQ2Li37ajTvZ3qxDpR4thWeLnnbeiLiazasuMtOCvmXa4rBfHG0dIQxeKc6rro1d-DI'
                  }
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
                      Sınıf İçi Gözlem
                    </span>
                    <p className="font-headline-sm text-headline-sm mt-0.5">
                      {videoShowcase?.title || 'İngilizce Şarkı ve Etkileşim Saati: 4-5 Yaş Grubu'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini Gallery Strip: 6 Activity Thumbnails */}
            <div className="mt-space-xl max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-space-sm">
                <h2 className="font-headline-sm text-headline-sm text-primary">
                  İngilizce Etkinliklerimizden Kareler
                </h2>
                <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">photo_library</span>
                  Akademi Günlüğü
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
                {/* Photo 1 */}
                <div className="overflow-hidden rounded-DEFAULT bg-surface-container shadow-sm group">
                  <img
                    className="w-full h-28 sm:h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    alt="İngilizce etkinlik 1"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGbHX2Nvh4DvZ-ximLLAnTNWoJv1eJISuXF82SrSEUd_6sTWQzAM5KIaGeK1kDlVHfkuir5cjHoEQJA8yU_NTvvAJ8xPHIYSz2uzlDS3ILK7-1RXoKT1VBzN8BMCbB4m8Nul8dXPTr2mg6G70SIwauiiyj0ESrg2IhOcBoAcOaP5qGGETuq7lBS7ui6JLYfVcP__XrObAViSzaxt1tuKXdpnGy1dxRtPr0AsZh0re42pjMkHntZOIo"
                  />
                </div>
                {/* Photo 2 */}
                <div className="overflow-hidden rounded-DEFAULT bg-surface-container shadow-sm group">
                  <img
                    className="w-full h-28 sm:h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    alt="İngilizce etkinlik 2"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDobE0UwaVtC0DXgtNF4BEmPkh_ni8-lpM9dtIJTs42j413H4m24issQw7pq6AceGkWc4dyiW62YS29Ei-2OU2BKeg8tTGaMo0BIeyfovps1UsqKIowWYWFl7je2S1PFr3qBq7IjBia8hjWMRF8w2sfCD1nSUrn3jGmmsCi4WfjJp4-NCcSfDDVNz4CtDFER0fHNjqryWtVSTwB3Wc6Pt6_3k0FI0AeQEqUtJQjYzofA0AAQeXLfJmL"
                  />
                </div>
                {/* Photo 3 */}
                <div className="overflow-hidden rounded-DEFAULT bg-surface-container shadow-sm group">
                  <img
                    className="w-full h-28 sm:h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    alt="İngilizce etkinlik 3"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmG99bD5lg1G-4BiA1dJKD7opkWipSGmnOnptHLwTv3VbCKvahxu0fTXWtjS-hrdsdu-ZwQE3Bjhf8GV2EVuwbYxbfuh9uqPwifjwlazqTMhmTwQk21keNfglFhtImEwBTeZtF0bvqlbuvimw538PFUClhp6lQyKglYQQVcPb1L7Tq08XVpkFn3O9jnlmMCkAS7_I__ejXIB5JWLUoTFQNW3bGw-ijE5Wrt9UTwVBM2vUNS1rdPIyQ"
                  />
                </div>
                {/* Photo 4 */}
                <div className="overflow-hidden rounded-DEFAULT bg-surface-container shadow-sm group">
                  <img
                    className="w-full h-28 sm:h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    alt="İngilizce etkinlik 4"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJTNsPLitGJT-uvdRSPCRGg_yPtS_QtMkPUIvggdXTvXwPG7EDbom4CfIXeUXvifwYZmW9gl94QFDv0gjfydHWZH9JneCAXHd6wsxUmsQwk9b2RONAADroTMG5rNEPBZDEIaCWYTr1D0VJDlcHqGMLVFn0t7HZVmloNqQjum0yY_NdohLz0gNI9zHWGpPb1TnOnzb-Am_uX6Ed9pKS0AVVhv1-pUTO17tdV6Q64Azh3-CxINyMOesQ"
                  />
                </div>
                {/* Photo 5 */}
                <div className="overflow-hidden rounded-DEFAULT bg-surface-container shadow-sm group">
                  <img
                    className="w-full h-28 sm:h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    alt="İngilizce etkinlik 5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTh5n2RgRYXhDnn-WlAZ398rFl2GakD1IfFyh2566wTFk-4JP6YS47I8f3V-TtGxHVi1qZShctDNAsSJqYSWuCyUo7ui5-kTd15ZewFVQ85gzv6Z0PDZWryL5QQ9EWlrrc_vD1TGpXjZ3I5sCuBBH4Gx9uEwJsoVrGDB9MFuYUyEU8M_FNeWC29PeRApONav1nUHfcqGABUW3OhT6XnvHnwQGWLHio1waLgTYYpgeLlkVHhuGRqame"
                  />
                </div>
                {/* Photo 6 */}
                <div className="overflow-hidden rounded-DEFAULT bg-surface-container shadow-sm group">
                  <img
                    className="w-full h-28 sm:h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    alt="İngilizce etkinlik 6"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJm7fj5jggxLyGHyLXPCMChbuXeKexB3OtQSmUwJkt5CGzR2rw-6jluW0rEVn5l44E3GaN8q_1IfpSf5nxOe8MWHzxVlSVgnuV1zAyMb4ZLivBl7A8U6ZtU-u_giJKbjaENpl2rSBrqtN3I86PrLMoZeCiyeLOanelmUQMaj2U0y4FuDvfBJ3S5iJQELWBOa0YpyhGt8Cya44CINnKm5EQREflMetgxgSH5Jv3ENR-KnoYCKIpC74y"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Action CTA */}
            <div className="mt-space-xl max-w-2xl mx-auto text-center flex flex-col items-center">
              <div className="bg-surface-container-low p-space-lg rounded-xl w-full flex flex-col items-center shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Çift Dilli Eğitimimizi Yakından Görün
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md max-w-lg">
                  İngilizce derslerimizi yerinde gözlemlemek ve eğitim kadromuzla tanışmak için okul ziyareti randevunuzu hemen oluşturun.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-space-sm">
                  <Link
                    className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-secondary-container text-on-secondary font-label-md text-label-md shadow-md hover:bg-secondary transition-all"
                    href="/kayit-ve-basvuru"
                  >
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    <span>Gözlem Randevusu Alın</span>
                  </Link>
                  <Link
                    className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm"
                    href="/egitim-modeli/bem"
                  >
                    <span className="material-symbols-outlined text-[18px]">menu_book</span>
                    <span>BEM Müfredatı</span>
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
