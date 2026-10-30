'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  description: string;
}

export const ActivityVideosView: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: 'v1',
      title: 'İngilizce Şarkı ve Drama Çember Saati',
      category: 'All Day English',
      date: 'Ekim 2026',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXJD_3d19T3mQ0xzBqu8_DswbaPm-S9hzi0sJYL3_hVzSHNBdmqhsF_TBq2XmAfGy879A0-5oXilRvEl7jhBPecGNeMjIglDP15witIYbLsW1l34yza_YvcjkjhooZ6YU3Th9tzcNirn_IrHs8wMd6bXYTUqDYEj2sxFw9l2NVxFrWe-ZR0ZQ2Li37ajTvZ3qxDpR4thWeLnnbeiLiazasuMtOCvmXa4rBfHG0dIQxeKc6rro1d-DI',
      description: '4-5 yaş grubumuzun anadili gibi konuşan eğitimcilerimizle birlikte eğlenerek uyguladığı çift dilli etkileşim etkinliği.',
    },
    {
      id: 'v2',
      title: 'Sonbahar Yaprak Baskısı ve Seramik Atölyesi',
      category: 'Görsel Sanatlar',
      date: 'Ekim 2026',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwu52rU0SIT8ikWDgkNHi7XkWQjVRwqmgfd_ntKBvMaIA-4Fe-rK0FsIKMGGEik7NqqRCdDGzdBzEY4AczBOAa6EzJXBisddPqt9KcpTIk1E0p6kQ45so3YYdwcUY9Pq0xI3dCao9P5I-yMs_dbB-Ov5LmqBk31O-6o3jqCp2pUpJrVaaLHJcP_HbNPGVWTBWBhUvMJvOi07_cZrFuPB33n5iZnr9ReIvpkKqofc6pfc3741l-XFfh',
      description: 'Çocuklarımızın doğadan topladıkları yapraklarla renk teorisi ve dokunsal algılarını geliştirdikleri yaratıcı sanat anları.',
    },
    {
      id: 'v3',
      title: 'Jimnastik ve Denge Parkuru Heyecanı',
      category: 'Beden Eğitimi',
      date: 'Eylül 2026',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK9BJZq33Vq-ESZ01DJCa2vSHyrbqa9yUU-jbyIsazRqGsCa_DSGpW9sfC8XTfxR7tKlVxKakm5PIYRg75I6KSUbyLdXvehcT54GI-amuzszYTjXtUvXmbEm2mlXVzd7p4QYjFXP0I6Y6sziiVlhk_OSlEwfTmxZ8apyBbSoRyAtc41kqr5CuLbOiGAJXl5k7U2aTvdhxk29d4Y_HeM6ZTQEVaHMjEa8iXApOcm_MdqXNNZ296O6QO',
      description: 'Kaba motor becerileri, esneklik ve özgüveni destekleyen özel kauçuk zeminli jimnastik hareket parkurumuz.',
    },
    {
      id: 'v4',
      title: 'Orff Ritim ve Melodi Koro Çalışması',
      category: 'Müzik & Orff',
      date: 'Eylül 2026',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9b2ttUoepKG3ryo5WNpOKOTa91-qYn8OZ1YEa8JeYSSioD9Agof0sG2Rs3CYP28A2vo1hAHklv4ZpSSc2PJ3rPJeHUTu-qIsVdHVrgOuHtwyYIViwvhue5S2UJJ__fgNQU1uF3JXfRc56j65BLkidQnbwmGBDN1nvbn4oKJXjBnh1H1gWXJIqIqsQaGhwopJ1JQ4yUSMCrm5NH-bhyi1IKHPBolv3is2s76wEc4AjL8zv7e4zwRW9',
      description: 'Ritim çubukları, perküsyon aletleri ve koro uyumuyla çocukların işitsel dikkat ve müzik kulağını geliştiren etkinlik.',
    },
    {
      id: 'v5',
      title: 'Bahçede Organik Tarım ve Toprakla Temas',
      category: 'Fen ve Doğa',
      date: 'Ekim 2026',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPMzZ_tBqU1IxDoftuw0MfXIwyuEfXM90xiEopFj1byhY_a-psn19stclGKRMCqT0__THHYaN2PqPaliMGdhZzAbjpgTGgyDotH8RRKK8NvVpDbwmog6cTspzJCGRAwcQRvpFWBuyNEGGXKnvSSJtT4WaM2UkRCQ3NhYMsAxkhl2zFwcjgts32UYNO0L4pmrBK5Bkuuwsum54m9ScGNgOmUlFT61HYhmMAgDIX8gs2kPbFsRoKacbK',
      description: 'Özel Eylül Anaokulu geniş bahçesinde tohum ekimi, sulama ve bitki büyümesini bizzat deneyimleme.',
    },
    {
      id: 'v6',
      title: 'Robotik Kodlama ve Mantık Oyunları',
      category: 'STEM & Kodlama',
      date: 'Ekim 2026',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdbTHYbC_qjZAZjl8Mv2W5b7r5HXTOeFCo5n3iWUsKQJrZfrk1bxCcsNKXUGkogFmrHL1nLOj11byrxOYI4Zocp0PNO7_VB1Wzes7UwFD_G9oLR7SLhiR0uQsOl0YGPN0zSLQgzx3VerJ8QRYNYj0tWZS3T8KPJCJNIq-Wg7pRKpBqJg3OBkOBJyPUhzklPbJxwzfcZfgTHVcB-A5-VNR5KJqJZ2BMiTyzG1PPAjMcY9E5OBC6fzRE',
      description: 'Renkli ahşap bloklar ve etkileşimli zemin labirentleri üzerinden erken yaş algoritmik düşünme seansı.',
    },
  ];

  return (
    <div className="w-full bg-[#FEFAF2]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-12">
        {/* İkonsuz Editoryal Başlık */}
        <header className="text-center max-w-3xl mx-auto pt-4 border-b border-amber-200/50 pb-8">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-100/70 text-[#0A3B69] text-xs font-bold uppercase tracking-wider mb-3">
            ÖZEL EYLÜL ANAOKULU ETKİNLİK ARŞİVİ
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A3B69] tracking-tight leading-tight">
            Etkinlik Videoları
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl mx-auto font-sans">
            Miniklerimizin her gün yeni bir keşifle parlayan gözlerini, drama, müzik, spor ve çift dilli İngilizce etkinliklerimizdeki neşeli anlarını izleyin.
          </p>
        </header>

        {/* Video Kartları Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video) => (
            <article
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-lg border border-amber-100/80 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  
                  {/* Editoryal Minimal Play Göstergesi */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm text-[#0A3B69] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#E2AD50] group-hover:text-white transition-all">
                      <span className="font-serif text-xl pl-0.5">▶</span>
                    </div>
                  </div>

                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#0A3B69] text-[10px] font-bold uppercase tracking-wider">
                    {video.category}
                  </div>
                  <div className="absolute bottom-3 right-4 text-white/90 text-[11px] font-medium">
                    {video.date}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-serif text-lg font-bold text-[#0A3B69] group-hover:text-[#E2AD50] transition-colors line-clamp-1 leading-snug">
                    {video.title}
                  </h2>
                  <p className="text-slate-600 text-xs leading-relaxed mt-2.5 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-[#E2AD50]">
                <span>Videoyu Başlat</span>
                <span>→</span>
              </div>
            </article>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-base cursor-pointer"
              >
                ✕
              </button>

              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-[#0A3B69] text-xs font-bold uppercase tracking-wider">
                  {selectedVideo.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A3B69] mt-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  {selectedVideo.description}
                </p>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-amber-100 flex items-center justify-center">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 flex flex-col items-center justify-center text-white p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mb-3">
                    ▶
                  </div>
                  <p className="text-base font-bold font-serif">
                    Özel Eylül Anaokulu Etkinlik Kaydı
                  </p>
                  <p className="text-xs text-slate-300 mt-1 max-w-md">
                    Admin paneli üzerinden yüklenen video dosyaları ve YouTube/Vimeo içerikleri burada yüksek çözünürlükle yayınlanır.
                  </p>
                  <Link
                    href="/kayit-ve-basvuru"
                    onClick={() => setSelectedVideo(null)}
                    className="mt-5 px-6 py-2.5 rounded-full bg-[#E2AD50] hover:bg-[#d49e42] text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Atölyelerimizi Bizzat Ziyaret Edin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
