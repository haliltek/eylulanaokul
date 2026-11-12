/**
 * Canlı içerik düzeltme yamaları.
 *
 * Sunucudaki `data/cms-store.json` dosyası koddan bağımsız yaşar; koddaki varsayılan metinleri düzeltmek,
 * daha önce kaydedilmiş metinleri değiştirmez. Bu dosyadaki her yama sunucu açılışında BİR KEZ uygulanır
 * (uygulanan yama kimlikleri `_contentPatches` alanında tutulur) ve yalnızca eski metin hâlâ aynen
 * duruyorsa değiştirir — yönetim panelinden sonradan düzenlenmiş metinlere dokunmaz.
 */
import type { CmsStore, BlogPostItem } from '../types/cms';
import { createEmptySeoData } from './seo';

type Replacement = [from: string, to: string];
interface Patch {
  id: string;
  replacements: Replacement[];
  run?: (store: CmsStore) => boolean;
}

/** Yamaların uygulanacağı bölümler (veli başvuruları vb. kişisel kayıtlara dokunulmaz). */
const SECTIONS: (keyof CmsStore)[] = ['siteSettings', 'navigation', 'pages', 'blog', 'activityVideos', 'courseSchedule', 'monthlyMealList'];

export const CONTENT_PATCHES: Patch[] = [
  {
    id: '2026-11-musteri-duzeltmeleri',
    replacements: [
      // İngilizce
      ['Sınıflarımızda Türk sınıf öğretmeninin yanında', 'Sınıflarımızda sınıf öğretmeninin yanında'],
      ['tam zamanlı Türk sınıf öğretmenimizin yanında', 'tam zamanlı sınıf öğretmenimizin yanında'],
      // BEM
      ['BEM çarkımız 6 ana petalsen oluşur:', 'BEM çarkımız altı yapraktan oluşmaktadır:'],
      // Yazar isimleri → birimler
      ['Emily Walker (Yabancı Diller Bölüm Başkanı)', 'Eylül Çocuk Akademisi İngilizce Birimi'],
      ['Psk. Selin Öztürk (Program Koordinatörü)', 'Eylül Çocuk Akademisi PDR Servisi'],
      ['Psk. Dan. Merve Şahin', 'Eylül Çocuk Akademisi PDR Servisi'],
      ['Uzm. Dyt. Zeynep Kaya', 'Eylül Çocuk Akademisi Beslenme Birimi'],
      ['Uzm. Dyt. Eylül Test', 'Eylül Çocuk Akademisi Beslenme Birimi'],
      ['Diyetisyen QA Özel Notu', 'Özel Diyet & Alerjen Hassasiyeti'],
      ['Mevsim geçişlerinde çocuklarımıza taze sıkılmış C vitamini ve propolisli organik yoğurt sunulmaktadır.', 'Alerji ve özel beslenme ihtiyaçları için bireysel planlama yapılır.'],
      // Kayıt & iletişim
      ['2024 - 2025 Dönemi Ön Kayıtları Başladı', '2026 - 2027 Dönemi Ön Kayıtları Başladı'],
      ['çocuğunuz için hazırlanan doğal atölye ortamını keşfedin', 'çocuğunuz için hazırlanan sınıf ortamını keşfedin'],
      ['Ön başvuru formunu doldurun, uzman rehberlik ekibimiz en kısa sürede sizinle iletişime geçsin.', 'Ön başvuru formunu doldurun, koordinatörümüz en kısa sürede sizinle iletişime geçsin.'],
      ['Hafta içi 09:00 - 17:00 arası müsait', 'Hafta içi 08:00 - 17:00 arası müsait'],
      ['Randevu oluşturarak uzman pedagoglarımızla birebir görüşebilirsiniz.', 'Randevu oluşturarak eğitim kadromuzla birebir görüşebilirsiniz.'],
      [
        'Eğitim saatlerimiz tam gün 08:30 - 18:30 arasındadır. Çayyolu, Ümitköy, İncek ve Yaşamkent bölgelerine hostesli okul servisimiz mevcuttur.',
        'Eğitim saatlerimiz hafta içi 08:00 - 17:00 arasındadır. Okulumuzun servis imkânı bulunmamaktadır.',
      ],
      ['Uzman kadromuz gün içinde sizi arayacaktır.', 'Koordinatörümüz gün içinde sizi arayacaktır.'],
      // Okulumuz: atölye/Montessori/ahşap/kauçuk
      ['Doğal ışık alan sınıflarımız, geniş yeşil bahçemiz ve özel atölyelerimizle', 'Doğal ışık alan sınıflarımız ve geniş yeşil bahçemizle'],
      ['Sınıflarımızı, bahçemizi ve atölyelerimizi evinizden adım adım gezin.', 'Sınıflarımızı ve bahçemizi evinizden adım adım gezin.'],
      ['güvenli kauçuk zeminli kaydırak', 'doğal çim zeminli kaydırak'],
      ['ferah, sıcak ve doğal ahşap atölyelerde', 'ferah, sıcak ve aydınlık sınıflarda'],
      // Etkinlikler
      ['Atölyeler & Branş Dersleri', 'Etkinlikler & Branş Dersleri'],
      ['zenginleştirilmiş atölye programlarımız', 'zenginleştirilmiş etkinlik programlarımız'],
      ['sınırsız hayal gücü atölyesi', 'sınırsız hayal gücü çalışmaları'],
      ['zengin atölye deneyimleri açığa çıkarır', 'zengin etkinlik deneyimleri açığa çıkarır'],
      ['9 branş etkinlik atölyesi (', '9 branş etkinliği ('],
      ['jimnastik ve fen atölyelerinde kendi tutkusunu', 'jimnastik ve fen etkinliklerinde kendi tutkusunu'],
      // Beslenme
      ["Eylül Mutfak Atölyesi'nde", "Eylül Mutfağı'nda"],
      ['Eylül Mutfak Atölyesi', 'Eylül Mutfağı'],
      // Velilerimiz İçin: var olmayan sayfalara giden bağlantılar
      ['/veli-portali/duyurular', '/veli-portali'],
      ['/veli-portali/takvim', '/icerikler/ders-programi'],
      ['/veli-portali/portfolyo', '/veli-portali'],
      ['/veli-portali/mesajlar', '/iletisim'],
      ['/veli-portali/belgeler', '/iletisim'],
      // Veli portalı henüz hazır değil
      ['Dijital veli portalımız üzerinden öğrencinizin gelişim raporlarına, günlük etkinliklere ve okul duyurularına anında ulaşabilirsiniz.', 'Öğrencinizin gelişimi, günlük etkinlikler ve okul duyuruları hakkında sizinle düzenli olarak iletişim halindeyiz.'],
      ['Giriş & Bilgi Sistemi', 'Çalışma Aşamasında'],
      ['Portal girişi, şifre sıfırlama veya idari sorularınız için danışma hattımız hizmetinizdedir.', 'İdari sorularınız için danışma hattımız hizmetinizdedir.'],
      // Site ayarları
      ['Güvenle Bugüne, Bilimle Yarına - QA Doğrulandı', 'Güvenle Bugüne, Umutla Yarına...'],
    ],
    run: (store) => {
      // "3-6 Yaş Döneminde Bireysel İlgi ve Yetenek Keşfi" yazısı listede görünüp açılmıyordu: kayıtta yoksa geri ekle.
      const posts = store.blog?.posts;
      if (!Array.isArray(posts)) return false;
      const slug = '3-6-yas-doneminde-bireysel-ilgi-ve-yetenek-kesfi';
      if (posts.some((p) => p.slug === slug)) return false;
      posts.push(POST_6);
      return true;
    },
  },
  {
    // Demo SEO/analitik verilerini sıfırla; bundan sonra yalnız gerçek ölçümler birikir.
    id: '2026-11-seo-sifirlama',
    replacements: [],
    run: (store) => {
      store.seo = createEmptySeoData(store.seo?.serpbear?.domain || 'eylulanaokulu.com.tr');
      for (const p of store.blog?.posts || []) p.views = 0;
      return true;
    },
  },
];

