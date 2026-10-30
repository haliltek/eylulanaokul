# Eylül Çocuk Akademisi - Sistem ve Uygulama Mimarisi (ARCHITECTURE.md)
**Sürüm:** 6.0 (Master Mimari Şartname)  
**Tarih:** 21 Ekim 2026  
**Hazırlayan:** Aslan Amca (Tech Lead & Sistem Analisti - `aslan-amca-mvf09gi7`)  
**Hedef Kapsam:** `D:\anaokulu` (10 Kurumsal Sayfa + /veli-portali + /admin Materio MUI Türkçe Kontrol Paneli + %100 Dinamik CMS)

---

## 1. Yönetici Özeti ve Mimari Vizyon

Eylül Çocuk Akademisi kurumsal web platformu; erken çocukluk eğitiminde sevgi, ilgi, özen ve pedagojik güveni yansıtan **Warm Horizon Academy** tasarım dili ile inşa edilmiştir.

Bu mimarinin temel direkleri:
1. **10 Kurumsal Sayfa:** Next.js 15+ App Router, React 19, TypeScript ve Tailwind CSS ile geliştirilen, doğal yapraklı ve organik dalga geçişli arayüz.
2. **%100 Dinamik CMS Mimarisi:** Web sitesindeki hiçbir metin (başlık, açıklama, BEM çarkı, beslenme menüsü, etkinlik kartı) ve hiçbir görsel/video statik kod içerisinde gömülü kalmaz. Tüm içerikler yönetim panelinden anlık olarak düzenlenir, eklenir ve silinir.
3. **Materio MUI Türkçe Admin Paneli (`/admin`):** Açık kaynak Materio MUI Next.js şablonu temel alınarak hazırlanmış, tamamen Türkçeleştirilmiş, rol tabanlı (Süper Admin, Müdür/Editör, Öğretmen, Diyetisyen, Muhasebe) profesyonel yönetim merkezi.
4. **Veli & Mobil Okul Portalı (`/veli-portali`):** Velilerin çocuklarının günlük durumunu, yoklamasını, BEM portfolyo gelişimini, haftalık yemek menüsünü ve sınıf duyurularını izleyebildiği güvenli portal.
5. **Kurumsal Entegrasyonlar:** 8 aşamalı Veli CRM hunisi, KVKK Aydınlatma/Açık Rıza yönetimi, İK başvuru havuzu ve Merkezi Sosyal Medya Yayın Yönetimi.

---

## 2. Genel Sistem Mimarisi ve Teknoloji Yığını

```
+-----------------------------------------------------------------------------------+
|                           EYLÜL ÇOCUK AKADEMİSİ PLATFORMU                         |
+-----------------------------------------+-----------------------------------------+
|      KAMUSAL ÖN YÜZ & VELİ PORTALI      |        YÖNETİM PANELİ (/admin)          |
|  Next.js 15 App Router (Kamusal Rotalar)|      Materio MUI Admin Template (TR)    |
|  - Tailwind CSS + Lucide / Material Icons- Emotion / MUI v5 + Tailwind uyumu      |
|  - Framer Motion / Lenis Smooth Scroll  |      - ApexCharts, React Dropzone, Slate|
|  - SEO Meta, Schema.org, OpenGraph      |      - Gelişmiş Medya Yöneticisi        |
+-----------------------------------------+-----------------------------------------+
                                      |
                                      v
+-----------------------------------------------------------------------------------+
|                        ORTAK UYGULAMA VE ÇEKİRDEK KATMANI                         |
|  - Next.js Server Components (RSC) & Server Actions                               |
|  - Next.js Edge / Node.js Route Handlers (/api/*)                                 |
|  - NextAuth.js / Jose JWT Yetkilendirme (Veli, Personel, Admin)                   |
|  - Zod ile Tip ve Şema Girdi Doğrulama (Runtime Type Safety)                      |
|  - ETag & ISR Revalidation (RevalidateTag / Path On-Demand Cache Temizleme)       |
+-----------------------------------------------------------------------------------+
                                      |
                                      v
+-----------------------------------------------------------------------------------+
|                        VERİ VE DEPOLAMA ALTYAPISI                                 |
|  - SQLite + Prisma ORM (veya PostgreSQL Uyumlu Gelişmiş Şema)                     |
|  - Yerel / Bulut Medya Saklama Alanı (/public/uploads veya S3 Uyumlu Object)   |
|  - Audit Log (Değişiklik Denetim İzleri) ve Güvenli KVKK Veri İzolasyonu          |
+-----------------------------------------------------------------------------------+
```

