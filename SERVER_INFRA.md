# Eylül Çocuk Akademisi — Sunucu Dağıtım ve Altyapı Mimarisi (SERVER_INFRA.md)

**Belge Sürümü:** 1.2.0 (Canlı Dağıtım Doğrulandı — PRODUCTION LIVE)  
**Hazırlayan:** Seyfo Dayı (Lead Linux System Administrator & SRE — `seyfo-day--mvf0eyk1`)  
**Tarih:** 21 Ekim 2026 — 17:34 (UTC+3)  
**Uygulama:** Eylül Çocuk Akademisi (Next.js 15 Standalone + Materio Türkçe Yönetim Paneli)  
**Yerel Çalışma Alanı:** `D:\anaokulu`  
**Canlı Sunucu:** `142.93.104.78`  
**Sunucu Dağıtım Dizini:** `/opt/anaokulu`  
**Canlı Yayın Portu:** `http://142.93.104.78:8089`  
**Mevcut Dağıtım Durumu:** 🟢 **AKTİF VE SAĞLIKLI (UP & HEALTHY)**

---

## 1. 🛡️ Hive İzolasyon ve Çakışmasızlık Güvencesi

Sunucuda (`142.93.104.78`) çalışan hiçbir konteyner veya ağa zarar verilmeden dağıtım tamamlanmıştır:
- `8088`: Sigortam Dijital Ana Portu (`sigorta_web`, `sigorta_php`, `sigorta_db`) — **KESİNTİSİZ ÇALIŞIYOR (HTTP 200)**
- `8089`: **Eylül Çocuk Akademisi** (`anaokulu_web`, `anaokulu_app`) — **CANLIDA (HTTP 200)**
- `8092`: Sigortam Dijital / Kız Kıza Entegrasyon Portu
- `8096`: eSchool SaaS Okul Portalı (`eschool_web`, `eschool_php`, `eschool_db`)
- Diğer bağımsız servisler: `portfolio-2025` (3090), `altin_alarm_worker`, `logoboss-hub` (8095), `sharka-web` (8091), `pokebook-web` (8090), `devcore-*`

> [!IMPORTANT]
> **Kesin İzolasyon Doğrulandı:**  
> - **Tahsis Edilen Dış Port:** `8089` (Doğrudan izole Nginx Alpine konteynerine bağlıdır).
> - **İzole Docker Ağı:** `anaokulu_net` (Bağımsız bridge ağı).
> - **Konteyner İsim Alanı:** `anaokulu_app` ve `anaokulu_web`.

---

## 2. 🏗️ Canlı Konteyner ve Servis Durumu

```
[ İnternet / Kullanıcılar / Veliler ]
                 │
                 ▼ Port: 8089
┌────────────────────────────────────────────────────────┐
│  anaokulu_web (Nginx 1.25 Alpine) — HEALTHY            │
│  - Gzip / Brotli sıkıştırma                            │
│  - OWASP Güvenlik Başlıkları                           │
│  - 1 Yıl Değişmez Statik Varlık Önbelleği (_next/static)│
│  - Hız Sınırlama (Rate Limiting: 40r/s Genel, 15r/s API│
│  - Doğrudan Uploads Servisi (/var/www/uploads)        │
└────────────────────────┬───────────────────────────────┘
                         │ Proxy Pass (İç Ağ: anaokulu_net)
                         ▼ Port: 3000
┌────────────────────────────────────────────────────────┐
│  anaokulu_app (Node 20 Alpine - Next.js Standalone)    │
│  - Çok Aşamalı (Multi-stage) Minimal İmaj — HEALTHY    │
│  - Root Olmayan Güvenli Kullanıcı (nextjs:nodejs 1001) │
│  - Dahili Sharp Görsel İşleme & SSR Motoru             │
│  - Otomatik Sağlık Denetimi (/api/health)              │
└────────────┬───────────────────┬───────────────────────┘
             │                   │                       │
             ▼                   ▼                       ▼
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────────┐
│ ./uploads Volume │   │   ./data Volume  │   │ ./public/unlighthouse│
│ (Medya/Evraklar) │   │ (SQLite / JSON)  │   │ (Canlı SEO Raporları)│
└──────────────────┘   └──────────────────┘   └──────────────────────┘
```

### 2.1. Canlı Servis Öznitelikleri

| Servis Adı | Konteyner | Durum | Port Eşlemesi | Bellek Limiti | CPU Limiti |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **anaokulu_app** | `anaokulu-app:production` | `Up (healthy)` | `3000/tcp (İzole)` | `1024 MB` | `1.50 Çekirdek` |
| **anaokulu_web** | `nginx:1.25-alpine` | `Up (healthy)` | `0.0.0.0:8089->80/tcp` | `256 MB` | `0.50 Çekirdek` |

---

## 3. 🌐 Doğrulanan Canlı Uç Noktalar (HTTP 200 OK)

21 Ekim 2026 saat 17:34'te hem sunucu yerelinden hem de genel internet üzerinden yapılan canlı HTTP istekleriyle test edilmiş ve onaylanmıştır:

