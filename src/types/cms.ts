import type { SiteContent, PageKey } from '../data/content';
/**
 * Eylül Çocuk Akademisi - CMS, CRM, SEO & Portal Veri Tipleri
 * Bu tipler web sitesi (10 sayfa + İçerikler + Blog), Materio MUI Admin (/admin),
 * SerpBear & Unlighthouse SEO Suite ve Web Analitik motoru arasında veri kontratını belirler.
 */

export interface SiteSettings {
  schoolName: string;
  tagline: string;
  motto: string;
  phone: string;
  phoneDisplay: string;
  fax?: string;
  email: string;
  address: string;
  addressDetail: string;
  city: string;
  district: string;
  workingHoursWeekday: string;
  workingHoursSaturday: string;
  googleMapsUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  linkedinUrl: string;
  whatsappNumber: string;
  academicYear: string;
  logoText: string;
  logoLeafColor: string;
}

export interface NavItem {
  id: string;
  title: string;
  href: string;
  order: number;
  isActive: boolean;
}

// Sayfa içerik tipleri: varsayılan içerikten türetilir (src/data/content). Yeni alan eklemek için
// ilgili içerik dosyasına alanı eklemek yeterlidir; panel formu ve tip otomatik güncellenir.
export type HomePageData = SiteContent['home'];
export type AboutPageData = SiteContent['about'];
export type CampusPageData = SiteContent['campus'];
export type BemPageData = SiteContent['bem'];
export type EnglishPageData = SiteContent['english'];
export type ActivitiesPageData = SiteContent['activities'];
export type NutritionPageData = SiteContent['nutrition'];
export type ParentsPageData = SiteContent['parents'];
export type EnrollmentPageData = SiteContent['enrollment'];
export type ContactPageData = SiteContent['contact'];
export type DayMenu = NutritionPageData['weeklyMenu'][number];

// --- 'İÇERİKLER' MENÜSÜ MODÜLLERİ ---

// 11. Etkinlik Videoları
export interface ActivityVideoItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: string;
  date: string;
}

// 12. Ders Programı
export interface CourseScheduleRow {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

export interface CourseScheduleAgeTab {
  id: string;
  name: string;
  rows: CourseScheduleRow[];
}

export interface CourseScheduleData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  scheduleImageUrl: string;
  ageGroupTabs: CourseScheduleAgeTab[];
}

// 13. Aylık Yemek Listesi
export interface MonthlyMealDay {
  dayName: string;
  breakfast: string;
  lunch: string;
  snack: string;
}

export interface MonthlyMealWeek {
  id: string;
  weekName: string;
  days: MonthlyMealDay[];
}

export interface MonthlyMealListData {
  badge: string;
  title: string;
  monthLabel: string;
  description: string;
  menuImageUrl: string;
  weeks: MonthlyMealWeek[];
}

// --- YENİ BLOG MODÜLÜ (WSI-62) ---

export interface BlogPostSeo {
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  seoScore: number;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  readTime: string;
  status: 'published' | 'draft';
  views: number;
  seo: BlogPostSeo;
}

export interface BlogData {
  heroTitle: string;
  heroSubtitle: string;
  categories: string[];
  posts: BlogPostItem[];
}

// --- YENİ SEO SUITE & WEB ANALİTİK MODÜLLERİ (WSI-62) ---

// SerpBear Sıralama Takibi (github.com/towfiqi/serpbear)
export interface SerpKeywordItem {
  id: string;
  keyword: string;
  device: 'desktop' | 'mobile';
  country: string;
  city: string;
  position: number;
  previousPosition: number;
  bestPosition: number;
  volume: number;
  url: string;
  history: number[];
  tags: string[];
  lastChecked: string;
}

// Unlighthouse SEO & Sayfa Denetimi (github.com/harlan-zw/unlighthouse)
export interface UnlighthousePageAudit {
  path: string;
  title: string;
  seoScore: number;
  performanceScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  lcpMs: number;
  responseTimeMs: number;
  titleLength: number;
  metaDescriptionLength: number;
  h1Count: number;
  imagesMissingAlt: number;
  canonicalValid: boolean;
  indexable: boolean;
  issues: string[];
}

// Ziyaretçi & Tıklama Takibi (Kaç kişi girdi, nereye baktı, nereye tıkladı)
export interface WebAnalyticsDailyTraffic {
  date: string;
  visitors: number;
  pageViews: number;
  organic: number;
}

export interface WebAnalyticsPageMetric {
  path: string;
  label: string;
  views: number;
  uniqueVisitors: number;
  avgTimeSec: number;
  bounceRate: number;
}

export interface WebAnalyticsClickEvent {
  id: string;
  label: string;
  targetPath: string;
  category: string;
  count: number;
  lastClickedAt: string;
}

export interface WebAnalyticsTrafficSource {
  source: string;
  sessions: number;
  percentage: number;
}

