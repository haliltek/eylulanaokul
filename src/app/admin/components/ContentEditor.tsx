'use client';

/**
 * Şemadan otomatik form üreten içerik düzenleyici.
 * Şema = sayfanın varsayılan içeriği (src/data/content). Her metin, görsel, video, bağlantı ve liste
 * (kart, menü, SSS, galeri…) için uygun alan çıkarılır; listelere ekleme, silme ve sıralama yapılabilir.
 */
import React, { useState } from 'react';
import { MediaField } from './ImageField';
import type { MediaItem } from '@/types/cms';

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };
type Obj = { [k: string]: Json };
const isObj = (v: unknown): v is Obj => !!v && typeof v === 'object' && !Array.isArray(v);

/* ----------------------------------------------------------------- Türkçe alan adları */
const LABELS: Record<string, string> = {
  header: 'Sayfa Başlığı', badge: 'Üst Etiket', title: 'Başlık', subtitle: 'Alt Başlık', description: 'Açıklama', desc: 'Açıklama',
  text: 'Metin', content: 'İçerik', quote: 'Alıntı Sözü', author: 'Söz Sahibi', label: 'Yazı', name: 'Ad', category: 'Kategori',
  image: 'Görsel', imageAlt: 'Görsel Açıklaması (erişilebilirlik)', heroImage: 'Üst Görsel', heroImageAlt: 'Üst Görsel Açıklaması',
  thumbnail: 'Kapak Görseli', coverImage: 'Kapak Görseli', coverImageAlt: 'Kapak Görseli Açıklaması', videoUrl: 'Video (dosya yükleyin veya YouTube bağlantısı yapıştırın)',
  file: 'Dosya (PDF veya görsel)', link: 'Bağlantı', href: 'Bağlantı', buttonText: 'Buton Yazısı', buttonLink: 'Buton Bağlantısı',
  ctaText: 'Buton Yazısı', ctaLink: 'Buton Bağlantısı', primaryText: '1. Buton Yazısı', primaryLink: '1. Buton Bağlantısı',
  secondaryText: '2. Buton Yazısı', secondaryLink: '2. Buton Bağlantısı', primaryButtonText: '1. Buton Yazısı', primaryButtonLink: '1. Buton Bağlantısı',
  secondaryButtonText: '2. Buton Yazısı', secondaryButtonLink: '2. Buton Bağlantısı', question: 'Soru', answer: 'Cevap', value: 'Değer',
  time: 'Saat', date: 'Tarih', stepNumber: 'Adım No', icon: 'İkon adı (Material Symbols)', isPrimary: 'Vurgulu (renkli) kart',
  // Anasayfa
  hero: 'Üst Karşılama Alanı', quotePart1: 'Slogan 1. satır', quotePart2: 'Slogan 2. satır', quotePart3: 'Slogan 3. satır', quotePart4: 'Slogan 4. satır',
  ctaPrimaryText: 'Buton Yazısı', ctaPrimaryLink: 'Buton Bağlantısı', featureCards: 'Eğitim Kartları (5’li)', advantages: 'Avantajlar Satırı',
  dayVideo: '“Eylül’de Bir Gün” Video Alanı', discovery: '“Her Çocuk Bir Keşif” Bölümü',
  // Hakkımızda
  stats: 'İstatistik Kartları', valuesTitle: 'Değerler Başlığı', values: 'Değer Kartları', showcase: 'Alt Vitrin (Görsel + Söz)',
  // Okulumuz
  areas: 'Okul Alanları (Görsel Kartlar)', virtualTour: 'Tanıtım Videosu Alanı', modalTitle: 'Pencere Başlığı', modalText: 'Pencere Metni',
  noVideoText: 'Video Yokken Gösterilecek Metin', modalButtonText: 'Pencere Buton Yazısı', modalButtonLink: 'Pencere Buton Bağlantısı', quickLinks: 'Alt Hızlı Bağlantılar',
  // BEM
  wheelIntro: 'Çark Üstü Açıklama', wheelHub: 'BEM Çarkı', centerTitle: 'Çark Ortası Başlık', centerSubtitle: 'Çark Ortası Alt Yazı',
  sectors: 'Çark Yaprakları (6)', quoteBadge: 'Söz Kutusu Etiketi', outcomes: 'Kazanımlar', finalOutcome: 'Son Kazanım Cümlesi',
  // İngilizce
  heroBadge: 'Görsel Üstü Rozet', pillars: 'Özellik Kartları', videoShowcase: 'Video Kartı', galleryTitle: 'Galeri Başlığı', galleryBadge: 'Galeri Etiketi',
  photos: 'Fotoğraf Galerisi', caption: 'Fotoğraf Yazısı', cta: 'Alt Davet Kutusu',
  // Etkinlikler / Beslenme
  activities: 'Etkinlik / Branş Kartları', heroCard: 'Görsel Üstü Bilgi Kartı', menuBadge: 'Menü Etiketi', menuTitle: 'Menü Başlığı',
  mealLabels: 'Öğün Adları', breakfast: 'Kahvaltı', lunch: 'Öğle Yemeği', snack: 'İkindi', breakfastTime: 'Kahvaltı Saati', lunchTime: 'Öğle Saati',
  snackTime: 'İkindi Saati', weeklyMenu: 'Haftalık Menü', dayId: 'Gün Kodu', dayName: 'Gün', dietitianNote: 'Alerji / Diyet Notu Kutusu', infoCards: 'Bilgi Kartları',
  // Veliler
  portalModules: 'Veli Kartları (8’li)', moduleModal: 'Kart Tıklanınca Açılan Pencere', storyBanner: 'Fotoğraflı Söz Alanı', badgeText: 'Rozet', quickHelp: 'Destek Satırı',
  // Kayıt
  steps: 'Kayıt Adımları', scheduleTourCard: 'Okul Ziyareti Kartı', hoursNote: 'Müsaitlik Notu', photoBadge: 'Fotoğraf Rozeti', notice: 'Kontenjan Uyarı Satırı',
  quickCall: '“Sizi Arayalım” Formu', namePlaceholder: 'Ad Alanı İpucu', phonePlaceholder: 'Telefon Alanı İpucu', successText: 'Gönderim Sonrası Mesaj',
  faqTitle: 'SSS Başlığı', faq: 'Sıkça Sorulan Sorular',
  // İletişim
  infoCardsContact: 'İletişim Kartları', phoneTitle: 'Telefon Başlığı', phoneNumber: 'Telefon', phoneHours: 'Telefon Saatleri', faxTitle: 'Faks Başlığı',
  faxNumber: 'Faks', faxNote: 'Faks Notu', emailTitle: 'E-posta Başlığı', emailAddress: 'E-posta', emailNote: 'E-posta Notu', locationTitle: 'Konum Başlığı',
  locationCity: 'Konum', locationNote: 'Konum Notu', addressBox: 'Adres Kutusu', fullAddress: 'Açık Adres', directionsNote: 'Adres Açıklaması',
  mapInfo: 'Harita', mapQuery: 'Haritada Aranacak Yer Adı', directionsText: 'Yol Tarifi Buton Yazısı', visitingHours: 'Çalışma Saatleri', hoursLabel: 'Saat Etiketi',
  campusImage: 'Okul Fotoğrafı Kartı', formIntro: 'İletişim Formu', nameLabel: 'Ad Etiketi', phoneLabel: 'Telefon Etiketi', emailLabel: 'E-posta Etiketi',
  emailPlaceholder: 'E-posta İpucu', messageLabel: 'Mesaj Etiketi', messagePlaceholder: 'Mesaj İpucu', kvkkText: 'KVKK Onay Metni', successTitle: 'Gönderim Sonrası Başlık',
  // Menü & alt bilgi
  menu: 'Üst Menü', subLinks: 'Alt Menü Bağlantıları', footer: 'Alt Bilgi (Footer)', about: 'Kısa Tanıtım Yazısı', columns: 'Bağlantı Sütunları', links: 'Bağlantılar',
  contactTitle: 'İletişim Sütunu Başlığı', hoursTitle: 'Çalışma Saatleri Başlığı', weekdayLabel: 'Hafta İçi Etiketi', saturdayLabel: 'Cumartesi Etiketi',
  brandText: 'Kurum Adı', copyright: 'Telif Yazısı', legalLinks: 'Alt Satır Bağlantıları', floating: 'Sağ Alt Sabit Butonlar', appointmentText: 'Randevu Butonu Yazısı',
  appointmentLink: 'Randevu Butonu Bağlantısı', whatsappMessage: 'WhatsApp Hazır Mesajı', whatsappTitle: 'WhatsApp Buton İpucu', mobileCallLabel: 'Mobil Menü Arama Yazısı',
  // İçerikler
  items: 'Videolar', emptyText: 'Liste Boşken Gösterilecek Metin', playText: 'Kart Buton Yazısı', document: 'Program Belgesi (PDF/Görsel)',
  viewButtonText: 'Görüntüle Buton Yazısı', downloadButtonText: 'İndir Buton Yazısı', dayLabels: 'Tablo Başlıkları', groups: 'Yaş Grupları',
  rows: 'Saat Satırları', mon: 'Pazartesi', tue: 'Salı', wed: 'Çarşamba', thu: 'Perşembe', fri: 'Cuma', noteTitle: 'Not Başlığı', noteText: 'Not Metni',
  features: 'Özellikler', monthLabel: 'Ay Etiketi (ör. Kasım 2026)', weeks: 'Haftalar', days: 'Günler', allergyNote: 'Alerji Notu', poster: 'Aylık Menü Posteri',
  // Blog / Portal
  allCategoryLabel: '“Tümü” Kategori Yazısı', readMore: 'Devamını Oku Yazısı', listCta: 'Liste Altı Davet Kutusu', authorLabel: 'Yazar Etiketi', dateLabel: 'Tarih Etiketi',
  readTimeLabel: 'Okuma Süresi Etiketi', authorUnit: 'Yazar Birimi', relatedTitle: 'Önerilen Yazılar Başlığı', seeAll: 'Hepsini Gör Yazısı', readPost: 'Yazıyı Oku Yazısı',
  postCta: 'Yazı Altı Davet Kutusu', note: 'Bilgi Notu', loginButtonText: 'Giriş Butonu Yazısı', loginUrl: 'Veli Giriş Adresi (kullanılan uygulamanın bağlantısı)',
  // SEO
  seo: 'SEO Ayarları (Google)', keywords: 'Anahtar Kelimeler', ogImage: 'Paylaşım Görseli (Google / WhatsApp / sosyal medya)', noindex: 'Bu sayfayı Google’da gösterme (noindex)',
  siteName: 'Site Adı', siteUrl: 'Sitenin Alan Adı (ör. https://eylulanaokulu.com.tr)', titleTemplate: 'Başlık Şablonu (%s = sayfa adı)', defaultTitle: 'Varsayılan Başlık',
  defaultDescription: 'Varsayılan Açıklama', googleVerification: 'Google Search Console Doğrulama Kodu', bingVerification: 'Bing Doğrulama Kodu',
  yandexVerification: 'Yandex Doğrulama Kodu', allowIndexing: 'Site arama motorlarında görünsün',
  noLoginText: 'Giriş Adresi Yokken Gösterilecek Metin', helpTitle: 'Destek Başlığı', helpButtonText: 'Destek Butonu Yazısı', helpButtonLink: 'Destek Butonu Bağlantısı',
};
const HIDDEN = new Set(['id', 'dayId']);
/** Varsayılanı boş olan listeler için yeni öğe şablonu. */
const TEMPLATES: Record<string, Json> = {
  items: { id: '', title: '', category: '', date: '', description: '', videoUrl: '', thumbnail: '' },
  subLinks: { id: '', label: '', href: '', desc: '' },
  links: { id: '', label: '', href: '' },
};
const humanize = (k: string) => k.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (c) => c.toUpperCase());
const labelOf = (k: string) => LABELS[k] || humanize(k);

