# EYLÜL ÇOCUK AKADEMİSİ — MASTER TEKNİK ŞARTNAME SÜRÜM 6.0 & V5 MOBİL OKUL EK ŞARTNAMESİ

**Doküman Kodu:** EYL-SARTNAME-V6.0  
**Tarih:** 21 Ekim 2026  
**Sürüm:** 6.0 (Master Kapsam) + Sürüm 5.0 (Mobil Okul Ek Şartnamesi Entegre)  
**Hazırlayan / Arşivleyen:** Ömer Baba (`-mer-baba-mvf0fs92`) — Baş Teknik Yazar & Dokümantasyon Mimarı  
**Kurum:** Eylül Çocuk Akademisi Anaokulu  
**Tasarım Sistemi:** Warm Horizon Academy (`D:\anaokulu\warm_horizon_academy\DESIGN.md`)  
**Çalışma Alanı (CWD):** `D:\anaokulu`  
**Dağıtım Sunucusu:** `142.93.104.78:8098` (İzole Docker Ağı: `anaokulu_net`, Servisler: `anaokulu_web`, `anaokulu_app`)

---

## 1. YÖNETİCİ ÖZETİ VE GENEL PROJE VİZYONU

Eylül Çocuk Akademisi; okul öncesi eğitimde "Güvenle Bugüne, Umutla Yarına" mottosuyla hareket eden, Bütünleştirilmiş Eğitim Modeli (BEM) ve tam gün çift dilli (All Day English) eğitimi benimsemiş köklü bir eğitim kurumudur. 

Bu Master Teknik Şartname; kurumun dijital dönüşümünü, veli ve öğrenci deneyimini, kurumsal web varlığını, reklam ve dönüşüm hunisini, Materio MUI tabanlı %100 Türkçe Yönetim Panelini (`/admin`), okul personelinin teknik bilgiye ihtiyaç duymadan yönetebileceği %100 Dinamik CMS altyapısını ve Mobil Okul Veli-Öğretmen Portalı sistemini uçtan uca tanımlar.

### 1.1. Temel Proje Hedefleri
1. **Kurumsal Kimlik ve Sıfır Bozulma (Pixel-Perfect):** 10 orijinal tasarım sayfasının (`/`, `/hakkimizda`, `/okulumuz`, `/egitim-modeli/bem`, `/egitim-modeli/all-day-english`, `/etkinlikler`, `/beslenme`, `/velilerimiz-icin`, `/kayit-ve-basvuru`, `/iletisim`) renk, tipografi, logo ve estetik değerlerini Next.js 15+ App Router ve Tailwind CSS üzerinde kusursuz çalıştırmak.
2. **%100 Dinamik CMS ve Medya Özgürlüğü:** Web sitesindeki hiçbir metin, başlık, telefon numarası, haftalık yemek menüsü veya görselin kod içinde statik kalmaması; okul personeli tarafından `/admin` panelinden anlık düzenlenebilmesi, yeni görsel eklenebilmesi veya silinebilmesi.
3. **8 Aşamalı Veli Kayıt & Randevu Hunisi (CRM):** Reklam kanallarından (Google Ads, Meta CAPI) ve organik formlardan gelen başvuruların tek merkezde toplanması, danışman ataması ve kayıt dönüşümünün artırılması.
4. **Çocuk Verisi İzolasyonu ve KVKK Güvencesi:** Öğrenci fotoğrafları, sağlık/alerji kayıtları ve gelişim verilerinin üçüncü taraf takipçilerden kesinlikle izole edilmesi; RBAC ve IDOR önlemleri.
5. **V5 Mobil Okul & Veli Portalı Entegrasyonu:** Günlük akış, yemek/uyku takibi, yoklama, sınıf içi duyurular ve BEM öğrenci gelişim portfolyosunun velilere şeffaf aktarılması.

---

## 2. DİJİTAL MİMARİ VE TEKNOLOJİ YIĞINI ŞARTNAMESİ

