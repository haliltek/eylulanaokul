'use client';

/**
 * Yönetim paneli SEO & analitik ekranları. Gösterilen tüm sayılar gerçek ölçümdür:
 * ziyaretçi verisi sitedeki ölçüm kodundan, teknik SEO taraması sayfaların gerçek HTML'inden,
 * Google sıralamaları ise yalnız SerpBear bağlantısı varsa SerpBear'dan gelir.
 */
import React, { useState } from 'react';
import type { SeoSuiteData, SerpKeywordItem } from '@/types/cms';

const nf = (n: number) => (Number(n) || 0).toLocaleString('tr-TR');
export const fmtDuration = (sec: number) => {
  const s = Math.round(Number(sec) || 0);
  if (!s) return '—';
  const m = Math.floor(s / 60);
  return m ? `${m} dk ${s % 60} sn` : `${s} sn`;
};
const fmtDate = (iso?: string) => {
  if (!iso) return '';
  const d = new Date(iso);
  return isNaN(d.getTime()) ? '' : d.toLocaleString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
};
const card = 'bg-white p-5 rounded-xl border border-slate-200 shadow-xs';
const empty = (text: string) => <div className="py-8 text-center text-xs text-slate-400">{text}</div>;

/** Son 14 gün (eksik günler 0). */
function last14(days: SeoSuiteData['analytics']['dailyTraffic']) {
  const map = new Map(days.map((d) => [d.date, d]));
  const out = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const key = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Istanbul' }).format(d);
    const v = map.get(key);
    out.push({ key, label: `${key.slice(8, 10)}.${key.slice(5, 7)}`, visitors: v?.visitors || 0, pageViews: v?.pageViews || 0, organic: v?.organic || 0 });
  }
  return out;
}

