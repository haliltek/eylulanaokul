'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { list, hasLink } from '@/lib/content';
import { VideoEmbed, toEmbedUrl } from '@/components/common/VideoEmbed';
import type { videosContent } from '@/data/content/videos';

type VideosData = typeof videosContent;
type Video = VideosData['items'][number];

/** YouTube videolarında kapak görseli verilmemişse YouTube'un kendi küçük resmini kullanır. */
function thumbOf(v: Video): string {
  if (v.thumbnail) return v.thumbnail;
  const m = v.videoUrl?.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
  return m ? `https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg` : '';
}

export const ActivityVideosView: React.FC<{ data: VideosData }> = ({ data }) => {
  const [selected, setSelected] = useState<Video | null>(null);
  const videos = list(data?.items).filter((v) => v.videoUrl);

  return (
    <div className="w-full bg-[#FEFAF2]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-12">
        <header className="text-center max-w-3xl mx-auto pt-4 border-b border-amber-200/50 pb-8">
          {data?.badge && (
            <div className="inline-block px-3.5 py-1 rounded-full bg-amber-100/70 text-[#0A3B69] text-xs font-bold uppercase tracking-wider mb-3">
              {data.badge}
            </div>
          )}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A3B69] tracking-tight leading-tight">{data?.title}</h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl mx-auto font-sans">{data?.description}</p>
        </header>

        {videos.length === 0 ? (
          <p className="text-center text-slate-500 text-sm py-12">{data?.emptyText}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videos.map((video, i) => {
              const thumb = thumbOf(video);
              return (
                <article
                  key={video.id || i}
                  onClick={() => setSelected(video)}
                  className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-lg border border-amber-100/80 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                      {thumb && <img src={thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm text-[#0A3B69] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#E2AD50] group-hover:text-white transition-all duration-300">
                          <span className="font-serif text-xl pl-0.5">▶</span>
                        </div>
                      </div>
                      {video.category && (
                        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#0A3B69] text-[10px] font-bold uppercase tracking-wider">
                          {video.category}
                        </div>
                      )}
                      {video.date && <div className="absolute bottom-3 right-4 text-white/90 text-[11px] font-medium">{video.date}</div>}
                    </div>
                    <div className="p-6">
                      <h2 className="font-serif text-lg font-bold text-[#0A3B69] group-hover:text-[#E2AD50] transition-colors line-clamp-1 leading-snug">{video.title}</h2>
                      <p className="text-slate-600 text-xs leading-relaxed mt-2.5 line-clamp-2">{video.description}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-[#E2AD50]">
                    <span>{data?.playText}</span>
                    <span>→</span>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {hasLink(data?.ctaLink) && (
          <div className="text-center">
            <Link href={data.ctaLink} className="inline-block px-6 py-3 rounded-full bg-[#E2AD50] hover:bg-[#d49e42] text-white font-bold text-xs uppercase tracking-wider transition-colors">
              {data.ctaText}
            </Link>
          </div>
        )}

        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelected(null)}>
            <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                aria-label="Kapat"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-base cursor-pointer"
              >
                ✕
              </button>
              <div className="mb-4 pr-10">
                {selected.category && (
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-[#0A3B69] text-xs font-bold uppercase tracking-wider">{selected.category}</span>
                )}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A3B69] mt-2">{selected.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">{selected.description}</p>
              </div>
              <VideoEmbed url={selected.videoUrl} poster={toEmbedUrl(selected.videoUrl) ? undefined : selected.thumbnail} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