### 2.1. Ön Yüz (Frontend) Yığını
- **Çekirdek Çerçeve:** Next.js 15+ (App Router, React 19, TypeScript 5.x).
- **Stil & Tasarım Sistemi:** Tailwind CSS v4 / Modern Tailwind mimarisi, CSS değişkenleri ile donatılmış `warm_horizon_academy` tasarım sistemi token'ları.
- **Bileşen Mimarisi:** Server Components (RSC) öncelikli; formlar, sekmeler ve interaktif modüller için optimize edilmiş Client Components (`'use client'`).
- **Hareket ve Akış:** Akıcı kaydırma (Smooth Scroll), mikro etkileşimler, yumuşak geçişler ve lazy-load optimizasyonları.

### 2.2. Yönetim Paneli (Admin Portal) Yığını
- **Yönetim Çatısı:** Açık kaynak **Materio MUI Next.js Admin Template** mimarisi.
- **Dil ve Yerelleştirme:** %100 saf ve anlaşılır Türkçe (terim karmaşasından arındırılmış, eğitim kurumuna özel terminoloji).
- **Tasarım Dili:** Kurumsal Lacivert (`#0E4984` / `#1E56A0`) ve Güneş Kehribarı (`#E67E22`) vurguları ile zenginleştirilmiş Materio temizliği; sol dikey çekmece navigasyonu, üst işlem/arama çubuğu ve duyarlı kart gridleri.

### 2.3. Veri Katmanı ve Kalıcı Depolama
- **Kalıcı Veri Motoru:** `D:\anaokulu\data\cms-store.json` hibrit kalıcı JSON/SQLite depolama mimarisi; sunucu yeniden başlasa dahi sıfır veri kaybı.
- **Hafıza-Önbellek & Anında Güncelleme:** Veriler bellek üzerinde işlenir, her değişiklik atomik dosya yazma protokolüyle diske kaydedilir; ISR ve dinamik fetch ile web sitesine anında yansır.
- **Tip Güvenliği:** TypeScript arayüzleri (`src/types/cms.ts`) ile sıkı kontrat kontrolü; form doğrulama Zod şemaları.

### 2.4. Sunucu ve Konteyner Altyapısı
- **Çalışma Ortamı:** Node.js 20 Alpine tabanlı Docker Standalone derlemesi (`anaokulu_app`).
- **Ters Dizin Sunucusu:** Nginx 1.25 Alpine (`anaokulu_web`) — Gzip/Brotli sıkıştırma, statik dosya önbelleği, Rate Limiting (40 req/s genel, 15 req/s API).
- **Sunucu İzolasyonu:** `142.93.104.78` sunucusundaki diğer portlar (`8088`, `8092`, `8096`) ile sıfır çakışma; tahsisli dış port: `8098`, izole ağ: `anaokulu_net`.

---

## 3. 10 KURUMSAL SAYFA VE SİTE HARİTASI ŞARTNAMESİ

Web sitesi, 10 temel sayfadan meydana gelir ve her sayfanın bileşenleri dinamik CMS'e bağlıdır:

