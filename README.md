# Eylül Çocuk Akademisi — Kurumsal Web, Dinamik CMS & Yönetim Paneli

**Proje Adı:** Eylül Çocuk Akademisi Anaokulu  
**Çalışma Alanı (CWD):** `D:\anaokulu`  
**Yazılım Mimarisi:** Next.js 15+ (App Router, TypeScript), Tailwind CSS, Materio MUI Admin  
**Tasarım Sistemi:** Warm Horizon Academy (`D:\anaokulu\warm_horizon_academy\DESIGN.md`)  
**Dağıtım Sunucusu:** `142.93.104.78:8098` (Docker Standalone & Nginx Reverse Proxy)

---

## 📖 Genel Bakış

Eylül Çocuk Akademisi; Bütünleştirilmiş Eğitim Modeli (BEM) ve çift dilli (All Day English) eğitim yaklaşımını benimseyen anaokulu için geliştirilmiş, yüksek performanslı, mobil öncelikli ve kurumsal kimliğe %100 sadık modern web platformudur.

Proje; okul öncesi eğitim standartlarına uygun **10 kurumsal sayfa**, açık kaynak **Materio MUI** mimarisiyle inşa edilmiş **%100 Türkçe Yönetim Paneli (`/admin`)**, kod bilgisi gerektirmeyen **%100 Dinamik CMS ve Medya Kütüphanesi**, 8 aşamalı **Veli Kayıt & Randevu CRM'i** ve **V5 Mobil Okul Veli Portalı** modüllerini bünyesinde barındırır.

---

## 🗺️ 10 Kurumsal Sayfa Mimarisi

Web sitesi, Next.js App Router yapısında `src/app/(public)` dizini altında gruplanmıştır:

| Sıra | Sayfa Adı | Rota | Açıklama & İşlev |
| :---: | :--- | :--- | :--- |
| **1** | **Anasayfa** | `/` | Hero alanı, "Güvenle Bugüne, Umutla Yarına..." mottosu, günlük rutin, BEM çarkı daveti, Instagram akışı. |
| **2** | **Hakkımızda** | `/hakkimizda` | Vizyon, misyon, kurucu mesajı, 4 temel başarı istatistiği ve pedagojik değerler. |
| **3** | **Okulumuz** | `/okulumuz` | 360° sanal tur gömülü alanı, fiziksel mekanlar (bahçe, atölyeler, uyku odaları) tanıtımı. |
| **4** | **Eğitim Modeli (BEM)** | `/egitim-modeli/bem` | Bütünleştirilmiş Eğitim Modeli 6 gelişim alanı, dairesel interaktif çark ve pedagojik sonuçlar. |
| **5** | **All Day English** | `/egitim-modeli/all-day-english` | Çift dilli (bilingual) erken çocukluk eğitimi, doğal dil edinim ilkeleri ve aktivite galerisi. |
| **6** | **Zengin Etkinlik Dünyası** | `/etkinlikler` | 9 ana branş etkinlik kartı (Robotik Kodlama, Bale, Drama, Satranç, Doğa Atölyesi vb.). |
| **7** | **Doğal & Dengeli Beslenme** | `/beslenme` | Beslenme ilkeleri, Pazartesi-Cuma 3 öğün (Kahvaltı, Öğle, İkindi) yemek menüsü ve diyetisyen notu. |
| **8** | **Velilerimiz İçin** | `/velilerimiz-icin` | Veli kılavuzu, servis/güvenlik kuralları, Mobil Okul Veli Portalı tanıtımı ve hızlı destek. |
| **9** | **Kayıt ve Başvuru** | `/kayit-ve-basvuru` | 4 adımlı kayıt süreci, okul ziyareti randevu formu ve Sıkça Sorulan Sorular (SSS). |
| **10** | **İletişim & Konum** | `/iletisim` | Canlı Google Harita, açık adres, telefon/WhatsApp butonları, çalışma saatleri ve form. |

Ek olarak veliler için bağımsız **Mobil Okul Veli Portalı** `/veli-portali` rotasında ve yetkili personel için **Yönetim Paneli** `/admin` rotasında çalışır.

---

## 🛠️ Teknoloji Yığını ve Kütüphaneler

- **Ön Yüz (Frontend):** Next.js 15+ (App Router), React 19, TypeScript 5.x.
- **Stil & Tasarım:** Tailwind CSS v4, Warm Horizon Academy CSS Token'ları (`Nunito Sans`, `Plus Jakarta Sans`, `Comfortaa`).
- **Yönetim Paneli:** Materio MUI Next.js Free Template tabanlı, %100 Türkçe arayüz.
- **Veri Deposu:** `data/cms-store.json` hibrit kalıcı JSON/SQLite veri motoru (sıfır bağımlılık hatası, atomik yazma güvencesi).
- **Görsel İşleme:** Sharp (Next.js yerel WebP/AVIF optimizasyonu).
- **Sunucu & Dağıtım:** Standalone Docker Container (`anaokulu_app`) ve Nginx Reverse Proxy (`anaokulu_web`).

---

## 🎨 Tasarım Sistemi ve Renk Paleti

`D:\anaokulu\warm_horizon_academy\DESIGN.md` rehberliğinde uygulanan kurumsal renk hiyerarşisi:

