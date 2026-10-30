'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EnrollmentPageData } from '@/types/cms';

interface EnrollmentViewProps {
  data: EnrollmentPageData;
}

export const EnrollmentView: React.FC<EnrollmentViewProps> = ({ data }) => {
  const { header, steps, scheduleTourCard, faq } = data;

  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !parentPhone) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/crm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName,
          phone: parentPhone,
          source: 'enrollment_quick_call',
          notes: 'Kayıt ve Başvuru sayfasından Sizi Arayalım talebi bırakıldı.',
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSuccess(true);
        setParentName('');
        setParentPhone('');
      } else {
        alert(`Hata: ${json.error || 'İşlem tamamlanamadı'}`);
      }
    } catch (err: any) {
      alert(`Bağlantı hatası: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const defaultSteps = [
    {
      stepNumber: '01',
      title: 'Başvuru Formu',
      description: 'Ön başvuru formunu doldurun, uzman rehberlik ekibimiz en kısa sürede sizinle iletişime geçsin.',
      icon: 'assignment',
    },
    {
      stepNumber: '02',
      title: 'Okul Ziyareti',
      description: 'Okulumuzu gezin, eğitim kadromuzla tanışın ve çocuğunuz için hazırlanan doğal atölye ortamını keşfedin.',
      icon: 'school',
    },
    {
      stepNumber: '03',
      title: 'Kayıt Süreci',
      description: 'Kontenjan dahilinde kayıt işlemlerini güvenle tamamlayın, sıcacık Eylül Akademisi ailesine katılın.',
      icon: 'verified',
    },
  ];

  const stepsToRender = steps && steps.length > 0 ? steps : defaultSteps;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-9 sm:space-y-12">
      <div className="flex flex-col w-full">
        <section className="relative w-full overflow-hidden rounded-lg bg-surface-container-lowest p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 rounded-full bg-secondary-fixed/30 blur-2xl"></div>
          <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-tertiary-fixed/20 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary-container"></span>
              {header?.badge || '2024 - 2025 Dönemi Ön Kayıtları Başladı'}
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-comfortaa">
              {header?.title || 'Kayıt ve Başvuru'}
            </h1>
            <p className="font-headline-sm text-headline-sm text-secondary-container mt-1 font-semibold">
              {header?.subtitle || "Eylül'de Yeni Bir Başlangıç"}
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
              {header?.description ||
                'Eylül Çocuk Akademisi ailesine adım atmak için ilk adımı bugün atın. Çocuğunuzun bireysel gelişim hızına saygı duyan, sevgi temelli ve modern öğrenme ortamımızda yerinizi erken kayıt imkanlarıyla ayırtabilirsiniz.'}
            </p>
          </div>

          {/* 3-Step Enrollment Flow */}
          <div className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {stepsToRender.map((st, idx) => (
              <div
                key={idx}
                className="group relative rounded-lg bg-surface-container-low p-6 transition-all duration-300 hover:bg-surface-container hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container text-on-secondary font-headline-sm text-headline-sm shadow-sm group-hover:scale-105 transition-transform font-bold">
                    {st.stepNumber || `0${idx + 1}`}
                  </span>
                  <span
                    className="material-symbols-outlined text-secondary-container text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {st.icon || (idx === 0 ? 'assignment' : idx === 1 ? 'school' : 'verified')}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-bold">
                  {st.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {st.description}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Block & Cheerful Portrait Layout (12 Sütun) */}
          <div className="relative z-10 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Schedule Tour Card (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-lg bg-surface-container p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-surface-container-lowest text-secondary-container shadow-sm flex-shrink-0">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    calendar_month
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    {scheduleTourCard?.title || 'Okul Ziyareti Planlayın'}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    {scheduleTourCard?.description ||
                      'Çocuğunuzla birlikte sınıflarımızı, bahçemizi ve yemekhanemizi bizzat deneyimleyin. Randevu oluşturarak uzman pedagoglarımızla birebir görüşebilirsiniz.'}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary-container px-6 py-3 font-label-lg text-label-lg text-on-secondary shadow-md hover:bg-secondary transition-all transform hover:-translate-y-0.5"
                >
                  <span>{scheduleTourCard?.buttonText || 'Randevu Al'}</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
                <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  {scheduleTourCard?.hoursNote || 'Hafta içi 09:00 - 17:00 arası müsait'}
                </span>
              </div>
            </div>

            {/* Right Photo Portrait matching design card (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-72 sm:h-80 rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-full object-cover object-top"
                  alt="Özel Eylül Anaokulu mutlu öğrenci"
                  src={
                    scheduleTourCard?.image && scheduleTourCard.image.length > 150
                      ? scheduleTourCard.image
                      : 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtGA22rDFxNNgD1z4vl8u94Ga7ZPRILsbzshGnnP_mnQL23QrMMQjZFwGAFrktFj2eHwOga2ROZNvGcHg2IqsHUW2pLRZ0cb9qIM2LFYpvQu9kS5A5FiWYqJAMZxuDX194VqENUTtgNy7K32Mhr7LW1T5sHJajHH3PvkeGtJ7oFCthA9RthQwpYgVtxJF77dURfP-0pX4nIAmEMQ02y4eriO6SDolx5nmxUSvqPCvCRoO3-dfdM6dJ'
                  }
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtGA22rDFxNNgD1z4vl8u94Ga7ZPRILsbzshGnnP_mnQL23QrMMQjZFwGAFrktFj2eHwOga2ROZNvGcHg2IqsHUW2pLRZ0cb9qIM2LFYpvQu9kS5A5FiWYqJAMZxuDX194VqENUTtgNy7K32Mhr7LW1T5sHJajHH3PvkeGtJ7oFCthA9RthQwpYgVtxJF77dURfP-0pX4nIAmEMQ02y4eriO6SDolx5nmxUSvqPCvCRoO3-dfdM6dJ';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-3 -left-3 rounded-full bg-surface-container-lowest px-4 py-2 shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  nature_people
                </span>
                <span className="font-label-sm text-label-sm text-primary font-bold">
                  Doğayla İç İçe Öğrenme
                </span>
              </div>
            </div>
          </div>

          {/* Alert / Notice Banner */}
          <div className="relative z-10 mt-8 rounded-lg bg-surface-container-low px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-container text-2xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                notifications_active
              </span>
              <p className="font-label-lg text-label-lg text-primary text-center sm:text-left font-medium">
                Sınıf kontenjanlarımız sınırlıdır. Erken kayıt avantajlarını ve burs olanaklarını kaçırmayın.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm flex-shrink-0 font-bold">
              Butik Sınıflar (Maks. 14 Çocuk)
            </span>
          </div>

          {/* Sizi Arayalım Quick Contact Card */}
          <div className="relative z-10 mt-10 rounded-lg bg-surface-container-low p-6 sm:p-8" id="quick-call">
            <div className="max-w-2xl mb-6">
              <h3 className="font-headline-md text-headline-md text-primary font-bold">Sizi Arayalım</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Bilgilerinizi bırakın; kurum koordinatörümüz aynı gün içinde sizi arayıp eğitim programımız ve kayıt şartları hakkında detaylı bilgi versin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-4">
                <label className="sr-only" htmlFor="parentName">
                  Adınız
                </label>
                <input
                  className="w-full px-5 py-3.5 rounded-full bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
                  id="parentName"
                  name="parentName"
                  placeholder="Adınız Soyadınız"
                  required
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                />
              </div>
              <div className="sm:col-span-4">
                <label className="sr-only" htmlFor="parentPhone">
                  Telefon Numaranız
                </label>
                <input
                  className="w-full px-5 py-3.5 rounded-full bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
                  id="parentPhone"
                  name="parentPhone"
                  placeholder="Telefon Numaranız (05XX)"
                  required
                  type="tel"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                />
              </div>
              <div className="sm:col-span-4">
                <button
                  disabled={submitting}
                  className="w-full px-6 py-3.5 rounded-full bg-secondary-container text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-secondary transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer font-bold"
                  type="submit"
                >
                  <span>{submitting ? 'Gönderiliyor...' : 'Bilgi Talebi Gönder'}</span>
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </form>

            {success && (
              <div className="mt-4 p-4 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md text-center font-bold animate-in fade-in">
                Talebiniz başarıyla alındı! Eğitim danışmanımız en kısa sürede sizi arayacaktır.
              </div>
            )}
          </div>
        </section>

        {/* SSS (Sık Sorulan Sorular) Bölümü */}
        {faq && faq.length > 0 && (
          <section className="mt-8 rounded-lg bg-surface-container-lowest p-6 sm:p-8 shadow-sm">
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-6">
              Sıkça Sorulan Sorular
            </h3>
            <div className="space-y-4">
              {faq.map((item, idx) => (
                <div key={idx} className="rounded-lg bg-surface-container-low p-4 sm:p-5">
                  <h4 className="font-headline-sm text-base text-primary font-bold mb-1">
                    {item.question}
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};
