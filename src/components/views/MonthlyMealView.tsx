'use client';

import React, { useState } from 'react';

export const MonthlyMealView: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<1 | 2 | 3 | 4>(1);
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

  return (
    <div className="w-full bg-[#FAFAF8] text-slate-900 min-h-screen">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-12">
        {/* Header - Editoryal Tipografi */}
        <div className="text-center max-w-2xl mx-auto border-b border-stone-200/80 pb-8">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-stone-500 mb-3">
            Eylül Çocuk Akademisi — Doğal Mutfak &amp; Beslenme
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-4">
            Aylık Yemek Listesi
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Katkısız, taze ve yerel malzemelerle her sabah okulumuzun kendi mutfağında hazırlanan 
            3 öğünlük dengeli beslenme menümüz.
          </p>
        </div>

        {/* Belge ve Bilgi Şeridi - Temiz Kenarlıklar ve Butonlar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 font-semibold">
              Resmi Takvim
            </span>
            <h3 className="font-serif text-xl font-medium text-slate-900">
              Ekim 2026 Onaylı Beslenme Çizelgesi
            </h3>
            <p className="text-xs text-stone-500">
              Uzman diyetisyen onaylı resmi menü tablosunu tam boy görüntüleyebilir veya indirebilirsiniz.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 font-medium text-xs tracking-wider uppercase hover:border-slate-900 hover:text-slate-900 transition-colors cursor-pointer text-center"
            >
              Menüyü Büyüt
            </button>
            <a
              href="/images/logo-kullanim-kilavuzu.png"
              download
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-full bg-slate-900 text-white font-medium text-xs tracking-wider uppercase hover:bg-slate-800 transition-colors shadow-sm text-center"
            >
              PDF İndir
            </a>
          </div>
        </div>

        {/* Hafta Seçici Sekmeler - Sade Editoryal Çizgi */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {[1, 2, 3, 4].map((w) => (
            <button
              key={w}
              onClick={() => setSelectedWeek(w as 1 | 2 | 3 | 4)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedWeek === w
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:text-slate-900 border border-stone-200 hover:border-stone-400'
              }`}
            >
              {w}. Hafta Menüsü
            </button>
          ))}
        </div>

        {/* Menü Tablosu - İskandinav Editoryal Masa Düzeni */}
        <div className="overflow-x-auto rounded-2xl bg-white border border-stone-200 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-stone-50 text-slate-800 border-b border-stone-200 font-serif text-sm">
                <th className="py-4 px-5 sm:px-6 w-36 font-semibold">Gün</th>
                <th className="py-4 px-4 font-semibold">Sabah Kahvaltısı <span className="font-sans text-[11px] text-stone-400 font-normal ml-1">09:15</span></th>
                <th className="py-4 px-4 font-semibold">Öğle Yemeği <span className="font-sans text-[11px] text-stone-400 font-normal ml-1">12:00</span></th>
                <th className="py-4 px-4 font-semibold">İkindi Beslenmesi <span className="font-sans text-[11px] text-stone-400 font-normal ml-1">14:30</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-sans">
              {weeklyMenus[selectedWeek].map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-white hover:bg-stone-50/60 transition-colors' : 'bg-stone-50/40 hover:bg-stone-50/80 transition-colors'}
                >
                  <td className="py-4 px-5 sm:px-6 font-semibold text-slate-900 whitespace-nowrap font-serif text-sm">
                    {row.day}
                  </td>
                  <td className="py-4 px-4 text-stone-700 leading-relaxed">{row.breakfast}</td>
                  <td className="py-4 px-4 text-slate-900 font-medium leading-relaxed">{row.lunch}</td>
                  <td className="py-4 px-4 text-stone-700 leading-relaxed">{row.snack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Diyetisyen İlkeleri - Tipografik Numaralandırılmış Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <span className="font-mono text-xs text-stone-400 font-semibold block mb-2">01 / İLKE</span>
            <h4 className="font-serif font-semibold text-base text-slate-900 mb-1">Katkısız &amp; Doğal</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Mutfakta bulyon, hazır salça ve rafine glikoz şurubu asla kullanılmaz. Çorbalarımız taze ilikli kemik suyu ile hazırlanır.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <span className="font-mono text-xs text-stone-400 font-semibold block mb-2">02 / İLKE</span>
            <h4 className="font-serif font-semibold text-base text-slate-900 mb-1">Günlük Taze Pişirim</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tüm öğünler servis saatinden hemen önce aşçımız tarafından pişirilir; ısıtılmış veya dünden kalan gıdalar menüye girmez.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <span className="font-mono text-xs text-stone-400 font-semibold block mb-2">03 / İLKE</span>
            <h4 className="font-serif font-semibold text-base text-slate-900 mb-1">Kişiye Özel Alerjen Takibi</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Laktoz, glüten, kuruyemiş ve yumurta alerjisi bulunan öğrencilerimize kayıt formundaki beyan doğrultusunda ayrı tabak servis edilir.
            </p>
          </div>
        </div>

        {/* Modal Görsel Büyütme */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center text-sm font-semibold transition cursor-pointer"
                aria-label="Kapat"
              >
                ✕
              </button>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-4">
                Aylık Yemek Menüsü Posteri &amp; Diyetisyen Onayı
              </h3>
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
