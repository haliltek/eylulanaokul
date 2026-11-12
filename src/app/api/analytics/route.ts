import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { isBot, parseAnalyticsEvent } from '@/lib/analyticsEvent';

export async function POST(req: NextRequest) {
  try {
    if (isBot(req.headers.get('user-agent'))) return NextResponse.json({ success: true });
    const raw = await req.text();
    if (raw.length > 4000) return NextResponse.json({ success: false }, { status: 413 });
    const host = (req.headers.get('x-forwarded-host') || req.headers.get('host') || '').split(':')[0];
    const event = parseAnalyticsEvent(JSON.parse(raw || '{}'), host);
    if (!event) return NextResponse.json({ success: false, error: 'Geçersiz analitik verisi' }, { status: 400 });
    await db.recordAnalyticsEvent(event);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