### Teknoloji Bileşenleri
- **Framework:** Next.js 15+ (App Router)
- **Runtime & Dil:** Node.js 20+ LTS, TypeScript 5+ (Strict Mode)
- **Stil & Arayüz (Kamusal):** Tailwind CSS v3.4+, PostCSS, Framer Motion, Material Symbols Outlined / Lucide Icons.
- **Yönetim Paneli (Admin):** Materio MUI Next.js Free Template altyapısı, MUI v5/v6, Emotion, ApexCharts (Grafikler & CRM Hunisi).
- **Veritabanı & ORM:** Prisma ORM ile SQLite (Yerel ve yüksek taşınabilirlik, sıfır harici veritabanı bağımlılığı).
- **Doğrulama:** Zod v3.23+
- **Kimlik Doğrulama:** NextAuth.js v5 (Auth.js) / Jose JWT (HttpOnly, Secure Cookie).
- **Görsel & Medya Yönetimi:** Sharp (resim optimizasyonu, WebP format dönüşümü), yerel `/public/uploads` depolama.

---

## 3. Rota Mimarisi ve Klasör Hiyerarşisi

Next.js App Router mimarisi, `Route Groups` kullanılarak mantıksal ve layout bazında birbirinden tamamen ayrıştırılmıştır:
1. `(public)`: Kamusal 10 sayfa ve alt sayfalar (Warm Horizon Academy Layout, ortak Header, Footer, Ziyaret Planla CTA).
2. `(portal)`: Veli Portali rotaları (`/veli-portali`) — Velilere özel yalın mobil-uyumlu layout.
3. `(admin)`: Yönetim Paneli rotaları (`/admin`) — Materio MUI Türkçe Admin Layout (Sidebar, Topbar, UserProfile, Bildirimler).
4. `api`: RESTful API uç noktaları (CMS, CRM, Portal, Auth, Upload).

### Detaylı Dizin Yapısı