- **Warm Ivory (`#FEFAF2` / `#FDFBF7`):** Çocuklara ev sıcaklığı veren, göz yormayan zemin rengi.
- **Academic Navy (`#0E4984` / `#1E56A0`):** Kurumsal güven, akademik otorite ve ana başlıklar.
- **Sunbeam Amber (`#E5880B` / `#E67E22`):** Birincil eylem çağrısı (CTA) butonları ve dikkat çekici vurgular.
- **Sprout Green (`#74B127` / `#4E8752`):** Doğa atölyeleri, organik beslenme ve taze filiz yeşili rozetler.
- **Leaf Teal (`#2A7276`):** İkincil pedagojik vurgular ve destekleyici simgeler.

---

## 📁 Dizin ve Dosya Yapısı

```
D:\anaokulu\
├── data/
│   └── cms-store.json            # %100 Dinamik CMS, CRM, Menü ve Medya kalıcı veritabanı
├── docs/                         # Proje dokümantasyonu ve teknik şartnameler
│   ├── MASTER_TEKNIK_SARTNAME_V6.md
│   └── KULLANIM_KILAVUZU.md
├── public/
│   ├── images/                   # Kurumsal logolar, filiz yaprağı ve statik ikonlar
│   └── uploads/                  # Admin panelinden yüklenen dinamik fotoğraflar ve dosyalar
├── src/
│   ├── app/
│   │   ├── (public)/             # 10 Kurumsal web sayfası
│   │   ├── admin/                # Materio MUI Türkçe Yönetim Paneli
│   │   ├── veli-portali/         # Mobil Okul Veli-Öğretmen Portalı
│   │   └── api/                  # REST API ve dosya yükleme rotaları (/api/cms, /api/media vb.)
│   ├── components/               # Tekrar kullanılabilir UI bileşenleri (Navbar, Footer, Kartlar)
│   ├── data/                     # Başlangıç seed verileri ve varsayılan içerikler
│   ├── lib/                      # Veritabanı motoru, depolama servisi ve yardımcı fonksiyonlar
│   └── types/                    # cms.ts veri tipleri ve model sözleşmeleri
├── warm_horizon_academy/         # Orijinal tasarım sistemi spesifikasyonu
├── Dockerfile                    # Node 20 Standalone çok aşamalı üretim imajı
├── docker-compose.yml            # İzole ağ üzerinde Nginx ve Node servis orkestrasyonu
├── nginx.conf                    # OWASP güvenlik başlıkları, Gzip ve önbellek yapılandırması
├── CHANGELOG.md                  # Sürüm değişiklik günlüğü (SemVer)
├── SERVER_INFRA.md               # Sunucu dağıtım, Nginx ve yedekleme kılavuzu
└── README.md                     # Bu doküman
```

---

## 🚀 Kurulum ve Yerel Çalıştırma

### Gereksinimler
- Node.js 20.x veya üzeri
- npm / yarn / pnpm

### 1. Bağımlılıkların Kurulması
```bash
cd D:\anaokulu
npm install
```

### 2. Ortam Değişkenlerinin Hazırlanması
```bash
cp .env.example .env.local
```

`.env.local` dosyasında temel değişkenleri kontrol edin:
```env
PORT=3000
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Geliştirme Sunucusunun Başlatılması
```bash
npm run dev
```
Uygulama hazır olduğunda tarayıcınızdan erişebilirsiniz:
- **Kurumsal Web Sitesi:** `http://localhost:3000`
- **Türkçe Yönetim Paneli:** `http://localhost:3000/admin`
- **Mobil Veli Portalı:** `http://localhost:3000/veli-portali`

### 4. Üretim Derlemesi ve Testi
```bash
npm run build
npm run start
```

---

## 🐳 Docker ile Canlı Dağıtım (142.93.104.78)

Eylül Çocuk Akademisi, sunucuda çalışan diğer servislerden (`8088`, `8092`, `8096`) tamamen izole biçimde **`8098`** portu üzerinden yayınlanır.

```bash
# Sunucuda konteynerleri derleyin ve arka planda başlatın
docker compose up -d --build

# Servis durumlarını kontrol edin
docker compose ps

# Canlı logları izleyin
docker compose logs -f
```

Detaylı sunucu mimarisi, Nginx reverse proxy ayarları ve otomatik günlük yedekleme betikleri için lütfen [`SERVER_INFRA.md`](file:///D:/anaokulu/SERVER_INFRA.md) dosyasını inceleyin.

---

## 👥 Proje Ekibi ve Rol Dağılımı

- **Doğu Bey (`god`):** Baş Orkestratör & Konsey Yöneticisi
- **Aslan Amca (`aslan-amca-mvf09gi7`):** Teknik Lider & Mimari Şartname Sorumlusu
- **Abdülhey (`abd-lhey-mvf0awxj`):** Veritabanı Mimarı (Dinamik CMS Veri Katmanı & Seed)
- **Elif (`elif-mvf0a84x`):** Baş UI/UX Tasarımcısı (10 Sayfa Bileşenleri & Tasarım Sistemi)
- **Polat Alemdar (`polat-alemdar-mvf0brm2`):** Baş Full-Stack Geliştirici (Materio MUI Admin & API'ler)
- **Kara (`kara-mvf0cubf`):** Uygulama Güvenliği (KVKK, Dosya Yükleme & RBAC)
- **Memati (`memati-mvf0cbch`):** QA Test & Doğrulama Mühendisi
- **Seyfo Dayı (`seyfo-day--mvf0eyk1`):** Linux Sistem Yöneticisi & SRE (Docker & Nginx)
- **Kılıç (`k-l--mvf0dudd`):** Git Sürüm Kontrolü & Değişiklik Yönetimi
- **Ömer Baba (`-mer-baba-mvf0fs92`):** Baş Teknik Yazar (Master Şartname, README & Kullanım Kılavuzu)
