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
import { PAGE_SEO, seoGlobalContent } from './seo';
export type { PageSeo } from './seo';

export const SITE_CONTENT = {
  layout: layoutContent,
  home: { ...homeContent, seo: PAGE_SEO.home },
  about: { ...aboutContent, seo: PAGE_SEO.about },
  campus: { ...campusContent, seo: PAGE_SEO.campus },
  bem: { ...bemContent, seo: PAGE_SEO.bem },
  english: { ...englishContent, seo: PAGE_SEO.english },
  activities: { ...activitiesContent, seo: PAGE_SEO.activities },
  nutrition: { ...nutritionContent, seo: PAGE_SEO.nutrition },
  parents: { ...parentsContent, seo: PAGE_SEO.parents },
  enrollment: { ...enrollmentContent, seo: PAGE_SEO.enrollment },
  contact: { ...contactContent, seo: PAGE_SEO.contact },
  videos: { ...videosContent, seo: PAGE_SEO.videos },
  schedule: { ...scheduleContent, seo: PAGE_SEO.schedule },
  meals: { ...mealsContent, seo: PAGE_SEO.meals },
  blogPage: { ...blogPageContent, seo: PAGE_SEO.blogPage },
  portal: { ...portalContent, seo: PAGE_SEO.portal },
  seoGlobal: seoGlobalContent,
};

export type SiteContent = typeof SITE_CONTENT;
export type PageKey = keyof SiteContent;

/** Yönetim panelindeki sayfa listesi (sıra = menü sırası). */
export const PAGE_META: { key: PageKey; title: string; path: string }[] = [
  { key: 'layout', title: 'Menü & Alt Bilgi (Tüm Sayfalar)', path: '/' },
  { key: 'seoGlobal', title: 'Genel SEO Ayarları (Tüm Site)', path: '/' },
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
