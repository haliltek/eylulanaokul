# Eylül Çocuk Akademisi - %100 Dinamik CMS Veri Kontratları ve Uygulama Planı (PLAN.md)
**Sürüm:** 6.0 (Master Veri ve Uygulama Sözleşmesi)  
**Tarih:** 21 Ekim 2026  
**Hazırlayan:** Aslan Amca (Tech Lead & Sistem Analisti - `aslan-amca-mvf09gi7`)  
**Muhataplar:** 
- Abdülhey (`abd-lhey-mvf0awxj` - Veritabanı ve Seed Veri Katmanı)
- Polat Alemdar (`polat-alemdar-mvf0brm2` - Materio MUI Türkçe Admin ve API Katmanı)
- Elif (`elif-mvf0a84x` - Next.js Kamusal Arayüz ve Tasarım Sistemi)
- Kara (`kara-mvf0cubf` - Güvenlik ve KVKK Denetimi)

---

## 1. Mimari İlke: %100 Dinamik İçerik Sözleşmesi

Web sitesindeki hiçbir metin hardcoded bırakılamaz. Bütün sayfalar, alt bölümler, sayaçlar, buton yönlendirmeleri, çark dilimleri, etkinlik kartları, menüler ve medya görselleri veritabanında saklanır ve `/admin` panelinden CRUD işlemlerine tabidir.

---

## 2. Prisma Şema Kontratı (`prisma/schema.prisma`)

Abdülhey bu veri modelini SQLite ve PostgreSQL uyumlu olacak şekilde birebir uygulayacaktır:

