import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const posts = await db.getSocialPosts();
    return NextResponse.json({ success: true, data: posts });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const post = await db.saveSocialPost(body);
    return NextResponse.json({ success: true, message: 'Sosyal medya gönderisi planlandı', data: post });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
