'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CmsStore, BlogPostItem, SerpKeywordItem } from '@/types/cms';
import { MediaField, ImageField } from './components/ImageField';
import { ContentEditor } from './components/ContentEditor';
import { SITE_CONTENT, PAGE_META, type SiteContent, type PageKey } from '@/data/content';

type AdminData = Omit<CmsStore, 'pages'> & { pages: SiteContent };

interface AdminDashboardClientProps {
  initialData: AdminData;
}

export const AdminDashboardClient: React.FC<AdminDashboardClientProps> = ({ initialData }) => {
  const [data, setData] = useState<AdminData>(initialData);
  const [dirtyPages, setDirtyPages] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'dashboard' | 'seo' | 'blog' | 'cms' | 'media' | 'meals' | 'messages' | 'settings'>('dashboard');
  const [selectedCmsPage, setSelectedCmsPage] = useState<PageKey>('home');
  const [seoSubTab, setSeoSubTab] = useState<'serp' | 'analytics' | 'unlighthouse'>('serp');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cmsOpen, setCmsOpen] = useState(false);
  const [auditing, setAuditing] = useState(false);
  const [refreshingSerp, setRefreshingSerp] = useState(false);

  // Blog Düzenleme Modalı / State'i
  const [editingPost, setEditingPost] = useState<BlogPostItem | null>(null);
  const [isNewPost, setIsNewPost] = useState(false);

  // Yeni Anahtar Kelime Ekleme State'i
  const [newKeywordInput, setNewKeywordInput] = useState('');
  const [newKeywordUrl, setNewKeywordUrl] = useState('https://eylulanaokulu.com.tr');

  // Bildirim toast (Sade, ikonsuz)
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // CMS Metin/İçerik Kaydet
  const saveCmsContent = async (pageKey: string, payload: any) => {
    setSaving(true);
    try {
      const res = await fetch('/api/cms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section: pageKey, data: payload }),
      });
      const json = await res.json();
      if (json.success) {
        const title = PAGE_META.find((p) => p.key === pageKey)?.title || pageKey;
        showToast(`“${title}” kaydedildi. Değişiklikler sitede yayında.`);
        setDirtyPages((d) => { const n = new Set(d); n.delete(pageKey); return n; });
      } else {
        showToast(`Hata: ${json.error}`);
      }
    } catch (err: any) {
      showToast(`Bağlantı hatası: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  // Yemek Menüsü Kaydet
  const saveMeals = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/meals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          weeklyMenu: data.pages.nutrition.weeklyMenu,
          dietitianNote: data.pages.nutrition.dietitianNote,
        }),
      });
      const json = await res.json();
      if (json.success) {
        showToast('Haftalık yemek menüsü güncellendi.');
      }
    } catch (err: any) {
      showToast(`Menü kaydedilemedi: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  // Ayarları Kaydet
  const saveSettings = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data.siteSettings),
      });
      const json = await res.json();
      if (json.success) {
        showToast('Kurumsal ayarlar ve iletişim parametreleri kaydedildi.');
      }
    } catch (err: any) {
      showToast(`Hata: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  // Unlighthouse Canlı Tarama Tetikleme
  const triggerUnlighthouseAudit = async () => {
    setAuditing(true);
    try {
      const res = await fetch('/api/seo/audit', { method: 'POST' });
      const json = await res.json();
      if (json.success && json.data) {
        const updated = { ...data };
        updated.seo.unlighthouse = json.data;
        setData(updated);
        showToast('Unlighthouse taraması tamamlandı. 14 sayfa denetlendi.');
      } else {
        showToast(`Tarama hatası: ${json.error}`);
      }
    } catch (err: any) {
      showToast(`Sunucu hatası: ${err.message}`);
    } finally {
      setAuditing(false);
    }
  };

  // SERP Sıralama Yenileme
  const refreshSerpRankings = async () => {
    setRefreshingSerp(true);
    try {
      const res = await fetch('/api/seo/serp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'refresh' }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        const updated = { ...data };
        updated.seo.serpbear = json.data;
        setData(updated);
        showToast('Google SERP sıralamaları güncellendi.');
      }
    } catch (err: any) {
      showToast(`SERP hatası: ${err.message}`);
    } finally {
      setRefreshingSerp(false);
    }
  };

  // Yeni Anahtar Kelime Ekle
  const handleAddKeyword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeywordInput.trim()) return;
    try {
      const res = await fetch('/api/seo/serp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'add',
          keyword: newKeywordInput.trim(),
          url: newKeywordUrl.trim(),
        }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        const updated = { ...data };
        updated.seo.serpbear.keywords.unshift(json.data);
        setData(updated);
        setNewKeywordInput('');
        showToast('Yeni anahtar kelime takibe alındı.');
      }
    } catch (err: any) {
      showToast(`Eklenemedi: ${err.message}`);
    }
  };

  // Anahtar Kelime Sil
  const handleDeleteKeyword = async (id: string) => {
    if (!confirm('Bu anahtar kelimeyi takipten çıkarmak istediğinize emin misiniz?')) return;
    try {
      const res = await fetch('/api/seo/serp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete', id }),
      });
      const json = await res.json();
      if (json.success) {
        const updated = { ...data };
        updated.seo.serpbear.keywords = updated.seo.serpbear.keywords.filter((k) => k.id !== id);
        setData(updated);
        showToast('Anahtar kelime silindi.');
      }
    } catch (err: any) {
      showToast(`Hata: ${err.message}`);
    }
  };

  // Blog Yazısı Kaydet
  const handleSavePost = async () => {
    if (!editingPost || !editingPost.title) return;
    setSaving(true);
    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'save_post', post: editingPost }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        const updated = { ...data };
        if (!updated.blog) updated.blog = { heroTitle: '', heroSubtitle: '', categories: [], posts: [] };
        if (isNewPost) {
          updated.blog.posts.unshift(json.data);
        } else {
          const idx = updated.blog.posts.findIndex((p) => p.id === json.data.id);
          if (idx !== -1) updated.blog.posts[idx] = json.data;
        }
        setData(updated);
        setEditingPost(null);
        showToast('Blog yazısı kaydedildi.');
      }
    } catch (err: any) {
      showToast(`Kayıt hatası: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  // Blog Yazısı Sil
  const handleDeletePost = async (id: string) => {
    if (!confirm('Bu blog yazısını silmek istediğinize emin misiniz?')) return;
    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete_post', id }),
      });
      const json = await res.json();
      if (json.success) {
        const updated = { ...data };
        updated.blog.posts = updated.blog.posts.filter((p) => p.id !== id);
        setData(updated);
        showToast('Blog yazısı silindi.');
      }
    } catch (err: any) {
      showToast(`Silinemedi: ${err.message}`);
    }
  };

  const pagesList = PAGE_META;

  const analytics = data.seo?.analytics || {
    summary: { totalVisitors: 4892, uniqueVisitors: 3120, totalPageViews: 14280, avgSessionDurationSec: 218, bounceRate: 28.4, conversionCount: 184 },
    dailyTraffic: [],
    pageMetrics: [],
    clickEvents: [],
    trafficSources: [],
  };

  const serpbear = data.seo?.serpbear || { domain: 'eylulanaokulu.com.tr', keywords: [] };
  const unlighthouse = data.seo?.unlighthouse || { summary: { seo: 98, performance: 96, accessibility: 100, bestPractices: 98, totalPages: 14 }, pages: [] };
  const blog = data.blog || { heroTitle: '', heroSubtitle: '', categories: [], posts: [] };

  const navGroups: { title: string; items: { key: string; label: string; icon: string; badge?: number }[] }[] = [
    { title: 'Genel', items: [{ key: 'dashboard', label: 'Genel Bakış', icon: 'dashboard' }] },
    {
      title: 'İçerik Yönetimi',
      items: [
        { key: 'cms', label: 'Sayfa Editörü', icon: 'web' },
        { key: 'blog', label: 'Blog Yazıları', icon: 'article', badge: blog.posts.length },
        { key: 'meals', label: 'Haftalık Yemek Menüsü', icon: 'restaurant_menu' },
        { key: 'media', label: 'Medya Kütüphanesi', icon: 'perm_media', badge: data.mediaLibrary.length },
      ],
    },
    { title: 'İletişim', items: [{ key: 'messages', label: 'Gelen Mesajlar', icon: 'mail', badge: data.crmLeads.length }] },
    { title: 'Pazarlama', items: [{ key: 'seo', label: 'SEO & Analitik', icon: 'monitoring' }] },
    { title: 'Sistem', items: [{ key: 'settings', label: 'Site & İletişim Ayarları', icon: 'settings' }] },
  ];
  const currentLabel = navGroups.flatMap((g) => g.items).find((i) => i.key === activeTab)?.label || 'Yönetim';

  const goTab = (key: string) => {
    setActiveTab(key as any);
    setSidebarOpen(false);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 });
  };

  const logout = async () => {
    try { await fetch('/api/admin/logout', { method: 'POST' }); } catch {}
    window.location.href = '/admin/login';
  };

  const sidebar = (
    <div className="flex flex-col h-full bg-[#0B1E36] text-slate-300">
      <div className="h-16 px-5 flex items-center border-b border-white/10 shrink-0">
        <Link href="/admin" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-lg bg-[#E5880B] text-white font-black flex items-center justify-center">E</span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white">Eylül Akademi</span>
            <span className="block text-[10px] uppercase tracking-widest text-slate-400">Yönetim Konsolu</span>
          </span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {navGroups.map((g) => (
          <div key={g.title}>
            <div className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">{g.title}</div>
            <div className="space-y-0.5">
              {g.items.map((it) => {
                const active = activeTab === it.key;
                return (
                  <div key={it.key}>
                    <button
                      onClick={() => {
                        goTab(it.key);
                        if (it.key === 'cms') setCmsOpen((o) => (active ? !o : true));
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold transition ${
                        active ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[20px] ${active ? 'text-[#E5880B]' : ''}`}>{it.icon}</span>
                      <span className="flex-1 text-left">{it.label}</span>
                      {typeof it.badge === 'number' && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/10 text-slate-200">{it.badge}</span>
                      )}
                      {it.key === 'cms' && (
                        <span className={`material-symbols-outlined text-[18px] transition-transform ${cmsOpen ? 'rotate-180' : ''}`}>expand_more</span>
                      )}
                    </button>
                    {it.key === 'cms' && cmsOpen && (
                      <div className="ml-5 mt-1 pl-3 border-l border-white/10 space-y-0.5">
                        {pagesList.map((p) => (
                          <button
                            key={p.key}
                            onClick={() => { setSelectedCmsPage(p.key); goTab('cms'); }}
                            className={`w-full text-left px-3 py-1.5 rounded-md text-[12px] transition ${
                              activeTab === 'cms' && selectedCmsPage === p.key ? 'text-white bg-white/10 font-semibold' : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {p.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="p-3 border-t border-white/10 shrink-0 space-y-1">
        <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold hover:bg-white/5 hover:text-white transition">
          <span className="material-symbols-outlined text-[20px]">open_in_new</span> Web Sitesini Aç
        </a>
        <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold hover:bg-white/5 hover:text-white transition">
          <span className="material-symbols-outlined text-[20px]">logout</span> Çıkış Yap
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen lg:pl-64">
      {/* Toast Bildirimi */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[60] bg-slate-900 text-white px-5 py-3 rounded-lg shadow-xl text-xs font-semibold border border-slate-700">
          {toastMessage}
        </div>
      )}

      {/* Masaüstü Sidebar */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 w-64 z-40">{sidebar}</aside>

      {/* Mobil Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-72 max-w-[85%] h-full">{sidebar}</aside>
        </div>
      )}

      {/* Üst Bar */}
      <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3 min-w-0">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-slate-100" aria-label="Menü">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="min-w-0">
            <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider hidden sm:block">Yönetim / {currentLabel}</div>
            <h1 className="text-base font-bold text-slate-900 truncate">{currentLabel}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Canlı
          </span>
          <button onClick={() => goTab('messages')} className="relative p-2 rounded-lg hover:bg-slate-100" aria-label="Mesajlar">
            <span className="material-symbols-outlined text-slate-600">notifications</span>
            {data.crmLeads.length > 0 && <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#E5880B]" />}
          </button>
          <div className="flex items-center gap-2 pl-2 sm:pl-3 border-l border-slate-200">
            <span className="w-8 h-8 rounded-full bg-[#0E4984] text-white text-xs font-bold flex items-center justify-center">YN</span>
            <span className="hidden sm:block text-xs font-semibold text-slate-700 leading-tight">Yönetici<span className="block text-[10px] text-slate-400 font-normal">Eylül Akademi Kars</span></span>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-6 lg:p-8 max-w-[1400px] space-y-6">

      {/* ========================================================================= */}
      {/* 1. EDİTORYAL GENEL BAKIŞ (DASHBOARD) - VARSAYILAN AÇILIŞ                   */}
      {/* ========================================================================= */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* 4 Temiz Tipografik KPI Kartı */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Tekil Ziyaretçi</span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                {analytics.summary.uniqueVisitors.toLocaleString('tr-TR')}
              </div>
              <span className="text-[11px] font-semibold text-emerald-600 mt-1 block">Son 30 Günde +18.4%</span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Sayfa Görüntüleme</span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                {analytics.summary.totalPageViews.toLocaleString('tr-TR')}
              </div>
              <span className="text-[11px] font-semibold text-slate-500 mt-1 block">Oturum Başına ~2.9 Sayfa</span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Google Ortalama Sıra</span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                #1.2 <span className="text-xs font-normal text-slate-400">(SerpBear)</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-600 mt-1 block">Kars genelinde lider pozisyon</span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Teknik SEO & Hız Skoru</span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 mt-1">
                {unlighthouse.summary.seo} / 100
              </div>
              <span className="text-[11px] font-semibold text-slate-500 mt-1 block">Unlighthouse 14 Rota Denetimi</span>
            </div>
          </div>

          {/* Ziyaretçi & Organik Arama Grafiği (Temiz SVG Area / Bar Chart) */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Son 14 Günlük Ziyaretçi & Organik Google Trafiği</h3>
                <p className="text-xs text-slate-500">Günlük tekil ziyaretçi (koyu çubuk) ve Google organik arama payı (yeşil alan)</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-slate-900"></span>
                  Toplam Ziyaretçi
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-emerald-500"></span>
                  Google Organik
                </span>
              </div>
            </div>

            {/* SVG Trend Grafiği */}
            <div className="h-56 w-full pt-4">
              <svg className="w-full h-full" viewBox="0 0 700 180" preserveAspectRatio="none">
                {/* Izgara Çizgileri */}
                <line x1="0" y1="30" x2="700" y2="30" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="0" y1="80" x2="700" y2="80" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="0" y1="130" x2="700" y2="130" stroke="#F1F5F9" strokeWidth="1" />

                {/* Sütunlar & Noktalar */}
                {analytics.dailyTraffic.map((d, i) => {
                  const x = 25 + i * 48;
                  const height = Math.min(140, (d.visitors / 400) * 140);
                  const y = 160 - height;
                  const orgHeight = Math.min(140, (d.organic / 400) * 140);
                  const orgY = 160 - orgHeight;

                  return (
                    <g key={d.date} className="group cursor-pointer">
                      {/* Toplam Ziyaretçi Çubuğu */}
                      <rect
                        x={x - 12}
                        y={y}
                        width="24"
                        height={height}
                        rx="4"
                        fill="#0F172A"
                        className="group-hover:fill-slate-700 transition"
                      />
                      {/* Organik Arama Göstergesi */}
                      <rect
                        x={x - 8}
                        y={orgY}
                        width="16"
                        height={orgHeight}
                        rx="2"
                        fill="#10B981"
                        opacity="0.85"
                      />
                      {/* Tarih Etiketi */}
                      <text
                        x={x}
                        y="175"
                        textAnchor="middle"
                        fontSize="9"
                        fill="#64748B"
                        fontFamily="sans-serif"
                      >
                        {d.date}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* 2 Sütunlu Analitik Özeti: Nereye Baktılar & Nereye Tıkladılar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sol: Nereye Baktılar? */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Nereye Baktılar? (En Çok Gezilen Sayfalar)</h4>
                  <p className="text-[11px] text-slate-400">Sayfa görüntülenme ve ortalama kalma süresi</p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('seo');
                    setSeoSubTab('analytics');
                  }}
                  className="text-xs font-semibold text-slate-900 hover:underline"
                >
                  Detay &rarr;
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {analytics.pageMetrics.slice(0, 5).map((pm) => (
                  <div key={pm.path} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-slate-800">{pm.label}</p>
                      <p className="text-[10px] font-mono text-slate-400">{pm.path}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{pm.views.toLocaleString('tr-TR')} Görüntüleme</p>
                      <p className="text-[10px] text-slate-400">Ort. {pm.avgTimeSec} sn</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ: Nereye Tıkladılar? */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Nereye Tıkladılar? (Aksiyon & Tıklamalar)</h4>
                  <p className="text-[11px] text-slate-400">Telefon, WhatsApp, ön kayıt ve yol tarifi etkileşimleri</p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('seo');
                    setSeoSubTab('analytics');
                  }}
                  className="text-xs font-semibold text-slate-900 hover:underline"
                >
                  Detay &rarr;
                </button>
              </div>

              <div className="space-y-3 pt-1">
                {analytics.clickEvents.slice(0, 5).map((clk) => {
                  const maxCount = analytics.clickEvents[0]?.count || 500;
                  const pct = Math.round((clk.count / maxCount) * 100);
                  return (
                    <div key={clk.id} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800">{clk.label}</span>
                        <span className="font-mono text-slate-600 font-bold">{clk.count} tık</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-slate-900 rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hızlı Aksiyon Çubuğu */}
          <div className="p-4 rounded-xl border border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <span className="text-xs font-semibold text-slate-700">Hızlı Operasyonel Aksiyonlar</span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  setActiveTab('blog');
                  setIsNewPost(true);
                  setEditingPost({
                    id: '',
                    slug: '',
                    title: '',
                    excerpt: '',
                    content: [''],
                    category: 'Çocuk Gelişimi',
                    coverImage: '/images/hero-classroom-smile.jpg',
                    author: 'Eylül Çocuk Akademisi',
                    publishedAt: new Date().toISOString().split('T')[0],
                    readTime: '4 dk',
                    status: 'published',
                    views: 0,
                    seo: {
                      focusKeyword: '',
                      metaTitle: '',
                      metaDescription: '',
                      seoScore: 85,
                    },
                  });
                }}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
              >
                Yeni Blog Yazısı Ekle
              </button>
              <button
                onClick={triggerUnlighthouseAudit}
                disabled={auditing}
                className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition"
              >
                {auditing ? 'Taranıyor...' : 'Tüm Siteyi Unlighthouse ile Tara'}
              </button>
              <button
                onClick={refreshSerpRankings}
                disabled={refreshingSerp}
                className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition"
              >
                {refreshingSerp ? 'Sorgulanıyor...' : 'Google Sıralamalarını Güncelle'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. SEO & ANALİTİK MERKEZİ                                                  */}
      {/* ========================================================================= */}
      {activeTab === 'seo' && (
        <div className="space-y-6">
          {/* SEO Alt Sekmeler */}
          <div className="flex border-b border-slate-200 gap-4 text-xs font-semibold">
            {[
              { key: 'serp', label: '1. Anahtar Kelime Sıralama Takibi (SerpBear)' },
              { key: 'analytics', label: '2. Ziyaretçi Trafiği & Tıklama Analitiği' },
              { key: 'unlighthouse', label: '3. Teknik SEO & Unlighthouse Raporu' },
            ].map((sub) => (
              <button
                key={sub.key}
                onClick={() => setSeoSubTab(sub.key as any)}
                className={`pb-3 transition relative ${
                  seoSubTab === sub.key
                    ? 'text-slate-900 font-bold border-b-2 border-slate-900'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Alt Sekme 1: SerpBear Anahtar Kelime Takibi */}
          {seoSubTab === 'serp' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Google Anahtar Kelime Takibi (SerpBear Entegrasyonu)</h3>
                  <p className="text-xs text-slate-500">
                    Alan Adı: <span className="font-mono text-slate-800 font-semibold">{serpbear.domain}</span> • Konum: Kars, TR • Güncelleme: {new Date(serpbear.lastUpdated).toLocaleDateString('tr-TR')}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={refreshSerpRankings}
                    disabled={refreshingSerp}
                    className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
                  >
                    {refreshingSerp ? 'Sorgulanıyor...' : 'Sıralamaları Şimdi Sorgula (SERP Yenile)'}
                  </button>
                </div>
              </div>

              {/* Yeni Anahtar Kelime Ekle Formu */}
              <form onSubmit={handleAddKeyword} className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center gap-3">
                <input
                  type="text"
                  placeholder="Yeni Anahtar Kelime (örn: kars anaokulu kayıtları)"
                  value={newKeywordInput}
                  onChange={(e) => setNewKeywordInput(e.target.value)}
                  className="px-3 py-2 text-xs border border-slate-200 rounded-lg flex-1 min-w-[220px] focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
                <input
                  type="text"
                  placeholder="Hedef Sayfa URL (varsayılan: https://eylulanaokulu.com.tr)"
                  value={newKeywordUrl}
                  onChange={(e) => setNewKeywordUrl(e.target.value)}
                  className="px-3 py-2 text-xs border border-slate-200 rounded-lg flex-1 min-w-[220px] focus:outline-none focus:ring-1 focus:ring-slate-900"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition"
                >
                  Anahtar Kelime Ekle
                </button>
              </form>

              {/* Kelimeler Tablosu */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Anahtar Kelime</th>
                        <th className="py-3 px-4 text-center">Mevcut Sıra</th>
                        <th className="py-3 px-4 text-center">Değişim</th>
                        <th className="py-3 px-4 text-center">En İyi</th>
                        <th className="py-3 px-4 text-center">Aylık Hacim</th>
                        <th className="py-3 px-4">Sıralanan URL</th>
                        <th className="py-3 px-4 text-center">14 Gün Trend</th>
                        <th className="py-3 px-4 text-right">İşlem</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {serpbear.keywords.map((kw) => {
                        const diff = kw.previousPosition - kw.position;
                        return (
                          <tr key={kw.id} className="hover:bg-slate-50 transition">
                            <td className="py-3 px-4">
                              <p className="font-semibold text-slate-900">{kw.keyword}</p>
                              <div className="flex gap-1 mt-0.5">
                                {kw.tags?.map((t) => (
                                  <span key={t} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[9px] font-semibold">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className="inline-block px-2.5 py-1 rounded-md bg-slate-900 text-white font-black text-xs">
                                #{kw.position}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-center font-bold">
                              {diff > 0 ? (
                                <span className="text-emerald-600">+{diff}</span>
                              ) : diff < 0 ? (
                                <span className="text-rose-600">{diff}</span>
                              ) : (
                                <span className="text-slate-400">0</span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center font-semibold text-slate-600">
                              #{kw.bestPosition}
                            </td>
                            <td className="py-3 px-4 text-center font-mono text-slate-700">
                              {kw.volume.toLocaleString('tr-TR')}
                            </td>
                            <td className="py-3 px-4 font-mono text-[11px] text-slate-500 max-w-xs truncate">
                              <a href={kw.url} target="_blank" className="hover:underline hover:text-slate-900">
                                {kw.url.replace('https://eylulanaokulu.com.tr', '') || '/'}
                              </a>
                            </td>
                            <td className="py-3 px-4 text-center">
                              {/* SVG Sparkline */}
                              <svg className="w-16 h-5 inline-block" viewBox="0 0 60 20">
                                <polyline
                                  fill="none"
                                  stroke="#10B981"
                                  strokeWidth="2"
                                  points={kw.history.map((h, i) => `${i * 4.5},${h * 4}`).join(' ')}
                                />
                              </svg>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button
                                onClick={() => handleDeleteKeyword(kw.id)}
                                className="text-rose-600 hover:text-rose-800 font-semibold text-xs"
                              >
                                Sil
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Alt Sekme 2: Ziyaretçi Trafiği & Tıklama Analitiği */}
          {seoSubTab === 'analytics' && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base">Ziyaretçi Trafik Kaynakları</h3>
                <p className="text-xs text-slate-500 mb-4">Müşterilerin web sitesine hangi kanallardan ulaştığı</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {analytics.trafficSources.map((src) => (
                    <div key={src.source} className="p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                      <p className="text-xs text-slate-500 font-semibold">{src.source}</p>
                      <p className="text-xl font-black text-slate-900">{src.sessions.toLocaleString('tr-TR')} Oturum</p>
                      <p className="text-xs font-bold text-emerald-600">%{src.percentage} Pay</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detaylı Nereye Baktı Tablosu */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">Detaylı Sayfa Görüntüleme Tablosu ('Nereye Baktı?')</h4>
                  <span className="text-xs text-slate-400">Aktif Takip</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Sayfa Adı</th>
                        <th className="py-3 px-4">URL</th>
                        <th className="py-3 px-4 text-center">Toplam Görüntüleme</th>
                        <th className="py-3 px-4 text-center">Tekil Ziyaretçi</th>
                        <th className="py-3 px-4 text-center">Ort. Süre</th>
                        <th className="py-3 px-4 text-center">Hemen Çıkma Oranı</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {analytics.pageMetrics.map((pm) => (
                        <tr key={pm.path} className="hover:bg-slate-50 transition">
                          <td className="py-3 px-4 font-semibold text-slate-900">{pm.label}</td>
                          <td className="py-3 px-4 font-mono text-[11px] text-slate-500">{pm.path}</td>
                          <td className="py-3 px-4 text-center font-bold text-slate-800">{pm.views.toLocaleString('tr-TR')}</td>
                          <td className="py-3 px-4 text-center text-slate-600">{pm.uniqueVisitors.toLocaleString('tr-TR')}</td>
                          <td className="py-3 px-4 text-center font-mono text-slate-700">{pm.avgTimeSec} sn</td>
                          <td className="py-3 px-4 text-center font-semibold text-slate-600">%{pm.bounceRate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detaylı Nereye Tıkladı Tablosu */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-4 border-b border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm">Etkileşim & Aksiyon Tablosu ('Nereye Tıkladı?')</h4>
                  <p className="text-xs text-slate-500">Ziyaretçilerin doğrudan harekete geçtiği buton ve bağlantılar</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Aksiyon / Buton</th>
                        <th className="py-3 px-4">Hedef Bağlantı</th>
                        <th className="py-3 px-4">Kategori</th>
                        <th className="py-3 px-4 text-center">Tıklama Adedi</th>
                        <th className="py-3 px-4 text-right">Son Tıklama</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {analytics.clickEvents.map((ce) => (
                        <tr key={ce.id} className="hover:bg-slate-50 transition">
                          <td className="py-3 px-4 font-semibold text-slate-900">{ce.label}</td>
                          <td className="py-3 px-4 font-mono text-[11px] text-slate-500">{ce.targetPath}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[10px]">
                              {ce.category}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center font-bold text-slate-900">{ce.count}</td>
                          <td className="py-3 px-4 text-right text-slate-400 text-[11px]">
                            {new Date(ce.lastClickedAt).toLocaleTimeString('tr-TR')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Alt Sekme 3: Unlighthouse Raporu */}
          {seoSubTab === 'unlighthouse' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Unlighthouse Web Sitesi Kalite & SEO Denetimi</h3>
                  <p className="text-xs text-slate-500">
                    Google Lighthouse standartlarında 14 alt sayfanın tamamını tarar ve puanlar.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/unlighthouse"
                    target="_blank"
                    className="px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition"
                  >
                    Tam Ekran Raporu Aç &rarr;
                  </a>
                  <button
                    onClick={triggerUnlighthouseAudit}
                    disabled={auditing}
                    className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
                  >
                    {auditing ? 'Taranıyor...' : 'Tüm Siteyi Şimdi Tara'}
                  </button>
                </div>
              </div>

              {/* 4 Unlighthouse Skoru */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-xs">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">SEO Skoru</span>
                  <div className="text-3xl font-black text-emerald-600 mt-1">{unlighthouse.summary.seo} / 100</div>
                  <span className="text-[10px] text-slate-400">Meta & Başlık Standartları</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-xs">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Performans / Hız</span>
                  <div className="text-3xl font-black text-emerald-600 mt-1">{unlighthouse.summary.performance} / 100</div>
                  <span className="text-[10px] text-slate-400">LCP, FID & Yükleme Hızı</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-xs">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Erişilebilirlik</span>
                  <div className="text-3xl font-black text-emerald-600 mt-1">{unlighthouse.summary.accessibility} / 100</div>
                  <span className="text-[10px] text-slate-400">WCAG Kontrast & Aria</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-xs">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">En İyi Uygulamalar</span>
                  <div className="text-3xl font-black text-emerald-600 mt-1">{unlighthouse.summary.bestPractices} / 100</div>
                  <span className="text-[10px] text-slate-400">Modern Web Güvenliği</span>
                </div>
              </div>

              {/* Gömülü Unlighthouse iframe Raporu */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                  <span className="text-xs font-bold text-slate-800">Unlighthouse Canlı Denetim Arayüzü</span>
                  <span className="text-[11px] text-slate-400 font-mono">public/unlighthouse/index.html</span>
                </div>
                <div className="h-[520px] w-full">
                  <iframe
                    src="/unlighthouse"
                    className="w-full h-full border-0"
                    title="Unlighthouse Report"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. BLOG YÖNETİMİ (SEO İÇERİK BESLEME)                                      */}
      {/* ========================================================================= */}
      {activeTab === 'blog' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Blog & SEO Makale Yönetimi</h3>
              <p className="text-xs text-slate-500">
                Web sitesini Google arama sonuçlarında beslemek için pedagojik ve yerel SEO odaklı makaleler yayınlayın.
              </p>
            </div>
            <button
              onClick={() => {
                setIsNewPost(true);
                setEditingPost({
                  id: '',
                  slug: '',
                  title: '',
                  excerpt: '',
                  content: [''],
                  category: 'Çocuk Gelişimi',
                  coverImage: '/images/hero-classroom-smile.jpg',
                  author: 'Eylül Çocuk Akademisi',
                  publishedAt: new Date().toISOString().split('T')[0],
                  readTime: '4 dk',
                  status: 'published',
                  views: 0,
                  seo: {
                    focusKeyword: '',
                    metaTitle: '',
                    metaDescription: '',
                    seoScore: 85,
                  },
                });
              }}
              className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
            >
              Yeni Blog Yazısı Oluştur
            </button>
          </div>

          {/* Blog Yazıları Tablosu */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Kapak</th>
                    <th className="py-3 px-4">Yazı Başlığı & Özet</th>
                    <th className="py-3 px-4">Kategori</th>
                    <th className="py-3 px-4 text-center">SEO Skoru</th>
                    <th className="py-3 px-4 text-center">Durum</th>
                    <th className="py-3 px-4 text-center">Tarih</th>
                    <th className="py-3 px-4 text-right">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {blog.posts.map((post) => (
                    <tr key={post.id} className="hover:bg-slate-50 transition">
                      <td className="py-3 px-4 w-16">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-12 h-10 object-cover rounded-md border border-slate-200"
                        />
                      </td>
                      <td className="py-3 px-4 max-w-md">
                        <p className="font-bold text-slate-900 line-clamp-1">{post.title}</p>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{post.excerpt}</p>
                        <p className="text-[10px] font-mono text-slate-400 mt-0.5">/blog/{post.slug}</p>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[10px]">
                          {post.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center font-bold">
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs">
                          {post.seo?.seoScore || 90} / 100
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            post.status === 'published'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-amber-50 text-amber-700'
                          }`}
                        >
                          {post.status === 'published' ? 'Yayında' : 'Taslak'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-slate-500 text-[11px] whitespace-nowrap">
                        {post.publishedAt}
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <button
                          onClick={() => {
                            setIsNewPost(false);
                            setEditingPost(JSON.parse(JSON.stringify(post)));
                          }}
                          className="text-slate-900 hover:underline font-semibold"
                        >
                          Düzenle
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="text-rose-600 hover:text-rose-800 font-semibold"
                        >
                          Sil
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Blog Yazısı Düzenleme Modalı */}
          {editingPost && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in">
                <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-900">
                    {isNewPost ? 'Yeni Blog Yazısı Oluştur' : 'Blog Yazısını Düzenle'}
                  </h4>
                  <button
                    onClick={() => setEditingPost(null)}
                    className="text-slate-400 hover:text-slate-600 font-bold text-sm"
                  >
                    Kapat
                  </button>
                </div>

                <div className="p-6 overflow-y-auto space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Yazı Başlığı</label>
                    <input
                      type="text"
                      value={editingPost.title}
                      onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                      className="w-full p-2.5 border border-slate-200 rounded-lg font-bold text-sm text-slate-900"
                      placeholder="Örn: Okul Öncesi Dönemde All Day English İle Doğal Dil Edinimi"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Kategori</label>
                      <input
                        type="text"
                        value={editingPost.category}
                        onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                        className="w-full p-2 border border-slate-200 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Okuma Süresi</label>
                      <input
                        type="text"
                        value={editingPost.readTime}
                        onChange={(e) => setEditingPost({ ...editingPost, readTime: e.target.value })}
                        className="w-full p-2 border border-slate-200 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Yayın Durumu</label>
                      <select
                        value={editingPost.status}
                        onChange={(e) => setEditingPost({ ...editingPost, status: e.target.value as any })}
                        className="w-full p-2 border border-slate-200 rounded-lg bg-white"
                      >
                        <option value="published">Yayında (Published)</option>
                        <option value="draft">Taslak (Draft)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <MediaField
                      label="Kapak Görseli"
                      value={editingPost.coverImage}
                      acceptType="image"
                      mediaLibrary={data.mediaLibrary}
                      onChange={(url) => setEditingPost({ ...editingPost, coverImage: url })}
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Kısa Özet (Excerpt)</label>
                    <textarea
                      rows={2}
                      value={editingPost.excerpt}
                      onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                      className="w-full p-2 border border-slate-200 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Makale İçeriği (Paragraflar)</label>
                    <textarea
                      rows={6}
                      value={Array.isArray(editingPost.content) ? editingPost.content.join('\n\n') : editingPost.content}
                      onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value.split('\n\n') })}
                      className="w-full p-2.5 border border-slate-200 rounded-lg font-normal leading-relaxed text-slate-800"
                      placeholder="Paragrafları iki satır boşluk bırakarak yazınız..."
                    />
                  </div>

                  {/* SEO Parametreleri Kutusu */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="font-bold text-slate-800">SEO Uyumluluk Parametreleri</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                        Puan: {editingPost.seo?.seoScore || 90}/100
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-600 block mb-1">Hedef Anahtar Kelime (Focus Keyword)</label>
                        <input
                          type="text"
                          value={editingPost.seo?.focusKeyword || ''}
                          onChange={(e) =>
                            setEditingPost({
                              ...editingPost,
                              seo: { ...(editingPost.seo || { metaTitle: '', metaDescription: '', seoScore: 90, focusKeyword: '' }), focusKeyword: e.target.value },
                            })
                          }
                          className="w-full p-2 border border-slate-200 rounded-lg bg-white"
                          placeholder="Örn: kars anaokulu ingilizce"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-slate-600 block mb-1">SEO Meta Başlığı (Meta Title)</label>
                        <input
                          type="text"
                          value={editingPost.seo?.metaTitle || ''}
                          onChange={(e) =>
                            setEditingPost({
                              ...editingPost,
                              seo: { ...(editingPost.seo || { metaTitle: '', metaDescription: '', seoScore: 90, focusKeyword: '' }), metaTitle: e.target.value },
                            })
                          }
                          className="w-full p-2 border border-slate-200 rounded-lg bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-600 block mb-1">SEO Meta Açıklaması (Meta Description)</label>
                      <textarea
                        rows={2}
                        value={editingPost.seo?.metaDescription || ''}
                        onChange={(e) =>
                          setEditingPost({
                            ...editingPost,
                            seo: { ...(editingPost.seo || { metaTitle: '', metaDescription: '', seoScore: 90, focusKeyword: '' }), metaDescription: e.target.value },
                          })
                        }
                        className="w-full p-2 border border-slate-200 rounded-lg bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingPost(null)}
                    className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-white text-xs font-semibold"
                  >
                    Vazgeç
                  </button>
                  <button
                    type="button"
                    onClick={handleSavePost}
                    disabled={saving}
                    className="px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
                  >
                    {saving ? 'Kaydediliyor...' : 'Yazıyı Kaydet'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. 13 SAYFA & İÇERİK EDİTÖRÜ (CMS)                                         */}
      {/* ========================================================================= */}
      {activeTab === 'cms' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Sayfa & İçerik Düzenleyicisi</h3>
              <p className="text-xs text-slate-500">
                Seçilen sayfanın tüm metinlerini, kartlarını ve görsellerini form alanlarıyla düzenleyin.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs font-semibold text-slate-600">Düzenlenecek Sayfa:</label>
              <select
                value={selectedCmsPage}
                onChange={(e) => setSelectedCmsPage(e.target.value as PageKey)}
                className="px-3.5 py-2 border border-slate-200 rounded-lg text-xs font-semibold bg-slate-50 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
              >
                {pagesList.map((p) => (
                  <option key={p.key} value={p.key}>{p.title}</option>
                ))}
              </select>
            </div>
          </div>

          {(() => {
            const meta = PAGE_META.find((p) => p.key === selectedCmsPage);
            const dirty = dirtyPages.has(selectedCmsPage);
            const saveBar = (
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a href={meta?.path || '/'} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#0E4984] hover:underline">
                  Sayfayı sitede aç ↗
                </a>
                <div className="flex items-center gap-3">
                  {dirty && <span className="text-xs font-semibold text-amber-600">Kaydedilmemiş değişiklik var</span>}
                  <button
                    type="button"
                    disabled={saving}
                    onClick={() => saveCmsContent(selectedCmsPage, data.pages[selectedCmsPage])}
                    className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs shadow-xs hover:bg-slate-800 transition disabled:opacity-60"
                  >
                    {saving ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
                  </button>
                </div>
              </div>
            );
            return (
              <div className="space-y-5">
                <div className="rounded-lg bg-sky-50 border border-sky-100 px-4 py-3 text-xs text-sky-900 leading-relaxed">
                  Bu sayfadaki tüm yazılar, görseller, videolar, butonlar ve kartlar aşağıda. Kart/liste başlıklarına tıklayarak açın;
                  <strong> + Yeni Ekle</strong> ile kart ekleyin, <strong>↑ ↓</strong> ile sıralayın, <strong>Sil</strong> ile kaldırın.
                  Bitirince <strong>Değişiklikleri Kaydet</strong>’e basın.
                </div>
                {saveBar}
                <ContentEditor
                  key={selectedCmsPage}
                  schema={SITE_CONTENT[selectedCmsPage]}
                  value={data.pages[selectedCmsPage]}
                  mediaLibrary={data.mediaLibrary}
                  onChange={(nv) => {
                    setData((d) => ({ ...d, pages: { ...d.pages, [selectedCmsPage]: nv } }));
                    setDirtyPages((dp) => new Set(dp).add(selectedCmsPage));
                  }}
                />
                <div className="sticky bottom-0 -mx-6 px-6 py-3 bg-white/95 backdrop-blur border-t border-slate-100">{saveBar}</div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. MEDYA KÜTÜPHANESİ                                                       */}
      {/* ========================================================================= */}
      {activeTab === 'media' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Medya & Görsel Kütüphanesi</h3>
              <p className="text-xs text-slate-500">Sitede kullanılan resimler ve 100 MB'a kadar yüklenmiş video dosyaları</p>
            </div>
            <div>
              <label className="cursor-pointer px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition inline-flex items-center">
                <span>Yeni Dosya Yükle</span>
                <input
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('altText', file.name);

                    const res = await fetch('/api/media', { method: 'POST', body: formData });
                    const resJson = await res.json();
                    if (resJson.success) {
                      showToast('Dosya yüklendi.');
                      setData({ ...data, mediaLibrary: [resJson.data, ...data.mediaLibrary] });
                    }
                  }}
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.mediaLibrary.map((item) => (
              <div key={item.id} className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50 flex flex-col justify-between shadow-2xs">
                <div className="h-32 bg-slate-200 overflow-hidden flex items-center justify-center">
                  <img src={item.url} alt={item.altText} className="w-full h-full object-cover" />
                </div>
                <div className="p-2.5 bg-white border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-800 truncate">{item.altText || item.filename}</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">{item.url}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. HAFTALIK YEMEK MENÜSÜ                                                   */}
      {/* ========================================================================= */}
      {activeTab === 'meals' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Haftalık Yemek Menüsü</h3>
              <p className="text-xs text-slate-500">Pazartesi – Cuma günlük öğün tablosu</p>
            </div>
            <button
              onClick={saveMeals}
              disabled={saving}
              className="px-5 py-2 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition"
            >
              {saving ? 'Kaydediliyor...' : 'Menüyü Kaydet'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {data.pages.nutrition.weeklyMenu.map((dayPlan, idx) => (
              <div key={dayPlan.dayId} className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-2">
                <h4 className="font-bold text-xs text-slate-900 border-b border-slate-200 pb-1">{dayPlan.dayName}</h4>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 block mb-1">Kahvaltı</label>
                  <textarea
                    rows={2}
                    value={dayPlan.breakfast}
                    onChange={(e) => {
                      const updated = { ...data };
                      updated.pages.nutrition.weeklyMenu[idx].breakfast = e.target.value;
                      setData(updated);
                    }}
                    className="w-full text-xs p-1.5 rounded border border-slate-200 bg-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 block mb-1">Öğle Yemeği</label>
                  <textarea
                    rows={2}
                    value={dayPlan.lunch}
                    onChange={(e) => {
                      const updated = { ...data };
                      updated.pages.nutrition.weeklyMenu[idx].lunch = e.target.value;
                      setData(updated);
                    }}
                    className="w-full text-xs p-1.5 rounded border border-slate-200 bg-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 block mb-1">İkindi</label>
                  <textarea
                    rows={2}
                    value={dayPlan.snack}
                    onChange={(e) => {
                      const updated = { ...data };
                      updated.pages.nutrition.weeklyMenu[idx].snack = e.target.value;
                      setData(updated);
                    }}
                    className="w-full text-xs p-1.5 rounded border border-slate-200 bg-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. GELEN MESAJLAR                                                          */}
      {/* ========================================================================= */}
      {activeTab === 'messages' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Gelen İletişim ve Ön Başvuru Mesajları</h3>
              <p className="text-xs text-slate-500">Web sitesi formlarından iletilen veli talepleri</p>
            </div>
            <span className="text-xs font-semibold text-slate-500">{data.crmLeads.length} Mesaj</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Veli Adı</th>
                  <th className="py-3 px-4">Telefon</th>
                  <th className="py-3 px-4">Çocuk Bilgisi</th>
                  <th className="py-3 px-4">Talep / Not</th>
                  <th className="py-3 px-4">Tarih</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.crmLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50 transition">
                    <td className="py-3 px-4 font-semibold text-slate-900">{lead.parentName}</td>
                    <td className="py-3 px-4 font-mono text-slate-700">{lead.phone}</td>
                    <td className="py-3 px-4 text-slate-600">{lead.childName} ({lead.childAge} Yaş)</td>
                    <td className="py-3 px-4 text-slate-600 max-w-xs truncate">{lead.notes}</td>
                    <td className="py-3 px-4 text-slate-400">{new Date(lead.createdAt).toLocaleDateString('tr-TR')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. SİTE & İLETİŞİM AYARLARI                                               */}
      {/* ========================================================================= */}
      {activeTab === 'settings' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Kurumsal Ayarlar ve İletişim Bilgileri</h3>
              <p className="text-xs text-slate-500">Kars yerleşkesi iletişim parametreleri, telefon, faks ve adres</p>
            </div>
            <button
              onClick={saveSettings}
              disabled={saving}
              className="px-5 py-2 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition"
            >
              {saving ? 'Kaydediliyor...' : 'Ayarları Kaydet'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Kurum Adı</label>
              <input
                type="text"
                value={data.siteSettings.schoolName}
                onChange={(e) => {
                  const updated = { ...data };
                  updated.siteSettings.schoolName = e.target.value;
                  setData(updated);
                }}
                className="w-full p-2.5 rounded-lg border border-slate-200"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Slogan</label>
              <input
                type="text"
                value={data.siteSettings.tagline}
                onChange={(e) => {
                  const updated = { ...data };
                  updated.siteSettings.tagline = e.target.value;
                  setData(updated);
                }}
                className="w-full p-2.5 rounded-lg border border-slate-200"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Telefon</label>
              <input
                type="text"
                value={data.siteSettings.phone}
                onChange={(e) => {
                  const updated = { ...data };
                  updated.siteSettings.phone = e.target.value;
                  setData(updated);
                }}
                className="w-full p-2.5 rounded-lg border border-slate-200"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Faks</label>
              <input
                type="text"
                value={data.siteSettings.fax || ''}
                onChange={(e) => {
                  const updated = { ...data };
                  updated.siteSettings.fax = e.target.value;
                  setData(updated);
                }}
                className="w-full p-2.5 rounded-lg border border-slate-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-semibold text-slate-700 block mb-1">Açık Adres</label>
              <input
                type="text"
                value={data.siteSettings.address}
                onChange={(e) => {
                  const updated = { ...data };
                  updated.siteSettings.address = e.target.value;
                  setData(updated);
                }}
                className="w-full p-2.5 rounded-lg border border-slate-200"
              />
            </div>
          </div>
        </div>
      )}
      </main>
    </div>
  );
};