```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// ---------------------------------------------------------
// 1. KULLANICI VE YETKİLENDİRME (RBAC)
// ---------------------------------------------------------

enum Role {
  SUPER_ADMIN
  DIRECTOR
  TEACHER
  DIETITIAN
  PARENT
}

model User {
  id            String       @id @default(cuid())
  email         String       @unique
  phone         String?      @unique
  passwordHash  String
  name          String
  role          Role         @default(PARENT)
  avatarUrl     String?
  isActive      Boolean      @default(true)
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt

  students      Student[]    @relation("ParentStudents")
  teacherClass  ClassRoom?   @relation("ClassTeacher")
  auditLogs     AuditLog[]
}

// ---------------------------------------------------------
// 2. DİNAMİK CMS VE SAYFA İÇERİKLERİ
// ---------------------------------------------------------

model Page {
  id              String         @id @default(cuid())
  slug            String         @unique // 'anasayfa', 'hakkimizda', 'okulumuz', 'bem', 'english', 'etkinlikler', 'beslenme', 'velilerimiz-icin', 'kayit', 'iletisim'
  title           String         // Sayfa Başlığı
  metaDescription String?        // SEO Açıklaması
  metaKeywords    String?        // SEO Anahtar Kelimeleri
  ogImageUrl      String?        // Paylaşım Görseli
  isPublished     Boolean        @default(true)
  updatedAt       DateTime       @updatedAt

  sections        PageSection[]
}

model PageSection {
  id          String         @id @default(cuid())
  pageId      String
  page        Page           @relation(fields: [pageId], references: [id], onDelete: Cascade)
  sectionKey  String         // örn: 'hero', 'stats', 'values', 'facilities', 'features'
  title       String?        // Bölüm Başlığı
  subtitle    String?        // Üst rozet veya Alt başlık
  content     String?        // Zengin Metin veya Açıklama (Markdown/HTML)
  order       Int            @default(0)
  isActive    Boolean        @default(true)

  fields      SectionField[]
  images      SectionImage[]

  @@unique([pageId, sectionKey])
}

model SectionField {
  id          String       @id @default(cuid())
  sectionId   String
  section     PageSection  @relation(fields: [sectionId], references: [id], onDelete: Cascade)
  fieldKey    String       // örn: 'stat_1_value', 'cta_button_text', 'cta_button_link'
  label       String       // Admin arayüzünde görünen Türkçe etiket
  value       String       // Değer (metin, sayı, renk kodu, ikon adı)
  fieldType   String       @default("text") // 'text', 'textarea', 'number', 'color', 'icon', 'url'
  order       Int          @default(0)

  @@unique([sectionId, fieldKey])
}

model SectionImage {
  id          String       @id @default(cuid())
  sectionId   String
  section     PageSection  @relation(fields: [sectionId], references: [id], onDelete: Cascade)
  imageUrl    String       // /uploads/xyz.webp
  altText     String?      // SEO ve Erişilebilirlik Alt Metni
  caption     String?      // Resim altı başlığı/açıklaması
  order       Int          @default(0)
  isFeatured  Boolean      @default(false)
}

// ---------------------------------------------------------
// 3. EYLÜL MEDYA YÖNETİCİSİ (ASSET LIBRARY)
// ---------------------------------------------------------

model MediaAsset {
  id          String       @id @default(cuid())
  fileName    String
  originalName String
  mimeType    String
  fileSize    Int
  width       Int?
  height      Int?
  url         String       @unique
  folder      String       @default("general") // 'hero', 'activities', 'campus', 'food', 'team'
  altText     String?
  uploadedBy  String?
  createdAt   DateTime     @default(now())
}

// ---------------------------------------------------------
// 4. BEM (BÜTÜNLEŞTİRİLMİŞ EĞİTİM MODELİ) ÇARKI
// ---------------------------------------------------------

model BemDimension {
  id            String     @id @default(cuid())
  dimensionKey  String     @unique // 'social_emotional', 'language', 'cognitive', 'art_creativity', 'physical', 'values'
  title         String     // örn: 'Sosyal Duygusal Gelişim'
  iconName      String     // 'favorite', 'forum', 'psychology', 'palette', 'sports_handball', 'volunteer_activism'
  colorCode     String     // '#2A6231', '#1E56A0', '#FC8F34' vs.
  shortDesc     String     // Kısa slogan/açıklama
  fullDesc      String     // Detaylı pedagojik açıklama
  outcomes      String     // JSON Array: ["Öz farkındalık kazanma", "Empati kurma"]
  order         Int        @default(0)
  isActive      Boolean    @default(true)
}

// ---------------------------------------------------------
// 5. ATÖLYELER VE ETKİNLİKLER
// ---------------------------------------------------------

model Activity {
  id            String     @id @default(cuid())
  slug          String     @unique // 'piyano', 'resim', 'jimnastik', 'satranc', 'fen-doga', 'drama', 'muzik', 'kodlama', 'degerler'
  title         String     // örn: 'Piyano & Orff Atölyesi'
  iconName      String?    // 'piano', 'palette', 'fitness_center'
  category      String     // 'Sanat', 'Spor', 'Bilişsel', 'Bilim'
  targetAge     String     // '3-6 Yaş'
  weeklyHours   Int        @default(2)
  summary       String     // Kısa kart açıklaması
  description   String     // Detaylı içerik
  imageUrl      String     // Kapak fotoğrafı
  galleryUrls   String?    // JSON Array
  order         Int        @default(0)
  isActive      Boolean    @default(true)
}

// ---------------------------------------------------------
// 6. BESLENME VE HAFTALIK MENÜ SİSTEMİ
// ---------------------------------------------------------

model WeeklyMenu {
  id            String     @id @default(cuid())
  weekStartDate DateTime   // Haftanın Pazartesi günü
  weekEndDate   DateTime   // Haftanın Cuma günü
  dietitianName String     // örn: 'Dyt. Selin Yılmaz'
  notes         String?    // Alerji ve mevsimsel beslenme notları
  isCurrent     Boolean    @default(false)
  createdAt     DateTime   @default(now())

  days          DailyMeal[]
}

model DailyMeal {
  id            String      @id @default(cuid())
  weeklyMenuId  String
  weeklyMenu    WeeklyMenu  @relation(fields: [weeklyMenuId], references: [id], onDelete: Cascade)
  dayOfWeek     String      // 'pazartesi', 'sali', 'carsamba', 'persembe', 'cuma'
  breakfast     String      // Kahvaltı maddeleri
  lunch         String      // Öğle yemeği maddeleri
  snack         String      // İkindi kahvaltısı maddeleri
  calorieTotal  Int?        // Tahmini kalori
  allergens     String?     // JSON Array: ["Gluten", "Laktoz", "Yumurta"]

  @@unique([weeklyMenuId, dayOfWeek])
}

// ---------------------------------------------------------
// 7. VELİ CRM VE 8 AŞAMALI KAYIT HUNİSİ
// ---------------------------------------------------------

enum LeadStage {
  YENI                    // Web sitesinden yeni düştü
  ILETISIM_BEKLIYOR       // Çağrı listesinde
  GORULDU                 // İletişim kuruldu
  NITELIKLI               // Şartlar ve yaş grubu uygun
  RANDEVO                 // Okul ziyareti planlandı
  ZIYARET_TAMAMLANDI      // Okulu gezdi
  ON_KAYIT                // Ön kayıt evrakı alındı
  KESIN_KAYIT             // Kayıt tamamlandı ve sınıf atandı
  KAYIP_VAZGECTI          // Olumsuz sonuçlandı
}

model Lead {
  id              String      @id @default(cuid())
  parentName      String
  phone           String
  email           String?
  childName       String?
  childBirthYear  Int?
  notes           String?
  source          String      @default("web_form") // 'web_form', 'instagram', 'google_ads', 'tavsiye'
  utmSource       String?
  utmMedium       String?
  utmCampaign     String?
  stage           LeadStage   @default(YENI)
  appointmentDate DateTime?
  assignedTo      String?
  kvkkConsent     Boolean     @default(false)
  marketingConsent Boolean    @default(false)
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt

  activities      LeadActivity[]
}

model LeadActivity {
  id          String     @id @default(cuid())
  leadId      String
  lead        Lead       @relation(fields: [leadId], references: [id], onDelete: Cascade)
  performedBy String     // İşlemi yapan admin/danışman adı
  actionType  String     // 'STAGE_CHANGE', 'NOTE_ADDED', 'CALL_MADE', 'APPOINTMENT_SET'
  description String
  createdAt   DateTime   @default(now())
}

// ---------------------------------------------------------
// 8. MOBİL OKUL & VELİ PORTALI (ÖĞRENCİ VE SINIF)
// ---------------------------------------------------------

model ClassRoom {
  id          String     @id @default(cuid())
  name        String     // 'Papatyalar Sınıfı (4 Yaş)'
  ageGroup    String     // '4-5 Yaş'
  capacity    Int        @default(16)
  teacherId   String?    @unique
  teacher     User?      @relation("ClassTeacher", fields: [teacherId], references: [id])
  students    Student[]
}

model Student {
  id              String        @id @default(cuid())
  firstName       String
  lastName        String
  tckn            String?       @unique
  birthDate       DateTime
  bloodType       String?
  allergies       String?
  classRoomId     String?
  classRoom       ClassRoom?    @relation(fields: [classRoomId], references: [id])
  parentId        String
  parent          User          @relation("ParentStudents", fields: [parentId], references: [id])
  photoUrl        String?
  consentPhoto    Boolean       @default(false) // Sosyal medya/kamusal foto paylaşım onayı
  createdAt       DateTime      @default(now())

  portfolios      StudentPortfolio[]
  attendances     Attendance[]
}

model StudentPortfolio {
  id              String        @id @default(cuid())
  studentId       String
  student         Student       @relation(fields: [studentId], references: [id], onDelete: Cascade)
  periodName      String        // '2026 Güz Dönemi'
  dimensionKey    String        // BEM boyutu
  score           Int           // 1 - 5 arası gelişim seviyesi
  teacherNotes    String        // Öğretmen pedagojik gözlem notu
  mediaUrls       String?       // JSON Array: Resim/etkinlik kanıtları
  createdAt       DateTime      @default(now())
}

model Attendance {
  id          String      @id @default(cuid())
  studentId   String
  student     Student     @relation(fields: [studentId], references: [id], onDelete: Cascade)
  date        DateTime    // Yoklama tarihi
  status      String      // 'PRESENT', 'ABSENT', 'EXCUSED'
  note        String?
}

// ---------------------------------------------------------
// 9. İNSAN KAYNAKLARI (İK) VE CV HAVUZU
// ---------------------------------------------------------

model JobOpening {
  id          String       @id @default(cuid())
  title       String       // 'Okul Öncesi Öğretmeni'
  department  String       // 'Eğitim Kadrosu'
  type        String       // 'Tam Zamanlı'
  description String
  requirements String      // Aranan Nitelikler
  isActive    Boolean      @default(true)
  createdAt   DateTime     @default(now())

  applicants  JobApplicant[]
}

model JobApplicant {
  id            String      @id @default(cuid())
  jobOpeningId  String
  jobOpening    JobOpening  @relation(fields: [jobOpeningId], references: [id], onDelete: Cascade)
  fullName      String
  phone         String
  email         String
  experience    String?
  coverLetter   String?
  cvFileUrl     String      // Yüklenen PDF dosyasının yolu
  status        String      @default("NEW") // 'NEW', 'REVIEWED', 'INVITED', 'REJECTED'
  createdAt     DateTime    @default(now())
}

// ---------------------------------------------------------
// 10. SİSTEM AYARLARI VE DENETİM İZLERİ (AUDIT LOG)
// ---------------------------------------------------------

model SiteSetting {
  key         String     @id
  value       String
  category    String     @default("general") // 'contact', 'social', 'seo', 'brand'
  description String?
}

model AuditLog {
  id          String     @id @default(cuid())
  userId      String?
  user        User?      @relation(fields: [userId], references: [id], onDelete: SetNull)
  action      String     // 'UPDATE_PAGE', 'DELETE_MEDIA', 'CREATE_LEAD'
  entity      String     // 'Page', 'WeeklyMenu', 'Lead'
  entityId    String?
  details     String?    // JSON string veya açıklama
  ipAddress   String?
  createdAt   DateTime   @default(now())
}
```

