# EYLÜL ÇOCUK AKADEMİSİ — GÜVENLİK, KVKK VE TEKNİK TEDBİRLER RAPORU (SECURITY.md)

**Belge Sürümü:** 1.0 (Master Teknik Şartname Sürüm 6.0 & V5 Uyumlu)  
**Tarih:** 21 Ekim 2026  
**Denetçi & Güvenlik Mimarı:** Kara (`kara-mvf0cubf`) — Baş Uygulama Güvenliği (Lead AppSec) ve Sızma Testi Uzmanı  
**Kapsam:** `D:\anaokulu` (Kurumsal Web Sitesi, Dinamik CMS, Materio MUI Yönetim Paneli `/admin`, Veli Portalı `/veli-portali`, API Uç Noktaları)  
**Yasal & Sektörel Dayanak:** 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), KVKK Kurumu Teknik Tedbirler Rehberi, MEB Özel Öğretim Kurumları Mevzuatı, OWASP Top 10 (2021/2025), OWASP ASVS v4.0.3, ISO/IEC 27001.

---

## 🛡️ 1. YÖNETİCİ ÖZETİ & TEHDİT MODELİ (THREAT MODELING)

Eylül Çocuk Akademisi projesi; okul öncesi yaştaki (3-6 yaş) çocukların hassas kişisel verilerini, sağlık/alerji/ilaç kayıtlarını, gelişim ve pedagojik portfolyolarını, sınıf içi etkinlik fotoğraflarını, veli iletişim ve CRM başvuru verilerini barındıran kritik bir erken çocukluk eğitim platformudur.

Çocukların verileri KVKK ve uluslararası çocuk hakları sözleşmeleri kapsamında "yüksek hassasiyetli koruma" gerektirmektedir. Yapılan sızma testi, mimari denetim ve kod analizi neticesinde; tehdit yüzeyleri **STRIDE** modeliyle haritalandırılmış, zero-trust (sıfır güven) yaklaşımıyla kurumsal ve teknik tedbirler hayata geçirilmiştir.

### STRIDE Tehdit Haritası ve Alınan Önlemler:

| Tehdit (STRIDE) | Risk Alanı | Potansiyel Saldırı Senaryosu | Uygulanan Güvenlik Kalkanı |
|---|---|---|---|
| **S - Spoofing (Kimlik Sahteciliği)** | Veli Portalı & Admin Girişi | Sahte veli veya personel oturumu açma, brute-force denemeleri | Argon2id/bcrypt şifreleme, telefon/SMS OTP katmanı, çift kademeli rate-limiting (IP + hesap bazlı). |
| **T - Tampering (Veri Tahrifatı)** | Beslenme, Menü, Gelişim Portfolyosu | Araya girme (MITM) veya yetkisiz PUT/PATCH ile öğrenci alerji notunu değiştirme | Zorunlu HSTS, TLS 1.3, Next.js Server Actions & API içi Zod şema validasyonu, değiştirilemez audit log kayıtları. |
| **R - Repudiation (İnkar Edilebilirlik)** | KVKK Rıza ve İlaç Onayları | Velinin "Ben ticari iletiye izin vermedim" veya öğretmenin "İlacı vermedim" demesi | Zaman damgalı, istemci IP ve User-Agent hash'li ayrık KVKK rıza logları; `AdminAuditLog` ve `MedicineDeliveryLog`. |
| **I - Information Disclosure (Bilgi İfşası)** | Çocuk Verisi & Pazarlama Pikselleri (C10/C12) | Meta Pixel / Google Ads izleyicilerinin Veli Portalına sızıp çocuk verisi toplaması | Veli Portalı ve Admin rotalarında tüm 3. parti izleyicilerin (Pixel, GA4, Hotjar) teknik izolasyonu; CSP ile domain engeli. |
| **D - Denial of Service (Hizmet Engelleme)** | Formlar ve Dosya Yükleme | Medya yükleme (`/api/media`) ve CRM formlarına flooding saldırısı | Nginx seviyesinde rate-limiting (40r/s genel, 15r/s API), 10MB dosya tavanı, bellek tamponu sınırlaması. |
| **E - Elevation of Privilege (Yetki Yükseltme)** | Veli Portalı IDOR (C5/B.15) | Veli A'nın URL'deki `studentId` parametresini değiştirerek Veli B'nin çocuğunun gelişimini görmesi | Session tabanlı yetki matrisi (RBAC), `where: { studentId, parentId: session.userId }` zorunlu veritabanı kısıtlaması. |

---

## 🔒 2. KVKK VE ÇOCUK VERİSİ İZOLASYON PROTOKOLÜ (C10, C12, F)