/** Bir değerin içindeki tüm metinlerde değişiklikleri uygular; değişiklik olduysa true döner. */
function replaceDeep(node: unknown, reps: Replacement[], set: (v: unknown) => void): boolean {
  if (typeof node === 'string') {
    let s = node;
    for (const [from, to] of reps) if (s.includes(from)) s = s.split(from).join(to);
    if (s !== node) { set(s); return true; }
    return false;
  }
  let changed = false;
  if (Array.isArray(node)) node.forEach((v, i) => { changed = replaceDeep(v, reps, (nv) => { node[i] = nv; }) || changed; });
  else if (node && typeof node === 'object') {
    const o = node as Record<string, unknown>;
    for (const k of Object.keys(o)) changed = replaceDeep(o[k], reps, (nv) => { o[k] = nv; }) || changed;
  }
  return changed;
}

/** Uygulanmamış yamaları uygular. Kayıt değiştiyse true döner (çağıran diske yazar). */
export function applyContentPatches(store: CmsStore): boolean {
  const done = new Set(store._contentPatches || []);
  let changed = false;
  for (const p of CONTENT_PATCHES) {
    if (done.has(p.id)) continue;
    for (const sec of SECTIONS) {
      const val = store[sec];
      if (val !== undefined) replaceDeep(val, p.replacements, (nv) => { (store as unknown as Record<string, unknown>)[sec] = nv; });
    }
    p.run?.(store);
    done.add(p.id);
    changed = true;
  }
  if (changed) store._contentPatches = [...done];
  return changed;
}

