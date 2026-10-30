import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { CrmLead, LeadStatus } from '@/types/cms';

export async function GET() {
  try {
    const leads = await db.getCrmLeads();
    return NextResponse.json({ success: true, data: leads });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.parentName || !body.phone) {
      return NextResponse.json({ success: false, error: 'Veli adı ve telefon zorunludur' }, { status: 400 });
    }

    const saved = await db.createCrmLead({
      parentName: body.parentName,
      phone: body.phone,
      email: body.email,
      childName: body.childName || '',
      childAge: Number(body.childAge) || 4,
      childBirthDate: body.childBirthDate,
      desiredClass: body.desiredClass || '4 Yaş Grubu',
      source: body.source || 'web_form',
      status: (body.status as LeadStatus) || 'yeni',
      notes: body.notes || ''
    });

    return NextResponse.json({ success: true, message: 'Başvurunuz başarıyla alındı', data: saved });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: 'Kayıt ID zorunludur' }, { status: 400 });
    }

    const updated = await db.updateCrmLead(id, updates);
    return NextResponse.json({ success: true, message: 'Başvuru güncellendi', data: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Silinecek mesaj ID zorunludur' }, { status: 400 });
    }

    const deleted = await db.deleteCrmLead(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: 'Mesaj bulunamadı' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Mesaj başarıyla silindi' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
