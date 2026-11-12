/**
 * Sitenin tüm sayfa içerikleri (varsayılanlar). Yönetim panelinde kaydedilen değerler bunların üzerine
 * bindirilir (bkz. lib/content.ts → deepMerge). Panel formları da bu yapıdan otomatik üretilir.
 */
import { layoutContent } from './layout';
import { homeContent } from './home';
import { aboutContent } from './about';
import { campusContent } from './campus';
import { bemContent } from './bem';
import { englishContent } from './english';
import { activitiesContent } from './activities';
import { nutritionContent } from './nutrition';
import { parentsContent } from './parents';
import { enrollmentContent } from './enrollment';
import { contactContent } from './contact';
import { videosContent } from './videos';
import { scheduleContent } from './schedule';
import { mealsContent } from './meals';
import { blogPageContent } from './blogPage';
import { portalContent } from './portal';

export const SITE_CONTENT = {
  layout: layoutContent,
  home: homeContent,
  about: aboutContent,
  campus: campusContent,
  bem: bemContent,
  english: englishContent,
  activities: activitiesContent,
  nutrition: nutritionContent,
  parents: parentsContent,
  enrollment: enrollmentContent,
  contact: contactContent,
  videos: videosContent,
  schedule: scheduleContent,
  meals: mealsContent,
  blogPage: blogPageContent,
  portal: portalContent,
};

export type SiteContent = typeof SITE_CONTENT;
export type PageKey = keyof SiteContent;

/** Yönetim panelindeki sayfa listesi (sıra = menü sırası). */
export const PAGE_META: { key: PageKey; title: string; path: string }[] = [
  { key: 'layout', title: 'Menü & Alt Bilgi (Tüm Sayfalar)', path: '/' },
  { key: 'home', title: 'Anasayfa', path: '/' },
  { key: 'about', title: 'Hakkımızda', path: '/hakkimizda' },
  { key: 'campus', title: 'Okulumuz', path: '/okulumuz' },
  { key: 'bem', title: 'BEM Eğitim Modeli', path: '/egitim-modeli/bem' },
  { key: 'english', title: 'All Day English', path: '/egitim-modeli/all-day-english' },
  { key: 'activities', title: 'Etkinlikler & Branşlar', path: '/etkinlikler' },
  { key: 'nutrition', title: 'Doğal ve Dengeli Beslenme', path: '/beslenme' },
  { key: 'parents', title: 'Velilerimiz İçin', path: '/velilerimiz-icin' },
  { key: 'enrollment', title: 'Kayıt ve Başvuru', path: '/kayit-ve-basvuru' },
  { key: 'contact', title: 'İletişim & Lokasyon', path: '/iletisim' },
  { key: 'videos', title: 'Etkinlik Videoları', path: '/icerikler/etkinlik-videolari' },
  { key: 'schedule', title: 'Ders Programı', path: '/icerikler/ders-programi' },
  { key: 'meals', title: 'Aylık Yemek Listesi', path: '/icerikler/aylik-yemek-listesi' },
  { key: 'blogPage', title: 'Blog Sayfası Yazıları', path: '/blog' },
  { key: 'portal', title: 'Veli Portalı', path: '/veli-portali' },
];

export const isPageKey = (k: string): k is PageKey => Object.prototype.hasOwnProperty.call(SITE_CONTENT, k);
