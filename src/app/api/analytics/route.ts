import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, path, label, targetPath } = body;

    if (!type || (type !== 'pageview' && type !== 'click')) {
      return NextResponse.json({ success: false, error: 'Geçersiz analitik tipi' }, { status: 400 });
    }

    await db.recordAnalyticsEvent({
      type,
      path,
      label,
      targetPath
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
