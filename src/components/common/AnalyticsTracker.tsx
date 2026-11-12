'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Gerçek ziyaretçi ölçümü: sayfa görüntüleme, sayfada kalma süresi, trafik kaynağı ve önemli tıklamalar.
 * Çerez kullanılmaz; tarayıcıda anonim bir ziyaretçi işareti ve 30 dakikalık oturum bilgisi tutulur.
 */
const SESSION_MS = 30 * 60 * 1000;
const VID_KEY = 'ev_vid';
const SES_KEY = 'ev_ses';

interface Session { last: number; count: number; entry: string; paths: string[] }

function storage(): Storage | null {
  try { return window.localStorage; } catch { return null; }
}

function send(payload: Record<string, unknown>, beacon = false) {
  const body = JSON.stringify(payload);
  try {
    if (beacon && navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics', new Blob([body], { type: 'application/json' }));
      return;
    }
    fetch('/api/analytics', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {});
  } catch {
    /* sessiz */
  }
}

export const AnalyticsTracker: React.FC = () => {
  const pathname = usePathname();
  const current = useRef<{ path: string; start: number; visible: number } | null>(null);

  // Sayfadan ayrılırken geçirilen süreyi gönder
  const flush = () => {
    const c = current.current;
    if (!c) return;
    const seconds = Math.round((c.visible + (document.visibilityState === 'visible' ? Date.now() - c.start : 0)) / 1000);
    if (seconds >= 1) send({ type: 'leave', path: c.path, seconds }, true);
    current.current = null;
  };

  // Sayfa görüntüleme
  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin')) return;
    flush();
    const ls = storage();
    const now = Date.now();
    const newVisitor = !!ls && !ls.getItem(VID_KEY);
    if (ls && newVisitor) ls.setItem(VID_KEY, String(now));

    let ses: Session | null = null;
    try { ses = JSON.parse(ls?.getItem(SES_KEY) || 'null'); } catch { ses = null; }
    const newSession = !ses || now - ses.last > SESSION_MS;
    if (newSession || !ses) ses = { last: now, count: 0, entry: pathname, paths: [] };
    ses.count += 1;
    ses.last = now;
    const newPageInSession = !ses.paths.includes(pathname);
    if (newPageInSession && ses.paths.length < 50) ses.paths.push(pathname);
    try { ls?.setItem(SES_KEY, JSON.stringify(ses)); } catch { /* sessiz */ }

    let referrer = '';
    let utmSource = '';
    if (newSession) {
      try { referrer = document.referrer ? new URL(document.referrer).hostname : ''; } catch { referrer = ''; }
      utmSource = new URLSearchParams(window.location.search).get('utm_source') || '';
    }

    // Başlığın güncellenmesi için kısa bir gecikme
    const t = window.setTimeout(() => {
      send({
        type: 'pageview',
        path: pathname,
        title: document.title,
        newVisitor,
        newSession,
        newPageInSession,
        secondPage: ses!.count === 2,
        entryPath: ses!.entry,
        referrer,
        utmSource,
      });
    }, 300);
    current.current = { path: pathname, start: now, visible: 0 };
    return () => window.clearTimeout(t);
  }, [pathname]);

  // Görünürlük değişimi / sayfadan çıkış
  useEffect(() => {
    const onVis = () => {
      const c = current.current;
      if (!c) return;
      if (document.visibilityState === 'hidden') {
        c.visible += Date.now() - c.start;
        const seconds = Math.round(c.visible / 1000);
        if (seconds >= 1) send({ type: 'leave', path: c.path, seconds }, true);
        c.visible = 0;
      } else {
        c.start = Date.now();
      }
    };
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('pagehide', flush);
    return () => {
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('pagehide', flush);
    };
  }, []);

  // Önemli tıklamalar
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const a = target.closest('a') as HTMLAnchorElement | null;
      const href = a?.getAttribute('href') || '';
      const click = (label: string, category: string, targetPath = href) => send({ type: 'click', label, category, targetPath });

      if (href.startsWith('tel:')) return click(`Telefon: ${href.slice(4)}`, 'Telefon');
      if (/wa\.me|whatsapp\.com/.test(href)) return click('WhatsApp ile yazma', 'WhatsApp');
      if (href.startsWith('mailto:')) return click(`E-posta: ${href.slice(7)}`, 'E-posta');
      if (/maps\.google|google\.[a-z.]+\/maps|goo\.gl\/maps|maps\.app/.test(href)) return click('Harita / Yol Tarifi', 'Harita');

      const submit = target.closest('button[type="submit"]') as HTMLButtonElement | null;
      if (submit) return click(`Form: ${(submit.innerText || 'Gönder').trim().slice(0, 40)}`, 'Form', pathname || '');

      const tracked = target.closest('[data-track]') as HTMLElement | null;
      if (tracked) return click(tracked.getAttribute('data-track') || 'Özel Aksiyon', 'Etkileşim', pathname || '');
    };
    document.addEventListener('click', handleClick, { passive: true });
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return null;
};
