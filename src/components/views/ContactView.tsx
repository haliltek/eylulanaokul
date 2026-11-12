'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ContactPageData } from '@/types/cms';

interface ContactViewProps {
  data: ContactPageData;
}

export const ContactView: React.FC<ContactViewProps> = ({ data }) => {
  const { header, campusImage, formIntro, infoCards, addressBox, mapInfo } = data || ({} as ContactPageData);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !kvkkAccepted) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/crm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName: fullName,
          phone,
          email,
          notes: message || 'İletişim sayfasından Bize Yazın formuyla mesaj gönderildi.',
          source: 'contact_page_form',
        }),
      });
      const json = await res.json();
      if (json.success) {
        setShowSuccessModal(true);
        setFullName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setKvkkAccepted(false);
      } else {
        alert(`Hata: ${json.error || 'Mesaj iletilemedi'}`);
      }
    } catch (err: any) {
      alert(`Bağlantı hatası: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-9 sm:space-y-12">
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden pb-12">
          {/* Subtle Ambient Leaf Illustrations */}
          <div className="pointer-events-none absolute -top-10 right-4 w-72 h-72 opacity-20 -z-10">
            <svg className="w-full h-full" fill="none" viewBox="0 0 200 200">
              <path d="M50 160C20 90 80 30 170 20C145 95 110 145 50 160Z" fill="#fc8f34" />
              <path d="M120 70C155 115 110 160 45 175" fill="#2a6231" opacity="0.4" />
            </svg>
          </div>

          {/* Header / Intro Banner */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed/50 text-secondary mb-4 shadow-sm">
              <span className="material-symbols-outlined text-label-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                favorite
              </span>
              <span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                {header?.badge}
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-3 font-comfortaa">
              {header?.title}
            </h1>
            <p className="font-headline-sm text-headline-sm text-secondary-container font-bold mb-4">
              {header?.subtitle}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              {header?.description}
            </p>
          </div>

          {/* Main Content Grid: Left (Cards + Map), Right (Form + School Photo) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: Contact Details & Visual Map (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Contact Information Strip Cards (4 Kart: Telefon, Fax, E-Posta, Konum) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
                {/* 1. Phone Card */}
                <a
                  className="group flex flex-col items-center text-center p-4 sm:p-5 rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300"
                  href={`tel:${(infoCards?.phoneNumber || '').replace(/[^0-9+]/g, '')}`}
                >
                  <div className="w-11 h-11 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary group-hover:scale-110 transition-transform mb-2">
                    <span className="material-symbols-outlined text-label-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      phone_in_talk
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-outline uppercase tracking-wider mb-0.5 font-semibold">
                    {infoCards?.phoneTitle}
                  </span>
                  <span className="font-label-md text-xs sm:text-sm text-primary font-bold group-hover:text-secondary-container transition-colors">
                    {infoCards?.phoneNumber}
                  </span>
                  <span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">
                    {infoCards?.phoneHours}
                  </span>
                </a>

                {/* 2. Fax Card */}
                <a
                  className="group flex flex-col items-center text-center p-4 sm:p-5 rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300"
                  href={`tel:${(infoCards?.faxNumber || '').replace(/[^0-9+]/g, '')}`}
                >
                  <div className="w-11 h-11 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform mb-2">
                    <span className="material-symbols-outlined text-label-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      fax
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-outline uppercase tracking-wider mb-0.5 font-semibold">
                    {infoCards?.faxTitle}
                  </span>
                  <span className="font-label-md text-xs sm:text-sm text-primary font-bold group-hover:text-secondary-container transition-colors">
                    {infoCards?.faxNumber}
                  </span>
                  <span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">
                    {infoCards?.faxNote}
                  </span>
                </a>

                {/* 3. Email Card */}
                <a
                  className="group flex flex-col items-center text-center p-4 sm:p-5 rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300"
                  href={`mailto:${infoCards?.emailAddress}`}
                >
                  <div className="w-11 h-11 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-2">
                    <span className="material-symbols-outlined text-label-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      mail
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-outline uppercase tracking-wider mb-0.5 font-semibold">
                    {infoCards?.emailTitle}
                  </span>
                  <span className="font-label-md text-xs sm:text-sm text-primary font-bold group-hover:text-secondary-container transition-colors truncate max-w-full">
                    {infoCards?.emailAddress}
                  </span>
                  <span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">
                    {infoCards?.emailNote}
                  </span>
                </a>

                {/* 4. Location Badge Card */}
                <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-lg bg-surface-container-lowest shadow-sm">
                  <div className="w-11 h-11 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary mb-2">
                    <span className="material-symbols-outlined text-label-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      location_on
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-outline uppercase tracking-wider mb-0.5 font-semibold">
                    {infoCards?.locationTitle}
                  </span>
                  <span className="font-label-md text-xs sm:text-sm text-primary font-bold">
                    {infoCards?.locationCity}
                  </span>
                  <span className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">
                    {infoCards?.locationNote}
                  </span>
                </div>
              </div>

              {/* Address Bar Card */}
              <div className="flex items-start gap-4 p-5 rounded-lg bg-surface-container-low border border-amber-100/60">
                <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-label-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    pin_drop
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-headline-sm text-label-lg text-primary font-bold">
                    {addressBox?.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface font-semibold leading-relaxed">
                    {addressBox?.fullAddress}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {addressBox?.directionsNote}
                  </p>
                </div>
              </div>

              {/* Gerçek Google Maps İnteraktif Haritası */}
              <div className="relative rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 shadow-md">
                <div className="w-full h-80 sm:h-96 relative">
                  <iframe
                    title="Özel Eylül Anaokulu Kars Google Haritası"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(mapInfo?.mapQuery || 'Özel Eylül Anaokulu Kars')}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                  {/* Action Bar Floating Over Bottom Map */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse" />
                      <span className="font-label-sm text-xs sm:text-sm text-primary font-bold">
                        {mapInfo?.title}
                      </span>
                    </div>
                    <a
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary-container hover:bg-secondary text-white font-label-sm text-xs sm:text-sm font-bold transition-all shadow-md"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapInfo?.mapQuery || 'Özel Eylül Anaokulu Kars')}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>{mapInfo?.directionsText}</span>
                      <span className="material-symbols-outlined text-sm">navigation</span>
                    </a>
                  </div>
                </div>

                {/* Visiting Hours Banner Bar */}
                <div className="px-5 py-3.5 bg-surface-container flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-label-md text-primary">schedule</span>
                    <span className="font-body-sm text-xs sm:text-sm">
                      {mapInfo?.hoursLabel} <strong>{mapInfo?.visitingHours}</strong>
                    </span>
                  </div>
                  <span className="font-label-sm text-xs text-tertiary font-bold">{mapInfo?.badge}</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Campus Visual Card & Inquiry Form (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Kindergarten Real Outdoor Photograph Showcase */}
              <div className="relative rounded-lg overflow-hidden bg-surface-container-low shadow-sm group">
                <div className="w-full h-56 sm:h-64 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={campusImage?.title}
                    src={campusImage?.image}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-75"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-on-primary">
                    <p className="font-label-sm text-label-sm text-secondary-fixed font-semibold uppercase tracking-wider">
                      {campusImage?.badge}
                    </p>
                    <h4 className="font-headline-sm text-headline-sm font-bold">
                      {campusImage?.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Contact Message Form Card */}
              <div id="iletisim-formu" className="scroll-mt-24 p-6 sm:p-8 rounded-lg bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                <div className="mb-6">
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {formIntro?.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {formIntro?.description}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface mb-1 font-semibold">
                      {formIntro?.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={formIntro?.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-md border border-outline-variant/60 bg-surface-container-lowest focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none transition text-body-md"
                    />
                  </div>

                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface mb-1 font-semibold">
                      {formIntro?.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={formIntro?.phonePlaceholder}
                      className="w-full px-4 py-2.5 rounded-md border border-outline-variant/60 bg-surface-container-lowest focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none transition text-body-md"
                    />
                  </div>

                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface mb-1 font-semibold">
                      {formIntro?.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={formIntro?.emailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-md border border-outline-variant/60 bg-surface-container-lowest focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none transition text-body-md"
                    />
                  </div>

                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface mb-1 font-semibold">
                      {formIntro?.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={formIntro?.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-md border border-outline-variant/60 bg-surface-container-lowest focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none transition text-body-md resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="kvkk"
                      required
                      checked={kvkkAccepted}
                      onChange={(e) => setKvkkAccepted(e.target.checked)}
                      className="mt-1 rounded text-secondary-container focus:ring-secondary-container cursor-pointer"
                    />
                    <label htmlFor="kvkk" className="font-body-sm text-xs text-on-surface-variant cursor-pointer leading-tight">
                      {formIntro?.kvkkText}
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-6 rounded-full bg-secondary-container hover:bg-secondary text-on-secondary font-label-md text-label-md font-bold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {submitting ? 'Gönderiliyor...' : formIntro?.buttonText}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            <h3 className="text-xl font-bold text-slate-900">{formIntro?.successTitle}</h3>
            <p className="text-sm text-slate-600">
              {formIntro?.successText}
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-2.5 rounded-xl bg-secondary-container text-white font-bold text-sm hover:bg-secondary transition"
            >
              Tamam
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
