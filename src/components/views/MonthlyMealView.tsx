'use client';

import React, { useState } from 'react';

const DAYS = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'] as const;

const FEATURES = [
  { icon: 'eco', label: 'Taze ve doğal malzemeler' },
  { icon: 'health_and_safety', label: 'Diyetisyen kontrolü' },
  { icon: 'event_available', label: 'Günlük taze yemekler' },
  { icon: 'soup_kitchen', label: 'Dengeli ve besleyici sıcak menü' },
];

export const MonthlyMealView: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<1 | 2 | 3 | 4>(1);
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false);

  const weeklyMenus: Record<number, Array<{ day: string; breakfast: string; lunch: string; snack: string }>> = {
    1: [
      { day: 'Pazartesi', breakfast: 'Haşlanmış Köy Yumurtası, Kaşar Peyniri, Siyah Zeytin, Ihlamur Çayı', lunch: 'Süzme Mercimek Çorbası, Fırında İzmir Köfte, Şehriyeli Bulgur Pilavı, Mevsim Salatası', snack: 'Ev Yapımı Havuçlu Tarçınlı Kek, Taze Sıkma Elma Suyu' },
      { day: 'Salı', breakfast: 'Tereyağlı Köy Ekmeği, Bal-Kaymak, Beyaz Peynir, Süt', lunch: 'Yayla Çorbası, Kıymalı Taze Fasulye, Arpa Şehriyeli Pirinç Pilavı, Ev Yoğurdu', snack: 'Fırınlanmış Elma Dilimleri, Ceviz & Kuru Üzüm' },
      { day: 'Çarşamba', breakfast: 'Ev Yapımı Omlet, Domates-Salatalık, Lor Peyniri, Taze Nane Çayı', lunch: 'Ezogelin Çorbası, Tavuklu Sebze Sote, Fırınlanmış Patates Püresi, Ayran', snack: 'Yulaflı Muzlu Kurabiye, Ilık Süt' },
      { day: 'Perşembe', breakfast: 'Fırında Kaşarlı Ekmek, Yeşillik Tabağı, Tahin-Pekmez, Süt', lunch: 'Sebze Çorbası, Anne Köftesi & Fırın Makarna, Havuç Tarator, Komposto', snack: 'Taze Mevsim Meyveleri Tabağı (Muz, Portakal), Fındık' },
      { day: 'Cuma', breakfast: 'Menemen, Köy Peyniri, Siyah Zeytin, Bitki Çayı', lunch: 'Kremalı Mantar Çorbası, Kıymalı Bezelye, Sade Pirinç Pilavı, Cacık', snack: 'Ev Yapımı Poğaça, Taze Sıkılmış Mandalina Suyu' },
    ],
    2: [
      { day: 'Pazartesi', breakfast: 'Haşlanmış Yumurta, Labne Peyniri, Salatalık, Süt', lunch: 'Tarhana Çorbası, Kuru Fasulye, Şehriyeli Pirinç Pilavı, Mevsim Turşusu', snack: 'Ev Yapımı İrmik Helvası, Ihlamur' },
      { day: 'Salı', breakfast: 'Kaşarlı Tost, Domates Dilimleri, Zeytin, Bitki Çayı', lunch: 'Tavuk Suyu Çorba, Fırında Kıymalı Karnabahar, Bulgur Pilavı, Yoğurt', snack: 'Muzlu Puding, Badem' },
      { day: 'Çarşamba', breakfast: 'Krep, Bal, Beyaz Peynir, Taze Portakal Suyu', lunch: 'Mercimek Çorbası, Izgara Tavuk But, Patates Püresi, Mevsim Salatası', snack: 'Kuru Meyveli Kek, Süt' },
      { day: 'Perşembe', breakfast: 'Peynirli Poğaça, Zeytin, Salatalık, Ihlamur Çayı', lunch: 'Şehriye Çorbası, Kıymalı Ispanak, Yoğurt, Ekmek', snack: 'Elmalı Turta, Taze Elma Dilimleri' },
      { day: 'Cuma', breakfast: 'Patatesli Omlet, Kaşar Peyniri, Zeytin, Süt', lunch: 'Domates Çorbası, Fırında Somon / Levrek, Fırın Sebze, Helva', snack: 'Ev Yapımı Simit, Taze Ayran' },
    ],
    3: [
      { day: 'Pazartesi', breakfast: 'Haşlanmış Yumurta, Beyaz Peynir, Zeytin, Süt', lunch: 'Mercimek Çorbası, Fırında Sebzeli Tavuk, Arpa Şehriyeli Pilav, Ayran', snack: 'Ev Yapımı Mozaik Pasta, Ihlamur' },
      { day: 'Salı', breakfast: 'Pankek, Pekmez, Ceviz, Ilık Süt', lunch: 'Yayla Çorbası, Kıymalı Mercimek Yemeği, Bulgur Pilavı, Cacık', snack: 'Meyveli Yoğurt Kasesi' },
      { day: 'Çarşamba', breakfast: 'Sebzeli Omlet, Kaşar Peyniri, Domates, Bitki Çayı', lunch: 'Ezogelin Çorbası, Tas Kebabı, Fırın Patates, Mevsim Salatası', snack: 'Kuru Üzümlü Kurabiye, Süt' },
      { day: 'Perşembe', breakfast: 'Simit, Beyaz Peynir, Salatalık, Zeytin, Taze Çay', lunch: 'Sebze Çorbası, Kıymalı Kabak Kalye, Yoğurt, Ekmek', snack: 'Fırın Sütlaç' },
      { day: 'Cuma', breakfast: 'Menemen, Zeytin, Lor Peyniri, Süt', lunch: 'Tarhana Çorbası, Ev Mantısı / Kıymalı Makarna, Yoğurt, Komposto', snack: 'Meyve Tabağı & Fındık İçi' },
    ],
    4: [
      { day: 'Pazartesi', breakfast: 'Yumurta, Kaşar Peyniri, Domates, Süt', lunch: 'Domates Çorbası, Fırında İzmir Köfte, Bulgur Pilavı, Mevsim Salatası', snack: 'Havuçlu Cevizli Kek, Ihlamur' },
      { day: 'Salı', breakfast: 'Kaşarlı Tost, Zeytin, Salatalık, Bitki Çayı', lunch: 'Mercimek Çorbası, Etli Türlü, Pirinç Pilavı, Yoğurt', snack: 'Muz & Ceviz İçi' },
      { day: 'Çarşamba', breakfast: 'Krep, Bal-Tereyağı, Beyaz Peynir, Süt', lunch: 'Tavuk Çorbası, Fırında Köfte Patates, Ayran, Ekmek', snack: 'Peynirli Poğaça, Mandalina' },
      { day: 'Perşembe', breakfast: 'Patatesli Yumurta, Zeytin, Domates, Bitki Çayı', lunch: 'Yayla Çorbası, Kıymalı Taze Fasulye, Şehriyeli Pilav, Cacık', snack: 'Sütlü İrmik Tatlısı' },
      { day: 'Cuma', breakfast: 'Omlet, Kaşar Peyniri, Zeytin, Süt', lunch: 'Sebze Çorbası, Fırında Tavuk Pirzola, Patates Püresi, Salata', snack: 'Ev Yapımı Çıtır Kurabiye, Süt' },
    ],
  };

  const today = weeklyMenus[selectedWeek][selectedDay];
  const meals = [
    { icon: 'bakery_dining', label: 'Kahvaltı', time: '09:15', text: today.breakfast },
    { icon: 'restaurant', label: 'Öğle Yemeği', time: '12:00', text: today.lunch },
    { icon: 'nutrition', label: 'İkindi', time: '14:30', text: today.snack },
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-16 space-y-6 sm:space-y-8">
        {/* Başlık */}
        <header>
          <h1 className="font-headline-xl text-3xl sm:text-headline-xl text-primary tracking-tight leading-tight">
            Doğal ve Dengeli Beslenme
          </h1>
          <p className="font-headline-sm text-lg sm:text-headline-sm text-secondary font-bold mt-1">
            Sağlıklı Çocuklar, Mutlu Yarınlar
          </p>
        </header>

        {/* Kapak fotoğrafı */}
        <div className="relative rounded-3xl overflow-hidden shadow-md aspect-[16/8] sm:aspect-[16/6] bg-surface-container-high">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDPtPuOkoCFkx4vkNoJTLA0Ul1IQs_atMo-Mh2b-M4DK981siYIn5sPXDE7Z41c0lJrDUHSNWOtEC6jQE1mQAv-iYOxP69s4nGmJuMqRqamlIxH246wiGWbnCkw4h6tS-2on-7k5EygAAFeZagzxym3RSx0XZE11hkLk3Mc37UmdKrH5Z42tg_2DUENN6ADUzHkb8rP80gItK_k1kIvelwKiMCtZ6LyHO6MzPYMxMMSDKbPqUgZf-o"
            alt="Eylül Çocuk Akademisi doğal ve dengeli beslenme saati"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 4 özellik kartı */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.label}
              className="bg-surface-container-lowest rounded-2xl p-2 sm:p-5 flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl border border-secondary/40 bg-secondary-fixed/20 flex items-center justify-center text-secondary mb-2 sm:mb-3">
                <span className="material-symbols-outlined text-[22px] sm:text-[30px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                  {f.icon}
                </span>
              </div>
              <span className="text-[10px] sm:text-sm leading-tight font-semibold text-primary">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Haftalık menü */}
        <section aria-label="Haftalık Yemek Menüsü" className="space-y-4">
          <div className="flex items-end justify-between gap-3 flex-wrap">
            <h2 className="font-headline-md text-xl sm:text-headline-md text-primary tracking-tight">Haftalık Yemek Menüsü</h2>
            <div className="flex items-center gap-1.5" role="group" aria-label="Hafta seçimi">
              {[1, 2, 3, 4].map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setSelectedWeek(w as 1 | 2 | 3 | 4)}
                  aria-pressed={selectedWeek === w}
                  className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-colors cursor-pointer ${
                    selectedWeek === w
                      ? 'bg-secondary-container text-on-secondary'
                      : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant/50 hover:text-primary'
                  }`}
                >
                  {w}. Hafta
                </button>
              ))}
            </div>
          </div>

          {/* Gün sekmeleri */}
          <div className="grid grid-cols-5 gap-1.5 sm:gap-3" role="tablist" aria-label="Gün seçimi">
            {DAYS.map((d, i) => (
              <button
                key={d}
                type="button"
                role="tab"
                aria-selected={selectedDay === i}
                onClick={() => setSelectedDay(i)}
                className={`py-2.5 sm:py-3 rounded-xl text-[11px] sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedDay === i
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface-container-lowest text-primary border border-outline-variant/40 hover:border-primary/40'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Öğünler */}
          <div className="space-y-2.5" role="tabpanel">
            {meals.map((m) => (
              <div key={m.label} className="flex items-stretch gap-2 sm:gap-3">
                <div className="w-[112px] sm:w-44 shrink-0 bg-surface-container-lowest rounded-xl border border-outline-variant/40 px-2.5 sm:px-4 py-2.5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px] text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>
                    {m.icon}
                  </span>
                  <div className="leading-tight">
                    <div className="text-xs sm:text-sm font-bold text-primary">{m.label}</div>
                    <div className="text-[10px] text-on-surface-variant">{m.time}</div>
                  </div>
                </div>
                <div className="flex-1 bg-surface-container-lowest rounded-xl border border-outline-variant/40 px-3 sm:px-5 py-2.5 flex items-center text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alerji notu */}
        <div className="flex items-center gap-3 px-1 text-on-surface-variant">
          <span className="material-symbols-outlined text-[26px] text-primary/70" style={{ fontVariationSettings: "'FILL' 0" }}>
            diversity_3
          </span>
          <p className="text-xs sm:text-sm leading-snug">Alerji ve özel beslenme ihtiyaçları için bireysel planlama yapılır.</p>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="text-xs font-semibold text-primary underline underline-offset-4 hover:text-secondary cursor-pointer"
          >
            Aylık menü posterini büyüt
          </button>
        </div>

        {/* Modal Görsel Büyütme */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center text-sm font-semibold transition cursor-pointer"
                aria-label="Kapat"
              >
                ✕
              </button>
              <h3 className="font-headline-sm text-xl text-primary mb-4">Aylık Yemek Menüsü Posteri &amp; Diyetisyen Onayı</h3>
              <div className="aspect-[16/10] bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-center overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDPtPuOkoCFkx4vkNoJTLA0Ul1IQs_atMo-Mh2b-M4DK981siYIn5sPXDE7Z41c0lJrDUHSNWOtEC6jQE1mQAv-iYOxP69s4nGmJuMqRqamlIxH246wiGWbnCkw4h6tS-2on-7k5EygAAFeZagzxym3RSx0XZE11hkLk3Mc37UmdKrH5Z42tg_2DUENN6ADUzHkb8rP80gItK_k1kIvelwKiMCtZ6LyHO6MzPYMxMMSDKbPqUgZf-o"
                  alt="Aylık Menü Posteri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
