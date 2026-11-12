'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPostItem } from '@/types/cms';
import { formatDateTR } from '@/lib/content';
import { blogPageContent } from '@/data/content/blogPage';

interface BlogPostViewProps {
  post: BlogPostItem;
  relatedPosts: BlogPostItem[];
  texts?: typeof blogPageContent;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ post, relatedPosts, texts }) => {
  const T = texts || blogPageContent;
  // Schema.org Article Yapısal Verisi
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Özel Eylül Anaokulu - Kars Kreş ve Anaokulu',
      logo: {
        '@type': 'ImageObject',
        url: 'https://eylulanaokulu.com.tr/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://eylulanaokulu.com.tr/blog/${post.slug}`,
    },
  };

  return (
    <div className="w-full bg-[#FEFAF2]">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-10">
        {/* Üst Kırıntı (Breadcrumbs) */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2 pt-2">
          <Link href="/" className="hover:text-[#0A3B69]">Anasayfa</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#0A3B69]">Blog</Link>
          <span>/</span>
          <span className="text-[#0A3B69] font-medium truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Makale Başlık & Üst Bilgi */}
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-[#0A3B69] text-xs font-bold uppercase tracking-wider">
            {post.category}
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A3B69] tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-medium pt-2">
            <span>{T.authorLabel} <strong className="text-slate-700">{post.author}</strong></span>
            <span>•</span>
            <span>{T.dateLabel} {formatDateTR(post.publishedAt)}</span>
            <span>•</span>
            <span>{T.readTimeLabel} {post.readTime}</span>
          </div>
        </header>

        {/* Büyük Kapak Görseli */}
        <div className="rounded-3xl overflow-hidden shadow-md border border-amber-100 bg-slate-100 aspect-[16/9] w-full">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200';
            }}
          />
        </div>

        {/* Makale İçeriği (Yüksek Okunabilirlikli Editoryal Tipografi) */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-amber-100/70 shadow-xs space-y-6">
          {/* Vurgulu Özet Paragrafı */}
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed italic border-l-4 border-[#E2AD50] pl-4 sm:pl-6 my-2 bg-amber-50/40 py-3 rounded-r-xl">
            {post.excerpt}
          </p>

          {/* Dinamik Paragraf Blokları */}
          <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
            {post.content && post.content.length > 0 ? (
              post.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="leading-relaxed">
                Özel Eylül Anaokulu uzman eğitim kadrosu tarafından hazırlanan bu çalışma, okul öncesi dönem çocuklarının gelişimsel dönüm noktalarını sağlıklı ve güvenli bir iklimde geçirmelerine rehberlik etmektedir.
              </p>
            )}
          </div>

          {/* Makale Altı Yazar Kartı */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-[#0A3B69] font-bold text-lg flex items-center justify-center">
                {post.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0A3B69]">{post.author}</h4>
                <p className="text-xs text-slate-500">{T.authorUnit}</p>
              </div>
            </div>
            <Link
              href="/blog"
              className="text-xs font-bold text-[#E2AD50] hover:text-[#0A3B69] transition-colors"
            >
              ← Tüm Blog Yazıları
            </Link>
          </div>
        </div>

        {/* İlgili Yazılar (Related Posts) */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-amber-200/50">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A3B69]">
                {T.relatedTitle}
              </h3>
              <Link href="/blog" className="text-xs font-bold text-[#E2AD50] hover:text-[#0A3B69]">
                {T.seeAll}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-amber-100 transition-all p-4 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#E2AD50] uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#0A3B69] mt-1 line-clamp-2">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{rel.excerpt}</p>
                  </div>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="mt-3 text-xs font-bold text-primary hover:text-secondary-container"
                  >
                    {T.readPost}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Alt Kayıt Çağrısı */}
        <div className="bg-[#0A3B69] text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
          <h3 className="font-serif text-2xl font-bold">
            {T.postCta.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto leading-relaxed">
            {T.postCta.text}
          </p>
          <div className="pt-2">
            <Link
              href={T.postCta.buttonLink || '/kayit-ve-basvuru'}
              className="inline-block px-7 py-3 rounded-full bg-[#E2AD50] hover:bg-[#d49e42] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              {T.postCta.buttonText}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};