export interface WebAnalyticsData {
  summary: {
    totalVisitors: number;
    uniqueVisitors: number;
    totalPageViews: number;
    avgSessionDurationSec: number;
    bounceRate: number;
    conversionCount: number;
  };
  dailyTraffic: WebAnalyticsDailyTraffic[];
  pageMetrics: WebAnalyticsPageMetric[];
  clickEvents: WebAnalyticsClickEvent[];
  trafficSources: WebAnalyticsTrafficSource[];
}

export interface SeoSuiteData {
  serpbear: {
    domain: string;
    serpBearUrl: string;
    apiKey?: string;
    lastUpdated: string;
    keywords: SerpKeywordItem[];
  };
  unlighthouse: {
    lastScanAt: string;
    reportUrl: string;
    summary: {
      seo: number;
      performance: number;
      accessibility: number;
      bestPractices: number;
      totalPages: number;
    };
    pages: UnlighthousePageAudit[];
  };
  analytics: WebAnalyticsData;
}

// --- CMS & İŞ MODÜLLERİ ---

// Medya Kütüphanesi
export interface MediaItem {
  id: string;
  filename: string;
  originalName: string;
  url: string;
  mimeType: string;
  sizeBytes: number;
  width?: number;
  height?: number;
  altText: string;
  tags: string[];
  uploadedAt: string;
}

// Veli CRM (Başvuru & Randevu Hunisi)
export type LeadStatus =
  | 'yeni'
  | 'iletisim_bekliyor'
  | 'goruldu'
  | 'nitelikli'
  | 'randevu_verildi'
  | 'ziyaret_edildi'
  | 'on_kayit'
  | 'kesin_kayit'
  | 'kaybedildi';

export interface CrmLead {
  id: string;
  parentName: string;
  phone: string;
  email?: string;
  childName: string;
  childAge: number;
  childBirthDate?: string;
  desiredClass?: string;
  source: 'web_form' | 'telefon' | 'whatsapp' | 'instagram' | 'google_ads' | 'tavsiye';
  status: LeadStatus;
  notes: string;
  scheduledVisitDate?: string;
  createdAt: string;
  updatedAt: string;
  assignedStaff?: string;
}

// Veli Portalı Kayıtları
export interface PortalAnnouncement {
  id: string;
  title: string;
  content: string;
  targetClass: string;
  publishDate: string;
  isImportant: boolean;
  author: string;
}

export interface StudentPortfolioItem {
  id: string;
  studentId: string;
  studentName: string;
  className: string;
  title: string;
  bemCategory: 'Sosyal Duygusal' | 'Dil Gelişimi' | 'Bilişsel Gelişim' | 'Sanat ve Yaratıcılık' | 'Fiziksel Gelişim' | 'Değerler Eğitimi';
  date: string;
  teacherNotes: string;
  mediaUrl?: string;
  ratingGrade?: string;
}

// İK (İş İlanları ve Başvurular)
export interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: 'Tam Zamanlı' | 'Yarı Zamanlı' | 'Stajyer';
  description: string;
  requirements: string[];
  isActive: boolean;
  postedAt: string;
}

export interface JobApplication {
  id: string;
  positionId: string;
  positionTitle: string;
  candidateName: string;
  phone: string;
  email: string;
  experienceYears: number;
  coverLetter?: string;
  cvFileUrl?: string;
  status: 'inceleniyor' | 'mulakata_cagirildi' | 'kabul' | 'red';
  appliedAt: string;
}

// Sosyal Medya Yayın Planlama
export interface SocialPostPlan {
  id: string;
  platform: 'instagram' | 'facebook' | 'youtube' | 'linkedin';
  type: 'gonderi' | 'reels' | 'hikaye' | 'video';
  scheduledDate: string;
  caption: string;
  hashtags: string[];
  mediaUrl: string;
  status: 'taslak' | 'onaylandi' | 'yayinda' | 'arsiv';
}

// Bütünleşik CMS Veri Deposu
export interface CmsStore {
  siteSettings: SiteSettings;
  navigation: NavItem[];
  /** Panelde kaydedilen sayfa içerikleri (yalnız değiştirilen alanlar değil, tüm sayfa). Varsayılanlar src/data/content. */
  pages: Partial<Record<PageKey, unknown>>;
  /** Uygulanmış içerik düzeltme yamaları (bkz. lib/contentPatches.ts) */
  _contentPatches?: string[];
  activityVideos: ActivityVideoItem[];
  courseSchedule: CourseScheduleData;
  monthlyMealList: MonthlyMealListData;
  blog: BlogData;
  seo: SeoSuiteData;
  mediaLibrary: MediaItem[];
  crmLeads: CrmLead[];
  portalAnnouncements: PortalAnnouncement[];
  studentPortfolios: StudentPortfolioItem[];
  jobPositions: JobPosition[];
  jobApplications: JobApplication[];
  socialPosts: SocialPostPlan[];
  _lastUpdated: string;
  _version: string;
}
