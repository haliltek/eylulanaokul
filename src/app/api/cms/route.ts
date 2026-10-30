import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');

    if (!section) {
      const fullStore = await db.getStore();
      return NextResponse.json({ success: true, data: fullStore });
    }

    let data;
    switch (section) {
      case 'settings':
        data = await db.getSiteSettings();
        break;
      case 'home':
        data = await db.getHomePage();
        break;
      case 'about':
        data = await db.getAboutPage();
        break;
      case 'campus':
        data = await db.getCampusPage();
        break;
      case 'bem':
        data = await db.getBemPage();
        break;
      case 'english':
        data = await db.getEnglishPage();
        break;
      case 'activities':
        data = await db.getActivitiesPage();
        break;
      case 'nutrition':
        data = await db.getNutritionPage();
        break;
      case 'parents':
        data = await db.getParentsPage();
        break;
      case 'enrollment':
        data = await db.getEnrollmentPage();
        break;
      case 'contact':
        data = await db.getContactPage();
        break;
      case 'activityVideos':
        data = await db.getActivityVideos();
        break;
      case 'courseSchedule':
        data = await db.getCourseSchedule();
        break;
      case 'monthlyMealList':
        data = await db.getMonthlyMealList();
        break;
      default:
        return NextResponse.json({ success: false, error: 'Bilinmeyen bölüm' }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { section, data } = body;

    if (!section || !data) {
      return NextResponse.json({ success: false, error: 'Bölüm ve veri zorunludur' }, { status: 400 });
    }

    let updated;
    switch (section) {
      case 'settings':
        updated = await db.updateSiteSettings(data);
        break;
      case 'home':
        updated = await db.updateHomePage(data);
        break;
      case 'about':
        updated = await db.updateAboutPage(data);
        break;
      case 'campus':
        updated = await db.updateCampusPage(data);
        break;
      case 'bem':
        updated = await db.updateBemPage(data);
        break;
      case 'english':
        updated = await db.updateEnglishPage(data);
        break;
      case 'activities':
        updated = await db.updateActivitiesPage(data);
        break;
      case 'nutrition':
        updated = await db.updateNutritionPage(data);
        break;
      case 'parents':
        updated = await db.updateParentsPage(data);
        break;
      case 'enrollment':
        updated = await db.updateEnrollmentPage(data);
        break;
      case 'contact':
        updated = await db.updateContactPage(data);
        break;
      case 'activityVideos': {
        const store = await db.getStore();
        store.activityVideos = data;
        await (db as any).persist();
        updated = store.activityVideos;
        break;
      }
      case 'courseSchedule':
        updated = await db.updateCourseSchedule(data);
        break;
      case 'monthlyMealList':
        updated = await db.updateMonthlyMealList(data);
        break;
      default:
        return NextResponse.json({ success: false, error: 'Bilinmeyen bölüm' }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: 'İçerik başarıyla güncellendi', data: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
