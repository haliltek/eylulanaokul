/** Okulumuz / Kampüs içeriği */
export const campusContent = {
  header: {
    badge: 'Fiziksel İmkânlar ve Yerleşke',
    title: 'Okulumuz',
    subtitle: 'Güvenli, Sağlıklı ve İlham Veren Bir Ortam',
    description:
      "Eylül Çocuk Akademisi'nde çocuklarımızın güvenle büyümesi, öğrenmesi ve sosyalleşmesi için her detay titizlikle planlandı. Doğal ışık alan sınıflarımız ve geniş yeşil bahçemizle çocuklara ikinci bir ev sıcaklığı sunuyoruz.",
  },
  areas: [
    {
      id: 'area-1',
      category: 'Doğal Işıklı Sınıflar',
      title: 'Ferah ve Aydınlık Sınıflarımız',
      desc: 'Çocuk ergonomisine uygun, güvenli malzemelerle donatılmış, doğal ışık alan geniş öğrenme alanları.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUEjo9ZUCqHf32UKFjkA5D2wQxvju9qjMX-D_MSPE2QORQFbLCdNZY7u6C8jhkLy3XvDQWo8iJ9pkyPKQS5-3r-y_NAzdX2mlNA1sUsrphVqX_M9hKuI2kXrPqBTYwboAulTXIkrcGAm0h3pajyjECeRqEuXMAhwFlbpoq87qupfDRgWRn-rN0ACRSj6w79BOs4BhXwL0tRnliB70m0cB0Htwvosw54J6XVfj9_dhYNOdGZXyd6ktQ',
    },
    {
      id: 'area-2',
      category: 'Okuma & Dinlenme',
      title: 'Sıcak Masal & Oyun Köşesi',
      desc: 'Duygusal rahatlama ve kitap sevgisini pekiştiren yumuşak zeminli okuma alanı.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwMJCgn6ONAX8QrFWd3YuXmrO7E3u5FWK3Xb545MR2GGXliEjEFhlR7aHtTI9iCxhHCyN88wCP6odSqfPeewCFVxBqYrkwA_ujTL71cNGmd1thiPbKesfqsMYE3LJdg4LiOmFiv0r69YZyE0FomHTo7M4Hapw7VyaP0RcaP708kYLg_Pf159bzU9eEM0INlZ92ABD9832X915nwdU10OmDCalxOh5i1nIgRSFRNaKb2DwqetABr0d3',
    },
    {
      id: 'area-3',
      category: 'Görsel Sanatlar',
      title: 'Yaratıcı Sanat & Tasarım Alanı',
      desc: 'Boya, seramik ve özgür el sanatları etkinlikleriyle motor becerilerini geliştiren ferah sınıf ortamı.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiGXd78fKBnSqMEf7jV3gsncuEhdTLbXW25Qvz3veuUd8RltUEpmJQ3XFAooO0YWQPFXL89MAknNYXDBioG6ylW0TAy3UexK83SUpSxCG5FNz957ZFHR3Y0GFCLMTDYI2mQxTqHaXMsQX0FzEAYLHeariuItq4_YeVn5KcB3APoYzDeJcjfyUzSB6XFLqLuShrIWRMuxIoWwqM3b1x7p2bgYCHAQ3jkQeD4cT-Gdmc7QF3FeY1nGE4',
    },
    {
      id: 'area-4',
      category: 'Açık Hava & Doğa',
      title: 'Doğal Çim Bahçe & Oyun Parkı',
      desc: 'Toprakla temas eden organik tarım bahçesi, doğal çim zeminli kaydırak ve hareket parkuru.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcVimafQaD2S34RBokdm0KCeZdebZPPUEHhW7eh93oDvxsYe7FTRIv8JMMkK8GE2eJ7iNuyZq6W7YJKdKFWsSHMCqsV2BPLOCt7V98AUERJ2kB-PhU9wESGhOE0n3jiBbQTvAk4JaOmIgBps5juOUULcvIYxth0M8gEEFMsH0F7NYR_9_BuD466vr93xoVe-sxsxlcvTXDIPfyFXUwjvHSyLO3vDhwXSLMMIygtyq_uuYigEV71sxA',
    },
  ],
  virtualTour: {
    badge: 'Okul Videoları',
    title: 'Okulumuzu Videolarla Keşfedin',
    description: 'Sınıflarımızı, bahçemizi ve yaşam alanlarımızı okulumuzda çekilen videolarla evinizden adım adım izleyin.',
    buttonText: 'Videoyu İzle',
    videoUrl: '',
    modalTitle: 'Eylül Çocuk Akademisi Tanıtım Videosu',
    modalText: 'Sınıflarımız, sanat ve masal alanlarımız ile yemyeşil bahçemiz bu videoda.',
    noVideoText: 'Tanıtım videomuz yakında burada olacak. Bu sırada etkinlik videolarımızı izleyebilirsiniz.',
    modalButtonText: 'Etkinlik Videolarını İzleyin',
    modalButtonLink: '/icerikler/etkinlik-videolari',
  },
  quickLinks: [
    { id: 'ql-1', icon: 'calendar_month', title: 'Randevu Alın', desc: 'Okulu bizzat ziyaret edin', link: '/kayit-ve-basvuru' },
    { id: 'ql-2', icon: 'menu_book', title: 'Tanıtım Kataloğu', desc: 'Bilgi almak için bize ulaşın', link: '/iletisim' },
    { id: 'ql-3', icon: 'smart_display', title: 'Okul Videoları', desc: 'Okulumuzu videolarla gezin', link: '#video' },
    { id: 'ql-4', icon: 'help', title: 'Sık Sorulan Sorular', desc: 'Merak edilen tüm detaylar', link: '/kayit-ve-basvuru#sss' },
  ],
};