const kindOf = (key: string): 'image' | 'video' | 'file' | 'link' | 'long' | 'text' => {
  if (/videoUrl$/i.test(key)) return 'video';
  if (key === 'file') return 'file';
  if (/(^image$|Image$|^thumbnail$|^coverImage$)/.test(key)) return 'image';
  if (key === 'siteUrl') return 'text';
  if (/(^link$|^href$|Link$|Url$|^url$)/.test(key)) return 'link';
  if (/(^description$|^desc$|^text$|^content$|^answer$|^about$|Text$|^quote$|^noteText$|^excerpt$|^allergyNote$|^defaultDescription$)/.test(key)) return 'long';
  return 'text';
};

/** Listeye eklenecek yeni boş eleman (şablondaki metinler boşaltılır, yeni kimlik verilir). */
function blankFrom(tpl: Json): Json {
  if (typeof tpl === 'string') return '';
  if (typeof tpl === 'number') return 0;
  if (typeof tpl === 'boolean') return false;
  if (Array.isArray(tpl)) return [];
  if (isObj(tpl)) {
    const o: Obj = {};
    for (const [k, v] of Object.entries(tpl)) o[k] = k === 'id' ? `y-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}` : blankFrom(v);
    return o;
  }
  return null;
}

const itemTitle = (v: Json, i: number) => {
  if (isObj(v)) {
    const t = v.title || v.label || v.name || v.question || v.dayName || v.time || v.caption;
    if (typeof t === 'string' && t.trim()) return t.replace(/\n/g, ' ');
  }
  if (typeof v === 'string' && v.trim()) return v;
  return `${i + 1}. öğe`;
};

