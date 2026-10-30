# Sürüm Günlüğü (CHANGELOG) — Eylül Çocuk Akademisi

Bu dosya, Eylül Çocuk Akademisi projesinin tüm sürüm döngülerini, modül eklemelerini, mimari geliştirmelerini ve teknik değişikliklerini [Keep a Changelog](https://keepachangelog.com/tr/1.0.0/) ve [Semantik Sürümleme (Semantic Versioning 2.0.0)](https://semver.org/lang/tr/) standartlarına uygun olarak belgeler.

Tüm sürümler; kullanıcı etkisi, kurumsal kazanımlar, veri güvenliği ve teknik mimari ekseninde gruplandırılmıştır.

---

## [6.0.0] - 2026-10-21
### Master Teknik Şartname V6 & V5 Mobil Okul Entegrasyonu

Bu sürüm; Eylül Çocuk Akademisi'nin kurumsal kimliğini, 10 orijinal tasarım sayfasını, Materio MUI tabanlı %100 Türkçe Yönetim Panelini (`/admin`), dinamik CMS içerik/medya yönetim motorunu, Veli CRM'ini ve V5 Mobil Okul Portalı altyapısını birleştiren ana sürümdür.

### Eklenenler (Added)
- **10 Kurumsal Sayfa Mimarisi (Next.js 15+ App Router & Tailwind CSS):**
  - **Anasayfa (`/`):** Hero alanı, BEM çarkı etkileşimi, 360° sanal tur daveti, veli yorumları ve güncel duyurular.
  - **Hakkımızda (`/hakkimizda`):** Kurumsal vizyon, misyon, pedagojik ilkeler, kurucu mesajı ve değerlerimiz.
  - **Okulumuz & 360° Sanal Tur (`/okulumuz`):** Fiziksel mekanlar, bahçe, atölyeler, uyku ve oyun odaları interaktif tanıtımı.
  - **Bütünleştirilmiş Eğitim Modeli (`/egitim-modeli/bem`):** BEM metodolojisi, gelişim alanları, akıl oyunları ve montessori yaklaşımı.
  - **All Day English (`/egitim-modeli/all-day-english`):** Çift dilli (bilingual) eğitim programı, anadili İngilizce olan eğitmenler ve günlük dil kazanımları.
  - **Zengin Etkinlik Dünyası (`/etkinlikler`):** Robotik kodlama, bale, drama, satranç, doğa atölyeleri ve görsel sanatlar.
  - **Doğal ve Dengeli Beslenme (`/beslenme`):** Diyetisyen kontrolünde hazırlanan haftalık yemek menüsü (Kahvaltı, Öğle, İkindi) ve alerji bildirim paneli.
  - **Velilerimiz İçin & Mobil Okul (`/velilerimiz-icin`):** Veli rehberi, okul kuralları, servis bilgileri ve Veli Portalı tanıtımı.
  - **Kayıt ve Başvuru (`/kayit-ve-basvuru`):** 8 aşamalı huniye bağlı interaktif ön kayıt ve okul ziyareti randevu formu.
  - **İletişim & Harita (`/iletisim`):** Canlı konum haritası, doğrudan arama, WhatsApp bağlantısı ve iletişim formu.
- **Materio MUI Türkçe Yönetim Paneli (`/admin`):**
  - **Gösterge Paneli (Dashboard):** Başvuru hacmi, dönüşüm oranları, sınıf dolulukları ve reklam kaynağı metrikleri.
  - **Dinamik İçerik & Sayfa CMS Modülü:** 10 sayfanın tüm başlık, metin, buton ve istatistik alanlarının anlık düzenlenmesi.
  - **Eylül Medya & Görsel Kütüphanesi:** Sürükle-bırak resim/video yükleme, galeri yönetimi, görsel değiştirme ve silme (`/api/media`).
  - **Haftalık Beslenme Yönetimi:** Haftalık yemek menüsü giriş ekranı ve diyetisyen onay mekanizması.
  - **Veli CRM & Randevu Takip Hunisi:** 8 kademeli süreç yönetimi (`Yeni` -> `İletişim Bekliyor` -> `Görüşüldü` -> `Nitelikli` -> `Randevu` -> `Ziyaret` -> `Ön Kayıt` -> `Kesin Kayıt`).
  - **Mobil Okul & Veli Portalı Yönetimi (`/veli-portali`):** Sınıf duyuruları, günlük beslenme/uyku durumları, yoklama ve BEM öğrenci gelişim kartları.
  - **İnsan Kaynakları & Kariyer Paneli:** İş ilanları ve CV başvuru havuzu.
  - **Sosyal Medya Yayın Merkezi:** Instagram, Facebook, YouTube ve LinkedIn içerik planlama matrisi.
  - **SEO, Harita ve Kurumsal Ayarlar:** Dinamik Meta Title/Description, OpenGraph etiketleri, Google Maps ve Pixel/CAPI anahtarları.
- **Tasarım Sistemi Entegrasyonu:**
  - `D:\anaokulu\warm_horizon_academy\DESIGN.md` referans alınarak Warm Ivory (`#FEFAF2`), Academic Navy (`#0E4984`), Sunbeam Amber (`#E5880B`), Sprout Green (`#74B127`) ve Leaf Teal (`#2A7276`) renk paleti kuruldu.
  - Orijinal filiz yapraklı **EYLÜL ÇOCUK AKADEMİSİ ANAOKULU** kurumsal logosu ve tipografi hiyerarşisi (Nunito / Comfortaa / Plus Jakarta Sans) korundu.
- **Sürüm Kontrolü & Güvenlik:**
  - Kapsamlı `.gitignore` yapılandırması tamamlandı; `.env*`, `node_modules/`, derleme çıktıları (`.next/`, `dist/`) ve gizli anahtarlar hariç tutuldu.
  - 10 orijinal tasarım klasörü, kaynak kodlar ve dokümanlar Git izlemesine alındı.

### Güvenlik & Gizlilik (Security)
- KVKK Aydınlatma Metni ve Açık Rıza onay mekanizmaları form altyapılarına dahil edildi.
- Çocuk verileri, fotoğraflar ve özel gelişim notları için RBAC (Rol Tabanlı Erişim Denetimi) kuralları tanımlandı.
- API uç noktalarında yetkilendirme ve girdi doğrulama (Zod şemaları) standartlaştırıldı.

---

## [1.0.0] - 2026-10-19
### İlk Tasarım ve HTML/CSS Prototip Çekirdeği

### Eklenenler (Added)
- Eylül Çocuk Akademisi için hazırlanan 10 HTML/CSS sayfa prototipi (`code.html` ve önizleme ekran görüntüleri).
- Tasarım spesifikasyonu (`warm_horizon_academy/DESIGN.md`) ve görsel varlıklar.
