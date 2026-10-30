# Eylül Çocuk Akademisi Anaokulu - Tasarım Sistemi (DESIGN.md)

**Sürüm:** 6.1 (Saf Web & Kurumsal Site Odaklı Akıcı Scroll & Avant-Garde Tasarım Şartnamesi)  
**Tarih:** 21 Ekim 2026  
**Hazırlayan:** Elif Eylül (Baş UI/UX Tasarımcısı & Frontend Stil Uzmanı - `elif-mvf0a84x`)  
**Hedef Kapsam:** `D:\anaokulu` (10 Kurumsal Sayfa + Materio MUI Yönetim Paneli)

---

## 1. Tasarım Felsefesi ve Avant-Garde Vizyon ("Warm Horizon Academy")

Kullanıcının net direktifi doğrultusunda projenin tüm odağı **saf kurumsal web sitesine** verilmiştir. Erken çocukluk eğitiminin sıcaklığı, çocukların merak duygusu ve İskandinav doğallığı korunurken gereksiz CRM / portal yönlendirmeleri web deneyiminden arındırılmıştır.

### Temel Tasarım İlkeleri:
1. **Organik & Doğal Doku:** Keskin kutular yerine `2.5rem` - `3rem` (curved) köşe yarıçapları, arka planda hafif suluboya yaprak motifleri ve göz yormayan sıcak fildişi/krema zemin (`#FEFAF2`).
2. **Orijinal Filiz Yapraklı Logo Kimliği:** "EYLÜL ÇOCUK AKADEMİSİ ANAOKULU" logosunda, "Ü" harfinin üzerindeki iki nokta yerine filizlenen taze yeşil yaprak motifi (`#74B127`) vektörel olarak korunmuştur.
3. **Akıcı ve Saygılı Tipografi:** Başlıklarda sıcak `Comfortaa` ve `Plus Jakarta Sans`, gövde metinlerinde maksimum okunabilirlik ve WCAG AAA kontrastı sağlayan `Nunito` font ailesi.
4. **Akıcı Scroll (Smooth Scroll):** HTML kök seviyesinde `scroll-smooth` ve modern sayfa içi yumuşak geçişler aktif kılınmıştır.
5. **%100 Canlı CMS Bağlantısı:** Tasarımdaki her bir başlık, açıklama, buton, beslenme menüsü veya galeri görseli Admin panelinden değiştirildiğinde sitede anında canlıya yansımaktadır.

---

## 2. Renk Paleti ve Tasarım Belirteçleri (Design Tokens)

### 2.1 Resmi Logo Kullanım Kılavuzu Renk Paleti (Bölüm 3)
Resmi kılavuza (`D:\anaokulu\public\images\logo-kullanim-kilavuzu.png`) göre logo bileşeninde ve kurumsal kimlikte kullanılan kesin renkler:

| Renk Tanımı | HEX Kodu | Kullanım Alanı | Kılavuz Kuralı |
|---|---|---|---|
| **Kurumsal Lacivert** | `#0A3B69` | `E`, `Y`, `L`, `L`, `Ü` iki noktası, `ANAOKULU` yazısı ve yan çizgileri, dikey ayırıcı çizgi, `ÇOCUK AKADEMİSİ` | Ana kurumsal yazı rengi, hiçbir zaman siyaha veya açık maviye çevrilmez. |
| **Altın Sarısı** | `#E2AD50` | `Ü` harfinin gülümseme gövdesi (U kavisi) | Çocukların neşesini ve sıcaklığını temsil eden gülümseme sembolü. |
| **Yaprak Yeşili (Koyu)** | `#347B31` | Üst / Büyük yaprak (iç beyaz damar çizgisiyle) | Son `L` harfinin üst ucundan filizlenen ana yaprak. |
| **Yaprak Yeşili (Açık)** | `#6BA34B` | Alt / Küçük yaprak (iç beyaz damar çizgisiyle) | Filizlenen ikinci taze yaprak. |

### 2.2 Logo Bölümleri, Oranları ve Geometrisi
1. **Sol Blok (%68 genişlik):**
   - Üst satırda `EYLÜL` kelimesi (kalın, yuvarlatılmış köşeli). `Ü` harfinin gövdesi `#E2AD50` gülümseme kavisi, iki noktası `#0A3B69` dairedir.
   - İki yeşil yaprak (`#347B31` ve `#6BA34B`), `Ü` harfi üzerinde değil; son `L` harfinin üst ucundan sağ yukarı doğru filizlenmektedir.
   - Alt satırda sadece `EYLÜL` kelimesinin genişliğinde, iki yanında ince çizgilerle ortalanmış `——— A N A O K U L U ———` yazısı yer alır.
2. **Dikey Ayırıcı Çizgi:** `#0A3B69` renginde, sol ve sağ bloğu ayıran ince dikey çizgi.
3. **Sağ Blok (%32 genişlik):** Dikey çizginin sağında, iki satır halinde `#0A3B69` renginde büyük harflerle `ÇOCUK` ve `AKADEMİSİ`.

