import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'announcements';

    if (type === 'announcements') {
      const announcements = await db.getAnnouncements();
      return NextResponse.json({ success: true, data: announcements });
    } else if (type === 'portfolio') {
      const studentId = searchParams.get('studentId') || undefined;
      const portfolio = await db.getStudentPortfolios(studentId);
      return NextResponse.json({ success: true, data: portfolio });
    }

    return NextResponse.json({ success: false, error: 'Geçersiz tip' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (type === 'announcement') {
      const saved = await db.addAnnouncement(data);
      return NextResponse.json({ success: true, message: 'Duyuru eklendi', data: saved });
    }

    return NextResponse.json({ success: false, error: 'Desteklenmeyen işlem' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
