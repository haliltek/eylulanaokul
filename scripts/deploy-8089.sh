#!/bin/bash
# ==============================================================================
# Eylül Çocuk Akademisi — 142.93.104.78 Port 8089 Tek Komut Dağıtım Betiği
# Hazırlayan: Seyfo Dayı (Lead Linux System Administrator & SRE)
# ==============================================================================
set -e

# Renk Tanımları
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

TARGET_PORT="8089"
SERVER_IP="142.93.104.78"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo -e "${BLUE}===================================================================${NC}"
echo -e "${BLUE}   EYLÜL ÇOCUK AKADEMİSİ — PORT ${TARGET_PORT} DAĞITIM VE KURULUM MOTORU   ${NC}"
echo -e "${BLUE}===================================================================${NC}"
echo -e "Çalışma Dizini: ${YELLOW}${PROJECT_DIR}${NC}"
echo -e "Hedef Sunucu:   ${YELLOW}${SERVER_IP}:${TARGET_PORT}${NC}\n"

# ------------------------------------------------------------------------------
# 1. Paketleme Modu (--package argümanı ile çağrılırsa)
# Kurumsal Wi-Fi ağında (192.168.5.32) Port 22 engelli olduğunda kullanılır.
# ------------------------------------------------------------------------------
if [ "$1" == "--package" ]; then
    echo -e "${YELLOW}[1/1] Sunucuya aktarılacak temiz dağıtım paketi oluşturuluyor...${NC}"
    cd "${PROJECT_DIR}"
    ARCHIVE_NAME="anaokulu-deploy-8089.tar.gz"

    tar --exclude='node_modules' \
        --exclude='.next' \
        --exclude='.git' \
        --exclude='*.log' \
        --exclude='anaokulu-deploy-8089.tar.gz' \
        -czf "${ARCHIVE_NAME}" .

    echo -e "${GREEN}✔ Paket başarıyla oluşturuldu:${NC} ${PROJECT_DIR}/${ARCHIVE_NAME}"
    echo -e "${BLUE}Sunucuya aktarma ve çalıştırma adımları:${NC}"
    echo -e "  1. Bu arşivi sunucudaki /opt/anaokulu dizinine aktarın."
    echo -e "  2. Sunucuda çalıştırın: tar -xzf ${ARCHIVE_NAME} && ./scripts/deploy-8089.sh"
    exit 0
fi

# ------------------------------------------------------------------------------
# 2. Ön Gereksinim Kontrolleri (Docker & Docker Compose)
# ------------------------------------------------------------------------------
echo -e "${YELLOW}[1/5] Docker ve ortam kontrolleri yapılıyor...${NC}"

if ! command -v docker &> /dev/null; then
    echo -e "${RED}Hata: Docker kurulu değil veya PATH üzerinde bulunamadı!${NC}"
    exit 1
fi

if docker compose version &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker compose"
elif command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker-compose"
else
    echo -e "${RED}Hata: Docker Compose bulunamadı!${NC}"
    exit 1
fi
echo -e "${GREEN}✔ Docker ve Compose hazır: ${DOCKER_COMPOSE_CMD}${NC}"

# ------------------------------------------------------------------------------
# 3. Kalıcı Dizinler ve İzinlerin Hazırlanması
# ------------------------------------------------------------------------------
echo -e "${YELLOW}[2/5] Kalıcı volume dizinleri oluşturuluyor ve izinler ayarlanıyor...${NC}"
mkdir -p "${PROJECT_DIR}/uploads"
mkdir -p "${PROJECT_DIR}/data"
mkdir -p "${PROJECT_DIR}/public/unlighthouse"
mkdir -p "${PROJECT_DIR}/logs/nginx"

# Next.js standalone kullanıcısı için (UID/GID 1001) izinler
if [ "$EUID" -eq 0 ]; then
    chown -R 1001:1001 "${PROJECT_DIR}/uploads" "${PROJECT_DIR}/data" "${PROJECT_DIR}/public/unlighthouse"
    chmod -R 775 "${PROJECT_DIR}/uploads" "${PROJECT_DIR}/data" "${PROJECT_DIR}/public/unlighthouse"
    echo -e "${GREEN}✔ Klasör sahipliği UID 1001 (nextjs) olarak ayarlandı.${NC}"
else
    echo -e "${YELLOW}! Root kullanıcısı olunmadığı için chown atlandı, izinler kontrol edildi.${NC}"
