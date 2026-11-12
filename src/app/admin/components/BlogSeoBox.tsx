'use client';

import React from 'react';
import type { BlogPostItem, BlogPostSeo } from '@/types/cms';
import { blogSeoChecks } from '@/lib/seo';
import { TagInput } from './ContentEditor';

const inputCls = 'w-full p-2 border border-slate-200 rounded-lg bg-white text-sm';
const counter = (n: number, min: number, max: number) => (n === 0 ? 'text-slate-400' : n >= min && n <= max ? 'text-emerald-600' : 'text-amber-600');

/** Blog yazısı SEO alanları: odak kelime, meta başlık/açıklama, anahtar kelime etiketleri, gerçek puan ve kontrol listesi. */
export function BlogSeoBox({ post, onChange }: { post: BlogPostItem; onChange: (seo: BlogPostSeo) => void }) {
  const ps: Partial<BlogPostSeo> = post.seo || {};
  const seo: BlogPostSeo = { metaTitle: ps.metaTitle || '', metaDescription: ps.metaDescription || '', focusKeyword: ps.focusKeyword || '', seoScore: ps.seoScore || 0, keywords: ps.keywords || [] };
  const { score, checks } = blogSeoChecks(post);
  const set = (patch: Partial<BlogPostSeo>) => {
    const next = { ...seo, ...patch };
    onChange({ ...next, seoScore: blogSeoChecks({ ...post, seo: next }).score });
  };
  const title = seo.metaTitle || post.title || '';
  const desc = seo.metaDescription || post.excerpt || '';
  const tone = score >= 80 ? 'bg-emerald-100 text-emerald-800' : score >= 50 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800';

  return (
    <div className="p-4 bg-emerald-50/40 rounded-xl border-2 border-emerald-200 space-y-3">
      <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
        <span className="font-bold text-slate-800">SEO Ayarları (Google’da nasıl görünür?)</span>
        <span className={`px-2 py-0.5 rounded font-bold ${tone}`}>SEO Puanı: {score}/100</span>
      </div>

      <div className="rounded-lg bg-white border border-slate-200 p-3">
        <div className="text-[11px] text-slate-500 mb-1">Google önizlemesi</div>
        <div className="text-[13px] text-emerald-800 truncate">site › blog › {post.slug || 'yazi-adresi'}</div>
        <div className="text-[17px] leading-snug text-[#1a0dab] truncate">{title || 'Başlık'}</div>
        <div className="text-[13px] text-slate-600 line-clamp-2">{desc || 'Açıklama'}</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-[11px] font-bold text-slate-600 block mb-1">Odak Anahtar Kelime</label>
          <input value={seo.focusKeyword} onChange={(e) => set({ focusKeyword: e.target.value })} className={inputCls} placeholder="ör. kars anaokulu ingilizce" />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-[11px] font-bold text-slate-600">SEO Başlığı (meta title)</label>
            <span className={`text-[11px] font-semibold ${counter(seo.metaTitle.length, 30, 65)}`}>{seo.metaTitle.length} / 30-65</span>
          </div>
          <input value={seo.metaTitle} onChange={(e) => set({ metaTitle: e.target.value })} className={inputCls} placeholder="Boş bırakılırsa yazı başlığı kullanılır" />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <label className="text-[11px] font-bold text-slate-600">SEO Açıklaması (meta description)</label>
          <span className={`text-[11px] font-semibold ${counter(seo.metaDescription.length, 110, 165)}`}>{seo.metaDescription.length} / 110-165</span>
        </div>
        <textarea rows={2} value={seo.metaDescription} onChange={(e) => set({ metaDescription: e.target.value })} className={inputCls} placeholder="Boş bırakılırsa özet kullanılır" />
      </div>

      <div>
        <label className="text-[11px] font-bold text-slate-600 block mb-1">Anahtar Kelimeler</label>
        <TagInput value={seo.keywords || []} onChange={(keywords) => set({ keywords })} />
        <p className="text-[11px] text-slate-400 mt-1">Kelimeyi yazıp Enter’a basın; silmek için × işaretine tıklayın.</p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1">
        {checks.map((c) => (
          <li key={c.label} className={`text-[11px] font-medium ${c.ok ? 'text-emerald-700' : 'text-slate-500'}`}>
            {c.ok ? '✓' : '○'} {c.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
