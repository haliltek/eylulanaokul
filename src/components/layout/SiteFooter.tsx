import React from 'react';
import Link from 'next/link';
import { Logo } from '../common/Logo';
import { SiteSettings } from '@/types/cms';

interface SiteFooterProps {
  settings?: Partial<SiteSettings>;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ settings }) => {
  const currentYear = new Date().getFullYear();
  const phone = settings?.phone || '0 (551) 589 32 12';
  const phoneDisplay = settings?.phoneDisplay || '0 (551) 589 32 12';
  const email = settings?.email || 'info@eylulanaokulu.com.tr';
  const address = settings?.address || 'Şehitler mh. 108 Sokak, No: 8 AL (Villalar Bölgesi)';
  const districtCity = 'KARS';
  const workingHoursWeekday = settings?.workingHoursWeekday || 'Hafta içi 08.00 - 17.00';
  const workingHoursSaturday = settings?.workingHoursSaturday || 'Hafta sonu kapalı';

  return (
    <footer className="w-full border-t border-amber-100/70 bg-[#FEFAF2]/90 mt-16 pt-12 pb-8 text-slate-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="flex flex-col space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-2">
              Çocuklarımızın doğuştan gelen merak duygusunu besleyerek, deneyimleyerek öğrenmelerini ve kendi yeteneklerini güvenle keşfetmelerini sağlıyoruz. Sevgi, ilgi ve pedagojik özenle geleceğe hazırlanıyoruz.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {settings?.instagramUrl && (
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-amber-100/80 hover:bg-[#E5880B] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              {settings?.facebookUrl && (
                <a
                  href={settings.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-amber-100/80 hover:bg-[#0E4984] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              )}
              {settings?.youtubeUrl && (
                <a
                  href={settings.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-amber-100/80 hover:bg-[#ba1a1a] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Education & Model */}
          <div>
            <h4 className="font-extrabold text-[#0E4984] text-sm uppercase tracking-wider mb-4 font-comfortaa">
              Eğitim & Yaklaşım
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/egitim-modeli/bem" className="hover:text-[#E5880B] transition-colors">
                  Bütünleştirilmiş Eğitim Modeli (BEM)
                </Link>
              </li>
              <li>
                <Link href="/egitim-modeli/all-day-english" className="hover:text-[#E5880B] transition-colors">
                  All Day English (Tam Gün İngilizce)
                </Link>
              </li>
              <li>
                <Link href="/etkinlikler" className="hover:text-[#E5880B] transition-colors">
                  Zengin Etkinlik Dünyası & Atölyeler
                </Link>
              </li>
              <li>
                <Link href="/beslenme" className="hover:text-[#E5880B] transition-colors">
                  Doğal ve Dengeli Beslenme Menüsü
                </Link>
              </li>
              <li>
                <Link href="/okulumuz" className="hover:text-[#E5880B] transition-colors">
                  360° Sanal Tur & Kampüs Alanları
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Parents & Corporate */}
          <div>
            <h4 className="font-extrabold text-[#0E4984] text-sm uppercase tracking-wider mb-4 font-comfortaa">
              Veliler & Kurumsal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/blog" className="font-semibold text-primary hover:text-[#E5880B] transition-colors">
                  Eğitim &amp; Ebeveynlik Blogu
                </Link>
              </li>
              <li>
                <Link href="/icerikler/etkinlik-videolari" className="hover:text-[#E5880B] transition-colors">
                  Etkinlik Videoları
                </Link>
              </li>
              <li>
                <Link href="/icerikler/ders-programi" className="hover:text-[#E5880B] transition-colors">
                  Ders Programı Çizelgesi
                </Link>
              </li>
              <li>
                <Link href="/icerikler/aylik-yemek-listesi" className="hover:text-[#E5880B] transition-colors">
                  Aylık Yemek Listesi
                </Link>
              </li>
              <li>
                <Link href="/velilerimiz-icin" className="hover:text-[#E5880B] transition-colors">
                  Velilerimiz İçin Bilgi Rehberi
                </Link>
              </li>
              <li>
                <Link href="/beslenme" className="hover:text-[#E5880B] transition-colors">
                  Haftalık Yemek Menüsü Takvimi
                </Link>
              </li>
              <li>
                <Link href="/kayit-ve-basvuru" className="hover:text-[#E5880B] transition-colors">
                  Kayıt Süreci ve Okul Ziyareti
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-[#E5880B] transition-colors">
                  Hakkımızda & 12 Yıllık Deneyim
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-slate-400 hover:text-[#0E4984] transition-colors">
                  Yönetim Paneli Girişi
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Visiting */}
          <div>
            <h4 className="font-extrabold text-[#0E4984] text-sm uppercase tracking-wider mb-4 font-comfortaa">
              İletişim & Randevu
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <span className="text-[#E5880B] text-base leading-none">📍</span>
                <div>
                  <div className="font-bold text-slate-800">{address}</div>
                  <div className="text-slate-500">{districtCity}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#E5880B] text-base leading-none">📞</span>
                <a href={`tel:${phone}`} className="font-bold text-[#0E4984] hover:text-[#E5880B]">
                  {phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#E5880B] text-base leading-none">✉️</span>
                <a href={`mailto:${email}`} className="text-slate-600 hover:text-[#0E4984]">
                  {email}
                </a>
              </div>
              <div className="text-[11px] text-slate-500 pt-1 border-t border-amber-100">
                <div className="font-semibold text-slate-700">Çalışma Saatleri:</div>
                <div>Hafta İçi: {workingHoursWeekday}</div>
                <div>Cumartesi: {workingHoursSaturday}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="font-extrabold text-[#0E4984]">EYLÜL ÇOCUK AKADEMİSİ ANAOKULU</span>
            <span>• © {currentYear} Tüm Hakları Saklıdır.</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/gizlilik-politikasi" className="hover:text-[#0E4984] transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kvkk-aydinlatma-metni" className="hover:text-[#0E4984] transition-colors">
              KVKK Aydınlatma Metni
            </Link>
            <Link href="/cerez-politikasi" className="hover:text-[#0E4984] transition-colors">
              Çerezler
            </Link>
            <Link href="/iletisim" className="hover:text-[#0E4984] transition-colors">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
