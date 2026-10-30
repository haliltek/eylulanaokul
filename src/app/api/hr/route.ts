import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const jobs = await db.getJobPositions();
    return NextResponse.json({ success: true, data: jobs });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const app = await db.addJobApplication(body);
    return NextResponse.json({ success: true, message: 'İş başvurusu alındı', data: app });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
