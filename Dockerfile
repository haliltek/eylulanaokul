# ==============================================================================
# Eylül Çocuk Akademisi - Next.js Standalone Production Dockerfile
# Multi-stage optimized for minimal footprint, maximum security & Core Web Vitals
# ==============================================================================

# 1. Base Image
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat wget curl
ENV NEXT_TELEMETRY_DISABLED=1

# 2. Dependencies Stage
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN \
  if [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci --include=dev; \
  else npm install --include=dev; \
  fi

# 3. Builder Stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1

# Next.js derlemesi (Next 15 App Router & Standalone çıktı)
RUN \
  if [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  elif [ -f yarn.lock ]; then yarn build; \
  else npm run build; \
  fi

# 4. Production Runner Stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Güvenlik: Uygulama asla root kullanıcısıyla çalıştırılamaz
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Kalıcı veri, uploads ve unlighthouse dizinleri oluşturulup izinleri verilir
RUN mkdir -p /app/public/uploads /app/public/unlighthouse /app/data && \
    chown -R nextjs:nodejs /app/public/uploads /app/public/unlighthouse /app/data

# Standalone derleme çıktılarını kopyala
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Güvenlik kullanıcısına geçiş
USER nextjs

EXPOSE 3000

# Konteyner seviyesi sağlık denetimi (Healthcheck)
HEALTHCHECK --interval=20s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/api/health || exit 1

CMD ["sh", "-c", "if [ -f server.js ]; then node server.js; elif [ -f app/server.js ]; then node app/server.js; else node $(find . -name server.js | head -n 1); fi"]