| No | Rota | Sayfa Adı | Temel Bölümler ve Fonksiyonel Kapsam | Dinamik CMS Yetkisi |
| :--- | :--- | :--- | :--- | :--- |
| **1** | `/` | **Anasayfa** | Hero sloganı (“Güvenle Bugüne, Umutla Yarına...”), 4 temel sütun, günlük rutin akışı, interaktif BEM çarkı daveti, öne çıkan duyuru ve 3'lü Instagram akışı | Hero metinleri, butonlar, resimler, Instagram post linkleri |
| **2** | `/hakkimizda` | **Hakkımızda** | Kurumsal vizyon, misyon, pedagojik ilkeler, 4'lü başarı istatistiği, kurucu mesajı ve kurum değerleri | İstatistik sayaçları, vizyon/misyon metinleri, kurucu görseli |
| **3** | `/okulumuz` | **Okulumuz & Sanal Tur** | 360° interaktif sanal tur gömülü alanı, fiziksel mekanlar (oyun bahçesi, atölyeler, uyku odaları, yemekhane) detay kartları | Sanal tur iframe linki, tesis fotoğrafları, mekan özellikleri |
| **4** | `/egitim-modeli/bem` | **Bütünleştirilmiş Eğitim Modeli (BEM)** | BEM 6 gelişim alanı dairesel çarkı (Sosyal-Duygusal, Dil, Bilişsel, Sanat, Fiziksel, Değerler), kazanım maddeleri ve pedagojik sonuçlar | Çark başlıkları, açıklamalar, kazanım listeleri, model görselleri |
| **5** | `/egitim-modeli/all-day-english` | **All Day English** | Çift dilli (bilingual) eğitim metodolojisi, doğal dil edinim prensipleri, sınıf içi İngilizce etkinlik galerisi ve kayıt davet bandı | Dil kazanım maddeleri, galeri fotoğrafları, kayıt butonları |
| **6** | `/etkinlikler` | **Zengin Etkinlik Dünyası** | 9 ana branş etkinlik kartı (Robotik Kodlama, Bale, Drama, Satranç, Doğa Atölyesi, Müzik/Orff, Görsel Sanatlar, Jimnastik, Akıl Oyunları) | 9 kartın tamamının başlığı, açıklaması, resmi ve kategori sırası |
| **7** | `/beslenme` | **Doğal ve Dengeli Beslenme** | Beslenme ilkeleri, Pazartesi-Cuma haftalık 3 öğün (Kahvaltı, Öğle, İkindi) yemek menüsü tablosu, diyetisyen tavsiye ve alerji notu | Haftanın her günü ve öğünü için yemek adları, saatler, diyetisyen notu |
| **8** | `/velilerimiz-icin` | **Velilerimiz İçin & Mobil Okul** | Veli kılavuzu, servis/güvenlik kuralları, Mobil Okul Veli Portalı tanıtım blokları, veli memnuniyet alıntıları ve hızlı danışma hattı | Veli kılavuz metinleri, mobil portal bağlantıları, destek telefonu |
| **9** | `/kayit-ve-basvuru` | **Kayıt, Başvuru & Randevu** | 4 adımlı kayıt süreci rehberi, okul ziyareti randevu formu, sıkça sorulan sorular (SSS) akordiyonu | Randevu form alanları, SSS soru-cevapları, kayıt aşama açıklamaları |
| **10** | `/iletisim` | **İletişim & Konum** | Canlı Google Maps harita alanı, açık adres, telefon/WhatsApp butonları, çalışma saatleri ve veli iletişim formu | Adres, telefon, harita koordinatı, WhatsApp numarası, çalışma saatleri |

---

## 4. %100 DİNAMİK CMS VE EYLÜL MEDYA KÜTÜPHANESİ ŞARTNAMESİ

Web sitesinin dinamik yönetimi müşterinin en vazgeçilmez şartıdır:

### 4.1. Sayfa Alanlarının Yönetimi
- Admin panelindeki `/admin/cms` (veya ilgili sayfa sekmesi) üzerinden 10 sayfanın tümü sekme bazlı olarak seçilebilir.
- Her sayfadaki:
  - Üst başlık (Badge), Ana Başlık (`h1`, `h2`), Alt Açıklama metinleri,
  - Eylem Çağrısı (CTA) butonlarının üzerindeki yazılar ve yönlendikleri linkler,
  - 9 Etkinlik kartının başlık, açıklama ve görselleri,
  - BEM modelinin 6 sektörünün metin ve ikonları,
  - Kurumsal telefon, e-posta, açık adres ve sosyal medya hesapları doğrudan düzenlenebilir ve "Kaydet" butonuna basıldığı an canlı web sitesine yansır.