fi

# ------------------------------------------------------------------------------
# 4. Çevre Değişkenleri (.env) Doğrulaması
# ------------------------------------------------------------------------------
echo -e "${YELLOW}[3/5] .env yapılandırması kontrol ediliyor...${NC}"
if [ ! -f "${PROJECT_DIR}/.env" ]; then
    if [ -f "${PROJECT_DIR}/.env.example" ]; then
        cp "${PROJECT_DIR}/.env.example" "${PROJECT_DIR}/.env"
        echo -e "${GREEN}✔ .env.example dosyasından .env üretildi.${NC}"
    else
        cat << 'EOF' > "${PROJECT_DIR}/.env"
APP_PORT=8089
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_APP_URL=http://142.93.104.78:8089
NEXTAUTH_SECRET=anaokulu_secure_jwt_random_secret_change_in_production
NEXTAUTH_URL=http://142.93.104.78:8089
UPLOADS_DIR=./uploads
DATA_DIR=./data
UNLIGHTHOUSE_DIR=./public/unlighthouse
EOF
        echo -e "${GREEN}✔ Yeni .env dosyası oluşturuldu (Port 8089).${NC}"
    fi
else
    # Port 8089 güvencesi
    if ! grep -q "APP_PORT=8089" "${PROJECT_DIR}/.env"; then
        sed -i 's/APP_PORT=.*/APP_PORT=8089/' "${PROJECT_DIR}/.env" || echo "APP_PORT=8089" >> "${PROJECT_DIR}/.env"
    fi
    echo -e "${GREEN}✔ .env dosyası doğrulandı (APP_PORT=8089).${NC}"
fi

# ------------------------------------------------------------------------------
# 5. Konteynerleri Derleme ve Ayağa Kaldırma
# ------------------------------------------------------------------------------
echo -e "${YELLOW}[4/5] Konteynerler derleniyor ve ayağa kaldırılıyor (Port: ${TARGET_PORT})...${NC}"
cd "${PROJECT_DIR}"

${DOCKER_COMPOSE_CMD} build --pull anaokulu_app
${DOCKER_COMPOSE_CMD} up -d --remove-orphans

echo -e "${GREEN}✔ Konteynerler başarıyla başlatıldı.${NC}"

# ------------------------------------------------------------------------------
# 6. Sağlık Denetimi ve Canlılık Testi (Healthcheck Verification)
# ------------------------------------------------------------------------------
echo -e "${YELLOW}[5/5] Sağlık denetimi ve canlılık doğrulaması yapılıyor...${NC}"

MAX_RETRIES=12
RETRY_COUNT=0
HEALTHY=false

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    RETRY_COUNT=$((RETRY_COUNT+1))
    echo -ne "Sağlık kontrolü bekleniyor (${RETRY_COUNT}/${MAX_RETRIES})...\r"
    
    if curl -s -f "http://127.0.0.1:${TARGET_PORT}/healthz" > /dev/null 2>&1; then
        HEALTHY=true
        break
    fi
    sleep 3
done

echo ""

if [ "$HEALTHY" = true ]; then
    echo -e "${GREEN}===================================================================${NC}"
    echo -e "${GREEN}  ✔ DAĞITIM BAŞARIYLA TAMAMLANDI VE SERVİSLER ÇALIŞIYOR!           ${NC}"
    echo -e "${GREEN}===================================================================${NC}"
    echo -e "Ana Web Sitesi:          ${BLUE}http://${SERVER_IP}:${TARGET_PORT}/${NC}"
    echo -e "Türkçe Admin Paneli:     ${BLUE}http://${SERVER_IP}:${TARGET_PORT}/admin${NC}"
    echo -e "Unlighthouse Canlı Rapor:${BLUE}http://${SERVER_IP}:${TARGET_PORT}/unlighthouse/index.html${NC}"
    echo -e "Nginx Sağlık Kontrolü:   ${BLUE}http://${SERVER_IP}:${TARGET_PORT}/healthz${NC}"
    echo -e "\nKonteyner Durumları:"
    ${DOCKER_COMPOSE_CMD} ps
else
    echo -e "${YELLOW}Uyarı: Sağlık kontrolü zaman aşımına uğradı, konteyner loglarını inceleyin:${NC}"
    echo -e "Komut: ${DOCKER_COMPOSE_CMD} logs --tail=50"
fi