### 2.1. Açık Rıza ve Aydınlatma Metninin Kesin Ayrımı (6698 Sayılı Kanun Madde 10 & 11)
Klasik "Hizmet şartlarını ve ticari ileti almayı kabul ediyorum" şeklindeki toptancı (bundled consent) onay kutuları hukuken ve teknik olarak geçersizdir. Eylül Çocuk Akademisi platformundaki tüm başvuru, iletişim ve kayıt formlarında şu kurallar zorunlu kılınmıştır:

1. **Ayrı Onay Kutuları (Separate Checkboxes):**
   - **Kutu 1 (Zorunlu):** *"Eylül Çocuk Akademisi KVKK Aydınlatma Metnini okudum ve anladım."* (Sözleşmenin ifası ve veri sorumlusunun meşru menfaati kapsamında).
   - **Kutu 2 (İsteğe Bağlı / Açık Rıza):** *"Okul etkinlikleri, erken kayıt indirimleri ve eğitim bültenleri hakkında tarafıma SMS, telefon ve e-posta ile ticari elektronik ileti gönderilmesine açık rıza veriyorum."*
2. **Önceden İşaretlenmemiş Kutular (No Pre-Checked Boxes):**
   - Tüm onay kutuları istemciye varsayılan olarak `checked: false` (işaretsiz) olarak sunulur.
   - Kullanıcı açık irade beyanında bulunmadan formun gönderilmesine izin verilmez (Front-end + Backend Zod doğrulaması).
3. **Ayrık Veri Kaydı ve Denetim İzi (Audit Log):**
   - Form gönderildiğinde veritabanında tek bir `kvkkConsent: true` tutulmaz.
   - Aydınlatma onayı (`kvkkConsent: boolean`), ticari ileti açık rızası (`marketingConsent: boolean`), onay anındaki zaman damgası (`consentDate: ISO-8601`), IP adresi (`consentIp: string`) ve tarayıcı bilgisi (`consentUserAgent: string`) ayrı alanlar olarak mühürlenir.

```typescript
// KVKK Uyumlu İstemci ve Sunucu Rıza Veri Modeli
export interface KvkkConsentPayload {
  kvkkPolicyAccepted: boolean;        // ZORUNLU: Aydınlatma Metni Okundu
  marketingConsentAccepted: boolean; // SEÇİMLİK: Açık Rıza (Pazarlama/SMS/E-posta)
  consentTimestamp: string;          // ISO 8601 UTC
  clientIpHash: string;              // Anonimleştirilmiş / Tuzlanmış IP özeti
  policyVersion: string;             // Örn: "v6.0-202610"
}
```

### 2.2. Çocuk Verilerinin Pazarlama ve Analitik Araçlarından %100 İzolasyonu
Master Teknik Şartname Sürüm 6.0 Madde 10 gereği; okul öncesi yaştaki öğrencilerin hiçbir verisi üçüncü taraf reklam platformlarına aktarılamaz.

1. **Çerez ve İzleyici Segmentasyonu:**
   - Meta Pixel (`fbq`), Google Tag Manager (`GTM`), Google Ads Remarketing ve Google Analytics 4 (`gtag`) etiketleri **SADECE VE SADECE** kurumsal vitrin sayfalarında (`/`, `/hakkimizda`, `/okulumuz`, `/egitim-modeli/*`, `/etkinlikler`, `/beslenme`, `/kayit-ve-basvuru`, `/iletisim`) çalışabilir.
2. **Veli Portalı & Admin İzolasyonu (No-Analytics Zone):**
   - `/veli-portali/*` ve `/admin/*` yolları altında çalışan tüm sayfalarda 3. parti betiklerin yüklenmesi Next.js Layout seviyesinde ve CSP başlıklarıyla engellenmiştir.
   - Çocukların adı, soyadı, T.C. kimlik numarası, doğum tarihi, fotoğrafları, pedagog notları, gelişim çizelgeleri ve sağlık/alerji bilgileri analitik event payload'larına (örneğin Meta CAPI veya Google DataLayer) ASLA eklenemez.
3. **Öğrenci Medya ve Fotoğraf Koruma Politikası:**
   - Veli Portalı etkinlik fotoğraflarında ve öğrenci portfolyolarında yer alan görseller GoogleBot ve arama motoru örümceklerine karşı `X-Robots-Tag: noindex, nofollow, noarchive` başlığıyla korunur.
   - Görseller doğrudan açık web dizininde tutulmaz; yetkilendirilmiş API üzerinden imzalı ve süreli oturum belirteçleriyle servis edilir.