### 4.2. Eylül Medya Kütüphanesi (`/admin/media`)
- **Sürükle-Bırak Yükleme:** Bilgisayardan tekli veya çoklu resim/fotoğraf yükleme (`POST /api/media`).
- **Görsel Değiştirme:** Web sitesindeki herhangi bir sayfa görseli, medya kütüphanesinden seçilerek tek tıkla güncellenebilir.
- **Silme ve Arşivleme:** Kullanılmayan görseller güvenli biçimde silinebilir (`DELETE /api/media`).
- **Format ve Optimizasyon:** Yüklenen görseller otomatik olarak optimize edilir; JPEG/PNG/WebP formatları desteklenir.
- **Instagram 3'lü Grid ve Video:** Anasayfadaki Instagram kareleri ve tanıtım videosu linkleri medya panelinden yönetilir.

---

## 5. HAFTALIK BESLENME VE MENÜ YÖNETİMİ ŞARTNAMESİ

- **Öğün Kapsamı:** Pazartesi, Salı, Çarşamba, Perşembe ve Cuma günleri için her gün ayrı ayrı 3 öğün tanımlanır:
  1. *Sabah Kahvaltısı* (Saat: 08:30 - 09:30)
  2. *Öğle Yemeği* (Saat: 12:00 - 13:00)
  3. *İkindi Beslenmesi* (Saat: 15:30 - 16:15)
- **Diyetisyen Onayı ve Notu:** Her haftalık menünün altında uzman diyetisyen adı, unvanı, haftalık kalori/besin dengesi notu ve mevsimsel besin önerisi yer alır.
- **Alerjen Uyarıları:** Menü kalemlerinde glüten, süt ürünleri, kuruyemiş vb. alerjen içerikler özel ikon veya etiketle belirtilebilir.
- **Yönetim Kolaylığı:** Okul yetkilisi Pazartesi sabahı veya Cuma akşamı 5 dakikalık bir işlemle haftanın menüsünü panelden günceller; veliler `/beslenme` sayfasından ve Veli Portalından anlık olarak menüyü görüntüler.

---

## 6. VELİ CRM VE 8 AŞAMALI KAYIT/RANDEVU HUNİSİ ŞARTNAMESİ

Web sitesinin tüm iletişim, randevu ve kayıt formları entegre CRM motoruna akar:

### 6.1. 8 Aşamalı Kayıt Hunisi Durumları
1. **Yeni (`yeni`):** Web sitesinden formun doldurulduğu ilk durum (sisteme bildirim düşer).
2. **İletişim Bekliyor (`iletisim_bekliyor`):** Veli aranmak üzere kuyruğa alındı.
3. **Görüşüldü (`goruldu`):** Veli ile ilk telefon görüşmesi sağlandı, bilgi verildi.
4. **Nitelikli (`nitelikli`):** Yaş grubu ve kontenjan uygun, veli anaokulu arayışında ciddi.
5. **Randevu Verildi (`randevu_verildi`):** Okul ziyareti ve yüz yüze görüşme günü/saati belirlendi.
6. **Ziyaret Edildi (`ziyaret_edildi`):** Veli ve öğrenci okulu ziyaret etti, kurum gezdirildi.
7. **Ön Kayıt (`on_kayit`):** Veli ön kayıt sözleşmesini imzaladı, evrak süreci başladı.
8. **Kesin Kayıt (`kesin_kayit`):** Kayıt tamamlandı, öğrenci sınıf listesine dahil edildi.
*(Alternatif durum: `kaybedildi` — başka okul tercihi veya lokasyon uyumsuzluğu; kayıp nedeni not edilir).*

### 6.2. CRM Fonksiyonları
- **Veli & Çocuk Bilgisi:** Veli Adı-Soyadı, Telefon, E-posta, Çocuk Adı, Yaş Grubu (3 Yaş, 4 Yaş, 5 Yaş).
- **Kaynak Takibi:** Başvurunun nereden geldiği (Web Formu, WhatsApp, Google Ads, Instagram, Tavsiye, Doğrudan Telefon).
- **Danışman Notları:** Yapılan her görüşme için tarihli iç not bırakma imkanı.
- **Filtreleme ve Arama:** Duruma göre süzme, ada ve telefona göre anlık arama, randevu takvimi görünümü.