| Sayfa / Hizmet | Canlı URL | HTTP Durumu | Açıklama |
| :--- | :--- | :--- | :--- |
| **Ana Sayfa** | [http://142.93.104.78:8089/](http://142.93.104.78:8089/) | `200 OK` | Kurumsal ön yüz, tasarım sistemi ve akıcı scroll |
| **Yönetim Paneli** | [http://142.93.104.78:8089/admin](http://142.93.104.78:8089/admin) | `200 OK` | Materio Türkçe Admin Paneli ve Görsel CMS Formları |
| **Blog & Haberler** | [http://142.93.104.78:8089/blog](http://142.93.104.78:8089/blog) | `200 OK` | SEO uyumlu blog arşivi ve içerikleri |
| **Teknik SEO & Hız** | [http://142.93.104.78:8089/unlighthouse/index.html](http://142.93.104.78:8089/unlighthouse/index.html) | `200 OK` | Unlighthouse tüm site hız ve denetim raporu |
| **Nginx Sağlık Kontrolü** | [http://142.93.104.78:8089/healthz](http://142.93.104.78:8089/healthz) | `200 OK` | Edge reverse proxy sağlık denetimi |
| **Next.js Sağlık Kontrolü** | `http://127.0.0.1:3000/api/health` | `200 OK` | Konteyner içi uygulama canlılık yanıtı |
| **Sigortam Dijital** | [http://142.93.104.78:8088/](http://142.93.104.78:8088/) | `200 OK` | Komşu üretim servisi kesintisiz ve hatasız |

---

## 4. 🚀 Sıfır Kesinti (Zero-Downtime) Dağıtım ve Dağıtım Betiği

### 4.1. Tek Komutla Otomatik Kurulum ve Dağıtım (`deploy-8089.sh`)

Sunucu konsolunda (`web terminal` veya SSH üzerinden):

```bash
cd /opt/anaokulu
chmod +x scripts/deploy-8089.sh
./scripts/deploy-8089.sh
```

Bu betik sırasıyla:
1. Gerekli tüm kalıcı dizinleri (`uploads`, `data`, `public/unlighthouse`) açar ve `1001:1001` izinlerini verir.
2. `.env` dosyasını `APP_PORT=8089` ile doğrular / oluşturur.
3. Docker Compose ile `anaokulu_app` ve `anaokulu_web` servislerini derler ve ayağa kaldırır.
4. `http://127.0.0.1:8089/healthz` uç noktasını sınayarak canlılık onayını verir.

### 4.2. Güncelleme ve Sıfır Kesinti Dağıtım (Zero-Downtime Pipeline)

Yeni bir sürüm yayınlandığında:

```bash
cd /opt/anaokulu

# 1. En güncel doğrulanmış kodu çekin
git pull origin main

# 2. Yeni uygulama imajını arka planda derleyin
APP_PORT=8089 docker compose build anaokulu_app

# 3. Uygulama servisini kesintisiz yenileyin (Healthcheck doğrulaması beklenir)
APP_PORT=8089 docker compose up -d --no-deps anaokulu_app

# 4. Nginx yapılandırmasını sıfır kesintiyle yeniden yükleyin
docker compose exec anaokulu_web nginx -s reload

# 5. Sağlık durumunu kontrol edin
curl -I http://127.0.0.1:8089/healthz
```

---

## 5. 🔒 Güvenlik, İzinler ve Veri Kalıcılığı

1. **Kullanıcı ve İzinler:**
   - Standalone Next.js sunucusu `nextjs:nodejs` (UID/GID 1001) kullanıcısı ile çalışmaktadır.
   - `/opt/anaokulu/data`, `/opt/anaokulu/uploads` ve `/opt/anaokulu/public/unlighthouse` dizinleri `chown -R 1001:1001` ve `chmod -R 775` ile korunmaktadır.
   - `cms-store.json` veritabanı dosyasının hem okunabilir hem de admin panelinden yazılabilir olduğu doğrulanmıştır.
2. **Kötü Amaçlı Dosya Yürütme Engeli:** `nginx.conf` içerisinde `/uploads/` dizininde hiçbir betiğin (`.php`, `.py`, `.sh`, `.cgi`) çalıştırılamayacağı kural altına alınmıştır (`deny all`).
3. **HTTP Güvenlik Başlıkları:** `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`.
4. **Hız Sınırlandırması (Rate Limiting):** API: `15 req/s`, Sayfalar: `40 req/s`.

---

## 6. 💾 Kalıcı Depolama ve Yedekleme

- **/opt/anaokulu/uploads:** Velilerin yüklediği evraklar, etkinlik fotoğrafları.
- **/opt/anaokulu/data:** CMS içerik veritabanı (`cms-store.json`).
- **/opt/anaokulu/public/unlighthouse:** Unlighthouse SEO ve hız raporları.

**Otomatik Günlük Yedekleme (Crontab):**
```cron
0 3 * * * /bin/bash /opt/anaokulu/scripts/backup.sh >> /var/log/anaokulu_backup.log 2>&1
```

---

*Seyfo Dayı tarafından canlı sunucuda (142.93.104.78) test edilmiş, onaylanmış ve devreye alınmıştır.*
