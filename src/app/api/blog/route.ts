import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const blogData = await db.getBlogData();
    return NextResponse.json({ success: true, data: blogData });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, post, id, blogData } = body;

    if (action === 'save_post') {
      if (!post || !post.title) {
        return NextResponse.json({ success: false, error: 'Yazı başlığı zorunludur' }, { status: 400 });
      }
      const saved = await db.saveBlogPost(post);
      return NextResponse.json({ success: true, message: 'Blog yazısı kaydedildi', data: saved });
    }

    if (action === 'delete_post') {
      if (!id) {
        return NextResponse.json({ success: false, error: 'ID zorunludur' }, { status: 400 });
      }
      await db.deleteBlogPost(id);
      return NextResponse.json({ success: true, message: 'Blog yazısı silindi' });
    }

    if (action === 'update_all') {
      if (!blogData) {
        return NextResponse.json({ success: false, error: 'Veri zorunludur' }, { status: 400 });
      }
      const updated = await db.updateBlogData(blogData);
      return NextResponse.json({ success: true, message: 'Blog ayarları güncellendi', data: updated });
    }

    return NextResponse.json({ success: false, error: 'Geçersiz işlem' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}