/* ----------------------------------------------------------------- alan bileşenleri */
const inputCls = 'w-full px-3 py-2 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4984]/20 focus:border-[#0E4984]';

interface Ctx { media: MediaItem[]; path?: string }

function Field({ k, value, onChange, ctx }: { k: string; value: Json; onChange: (v: Json) => void; ctx: Ctx }) {
  const label = labelOf(k);
  if (typeof value === 'boolean') {
    return (
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} className="w-4 h-4 rounded" />
        {label}
      </label>
    );
  }
  if (typeof value === 'number') {
    return (
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">{label}</label>
        <input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} className={inputCls} />
      </div>
    );
  }
  const str = typeof value === 'string' ? value : '';
  const kind = kindOf(k);
  if (kind === 'image' || kind === 'video' || kind === 'file') {
    return (
      <div className="space-y-2">
        <MediaField
          label={label}
          value={str}
          onChange={(u) => onChange(u)}
          mediaLibrary={ctx.media}
          acceptType={kind === 'image' ? 'image' : kind === 'video' ? 'video' : 'all'}
        />
        {kind === 'video' && (
          <input value={str} onChange={(e) => onChange(e.target.value)} placeholder="veya YouTube bağlantısı: https://youtube.com/watch?v=..." className={inputCls} />
        )}
      </div>
    );
  }
  const long = kind === 'long' || str.length > 90 || str.includes('\n');
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 mb-1">{label}</label>
      {long ? (
        <textarea value={str} rows={Math.min(8, Math.max(3, Math.ceil(str.length / 90)))} onChange={(e) => onChange(e.target.value)} className={inputCls} />
      ) : (
        <input value={str} onChange={(e) => onChange(e.target.value)} placeholder={kind === 'link' ? '/sayfa-adresi veya https://...' : ''} className={inputCls} />
      )}
    </div>
  );
}

