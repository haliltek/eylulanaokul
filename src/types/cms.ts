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

// 1. Anasayfa
export interface HomePageData {
  hero: {
    quotePart1: string; // '“Güvenle'
    quotePart2: string; // 'Bugüne,'
    quotePart3: string; // 'Umutla'
    quotePart4: string; // 'Yarına...”'
    description: string;
    ctaPrimaryText: string;
    ctaPrimaryLink: string;
    heroImage: string;
    heroImageAlt: string;
  };
  pillars: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    link?: string;
  }>;
  dailyRoutine: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      time: string;
      title: string;
      desc: string;
      icon: string;
    }>;
  };
  highlightBanner: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string;
  };
  instagramShowcase: {
    title: string;
    handle: string;
    url: string;
    posts: Array<{
      id: string;
      image: string;
      caption: string;
      link: string;
    }>;
  };
}

// 2. Hakkımızda
export interface AboutPageData {
  header: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  stats: Array<{
    id: string;
    value: string;
    label: string;
    icon: string;
  }>;
  valuesTitle: string;
  values: Array<{
    id: string;
    title: string;
    desc: string;
    icon: string;
    colorBg: string;
    colorText: string;
  }>;
  showcase: {
    quote: string;
    quoteAuthor: string;
    image: string;
    imageAlt: string;
    badgeText: string;
    description?: string;
  };
}

// 3. Okulumuz
export interface CampusPageData {
  header: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  virtualTour: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    embedUrl: string;
    thumbnailImage: string;
  };
  facilities: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    features: string[];
  }>;
  gallery?: Array<{
    id: string;
    title: string;
    category?: string;
    desc?: string;
    description?: string;
    image: string;
  }>;
}

// 4. BEM Eğitim Modeli
export interface BemPageData {
  header: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  wheelHub: {
    centerTitle: string;
    centerSubtitle: string;
    sectors: Array<{
      id: string;
      name: string;
      icon: string;
      colorBg: string;
      colorText: string;
      description: string;
    }>;
  };
  showcase: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    quote: string;
    outcomes: string[];
    ctaText: string;
    ctaLink: string;
  };
}

// 5. All Day English
export interface EnglishPageData {
  header: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  features: Array<{
    id: string;
    title: string;
    desc: string;
    icon: string;
  }>;
  galleryTitle: string;
  gallerySubtitle: string;
  gallery: Array<{
    id: string;
    title: string;
    image: string;
    imageAlt: string;
    caption?: string;
  }>;
  ctaBanner: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

// 6. Zengin Etkinlik Dünyası (9 Kart)
export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  order: number;
}

export interface ActivitiesPageData {
  header: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  activities: ActivityItem[];
  footerCta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

// 7. Doğal ve Dengeli Beslenme (Haftalık Menü)
export interface DayMenu {
  dayId: 'pazartesi' | 'sali' | 'carsamba' | 'persembe' | 'cuma';
  dayName: string;
  breakfast: string;
  breakfastTime: string;
  lunch: string;
  lunchTime: string;
  snack: string;
  snackTime: string;
}

export interface NutritionPageData {
  header: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  pillars: Array<{
    id: string;
    title: string;
    desc: string;
    icon: string;
  }>;
  weeklyMenu: DayMenu[];
  dietitianNote: {
    title: string;
    content: string;
    dietitianName: string;
    dietitianTitle: string;
  };
}

// 8. Velilerimiz İçin
export interface ParentsPageData {
  header: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  portalModules: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    link: string;
    isPrimary?: boolean;
  }>;
  storyBanner: {
    image: string;
    imageAlt: string;
    badgeText: string;
    quote: string;
    author: string;
  };
  quickHelp: {
    title: string;
    desc: string;
    buttonText: string;
    phone: string;
  };
}

// 9. Kayıt ve Başvuru
export interface EnrollmentPageData {
  header: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  steps: Array<{
    stepNumber: string;
    title: string;
    description: string;
    icon: string;
  }>;
  scheduleTourCard: {
    title: string;
    description: string;
    buttonText: string;
    hoursNote: string;
    image: string;
    imageAlt: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

// 10. İletişim
export interface ContactPageData {
  header: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  infoCards: {
    phoneTitle: string;
    phoneNumber: string;
    phoneHours: string;
    faxTitle?: string;
    faxNumber?: string;
    emailTitle: string;
    emailAddress: string;
    emailNote: string;
    locationTitle: string;
    locationCity: string;
    locationNote: string;
  };
  addressBox: {
    title: string;
    fullAddress: string;
    directionsNote: string;
  };
  mapInfo: {
    title: string;
    badge: string;
    directionsUrl: string;
    visitingHours: string;
  };
  campusImage: {
    image: string;
    badge: string;
    title: string;
    subtitle: string;
  };
  formIntro: {
    title: string;
    subtitle: string;
    description?: string;
  };
}

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
  pages: {
    home: HomePageData;
    about: AboutPageData;
    campus: CampusPageData;
    bem: BemPageData;
    english: EnglishPageData;
    activities: ActivitiesPageData;
    nutrition: NutritionPageData;
    parents: ParentsPageData;
    enrollment: EnrollmentPageData;
    contact: ContactPageData;
  };
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