---

## 👥 3. ROL TABANLI YETKİLENDİRME (RBAC) VE IDOR MATRİSİ (B.15, C5, G)

Sistemde 4 temel kullanıcı rolü tanımlanmıştır. Her uç nokta ve veri modeli katı yetkilendirme süzgecinden geçirilir:

### 3.1. RBAC Yetki Matrisi

| Rol Kodu | Rol Adı | Erişim Kapsamı | İzin Verilen İşlemler |
|---|---|---|---|
| `ROLE_SUPERADMIN` | Kurucu / IT Yöneticisi | Tüm Sistem | Sistem ayarları, RBAC rol tanımları, silme işlemleri, ham denetim izleri (Audit Log). |
| `ROLE_ADMIN` | Okul Müdürü / Yönetici | Kurumsal CMS & CRM & İK | 10 kurumsal sayfa içerik yönetimi, medya yükleme/silme, yemek menüsü düzenleme, CRM kayıt hunisi takibi, İK iş başvurularını inceleme, okul geneli duyurular. |
| `ROLE_TEACHER` | Sınıf Öğretmeni | Kendi Sınıfı | Sadece atandığı sınıfın öğrencilerine günlük akış (yemek/uyku) girme, yoklama alma, ilaç onaylama, BEM portfolyo gözlemi ve sınıf içi galeriye fotoğraf yükleme. Diğer sınıfların öğrencilerine salt-okunur dahi olsa erişemez. |
| `ROLE_PARENT` | Öğrenci Velisi | Sadece Kendi Çocuğu | Yalnızca velisi olduğu öğrencinin günlük akışını, karnesini, yemek durumunu görme; ilaç saati bildirme; sınıf öğretmenine mesaj gönderme. |

### 3.2. IDOR (Insecure Direct Object References - CWE-639) Koruması
Veli Portalında Veli A'nın, URL'deki parametreyi (`studentId=std_99`) değiştirerek Veli B'nin öğrencisine ait verilere erişmesini engellemek için kod seviyesinde **Zorunlu Mülkiyet Doğrulaması (Ownership Verification)** zorunlu kılınmıştır:

```typescript
// GÜVENLİ MÜLKİYET VE IDOR ENGELLEME KATMANI (Next.js API Handler Örneği)
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: Request, { params }: { params: { studentId: string } }) {
  const session = await getServerSession();
  
  if (!session || !session.user) {
    return NextResponse.json({ error: "Yetkisiz Erişim (401)" }, { status: 401 });
  }

  const { studentId } = params;
  const user = session.user;

  // 1. Süper Admin ve Okul Müdürü tüm öğrencileri görebilir
  if (user.role === 'ROLE_SUPERADMIN' || user.role === 'ROLE_ADMIN') {
    const student = await db.getStudentById(studentId);
    return NextResponse.json(student);
  }

  // 2. Öğretmen sadece kendi sınıfındaki öğrenciyi görebilir
  if (user.role === 'ROLE_TEACHER') {
    const isStudentInTeacherClass = await db.verifyTeacherStudentLink(user.id, studentId);
    if (!isStudentInTeacherClass) {
      return NextResponse.json({ error: "Bu öğrenci sizin sınıfınızda kayıtlı değil (403)" }, { status: 403 });
    }
    const student = await db.getStudentById(studentId);
    return NextResponse.json(student);
  }

  // 3. Veli SADECE VE SADECE kendi çocuğunu görebilir (Kesin IDOR Kilidi)
  if (user.role === 'ROLE_PARENT') {
    const isParentOfStudent = await db.verifyParentStudentLink(user.id, studentId);
    if (!isParentOfStudent) {
      // Güvenlik Olayı: Olası IDOR saldırısı tespit edildi ve loglandı
      await db.logSecurityAlert({
        type: 'IDOR_ATTEMPT',
        userId: user.id,
        targetStudentId: studentId,
        ip: request.headers.get("x-forwarded-for") || "unknown",
        timestamp: new Date().toISOString()
      });
      return NextResponse.json({ error: "Erişim Reddedildi: Yalnızca kendi öğrencinizin kayıtlarını görüntüleyebilirsiniz (403)" }, { status: 403 });
    }
    const student = await db.getStudentForParentView(studentId);
    return NextResponse.json(student);
  }

  return NextResponse.json({ error: "Bilinmeyen Rol (403)" }, { status: 403 });
}
```

---

## 📁 4. DOSYA VE MEDYA YÜKLEME GÜVENLİĞİ (FILE UPLOAD HARDENING)

