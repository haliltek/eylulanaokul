import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const settings = await db.getSiteSettings();
    return NextResponse.json({ success: true, data: settings });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const updated = await db.updateSiteSettings(body);
    return NextResponse.json({ success: true, message: 'Ayarlar güncellendi', data: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
