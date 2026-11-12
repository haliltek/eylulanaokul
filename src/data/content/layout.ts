/** Üst menü, alt bilgi (footer) ve sabit butonlar. Yönetim panelinde "Menü & Alt Bilgi" altında düzenlenir. */
export const layoutContent = {
  header: {
    ctaText: 'Okul Ziyareti Planla',
    ctaLink: '/kayit-ve-basvuru',
    mobileCallLabel: 'Doğrudan Arayın:',
  },
  menu: [
    { id: 'm-home', label: 'Anasayfa', href: '/', subLinks: [] as { id: string; label: string; href: string; desc: string }[] },
    {
      id: 'm-model',
      label: 'Eğitim Modeli',
      href: '/egitim-modeli/bem',
      subLinks: [
        { id: 'm-model-1', label: 'BEM (Bütünleştirilmiş Eğitim)', href: '/egitim-modeli/bem', desc: '6 Gelişim Alanı ve BEM Çarkı' },
        { id: 'm-model-2', label: 'All Day English', href: '/egitim-modeli/all-day-english', desc: 'Tam Gün Doğal İngilizce İletişim' },
        { id: 'm-model-3', label: 'Zengin Etkinlik Dünyası', href: '/etkinlikler', desc: 'Sanat, Müzik, Jimnastik ve Kodlama Etkinlikleri' },
      ],
    },
    {
      id: 'm-content',
      label: 'İçerikler',
      href: '/etkinlikler',
      subLinks: [
        { id: 'm-content-1', label: 'Etkinlikler', href: '/etkinlikler', desc: 'Sanat, Müzik, Jimnastik ve Branş Etkinlikleri' },
        { id: 'm-content-2', label: 'Etkinlik Videoları', href: '/icerikler/etkinlik-videolari', desc: 'Okulumuzdaki Eğlenceli Etkinlik Kayıtları' },
        { id: 'm-content-3', label: 'Özel Eylül Anaokulu Ders Programı', href: '/icerikler/ders-programi', desc: 'Haftalık ve Yaş Gruplarına Göre Ders Planı' },
      ],
    },
    { id: 'm-blog', label: 'Blog', href: '/blog', subLinks: [] },
    {
      id: 'm-school',
      label: 'Okulumuz',
      href: '/okulumuz',
      subLinks: [
        { id: 'm-school-1', label: 'Okulumuz & Kampüs', href: '/okulumuz', desc: 'Sınıflarımız, Bahçe ve Yaşam Alanı' },
        { id: 'm-school-2', label: 'Hakkımızda & Değerler', href: '/hakkimizda', desc: '12 Yıllık Sevgi, İlgi ve Pedagojik Özen' },
        { id: 'm-school-3', label: 'Doğal & Dengeli Beslenme', href: '/beslenme', desc: 'Diyetisyen Onaylı Günlük Pişen Menü' },
      ],
    },
    {
      id: 'm-parents',
      label: 'Velilerimiz',
      href: '/velilerimiz-icin',
      subLinks: [
        { id: 'm-parents-1', label: 'Velilerimiz İçin Bilgi Rehberi', href: '/velilerimiz-icin', desc: 'Okul-Aile İletişimi, Duyurular ve Etkinlikler' },
        { id: 'm-parents-2', label: 'Haftalık Yemek Menüsü', href: '/beslenme', desc: 'Pazartesi - Cuma Detaylı Menü Takvimi' },
      ],
    },
    { id: 'm-enroll', label: 'Kayıt', href: '/kayit-ve-basvuru', subLinks: [] },
    { id: 'm-contact', label: 'İletişim', href: '/iletisim', subLinks: [] },
  ],
  footer: {
    about:
      'Çocuklarımızın doğuştan gelen merak duygusunu besleyerek, deneyimleyerek öğrenmelerini ve kendi yeteneklerini güvenle keşfetmelerini sağlıyoruz. Sevgi, ilgi ve pedagojik özenle geleceğe hazırlanıyoruz.',
    columns: [
      {
        id: 'f-col-1',
        title: 'Eğitim & Yaklaşım',
        links: [
          { id: 'f1-1', label: 'Bütünleştirilmiş Eğitim Modeli (BEM)', href: '/egitim-modeli/bem' },
          { id: 'f1-2', label: 'All Day English (Tam Gün İngilizce)', href: '/egitim-modeli/all-day-english' },
          { id: 'f1-3', label: 'Zengin Etkinlik Dünyası', href: '/etkinlikler' },
          { id: 'f1-4', label: 'Doğal ve Dengeli Beslenme Menüsü', href: '/beslenme' },
          { id: 'f1-5', label: 'Okulumuz & Kampüs Alanları', href: '/okulumuz' },
        ],
      },
      {
        id: 'f-col-2',
        title: 'Veliler & Kurumsal',
        links: [
          { id: 'f2-1', label: 'Eğitim & Ebeveynlik Blogu', href: '/blog' },
          { id: 'f2-2', label: 'Etkinlik Videoları', href: '/icerikler/etkinlik-videolari' },
          { id: 'f2-3', label: 'Ders Programı Çizelgesi', href: '/icerikler/ders-programi' },
          { id: 'f2-4', label: 'Aylık Yemek Listesi', href: '/icerikler/aylik-yemek-listesi' },
          { id: 'f2-5', label: 'Velilerimiz İçin Bilgi Rehberi', href: '/velilerimiz-icin' },
          { id: 'f2-6', label: 'Haftalık Yemek Menüsü Takvimi', href: '/beslenme' },
          { id: 'f2-7', label: 'Kayıt Süreci ve Okul Ziyareti', href: '/kayit-ve-basvuru' },
          { id: 'f2-8', label: 'Hakkımızda & 12 Yıllık Deneyim', href: '/hakkimizda' },
        ],
      },
    ],
    contactTitle: 'İletişim & Randevu',
    hoursTitle: 'Çalışma Saatleri:',
    weekdayLabel: 'Hafta İçi:',
    saturdayLabel: 'Cumartesi:',
    brandText: 'EYLÜL ÇOCUK AKADEMİSİ ANAOKULU',
    copyright: 'Tüm Hakları Saklıdır.',
    legalLinks: [
      { id: 'fl-1', label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
      { id: 'fl-2', label: 'KVKK Aydınlatma Metni', href: '/kvkk-aydinlatma-metni' },
      { id: 'fl-3', label: 'Çerezler', href: '/cerez-politikasi' },
      { id: 'fl-4', label: 'İletişim', href: '/iletisim' },
    ],
  },
  floating: {
    appointmentText: 'Hızlı Randevu Al',
    appointmentLink: '/kayit-ve-basvuru',
    whatsappMessage: 'Merhaba, Eylül Çocuk Akademisi hakkında bilgi almak ve okul ziyareti planlamak istiyorum.',
    whatsappTitle: 'WhatsApp ile Bilgi Alın',
  },
};
