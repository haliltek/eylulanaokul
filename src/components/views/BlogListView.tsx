'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BlogData, BlogPostItem } from '@/types/cms';

interface BlogListViewProps {
  data: BlogData;
}

export const BlogListView: React.FC<BlogListViewProps> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');

  const { heroTitle, heroSubtitle, categories, posts } = data || {
    heroTitle: 'Özel Eylül Anaokulu Eğitim & Ebeveynlik Blogu',
    heroSubtitle: 'Çocuk gelişimi, pedagojik rehberlik ve erken çocukluk eğitimine dair uzman makaleler.',
    categories: ['Hepsi', 'Ebeveyn Rehberi', 'Erken Çocukluk', 'Beslenme', 'Bilingual Eğitim', 'Etkinlik & Sanat'],
    posts: [],
  };

  const filteredPosts = selectedCategory === 'Hepsi'
    ? posts
    : posts.filter((p) => p.category === selectedCategory);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="w-full bg-[#FEFAF2]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-12">
        {/* Editoryal Başlık Bölümü (İkonsuz, Sade ve Şık) */}
        <header className="text-center max-w-3xl mx-auto pt-4 border-b border-amber-200/50 pb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-100/70 text-[#0A3B69] text-xs font-bold uppercase tracking-wider mb-3">
            ÖZEL EYLÜL AKADEMİSİ YAYINLARI
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A3B69] tracking-tight leading-tight">
            {heroTitle || 'Eğitim & Ebeveynlik Blogu'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl mx-auto">
            {heroSubtitle ||
              'Çocuk gelişiminde bilimsel yaklaşımlar, okul öncesi eğitim ipuçları, sağlıklı beslenme ve çift dilli gelişim üzerine pedagojik yazılar.'}
          </p>
        </header>

        {/* Kategori Filtreleme Sekmeleri (İkonsuz Editoryal Pill'ler) */}
        <nav aria-label="Blog Kategorileri" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {['Hepsi', ...(categories || [])].filter((v, i, a) => a.indexOf(v) === i).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0A3B69] text-white shadow-sm'
                  : 'bg-white/80 text-slate-700 hover:bg-amber-100/60 border border-amber-200/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Öne Çıkan Makale Kartı (Featured Hero Card) */}
        {featuredPost && (
          <article className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-amber-100 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-7 relative h-72 sm:h-96 w-full overflow-hidden bg-slate-100">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800';
                  }}
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#0A3B69] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  {featuredPost.category}
                </span>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-3">
                    <span>{featuredPost.publishedAt}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0A3B69] leading-snug tracking-tight hover:text-[#E2AD50] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mt-3 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">
                    {featuredPost.author}
                  </span>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E2AD50] hover:text-[#0A3B69] transition-colors"
                  >
                    <span>Yazının Devamı</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* 3 Sütunlu Zarif Makale Izgarası */}
        <section aria-label="Tüm Yazılar" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-amber-100/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800';
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#0A3B69] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium mb-2">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0A3B69] group-hover:text-[#E2AD50] transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-2 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-slate-50 flex items-center justify-between text-xs mt-3">
                <span className="text-slate-500 text-[11px] font-medium">{post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-[#E2AD50] hover:text-[#0A3B69] transition-colors"
                >
                  Oku →
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Bülten / Ebeveyn Kayıt Yönlendirmesi */}
        <section className="rounded-3xl bg-amber-100/40 border border-amber-200/60 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500">
            EĞİTİMDE BİLİNÇLİ ADIMLAR
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0A3B69]">
            Çocuğunuzun Geleceğine Uzman Rehberliğiyle Yön Verin
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Özel Eylül Anaokulu uzman kadrosunun hazırladığı ebeveynlik rehberlerini takip etmek ve okulumuzu yerinde görmek için randevu planlayabilirsiniz.
          </p>
          <div className="pt-2">
            <Link
              href="/kayit-ve-basvuru"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A3B69] hover:bg-[#1A3358] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Okul Ziyareti Randevusu Alın
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