---

## 7. GOOGLE & META REKLAM DÖNÜŞÜM MERKEZİ ŞARTNAMESİ

- **Google Ads & Tag Manager:** Web sitesi genelinde gtag.js / GTM altyapısı; form gönderiminde `generate_lead` ve `contact` etkinliklerinin tetiklenmesi.
- **Meta Pixel & Dönüşüm API'si (CAPI):** Facebook/Instagram reklamları için hem tarayıcı (Pixel) hem sunucu taraflı (CAPI) dönüşüm iletimi; çerez engellemelere karşı yüksek eşleşme oranı.
- **UTM Parametreleri:** Gelen URL'deki `utm_source`, `utm_medium`, `utm_campaign` parametreleri form gönderildiğinde CRM kartına otomatik kaydedilir; okul yönetimi hangi reklam kampanyasının kaç kayıt getirdiğini panelden raporlar.

---

## 8. MERKEZİ SOSYAL MEDYA YAYIN YÖNETİMİ (C17 - C19) ŞARTNAMESİ

Müşteri Master Şartnamesi C17, C18 ve C19 maddeleri:

### 8.1. C17 — Çoklu Platform İçerik Planlama
- **Kapsam:** Instagram, Facebook, YouTube ve LinkedIn platformları için içerik planlama matrisi.
- **Format Türleri:** Standart Gönderi (Post), Dikey Kısa Video (Reels/Shorts), Hikaye (Story) ve Uzun Tanıtım Videosu.
- **Zamanlama Takvimi:** İçeriğin yayınlanacağı gün ve saat belirlenir; panelde takvim görünümünde listelenir.

### 8.2. C18 — İçerik Varlıkları ve Durum Matrisi
- **Varlıklar:** Paylaşılacak görsel veya video linki, açıklama metni (caption), etiketler (`#eylülçocukakademisi #okulöncesi #anaokulu`).
- **Durum Matrisi:** 
  - `Taslak` (İçerik hazırlandı, onay bekliyor)
  - `Onaylandı` (Okul müdürü/kurucu onayı aldı)
  - `Yayında` (Sosyal medyada paylaşıldı)
  - `Arşiv` (Süresi doldu veya arşivlendi)

### 8.3. C19 — Web Sitesi & Sosyal Medya Çift Yönlü Köprü
- Admin panelinde "Yayında" işaretlenen ve öne çıkarılan Instagram paylaşımları, web sitesinin anasayfasındaki 3'lü Instagram vitrinine anında yansır; web ziyaretçileri tek tıkla kurumun resmi sosyal medya profiline yönlendirilir.

---

## 9. İNSAN KAYNAKLARI (İK) VE KARİYER ŞARTNAMESİ

- **Açık Pozisyonlar Yönetimi:** Okul öncesi öğretmeni, İngilizce öğretmeni, yardımcı öğretmen, psikolog, aşçı, servis rehberi vb. kadrolar için ilan açma ve pasife alma.
- **İş Başvuru Formu:** Adayların isim, telefon, e-posta, deneyim yılı, mezuniyet ve ön yazı bilgilerini girdiği form.
- **CV Dosya Yükleme:** Güvenli PDF/DOCX formatında özgeçmiş yükleme desteği.
- **Aday Değerlendirme Havuzu:** Başvuruların durumları (`İnceleniyor`, `Mülakata Çağrıldı`, `Kabul`, `Red`) panel üzerinden yönetilir; KVKK kapsamında saklama süreleri işletilir.

---

## 10. KVKK, ÇOCUK VERİSİ İZOLASYONU VE GÜVENLİK ŞARTNAMESİ

