#!/bin/bash
# ==============================================================================
# Eylül Çocuk Akademisi - Otomatik Günlük Yedekleme Betiği
# ==============================================================================
set -e

BACKUP_DIR="/var/backups/anaokulu"
DATE=$(date +'%Y%m%d_%H%M%S')
SOURCE_DIR="/opt/anaokulu"

mkdir -p "$BACKUP_DIR"

echo "[$(date)] Yedekleme başlatılıyor..."

# Uploads ve Data arşivini sıkıştırarak yedekle
if [ -d "$SOURCE_DIR/uploads" ] || [ -d "$SOURCE_DIR/data" ]; then
    tar -czf "$BACKUP_DIR/anaokulu_backup_${DATE}.tar.gz" \
        -C "$SOURCE_DIR" uploads data
    echo "[$(date)] Yedekleme başarıyla tamamlandı: $BACKUP_DIR/anaokulu_backup_${DATE}.tar.gz"
else
    echo "[$(date)] Uyarı: uploads veya data dizini bulunamadı."
fi

# 7 günden eski yedekleri temizle (Döngüsel saklama)
find "$BACKUP_DIR" -type f -name "anaokulu_backup_*.tar.gz" -mtime +7 -delete