```
D:\anaokulu\
├── src/
│   ├── app/
│   │   ├── (public)/                      # KAMUSAL KURUMSAL SİTE
│   │   │   ├── layout.tsx                 # Kamusal Site Ana Layout (Warm Ivory zemin, Header, Footer)
│   │   │   ├── page.tsx                   # 1. Anasayfa (/)
│   │   │   ├── hakkimizda/
│   │   │   │   └── page.tsx               # 2. Hakkımızda (/hakkimizda)
│   │   │   ├── okulumuz/
│   │   │   │   └── page.tsx               # 3. Okulumuz & 360° Sanal Tur (/okulumuz)
│   │   │   ├── egitim-modeli/
│   │   │   │   ├── bem/
│   │   │   │   │   └── page.tsx           # 4. Bütünleştirilmiş Eğitim Modeli (/egitim-modeli/bem)
│   │   │   │   └── all-day-english/
│   │   │   │       └── page.tsx           # 5. All Day English (/egitim-modeli/all-day-english)
│   │   │   ├── etkinlikler/
│   │   │   │   └── page.tsx               # 6. Zengin Etkinlik Dünyası (/etkinlikler)
│   │   │   ├── beslenme/
│   │   │   │   └── page.tsx               # 7. Doğal & Dengeli Beslenme (/beslenme)
│   │   │   ├── velilerimiz-icin/
│   │   │   │   └── page.tsx               # 8. Velilerimiz İçin Bilgilendirme (/velilerimiz-icin)
│   │   │   ├── kayit-ve-basvuru/
│   │   │   │   └── page.tsx               # 9. Kayıt & Ziyaret Randevusu (/kayit-ve-basvuru)
│   │   │   ├── iletisim/
│   │   │   │   └── page.tsx               # 10. İletişim & Harita (/iletisim)
│   │   │   ├── kvkk/
│   │   │   │   └── page.tsx               # KVKK Aydınlatma & Gizlilik Metni
│   │   │   └── ik-kariyer/
│   │   │       └── page.tsx               # Açık Pozisyonlar & CV Başvuru Formu
│   │   │
│   │   ├── (portal)/                      # VELİ & MOBİL OKUL PORTALI
│   │   │   ├── layout.tsx                 # Veli Portal Layout (Auth kontrolü, Mobil Alt Menü)
│   │   │   └── veli-portali/
│   │   │       ├── login/
│   │   │       │   └── page.tsx           # Veli Giriş Ekranı (TCKN/Telefon + SMS/Şifre)
│   │   │       ├── dashboard/
│   │   │       │   └── page.tsx           # Veli Ana Paneli (Günlük durum, hızlı duyurular)
│   │   │       ├── duyurular/
│   │   │       │   └── page.tsx           # Okul ve Sınıf Duyuruları
│   │   │       ├── gelisim-portfolyosu/
│   │   │       │   └── page.tsx           # BEM Gelişim Çarkı & 6 Boyutlu Karne / Gözlem
│   │   │       ├── yemek-menusu/
│   │   │       │   └── page.tsx           # Anlık Beslenme ve Tüketim Durumu
│   │   │       ├── ogretmen-mesaj/
│   │   │       │   └── page.tsx           # Sınıf Öğretmeni ile Çift Yönlü Mesajlaşma
│   │   │       └── izin-talep/
│   │   │           └── page.tsx           # Devamsızlık ve İlaç Bildirim Formu
│   │   │
│   │   ├── (admin)/                       # MATERIO MUI TÜRKÇE ADMIN PANELİ
│   │   │   ├── layout.tsx                 # Materio MUI Admin Shell (Sidebar, Topbar, Auth Guard)
│   │   │   └── admin/
│   │   │       ├── login/
│   │   │       │   └── page.tsx           # Admin Giriş Ekranı
│   │   │       ├── dashboard/
│   │   │       │   └── page.tsx           # Genel Metrikler, Günlük Başvurular, CRM Grafikleri
│   │   │       ├── cms/                   # %100 DİNAMİK CMS YÖNETİMİ
│   │   │       │   ├── sayfalar/
│   │   │       │   │   ├── page.tsx       # 10 Kurumsal Sayfanın Liste ve Düzenleme Seçimi
│   │   │       │   │   └── [slug]/
│   │   │       │   │       └── page.tsx   # Sayfa Bazlı Tüm Metin/Bölüm Düzenleyici
│   │   │       │   ├── medya/
│   │   │       │   │   └── page.tsx       # Eylül Medya Yöneticisi (Yükle, Boyutlandır, Sil, Etiketle)
│   │   │       │   ├── bem-carki/
│   │   │       │   │   └── page.tsx       # BEM 6 Boyutlu Model İçerik Düzenleyici
│   │   │       │   ├── etkinlikler/
│   │   │       │   │   └── page.tsx       # 9+ Atölye/Etkinlik Ekle/Düzenle/Sil
│   │   │       │   └── beslenme/
│   │   │       │       └── page.tsx       # Pazartesi-Cuma Menü Planlayıcı & Diyetisyen Notları
│   │   │       ├── crm/                   # VELİ CRM & ADMISSION
│   │   │       │   ├── basvurular/
│   │   │       │   │   └── page.tsx       # 8 Aşamalı Huni Kanban & Tablo Görünümü
│   │   │       │   ├── randevular/
│   │   │       │   │   └── page.tsx       # Okul Ziyaret Takvimi ve Hatırlatıcılar
│   │   │       │   └── reklam-kaynak/
│   │   │       │       └── page.tsx       # Google Ads, Meta CAPI ve UTM Kaynak Analizi
│   │   │       ├── veli-portali-yonetimi/ # MOBİL OKUL VE SINIF YÖNETİMİ
│   │   │       │   ├── ogrenciler/
│   │   │       │   │   └── page.tsx       # Öğrenci Listesi ve Veli Eşleştirmeleri
│   │   │       │   ├── duyurular/
│   │   │       │   │   └── page.tsx       # Okul / Sınıf Geneli Duyuru Yayınlama
│   │   │       │   └── portfolyo-giris/
│   │   │       │       └── page.tsx       # BEM Değerlendirme Puanı ve Öğretmen Gözlemleri
│   │   │       ├── ik/                    # İNSAN KAYNAKLARI
│   │   │       │   ├── pozisyonlar/
│   │   │       │   │   └── page.tsx       # Açık Kadro Yönetimi
│   │   │       │   └── cv-havuzu/
│   │   │       │       └── page.tsx       # Başvuran Adaylar ve CV İndirme/İnceleme
│   │   │       ├── sosyal-medya/          # SOSYAL MEDYA YAYIN MERKEZİ
│   │   │       │   └── page.tsx           # Instagram/YouTube Planlama ve Durum Matrisi
│   │   │       └── ayarlar/               # SİSTEM VE GÜVENLİK AYARLARI
│   │   │           ├── site-ayarlari/
│   │   │           │   └── page.tsx       # Logo, Favicon, Telefon, Adres, Sosyal Linkler
│   │   │           ├── kullanicilar/
│   │   │           │   └── page.tsx       # RBAC Rol ve Yetki Atama (Admin, Müdür, Öğretmen)
│   │   │           └── guvenlik-kvkk/
│   │   │               └── page.tsx       # Denetim İzleri (Audit Logs), KVKK Onay Kayıtları
│   │   │
│   │   └── api/                           # API UÇ NOKTALARI (ROUTE HANDLERS)
│   │       ├── auth/
│   │       │   └── [...nextauth]/route.ts # NextAuth Entegrasyonu
│   │       ├── cms/
│   │       │   ├── pages/
│   │       │   │   ├── route.ts           # Sayfa listesi
│   │       │   │   └── [slug]/route.ts    # Belirli sayfanın tüm dinamik alanları
│   │       │   ├── bem/route.ts           # BEM modeli verileri
│   │       │   ├── activities/route.ts    # Etkinlik CRUD
│   │       │   ├── menu/route.ts          # Haftalık Beslenme Menüsü CRUD
│   │       │   └── media/
│   │       │       ├── upload/route.ts    # Resim / Belge yükleme (Sharp WebP)
│   │       │       └── [id]/route.ts      # Medya silme/güncelleme
│   │       ├── crm/
│   │       │   ├── leads/route.ts         # Başvuru formu kayıt ve filtreleme
│   │       │   ├── leads/[id]/route.ts    # Statü güncelleme (8 aşamalı huni)
│   │       │   └── appointments/route.ts  # Ziyaret randevusu oluşturma/onaylama
│   │       ├── portal/
│   │       │   ├── announcements/route.ts # Veli duyuruları
│   │       │   ├── portfolio/route.ts     # Öğrenci BEM karnesi ve gözlemler
│   │       │   └── attendance/route.ts    # Günlük yoklama bilgisi
│   │       ├── contact/route.ts           # İletişim formu mesajları
│   │       ├── career/route.ts            # İş başvuru formu ve CV alımı
│   │       └── revalidate/route.ts        # Admin değişikliğinde ISR Cache Temizleme
│   │
│   ├── components/
│   │   ├── public/                        # Kamusal Web Bileşenleri
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx             # Orijinal Filiz Yapraklı Logo, Navigasyon, CTA Butonu
│   │   │   │   ├── Footer.tsx             # 4 Sütunlu Footer, Hızlı Linkler, KVKK, Harita
│   │   │   │   └── MobileNav.tsx          # Mobil Menü Drawer
│   │   │   ├── ui/
│   │   │   │   ├── Button.tsx             # Amber Pill / Navy Pill Butonlar
│   │   │   │   ├── Card.tsx               # Organik kavisli (2rem), soft gölgeli kartlar
│   │   │   │   ├── SectionHeader.tsx      # Üst Rozet, H2 Başlık, Alt Açıklama
│   │   │   │   └── LeafDecor.tsx          # Dekoratif suluboya yapraklar ve organik arklar
│   │   │   ├── sections/                  # Sayfa Bölüm Bileşenleri
│   │   │   │   ├── home/
│   │   │   │   │   ├── HeroSection.tsx
│   │   │   │   │   ├── BemPreview.tsx
│   │   │   │   │   ├── DailyLifeGrid.tsx
│   │   │   │   │   └── QuickCta.tsx
│   │   │   │   ├── bem/
│   │   │   │   │   ├── BemWheel.tsx       # BEM 6 Boyutlu İnteraktif Gelişim Çarkı
│   │   │   │   │   └── BemCard.tsx        # Boyut Açıklama Kartları
│   │   │   │   ├── beslenme/
│   │   │   │   │   ├── WeeklyMenuTab.tsx  # Pazartesi-Cuma Menü Değiştirme Tab'ı
│   │   │   │   │   └── MealCard.tsx       # Kahvaltı, Öğle, İkindi Kartları
│   │   │   │   ├── etkinlikler/
│   │   │   │   │   └── ActivityCard.tsx   # 9 Atölye Kartı
│   │   │   │   └── forms/
│   │   │   │       ├── ApplicationForm.tsx# Kayıt & Bilgi Talebi Formu
│   │   │   │       ├── ContactForm.tsx    # İletişim Formu
│   │   │   │       └── CareerForm.tsx     # İş Başvuru Formu
│   │   │
│   │   ├── admin/                         # Materio MUI Türkçe Admin Bileşenleri
│   │   │   ├── layout/
│   │   │   │   ├── AdminLayout.tsx        # Materio Kabuğu
│   │   │   │   ├── AdminSidebar.tsx       # Türkçe Menü Ağacı
│   │   │   │   └── AdminNavbar.tsx        # Arama, Bildirimler, Dil (TR), Profil
│   │   │   ├── cms/
│   │   │   │   ├── TextEditorField.tsx    # Zengin Metin & Inline Editör
│   │   │   │   ├── ImageUploader.tsx      # Tekli/Çoklu Resim Yükleyici & Kırpıcı
│   │   │   │   └── DynamicSectionForm.tsx # Sayfa Bölümleri JSON Düzenleyici
│   │   │   └── crm/
│   │   │       ├── LeadKanbanBoard.tsx    # 8 Aşamalı Drag-and-Drop Huni
│   │   │       └── LeadDetailDrawer.tsx   # Başvuru Detayı, Görüşme Notları
│   │   │
│   │   └── portal/                        # Veli Portal Bileşenleri
│   │       ├── StudentSelector.tsx        # Birden fazla çocuğu olan veli için seçim
│   │       ├── PortfolioWheel.tsx         # BEM Öğrenci Gelişim Görseli
│   │       └── DailyFeedCard.tsx          # Günlük Beslenme ve Etkinlik Akışı
│   │
│   ├── lib/                               # Yardımcı Fonksiyonlar ve Servisler
│   │   ├── prisma.ts                      # Prisma Client Singleton
│   │   ├── auth.ts                        # Kimlik doğrulama opsiyonları ve helper'lar
│   │   ├── storage.ts                     # Dosya yükleme, Sharp WebP sıkıştırma
│   │   ├── revalidate.ts                  # On-demand tag ve path revalidation tetikleyici
│   │   ├── crm-service.ts                 # Huni durumu ve loglama mantığı
│   │   └── utils.ts                       # Formatlama, tarih ve sınıf birleştiriciler
│   │
│   ├── types/                             # TypeScript Tip Tanımları
│   │   ├── cms.ts                         # CMS Sayfa, Bölüm, Medya tipleri
│   │   ├── crm.ts                         # CRM Aday, Randevu tipleri
│   │   ├── portal.ts                      # Veli, Öğrenci, Portfolyo tipleri
│   │   └── api.ts                         # Standart API Response kontratları
│   │
│   └── prisma/
│       ├── schema.prisma                  # Tüm veritabanı modelleri
│       └── seed.ts                        # 10 HTML sayfasının birebir Türkçe seed verisi
```

