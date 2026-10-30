'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export const AnalyticsTracker: React.FC = () => {
  const pathname = usePathname();
  const lastRecordedPath = useRef<string | null>(null);

  // 1. Sayfa Görüntüleme (Pageview) Takibi
  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin')) return;
    if (lastRecordedPath.current === pathname) return;
    lastRecordedPath.current = pathname;

    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'pageview', path: pathname }),
    }).catch(() => {
      // Sessiz hata yönetimi (kullanıcıyı rahatsız etmez)
    });
  }, [pathname]);

  // 2. Canlı Tıklama (Click / CTA) Takibi
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // a href="tel:", a href="mailto:", form submit, data-track veya önemli butonlar
      const telLink = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (telLink) {
        sendClickEvent(`Telefon Araması: ${telLink.href.replace('tel:', '')}`, telLink.href);
        return;
      }

      const mapLink = target.closest('a[href*="maps.google.com"]') as HTMLAnchorElement | null;
      if (mapLink) {
        sendClickEvent('Harita / Yol Tarifi', mapLink.href);
        return;
      }

      const submitBtn = target.closest('button[type="submit"]') as HTMLButtonElement | null;
      if (submitBtn) {
        const label = submitBtn.innerText || 'Form Gönderimi';
        sendClickEvent(`Form Butonu: ${label.trim().substring(0, 30)}`, pathname);
        return;
      }

      const trackedEl = target.closest('[data-track]') as HTMLElement | null;
      if (trackedEl) {
        const label = trackedEl.getAttribute('data-track') || 'Özel Aksiyon';
        sendClickEvent(label, pathname);
      }
    };

    const sendClickEvent = (label: string, targetPath?: string) => {
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'click', label, targetPath }),
      }).catch(() => {});
    };

    document.addEventListener('click', handleClick, { passive: true });
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return null;
};
