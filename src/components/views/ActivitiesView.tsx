'use client';

import React from 'react';
import Link from 'next/link';
import { ActivitiesPageData } from '@/types/cms';

interface ActivitiesViewProps {
  data: ActivitiesPageData;
}

export const ActivitiesView: React.FC<ActivitiesViewProps> = ({ data }) => {
  const { header, activities } = data || {};

  // Standard 9 activities fallback with original code.html imagery and icons
  const defaultActivities = [
    {
      title: 'Piyano',
      desc: 'Ritim algısı, çift el koordinasyonu ve işitsel dikkat geliştirme',
      icon: 'piano',
      iconColor: 'text-primary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCyiN03arbqJBsDVFV1HUx8dy-0bAohSvrbAVnltFemm95vAkyAGyQNAHxMTuLHa4qDTSkH0IXZIxJhyXManVZMlLgW0w5JUzYdl9d8x_kcnTvOPOWa-blJUhgUfC6Rz6QiBCywGeQacUHXhmod4LDhy9CeBY_xClJyR-geaBYhVs8Tar70UAri1uEDuyTLj28jRWD5AEZt2m8MajVuEjyIozikNXLhwDoaBW9ewtiiHYMK7OQ8sQNM',
      alt: 'Piyano Atölyesi',
    },
    {
      title: 'Resim',
      desc: 'Görsel ifade, renk teorisi ve sınırsız hayal gücü atölyesi',
      icon: 'draw',
      iconColor: 'text-secondary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAwu52rU0SIT8ikWDgkNHi7XkWQjVRwqmgfd_ntKBvMaIA-4Fe-rK0FsIKMGGEik7NqqRCdDGzdBzEY4AczBOAa6EzJXBisddPqt9KcpTIk1E0p6kQ45so3YYdwcUY9Pq0xI3dCao9P5I-yMs_dbB-Ov5LmqBk31O-6o3jqCp2pUpJrVaaLHJcP_HbNPGVWTBWBhUvMJvOi07_cZrFuPB33n5iZnr9ReIvpkKqofc6pfc3741l-XFfh',
      alt: 'Resim Atölyesi',
    },
    {
      title: 'Jimnastik',
      desc: 'Denge, esneklik, beden farkındalığı ve kaba motor güçlendirme',
      icon: 'sports_gymnastics',
      iconColor: 'text-tertiary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDK9BJZq33Vq-ESZ01DJCa2vSHyrbqa9yUU-jbyIsazRqGsCa_DSGpW9sfC8XTfxR7tKlVxKakm5PIYRg75I6KSUbyLdXvehcT54GI-amuzszYTjXtUvXmbEm2mlXVzd7p4QYjFXP0I6Y6sziiVlhk_OSlEwfTmxZ8apyBbSoRyAtc41kqr5CuLbOiGAJXl5k7U2aTvdhxk29d4Y_HeM6ZTQEVaHMjEa8iXApOcm_MdqXNNZ296O6QO',
      alt: 'Jimnastik Atölyesi',
    },
    {
      title: 'Satranç',
      desc: 'Stratejik düşünme, sabır, odaklanma ve planlama becerileri',
      icon: 'neurology',
      iconColor: 'text-primary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCmlJHBRLWiQ2Q-qpQGJqv2VTSeyDaB_wu7sGjoGaDg7nR8ikf6mZO_2dZaDKbGPKGGf0cVzjzY0sh5sLk21R54Zw1X3CLZ5UMKolADJfT6z9coFJns9Ffwub5onCfCeNGjrvvs9Q9WhWPB3uC8hadiuzeghHvYARzhn_-K8fGf_n1xyullYs_j4EiM51ZUO28vTf3BQuwr8w6hMUsFFzXRd-EHoBfpr3ebNXAdVPQJE66WnFsCUm3f',
      alt: 'Satranç Atölyesi',
    },
    {
      title: 'Fen ve Doğa',
      desc: 'Ekolojik keşif, canlılar dünyası ve deney odaklı merak eğitimi',
      icon: 'nature_people',
      iconColor: 'text-tertiary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAPMzZ_tBqU1IxDoftuw0MfXIwyuEfXM90xiEopFj1byhY_a-psn19stclGKRMCqT0__THHYaN2PqPaliMGdhZzAbjpgTGgyDotH8RRKK8NvVpDbwmog6cTspzJCGRAwcQRvpFWBuyNEGGXKnvSSJtT4WaM2UkRCQ3NhYMsAxkhl2zFwcjgts32UYNO0L4pmrBK5Bkuuwsum54m9ScGNgOmUlFT61HYhmMAgDIX8gs2kPbFsRoKacbK',
      alt: 'Fen ve Doğa Atölyesi',
    },
    {
      title: 'Drama',
      desc: 'Empati geliştirme, rol yapma ve sözlü & bedensel ifade özgürlüğü',
      icon: 'theater_comedy',
      iconColor: 'text-secondary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuABfqcqWrgiK9uCeqr4PMenFHX70PhbW12QQBkZQ5QsjQIZl9jsyeENwv_Xsjy2WEByKDesn0wcMjcHGOyZ4wMsHLnUGJDOC7fK1coCmC4bIkQPmnpTNeSdkMxCYj9CHNKJPD6dMDGo4AS-X5UtAO9u8E8NPVtFp_Yq57QwnCQbYwYlcSdcaO4L_qDhQaOpK1-CajxQaVfIiH4ksf5_DNUI8hJoWlePQvc-HG0Nkn92Ss8i3PL1xela',
      alt: 'Drama Atölyesi',
    },
    {
      title: 'Müzik',
      desc: 'Orff yaklaşımı, perküsyon enstrümanları ve koro uyumu',
      icon: 'music_note',
      iconColor: 'text-primary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA9b2ttUoepKG3ryo5WNpOKOTa91-qYn8OZ1YEa8JeYSSioD9Agof0sG2Rs3CYP28A2vo1hAHklv4ZpSSc2PJ3rPJeHUTu-qIsVdHVrgOuHtwyYIViwvhue5S2UJJ__fgNQU1uF3JXfRc56j65BLkidQnbwmGBDN1nvbn4oKJXjBnh1H1gWXJIqIqsQaGhwopJ1JQ4yUSMCrm5NH-bhyi1IKHPBolv3is2s76wEc4AjL8zv7e4zwRW9',
      alt: 'Müzik Atölyesi',
    },
    {
      title: 'Kodlama',
      desc: 'Algoritmik düşünce, sebep-sonuç ilişkisi ve erken STEM okuryazarlığı',
      icon: 'smart_toy',
      iconColor: 'text-secondary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdbTHYbC_qjZAZjl8Mv2W5b7r5HXTOeFCo5n3iWUsKQJrZfrk1bxCcsNKXUGkogFmrHL1nLOj11byrxOYI4Zocp0PNO7_VB1Wzes7UwFD_G9oLR7SLhiR0uQsOl0YGPN0zSLQgzx3VerJ8QRYNYj0tWZS3T8KPJCJNIq-Wg7pRKpBqJg3OBkOBJyPUhzklPbJxwzfcZfgTHVcB-A5-VNR5KJqJZ2BMiTyzG1PPAjMcY9E5OBC6fzRE',
      alt: 'Kodlama Atölyesi',
    },
    {
      title: 'Değerler Eğitimi',
      desc: 'Saygı, sevgi, yardımlaşma, nezaket ve küresel vatandaşlık bilinci',
      icon: 'volunteer_activism',
      iconColor: 'text-tertiary',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDEEF-PGVPW-5HTJ0kIlWjMI321V_loos6JYcAK8SNvl7Awt13DN1lAgA1qyW37GfVOHijAaaaNIXM9zYqkwPUBABodE5YkE1YuQvOmI8zaomF5pRZQA4MC-9inS48GyPbt08UQXAy5jl-3L2KyjC36SBOK7J6dVrK1D-JslTc16fUH02D0L929I7lndXyHut8FSjKAHxte2RZZnhQzOabRWTykm8MSa2rofymDPJy0EAn-w38gR59h',
      alt: 'Değerler Eğitimi',
    },
  ];

  const itemsToRender = activities && activities.length > 0
    ? activities.map((act, i) => ({
        title: act.title,
        desc: act.description,
        icon: defaultActivities[i % defaultActivities.length].icon,
        iconColor: defaultActivities[i % defaultActivities.length].iconColor,
        image: act.image || defaultActivities[i % defaultActivities.length].image,
        alt: act.title,
      }))
    : defaultActivities;

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
                  {header?.badge || 'Atölyeler & Branş Dersleri'}
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-space-xs">
                {header?.title || 'Zengin Etkinlik Dünyası'}
              </h1>
              <p className="font-headline-sm text-headline-sm text-secondary font-semibold mb-space-sm">
                {header?.subtitle || 'Her Gün Yeni Bir Keşif'}
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {header?.description ||
                  'Çocukların ilgi ve yeteneklerini keşfetmelerini sağlayan, bedensel, sanatsal ve zihinsel gelişimi destekleyen atölyeler ve branş etkinlikleri.'}
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
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={item.alt}
                      src={item.image}
                    />
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
                  Atölyelerimizi Keşfedin
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Çocuğunuzun Yeteneğini Birlikte Uyandıralım
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Her çocuğun içinde saklı bir deha vardır. Deneme derslerimize katılmak ve okulumuzu yerinde görmek için randevu oluşturun.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-space-sm z-10 w-full sm:w-auto">
                <Link
                  className="w-full sm:w-auto px-space-lg py-space-md rounded-full bg-secondary-container text-on-secondary font-label-lg text-label-lg shadow-[0_4px_16px_rgba(252,143,52,0.35)] hover:bg-secondary transition-all text-center flex items-center justify-center gap-space-xs"
                  href="/kayit-ve-basvuru"
                >
                  <span className="material-symbols-outlined text-[20px]">event_available</span>
                  <span>Atölye Ziyareti Planla</span>
                </Link>
                <Link
                  className="w-full sm:w-auto px-space-lg py-space-md rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-primary hover:text-on-primary transition-all text-center flex items-center justify-center gap-space-xs"
                  href="/egitim-modeli/bem"
                >
                  <span className="material-symbols-outlined text-[20px]">explore</span>
                  <span>Eğitim Modelimiz</span>
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
