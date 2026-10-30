import fs from 'fs';
import path from 'path';
import {
  CmsStore,
  SiteSettings,
  HomePageData,
  AboutPageData,
  CampusPageData,
  BemPageData,
  EnglishPageData,
  ActivitiesPageData,
  NutritionPageData,
  ParentsPageData,
  EnrollmentPageData,
  ContactPageData,
  ActivityVideoItem,
  CourseScheduleData,
  MonthlyMealListData,
  BlogData,
  BlogPostItem,
  SeoSuiteData,
  SerpKeywordItem,
  UnlighthousePageAudit,
  WebAnalyticsData,
  MediaItem,
  CrmLead,
  PortalAnnouncement,
  StudentPortfolioItem,
  JobPosition,
  JobApplication,
  SocialPostPlan
} from '../types/cms';
import { initialCmsData } from '../data/initial-cms-data';
import { initialBlogData, initialSeoSuiteData } from '../data/initial-seo-blog';

// Kalıcı JSON veri deposu dosya yolu
const DATA_DIR = path.resolve(process.cwd(), 'data');
const STORE_FILE = path.join(DATA_DIR, 'cms-store.json');

/**
 * Dosya sistemi tabanlı sıfır bağımlılıklı, sunucu kapansa dahi verileri koruyan
 * ve TypeScript ile %100 tip güvenliği sağlayan veritabanı motoru.
 */
class CmsDatabase {
  private inMemoryCache: CmsStore | null = null;

  constructor() {
    this.ensureInitialized();
  }

  /**
   * Veri deposunun dizin ve dosya varlığını kontrol eder, yoksa seed verisiyle başlatır.
   */
  private ensureInitialized(): void {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }

