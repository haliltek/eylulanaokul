'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  darkTheme?: boolean;
}

/**
 * EYLÜL ANAOKULU | ÇOCUK AKADEMİSİ
 * Resmi Logo Kullanım Kılavuzu Madde 10: "Logoyu yeniden çizme, orijinal dosyayı kullan."
 *
 * Müşterinin sağladığı orijinal yüksek çözünürlüklü ve şeffaf PNG logo: `/images/logo.png`
 * Oranları, tipografisi ve renkleri %100 orijinaldir; responsive olarak esnetilmeden/sıkıştırılmadan ölçeklenir.
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  darkTheme = false,
}) => {
  // Yükseklik sınıfları (w-auto object-contain ile en-boy oranı %100 kilitli)
  const sizeClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-13 lg:h-14',
    lg: 'h-14 sm:h-16 lg:h-20',
  }[size] || 'h-11 sm:h-13 lg:h-14';

  return (
    <Link
      href="/"
      className={`inline-flex items-center group cursor-pointer select-none transition-transform hover:scale-[1.02] ${className}`}
      title="Eylül Anaokulu | Çocuk Akademisi - Anasayfa"
      aria-label="Eylül Anaokulu Çocuk Akademisi Anasayfa"
    >
      <img
        src="/images/logo.png"
        alt="Eylül Anaokulu | Çocuk Akademisi"
        className={`${sizeClasses} w-auto object-contain drop-shadow-sm transition-all duration-300 group-hover:drop-shadow`}
        style={darkTheme ? { filter: 'brightness(0) invert(1)' } : undefined}
      />
    </Link>
  );
};