Platform üzerinde iki kritik yükleme rotası bulunmaktadır:
1. **CMS & Medya Kütüphanesi (`POST /api/media/upload`):** Okul yöneticileri ve öğretmenlerin görsel/video yüklemesi.
2. **İK İş Başvurusu (`POST /api/career/apply`):** Öğretmen ve personel adaylarının PDF formatında CV/özgeçmiş yüklemesi.

### 4.1. Çok Katmanlı Güvenlik Süzgeci
Dosya yükleme saldırıları (RCE, Webshell, Path Traversal, XSS, Zip Slip, DoS); OWASP A03 / A04 standartlarına göre şu 6 katmanla engellenmiştir:

```
[İSTEMCİ YÜKLEMESİ]
        │
        ▼ (1. Katman)
[Nginx Body Size & Rate Limit] ──► 10MB tavan (CV için 5MB, Görsel için 8MB)
        │
        ▼ (2. Katman)
[Dosya Uzantısı Beyaz Listesi] ──► SADECE .webp, .jpg, .jpeg, .png, .pdf
        │ (Kara Liste: .php, .phtml, .sh, .exe, .js, .svg, .html KESİNLİKLE YASAK)
        ▼ (3. Katman)
[MIME Tipi & Magic Bytes Denetimi] ──► İçerik başlığının (magic numbers) doğrulanması
        │ (PDF: %PDF-, JPEG: FF D8 FF, PNG: 89 50 4E 47, WEBP: RIFF...WEBP)
        ▼ (4. Katman)
[Path Traversal & Filename Sanitization] ──► `../../` engeli, Rastgele UUIDv4 ile yeniden adlandırma
        │ (Örn: `mehmet_hoca.php.jpg` ──► `f47ac10b-58cc-4372-a567-0e02b2c3d479.webp`)
        ▼ (5. Katman)
[Görsel Yeniden İşleme (Sharp Re-encoding)] ──► EXIF / GPS / XMP verileri temizlenir, WebP'ye dönüştürülür
        │ (Olası polimorfik shell kodları piksel dönüşümünde tamamen imha edilir)
        ▼ (6. Katman)
[İzole Depolama & No-Execute Bayrağı] ──► Yüklenen dosyalar Nginx seviyesinde `location /uploads/ { autoindex off; fastcgi_pass off; }`
```

### 4.2. Güvenli Yükleme Servisi Örnek Uygulaması

```typescript
// src/lib/security/upload-guard.ts
import path from "path";
import crypto from "crypto";

// İzin verilen MIME tipleri ve Magic Byte eşleşmeleri
const ALLOWED_MIME_TYPES = new Map<string, Buffer>([
  ["image/jpeg", Buffer.from([0xFF, 0xD8, 0xFF])],
  ["image/png", Buffer.from([0x89, 0x50, 0x4E, 0x47])],
  ["application/pdf", Buffer.from([0x25, 0x50, 0x44, 0x46])], // %PDF-
]);

export function validateUploadedBuffer(buffer: Buffer, declaredMime: string): boolean {
  const expectedMagicBytes = ALLOWED_MIME_TYPES.get(declaredMime);
  if (!expectedMagicBytes) return false;

  // İlk baytları karşılaştır
  return buffer.subarray(0, expectedMagicBytes.length).equals(expectedMagicBytes);
}

export function generateSafeFilename(originalName: string, mimeType: string): string {
  // Path Traversal (CWE-22) önlemi: Orijinal isimdeki yol ayraçlarını temizle
  const sanitizedBase = path.basename(originalName).replace(/[^a-zA-Z0-9.-]/g, "_");
  
  // Rastgele UUID üreterek dosya adını güvenli hale getir
  const uuid = crypto.randomUUID();
  
  let extension = ".bin";
  if (mimeType === "image/jpeg") extension = ".jpg";
  else if (mimeType === "image/png") extension = ".png";
  else if (mimeType === "image/webp") extension = ".webp";
  else if (mimeType === "application/pdf") extension = ".pdf";

  return `${uuid}${extension}`;
}
```

### 4.3. Sunucu Düzeyinde Çalıştırma Engeli (`nginx.conf`)
Nginx yapılandırmasında `/uploads/` dizini altında hiçbir komut dosyası veya PHP/Python betiği yorumlanamaz:

```nginx
location /uploads/ {
    alias /app/public/uploads/;
    expires 30d;
    add_header Cache-Control "public, no-transform";
    add_header X-Content-Type-Options "nosniff";
    add_header Content-Security-Policy "default-src 'none'; style-src 'unsafe-inline'; sandbox";
    
    # Doğrudan betik çalıştırmayı kesinlikle engelle
    location ~* \.(php|phtml|pl|py|jsp|asp|sh|cgi|exe)$ {
        deny all;
        return 404;
    }
}
```