---

## 3. REST API Uç Noktaları ve Veri Tipleri (API Contracts)

Polat Alemdar (`polat-alemdar-mvf0brm2`) ve Elif (`elif-mvf0a84x`) bu API kontratlarına tam riayet edecektir:

### A. Kamusal & CMS API'leri

#### `GET /api/cms/pages/:slug`
Belirtilen sayfanın tüm dinamik bölümlerini, alanlarını ve resimlerini döner.
- **Parametre:** `slug` (string, örn: `anasayfa`, `beslenme`, `okulumuz`)
- **Başarılı Yanıt (200 OK):**
```json
{
  "success": true,
  "data": {
    "slug": "anasayfa",
    "title": "Eylül Çocuk Akademisi - Anaokulu & Erken Çocukluk Merkezi",
    "metaDescription": "Eylül Çocuk Akademisi Bütünleştirilmiş Eğitim Modeli...",
    "sections": {
      "hero": {
        "title": "Güvenle Yarınlara...",
        "subtitle": "Eylül Çocuk Akademisi",
        "description": "Her çocuğun kendi hızında ve biricik yetenekleriyle parladığı sıcacık bir yuva.",
        "fields": {
          "primary_cta_text": "Okul Ziyareti Planla",
          "primary_cta_link": "/kayit-ve-basvuru",
          "secondary_cta_text": "Okulumuzu Keşfedin",
          "secondary_cta_link": "/okulumuz"
        },
        "images": [
          { "url": "/uploads/hero_main.webp", "alt": "Eylül Anaokulu Bahçede Oyun" }
        ]
      },
      "stats": {
        "fields": {
          "stat_1_val": "12+",
          "stat_1_label": "Yıllık Deneyim",
          "stat_2_val": "4",
          "stat_2_label": "Geniş Ahşap Sınıf",
          "stat_3_val": "3-6",
          "stat_3_label": "Yaş Grubu",
          "stat_4_val": "Uzman",
          "stat_4_label": "Pedagojik Kadro"
        }
      }
    }
  }
}
```

