import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.resolve(process.cwd(), 'public', 'unlighthouse', 'index.html');
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Rapor henüz üretilmedi.', { status: 404 });
    }
    const html = fs.readFileSync(filePath, 'utf-8');
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (error: any) {
    return new NextResponse(`Hata: ${error.message}`, { status: 500 });
  }
}