### 2.3 Web Sitesi Genel Renk Belirteçleri (Warm Horizon Academy)

| Token İsmi | HEX Kodu | Semantik Kullanım Alanı | Kontrast (Zemin Üstü) |
|---|---|---|---|
| **brand-cream** | `#FEFAF2` | Ana zemin (Warm Ivory) - göz yormayan doğal arka plan | N/A (Zemin) |
| **brand-lightCream** | `#FFFDF9` | Kart ve modül zeminleri (Elevated Surface) | N/A |
| **brand-blue / logo-navy** | `#0A3B69` | Ana kurumsal lacivert (Academic Navy) - logo ve başlıklar | 10.4:1 (AAA) |
| **brand-navy** | `#1A3358` | Derin gece mavisi - footer, modal başlıkları ve kontrast yazılar | 11.2:1 (AAA) |
| **brand-gold / accent** | `#E2AD50` | Logo altın sarısı gülümseme ve sıcak vurgular | 4.6:1 (AA) |
| **brand-orange** | `#EA7C02` | Canlı turuncu hover tonu | 5.1:1 (AA+) |
| **leaf-dark** | `#347B31` | Koyu yaprak yeşili (Logo üst yaprak) | 5.2:1 (AA) |
| **leaf-light** | `#6BA34B` | Açık yaprak yeşili (Logo alt yaprak) | 3.4:1 |
| **brand-leafTeal** | `#2A7276` | Derin yaprak mavisi (Teal) - ikinci köşe yaprakları ve BEM vurguları | 6.2:1 (AAA) |

---

## 3. Tipografi Hiyerarşisi

- **Başlık Fontu:** `var(--font-comfortaa), var(--font-plus-jakarta), sans-serif`
  - `Hero Başlık:` 48px / Line-height: 56px / Font-Weight: 900
  - `Bölüm Başlıkları (H2):` 32px - 36px / Line-height: 42px / Font-Weight: 800
  - `Kart Başlıkları (H3):` 18px - 22px / Line-height: 26px / Font-Weight: 700
- **Gövde Metin Fontu:** `var(--font-nunito), Nunito, sans-serif`
  - `Gövde (Body):` 15px - 16px / Line-height: 24px - 26px / Font-Weight: 400 - 600
  - `Açıklama / Rozet (Small):` 11px - 13px / Line-height: 18px / Font-Weight: 600 - 800

---

## 4. 10 Kurumsal Sayfa Mimarisi (Saf Web Deneyimi)

1. **`/` Anasayfa (`HomeView.tsx`):**
   - 3-6 yaş rozeti ve "Güvenle Bugüne, Umutla Yarına..." vurgulu Hero vitrini.
   - 5 Eğitim Yaklaşımı Kartı (BEM, All Day English, İlkokula Hazırlık, Zengin Etkinlik Dünyası, Doğa ile Öğrenme).
   - "Eylül'de Bir Gün" interaktif video modalı.
   - "Her Çocuk Bir Keşif" felsefe ve keşif bölümü.
2. **`/hakkimizda` (`AboutView.tsx`):**
   - 12+ Yıllık Deneyim, 4 Sınıf, 3-6 Yaş, Uzman Kadro kartları.
   - 5 Temel Değer Kartı: Sevgi, İlgi, Özen, Saygı, Güvenli Ortam.
   - Eğitim felsefesi vitrini ve kurucu vizyon alıntısı.
3. **`/okulumuz` (`CampusView.tsx`):**
   - 4'lü kampüs fotoğraf mozaik galerisi (Montessori ahşap sınıfları, masal odası, doğa bahçesi, yemekhane) ve Lightbox modalı.
   - 360° interaktif Sanal Tur sahnesi modalı.
   - 4 hızlı aksiyon kartı (Randevu Alın, Tanıtım Kataloğu, Sanal Tur, SSS).
4. **`/egitim-modeli/bem` (`BemView.tsx`):**
   - 6 yapraklı interaktif BEM Çarkı (Sosyal Duygusal, Dil Gelişimi, Bilişsel Gelişim, Sanat ve Yaratıcılık, Fiziksel Gelişim, Değerler Eğitimi).
   - Renkli ahşap bloklarla oynayan çocuk vitrini ve "BEM ile" somut kazanımlar listesi.
5. **`/egitim-modeli/all-day-english` (`EnglishView.tsx`):**
   - 4 çift dilli sütun (Çift Dilli Yaşam, Oyun ve Şarkılar, Uluslararası Materyaller, Günlük Doğal İletişim).
   - Video gözlem oynatıcısı ve 4'lü sınıf içi kareler galerisi.
6. **`/etkinlikler` (`ActivitiesView.tsx`):**
   - 9 branş atölyesi kartı (Piyano, Resim, Jimnastik, Satranç, Fen ve Doğa, Drama, Müzik, Kodlama, Değerler Eğitimi) ve detaylı atölye modalı.