- **Aydınlatma ve Açık Rıza Ayrımı:** 6698 sayılı KVKK gereği, başvuru formlarında "Aydınlatma Metnini Okudum" onayı ile "İletişim ve Pazarlama İzni (Açık Rıza)" birbirinden kesin çizgilerle ayrı onay kutularına ayrılmıştır; hiçbir onay kutusu önceden işaretli (pre-checked) gelmez.
- **Çocuk Verilerinin Reklam İzolasyonu:** Öğrencilerin adı, sağlık/alerji notları ve gelişim kayıtları; Google Ads, Meta Pixel veya herhangi bir pazarlama çerezine/izleyicisine ASLA iletilmez. Pazarlama pikselleri yalnızca genel web sayfalarında çalışır; veli portalı sayfalarında tüm analitik izleyiciler devre dışı bırakılır.
- **Dosya Yükleme Güvenliği:** Yüklenen görseller ve CV dosyaları için MIME-tipi, dosya uzantısı ve boyut kontrolleri uygulanır; doğrudan çalıştırılabilir betikler (`.php`, `.sh`, `.exe`, `.js`) sunucu seviyesinde engellenir (`deny all`). Path Traversal (CWE-22) koruması ile rastgele dosya yollarına yazım engellenir.
- **RBAC ve IDOR Koruması:** Veli Portalı oturumlarında Veli A'nın, URL veya istek manipülasyonuyla Veli B'nin öğrencisini veya portfolyosunu görmesi engellenir (Rol Tabanlı Yetkilendirme).

---

## 11. SÜRÜM 5.0 MOBİL OKUL EK ŞARTNAMESİ (B1 - B6, P1 / P2 / P3)

Eylül Çocuk Akademisi Sürüm 5.0 Mobil Okul Ek Şartnamesi, veliler ile okul arasındaki günlük iletişimi mobil uyumlu bir portal üzerinden yönetir:

### 11.1. B1 - B6 Mobil Okul Çekirdek Maddeleri
- **B1 — Veli & Öğretmen Giriş Kapısı (`/veli-portali`):** Telefon numarası / şifre veya tek kullanımlık SMS/parola ile güvenli giriş.
- **B2 — Günlük Yaşam Akışı (Timeline):** Öğrencinin gün içindeki beslenme durumu (Yemeğini yedi/az yedi), uyku saati (Uyudu/dinlendi) ve katıldığı BEM etkinliklerinin veliye iletimi.
- **B3 — Sınıf Duyuru Panosu:** Okul yönetiminin ve sınıf öğretmenlerinin paylaştığı duyurular; önemli duyurular için renkli acil rozetleri.
- **B4 — Günlük Yoklama Takibi:** Öğrencinin okula geliş ve ayrılış saatleri, izin/rapor durumları.
- **B5 — İlaç Takip & Sağlık Bildirimi:** Velinin gün içinde verilmesi gereken ilaçları, dozajı ve saatini bildirdiği, öğretmenin ise ilacı verdiğini onayladığı güvenli modül.
- **B6 — Servis & Güzergah Bilgilendirmesi:** Öğrencinin servis aracı, hostes iletişim bilgisi ve biniş/iniş bildirimleri.

### 11.2. P1 / P2 / P3 Pedagojik Portfolyo Maddeleri
- **P1 — BEM Öğrenci Gelişim Portfolyosu:** Öğrencinin 6 BEM gelişim alanındaki (Bilişsel, Dil, Sanat vb.) dönemsel kazanımları, gözlem notları ve başarı rozetleri.
- **P2 — Etkinlik Fotoğraf Galerisi:** Sınıf içinde yapılan atölye, deney ve sanat çalışmalarının fotoğraflarının güvenli, sadece sınıf velilerine açık şekilde paylaşılması.
- **P3 — Veli-Öğretmen Özel Mesajlaşma & Randevu:** Veli ile sınıf öğretmeni arasında kontrollü, çalışma saatleri sınırlarına tabi mesajlaşma ve gelişim toplantısı randevusu talebi.

---