---

## 4. 10 Kurumsal Sayfanın Bileşen ve Bölüm Haritası

| # | Rota | Sayfa Adı | Öncelikli Bölümler & Bileşenler | Dinamik CMS Yönetim Alanları |
|---|------|-----------|----------------------------------|------------------------------|
| 1 | `/` | Anasayfa | `HeroSection` (Karşılama, 2 CTA)<br>`StatsBanner` (Yıl, Sınıf, Yaş, Kadro)<br>`BemPreview` (BEM Tanıtım Rozeti & 6 Boyut Özeti)<br>`DailyLifeGrid` (Eylül'de Bir Gün 3'lü Galeri)<br>`CampusPreview` (Okulumuz Kısa Gezi)<br>`ParentCta` (Okul Ziyareti Planla) | Sloganlar, Alt Metinler, Buton Yazıları/Hedefleri, Sayaç Rakamları, 3 Galeri Resmi, Tanıtım Videosu URL. |
| 2 | `/hakkimizda` | Hakkımızda | `AboutHero` (Tarihçe ve Kurucu Mesajı)<br>`StatsGrid` (12+ Yıl, 4 Sınıf, 3-6 Yaş, Uzman Kadro)<br>`ValuesSection` (Sevgi, İlgi, Özen, Saygı, Güvenli Ortam)<br>`MissionVision` (Misyon, Vizyon, Pedagojik İlkeler) | Başlıklar, Paragraflar, 5 Temel Değer (Başlık, İkon, Açıklama), 4 Sayaç Kartı, Kurucu Fotoğrafı. |
| 3 | `/okulumuz` | Okulumuz & Sanal Tur | `CampusHero` (Mimari Yaklaşım & Güvenlik)<br>`FacilitiesGrid` (4 Ana Alan: Ahşap Sınıflar, Masal Köşesi, Sanat Atölyesi, Doğal Bahçe)<br>`VirtualTourEmbed` (360° Sanal Tur Panoramik Görünüm)<br>`SafetyStandards` (Hijyen, Yangın, Kamera, Çift Kapı Güvenliği) | 4 Atölye/Alan Fotoğrafı ve Detay Metinleri, 360° Tur iframe/Matterport linki, Güvenlik Maddeleri. |
| 4 | `/egitim-modeli/bem` | BEM (Bütünleştirilmiş Eğitim Modeli) | `BemHero` (Özgün Müfredat Rozeti, Başlık)<br>`BemInteractiveWheel` (6 Boyutlu Dönen/Tıklanan Gelişim Çarkı)<br>`BemDimensionsDetail` (Sosyal-Duygusal, Dil, Bilişsel, Sanat, Fiziksel, Değerler)<br>`GainShowcase` (BEM Kazanımları & Fotoğraf) | 6 Boyutun Türkçe Başlığı, İkonu, Rengi, Pedagojik Açıklaması, Yaş Gruplarına Göre Hedefleri, Kazanım Metinleri. |
| 5 | `/egitim-modeli/all-day-english` | All Day English | `EnglishHero` (Gün Boyu Çift Dilli Eğitim)<br>`FeaturesGrid` (4 Sütun: Gün Boyu, Sınıf+İngilizce Öğretmeni, Cambridge Materyalleri, Günlük Konuşma)<br>`MethodologySection` (Doğal Edinme Yöntemi)<br>`QuoteShowcase` (İngilizce Koordinatörü Mesajı ve Video Tanıtımı) | 4 Özellik Başlık ve Maddeleri, Cambridge Müfredat Açıklaması, Koordinatör Fotoğrafı, İntro Video URL. |
| 6 | `/etkinlikler` | Zengin Etkinlik Dünyası | `ActivitiesHero` (Yetenek Keşfi Rozeti)<br>`ActivitiesGrid` (9 Temel Atölye: Piyano, Resim, Jimnastik, Satranç, Fen & Doğa, Drama, Müzik, Kodlama, Değerler)<br>`AgeGroupFilter` (3-4 Yaş, 4-5 Yaş, 5-6 Yaş Filtreleri)<br>`ActivityDetailModal` (Detaylı Atölye Programı) | 9+ Etkinliğin Adı, İkonu, Yaş Grubu, Kapak Görseli, Haftalık Ders Saati, Pedagojik Kazanım Maddeleri. |
| 7 | `/beslenme` | Doğal & Dengeli Beslenme | `NutritionHero` (Sağlıklı Çocuklar Rozeti)<br>`PrinciplesGrid` (Taze & Doğal, Diyetisyen Kontrolü, Günlük Pişirim, Dengeli Menü)<br>`WeeklyMenuTabs` (Pazartesi-Cuma Tab'ları; Kahvaltı, Öğle, İkindi Kartları)<br>`DietitianNotes` (Alerji ve Özel Diyet Bildirim Alanı) | Menü Haftası Tarih Aralığı, 5 Gün x 3 Öğün Yemek Listesi, Kalori/Besin Değerleri, Diyetisyen Adı ve Uyarı Notları. |
| 8 | `/velilerimiz-icin` | Velilerimiz İçin | `ParentsHero` (Okul & Aile İş Birliği Rozeti)<br>`ServicesGrid` (Veli Portalı, Duyurular, Takvim, Portfolyo, Yemek, Öğretmen İletişimi, Randevu, Belgeler)<br>`GuidanceSection` (PDR & Aile Danışmanlığı Birimi Tavsiyeleri)<br>`PortalLoginCta` (Veli Portalına Hızlı Geçiş Kartı) | 8 Hizmet Kartının Metin ve İkonları, Rehberlik Birimi Tavsiye Metinleri, İndirilebilir Veli Formları (PDF). |
| 9 | `/kayit-ve-basvuru` | Kayıt & Başvuru | `RegistrationHero` (2024-2025 Dönemi Rozeti)<br>`ProcessTimeline` (4 Aşamalı Süreç: Bilgi Talebi -> Okul Gezisi -> Tanışma Görüşmesi -> Kesin Kayıt)<br>`ApplicationForm` (Veli Adı, Tel, E-posta, Çocuk Doğum Yılı, Ziyaret Tarihi Tercihi)<br>`FaqAccordion` (Kayıtla İlgili Sık Sorulan Sorular) | Aşama Açıklamaları, Kontenjan Durum Bildirisi, SSS Soru-Cevap Listesi, Form Bildirim E-postaları ve Başarı Metni. |
| 10 | `/iletisim` | İletişim & Ulaşım | `ContactHero` (Bizimle İletişime Geçin)<br>`InfoCards` (Telefon, WhatsApp, E-posta, Adres, Ziyaret Saatleri)<br>`DirectContactForm` (Ad Soyad, Telefon, E-posta, Mesaj)<br>`InteractiveMap` (Google Maps / OpenStreetMap Entegrasyonu) | Telefon, WhatsApp, E-posta, Açık Adres, Çalışma Saatleri, Harita Koordinatları/Embed URL, Sosyal Medya Linkleri. |

---

## 5. Materio MUI Türkçe Yönetim Paneli (`/admin`) Mimarisi

Admin paneli, dünyaca kabul görmüş, yüksek bileşen kalitesine sahip açık kaynak **Materio MUI Next.js Free Template** (`https://github.com/themeselection/materio-mui-nextjs-admin-template-free.git`) altyapısı üzerine inşa edilmiştir.

### Materio Entegrasyon Prensipleri
1. **%100 Türkçeleştirme:**
   - Materio'nun tüm i18n veya statik İngilizce etiketleri (Navigation, Dashboard, Forms, Tables, Alerts, Auth) Türkçe'ye çevrilmiştir.
   - Tarihler Türkçe biçimlendirilir (`tr-TR`, `21 Ekim 2026`).
2. **Warm Horizon Uyumlu Tema Düzenlemesi:**
   - Materio'nun birincil rengi (Primary), Eylül Çocuk Akademisi kurumsal mavisi (`#1E56A0` / `#003E80`) ile eşleştirilmiştir.
   - Vurgu rengi (Accent/Secondary), tasarım sisteminin sıcak amber tonu (`#E67E22`) olarak ayarlanmıştır.
   - Arka plan açık temada `#FBF9F5` (Warm Ivory) bazında göz yormayan doğal yüzeylere sahiptir.
3. **Modüler Menü Hiyerarşisi (`AdminSidebar`):**
   - **Gösterge Paneli:** Genel Bakış, Günlük Kayıtlar, İstatistikler.
   - **Eylül CMS (%100 Dinamik):** 
     - *Sayfa Yönetimi (10 Sayfa)*
     - *Medya Galerisi & Dosya Yükleyici*
     - *BEM Gelişim Modeli Çarkı*
     - *Atölyeler & Etkinlikler*
     - *Haftalık Beslenme Menüsü*
   - **Veli CRM & Başvuru Hunisi:**
     - *8 Aşamalı Kanban Masası*
     - *Ziyaret & Görüşme Takvimi*
     - *Reklam & UTM Kaynakları*
   - **Mobil Okul & Veli Portalı:**
     - *Öğrenci & Veli Hesapları*
     - *Duyuru Yayınlama*
     - *BEM Portfolyo Değerlendirme*
     - *Günlük Yoklama & Durum*
   - **İnsan Kaynakları:** Açık Pozisyonlar, Başvurular & CV Listesi.
   - **Sosyal Medya:** Instagram / Facebook / YouTube Yayın Planlama.
   - **Sistem & Güvenlik:** Rol & Yetkilendirme (RBAC), Denetim İzleri (Audit Log), KVKK Kayıtları.

---

## 6. Güvenlik, KVKK ve Veri İzolasyonu Mimarisi

1. **Çocuk Verisi İzolasyonu (Strict Privacy):**
   - Çocukların fotoğrafları, soyadları, yaş ve sağlık bilgileri kamusal alanlarda yalnızca velisinin açık rızası (`consent_media_share: true`) olan örneklerde yayınlanabilir.
   - Veli Portalında veliler yalnızca kendi çocuklarının kayıtlarına erişebilir (Tenant/Veli ID IDOR koruması).
2. **RBAC (Rol Tabanlı Erişim Kontrolü):**
   - `SUPER_ADMIN`: Tüm sisteme, silme işlemlerine ve kullanıcı atamalarına tam yetkili.
   - `DIRECTOR` (Müdür/Yönetici): CMS, CRM, Veli Portali ve İK yönetim yetkisi.
   - `TEACHER` (Öğretmen): Yalnızca kendi sınıfındaki öğrencilerin duyuru, yoklama ve BEM portfolyosuna not girme yetkisi.
   - `DIETITIAN` (Diyetisyen): Yalnızca beslenme menüsü ve alerji notlarını düzenleme yetkisi.
   - `PARENT` (Veli): Yalnızca kendi çocuğunun verilerini görme yetkisi.
3. **KVKK Uyumlu Form Mimarisi:**
   - Aday veli formlarında "Aydınlatma Metni'ni okudum" onay kutusu zorunlu, "Ticari Elektronik İleti ve Tanıtım Açık Rızası" kutusu isteğe bağlı ve ayrık tutulur.
   - Tüm onaylar IP adresi, zaman damgası ve onay metni sürümü ile `ConsentLog` tablosunda saklanır.
4. **Dosya Yükleme Güvenliği:**
   - Yüklenen dosyalar yalnızca izin verilen MIME tiplerinde (`image/jpeg`, `image/png`, `image/webp`, `application/pdf`) kabul edilir.
   - Resimler sunucu tarafında `Sharp` ile işlenerek EXIF/GPS verileri temizlenir, optimize WebP formatına dönüştürülür.

---

## 7. Performans, SEO ve Core Web Vitals Stratejisi

- **LCP < 2.5s Hedefi:** Kamusal sayfalardaki Hero görselleri `next/image` ile `priority={true}` olarak yüklenir, WebP formatında sunulur.
- **On-Demand ISR (Incremental Static Regeneration):**
  - Kamusal 10 sayfa statik olarak ön-derlenir (SSG/ISR).
  - Admin panelinden herhangi bir metin veya görsel değiştirildiğinde `/api/revalidate?tag=cms-pages` ve `/api/revalidate?path=/` üzerinden ilişkili sayfalar saniyeler içinde arka planda güncellenir. Kullanıcılara daima sıfır gecikmeli statik sayfa hızı sunulur.
- **SEO & Yapısal Veri:**
  - Her sayfa için dinamik `generateMetadata` fonksiyonu başlık, meta açıklama, canonical URL ve OpenGraph görsellerini CMS'ten çeker.
  - JSON-LD yapısal veri işaretlemesi (`EducationalOrganization`, `Kindergarten`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`) tüm sayfalara entegre edilir.