      if (!fs.existsSync(STORE_FILE)) {
        fs.writeFileSync(STORE_FILE, JSON.stringify(initialCmsData, null, 2), 'utf-8');
        this.inMemoryCache = { ...initialCmsData };
      } else {
        const raw = fs.readFileSync(STORE_FILE, 'utf-8');
        this.inMemoryCache = JSON.parse(raw);
      }
    } catch (error) {
      console.error('[CmsDatabase] Başlatma hatası, in-memory yedek açılıyor:', error);
      this.inMemoryCache = { ...initialCmsData };
    }
  }

  /**
   * Tüm veri deposunu getirir.
   */
  public async getStore(): Promise<CmsStore> {
    if (!this.inMemoryCache) {
      this.ensureInitialized();
    }
    return this.inMemoryCache!;
  }

  /**
   * Tüm depoyu atomik olarak diske yazar (Crash-Safe).
   */
  private async persist(): Promise<void> {
    if (!this.inMemoryCache) return;
    this.inMemoryCache._lastUpdated = new Date().toISOString();

    const tempPath = `${STORE_FILE}.tmp.${Date.now()}`;
    try {
      await fs.promises.writeFile(tempPath, JSON.stringify(this.inMemoryCache, null, 2), 'utf-8');
      await fs.promises.rename(tempPath, STORE_FILE);
    } catch (err) {
      console.error('[CmsDatabase] Yazma hatası:', err);
      if (fs.existsSync(tempPath)) {
        try { fs.unlinkSync(tempPath); } catch {}
      }
      throw err;
    }
  }

  // --- GENEL AYARLAR & NAVİGASYON ---

  public async getSiteSettings(): Promise<SiteSettings> {
    const store = await this.getStore();
    return store.siteSettings;
  }

  public async updateSiteSettings(settings: Partial<SiteSettings>): Promise<SiteSettings> {
    const store = await this.getStore();
    store.siteSettings = { ...store.siteSettings, ...settings };
    await this.persist();
    return store.siteSettings;
  }

  public async getNavigation() {
    const store = await this.getStore();
    return store.navigation.sort((a, b) => a.order - b.order);
  }

  // --- 10 SAYFA CMS GET & UPDATE METOTLARI ---

  public async getHomePage(): Promise<HomePageData> {
    const store = await this.getStore();
    return store.pages.home;
  }

  public async updateHomePage(data: Partial<HomePageData>): Promise<HomePageData> {
    const store = await this.getStore();
    store.pages.home = { ...store.pages.home, ...data };
    await this.persist();
    return store.pages.home;
  }

  public async getAboutPage(): Promise<AboutPageData> {
    const store = await this.getStore();
    return store.pages.about;
  }

  public async updateAboutPage(data: Partial<AboutPageData>): Promise<AboutPageData> {
    const store = await this.getStore();
    store.pages.about = { ...store.pages.about, ...data };
    await this.persist();
    return store.pages.about;
  }

  public async getCampusPage(): Promise<CampusPageData> {
    const store = await this.getStore();
    return store.pages.campus;
  }

  public async updateCampusPage(data: Partial<CampusPageData>): Promise<CampusPageData> {
    const store = await this.getStore();
    store.pages.campus = { ...store.pages.campus, ...data };
    await this.persist();
    return store.pages.campus;
  }

  public async getBemPage(): Promise<BemPageData> {
    const store = await this.getStore();
    return store.pages.bem;
  }

  public async updateBemPage(data: Partial<BemPageData>): Promise<BemPageData> {
    const store = await this.getStore();
    store.pages.bem = { ...store.pages.bem, ...data };
    await this.persist();
    return store.pages.bem;
  }

  public async getEnglishPage(): Promise<EnglishPageData> {
    const store = await this.getStore();
    return store.pages.english;
  }

  public async updateEnglishPage(data: Partial<EnglishPageData>): Promise<EnglishPageData> {
    const store = await this.getStore();
    store.pages.english = { ...store.pages.english, ...data };
    await this.persist();
    return store.pages.english;
  }

  public async getActivitiesPage(): Promise<ActivitiesPageData> {
    const store = await this.getStore();
    return store.pages.activities;
  }

  public async updateActivitiesPage(data: Partial<ActivitiesPageData>): Promise<ActivitiesPageData> {
    const store = await this.getStore();
    store.pages.activities = { ...store.pages.activities, ...data };
    await this.persist();
    return store.pages.activities;
  }

  public async getNutritionPage(): Promise<NutritionPageData> {
    const store = await this.getStore();
    return store.pages.nutrition;
  }

  public async updateNutritionPage(data: Partial<NutritionPageData>): Promise<NutritionPageData> {
    const store = await this.getStore();
    store.pages.nutrition = { ...store.pages.nutrition, ...data };
    await this.persist();
    return store.pages.nutrition;
  }

  public async getParentsPage(): Promise<ParentsPageData> {
    const store = await this.getStore();
    return store.pages.parents;
  }

  public async updateParentsPage(data: Partial<ParentsPageData>): Promise<ParentsPageData> {
    const store = await this.getStore();
    store.pages.parents = { ...store.pages.parents, ...data };
    await this.persist();
    return store.pages.parents;
  }

  public async getEnrollmentPage(): Promise<EnrollmentPageData> {
    const store = await this.getStore();
    return store.pages.enrollment;
  }

  public async updateEnrollmentPage(data: Partial<EnrollmentPageData>): Promise<EnrollmentPageData> {
    const store = await this.getStore();
    store.pages.enrollment = { ...store.pages.enrollment, ...data };
    await this.persist();
    return store.pages.enrollment;
  }

  public async getContactPage(): Promise<ContactPageData> {
    const store = await this.getStore();
    return store.pages.contact;
  }

  public async updateContactPage(data: Partial<ContactPageData>): Promise<ContactPageData> {
    const store = await this.getStore();
    store.pages.contact = { ...store.pages.contact, ...data };
    await this.persist();
    return store.pages.contact;
  }

  // --- 'İÇERİKLER' MENÜSÜ MODÜLLERİ ---

  public async getActivityVideos(): Promise<ActivityVideoItem[]> {
    const store = await this.getStore();
    return store.activityVideos || [];
  }

  public async addActivityVideo(video: Omit<ActivityVideoItem, 'id'>): Promise<ActivityVideoItem> {
    const store = await this.getStore();
    const newVideo: ActivityVideoItem = {
      ...video,
      id: `vid-${Date.now()}`
    };
    if (!store.activityVideos) store.activityVideos = [];
    store.activityVideos.unshift(newVideo);
    await this.persist();
    return newVideo;
  }

  public async deleteActivityVideo(id: string): Promise<boolean> {
    const store = await this.getStore();
    if (!store.activityVideos) return false;
    const prevLen = store.activityVideos.length;
    store.activityVideos = store.activityVideos.filter(v => v.id !== id);
    if (store.activityVideos.length !== prevLen) {
      await this.persist();
      return true;
    }
    return false;
  }

  public async getCourseSchedule(): Promise<CourseScheduleData> {
    const store = await this.getStore();
    return store.courseSchedule;
  }

  public async updateCourseSchedule(data: Partial<CourseScheduleData>): Promise<CourseScheduleData> {
    const store = await this.getStore();
    store.courseSchedule = { ...store.courseSchedule, ...data };
    await this.persist();
    return store.courseSchedule;
  }

  public async getMonthlyMealList(): Promise<MonthlyMealListData> {
    const store = await this.getStore();
    return store.monthlyMealList;
  }

  public async updateMonthlyMealList(data: Partial<MonthlyMealListData>): Promise<MonthlyMealListData> {
    const store = await this.getStore();
    store.monthlyMealList = { ...store.monthlyMealList, ...data };
    await this.persist();
    return store.monthlyMealList;
  }

  // --- YENİ BLOG MODÜLÜ METOTLARI (WSI-62 / WSI-64) ---

  public async getBlogData(): Promise<BlogData> {
    const store = await this.getStore();
    if (!store.blog) {
      store.blog = initialBlogData;
      await this.persist();
    }
    return store.blog;
  }

  public async getBlogPosts(category?: string, publishedOnly = true): Promise<BlogPostItem[]> {
    const store = await this.getStore();
    if (!store.blog) store.blog = initialBlogData;
    let posts = store.blog.posts;
    if (publishedOnly) {
      posts = posts.filter(p => p.status === 'published');
    }
    if (category && category !== 'Tümü') {
      posts = posts.filter(p => p.category === category);
    }
    return [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  public async getBlogPostBySlug(slug: string): Promise<BlogPostItem | null> {
    const store = await this.getStore();
    if (!store.blog) store.blog = initialBlogData;
    const post = store.blog.posts.find(p => p.slug === slug);
    if (post) {
      post.views += 1;
      await this.persist();
      return post;
    }
    return null;
  }

  public async incrementBlogPostViews(slug: string): Promise<void> {
    const store = await this.getStore();
    if (!store.blog) return;
    const post = store.blog.posts.find(p => p.slug === slug);
    if (post) {
      post.views = (post.views || 0) + 1;
      await this.persist();
    }
  }

  public async updateBlogData(data: BlogData): Promise<BlogData> {
    const store = await this.getStore();
    store.blog = data;
    await this.persist();
    return store.blog;
  }

  public async saveBlogPost(post: Partial<BlogPostItem> & { title: string }): Promise<BlogPostItem> {
    const store = await this.getStore();
    if (!store.blog) store.blog = initialBlogData;

    const slug = post.slug || post.title.toLowerCase().replace(/[^a-z0-9ğüşıöç]+/g, '-').replace(/(^-|-$)/g, '');
    if (post.id) {
      const idx = store.blog.posts.findIndex(p => p.id === post.id);
      if (idx !== -1) {
        store.blog.posts[idx] = {
          ...store.blog.posts[idx],
          ...post,
          slug,
          views: post.views !== undefined ? post.views : store.blog.posts[idx].views
        } as BlogPostItem;
        await this.persist();
        return store.blog.posts[idx];
      }
    }

    const newPost: BlogPostItem = {
      id: post.id || `blog-${Date.now()}`,
      slug,
      title: post.title,
      excerpt: post.excerpt || '',
      content: post.content || [''],
      category: post.category || 'Çocuk Gelişimi',
      coverImage: post.coverImage || '/images/hero-classroom-smile.jpg',
      author: post.author || 'Eylül Çocuk Akademisi',
      publishedAt: post.publishedAt || new Date().toISOString().split('T')[0],
      readTime: post.readTime || '4 dk',
      status: (post.status as any) || 'published',
      views: post.views || 0,
      seo: post.seo || {
        focusKeyword: post.title,
        metaTitle: `${post.title} | Eylül Çocuk Akademisi`,
        metaDescription: post.excerpt || post.title,
        seoScore: 85
      }
    };

    store.blog.posts.unshift(newPost);
    await this.persist();
    return newPost;
  }

  public async deleteBlogPost(id: string): Promise<boolean> {
    const store = await this.getStore();
    if (!store.blog) return false;
    const prevLen = store.blog.posts.length;
    store.blog.posts = store.blog.posts.filter(p => p.id !== id);
    if (store.blog.posts.length !== prevLen) {
      await this.persist();
      return true;
    }
    return false;
  }

  // --- YENİ SEO SUITE & WEB ANALİTİK METOTLARI (WSI-62 / WSI-64) ---

  public async getSeoData(): Promise<SeoSuiteData> {
    const store = await this.getStore();
    if (!store.seo) {
      store.seo = initialSeoSuiteData;
      await this.persist();
    }
    return store.seo;
  }

  public async updateSeoData(data: Partial<SeoSuiteData>): Promise<SeoSuiteData> {
    const store = await this.getStore();
    if (!store.seo) store.seo = initialSeoSuiteData;
    store.seo = {
      ...store.seo,
      ...data
    };
    await this.persist();
    return store.seo;
  }

  public async recordAnalyticsEvent(event: { type: 'pageview' | 'click'; path?: string; label?: string; targetPath?: string; category?: string }): Promise<void> {
    const store = await this.getStore();
    if (!store.seo) store.seo = initialSeoSuiteData;
    const analytics = store.seo.analytics;

    if (event.type === 'pageview') {
      analytics.summary.totalPageViews += 1;
      const path = event.path || '/';
      const metric = analytics.pageMetrics.find(p => p.path === path);
      if (metric) {
        metric.views += 1;
      } else {
        analytics.pageMetrics.push({
          path,
          label: path,
          views: 1,
          uniqueVisitors: 1,
          avgTimeSec: 60,
          bounceRate: 30
        });
      }
    } else if (event.type === 'click') {
      const label = event.label || event.targetPath || 'Tıklama';
      let clk = analytics.clickEvents.find(c => c.label === label || c.targetPath === event.targetPath);
      if (clk) {
        clk.count += 1;
        clk.lastClickedAt = new Date().toISOString();
      } else {
        analytics.clickEvents.push({
          id: `clk-${Date.now()}`,
          label,
          targetPath: event.targetPath || '#',
          category: event.category || 'Etkileşim',
          count: 1,
          lastClickedAt: new Date().toISOString()
        });
      }
    }
    await this.persist();
  }

  public async getSeoSuite(): Promise<SeoSuiteData> {
    return this.getSeoData();
  }

  public async getSerpKeywords(): Promise<SerpKeywordItem[]> {
    const seo = await this.getSeoData();
    return seo.serpbear.keywords;
  }

  public async updateSerpKeywords(keywords: SerpKeywordItem[]): Promise<SerpKeywordItem[]> {
    const seo = await this.getSeoData();
    seo.serpbear.keywords = keywords;
    seo.serpbear.lastUpdated = new Date().toISOString();
    await this.updateSeoData({ serpbear: seo.serpbear });
    return seo.serpbear.keywords;
  }

  public async getUnlighthouseAudits(): Promise<UnlighthousePageAudit[]> {
    const seo = await this.getSeoData();
    return seo.unlighthouse.pages;
  }

  public async updateUnlighthouseAudits(summary: SeoSuiteData['unlighthouse']['summary'], pages: UnlighthousePageAudit[]): Promise<SeoSuiteData['unlighthouse']> {
    const seo = await this.getSeoData();
    seo.unlighthouse = {
      ...seo.unlighthouse,
      lastScanAt: new Date().toISOString(),
      summary,
      pages
    };
    await this.updateSeoData({ unlighthouse: seo.unlighthouse });
    return seo.unlighthouse;
  }

  public async getWebAnalytics(): Promise<WebAnalyticsData> {
    const seo = await this.getSeoData();
    return seo.analytics;
  }

  public async trackPageView(path: string): Promise<void> {
    await this.recordAnalyticsEvent({ type: 'pageview', path });
  }

  public async trackClickEvent(clickId: string): Promise<void> {
    await this.recordAnalyticsEvent({ type: 'click', label: clickId, targetPath: clickId });
  }

  // --- MEDYA KÜTÜPHANESİ ---

  public async getMediaItems(): Promise<MediaItem[]> {
    const store = await this.getStore();
    return [...store.mediaLibrary].sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
  }

  public async addMediaItem(item: Omit<MediaItem, 'id' | 'uploadedAt'>): Promise<MediaItem> {
    const store = await this.getStore();
    const newItem: MediaItem = {
      ...item,
      id: `med-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      uploadedAt: new Date().toISOString()
    };
    store.mediaLibrary.push(newItem);
    await this.persist();
    return newItem;
  }

  public async deleteMediaItem(id: string): Promise<boolean> {
    const store = await this.getStore();
    const prevLen = store.mediaLibrary.length;
    store.mediaLibrary = store.mediaLibrary.filter(m => m.id !== id);
    if (store.mediaLibrary.length !== prevLen) {
      await this.persist();
      return true;
    }
    return false;
  }

  // --- VELİ CRM ---

  public async getCrmLeads(filterStatus?: string): Promise<CrmLead[]> {
    const store = await this.getStore();
    if (filterStatus) {
      return store.crmLeads.filter(l => l.status === filterStatus);
    }
    return [...store.crmLeads].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  public async createCrmLead(lead: Omit<CrmLead, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: CrmLead['status'] }): Promise<CrmLead> {
    const store = await this.getStore();
    const newLead: CrmLead = {
      ...lead,
      id: `lead-${Date.now()}`,
      status: lead.status || 'yeni',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    store.crmLeads.unshift(newLead);
    await this.persist();
    return newLead;
  }

  public async updateCrmLead(id: string, updates: Partial<CrmLead>): Promise<CrmLead | null> {
    const store = await this.getStore();
    const index = store.crmLeads.findIndex(l => l.id === id);
    if (index === -1) return null;

    store.crmLeads[index] = {
      ...store.crmLeads[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    await this.persist();
    return store.crmLeads[index];
  }

  public async deleteCrmLead(id: string): Promise<boolean> {
    const store = await this.getStore();
    const prevLen = store.crmLeads.length;
    store.crmLeads = store.crmLeads.filter(l => l.id !== id);
    if (store.crmLeads.length !== prevLen) {
      await this.persist();
      return true;
    }
    return false;
  }

  // --- VELİ PORTALI DUYURULARI ---

  public async getAnnouncements(targetClass?: string): Promise<PortalAnnouncement[]> {
    const store = await this.getStore();
    if (!targetClass || targetClass === 'Tümü') {
      return [...store.portalAnnouncements].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    }
    return store.portalAnnouncements.filter(a => a.targetClass === 'Tümü' || a.targetClass === targetClass);
  }

  public async addAnnouncement(ann: Omit<PortalAnnouncement, 'id' | 'publishDate'>): Promise<PortalAnnouncement> {
    const store = await this.getStore();
    const newAnn: PortalAnnouncement = {
      ...ann,
      id: `ann-${Date.now()}`,
      publishDate: new Date().toISOString()
    };
    store.portalAnnouncements.unshift(newAnn);
    await this.persist();
    return newAnn;
  }

  // --- ÖĞRENCİ GELİŞİM PORTFOLYOSU ---

  public async getStudentPortfolios(studentId?: string): Promise<StudentPortfolioItem[]> {
    const store = await this.getStore();
    if (studentId) {
      return store.studentPortfolios.filter(p => p.studentId === studentId);
    }
    return store.studentPortfolios;
  }

  public async addStudentPortfolioItem(item: Omit<StudentPortfolioItem, 'id'>): Promise<StudentPortfolioItem> {
    const store = await this.getStore();
    const newItem: StudentPortfolioItem = {
      ...item,
      id: `port-${Date.now()}`
    };
    store.studentPortfolios.unshift(newItem);
    await this.persist();
    return newItem;
  }

  // --- İK & SOSYAL MEDYA ---

  public async getJobPositions(activeOnly = true): Promise<JobPosition[]> {
    const store = await this.getStore();
    return activeOnly ? store.jobPositions.filter(j => j.isActive) : store.jobPositions;
  }

  public async addJobApplication(app: Omit<JobApplication, 'id' | 'appliedAt' | 'status'>): Promise<JobApplication> {
    const store = await this.getStore();
    const newApp: JobApplication = {
      ...app,
      id: `app-${Date.now()}`,
      status: 'inceleniyor',
      appliedAt: new Date().toISOString()
    };
    store.jobApplications.unshift(newApp);
    await this.persist();
    return newApp;
  }

  public async getSocialPosts(): Promise<SocialPostPlan[]> {
    const store = await this.getStore();
    return store.socialPosts;
  }

  public async saveSocialPost(post: Omit<SocialPostPlan, 'id'> & { id?: string }): Promise<SocialPostPlan> {
    const store = await this.getStore();
    if (post.id) {
      const idx = store.socialPosts.findIndex(s => s.id === post.id);
      if (idx !== -1) {
        store.socialPosts[idx] = { ...store.socialPosts[idx], ...post };
        await this.persist();
        return store.socialPosts[idx];
      }
    }
    const newPost: SocialPostPlan = {
      ...post,
      id: `soc-${Date.now()}`
    };
    store.socialPosts.unshift(newPost);
    await this.persist();
    return newPost;
  }
  public async resetToSeed(): Promise<CmsStore> {
    this.inMemoryCache = JSON.parse(JSON.stringify(initialCmsData));
    await this.persist();
    return this.inMemoryCache!;
  }
}

export const db = new CmsDatabase();
export default db;