function TrafficChart({ days }: { days: SeoSuiteData['analytics']['dailyTraffic'] }) {
  const rows = last14(days);
  const max = Math.max(1, ...rows.map((r) => r.visitors));
  const total = rows.reduce((s, r) => s + r.visitors, 0);
  return (
    <div className={`${card} space-y-4`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <h3 className="font-bold text-slate-900 text-sm">Son 14 Gün Ziyaret & Arama Motoru Trafiği</h3>
          <p className="text-xs text-slate-500">Günlük ziyaret (koyu) ve bunların arama motorlarından gelen kısmı (yeşil)</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
          <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-xs bg-slate-900" />Ziyaret</span>
          <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-xs bg-emerald-500" />Arama motoru</span>
        </div>
      </div>
      {total === 0 ? (
        empty('Henüz ziyaret kaydı yok. Siteye gelen ziyaretçiler burada gün gün görünecek.')
      ) : (
        <div className="grid grid-cols-14 gap-1.5 h-48 items-end" style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}>
          {rows.map((r) => (
            <div key={r.key} className="flex flex-col items-center gap-1 h-full justify-end" title={`${r.label}: ${r.visitors} ziyaret, ${r.pageViews} görüntüleme, ${r.organic} arama motoru`}>
              <span className="text-[10px] font-bold text-slate-600">{r.visitors || ''}</span>
              <div className="w-full max-w-[28px] rounded-t bg-slate-900 relative" style={{ height: `${(r.visitors / max) * 100}%`, minHeight: r.visitors ? 3 : 0 }}>
                <div className="absolute bottom-0 left-0 right-0 rounded-t bg-emerald-500" style={{ height: r.visitors ? `${(r.organic / r.visitors) * 100}%` : 0 }} />
              </div>
              <span className="text-[9px] text-slate-500">{r.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/** Genel Bakış: KPI kartları, trafik grafiği, en çok gezilen sayfalar ve tıklamalar. */
export function DashboardAnalytics({ seo, onDetail }: { seo: SeoSuiteData; onDetail: () => void }) {
  const a = seo.analytics;
  const s = a.summary;
  const ranked = seo.serpbear.keywords.filter((k) => k.position > 0);
  const avgRank = ranked.length ? (ranked.reduce((x, k) => x + k.position, 0) / ranked.length).toFixed(1) : '';
  const since = a.counters?.since ? new Date(a.counters.since).toLocaleDateString('tr-TR') : '';
  const kpis = [
    { label: 'Tekil Ziyaretçi', value: nf(s.uniqueVisitors), note: since ? `${since} tarihinden beri` : 'Ölçüm başladı' },
    { label: 'Sayfa Görüntüleme', value: nf(s.totalPageViews), note: s.totalVisitors ? `${nf(s.totalVisitors)} ziyaret • ziyaret başına ${(s.totalPageViews / s.totalVisitors).toFixed(1)} sayfa` : 'Henüz ziyaret yok' },
    { label: 'Dönüşüm (Arama / WhatsApp / Form)', value: nf(s.conversionCount), note: s.totalVisitors ? `Ort. ziyaret süresi ${fmtDuration(s.avgSessionDurationSec)}` : '—' },
    {
      label: 'Teknik SEO Puanı',
      value: seo.unlighthouse.lastScanAt ? `${seo.unlighthouse.summary.seo} / 100` : '—',
      note: seo.unlighthouse.lastScanAt ? `${seo.unlighthouse.summary.totalPages} sayfa • ${new Date(seo.unlighthouse.lastScanAt).toLocaleDateString('tr-TR')}` : 'Henüz tarama yapılmadı',
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className={card}>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{k.label}</span>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">{k.value}</div>
            <span className="text-[11px] font-semibold text-slate-500 mt-1 block">{k.note}</span>
          </div>
        ))}
      </div>
      {avgRank && (
        <p className="text-xs text-slate-500 -mt-2">Takip edilen {ranked.length} anahtar kelimede Google ortalama sırası: <b>#{avgRank}</b></p>
      )}
      <TrafficChart days={a.dailyTraffic} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${card} space-y-3`}>
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">En Çok Gezilen Sayfalar</h4>
              <p className="text-[11px] text-slate-400">Görüntülenme ve ortalama kalma süresi</p>
            </div>
            <button onClick={onDetail} className="text-xs font-semibold text-slate-900 hover:underline">Detay &rarr;</button>
          </div>
          {a.pageMetrics.length === 0
            ? empty('Henüz sayfa görüntüleme yok.')
            : (
              <div className="divide-y divide-slate-100">
                {a.pageMetrics.slice(0, 5).map((pm) => (
                  <div key={pm.path} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-800 truncate">{pm.label}</p>
                      <p className="text-[10px] font-mono text-slate-400 truncate">{pm.path}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-slate-900">{nf(pm.views)} görüntüleme</p>
                      <p className="text-[10px] text-slate-400">Ort. {fmtDuration(pm.avgTimeSec)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
        <div className={`${card} space-y-3`}>
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Nereye Tıkladılar?</h4>
              <p className="text-[11px] text-slate-400">Telefon, WhatsApp, form ve yol tarifi tıklamaları</p>
            </div>
            <button onClick={onDetail} className="text-xs font-semibold text-slate-900 hover:underline">Detay &rarr;</button>
          </div>
          {a.clickEvents.length === 0
            ? empty('Henüz tıklama kaydı yok.')
            : (
              <div className="space-y-3 pt-1">
                {a.clickEvents.slice(0, 5).map((clk) => (
                  <div key={clk.id} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800">{clk.label}</span>
                      <span className="font-mono text-slate-600 font-bold">{nf(clk.count)} tık</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-900 rounded-full" style={{ width: `${Math.round((clk.count / (a.clickEvents[0]?.count || 1)) * 100)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ SEO Merkezi */

type SubTab = 'analytics' | 'audit' | 'serp';

export function SeoCenter({
  seo,
  onSeoChange,
  toast,
  initialTab = 'analytics',
  onAudit,
  auditing,
}: {
  seo: SeoSuiteData;
  onSeoChange: (patch: Partial<SeoSuiteData>) => void;
  toast: (m: string) => void;
  initialTab?: SubTab;
  onAudit: () => void;
  auditing: boolean;
}) {
  const [tab, setTab] = useState<SubTab>(initialTab);
  const tabs: { key: SubTab; label: string }[] = [
    { key: 'analytics', label: '1. Ziyaretçi & Tıklama Analitiği' },
    { key: 'audit', label: '2. Teknik SEO Taraması' },
    { key: 'serp', label: '3. Google Sıralama Takibi' },
  ];
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap border-b border-slate-200 gap-4 text-xs font-semibold">
        {tabs.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)} className={`pb-3 transition ${tab === t.key ? 'text-slate-900 font-bold border-b-2 border-slate-900' : 'text-slate-500 hover:text-slate-800'}`}>
            {t.label}
          </button>
        ))}
      </div>
      {tab === 'analytics' && <AnalyticsTab seo={seo} />}
      {tab === 'audit' && <AuditTab seo={seo} onAudit={onAudit} auditing={auditing} />}
      {tab === 'serp' && <SerpTab seo={seo} onSeoChange={onSeoChange} toast={toast} />}
    </div>
  );
}

function AnalyticsTab({ seo }: { seo: SeoSuiteData }) {
  const a = seo.analytics;
  const s = a.summary;
  const since = a.counters?.since ? fmtDate(a.counters.since) : '';
  return (
    <div className="space-y-6">
      <div className={card}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base">Özet</h3>
            <p className="text-xs text-slate-500">Sitedeki gerçek ziyaretçi ölçümü{since ? ` • ${since} tarihinden beri` : ''}. Arama motoru botları sayılmaz.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
          {[
            ['Tekil Ziyaretçi', nf(s.uniqueVisitors)],
            ['Ziyaret (Oturum)', nf(s.totalVisitors)],
            ['Sayfa Görüntüleme', nf(s.totalPageViews)],
            ['Ort. Ziyaret Süresi', fmtDuration(s.avgSessionDurationSec)],
            ['Hemen Çıkma', s.totalVisitors ? `%${s.bounceRate}` : '—'],
            ['Dönüşüm', nf(s.conversionCount)],
          ].map(([l, v]) => (
            <div key={l} className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-[11px] text-slate-500 font-semibold">{l}</p>
              <p className="text-lg font-black text-slate-900">{v}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={card}>
        <h3 className="font-bold text-slate-900 text-base">Trafik Kaynakları</h3>
        <p className="text-xs text-slate-500 mb-4">Ziyaretçilerin siteye hangi kanaldan geldiği</p>
        {a.trafficSources.length === 0
          ? empty('Henüz veri yok.')
          : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {a.trafficSources.map((src) => (
                <div key={src.source} className="p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-1">
                  <p className="text-xs text-slate-500 font-semibold">{src.source}</p>
                  <p className="text-xl font-black text-slate-900">{nf(src.sessions)} ziyaret</p>
                  <p className="text-xs font-bold text-emerald-600">%{src.percentage}</p>
                </div>
              ))}
            </div>
          )}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h4 className="font-bold text-slate-900 text-sm">Sayfa Görüntüleme Tablosu</h4>
          <p className="text-xs text-slate-500">“Tekil” = aynı ziyarette sayfanın ilk açılışı; hemen çıkma = o sayfaya girip başka sayfa açmadan ayrılanlar</p>
        </div>
        {a.pageMetrics.length === 0 ? empty('Henüz sayfa görüntüleme yok.') : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Sayfa</th>
                  <th className="py-3 px-4 text-center">Görüntüleme</th>
                  <th className="py-3 px-4 text-center">Tekil</th>
                  <th className="py-3 px-4 text-center">Ort. Süre</th>
                  <th className="py-3 px-4 text-center">Giriş</th>
                  <th className="py-3 px-4 text-center">Hemen Çıkma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {a.pageMetrics.map((pm) => (
                  <tr key={pm.path} className="hover:bg-slate-50">
                    <td className="py-3 px-4">
                      <p className="font-semibold text-slate-900">{pm.label}</p>
                      <p className="font-mono text-[11px] text-slate-500">{pm.path}</p>
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-slate-800">{nf(pm.views)}</td>
                    <td className="py-3 px-4 text-center text-slate-600">{nf(pm.uniqueVisitors)}</td>
                    <td className="py-3 px-4 text-center font-mono text-slate-700">{fmtDuration(pm.avgTimeSec)}</td>
                    <td className="py-3 px-4 text-center text-slate-600">{nf(pm.entrances || 0)}</td>
                    <td className="py-3 px-4 text-center font-semibold text-slate-600">{pm.entrances ? `%${pm.bounceRate}` : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h4 className="font-bold text-slate-900 text-sm">Tıklama Tablosu</h4>
          <p className="text-xs text-slate-500">Telefon, WhatsApp, e-posta, yol tarifi ve form butonu tıklamaları</p>
        </div>
        {a.clickEvents.length === 0 ? empty('Henüz tıklama kaydı yok.') : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Aksiyon</th>
                  <th className="py-3 px-4">Hedef</th>
                  <th className="py-3 px-4">Kategori</th>
                  <th className="py-3 px-4 text-center">Tıklama</th>
                  <th className="py-3 px-4 text-right">Son Tıklama</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {a.clickEvents.map((ce) => (
                  <tr key={ce.id} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-semibold text-slate-900">{ce.label}</td>
                    <td className="py-3 px-4 font-mono text-[11px] text-slate-500 max-w-[220px] truncate">{ce.targetPath}</td>
                    <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[10px]">{ce.category}</span></td>
                    <td className="py-3 px-4 text-center font-bold text-slate-900">{nf(ce.count)}</td>
                    <td className="py-3 px-4 text-right text-slate-400 text-[11px]">{fmtDate(ce.lastClickedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function AuditTab({ seo, onAudit, auditing }: { seo: SeoSuiteData; onAudit: () => void; auditing: boolean }) {
  const u = seo.unlighthouse;
  const pages = u.pages || [];
  const avg = (f: (p: (typeof pages)[number]) => number) => (pages.length ? Math.round(pages.reduce((s, p) => s + f(p), 0) / pages.length) : 0);
  const withIssues = pages.filter((p) => p.issues.length > 0).length;
  const scoreCls = (n: number) => (n >= 90 ? 'bg-emerald-100 text-emerald-800' : n >= 70 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800');
  return (
    <div className="space-y-6">
      <div className={`${card} flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
        <div>
          <h3 className="font-bold text-slate-900 text-base">Teknik SEO Taraması</h3>
          <p className="text-xs text-slate-500">
            Sitenin tüm sayfalarını ve blog yazılarını açıp başlık, açıklama, H1, görsel alt metni, canonical, dizinleme, mobil uyum ve paylaşım etiketlerini kontrol eder.
            {u.lastScanAt ? ` Son tarama: ${fmtDate(u.lastScanAt)}` : ' Henüz tarama yapılmadı.'}
          </p>
        </div>
        <button onClick={onAudit} disabled={auditing} className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 disabled:opacity-60 shrink-0">
          {auditing ? 'Taranıyor…' : 'Tüm Siteyi Şimdi Tara'}
        </button>
      </div>
      {pages.length === 0 ? (
        <div className={card}>{empty('“Tüm Siteyi Şimdi Tara” butonuyla ilk taramayı başlatın.')}</div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['SEO Kontrol Puanı', `${u.summary.seo} / 100`, 'Geçilen kontrollerin oranı'],
              ['Sorunlu Sayfa', `${withIssues} / ${pages.length}`, 'En az bir eksiği olan sayfa'],
              ['Ort. Sunucu Yanıtı', `${avg((p) => p.responseTimeMs)} ms`, 'Sayfanın üretilip indirilme süresi'],
              ['Ort. Sayfa Boyutu', `${avg((p) => p.pageSizeKb || 0)} KB`, 'HTML boyutu (görseller hariç)'],
            ].map(([l, v, n]) => (
              <div key={l} className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase">{l}</span>
                <div className="text-2xl font-black text-slate-900 mt-1">{v}</div>
                <span className="text-[10px] text-slate-400">{n}</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Sayfa</th>
                    <th className="py-3 px-4 text-center">Puan</th>
                    <th className="py-3 px-4 text-center">Yanıt</th>
                    <th className="py-3 px-4">Bulunan Sorunlar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pages.map((p) => (
                    <tr key={p.path} className="align-top hover:bg-slate-50">
                      <td className="py-3 px-4 max-w-[280px]">
                        <a href={p.path} target="_blank" rel="noreferrer" className="font-semibold text-slate-900 hover:underline line-clamp-1">{p.title}</a>
                        <p className="font-mono text-[11px] text-slate-500 truncate">{p.path}</p>
                      </td>
                      <td className="py-3 px-4 text-center"><span className={`px-2 py-1 rounded font-bold ${scoreCls(p.seoScore)}`}>{p.seoScore}</span></td>
                      <td className="py-3 px-4 text-center font-mono text-slate-600">{p.responseTimeMs} ms</td>
                      <td className="py-3 px-4">
                        {p.issues.length === 0 ? (
                          <span className="text-emerald-700 font-semibold">Sorun yok</span>
                        ) : (
                          <ul className="space-y-0.5 text-slate-700">{p.issues.map((i) => <li key={i}>• {i}</li>)}</ul>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[11px] text-slate-400">Başlık ve açıklama sorunlarını Sayfa Editörü’nde ilgili sayfanın en altındaki “SEO Ayarları” bölümünden, blog yazılarında ise yazı düzenleme ekranından düzeltebilirsiniz.</p>
        </>
      )}
    </div>
  );
}

function SerpTab({ seo, onSeoChange, toast }: { seo: SeoSuiteData; onSeoChange: (p: Partial<SeoSuiteData>) => void; toast: (m: string) => void }) {
  const sb = seo.serpbear;
  const [kw, setKw] = useState('');
  const [url, setUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const [showSettings, setShowSettings] = useState(!sb.serpBearUrl);
  const [settings, setSettings] = useState({ domain: sb.domain || '', serpBearUrl: sb.serpBearUrl || '', apiKey: sb.apiKey ? '••••••' : '' });
  const connected = !!sb.serpBearUrl && !!sb.apiKey;

  const call = async (body: Record<string, unknown>) => {
    const res = await fetch('/api/seo/serp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    return res.json();
  };
  const refresh = async () => {
    setBusy(true);
    try {
      const j = await call({ action: 'refresh' });
      if (j.success) { onSeoChange({ serpbear: j.data }); toast(j.message); } else toast(j.error);
    } catch (e: any) { toast(`Hata: ${e.message}`); } finally { setBusy(false); }
  };
  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!kw.trim()) return;
    const j = await call({ action: 'add', keyword: kw, url });
    if (j.success) { onSeoChange({ serpbear: { ...sb, keywords: [j.data, ...sb.keywords] } }); setKw(''); setUrl(''); toast(j.message); } else toast(j.error);
  };
  const del = async (k: SerpKeywordItem) => {
    if (!confirm(`“${k.keyword}” takipten çıkarılsın mı?`)) return;
    const j = await call({ action: 'delete', id: k.id });
    if (j.success) onSeoChange({ serpbear: { ...sb, keywords: sb.keywords.filter((x) => x.id !== k.id) } });
  };
  const saveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    const j = await call({ action: 'update_settings', ...settings });
    if (j.success) { onSeoChange({ serpbear: { ...j.data, keywords: sb.keywords } }); toast(j.message); setShowSettings(false); } else toast(j.error);
  };

  return (
    <div className="space-y-6">
      <div className={`${card} flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
        <div>
          <h3 className="font-bold text-slate-900 text-base">Google Anahtar Kelime Sıralama Takibi</h3>
          <p className="text-xs text-slate-500">
            {connected
              ? `SerpBear bağlı • Alan adı: ${sb.domain}${sb.lastUpdated ? ` • Son güncelleme: ${fmtDate(sb.lastUpdated)}` : ''}`
              : 'Gerçek Google sıralamaları için SerpBear bağlantısı gerekir. Bağlantı yokken kelimeleri takip listesine ekleyebilirsiniz; sıralama “ölçülmedi” görünür.'}
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button onClick={() => setShowSettings((v) => !v)} className="px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50">Bağlantı Ayarları</button>
          <button onClick={refresh} disabled={busy || !connected} className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 disabled:opacity-50">
            {busy ? 'Sorgulanıyor…' : 'Sıralamaları Güncelle'}
          </button>
        </div>
      </div>

      {showSettings && (
        <form onSubmit={saveSettings} className={`${card} grid grid-cols-1 md:grid-cols-3 gap-3 text-xs`}>
          <label className="space-y-1"><span className="font-semibold text-slate-600">Alan adı</span>
            <input value={settings.domain} onChange={(e) => setSettings({ ...settings, domain: e.target.value })} placeholder="eylulanaokulu.com.tr" className="w-full p-2 border border-slate-200 rounded-lg" /></label>
          <label className="space-y-1"><span className="font-semibold text-slate-600">SerpBear adresi</span>
            <input value={settings.serpBearUrl} onChange={(e) => setSettings({ ...settings, serpBearUrl: e.target.value })} placeholder="https://serpbear.sizinalanadiniz.com" className="w-full p-2 border border-slate-200 rounded-lg" /></label>
          <label className="space-y-1"><span className="font-semibold text-slate-600">SerpBear API anahtarı</span>
            <input value={settings.apiKey} onChange={(e) => setSettings({ ...settings, apiKey: e.target.value })} className="w-full p-2 border border-slate-200 rounded-lg" /></label>
          <div className="md:col-span-3 flex justify-end"><button className="px-4 py-2 rounded-lg bg-[#0E4984] text-white font-semibold">Kaydet</button></div>
        </form>
      )}

      <form onSubmit={add} className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center gap-3">
        <input value={kw} onChange={(e) => setKw(e.target.value)} placeholder="Anahtar kelime (ör. kars anaokulu)" className="px-3 py-2 text-xs border border-slate-200 rounded-lg flex-1 min-w-[220px]" />
        <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Hedef sayfa (isteğe bağlı, ör. /kayit-ve-basvuru)" className="px-3 py-2 text-xs border border-slate-200 rounded-lg flex-1 min-w-[220px]" />
        <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700">Takibe Ekle</button>
      </form>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {sb.keywords.length === 0 ? empty('Takip edilen anahtar kelime yok.') : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Anahtar Kelime</th>
                  <th className="py-3 px-4 text-center">Sıra</th>
                  <th className="py-3 px-4 text-center">Değişim</th>
                  <th className="py-3 px-4 text-center">En İyi</th>
                  <th className="py-3 px-4">Sıralanan Sayfa</th>
                  <th className="py-3 px-4 text-center">Son Kontrol</th>
                  <th className="py-3 px-4 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sb.keywords.map((k) => {
                  const diff = k.position && k.previousPosition ? k.previousPosition - k.position : 0;
                  return (
                    <tr key={k.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-semibold text-slate-900">{k.keyword}<span className="ml-1.5 text-[10px] font-normal text-slate-400">{k.device === 'mobile' ? 'mobil' : 'masaüstü'}</span></td>
                      <td className="py-3 px-4 text-center">
                        {k.position > 0 ? <span className="inline-block px-2.5 py-1 rounded-md bg-slate-900 text-white font-black">#{k.position}</span>
                          : <span className="text-slate-400">{k.lastChecked ? 'İlk 100’de yok' : 'Ölçülmedi'}</span>}
                      </td>
                      <td className="py-3 px-4 text-center font-bold">
                        {diff > 0 ? <span className="text-emerald-600">+{diff}</span> : diff < 0 ? <span className="text-rose-600">{diff}</span> : <span className="text-slate-300">—</span>}
                      </td>
                      <td className="py-3 px-4 text-center text-slate-600">{k.bestPosition > 0 ? `#${k.bestPosition}` : '—'}</td>
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-500 max-w-xs truncate">{k.url || '—'}</td>
                      <td className="py-3 px-4 text-center text-slate-500">{k.lastChecked ? new Date(k.lastChecked).toLocaleDateString('tr-TR') : '—'}</td>
                      <td className="py-3 px-4 text-right"><button onClick={() => del(k)} className="text-rose-600 hover:text-rose-800 font-semibold">Sil</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