7. **`/beslenme` (`NutritionView.tsx`):**
   - 4 beslenme ilkesi kartı (Taze ve Doğal, Diyetisyen Kontrolü, Günlük Taze Pişirim, Dengeli Menü).
   - Pazartesi - Cuma gün geçişli interaktif Haftalık Yemek Menüsü (Kahvaltı, Öğle Yemeği, İkindi).
   - Alerji, laktoz ve özel beslenme protokolü uyarı kutusu + Diyetisyen tavsiye notu.
8. **`/velilerimiz-icin` (`ParentsView.tsx`):**
   - Orijinal `code.html` tasarımına %100 sadık 8 interaktif bilgi kartı:
     1. Veli Bilgi Sistemi (Şeffaf öğrenci takibi ve bilgilendirme esasları)
     2. Okul ve Sınıf Duyuruları
     3. Etkinlik Takvimi
     4. Öğrenci Gelişim Portfolyosu (BEM karnesi ve inceleme)
     5. Haftalık Yemek Menüsü
     6. Öğretmen İletişim Saatleri & Geri Bildirim
     7. Görüşme ve Ziyaret Randevusu
     8. Belgeler ve Başvuru Formları
   - Her karta tıklandığında açılan bilgilendirme modalı ve ilgili web sayfasına yönlendirme.
   - Anne-çocuk kitap okuma hikaye banner'ı ve Veli İletişim Masası destek barı.
9. **`/kayit-ve-basvuru` (`EnrollmentView.tsx`):**
   - 01 Başvuru Formu, 02 Okul Ziyareti, 03 Kayıt Süreci adımları.
   - Okul ziyareti planlama vitrini, API'ye bağlı çalışan "Sizi Arayalım" formu ve KVKK onay mekanizması.
10. **`/iletisim` (`ContactView.tsx`):**
    - Telefon, e-posta ve açık adres kartları.
    - Çayyolu / Ankara kampüs krokisi ve API'ye bağlı çalışan interaktif "Bize Yazın" mesaj formu.

---

## 5. Ortak Bileşenler & Web Bütünlüğü

- `SiteHeader.tsx`: Orijinal Ü harfi yaprak filizli logo, açılır dropdown menüler (İçerikler, Eğitim Modeli, Okulumuz, Veliler, Kayıt), "Blog" doğrudan bağlantısı, "Okul Ziyareti Planla" CTA butonu ve tam duyarlı Mobil Drawer menü.
- `SiteFooter.tsx`: Kurumsal vizyon, zengin alt linkler (Blog, Etkinlik Videoları, Ders Programı, Aylık Yemek Listesi dahil), çalışma saatleri, sosyal medya bağlantıları ve yasal uyarılar.
- `DecorativeLeaves.tsx`: Sol üst ve sağ alt köşelerde sıcak suluboya yaprak illüstrasyonları.
- `FloatingActionButtons.tsx`: Sabit WhatsApp hızlı danışma butonu ve "Hızlı Randevu Al" pill butonu.
- `AnalyticsTracker.tsx`: Kurumsal sitedeki sayfa görüntülemelerini ve ebeveyn etkileşimlerini (telefon araması `tel:`, harita yol tarifi, form gönderimleri) arka planda sessizce izleyip `/api/analytics` rotasına işleyen canlı ziyaretçi izleme altyapısı.
- `globals.css` & `tailwind.config.ts`: `scroll-smooth`, Google font değişkenleri (`Nunito`, `Comfortaa`, `Plus Jakarta Sans`) ve özel kaydırma çubuğu.

---

## 6. İçerik ve Blog Sayfalarında Editoryal Tipografi İlkesi (Anti-AI Minimalizmi)

Müşterimizin "ikonları çok kullanma, yapay zeka ile yapıldığı belli olmasın" direktifi uyarınca:
1. **İkon Enflasyonunun Önlenmesi:** Orijinal 10 `code.html` sayfasının kendi yapısına sadık kalınırken; sonradan eklenen içerik sayfalarında (`/blog`, `/blog/[slug]`, `/icerikler/etkinlik-videolari`, `/icerikler/ders-programi`, `/icerikler/aylik-yemek-listesi`) Material ikon karmaşası tamamen kaldırılmıştır.
2. **Editoryal Şıklık (Scandinavian / Magazine Style):** İkon kutuları yerine `font-serif` başlıklar, zarif etiketler (`01 / İLKE`, `KATEGORİLER`, `YAZI DİZİSİ`), ferah beyaz alanlar (`whitespace`), monospaced üst başlıklar ve ince dokulu taş/fildişi kenarlıklar (`stone-200`) tercih edilmiştir.
3. **SEO ve Schema.org Semantiği:** Blog sayfalarında `Article` ve `BreadcrumbList` JSON-LD yapılandırılmış verileri, dinamik `generateMetadata`, okuma süresi ve ilgili editoryal makaleler alanı standartlaştırılmıştır.
