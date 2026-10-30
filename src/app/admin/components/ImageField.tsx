'use client';

import React, { useState } from 'react';
import { MediaItem } from '@/types/cms';

interface MediaFieldProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  description?: string;
  mediaLibrary?: MediaItem[];
  acceptType?: 'image' | 'video' | 'all';
}

export const MediaField: React.FC<MediaFieldProps> = ({
  label,
  value,
  onChange,
  description,
  mediaLibrary = [],
  acceptType = 'image',
}) => {
  const [uploading, setUploading] = useState(false);
  const [showLibraryModal, setShowLibraryModal] = useState(false);

  const isVideo =
    value &&
    (value.endsWith('.mp4') ||
      value.endsWith('.webm') ||
      value.endsWith('.mov') ||
      value.includes('video'));

  const fileAcceptAttr =
    acceptType === 'video'
      ? 'video/mp4,video/webm,video/quicktime'
      : acceptType === 'all'
      ? 'image/*,video/*,application/pdf'
      : 'image/*';

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('altText', file.name);

      const res = await fetch('/api/media', {
        method: 'POST',
        body: formData,
      });
      const json = await res.json();
      if (json.success && json.data?.url) {
        onChange(json.data.url);
      } else {
        alert(`Dosya yüklenemedi: ${json.error || 'Bilinmeyen hata'}`);
      }
    } catch (err: any) {
      alert(`Yükleme hatası: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-700 block">
          {label}
        </label>
        {value && (
          <span className="text-[11px] font-mono text-slate-400 truncate max-w-xs">
            {value}
          </span>
        )}
      </div>

      {description && (
        <p className="text-[11px] text-slate-500 leading-tight">
          {description}
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-start gap-3 p-3 bg-slate-50/80 rounded-xl border border-slate-200">
        {/* Önizleme Kutusu */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-white border border-slate-200 shrink-0 overflow-hidden flex items-center justify-center relative">
          {value ? (
            isVideo ? (
              <video
                src={value}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={value}
                alt={label}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as any).src = '/images/logo.png';
                }}
              />
            )
          ) : (
            <div className="text-center p-2 text-[11px] text-slate-400">
              Dosya Yok
            </div>
          )}
        </div>

        {/* Aksiyon Butonları & URL Girişi */}
        <div className="flex-1 w-full space-y-2">
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={
              acceptType === 'video'
                ? '/uploads/video.mp4 veya https://...'
                : '/images/ornek.png veya https://...'
            }
            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-400"
          />

          <div className="flex flex-wrap items-center gap-2">
            <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold transition inline-flex items-center">
              <span>
                {uploading
                  ? 'Yükleniyor...'
                  : acceptType === 'video'
                  ? 'Video Dosyası Yükle'
                  : 'Dosya Yükle'}
              </span>
              <input
                type="file"
                accept={fileAcceptAttr}
                className="hidden"
                disabled={uploading}
                onChange={handleFileUpload}
              />
            </label>

            {mediaLibrary.length > 0 && (
              <button
                type="button"
                onClick={() => setShowLibraryModal(true)}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-[11px] font-semibold transition inline-flex items-center"
              >
                <span>Kütüphaneden Seç</span>
              </button>
            )}

            {value && (
              <button
                type="button"
                onClick={() => onChange('')}
                className="px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 text-[11px] font-semibold transition inline-flex items-center"
              >
                <span>Kaldır</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Kütüphaneden Seç Modalı */}
      {showLibraryModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-slate-800">
                  Medya Kütüphanesinden Seç
                </h4>
                <p className="text-[11px] text-slate-400">
                  Kullanmak istediğiniz dosyaya tıklayınız
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowLibraryModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-sm"
              >
                Kapat
              </button>
            </div>

            <div className="p-4 overflow-y-auto grid grid-cols-3 sm:grid-cols-4 gap-3">
              {mediaLibrary.map((item) => {
                const isItemVideo =
                  item.mimeType?.startsWith('video/') ||
                  item.url?.endsWith('.mp4') ||
                  item.url?.endsWith('.webm');

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      onChange(item.url);
                      setShowLibraryModal(false);
                    }}
                    className={`border rounded-xl p-1.5 cursor-pointer hover:border-slate-800 transition text-center group bg-slate-50 ${
                      value === item.url ? 'ring-2 ring-slate-900 border-slate-900' : 'border-slate-200'
                    }`}
                  >
                    <div className="h-20 w-full rounded-lg bg-slate-200 overflow-hidden flex items-center justify-center">
                      {isItemVideo ? (
                        <video
                          src={item.url}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <img
                          src={item.url}
                          alt={item.altText}
                          className="h-full w-full object-cover group-hover:scale-105 transition"
                        />
                      )}
                    </div>
                    <p className="text-[10px] text-slate-600 truncate mt-1 px-1">
                      {item.altText || item.filename}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowLibraryModal(false)}
                className="px-4 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-white"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ImageField: React.FC<MediaFieldProps> = (props) => {
  return <MediaField {...props} acceptType={props.acceptType || 'image'} />;
};