#### `PUT /api/cms/pages/:slug` (Admin Yetkisi Gerekir)
Sayfadaki metinleri veya resim referanslarını günceller. Başarılı güncellemede otomatik olarak `revalidatePath(pageUrl)` tetikler.
- **İstek Gövdesi:**
```json
{
  "sections": [
    {
      "sectionKey": "hero",
      "title": "Güvenle Yarınlara...",
      "subtitle": "Eylül Çocuk Akademisi",
      "fields": {
        "primary_cta_text": "Hemen Bilgi Al"
      }
    }
  ]
}
```

#### `GET /api/cms/menu/current`
Haftanın aktif beslenme menüsünü döner.
```json
{
  "success": true,
  "data": {
    "weekRange": "20 - 24 Ekim 2026",
    "dietitian": "Dyt. Selin Yılmaz",
    "notes": "Alerji ve özel beslenme ihtiyaçları için bireysel planlama yapılır.",
    "days": {
      "pazartesi": {
        "breakfast": "Zeytin, peynir, domates, salatalık, yumurta, tam tahıl ekmeği",
        "lunch": "Sebze çorbası, zeytinyağlı taze fasulye & bulgur pilavı, ev yapımı yoğurt, mevsim meyvesi",
        "snack": "Günlük ılık süt, taze elma dilimleri, yulaflı fındıklı kurabiye"
      },
      "sali": { ... },
      "carsamba": { ... },
      "persembe": { ... },
      "cuma": { ... }
    }
  }
}
```