const POST_6: BlogPostItem = {
  id: 'post-6',
  slug: '3-6-yas-doneminde-bireysel-ilgi-ve-yetenek-kesfi',
  title: '3-6 Yaş Döneminde Bireysel İlgi ve Yetenek Keşfi Nasıl Yapılır?',
  excerpt:
    'Her çocuk piyanist veya ressam olmak zorunda değildir; önemli olan piyano, satranç, drama, jimnastik ve fen etkinliklerinde kendi tutkusunu bulmasıdır.',
  content: [
    'Erken çocukluk dönemi yeteneklerin dikte edildiği değil, binbir çeşit uyaranla çocuğun önüne serildiği bir açık büfe olmalıdır. Bir çocuğun satranca mı, görsel sanatlara mı, ritim ve müziğe mi yoksa doğa ve mekanik düzeneklere mi yatkın olduğunu ancak zengin etkinlik deneyimleri açığa çıkarır.',
    "Özel Eylül Anaokulu'nun 9 branş etkinliği (Piyano, Resim, Jimnastik, Satranç, Fen ve Doğa, Drama, Müzik, Kodlama, Değerler Eğitimi) her çocuğun haftalık döngüde tüm bu disiplinlerle doğrudan etkileşime girmesini sağlar.",
    'Öğretmenlerimiz öğrencinin hangi köşede daha uzun süre pürdikkat kaldığını, hangi malzemeyle çalışırken gözlerinin parladığını gözlemleyerek gelişim raporlarına kaydeder ve aileye rehberlik sunar.',
  ],
  coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyiN03arbqJBsDVFV1HUx8dy-0bAohSvrbAVnlf6fX7g4q1V8Y4k9_8R4m_Q2V1eJISuXF82SBW9ewtiiHYMK7OQ8sQNM',
  category: 'Eğitim & Pedagoji',
  author: 'Eylül Çocuk Akademisi Sanat & Müzik Kurulu',
  publishedAt: '2026-10-01T15:45:00.000Z',
  readTime: '4 dk okuma',
  status: 'published',
  views: 0,
  seo: {
    metaTitle: '3-6 Yaş Çocuklarda Yetenek ve İlgi Keşfi | Özel Eylül Anaokulu Kars',
    metaDescription: 'Okul öncesinde piyano, satranç, jimnastik ve kodlama ile yetenek keşfi nasıl yapılır? Kars Özel Eylül Anaokulu branş etkinlikleri.',
    focusKeyword: 'çocuklarda yetenek keşfi anaokulu',
    seoScore: 96,
  },
};
