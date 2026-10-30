import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import db from '@/lib/db';
import { validateUploadedFile } from '@/lib/security';

export async function GET() {
  try {
    const media = await db.getMediaItems();
    return NextResponse.json({ success: true, data: media });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const altText = (formData.get('altText') as string) || '';

    if (!file) {
      return NextResponse.json({ success: false, error: 'Dosya yüklenmedi' }, { status: 400 });
    }

    // Dosya boyutu ve format güvenlik kontrolü (100 MB maks, video/resim/pdf desteği)
    const validation = validateUploadedFile(file);
    if (!validation.valid) {
      return NextResponse.json({ success: false, error: validation.error }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = path.resolve(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${uniqueSuffix}-${safeName}`;
    const filePath = path.join(uploadsDir, filename);

    fs.writeFileSync(filePath, buffer);

    const mediaUrl = `/uploads/${filename}`;
    const tags = ['yüklenen'];
    if (validation.category) {
      tags.push(validation.category);
    }

    const newMedia = await db.addMediaItem({
      filename,
      originalName: file.name,
      url: mediaUrl,
      mimeType: file.type || (validation.category === 'video' ? 'video/mp4' : 'image/jpeg'),
      sizeBytes: file.size,
      altText: altText || file.name,
      tags
    });

    return NextResponse.json({
      success: true,
      message: `${validation.category === 'video' ? 'Video' : 'Dosya'} başarıyla yüklendi`,
      data: newMedia
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID parametresi zorunludur' }, { status: 400 });
    }

    await db.deleteMediaItem(id);
    return NextResponse.json({ success: true, message: 'Medya silindi' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
