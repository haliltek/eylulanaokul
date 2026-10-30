'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/common/Logo';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const json = await res.json();
      if (json.success) {
        window.location.href = '/admin';
      } else {
        setError(json.error || 'Giriş başarısız.');
      }
    } catch {
      setError('Bağlantı hatası.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#0E4984] to-[#0a2f56] text-white p-12">
        <div className="bg-white/95 rounded-xl px-4 py-3 w-fit"><Logo size="sm" /></div>
        <div>
          <h1 className="text-4xl font-black leading-tight">Yönetim Konsolu</h1>
          <p className="mt-4 text-white/75 max-w-md text-sm leading-relaxed">
            Web sitesi içeriklerini, blog yazılarını, medya kütüphanesini, yemek listesini ve gelen başvuruları tek yerden yönetin.
          </p>
        </div>
        <p className="text-xs text-white/50">© Eylül Çocuk Akademisi Kars</p>
      </div>
      <div className="flex items-center justify-center p-6">
        <form onSubmit={submit} className="w-full max-w-sm bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-5">
          <div className="lg:hidden"><Logo size="sm" /></div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Giriş Yap</h2>
            <p className="text-xs text-slate-500 mt-1">Devam etmek için yönetici şifresini girin.</p>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600">Şifre</label>
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E4984]/30 focus:border-[#0E4984]"
            />
          </div>
          {error && <p className="text-xs font-semibold text-red-600">{error}</p>}
          <button
            disabled={loading || !password}
            className="w-full py-2.5 rounded-lg bg-[#0E4984] text-white text-sm font-bold hover:bg-[#0a3a6b] disabled:opacity-50 transition"
          >
            {loading ? 'Giriş yapılıyor…' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  );
}
