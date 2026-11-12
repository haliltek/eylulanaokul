'use client';

import React from 'react';
import Link from 'next/link';
import { hasLink } from '@/lib/content';
import type { portalContent } from '@/data/content/portal';

/** Veli Portalı: yalnız bilgi notu (öğrenci verisi gösterilmez). */
export const PortalInfoView: React.FC<{ data: typeof portalContent }> = ({ data }) => (
  <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
    <section className="rounded-3xl bg-surface-container-lowest shadow-sm p-8 sm:p-12 text-center">
      <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-secondary-fixed/50 text-secondary flex items-center justify-center">
        <span className="material-symbols-outlined text-[32px]">construction</span>
      </div>
      <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-comfortaa">{data?.title}</h1>
      <p className="mt-4 font-headline-sm text-headline-sm text-secondary font-bold">{data?.note}</p>
      {data?.text && <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">{data.text}</p>}
      {hasLink(data?.buttonLink) && data?.buttonText && (
        <Link
          href={data.buttonLink}
          className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full font-label-md text-label-md text-white bg-secondary-container hover:bg-secondary transition-all shadow-sm"
        >
          {data.buttonText}
        </Link>
      )}
    </section>
  </main>
);