## 12. MATERİO MUI TÜRKÇE YÖNETİM PANELİ KAPSAMI

Panel; masaüstü, tablet ve mobil cihazlarda kusursuz çalışan açık kaynak Materio MUI mimarisi üzerinde şu 10 menü başlığını sunar:

```
[EYLÜL ÇOCUK AKADEMİSİ - YÖNETİM MERKEZİ]
├── 1. 📊 Gösterge Paneli (Dashboard)
├── 2. 📝 Sayfa & İçerik Yönetimi (Dinamik CMS - 10 Sayfa)
├── 3. 🖼️ Eylül Medya Kütüphanesi (Görsel & Video Deposu)
├── 4. 🥗 Haftalık Beslenme & Yemek Menüsü
├── 5. 👥 Veli CRM & Kayıt Hunisi (8 Kademe)
├── 6. 📱 Mobil Okul & Veli Portalı Yönetimi
├── 7. 💼 İnsan Kaynakları (İlanlar & Başvurular)
├── 8. 📢 Sosyal Medya Yayın Planlama (C17-C19)
├── 9. 🔍 SEO, Harita & Reklam Kodları (Pixel/CAPI)
└── 10. ⚙️ Kurumsal Ayarlar & İletişim Bilgileri
```

---

## 13. CORE WEB VITALS, PERFORMANS VE SEO STANDARTLARI

- **LCP (Largest Contentful Paint):** $\le 2.5\text{ saniye}$ (Görseller Sharp ile WebP/AVIF formatında sunulur, Nginx Gzip Level 6 aktiftir).
- **CLS (Cumulative Layout Shift):** $\le 0.1$ (Görsellere kesin genişlik/yükseklik atanmıştır, fontlar yerel barındırılır ve `font-display: swap` kullanılır).
- **INP (Interaction to Next Paint):** $\le 200\text{ milisaniye}$ (Hafif JavaScript demetleri, ağır işlemler arka plan API'lerine aktarılmıştır).
- **Yapılandırılmış Veri (Schema.org):** `ChildCare` / `Preschool` şeması, Açık Adres, Telefon, Çalışma Saatleri, Logo ve SSS Akordiyon `FAQPage` şeması.
- **Sitemap & Robots:** Dinamik `/sitemap.xml` ve `/robots.txt` ile Google indeksleme optimizasyonu.

---

## 14. KABUL KRİTERLERİ VE KALİTE GÜVENCE MATRİSİ

1. **İçerik Dinamizmi Kabulü:** Web sitesindeki herhangi bir sayfanın başlığı admin panelinden değiştirildiğinde ve F5 yapıldığında yeni metin hatasız görünmelidir.
2. **Görsel Yönetim Kabulü:** Admin panelinden yeni bir resim yüklendiğinde ve sayfadaki eski görselin yerine seçildiğinde canlı sitede yeni resim anında sunulmalıdır.
3. **Menü Kabulü:** Haftalık yemek menüsü değiştirildiğinde hem `/beslenme` sayfasında hem de Veli Portalında yeni menü listelenmelidir.
4. **CRM Form Kabulü:** Anasayfadan veya Kayıt sayfasından gönderilen bir form, veritabanına hatasız yazılmalı ve admin CRM tablosunda `yeni` statüsüyle en üstte listelenmelidir.
5. **Mobil Uyumluluk Kabulü:** 10 kurumsal sayfa ve Türkçe Admin Paneli iPhone, Android telefonlar ve tabletlerde yatay taşma (horizontal scroll) olmaksızın kusursuz çalışmalıdır.
6. **Güvenlik Kabulü:** Yüklenen `.php` veya benzeri betikler sunucu tarafından derlenmemeli; veli portalı yetkisi olmayan kişiler başkalarının verilerine erişememelidir.

---

*Bu Master Teknik Şartname Sürüm 6.0 ve V5 Mobil Okul Ek Şartnamesi; Eylül Çocuk Akademisi projesinin değişmez teknik anayasasıdır.*
