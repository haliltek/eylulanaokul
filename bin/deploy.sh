#!/usr/bin/env bash
# Eylul Cocuk Akademisi - sunucu dagitimi (/opt/anaokulu)
# Kullanim:  cd /opt/anaokulu && git fetch origin main && git show origin/main:bin/deploy.sh > /root/deploy-anaokulu.sh && bash /root/deploy-anaokulu.sh
set -euo pipefail
cd /opt/anaokulu

if docker compose version >/dev/null 2>&1; then DC="docker compose"; else DC="docker-compose"; fi

echo "=== 1/5 Yerel degisiklik kontrolu ==="
if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "UYARI: sunucuda commit edilmemis degisiklik var:"; git status --short --untracked-files=no; exit 1
fi
echo temiz

echo "=== 2/5 Icerik yedegi ==="
mkdir -p /root/backup-anaokulu
if [ -f data/cms-store.json ]; then
  cp data/cms-store.json "/root/backup-anaokulu/cms-store-$(date +%F-%H%M).json"
  ls -1t /root/backup-anaokulu | tail -n +15 | while read -r f; do rm -f "/root/backup-anaokulu/$f"; done
  echo "yedek alindi"
fi

echo "=== 3/5 Kod indiriliyor ==="
git fetch origin main
git checkout main
git merge --ff-only origin/main
git log --oneline -3

echo "=== 4/5 Derleme ve yeniden baslatma ==="
$DC up -d --build

echo "=== 5/5 Kontrol ==="
for i in $(seq 1 30); do
  code=$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:8089/ || true)
  [ "$code" = "200" ] && break
  sleep 3
done
for p in / /iletisim /kayit-ve-basvuru /blog /api/health; do
  printf '%-26s -> %s\n' "$p" "$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:8089$p")"
done
[ "$code" = "200" ] && echo TAMAM || { echo "HATA: site 200 donmedi"; $DC logs --tail=40 anaokulu_app; exit 1; }
