'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const CourseScheduleView: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<'3yas' | '4yas' | '5yas'>('4yas');
  const [modalOpen, setModalOpen] = useState(false);

  const scheduleData = {
    '3yas': [
      { time: '08:30 - 09:15', mon: 'Karşılama & Serbest Oyun', tue: 'Karşılama & Serbest Oyun', wed: 'Karşılama & Serbest Oyun', thu: 'Karşılama & Serbest Oyun', fri: 'Karşılama & Serbest Oyun' },
      { time: '09:15 - 09:45', mon: 'Organik Sabah Kahvaltısı', tue: 'Organik Sabah Kahvaltısı', wed: 'Organik Sabah Kahvaltısı', thu: 'Organik Sabah Kahvaltısı', fri: 'Organik Sabah Kahvaltısı' },
      { time: '09:45 - 10:30', mon: 'Duyusal Oyun & Motor Beceri', tue: 'All Day English (Songs)', wed: 'Kil & Parmak Boyası', thu: 'Müzik & Orff Ritim', fri: 'Bahçe Keşfi & Doğa' },
      { time: '10:30 - 11:15', mon: 'Montessori Bireysel Çalışma', tue: 'Masal Saati & Canlandırma', wed: 'Jimnastik & Esneme', thu: 'All Day English (Games)', fri: 'Sosyal Beceri Çemberi' },
      { time: '11:30 - 12:30', mon: 'Öğle Yemeği & Hijyen', tue: 'Öğle Yemeği & Hijyen', wed: 'Öğle Yemeği & Hijyen', thu: 'Öğle Yemeği & Hijyen', fri: 'Öğle Yemeği & Hijyen' },
      { time: '12:30 - 14:00', mon: 'Dinlenme & Masal Uykusu', tue: 'Dinlenme & Masal Uykusu', wed: 'Dinlenme & Masal Uykusu', thu: 'Dinlenme & Masal Uykusu', fri: 'Dinlenme & Masal Uykusu' },
      { time: '14:15 - 15:00', mon: 'İkindi Beslenmesi', tue: 'İkindi Beslenmesi', wed: 'İkindi Beslenmesi', thu: 'İkindi Beslenmesi', fri: 'İkindi Beslenmesi' },
      { time: '15:00 - 16:30', mon: 'Serbest Bahçe Oyunları', tue: 'İngilizce Hikaye Saati', wed: 'Grup Dans & Ritim', thu: 'Küçük Kas Atölyesi', fri: 'Haftalık Kapanış & Uğurlama' },
    ],
    '4yas': [
      { time: '08:30 - 09:15', mon: 'Karşılama & Sabah Çemberi', tue: 'Karşılama & Sabah Çemberi', wed: 'Karşılama & Sabah Çemberi', thu: 'Karşılama & Sabah Çemberi', fri: 'Karşılama & Sabah Çemberi' },
      { time: '09:15 - 09:45', mon: 'Organik Sabah Kahvaltısı', tue: 'Organik Sabah Kahvaltısı', wed: 'Organik Sabah Kahvaltısı', thu: 'Organik Sabah Kahvaltısı', fri: 'Organik Sabah Kahvaltısı' },
      { time: '09:45 - 10:30', mon: 'BEM Bilişsel Gelişim', tue: 'All Day English (Vocabulary)', wed: 'Görsel Sanatlar & Çizim', thu: 'Müzik & Solfej', fri: 'Doğa Laboratuvarı & Deney' },
      { time: '10:30 - 11:15', mon: 'Jimnastik & Koordinasyon', tue: 'Akıl ve Zeka Oyunları', wed: 'Yaratıcı Drama & Sahne', thu: 'Robotik Kodlama Temelleri', fri: 'Değerler Eğitimi' },
      { time: '11:30 - 12:30', mon: 'Öğle Yemeği & Öz Bakım', tue: 'Öğle Yemeği & Öz Bakım', wed: 'Öğle Yemeği & Öz Bakım', thu: 'Öğle Yemeği & Öz Bakım', fri: 'Öğle Yemeği & Öz Bakım' },
      { time: '12:30 - 13:45', mon: 'Sessiz Dinlenme & Okuma', tue: 'Sessiz Dinlenme & Okuma', wed: 'Sessiz Dinlenme & Okuma', thu: 'Sessiz Dinlenme & Okuma', fri: 'Sessiz Dinlenme & Okuma' },
      { time: '14:00 - 14:30', mon: 'Taze İkindi Kahvaltısı', tue: 'Taze İkindi Kahvaltısı', wed: 'Taze İkindi Kahvaltısı', thu: 'Taze İkindi Kahvaltısı', fri: 'Taze İkindi Kahvaltısı' },
      { time: '14:30 - 16:30', mon: 'İngilizce Günlük Yaşam', tue: 'Bahçe Açık Hava Oyunları', wed: 'Montessori Matematik', thu: 'Ritim & Perküsyon', fri: 'Serbest Atölye & Eve Dönüş' },
    ],
    '5yas': [
      { time: '08:30 - 09:15', mon: 'Karşılama & Gündem Çemberi', tue: 'Karşılama & Gündem Çemberi', wed: 'Karşılama & Gündem Çemberi', thu: 'Karşılama & Gündem Çemberi', fri: 'Karşılama & Gündem Çemberi' },
      { time: '09:15 - 09:45', mon: 'Organik Sabah Kahvaltısı', tue: 'Organik Sabah Kahvaltısı', wed: 'Organik Sabah Kahvaltısı', thu: 'Organik Sabah Kahvaltısı', fri: 'Organik Sabah Kahvaltısı' },
      { time: '09:45 - 10:30', mon: 'İlkokula Hazırlık & Çizgi', tue: 'All Day English (Conversation)', wed: 'Matematik & Sayı Algısı', thu: 'Satranç Stratejileri', fri: 'Bilimsel Deneyler & STEM' },
      { time: '10:30 - 11:15', mon: 'Robotik Kodlama & Labirent', tue: 'Piyano & Kulak Eğitimi', wed: 'Jimnastik & Atletizm', thu: 'Diksiyon & Masal Tiyatrosu', fri: 'Ekoloji & Bahçe Bakımı' },
      { time: '11:30 - 12:30', mon: 'Öğle Yemeği & Sosyalleşme', tue: 'Öğle Yemeği & Sosyalleşme', wed: 'Öğle Yemeği & Sosyalleşme', thu: 'Öğle Yemeği & Sosyalleşme', fri: 'Öğle Yemeği & Sosyalleşme' },
      { time: '12:30 - 13:30', mon: 'Kitap İnceleme & Mindfulness', tue: 'Kitap İnceleme & Mindfulness', wed: 'Kitap İnceleme & Mindfulness', thu: 'Kitap İnceleme & Mindfulness', fri: 'Kitap İnceleme & Mindfulness' },
      { time: '13:45 - 14:15', mon: 'Mevsim Meyvesi & İkindi', tue: 'Mevsim Meyvesi & İkindi', wed: 'Mevsim Meyvesi & İkindi', thu: 'Mevsim Meyvesi & İkindi', fri: 'Mevsim Meyvesi & İkindi' },
      { time: '14:30 - 16:30', mon: 'English Project Work', tue: 'Akıl Oyunları Turnuvası', wed: 'Görsel Tasarım & Portfolyo', thu: 'Açık Hava Spor Parkuru', fri: 'Hafta Sonu Hazırlığı' },
    ],
  };

  return (
    <div className="w-full bg-[#FEFAF2]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-12">
        {/* İkonsuz Editoryal Başlık */}
        <header className="text-center max-w-3xl mx-auto pt-4 border-b border-amber-200/50 pb-8">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-100/70 text-[#0A3B69] text-xs font-bold uppercase tracking-wider mb-3">
            2024 - 2025 EĞİTİM VE ATÖLYE AKIŞI
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A3B69] tracking-tight leading-tight">
            Özel Eylül Anaokulu Ders Programı
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl mx-auto font-sans">
            Her yaş grubunun bilişsel, bedensel ve duygusal gelişim evresine uygun olarak hazırlanmış dengeli haftalık akış planımız.
          </p>
        </header>

        {/* Poster / İndirilebilir Belge Kartı (İkonsuz, Editoryal) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold text-[#E2AD50] uppercase tracking-wider">
              RESMİ PROGRAM BELGESİ
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0A3B69] mt-1">
              Haftalık Müfredat ve Atölye Çizelgesi
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-lg">
              Güncel ders çizelgemizi tam ekran olarak görüntüleyebilir veya arşivlemek üzere PDF formatında indirebilirsiniz.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-[#0A3B69] font-bold text-xs uppercase tracking-wider transition cursor-pointer"
            >
              Tam Boy İncele
            </button>
            <a
              href="/images/logo-kullanim-kilavuzu.png"
              download
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-full bg-[#0A3B69] hover:bg-[#1A3358] text-white font-bold text-xs uppercase tracking-wider transition shadow-sm"
            >
              PDF İndir
            </a>
          </div>
        </div>

        {/* Yaş Grubu Seçici Sekmeler (İkonsuz, Sade) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {[
            { key: '3yas', label: '3 Yaş Grubu' },
            { key: '4yas', label: '4 Yaş Grubu' },
            { key: '5yas', label: '5-6 Yaş Grubu (Hazırlık)' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedGroup(tab.key as any)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedGroup === tab.key
                  ? 'bg-[#0A3B69] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-amber-100/60 border border-amber-200/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tablo Tasarımı (Editoryal Serif Başlıklar ve Net Çizgiler) */}
        <div className="overflow-x-auto rounded-3xl bg-white border border-amber-100 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-amber-50/60 text-[#0A3B69] border-b border-amber-100 font-bold">
                <th className="py-4 px-4 sm:px-6 w-36 font-serif">Saat Aralığı</th>
                <th className="py-4 px-3 sm:px-4 font-serif">Pazartesi</th>
                <th className="py-4 px-3 sm:px-4 font-serif">Salı</th>
                <th className="py-4 px-3 sm:px-4 font-serif">Çarşamba</th>
                <th className="py-4 px-3 sm:px-4 font-serif">Perşembe</th>
                <th className="py-4 px-3 sm:px-4 font-serif">Cuma</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {scheduleData[selectedGroup].map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50 hover:bg-amber-50/30 transition-colors'}
                >
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0A3B69] whitespace-nowrap bg-amber-50/20">
                    {row.time}
                  </td>
                  <td className="py-3.5 px-3 sm:px-4 text-slate-700">{row.mon}</td>
                  <td className="py-3.5 px-3 sm:px-4 text-slate-700">{row.tue}</td>
                  <td className="py-3.5 px-3 sm:px-4 text-slate-700">{row.wed}</td>
                  <td className="py-3.5 px-3 sm:px-4 text-slate-700">{row.thu}</td>
                  <td className="py-3.5 px-3 sm:px-4 text-slate-700">{row.fri}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Editoryal Bilgilendirme Notu (İkonsuz) */}
        <div className="rounded-2xl bg-amber-100/30 border border-amber-200/50 p-6 text-xs text-slate-600 leading-relaxed">
          <strong className="text-[#0A3B69] block mb-1">Pedagojik Not:</strong>
          Özel Eylül Anaokulu ders akışında çocuklarımızın doğayla bağı kesintisiz tutulur. Hava şartlarına bağlı olarak etkinliklerin bir bölümü açık hava bahçe atölyelerimize taşınmaktadır. Tüm branş dersleri uzman eğitmenlerimiz eşliğinde uygulanmaktadır.
        </div>

        {/* Modal Görsel Büyütme */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative max-w-4xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-base cursor-pointer"
              >
                ✕
              </button>
              <h3 className="font-serif text-lg font-bold text-[#0A3B69] mb-3">
                Özel Eylül Anaokulu Haftalık Ders Planı Şeması
              </h3>
              <div className="aspect-[16/10] bg-slate-50 rounded-2xl border border-amber-100 flex items-center justify-center overflow-hidden p-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUEjo9ZUCqHf32UKFjkA5D2wQxvju9qjMX-D_MSPE2QORQFbLCdNZY7u6C8jhkLy3XvDQWo8iJ9pkyPKQS5-3r-y_NAzdX2mlNA1sUsrphVqX_M9hKuI2kXrPqBTYwboAulTXIkrcGAm0h3pajyjECeRqEuXMAhwFlbpoq87qupfDRgWRn-rN0ACRSj6w79BOs4BhXwL0tRnliB70m0cB0Htwvosw54J6XVfj9_dhYNOdGZXyd6ktQ"
                  alt="Ders Programı Detayı"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
