'use client';

import React from 'react';

/** YouTube / Vimeo bağlantısını ya da yüklenen video dosyasını (.mp4/.webm/.mov) oynatır. */
export function toEmbedUrl(url: string): string | null {
  const u = url.trim();
  const yt = u.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0`;
  const vm = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;
  return null;
}

export const VideoEmbed: React.FC<{ url: string; poster?: string; className?: string }> = ({ url, poster, className }) => {
  const embed = toEmbedUrl(url);
  return (
    <div className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-xl ${className || ''}`}>
      {embed ? (
        <iframe
          src={embed}
          title="Video"
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <video src={url} poster={poster} controls autoPlay playsInline className="absolute inset-0 w-full h-full object-contain" />
      )}
    </div>
  );
};
