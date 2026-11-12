import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const nutrition = await db.getNutritionPage();
    return NextResponse.json({ success: true, data: nutrition.weeklyMenu });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nutrition = { ...(await db.getNutritionPage()) };

    if (Array.isArray(body.weeklyMenu)) {
      nutrition.weeklyMenu = body.weeklyMenu;
    }
    if (body.dietitianNote && typeof body.dietitianNote === 'object') {
      nutrition.dietitianNote = body.dietitianNote;
    }

    const updated = await db.updatePage('nutrition', nutrition);
    return NextResponse.json({ success: true, message: 'Yemek menüsü güncellendi', data: updated.weeklyMenu });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