#### `POST /api/crm/leads`
Kamusal sitedeki formlardan aday veli kaydı oluşturur.
- **İstek:**
```json
{
  "parentName": "Ayşe Kaya",
  "phone": "05321112233",
  "email": "ayse@example.com",
  "childBirthYear": 2021,
  "notes": "4 yaş sınıfı için bilgi almak istiyorum.",
  "kvkkConsent": true,
  "marketingConsent": true,
  "source": "kayit_sayfasi"
}
```

#### `POST /api/cms/media/upload` (Admin Yetkisi Gerekir)
Tekli veya çoklu görsel yükleme. Dosyalar Sharp ile sıkıştırılır, WebP'ye dönüştürülür ve `/public/uploads/` dizinine kaydedilir.
- **Yanıt:**
```json
{
  "success": true,
  "media": {
    "id": "med_12345",
    "url": "/uploads/etkinlik_piyano_a8b9.webp",
    "width": 1200,
    "height": 800,
    "fileSize": 84210
  }
}
```

---

## 4. Ekip Görev Dağılımı ve Entegrasyon İş Akışı

### 1. Abdülhey (`abd-lhey-mvf0awxj`) — Veri Katmanı:
1. `D:\anaokulu\prisma\schema.prisma` dosyasını oluşturup yukarıdaki şemayı eksiksiz uygulayacak.
2. `D:\anaokulu\prisma\seed.ts` dosyasıyla mevcut 10 HTML sayfasındaki tüm metinleri, menüleri, BEM çarkını ve etkinlikleri Türkçe seed verisi olarak veritabanına aktaracak (`D:\anaokulu\DATABASE.md`).

### 2. Polat Alemdar (`polat-alemdar-mvf0brm2`) — Admin & API Katmanı:
1. Materio MUI Next.js Free Template tabanını `D:\anaokulu\src\app\(admin)` altında %100 Türkçe olarak inşa edecek.
2. Tüm CRUD API uç noktalarını (`/api/cms/*`, `/api/crm/*`, `/api/portal/*`) Zod doğrulaması ile yazacak.
3. 10 sayfanın anlık metin ve görsel düzenleyicisini (Text Field & Dropzone) yönetim paneline bağlayacak (`D:\anaokulu\PROGRESS.md`).

### 3. Elif (`elif-mvf0a84x`) — Ön Yüz ve Bileşen Katmanı:
1. Mevcut 10 HTML dosyasını Warm Horizon Academy tasarım sistemine (`D:\anaokulu\warm_horizon_academy\DESIGN.md`) sadık kalarak Next.js Server Components mimarisine dönüştürecek.
2. Sayfalardaki tüm metin ve görselleri statik yazmak yerine `/api/cms/pages/:slug` servisinden çekerek dinamik render edecek (`D:\anaokulu\DESIGN.md`).

### 4. Kara (`kara-mvf0cubf`) — Güvenlik & KVKK:
1. Veli Portalı tenant izolasyonunu ve IDOR açıklarını denetleyecek.
2. Medya yükleme açıklarını ve çocuk verisi gizliliğini doğrulayacak (`D:\anaokulu\SECURITY.md`).

### 5. Aslan Amca (`aslan-amca-mvf09gi7` - Ben):
1. Mimari tutarlılığı, API ve şema sözleşmelerini denetlemek, PR ve kod incelemelerini yönetmek.