/** Anahtar kelime girişi: kelimeyi yazıp Enter (veya virgül) ile ekleyin; × ile silin. */
export function TagInput({ value, onChange, placeholder = 'Kelimeyi yazıp Enter’a basın' }: { value: string[]; onChange: (v: string[]) => void; placeholder?: string }) {
  const [draft, setDraft] = useState('');
  const add = (raw: string) => {
    const parts = raw.split(',').map((x) => x.trim()).filter(Boolean);
    if (!parts.length) return;
    const lower = value.map((x) => x.toLocaleLowerCase('tr'));
    const next = [...value];
    for (const p of parts) if (!lower.includes(p.toLocaleLowerCase('tr'))) { next.push(p); lower.push(p.toLocaleLowerCase('tr')); }
    onChange(next);
    setDraft('');
  };
  return (
    <div className="flex flex-wrap items-center gap-1.5 px-2 py-1.5 rounded-lg border border-slate-200 bg-white focus-within:ring-2 focus-within:ring-[#0E4984]/20 focus-within:border-[#0E4984]">
      {value.map((t, i) => (
        <span key={t + i} className="inline-flex items-center gap-1 pl-2.5 pr-1 py-0.5 rounded-full bg-[#0E4984]/10 text-[#0E4984] text-xs font-semibold">
          {t}
          <button type="button" aria-label={`${t} sil`} onClick={() => onChange(value.filter((_, x) => x !== i))} className="w-4 h-4 rounded-full leading-none hover:bg-[#0E4984]/20">×</button>
        </span>
      ))}
      <input
        value={draft}
        onChange={(e) => (e.target.value.endsWith(',') ? add(e.target.value) : setDraft(e.target.value))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') { e.preventDefault(); add(draft); }
          else if (e.key === 'Backspace' && !draft && value.length) onChange(value.slice(0, -1));
        }}
        onBlur={() => add(draft)}
        placeholder={value.length ? '' : placeholder}
        className="flex-1 min-w-[160px] py-1 text-sm outline-none bg-transparent"
      />
    </div>
  );
}