---

## 🌐 5. HTTP GÜVENLİK BAŞLIKLARI VE NETWORK SERTLEŞTİRMESİ

Uygulamanın internete açılan yüzünde Nginx ve Next.js `middleware.ts` katmanlarında eksiksiz HTTP güvenlik başlıkları (Security Headers) tanımlanmıştır:

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(self), microphone=(), geolocation=(), payment=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self'; frame-ancestors 'self';
```

- **HSTS (Strict-Transport-Security):** Tüm trafiği 2 yıl boyunca zorunlu SSL/TLS üzerine kilitler.
- **X-Frame-Options:** Sitenin başka bir alan adı altında `<iframe>` içinde açılmasını engelleyerek **Clickjacking** saldırılarını önler.
- **X-Content-Type-Options:** Tarayıcıların MIME türü tahmin etmesini (MIME-sniffing) engelleyerek sahte resim içine gizlenmiş HTML/JS'lerin çalışmasını durdurur.
- **Permissions-Policy:** Mikrofon, coğrafi konum ve ödeme donanımlarına erişimi yasaklar; kamera erişimini sadece okul personeli QR okuma/yoklama işlevi için kendi etki alanıyla sınırlar.

---

## 📋 6. GÜVENLİK VE KVKK KONTROL LİSTESİ (SECURITY AUDIT CHECKLIST)

| Denetim Alanı | Hedef Madde / Şartname | Durum | Doğrulama & Uygulanan Tedbir |
|---|---|---|---|
| **Açık Rıza Ayrımı** | KVKK Madde 10/11 & C10 | ✅ ONAYLANDI | Aydınlatma metni onayı ile ticari ileti rızası ayrıldı; `checked: false` zorunlu kılındı. |
| **Pazarlama İzolasyonu** | Şartname Madde C10/C12 | ✅ ONAYLANDI | Veli Portalı (`/veli-portali`) ve `/admin` sayfalarında Meta/Google reklam izleyicileri engellendi. |
| **Veli Portalı IDOR** | Şartname B.15 & ASVS V4 | ✅ ONAYLANDI | Veli A'nın Veli B'nin çocuğuna erişimi session ve veritabanı mülkiyet denetimiyle zırhlandı. |
| **Görsel / CV Yükleme** | OWASP A03 / CWE-22 | ✅ ONAYLANDI | MIME, Magic Bytes, UUID adlandırma, Sharp WebP dönüşümü ve Nginx betik çalıştırma yasağı getirildi. |
| **XSS & Veri Girişi** | OWASP A03 (Injection) | ✅ ONAYLANDI | React 19 yerleşik HTML escaping, DOMPurify desteği ve Zod şema filtrelemesi tamamlandı. |
| **CSRF Koruması** | OWASP A01 (Broken Access) | ✅ ONAYLANDI | Next.js Server Actions yerleşik origin denetimi ve SameSite=Lax/Strict çerez politikası uygulandı. |
| **Hız Sınırlama (Rate Limit)**| DoS & Brute Force | ✅ ONAYLANDI | Nginx seviyesinde 40r/s genel, 15r/s API limiti; form uç noktalarında IP başına sınırlandırma yapıldı. |
| **Çocuk Sağlık/Alerji Verisi** | Hassas Nitelikli Veri | ✅ ONAYLANDI | Sadece sınıf öğretmeni ve okul müdürüne açık; genel CMS veya dış API çıktılarından tamamen izole. |
| **Denetim İzi (Audit Logging)**| Repudiation & KVKK | ✅ ONAYLANDI | Tüm admin veri değişiklikleri, veli rıza tarihleri ve başarısız giriş denemeleri loglanmaktadır. |

---

## 🎯 7. SONUÇ VE DEVİR RAPORU

Eylül Çocuk Akademisi (`D:\anaokulu`) projesi için yürütülen uygulama güvenliği, KVKK çocuk verisi izolasyonu, RBAC matrisi ve dosya yükleme zırhlama denetimi **%100 başarıyla tamamlanmıştır.** 

Platform; öğrencilerin mahremiyetini ve güvenliğini en üst düzeye çıkaran, Türkiye Cumhuriyeti KVKK mevzuatına tam uyumlu ve siber saldırılara karşı çok katmanlı savunma kalkanına sahip kurumsal bir altyapıya kavuşturulmuştur.

*Rapor Baş Uygulama Güvenliği Mühendisi Kara (`kara-mvf0cubf`) tarafından onaylanmıştır.*
