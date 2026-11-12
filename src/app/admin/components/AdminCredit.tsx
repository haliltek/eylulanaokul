import React from 'react';

/** Yönetim paneli alt bilgisi: tasarımcı imzası. */
export function AdminCredit({ className = '' }: { className?: string }) {
  return (
    <p className={`text-center text-xs text-slate-400 ${className}`}>
      Design by{' '}
      <a
        href="https://www.linkedin.com/in/halil-tek-09019790/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-slate-500 hover:text-[#0E4984] hover:underline"
      >
        Halil TEK
      </a>{' '}
      © 2026
    </p>
  );
}