const counterCls = (n: number, min: number, max: number) => (n === 0 ? 'text-slate-400' : n >= min && n <= max ? 'text-emerald-600' : 'text-amber-600');

/** Sayfa SEO alanları + Google arama sonucu önizlemesi. */
function SeoPanel({ value, onChange, ctx, path }: { value: Obj; onChange: (v: Obj) => void; ctx: Ctx; path?: string }) {
  const title = typeof value.title === 'string' ? value.title : '';
  const desc = typeof value.description === 'string' ? value.description : '';
  const keywords = Array.isArray(value.keywords) ? (value.keywords.filter((x) => typeof x === 'string') as string[]) : [];
  const set = (k: string, v: Json) => onChange({ ...value, [k]: v });
  return (
    <fieldset className="rounded-xl border-2 border-emerald-200 bg-emerald-50/40 p-4 space-y-4">
      <legend className="px-2 text-xs font-bold text-emerald-700 uppercase tracking-wide">SEO Ayarları (Google’da nasıl görünür?)</legend>
      <div className="rounded-lg bg-white border border-slate-200 p-3">
        <div className="text-[11px] text-slate-500 mb-1">Google önizlemesi</div>
        <div className="text-[13px] text-emerald-800 truncate">{(path || '/').replace(/^\//, 'site › ').replace(/\//g, ' › ') || 'site'}</div>
        <div className="text-[17px] leading-snug text-[#1a0dab] truncate">{title || 'Başlık girilmedi (genel SEO başlığı kullanılır)'}</div>
        <div className="text-[13px] text-slate-600 line-clamp-2">{desc || 'Açıklama girilmedi (genel SEO açıklaması kullanılır)'}</div>
      </div>
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-xs font-semibold text-slate-600">SEO Başlığı (title)</label>
          <span className={`text-[11px] font-semibold ${counterCls(title.length, 30, 65)}`}>{title.length} / 30-65 karakter</span>
        </div>
        <input value={title} onChange={(e) => set('title', e.target.value)} className={inputCls} placeholder="ör. Kayıt ve Başvuru | Eylül Çocuk Akademisi" />
      </div>
      <div>
        <div className="flex justify-between mb-1">
          <label className="text-xs font-semibold text-slate-600">SEO Açıklaması (meta description)</label>
          <span className={`text-[11px] font-semibold ${counterCls(desc.length, 110, 165)}`}>{desc.length} / 110-165 karakter</span>
        </div>
        <textarea value={desc} rows={3} onChange={(e) => set('description', e.target.value)} className={inputCls} placeholder="Google arama sonucunda başlığın altında görünen kısa tanıtım" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Anahtar Kelimeler</label>
        <TagInput value={keywords} onChange={(v) => set('keywords', v)} />
        <p className="text-[11px] text-slate-400 mt-1">Kelimeyi yazıp Enter’a basın. Genel SEO ayarlarındaki kelimeler de otomatik eklenir.</p>
      </div>
      <MediaField label={labelOf('ogImage')} value={typeof value.ogImage === 'string' ? value.ogImage : ''} onChange={(u) => set('ogImage', u)} mediaLibrary={ctx.media} acceptType="image" />
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" checked={value.noindex === true} onChange={(e) => set('noindex', e.target.checked)} className="w-4 h-4 rounded" />
        {labelOf('noindex')}
      </label>
    </fieldset>
  );
}

const btn = 'px-2 py-1 rounded-md text-[11px] font-semibold border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40';

function ListEditor({ k, schema, value, onChange, ctx, depth }: { k: string; schema: Json[]; value: Json[]; onChange: (v: Json[]) => void; ctx: Ctx; depth: number }) {
  const [open, setOpen] = useState<number | null>(null);
  const tpl: Json = schema[0] ?? TEMPLATES[k] ?? value[0] ?? '';
  const move = (i: number, d: number) => {
    const j = i + d;
    if (j < 0 || j >= value.length) return;
    const n = value.slice();
    [n[i], n[j]] = [n[j], n[i]];
    onChange(n);
    setOpen(open === i ? j : open);
  };
  const remove = (i: number) => {
    if (!confirm(`“${itemTitle(value[i], i)}” silinsin mi?`)) return;
    onChange(value.filter((_, x) => x !== i));
    setOpen(null);
  };
  const add = () => {
    onChange([...value, blankFrom(tpl)]);
    setOpen(value.length);
  };

  if (k === 'keywords') {
    return (
      <div>
        <div className="text-xs font-semibold text-slate-600 mb-1">{labelOf(k)}</div>
        <TagInput value={value.filter((x) => typeof x === 'string') as string[]} onChange={onChange} />
        <p className="text-[11px] text-slate-400 mt-1">Kelimeyi yazıp Enter’a basın; silmek için × işaretine tıklayın.</p>
      </div>
    );
  }

  // Basit metin listesi (ör. kazanımlar)
  if (typeof tpl === 'string') {
    return (
      <div>
        <div className="text-xs font-semibold text-slate-600 mb-1">{labelOf(k)}</div>
        <div className="space-y-1.5">
          {value.map((v, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <input value={typeof v === 'string' ? v : ''} onChange={(e) => onChange(value.map((x, xi) => (xi === i ? e.target.value : x)))} className={inputCls} />
              <button type="button" className={btn} onClick={() => move(i, -1)} disabled={i === 0} title="Yukarı">↑</button>
              <button type="button" className={btn} onClick={() => move(i, 1)} disabled={i === value.length - 1} title="Aşağı">↓</button>
              <button type="button" className={`${btn} text-rose-600`} onClick={() => onChange(value.filter((_, x) => x !== i))} title="Sil">✕</button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => onChange([...value, ''])} className="mt-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700">+ Ekle</button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">{labelOf(k)} <span className="text-slate-400 font-medium normal-case">({value.length})</span></div>
        <button type="button" onClick={add} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0E4984] text-white hover:bg-[#0B3B6B]">+ Yeni Ekle</button>
      </div>
      <div className="space-y-2">
        {value.length === 0 && <div className="text-xs text-slate-400 border border-dashed border-slate-200 rounded-lg p-3 text-center">Henüz öğe yok. “Yeni Ekle” ile ekleyin.</div>}
        {value.map((item, i) => (
          <div key={(isObj(item) && typeof item.id === 'string' && item.id) || i} className="rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 px-3 py-2">
              <button type="button" onClick={() => setOpen(open === i ? null : i)} className="flex-1 text-left text-sm font-semibold text-slate-800 truncate">
                <span className="text-slate-400 mr-1">{open === i ? '▾' : '▸'}</span>
                {itemTitle(item, i)}
              </button>
              <button type="button" className={btn} onClick={() => move(i, -1)} disabled={i === 0} title="Yukarı taşı">↑</button>
              <button type="button" className={btn} onClick={() => move(i, 1)} disabled={i === value.length - 1} title="Aşağı taşı">↓</button>
              <button type="button" className={`${btn} text-rose-600`} onClick={() => remove(i)} title="Sil">Sil</button>
            </div>
            {open === i && (
              <div className="border-t border-slate-100 p-3">
                <ObjectEditor schema={(isObj(tpl) ? tpl : {}) as Obj} value={(isObj(item) ? item : {}) as Obj} onChange={(nv) => onChange(value.map((x, xi) => (xi === i ? nv : x)))} ctx={ctx} depth={depth + 1} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ObjectEditor({ schema, value, onChange, ctx, depth }: { schema: Obj; value: Obj; onChange: (v: Obj) => void; ctx: Ctx; depth: number }) {
  const set = (k: string, v: Json) => onChange({ ...value, [k]: v });
  const keys = Object.keys(schema).filter((k) => !HIDDEN.has(k));
  const simple = keys.filter((k) => !isObj(schema[k]) && !Array.isArray(schema[k]));
  const complex = keys.filter((k) => isObj(schema[k]) || Array.isArray(schema[k]));
  return (
    <div className="space-y-4">
      {simple.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {simple.map((k) => {
            const v = value[k] === undefined || value[k] === null ? blankFrom(schema[k]) : value[k];
            const wide = ['image', 'video', 'file', 'long'].includes(kindOf(k)) || (typeof v === 'string' && v.length > 90);
            return (
              <div key={k} className={wide ? 'md:col-span-2' : ''}>
                <Field k={k} value={v} onChange={(nv) => set(k, nv)} ctx={ctx} />
              </div>
            );
          })}
        </div>
      )}
      {complex.map((k) => {
        const sv = schema[k];
        if (k === 'seo' && depth === 0 && isObj(sv)) {
          return <SeoPanel key={k} value={{ ...sv, ...(isObj(value[k]) ? value[k] : {}) } as Obj} onChange={(nv) => set(k, nv)} ctx={ctx} path={ctx.path} />;
        }
        if (Array.isArray(sv)) {
          return (
            <div key={k} className="rounded-xl bg-slate-50 border border-slate-200 p-3">
              <ListEditor k={k} schema={sv} value={Array.isArray(value[k]) ? (value[k] as Json[]) : []} onChange={(nv) => set(k, nv)} ctx={ctx} depth={depth} />
            </div>
          );
        }
        return (
          <fieldset key={k} className={`rounded-xl border border-slate-200 p-3 ${depth === 0 ? 'bg-white' : 'bg-slate-50/60'}`}>
            <legend className="px-1.5 text-xs font-bold text-[#0E4984] uppercase tracking-wide">{labelOf(k)}</legend>
            <ObjectEditor schema={sv as Obj} value={(isObj(value[k]) ? value[k] : {}) as Obj} onChange={(nv) => set(k, nv)} ctx={ctx} depth={depth + 1} />
          </fieldset>
        );
      })}
    </div>
  );
}

export const ContentEditor: React.FC<{ schema: unknown; value: unknown; onChange: (v: any) => void; mediaLibrary?: MediaItem[]; path?: string }> = ({
  schema,
  value,
  onChange,
  mediaLibrary = [],
  path,
}) => <ObjectEditor schema={schema as Obj} value={(isObj(value) ? value : {}) as Obj} onChange={onChange} ctx={{ media: mediaLibrary, path }} depth={0} />;
