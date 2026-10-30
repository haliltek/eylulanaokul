'use client';

import React from 'react';
import Link from 'next/link';
import { BemPageData } from '@/types/cms';

interface BemViewProps {
  data: BemPageData;
}

export const BemView: React.FC<BemViewProps> = ({ data }) => {
  const { header, showcase } = data || {};
  const outcomes = showcase?.outcomes;

  return (
    <div className="w-full bg-background">
      <main className="w-full pt-4 pb-16 bg-background">
        <div className="flex flex-col w-full relative overflow-hidden">
          {/* Subtle organic background decors */}
          <div className="pointer-events-none absolute -top-16 -right-20 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -left-28 w-80 h-80 rounded-full bg-tertiary-fixed/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 right-4 text-tertiary-fixed-dim/30 select-none">
            <span className="material-symbols-outlined text-[140px]">nest_eco_leaf</span>
          </div>

          <div className="w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl">
            {/* 1. Başlık Alanı */}
            <section className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm mb-space-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary">psychology_alt</span>
                <span className="tracking-wider uppercase">
                  {header?.badge || 'Özgün Müfredat & Pedagoji'}
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                {header?.title || 'Bütünleştirilmiş Eğitim Modeli (BEM)'}
              </h1>
              <p className="font-headline-sm text-headline-sm text-secondary font-bold mt-2 mb-space-md">
                {header?.subtitle || 'Çok Yönlü Gelişim, Güçlü Temeller'}
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
                {header?.description ||
                  'Eylül Çocuk Akademisi Bütünleştirilmiş Eğitim Modeli (BEM); çocuğun zihinsel, duygusal, bedensel ve sosyal potansiyelini bir bütün olarak ele alır. Her çocuğun biricik öğrenme hızını ve ilgi alanlarını merkeze koyan bu yaklaşım; ezberden uzak, deneyimleyerek ve oyun yoluyla kalıcı temeller atan çağdaş bir okul öncesi vizyonudur.'}
              </p>
            </section>

            {/* 2. BEM Gelişim Çarkı Diyagramı (GERÇEK DAİRESEL 6 DİLİMLİ SVG ÇARKI) */}
            <section className="mt-space-xl mb-space-xl relative flex justify-center items-center">
              <div className="w-full max-w-4xl relative py-8 px-4 flex flex-col items-center">
                {/* Large Interactive Wheel Hub on Desktop */}
                <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] flex items-center justify-center">
                  {/* Outer Soft Glow Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-secondary-fixed/40 via-surface-container to-primary-fixed/40 blur-xl opacity-60" />
                  {/* Outer Subtle Track Ring */}
                  <div className="absolute inset-4 sm:inset-6 rounded-full bg-surface-container-lowest shadow-[0_12px_40px_rgba(0,62,128,0.06)]" />

                  {/* Circular SVG Diagram Segments (Wheel Petals) */}
                  <svg
                    className="absolute inset-8 sm:inset-10 w-[calc(100%-4rem)] sm:w-[calc(100%-5rem)] h-[calc(100%-4rem)] sm:h-[calc(100%-5rem)]"
                    fill="none"
                    viewBox="0 0 400 400"
                  >
                    {/* 6 Wheel Slices */}
                    {/* Dilim 1: Sosyal Duygusal (Top-Left / Yellowish) */}
                    <path
                      className="fill-[#ffdcc5]/60 hover:fill-[#ffdcc5] transition-colors cursor-pointer"
                      d="M 200 200 L 200 30 A 170 170 0 0 1 347 115 Z"
                    />
                    {/* Dilim 2: Dil Gelişimi (Top-Right / Soft Blue) */}
                    <path
                      className="fill-[#d6e3ff]/70 hover:fill-[#d6e3ff] transition-colors cursor-pointer"
                      d="M 200 200 L 347 115 A 170 170 0 0 1 347 285 Z"
                    />
                    {/* Dilim 3: Bilişsel Gelişim (Bottom-Right / Green) */}
                    <path
                      className="fill-[#b4f2b3]/60 hover:fill-[#b4f2b3] transition-colors cursor-pointer"
                      d="M 200 200 L 347 285 A 170 170 0 0 1 200 370 Z"
                    />
                    {/* Dilim 4: Sanat ve Yaratıcılık (Bottom-Center / Coral Pink) */}
                    <path
                      className="fill-[#ffd9d4]/70 hover:fill-[#ffd9d4] transition-colors cursor-pointer"
                      d="M 200 200 L 200 370 A 170 170 0 0 1 53 285 Z"
                    />
                    {/* Dilim 5: Fiziksel Gelişim (Bottom-Left / Cyan Blue) */}
                    <path
                      className="fill-[#c9e6ff]/60 hover:fill-[#c9e6ff] transition-colors cursor-pointer"
                      d="M 200 200 L 53 285 A 170 170 0 0 1 53 115 Z"
                    />
                    {/* Dilim 6: Değerler Eğitimi (Top-Left / Warm Cream Amber) */}
                    <path
                      className="fill-[#f5ebd9]/90 hover:fill-[#faeccf] transition-colors cursor-pointer"
                      d="M 200 200 L 53 115 A 170 170 0 0 1 200 30 Z"
                    />
                  </svg>

                  {/* Floating Badges / 6 Petal Nodes with Icons & Labels */}
                  {/* 1. Sosyal Duygusal Gelişim (Top-Left) */}
                  <div className="absolute -top-4 sm:top-2 left-4 sm:-left-6 flex flex-col items-center group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#fde9cf] text-[#8f4700] flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[28px] sm:text-[32px]">favorite</span>
                    </div>
                    <span className="mt-2 text-center font-headline-sm text-label-md sm:text-headline-sm text-primary max-w-[120px] sm:max-w-[140px] leading-tight">
                      Sosyal Duygusal Gelişim
                    </span>
                  </div>

                  {/* 2. Dil Gelişimi (Top-Right) */}
                  <div className="absolute -top-4 sm:top-2 right-4 sm:-right-6 flex flex-col items-center group cursor-pointer transition-transform hover:-translate-y-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[28px] sm:text-[32px]">forum</span>
                    </div>
                    <span className="mt-2 text-center font-headline-sm text-label-md sm:text-headline-sm text-primary max-w-[120px] sm:max-w-[140px] leading-tight">
                      Dil Gelişimi
                    </span>
                  </div>

                  {/* 3. Bilişsel Gelişim (Middle Right) */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-8 sm:-right-16 flex flex-col items-center group cursor-pointer transition-transform hover:translate-x-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[28px] sm:text-[32px]">psychology</span>
                    </div>
                    <span className="mt-2 text-center font-headline-sm text-label-md sm:text-headline-sm text-primary max-w-[110px] sm:max-w-[130px] leading-tight">
                      Bilişsel Gelişim
                    </span>
                  </div>

                  {/* 4. Sanat ve Yaratıcılık (Bottom Right) */}
                  <div className="absolute -bottom-6 sm:-bottom-4 right-4 sm:-right-2 flex flex-col items-center group cursor-pointer transition-transform hover:translate-y-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ffd8d6] text-[#ba1a1a] flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[28px] sm:text-[32px]">palette</span>
                    </div>
                    <span className="mt-2 text-center font-headline-sm text-label-md sm:text-headline-sm text-primary max-w-[120px] sm:max-w-[140px] leading-tight">
                      Sanat ve Yaratıcılık
                    </span>
                  </div>

                  {/* 5. Fiziksel Gelişim (Bottom Left) */}
                  <div className="absolute -bottom-6 sm:-bottom-4 left-4 sm:-left-2 flex flex-col items-center group cursor-pointer transition-transform hover:translate-y-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d6e7ff] text-[#00458d] flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[28px] sm:text-[32px]">sports_handball</span>
                    </div>
                    <span className="mt-2 text-center font-headline-sm text-label-md sm:text-headline-sm text-primary max-w-[120px] sm:max-w-[140px] leading-tight">
                      Fiziksel Gelişim
                    </span>
                  </div>

                  {/* 6. Değerler Eğitimi (Middle Left) */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-8 sm:-left-16 flex flex-col items-center group cursor-pointer transition-transform hover:-translate-x-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ebdccb] text-[#713700] flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined text-[28px] sm:text-[32px]">volunteer_activism</span>
                    </div>
                    <span className="mt-2 text-center font-headline-sm text-label-md sm:text-headline-sm text-primary max-w-[110px] sm:max-w-[130px] leading-tight">
                      Değerler Eğitimi
                    </span>
                  </div>

                  {/* Center Circular Hub: "BEM" */}
                  <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-surface-container-lowest shadow-[0_12px_32px_rgba(0,62,128,0.18)] flex flex-col items-center justify-center p-3 select-none">
                    <div className="w-full h-full rounded-full bg-surface flex flex-col items-center justify-center shadow-inner">
                      <span className="font-headline-xl text-headline-xl text-primary font-black tracking-tight leading-none">
                        BEM
                      </span>
                      <span className="font-label-sm text-[11px] text-tertiary font-bold tracking-widest mt-1">
                        EĞİTİM MODELİ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Alt Bölüm (Fotoğraf ve 'BEM ile' Kazanımları) */}
            <section className="mt-space-lg">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-center">
                {/* Sol: Renkli Bloklarla Oynayan Çocuk Görseli */}
                <div className="md:col-span-7 relative group">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-secondary-container/20 to-tertiary/10 rounded-2xl blur-lg transition duration-500 group-hover:scale-105" />
                  <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,62,128,0.08)] bg-surface-container">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={showcase?.imageAlt || 'Oyun Temelli Keşif'}
                      src={
                        showcase?.image ||
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuA_HUJ8Dk0I5-9-CcAVN-23EtmKiHOp7uF7iJTio35lPh-RVt2Ww3BzorxwMjJCNw6-6J3RjPlIUZfiZPQqxBzublamKjRz0wCD7IXo6qX8F_35XYKa_eUaYfvau2j1sffb6E8wDPNa9Uak8ftkjp5WfYtaN4mv58_zTpEwiApJP9Cie23W1J1G_wIQp4-L2WSE8A7B9FraFpJuirTRQOaK_08d1Dwe4biK2A2tzfjBJj-bxe06lsLs'
                      }
                    />
                    {/* Floating Quote Overlay Card */}
                    <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs bg-surface-container-lowest/90 backdrop-blur-md p-space-sm rounded-xl shadow-lg">
                      <div className="flex items-center gap-space-xs text-secondary mb-1">
                        <span className="material-symbols-outlined text-[20px]">lightbulb</span>
                        <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">
                          Oyun Temelli Keşif
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface italic">
                        “{showcase?.quote || 'Her çocuk, kendi merakı ve ritmi doğrultusunda keşfederek büyür.'}”
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sağ: 'BEM ile' Kazanım Maddeleri Kartı */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="bg-surface-container-lowest rounded-2xl p-space-md sm:p-space-lg shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
                    {/* Soft Accent Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/30 rounded-bl-full pointer-events-none" />
                    <div className="flex items-center gap-space-xs mb-space-sm">
                      <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-[22px]">auto_stories</span>
                      </div>
                      <h2 className="font-headline-lg text-headline-lg text-primary">
                        BEM ile
                      </h2>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      Bütünleştirilmiş eğitim programımızla her gün yeni deneyimler biriktiren çocuklarımız:
                    </p>

                    {/* Bullet List with Green Checkmarks */}
                    <ul className="flex flex-col gap-space-sm">
                      {(outcomes && outcomes.length > 0
                        ? outcomes
                        : [
                            'Keşfeden',
                            'Soran',
                            'Üreten',
                            'Paylaşan',
                            'Özgüvenli',
                          ]
                      ).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-space-sm group">
                          <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary shadow-sm transition-transform group-hover:scale-110">
                            <span className="material-symbols-outlined text-[20px] font-bold">check</span>
                          </div>
                          <span className="font-headline-sm text-label-lg text-primary font-bold">
                            {item}
                          </span>
                        </li>
                      ))}
                      <li className="flex items-center gap-space-sm group">
                        <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary shadow-sm transition-transform group-hover:scale-110">
                          <span className="material-symbols-outlined text-[20px] font-bold">public</span>
                        </div>
                        <span className="font-headline-sm text-label-lg text-primary font-bold">
                          Dünya insanı bireyler yetişir.
                        </span>
                      </li>
                    </ul>

                    {/* Action Button */}
                    <div className="mt-space-lg pt-space-xs">
                      <Link
                        className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-full bg-secondary-container text-on-secondary font-label-md text-label-md shadow-[0_4px_16px_rgba(252,143,52,0.35)] hover:bg-secondary transition-all hover:shadow-[0_6px_20px_rgba(148,74,0,0.4)]"
                        href="/kayit-ve-basvuru"
                      >
                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                        <span>Okul Ziyareti ile Yerinde İnceleyin</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
