'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PortalAnnouncement, StudentPortfolioItem } from '@/types/cms';

interface VeliPortaliViewProps {
  initialAnnouncements?: PortalAnnouncement[];
  initialPortfolios?: StudentPortfolioItem[];
}

export const VeliPortaliView: React.FC<VeliPortaliViewProps> = ({
  initialAnnouncements = [],
  initialPortfolios = [],
}) => {
  const [activeTab, setActiveTab] = useState<'gunluk' | 'portfolyo' | 'duyurular' | 'yemek'>('gunluk');
  const [selectedClass, setSelectedClass] = useState('4 Yaş Kelebekler Sınıfı');

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Welcome Bar */}
      <div className="rounded-[2.5rem] bg-gradient-to-r from-[#0E4984] via-[#1A3358] to-[#2A7276] p-6 sm:p-10 text-white shadow-xl mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl border border-white/30">
            🎒
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-bold mb-1">
              <span>● Canlı Veli Portalı</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-comfortaa">
              Hoş Geldiniz, Zeynep Hanım
            </h1>
            <p className="text-xs sm:text-sm text-slate-200">
              Öğrenci: <span className="font-bold text-white">Can Yılmaz</span> ({selectedClass})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-amber-200 font-bold bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">
            📅 Bugün: Okulda ve Neşeli
          </span>
          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-white text-slate-800 text-xs font-bold hover:bg-amber-100 transition-colors"
          >
            Siteden Çıkış
          </Link>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTab('gunluk')}
          className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'gunluk'
              ? 'bg-[#0E4984] text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-amber-50 border border-amber-100'
          }`}
        >
          🌞 Günlük Yaşam & Yoklama
        </button>
        <button
          onClick={() => setActiveTab('portfolyo')}
          className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'portfolyo'
              ? 'bg-[#0E4984] text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-amber-50 border border-amber-100'
          }`}
        >
          🎨 BEM Gelişim Portfolyosu
        </button>
        <button
          onClick={() => setActiveTab('duyurular')}
          className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'duyurular'
              ? 'bg-[#0E4984] text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-amber-50 border border-amber-100'
          }`}
        >
          📢 Sınıf Duyuruları
        </button>
        <button
          onClick={() => setActiveTab('yemek')}
          className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'yemek'
              ? 'bg-[#0E4984] text-white shadow-md'
              : 'bg-white text-slate-700 hover:bg-amber-50 border border-amber-100'
          }`}
        >
          🥗 Günlük Beslenme Raporu
        </button>
      </div>

      {/* TAB 1: GÜNLÜK YAŞAM */}
      {activeTab === 'gunluk' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-amber-100">
            <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#74B127] flex items-center justify-center text-2xl mb-4">
              ✅
            </div>
            <h3 className="text-base font-extrabold text-[#0E4984] font-comfortaa mb-1">
              Yoklama & Giriş Saati
            </h3>
            <div className="text-2xl font-black text-slate-800 font-comfortaa my-2">
              08:42
            </div>
            <p className="text-xs text-slate-500">
              Servis görevlisi ve nöbetçi öğretmen eşliğinde okula giriş yapıldı.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-amber-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#E5880B] flex items-center justify-center text-2xl mb-4">
              😴
            </div>
            <h3 className="text-base font-extrabold text-[#0E4984] font-comfortaa mb-1">
              Öğle Dinlenmesi
            </h3>
            <div className="text-base font-black text-slate-800 font-comfortaa my-2">
              13:00 - 14:15 (Rahat Uyudu)
            </div>
            <p className="text-xs text-slate-500">
              Masal dinletisi eşliğinde huzurlu ve kesintisiz uyku süreci tamamlandı.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-amber-100">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#2A7276] flex items-center justify-center text-2xl mb-4">
              🌟
            </div>
            <h3 className="text-base font-extrabold text-[#0E4984] font-comfortaa mb-1">
              Günün Duygusu
            </h3>
            <div className="text-base font-black text-slate-800 font-comfortaa my-2">
              Çok Neşeli & Katılımcı
            </div>
            <p className="text-xs text-slate-500">
              Bahçe oyunlarında arkadaşlarıyla lego köprüsü inşasında liderlik yaptı.
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: BEM GELİŞİM PORTFOLYOSU */}
      {activeTab === 'portfolyo' && (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-amber-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-xl font-black text-[#0E4984] font-comfortaa">
                  Can'ın BEM Çok Yönlü Zeka Gözlem Notları
                </h3>
                <p className="text-xs text-slate-500">Sınıf Öğretmeni: Elif Öğretmen</p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-[#0E4984]">
                Ekim 2026 Dönemi
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                <span className="text-xs font-bold text-[#E5880B] uppercase">Sanat ve Yaratıcılık</span>
                <h4 className="text-sm font-extrabold text-slate-800 mt-1 mb-1">Sonbahar Yaprak Kolajı</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bahçeden topladığı çınar yapraklarıyla özgün bir sincap figürü oluşturdu. İnce motor becerisi ve makas kontrolü oldukça ilerledi.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100">
                <span className="text-xs font-bold text-[#2A7276] uppercase">Bilişsel Gelişim & BEM</span>
                <h4 className="text-sm font-extrabold text-slate-800 mt-1 mb-1">Geometrik Blok Örüntüsü</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  3 farklı renkteki prizmaları simetrik olarak sıralama görevini eksiksiz ve kendi başına tamamladı.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SINIF DUYURULARI */}
      {activeTab === 'duyurular' && (
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-amber-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold">ÖNEMLİ</span>
              <span className="text-xs text-slate-400">20 Ekim 2026</span>
            </div>
            <h4 className="text-base font-extrabold text-[#0E4984] font-comfortaa mb-1">
              Doğa Parkı Sonbahar Gözlem Gezisi
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Sevgili Velilerimiz, Perşembe günü saat 10:30'da 4 ve 5 yaş gruplarımızla Çayyolu Doğa Parkı'nda sonbahar yaprak koleksiyonu etkinliği yapılacaktır. Çocuklarımızın rahat spor ayakkabı giymelerini rica ederiz.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-amber-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold">BİLGİ</span>
              <span className="text-xs text-slate-400">18 Ekim 2026</span>
            </div>
            <h4 className="text-base font-extrabold text-[#0E4984] font-comfortaa mb-1">
              All Day English Kitap Paylaşım Günü
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Cuma günü her öğrencimiz evinden en sevdiği İngilizce resimli hikaye kitabını okula getirerek arkadaşlarıyla paylaşabilir.
            </p>
          </div>
        </div>
      )}

      {/* TAB 4: BESLENME RAPORU */}
      {activeTab === 'yemek' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-amber-100">
          <h3 className="text-xl font-black text-[#0E4984] font-comfortaa mb-4">
            Bugünkü Öğün Tüketim Durumu
          </h3>
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-xs text-[#0E4984]">Sabah Kahvaltısı:</span>
                <p className="text-xs text-slate-600">Yumurta, peynir ve tam buğday ekmeği</p>
              </div>
              <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Hepsini Bitirdi ✓
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-xs text-[#E5880B]">Öğle Yemeği:</span>
                <p className="text-xs text-slate-600">Mercimek çorbası ve fırında sebzeli köfte</p>
              </div>
              <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Hepsini Bitirdi ✓
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-xs text-[#2A7276]">İkindi Beslenmesi:</span>
                <p className="text-xs text-slate-600">Ev yapımı meyveli yoğurt ve fındık</p>
              </div>
              <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Çoğunu Tüketti ✓
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
