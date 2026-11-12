'use client';

import React, { useState } from 'react';
import { list } from '@/lib/content';
import type { scheduleContent } from '@/data/content/schedule';

type ScheduleData = typeof scheduleContent;
const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri'] as const;
const isImage = (url: string) => /\.(png|jpe?g|webp|gif|avif)(\?|$)/i.test(url) || url.includes('googleusercontent');

export const CourseScheduleView: React.FC<{ data: ScheduleData }> = ({ data }) => {
  const groups = list(data?.groups);
  const [selectedGroup, setSelectedGroup] = useState<string>(groups[Math.min(1, groups.length - 1)]?.id || '');
  const [modalOpen, setModalOpen] = useState(false);
  const active = groups.find((g) => g.id === selectedGroup) || groups[0];
  const doc = data?.document;
  const labels = data?.dayLabels;

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

        {/* Program belgesi (panelden yüklenen PDF / görsel) */}
        {doc?.file && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold text-[#E2AD50] uppercase tracking-wider">{doc.badge}</span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0A3B69] mt-1">{doc.title}</h2>
              <p className="text-xs text-slate-500 mt-1 max-w-lg">{doc.text}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
              {isImage(doc.file) ? (
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="flex-1 md:flex-initial px-5 py-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-[#0A3B69] font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  {doc.viewButtonText}
                </button>
              ) : (
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial px-5 py-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-[#0A3B69] font-bold text-xs uppercase tracking-wider transition text-center"
                >
                  {doc.viewButtonText}
                </a>
              )}
              <a
                href={doc.file}
                download
                className="flex-1 md:flex-initial px-5 py-2.5 rounded-full bg-[#0A3B69] hover:bg-[#1A3358] text-white font-bold text-xs uppercase tracking-wider transition shadow-sm text-center"
              >
                {doc.downloadButtonText}
              </a>
            </div>
          </div>
        )}

        {groups.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {groups.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setSelectedGroup(g.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  active?.id === g.id ? 'bg-[#0A3B69] text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-amber-100/60 border border-amber-200/70'
                }`}
              >
                {g.name}
              </button>
            ))}
          </div>
        )}

        {active && list(active.rows).length > 0 && (
          <div className="overflow-x-auto rounded-3xl bg-white border border-amber-100 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-amber-50/60 text-[#0A3B69] border-b border-amber-100 font-bold">
                  <th className="py-4 px-4 sm:px-6 w-36 font-serif">{labels?.time}</th>
                  {DAYS.map((d) => (
                    <th key={d} className="py-4 px-3 sm:px-4 font-serif">{labels?.[d]}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {list(active.rows).map((row, idx) => (
                  <tr key={row.id || idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50 hover:bg-amber-50/30 transition-colors'}>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0A3B69] whitespace-nowrap bg-amber-50/20">{row.time}</td>
                    {DAYS.map((d) => (
                      <td key={d} className="py-3.5 px-3 sm:px-4 text-slate-700">{row[d]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {data?.noteText && (
          <div className="rounded-2xl bg-amber-100/30 border border-amber-200/50 p-6 text-xs text-slate-600 leading-relaxed">
            <strong className="text-[#0A3B69] block mb-1">{data.noteTitle}</strong>
            {data.noteText}
          </div>
        )}

        {modalOpen && doc?.file && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setModalOpen(false)}>
            <div className="relative max-w-4xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                aria-label="Kapat"
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-base cursor-pointer"
              >
                ✕
              </button>
              <h3 className="font-serif text-lg font-bold text-[#0A3B69] mb-3">{doc.modalTitle}</h3>
              <img src={doc.file} alt={doc.title} className="w-full max-h-[75vh] object-contain rounded-xl" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
