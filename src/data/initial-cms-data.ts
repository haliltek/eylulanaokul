import { CmsStore } from '../types/cms';

export const initialCmsData: CmsStore = {
  "_version": "1.3.0",
  "_lastUpdated": "2026-10-21T14:00:00.000Z",
  "siteSettings": {
    "schoolName": "Özel Eylül Anaokulu - Kars Kreş ve Anaokulu",
    "tagline": "Güvenle Bugüne, Umutla Yarına...",
    "motto": "Güvenle Bugüne, Bilimle Yarına - QA Doğrulandı",
    "phone": "+905515893212",
    "phoneDisplay": "0 (551) 589 32 12",
    "email": "info@eylulanaokulu.com.tr",
    "address": "Şehitler mh. 108 Sokak, No: 8 AL (Villalar Bölgesi) KARS",
    "addressDetail": "Villalar Bölgesi, Kars Merkez",
    "city": "KARS",
    "district": "Merkez",
    "workingHoursWeekday": "Hafta içi 08.00-17.00",
    "workingHoursSaturday": "Kapalı",
    "googleMapsUrl": "https://maps.google.com/?q=Ozel+Eylul+Anaokulu+Kars",
    "instagramUrl": "https://instagram.com/eylulcocukakademisi",
    "facebookUrl": "https://facebook.com/eylulcocukakademisi",
    "youtubeUrl": "https://youtube.com/@eylulcocukakademisi",
    "linkedinUrl": "https://linkedin.com/company/eylulcocukakademisi",
    "whatsappNumber": "905515893212",
    "academicYear": "2024 - 2025",
    "logoText": "EYLÜL ÇOCUK AKADEMİSİ ANAOKULU",
    "logoLeafColor": "#74B127",
    "fax": "0 (474) 225 12 22"
  },
  "navigation": [
    {
      "id": "home",
      "title": "Anasayfa",
      "href": "/",
      "order": 1,
      "isActive": true
    },
    {
      "id": "about",
      "title": "Hakkımızda",
      "href": "/hakkimizda",
      "order": 2,
      "isActive": true
    },
    {
      "id": "bem",
      "title": "Eğitim Modeli (BEM)",
      "href": "/egitim-modeli/bem",
      "order": 3,
      "isActive": true
    },
    {
      "id": "english",
      "title": "All Day English",
      "href": "/egitim-modeli/all-day-english",
      "order": 4,
      "isActive": true
    },
    {
      "id": "campus",
      "title": "Okulumuz",
      "href": "/okulumuz",
      "order": 5,
      "isActive": true
    },
    {
      "id": "nutrition",
      "title": "Beslenme",
      "href": "/beslenme",
      "order": 6,
      "isActive": true
    },
    {
      "id": "activities",
      "title": "Etkinlikler",
      "href": "/etkinlikler",
      "order": 7,
      "isActive": true
    },
    {
      "id": "parents",
      "title": "Velilerimiz İçin",
      "href": "/velilerimiz-icin",
      "order": 8,
      "isActive": true
    },
    {
      "id": "enrollment",
      "title": "Kayıt ve Başvuru",
      "href": "/kayit-ve-basvuru",
      "order": 9,
      "isActive": true
    },
    {
      "id": "contact",
      "title": "İletişim",
      "href": "/iletisim",
      "order": 10,
      "isActive": true
    }
  ],
  "pages": {
    "home": {
      "hero": {
        "quotePart1": "“Güvenle",
        "quotePart2": "Bugüne,",
        "quotePart3": "Umutla",
        "quotePart4": "Yarına...”",
        "description": "Sevgi, ilgi ve özenle her çocuğun potansiyelini destekleyen bütüncül bir eğitim yaklaşımı.",
        "ctaPrimaryText": "Okulumuzu Keşfedin",
        "ctaPrimaryLink": "/okulumuz",
        "heroImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuAqqBvvgnitjIqoyH1pgnXbj3o4-F3EBt82a3u3eV1xvAXVhj6tXut0hX99r3X7k_NL9HykxwyoMAfDckVWNsua-e_pXcB3R84YrYxEZsoajqTAQxZT2l7p_1kSPuizUpKsEFIGHQbrMYEY_QZhoG4pm2RfCOqHIRe9NRR4maYaukvni2me_eE2Pj1a4XRvgH6ZiN9V771zsExQa-dWdT3CSSFClq1DC-CDQukG6_6r6u5t4Je3cqAu",
        "heroImageAlt": "Eylül Çocuk Akademisi mutlu öğrenci ve güvenli sınıf ortamı"
      },
      "pillars": [
        {
          "id": "bem",
          "title": "BEM",
          "subtitle": "Bütünleştirilmiş Eğitim Modeli",
          "icon": "school",
          "link": "/egitim-modeli/bem"
        },
        {
          "id": "english",
          "title": "All Day",
          "subtitle": "English",
          "icon": "forum",
          "link": "/egitim-modeli/all-day-english"
        },
        {
          "id": "primary-prep",
          "title": "İlkokula",
          "subtitle": "Hazırlık",
          "icon": "child_care",
          "link": "/egitim-modeli/bem"
        },
        {
          "id": "activities",
          "title": "Zengin",
          "subtitle": "Etkinlikler",
          "icon": "palette",
          "link": "/etkinlikler"
        },
        {
          "id": "nutrition",
          "title": "Doğal &",
          "subtitle": "Dengeli Beslenme",
          "icon": "restaurant",
          "link": "/beslenme"
        }
      ],
      "dailyRoutine": {
        "badge": "Eylül'de Bir Gün",
        "title": "Özenle Planlanmış Günlük Akış",
        "subtitle": "Çocuklarımızın biyoritmi ve keşif arzusu gözetilerek dengelenmiş etkinlik programı",
        "items": [
          {
            "time": "08:30 - 09:15",
            "title": "Güne Merhaba & Doğal Kahvaltı",
            "desc": "Sıcak karşılama, serbest oyun ve organik sabah kahvaltısı",
            "icon": "bakery_dining"
          },
          {
            "time": "09:30 - 11:30",
            "title": "BEM Çemberi & All Day English",
            "desc": "Bütünleştirilmiş eğitim atölyeleri ve ana dili İngilizce öğretmenlerle pratik",
            "icon": "psychology"
          },
          {
            "time": "11:45 - 12:45",
            "title": "Dengeli Öğle Yemeği & Bahçe Saati",
            "desc": "Diyetisyen onaylı sıcak menü ve temiz havada serbest doğa oyunu",
            "icon": "lunch_dining"
          },
          {
            "time": "13:00 - 14:30",
            "title": "Dinlenme & Masal / Ses Atölyesi",
            "desc": "Yaş gruplarına uygun sessiz dinlenme veya rahatlatıcı hikaye odası",
            "icon": "bedtime"
          },
          {
            "time": "14:45 - 16:30",
            "title": "Branş Dersleri & İkindi Beslenmesi",
            "desc": "Piyano, bale/jimnastik, kodlama, satranç ve taze ikindi atıştırmalığı",
            "icon": "palette"
          },
          {
            "time": "16:45 - 18:30",
            "title": "Günün Değerlendirmesi & Uğurlama",
            "desc": "Günü pekiştirici serbest köşe oyunları ve ailelere teslim",
            "icon": "sentiment_very_satisfied"
          }
        ]
      },
      "highlightBanner": {
        "title": "Her Çocuk Bir Keşif",
        "description": "Çocuğunuzun merakını, özgüvenini ve sanatsal bakışını sevgi dolu bir çatı altında birlikte büyütelim.",
        "buttonText": "Okul Ziyareti Planla",
        "buttonLink": "/kayit-ve-basvuru",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMJOcMj_5ofmln-7zxjodxrkIggHEPizxtTm6fTxnlJg9orzRErxF4C5ICuonpZmqeFVsCoQN4U8gzVHTAyoWKzH6YVhlZxg2nyUAe7x8QfWnJJHPMtuZyG7g7DBiVPoyzftXbVbzN_TdtqPQIBPLU7VGIZvsWhBlNtYwxeF0QEa68LKcxh3xhE3DrgfO0l31wjXMOFnKZ3aCzvZTY8pmeNzQ1MZ2zu8brUXpubQfpQIsbqyZpma6h"
      },
      "instagramShowcase": {
        "title": "Eylül'de Hayat",
        "handle": "@eylulcocukakademisi",
        "url": "https://instagram.com/eylulcocukakademisi",
        "posts": [
          {
            "id": "ig-1",
            "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAIhDg4p8-gT_vNjaupVxMvU0BM4pvpL49udkQZ5Ol2cFtEwFhnwzEWuXCFlWivq37jmc2h7W-EPlaXlBykvmWvHpOPBI9R2omsbWD241a1OGYNynRhHpdbv-KlMJp--m4NdVsY_SnRf1zyvgFZFPFNIIr4fV-zvDCSyfpmiMQKiwwl7VtStT4LuAH3wqE0ToAYQYQf50eCxKmCatW4CeLflxfHnYpELKtFrqSBOhce_M-zCF7KKgn0",
            "caption": "Doğa atölyemizde sonbahar yapraklarını inceliyoruz 🍁🌿",
            "link": "https://instagram.com"
          },
          {
            "id": "ig-2",
            "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCyiN03arbqJBsDVFV1HUx8dy-0bAohSvrbAVnltFemm95vAkyAGyQNAHxMTuLHa4qDTSkH0IXZIxJhyXManVZMlLgW0w5JUzYdl9d8x_kcnTvOPOWa-blJUhgUfC6Rz6QiBCywGeQacUHXhmod4LDhy9CeBY_xClJyR-geaBYhVs8Tar70UAri1uEDuyTLj28jRWD5AEZt2m8MajVuEjyIozikNXLhwDoaBW9ewtiiHYMK7OQ8sQNM",
            "caption": "Müzik ve piyano odamızdan neşeli tınılar yükseliyor 🎹✨",
            "link": "https://instagram.com"
          },
          {
            "id": "ig-3",
            "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBLTcFcP5lqXe6FlaDkYCXiyBz960GYtwkL5B3CnPmnU0BATMdea0vAAz_DMA_5USrA4-_e7kF0_0KX1FSz4XUXLkfw0Dsbv8G69wNNxzcmDkUl94iOK3v9TvGHu5n7Wcl0vj17K_5OgIK2aE_QBQDfb5B0OcJGKxqkzjoqF7foIS4nKSRHF2MI8qpQXArYcRcCkFHn_xBtJvo9wjaJqUBTqpK6kZf-vewwrV9S4RGsAjBe7FR81dVS",
            "caption": "Çayyolu yeşillikler içindeki güvenli bahçemizde koşup oynuyoruz! ☀️🏃",
            "link": "https://instagram.com"
          }
        ]
      }
    },
    "about": {
      "header": {
        "badge": "Biz Kimiz?",
        "title": "Eylül Çocuk Akademisi",
        "subtitle": "Daha Mutlu Çocuklar, Daha Güçlü Yarınlar",
        "description": "Eylül Çocuk Akademisi, 3-6 yaş grubu çocuklar için sevgi, ilgi ve özenle tasarlanmış; bireysel farklılıkları zenginlik kabul eden, modern pedagojik yaklaşımlarla donatılmış öncü bir okul öncesi eğitim kurumudur."
      },
      "stats": [
        {
          "id": "stat-1",
          "value": "12+",
          "label": "Yıllık Deneyim",
          "icon": "workspace_premium"
        },
        {
          "id": "stat-2",
          "value": "4",
          "label": "Yaş Grubu Sınıfı",
          "icon": "meeting_room"
        },
        {
          "id": "stat-3",
          "value": "3-6",
          "label": "Yaş Odaklı Pedagoji",
          "icon": "child_care"
        },
        {
          "id": "stat-4",
          "value": "Uzman",
          "label": "Pedagog & Öğretmen Kadrosu",
          "icon": "supervisor_account"
        }
      ],
      "valuesTitle": "Değerlerimiz",
      "values": [
        {
          "id": "val-1",
          "title": "Sevgi",
          "desc": "Koşulsuz kabul ve güven",
          "icon": "favorite",
          "colorBg": "#fde9cf",
          "colorText": "#8f4700"
        },
        {
          "id": "val-2",
          "title": "İlgi",
          "desc": "Bireysel gelişim odağı",
          "icon": "search_spark",
          "colorBg": "#d6e3ff",
          "colorText": "#00458d"
        },
        {
          "id": "val-3",
          "title": "Özen",
          "desc": "Her detayda hassasiyet",
          "icon": "volunteer_activism",
          "colorBg": "#b4f2b3",
          "colorText": "#0e4a1c"
        },
        {
          "id": "val-4",
          "title": "Saygı",
          "desc": "Farklılıklara değer",
          "icon": "spa",
          "colorBg": "#ffdcc5",
          "colorText": "#944a00"
        },
        {
          "id": "val-5",
          "title": "Güvenli Ortam",
          "desc": "Huzurlu ve korunaklı yuva",
          "icon": "shield",
          "colorBg": "#d6e7ff",
          "colorText": "#003e80"
        }
      ],
      "showcase": {
        "quote": "“Her çocuk, doğru ortam ve şefkatle kendi içindeki cevheri parlatır.”",
        "quoteAuthor": "Eylül Çocuk Akademisi Kurucu Temsilciliği",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAbHkyHF6gL2zHQy7ObwfbgqCVc0_IKOCb4j-2Kklgs1gQijyvNd1VnVRubKPthFi0RtL23koQd23NOsuO1clIZyRH0kl0SmlUXKmDX9CtoDvFWDFlX07rXo4aJS9Gr744f8uJw0CZ6m5tw1lmqhYU-pKbv5VME3y5LhQQKATG80IDyvRvix4XUoImO67rtQTAj6ai8FFw7YF7pA5HLPjslswNbRGTkZqwO1Q9zw3FCxbtNVOsEzlsC",
        "imageAlt": "Doğal bahçemizde yaprak tutan tebessüm dolu çocuk portresi",
        "badgeText": "Doğal & Bütünsel Yaklaşım"
      }
    },
    "campus": {
      "header": {
        "badge": "Fiziksel İmkânlar ve Yerleşke",
        "title": "Okulumuz",
        "subtitle": "Güvenli, Sağlıklı ve İlham Veren Bir Ortam",
        "description": "Eylül Çocuk Akademisi'nde çocuklarımızın güvenle büyümesi, öğrenmesi ve sosyalleşmesi için her detay titizlikle planlandı. Doğal ışık alan sınıflarımız, geniş yeşil bahçemiz ve özel atölyelerimizle çocuklara ikinci bir ev sıcaklığı sunuyoruz."
      },
      "virtualTour": {
        "title": "360° Sanal Tur İle Okulumuzu Keşfedin",
        "subtitle": "Sınıflarımızı, bahçemizi ve atölyelerimizi evinizden adım adım gezin.",
        "description": "Fiziksel mimarimizin çocuk güvenliği ve ergonomisine uygun standartlarını dilediğiniz an 3 boyutlu olarak inceleyin.",
        "buttonText": "Sanal Turu Başlat",
        "embedUrl": "https://eylulcocukakademisi.com/sanal-tur",
        "thumbnailImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBUEjo9ZUCqHf32UKFjkA5D2wQxvju9qjMX-D_MSPE2QORQFbLCdNZY7u6C8jhkLy3XvDQWo8iJ9pkyPKQS5-3r-y_NAzdX2mlNA1sUsrphVqX_M9hKuI2kXrPqBTYwboAulTXIkrcGAm0h3pajyjECeRqEuXMAhwFlbpoq87qupfDRgWRn-rN0ACRSj6w79BOs4BhXwL0tRnliB70m0cB0Htwvosw54J6XVfj9_dhYNOdGZXyd6ktQ"
      },
      "facilities": [
        {
          "id": "fac-1",
          "title": "Montessori ve Doğal Ahşap Atölyeleri",
          "description": "Çocuk boyuna uygun açık raflar, doğal ahşap eğitici materyaller ve duyusal öğrenmeyi teşvik eden ergonomik öğrenme ortamı.",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBUEjo9ZUCqHf32UKFjkA5D2wQxvju9qjMX-D_MSPE2QORQFbLCdNZY7u6C8jhkLy3XvDQWo8iJ9pkyPKQS5-3r-y_NAzdX2mlNA1sUsrphVqX_M9hKuI2kXrPqBTYwboAulTXIkrcGAm0h3pajyjECeRqEuXMAhwFlbpoq87qupfDRgWRn-rN0ACRSj6w79BOs4BhXwL0tRnliB70m0cB0Htwvosw54J6XVfj9_dhYNOdGZXyd6ktQ",
          "imageAlt": "Montessori ve ahşap atölye sınıfı",
          "features": [
            "Organik ahşap mobilyalar",
            "Doğal gün ışığı",
            "Anti-alerjik zemin kaplama"
          ]
        },
        {
          "id": "fac-2",
          "title": "Sıcak Masal & Oyun Köşesi",
          "description": "Yumuşak minderler, zengin çocuk kütüphanesi ve dinlendirici pastel tonlarıyla çocukların hayal güçlerini özgür bırakan huzurlu alan.",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDwMJCgn6ONAX8QrFWd3YuXmrO7E3u5FWK3Xb545MR2GGXliEjEFhlR7aHtTI9iCxhHCyN88wCP6odSqfPeewCFVxBqYrkwA_ujTL71cNGmd1thiPbKesfqsMYE3LJdg4LiOmFiv0r69YZyE0FomHTo7M4Hapw7VyaP0RcaP708kYLg_Pf159bzU9eEM0INlZ92ABD9832X915nwdU10OmDCalxOh5i1nIgRSFRNaKb2DwqetABr0d3",
          "imageAlt": "Masal ve kitap okuma alanı",
          "features": [
            "Zengin resimli kütüphane",
            "Yumuşak akustik kumaşlar",
            "Masal dinleme saati"
          ]
        },
        {
          "id": "fac-3",
          "title": "Yaratıcı Sanat & Tasarım Alanı",
          "description": "Renklerin, dokuların ve kil/çamur çalışmalarının özgürce üretildiği; çocukların görsel zekalarını geliştiren ilham verici sanat atölyesi.",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDiGXd78fKBnSqMEf7jV3gsncuEhdTLbXW25Qvz3veuUd8RltUEpmJQ3XFAooO0YWQPFXL89MAknNYXDBioG6ylW0TAy3UexK83SUpSxCG5FNz957ZFHR3Y0GFCLMTDYI2mQxTqHaXMsQX0FzEAYLHeariuItq4_YeVn5KcB3APoYzDeJcjfyUzSB6XFLqLuShrIWRMuxIoWwqM3b1x7p2bgYCHAQ3jkQeD4cT-Gdmc7QF3FeY1nGE4",
          "imageAlt": "Yaratıcı sanat ve resim atölyesi",
          "features": [
            "Şövale ve serbest tuval alanı",
            "Duyusal seramik masaları",
            "Kolay temizlenebilir doğal yüzeyler"
          ]
        },
        {
          "id": "fac-4",
          "title": "Doğal Çim Bahçe & Oyun Parkı",
          "description": "Şehrin gürültüsünden uzak, yüksek korunaklı, yumuşak çim zeminli, kum havuzlu ve organik sebze tarhlarına sahip 3000 m² geniş yaşam alanı.",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCcVimafQaD2S34RBokdm0KCeZdebZPPUEHhW7eh93oDvxsYe7FTRIv8JMMkK8GE2eJ7iNuyZq6W7YJKdKFWsSHMCqsV2BPLOCt7V98AUERJ2kB-PhU9wESGhOE0n3jiBbQTvAk4JaOmIgBps5juOUULcvIYxth0M8gEEFMsH0F7NYR_9_BuD466vr93xoVe-sxsxlcvTXDIPfyFXUwjvHSyLO3vDhwXSLMMIygtyq_uuYigEV71sxA",
          "imageAlt": "Çim bahçe ve ahşap oyun parkı",
          "features": [
            "Doğal çim ve ahşap oyun kuleleri",
            "Organik tarım bahçesi",
            "Güvenlik sertifikalı yumuşak zemin"
          ]
        }
      ]
    },
    "bem": {
      "header": {
        "badge": "Özgün Müfredat & Pedagoji",
        "title": "Bütünleştirilmiş Eğitim Modeli (BEM)",
        "subtitle": "Çok Yönlü Gelişim, Güçlü Temeller",
        "description": "Eylül Çocuk Akademisi Bütünleştirilmiş Eğitim Modeli (BEM); çocuğun zihinsel, duygusal, sosyal, sanatsal ve fiziksel potansiyelini bir bütün olarak ele alan, merak odaklı ve oyun temelli çağdaş bir eğitim felsefesidir."
      },
      "wheelHub": {
        "centerTitle": "BEM",
        "centerSubtitle": "EĞİTİM MODELİ",
        "sectors": [
          {
            "id": "sosyal-duygusal",
            "name": "Sosyal Duygusal Gelişim",
            "icon": "favorite",
            "colorBg": "#fde9cf",
            "colorText": "#8f4700",
            "description": "Duygularını tanıma, empati kurma, grup içi uyum ve sağlıklı arkadaşlık ilişkileri kurabilme becerisi."
          },
          {
            "id": "dil-gelisimi",
            "name": "Dil Gelişimi",
            "icon": "forum",
            "colorBg": "#d6e3ff",
            "colorText": "#00458d",
            "description": "Zengin kelime dağarcığı, kendini ifade edebilme, dinleme kültürü ve All Day English ile erken çift dillilik temeli."
          },
          {
            "id": "bilissel-gelisim",
            "name": "Bilişsel Gelişim",
            "icon": "psychology",
            "colorBg": "#b4f2b3",
            "colorText": "#0e4a1c",
            "description": "Neden-sonuç ilişkisi kurma, problem çözme, algoritmik düşünme, merak odaklı fen ve doğa keşifleri."
          },
          {
            "id": "sanat-yaraticilik",
            "name": "Sanat ve Yaratıcılık",
            "icon": "palette",
            "colorBg": "#ffd8d6",
            "colorText": "#ba1a1a",
            "description": "Müzik, piyano, resim ve seramikle estetik algıyı, ritim duygusunu ve özgün hayal gücünü dışa vurma."
          },
          {
            "id": "fiziksel-gelisim",
            "name": "Fiziksel Gelişim",
            "icon": "sports_handball",
            "colorBg": "#d6e7ff",
            "colorText": "#00458d",
            "description": "Jimnastik, denge, kaba ve ince motor kas koordinasyonu, beden farkındalığı ve açık hava hareket serbestliği."
          },
          {
            "id": "degerler-egitimi",
            "name": "Değerler Eğitimi",
            "icon": "volunteer_activism",
            "colorBg": "#ebdccb",
            "colorText": "#713700",
            "description": "Nezaket, dürüstlük, yardımlaşma, çevreye ve canlılara saygı duyma gibi evrensel insani erdemler."
          }
        ]
      },
      "showcase": {
        "title": "BEM ile",
        "description": "Bütünleştirilmiş eğitim programımızla her gün yeni deneyimler biriktiren çocuklarımız:",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuA_HUJ8Dk0I5-9-CcAVN-23EtmKiHOp7uF7iJTio35lPh-RVt2Ww3BzorxwMjJCNw6-6J3RjPlIUZfiZPQqxBzublamKjRz0wCD7IXo6qX8F_35XYKa_eUaYfvau2j1sffb6E8wDPNa9Uak8ftkjp5WfYtaN4mv58_zTpEwiApJP9Cie23W1J1G_wIQp4-L2WSE8A7B9FraFpJuirTRQOaK_08d1Dwe4biK2A2tzfjBJj-bxe06lsLs-RVt2Ww3BzorxwMjJCNw6-6J3RjPlIUZfiZPQqxBzublamKjRz0wCD7IXo6qX8F_35XYKa_eUaYfvau2j1sffb6E8wDPNa9Uak8ftkjp5WfYtaN4mv58_zTpEwiApJP9Cie23W1J1G_wIQp4-L2WSE8A7B9FraFpJuirTRQOaK_08d1Dwe4biK2A2tzfjBJj-bxe06lsLs",
        "imageAlt": "Neşeli bir öğrenci renkli Montessori bloklarıyla eğlenerek öğrenirken",
        "quote": "“Her çocuk, kendi merakı ve ritmi doğrultusunda keşfederek büyür.”",
        "outcomes": [
          "Keşfeden",
          "Soran",
          "Üreten",
          "Paylaşan",
          "Özgüvenli",
          "Dünya insanı bireyler yetişir."
        ],
        "ctaText": "Okul Ziyareti ile Yerinde İnceleyin",
        "ctaLink": "/kayit-ve-basvuru"
      }
    },
    "english": {
      "header": {
        "badge": "Çift Dilli Okul Öncesi Deneyimi",
        "title": "All Day English",
        "subtitle": "Gün Boyu İngilizce, Doğal ve Kalıcı Öğrenme",
        "description": "Eylül Çocuk Akademisi'nde yabancı dil ders olarak öğretilmez; günün her anına yayılan doğal bir yaşam diline dönüşür. Sınıflarımızda Türk sınıf öğretmeninin yanında tam zamanlı ana dili seviyesinde İngilizce öğretmeni yer alır."
      },
      "features": [
        {
          "id": "feat-1",
          "title": "Gün Boyu İngilizce",
          "desc": "Kahvaltıdan bahçe oyununa, sanattan müzik saatine kadar hayatın doğal akışında İngilizce maruziyeti.",
          "icon": "schedule"
        },
        {
          "id": "feat-2",
          "title": "Sınıf + İngilizce Öğretmeni",
          "desc": "Her sınıfta iki öğretmen eşzamanlı bulunur; çocuklar iki dilli iletişim güvenliğini hisseder.",
          "icon": "group"
        },
        {
          "id": "feat-3",
          "title": "Cambridge Materyalleri",
          "desc": "Erken çocukluk yaş grubuna özel sertifikalı uluslararası görsel ve işitsel eğitim kaynakları.",
          "icon": "menu_book"
        },
        {
          "id": "feat-4",
          "title": "Günlük Konuşma",
          "desc": "Ezber kalıplardan uzak; şarkılar, tekerlemeler, dramalar ve rol oyunlarıyla kalıcı konuşma pratiği.",
          "icon": "record_voice_over"
        }
      ],
      "galleryTitle": "İngilizce Etkinliklerimizden Kareler",
      "gallerySubtitle": "Miniklerimizin İngilizce şarkılar, hikaye çemberleri ve drama oyunlarıyla dolu neşeli anları",
      "gallery": [
        {
          "id": "eng-img-1",
          "title": "Circle Time Hikaye Saati",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAIhDg4p8-gT_vNjaupVxMvU0BM4pvpL49udkQZ5Ol2cFtEwFhnwzEWuXCFlWivq37jmc2h7W-EPlaXlBykvmWvHpOPBI9R2omsbWD241a1OGYNynRhHpdbv-KlMJp--m4NdVsY_SnRf1zyvgFZFPFNIIr4fV-zvDCSyfpmiMQKiwwl7VtStT4LuAH3wqE0ToAYQYQf50eCxKmCatW4CeLflxfHnYpELKtFrqSBOhce_M-zCF7KKgn0",
          "imageAlt": "Circle Time İngilizce hikaye anlatımı"
        },
        {
          "id": "eng-img-2",
          "title": "Sing & Move Ritim Atölyesi",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDXJD_3d19T3mQ0xzBqu8_DswbaPm-S9hzi0sJYL3_hVzSHNBdmqhsF_TBq2XmAfGy879A0-5oXilRvEl7jhBPecGNeMjIglDP15witIYbLsW1l34yza_YvcjkjhooZ6YU3Th9tzcNirn_IrHs8wMd6bXYTUqDYEj2sxFw9l2NVxFrWe-ZR0ZQ2Li37ajTvZ3qxDpR4thWeLnnbeiLiazasuMtOCvmXa4rBfHG0dIQxeKc6rro1d-DI",
          "imageAlt": "İngilizce şarkılar eşliğinde ritim ve hareket"
        },
        {
          "id": "eng-img-3",
          "title": "Vocabulary Flashcards Keşfi",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCGbHX2Nvh4DvZ-ximLLAnTNWoJv1eJISuXF82SrSEUd_6sTWQzAM5KIaGeK1kDlVHfkuir5cjHoEQJA8yU_NTvvAJ8xPHIYSz2uzlDS3ILK7-1RXoKT1VBzN8BMCbB4m8Nul8dXPTr2mg6G70SIwauiiyj0ESrg2IhOcBoAcOaP5qGGETuq7lBS7ui6JLYfVcP__XrObAViSzaxt1tuKXdpnGy1dxRtPr0AsZh0re42pjMkHntZOIo",
          "imageAlt": "Renkli görsel kartlarla kelime pekiştirme"
        },
        {
          "id": "eng-img-4",
          "title": "Puppet Show & Drama",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDobE0UwaVtC0DXgtNF4BEmPkh_ni8-lpM9dtIJTs42j413H4m24issQw7pq6AceGkWc4dyiW62YS29Ei-2OU2BKeg8tTGaMo0BIeyfovps1UsqKIowWYWFl7je2S1PFr3qBq7IjBia8hjWMRF8w2sfCD1nSUrn3jGmmsCi4WfjJp4-NCcSfDDVNz4CtDFER0fHNjqryWtVSTwB3Wc6Pt6_3k0FI0AeQEqUtJQjYzofA0AAQeXLfJmL",
          "imageAlt": "Kukla tiyatrosu ile interaktif İngilizce diyalog"
        },
        {
          "id": "eng-img-5",
          "title": "Outdoor English Games",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBmG99bD5lg1G-4BiA1dJKD7opkWipSGmnOnptHLwTv3VbCKvahxu0fTXWtjS-hrdsdu-ZwQE3Bjhf8GV2EVuwbYxbfuh9uqPwifjwlazqTMhmTwQk21keNfglFhtImEwBTeZtF0bvqlbuvimw538PFUClhp6lQyKglYQQVcPb1L7Tq08XVpkFn3O9jnlmMCkAS7_I__ejXIB5JWLUoTFQNW3bGw-ijE5Wrt9UTwVBM2vUNS1rdPIyQ",
          "imageAlt": "Bahçede oynanan neşeli İngilizce yön oyunları"
        },
        {
          "id": "eng-img-6",
          "title": "Creative Art in English",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBJTNsPLitGJT-uvdRSPCRGg_yPtS_QtMkPUIvggdXTvXwPG7EDbom4CfIXeUXvifwYZmW9gl94QFDv0gjfydHWZH9JneCAXHd6wsxUmsQwk9b2RONAADroTMG5rNEPBZDEIaCWYTr1D0VJDlcHqGMLVFn0t7HZVmloNqQjum0yY_NdohLz0gNI9zHWGpPb1TnOnzb-Am_uX6Ed9pKS0AVVhv1-pUTO17tdV6Q64Azh3-CxINyMOesQ",
          "imageAlt": "İngilizce yönlendirmelerle boyama ve tasarım"
        },
        {
          "id": "eng-img-7",
          "title": "Cooking Fun & Colors",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCTh5n2RgRYXhDnn-WlAZ398rFl2GakD1IfFyh2566wTFk-4JP6YS47I8f3V-TtGxHVi1qZShctDNAsSJqYSWuCyUo7ui5-kTd15ZewFVQ85gzv6Z0PDZWryL5QQ9EWlrrc_vD1TGpXjZ3I5sCuBBH4Gx9uEwJsoVrGDB9MFuYUyEU8M_FNeWC29PeRApONav1nUHfcqGABUW3OhT6XnvHnwQGWLHio1waLgTYYpgeLlkVHhuGRqame",
          "imageAlt": "Meyve salatası ve İngilizce renk/tat keşfi"
        },
        {
          "id": "eng-img-8",
          "title": "Storytelling Corner",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAJm7fj5jggxLyGHyLXPCMChbuXeKexB3OtQSmUwJkt5CGzR2rw-6jluW0rEVn5l44E3GaN8q_1IfpSf5nxOe8MWHzxVlSVgnuV1zAyMb4ZLivBl7A8U6ZtU-u_giJKbjaENpl2rSBrqtN3I86PrLMoZeCiyeLOanelmUQMaj2U0y4FuDvfBJ3S5iJQELWBOa0YpyhGt8Cya44CINnKm5EQREflMetgxgSH5Jv3ENR-KnoYCKIpC74y",
          "imageAlt": "Kitap köşesinde birebir telaffuz ve sohbet"
        }
      ],
      "ctaBanner": {
        "title": "Çift Dilli Eğitimimizi Yakından Görün",
        "subtitle": "Çocuğunuzun İngilizceyi bir ders değil yaşam biçimi olarak kazanacağı ortamı keşfedin.",
        "buttonText": "Randevu Alın",
        "buttonLink": "/kayit-ve-basvuru"
      }
    },
    "activities": {
      "header": {
        "badge": "Atölyeler & Branş Dersleri",
        "title": "Zengin Etkinlik Dünyası",
        "subtitle": "Her Gün Yeni Bir Keşif",
        "description": "Çocukların ilgi ve yeteneklerini keşfetmeleri, estetik duyarlılık kazanmaları ve kendilerini çok yönlü ifade edebilmeleri için zenginleştirilmiş atölye programlarımız."
      },
      "activities": [
        {
          "id": "act-piyano",
          "title": "Piyano",
          "description": "Ritim algısı, çift el koordinasyonu ve işitsel dikkat geliştirme",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCyiN03arbqJBsDVFV1HUx8dy-0bAohSvrbAVnltFemm95vAkyAGyQNAHxMTuLHa4qDTSkH0IXZIxJhyXManVZMlLgW0w5JUzYdl9d8x_kcnTvOPOWa-blJUhgUfC6Rz6QiBCywGeQacUHXhmod4LDhy9CeBY_xClJyR-geaBYhVs8Tar70UAri1uEDuyTLj28jRWD5AEZt2m8MajVuEjyIozikNXLhwDoaBW9ewtiiHYMK7OQ8sQNM",
          "imageAlt": "Piyano başında nota ve tuşları öğrenen sevimli çocuk",
          "category": "Müzik & Sanat",
          "order": 1
        },
        {
          "id": "act-resim",
          "title": "Resim",
          "description": "Görsel ifade, renk teorisi ve sınırsız hayal gücü atölyesi",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAwu52rU0SIT8ikWDgkNHi7XkWQjVRwqmgfd_ntKBvMaIA-4Fe-rK0FsIKMGGEik7NqqRCdDGzdBzEY4AczBOAa6EzJXBisddPqt9KcpTIk1E0p6kQ45so3YYdwcUY9Pq0xI3dCao9P5I-yMs_dbB-Ov5LmqBk31O-6o3jqCp2pUpJrVaaLHJcP_HbNPGVWTBWBhUvMJvOi07_cZrFuPB33n5iZnr9ReIvpkKqofc6pfc3741l-XFfh",
          "imageAlt": "Renklerle tuval üzerinde resim yapan minik sanatçı",
          "category": "Müzik & Sanat",
          "order": 2
        },
        {
          "id": "act-jimnastik",
          "title": "Jimnastik",
          "description": "Denge, esneklik, beden farkındalığı ve kaba motor güçlendirme",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDK9BJZq33Vq-ESZ01DJCa2vSHyrbqa9yUU-jbyIsazRqGsCa_DSGpW9sfC8XTfxR7tKlVxKakm5PIYRg75I6KSUbyLdXvehcT54GI-amuzszYTjXtUvXmbEm2mlXVzd7p4QYjFXP0I6Y6sziiVlhk_OSlEwfTmxZ8apyBbSoRyAtc41kqr5CuLbOiGAJXl5k7U2aTvdhxk29d4Y_HeM6ZTQEVaHMjEa8iXApOcm_MdqXNNZ296O6QO",
          "imageAlt": "Jimnastik minderi üzerinde esneme ve denge hareketleri",
          "category": "Beden & Hareket",
          "order": 3
        },
        {
          "id": "act-satranc",
          "title": "Satranç",
          "description": "Stratejik düşünme, sabır, odaklanma ve planlama becerileri",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCmlJHBRLWiQ2Q-qpQGJqv2VTSeyDaB_wu7sGjoGaDg7nR8ikf6mZO_2dZaDKbGPKGGf0cVzjzY0sh5sLk21R54Zw1X3CLZ5UMKolADJfT6z9coFJns9Ffwub5onCfCeNGjrvvs9Q9WhWPB3uC8hadiuzeghHvYARzhn_-K8fGf_n1xyullYs_j4EiM51ZUO28vTf3BQuwr8w6hMUsFFzXRd-EHoBfpr3ebNXAdVPQJE66WnFsCUm3f",
          "imageAlt": "Satranç tahtasında piyonları dikkatle inceleyen öğrenci",
          "category": "Zeka & Strateji",
          "order": 4
        },
        {
          "id": "act-fen-doga",
          "title": "Fen ve Doğa",
          "description": "Ekolojik keşif, canlılar dünyası ve deney odaklı merak eğitimi",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAPMzZ_tBqU1IxDoftuw0MfXIwyuEfXM90xiEopFj1byhY_a-psn19stclGKRMCqT0__THHYaN2PqPaliMGdhZzAbjpgTGgyDotH8RRKK8NvVpDbwmog6cTspzJCGRAwcQRvpFWBuyNEGGXKnvSSJtT4WaM2UkRCQ3NhYMsAxkhl2zFwcjgts32UYNO0L4pmrBK5Bkuuwsum54m9ScGNgOmUlFT61HYhmMAgDIX8gs2kPbFsRoKacbK",
          "imageAlt": "Büyüteç ile bitki yapraklarını inceleyen meraklı çocuk",
          "category": "Bilim & Keşif",
          "order": 5
        },
        {
          "id": "act-drama",
          "title": "Drama",
          "description": "Empati geliştirme, rol yapma ve sözlü & bedensel ifade özgürlüğü",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuABfqcqWrgiK9uCeqr4PMenFHX70PhbW12QQBkZQ5QsjQIZl9jsyeENwv_Xsjy2WEByKDesn0wcMjcHGOyZ4wMsHLnUGJDOC7fK1coCmC4bIkQPmnpTNeSdkMxCYj9CHNKJPD6dMDGo4AS-X5UtAO9u8E8NPVtFp_Yq57QwnCQbYwYlcSdcaO4L_qDhQaOpK1-CajxQaVfIiH4ksf5_DNUI8hJoWlePQvc-HG0Nkn92Ss8i3PL1xela",
          "imageAlt": "Köstüm ve sahnede rol oynayan neşeli anaokulu öğrencileri",
          "category": "Sosyal & Sahne",
          "order": 6
        },
        {
          "id": "act-muzik",
          "title": "Müzik",
          "description": "Orff yaklaşımı, perküsyon enstrümanları ve koro uyumu",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuA9b2ttUoepKG3ryo5WNpOKOTa91-qYn8OZ1YEa8JeYSSioD9Agof0sG2Rs3CYP28A2vo1hAHklv4ZpSSc2PJ3rPJeHUTu-qIsVdHVrgOuHtwyYIViwvhue5S2UJJ__fgNQU1uF3JXfRc56j65BLkidQnbwmGBDN1nvbn4oKJXjBnh1H1gWXJIqIqsQaGhwopJ1JQ4yUSMCrm5NH-bhyi1IKHPBolv3is2s76wEc4AjL8zv7e4zwRW9",
          "imageAlt": "Orff zilleri ve perküsyon aletleriyle ritim tutan çocuklar",
          "category": "Müzik & Sanat",
          "order": 7
        },
        {
          "id": "act-kodlama",
          "title": "Kodlama",
          "description": "Algoritmik düşünce, sebep-sonuç ilişkisi ve erken STEM okuryazarlığı",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBdbTHYbC_qjZAZjl8Mv2W5b7r5HXTOeFCo5n3iWUsKQJrZfrk1bxCcsNKXUGkogFmrHL1nLOj11byrxOYI4Zocp0PNO7_VB1Wzes7UwFD_G9oLR7SLhiR0uQsOl0YGPN0zSLQgzx3VerJ8QRYNYj0tWZS3T8KPJCJNIq-Wg7pRKpBqJg3OBkOBJyPUhzklPbJxwzfcZfgTHVcB-A5-VNR5KJqJZ2BMiTyzG1PPAjMcY9E5OBC6fzRE",
          "imageAlt": "Eğlenceli robotik bloklarla temel kodlama kuran çocuk",
          "category": "STEM & Teknoloji",
          "order": 8
        },
        {
          "id": "act-degerler",
          "title": "Değerler Eğitimi",
          "description": "Saygı, sevgi, yardımlaşma, nezaket ve küresel vatandaşlık bilinci",
          "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDEEF-PGVPW-5HTJ0kIlWjMI321V_loos6JYcAK8SNvl7Awt13DN1lAgA1qyW37GfVOHijAaaaNIXM9zYqkwPUBABodE5YkE1YuQvOmI8zaomF5pRZQA4MC-9inS48GyPbt08UQXAy5jl-3L2KyjC36SBOK7J6dVrK1D-JslTc16fUH02D0L929I7lndXyHut8FSjKAHxte2RZZnhQzOabRWTykm8MSa2rofymDPJy0EAn-w38gR59h",
          "imageAlt": "Birbirine el uzatan, sevgi ve yardımlaşma çemberindeki öğrenciler",
          "category": "Karakter & Toplum",
          "order": 9
        }
      ],
      "footerCta": {
        "title": "Çocuğunuzun Yeteneğini Birlikte Uyandıralım",
        "description": "Her branşın profesyonel eğitmenler eşliğinde sunulduğu zengin dünyamıza davetlisiniz.",
        "buttonText": "Hemen Ziyaret Planlayın",
        "buttonLink": "/kayit-ve-basvuru"
      }
    },
    "nutrition": {
      "header": {
        "badge": "Eylül Mutfak Atölyesi",
        "title": "Doğal ve Dengeli Beslenme",
        "subtitle": "Sağlıklı Çocuklar, Mutlu Yarınlar",
        "description": "Okulumuzda sunulan her öğün; uzman çocuk diyetisyenleri kontrolünde, yerel üreticilerden temin edilen mevsimine uygun taze ve organik malzemelerle kendi mutfağımızda günlük olarak pişirilir."
      },
      "pillars": [
        {
          "id": "nutr-1",
          "title": "Taze ve Doğal",
          "desc": "Mevsiminde sebze ve meyve, katkısız doğal gıdalar",
          "icon": "eco"
        },
        {
          "id": "nutr-2",
          "title": "Diyetisyen Kontrolü",
          "desc": "Yaş gruplarına özel kalori ve mikro-besin planlaması",
          "icon": "health_and_safety"
        },
        {
          "id": "nutr-3",
          "title": "Günlük Taze Pişirim",
          "desc": "Endüstriyel hazır gıdasız, okul mutfağında sıcacık üretim",
          "icon": "soup_kitchen"
        },
        {
          "id": "nutr-4",
          "title": "Dengeli Menü",
          "desc": "Kahvaltı, sıcak öğle yemeği ve taze ikindi atıştırmalığı",
          "icon": "restaurant_menu"
        }
      ],
      "weeklyMenu": [
        {
          "dayId": "pazartesi",
          "dayName": "Pazartesi",
          "breakfast": "Zeytin, peynir, domates, salatalık, haşlanmış yumurta, tam tahıl ekmeği, ıhlamur çayı",
          "breakfastTime": "08:45 - 09:30",
          "lunch": "Sebze çorbası, zeytinyağlı taze fasulye & bulgur pilavı, ev yapımı yoğurt, mevsim meyvesi",
          "lunchTime": "12:00 - 13:00",
          "snack": "Günlük ılık süt, taze elma dilimleri, yulaflı fındıklı kurabiye",
          "snackTime": "15:15 - 15:45"
        },
        {
          "dayId": "sali",
          "dayName": "Salı",
          "breakfast": "Kaşar peyniri, ev yapımı reçel, tereyağı, ceviz içi, omlet, çavdar ekmeği",
          "breakfastTime": "08:45 - 09:30",
          "lunch": "Mercimek çorbası, fırında anne köftesi & patates, mevsim yeşillikleri salatası, ayran",
          "lunchTime": "12:00 - 13:00",
          "snack": "Kefir, muz dilimleri, kuru üzüm & çiğ badem tabağı",
          "snackTime": "15:15 - 15:45"
        },
        {
          "dayId": "carsamba",
          "dayName": "Çarşamba",
          "breakfast": "Labne peynir, haşlanmış yumurta, siyah-yeşil zeytin, taze nane, köy ekmeği",
          "breakfastTime": "08:45 - 09:30",
          "lunch": "Ezogelin çorbası, nohut yemeği & siyez bulguru pilavı, ev turşusu, yoğurt",
          "lunchTime": "12:00 - 13:00",
          "snack": "Taze sıkılmış portakal & elma suyu, ev yapımı havuçlu tarçınlı kek",
          "snackTime": "15:15 - 15:45"
        },
        {
          "dayId": "persembe",
          "dayName": "Perşembe",
          "breakfast": "Menemen, beyaz peynir, domates söğüş, simit, doğal adaçayı",
          "breakfastTime": "08:45 - 09:30",
          "lunch": "Balkabağı çorbası, fırında sebzeli somon balığı, patates püresi, yeşil salata",
          "lunchTime": "12:00 - 13:00",
          "snack": "Organik yoğurt & taze çilek püresi, tam buğday grissini",
          "snackTime": "15:15 - 15:45"
        },
        {
          "dayId": "cuma",
          "dayName": "Cuma",
          "breakfast": "Beyaz peynir, kaşar peyniri, kuru kayısı, ceviz, krep, taze süt",
          "breakfastTime": "08:45 - 09:30",
          "lunch": "Tarhana çorbası, kıymalı ıspanak yemeği, fırın makarna, komposto",
          "lunchTime": "12:00 - 13:00",
          "snack": "Ilık süt, ev yapımı elmalı turta, kavrulmamış fındık",
          "snackTime": "15:15 - 15:45"
        }
      ],
      "dietitianNote": {
        "title": "Diyetisyen QA Özel Notu",
        "content": "Mevsim geçişlerinde çocuklarımıza taze sıkılmış C vitamini ve propolisli organik yoğurt sunulmaktadır.",
        "dietitianName": "Uzm. Dyt. Eylül Test",
        "dietitianTitle": "Pediatrik Beslenme Uzmanı"
      }
    },
    "parents": {
      "header": {
        "badge": "Okul & Aile İş Birliği",
        "title": "Velilerimiz İçin",
        "subtitle": "Birlikte Daha Güçlü Bir Eğitim Yolculuğu",
        "description": "Eylül Çocuk Akademisi olarak çocuklarımızın potansiyelini ailelerimizle kurduğumuz şeffaf, güven dolu ve kesintisiz iletişimle açığa çıkarıyoruz. Dijital veli portalımız üzerinden öğrencinizin gelişim raporlarına, günlük etkinliklere ve okul duyurularına anında ulaşabilirsiniz."
      },
      "portalModules": [
        {
          "id": "p-1",
          "title": "Veli Portalı",
          "subtitle": "Giriş & Bilgi Sistemi",
          "icon": "badge",
          "link": "/veli-portali",
          "isPrimary": true
        },
        {
          "id": "p-2",
          "title": "Duyurular",
          "subtitle": "Güncel Haberler",
          "icon": "campaign",
          "link": "/veli-portali/duyurular"
        },
        {
          "id": "p-3",
          "title": "Etkinlik Takvimi",
          "subtitle": "Aylık Programlar",
          "icon": "calendar_month",
          "link": "/veli-portali/takvim"
        },
        {
          "id": "p-4",
          "title": "Gelişim Portfolyosu",
          "subtitle": "Bireysel Raporlar",
          "icon": "assignment_ind",
          "link": "/veli-portali/portfolyo"
        },
        {
          "id": "p-5",
          "title": "Yemek Menüsü",
          "subtitle": "Haftalık & Doğal Beslenme",
          "icon": "restaurant_menu",
          "link": "/beslenme"
        },
        {
          "id": "p-6",
          "title": "Öğretmen İletişimi",
          "subtitle": "Birebir Mesajlaşma",
          "icon": "forum",
          "link": "/veli-portali/mesajlar"
        },
        {
          "id": "p-7",
          "title": "Görüşme Randevusu",
          "subtitle": "PDR & Yönetim",
          "icon": "event_available",
          "link": "/kayit-ve-basvuru"
        },
        {
          "id": "p-8",
          "title": "Belgeler & Formlar",
          "subtitle": "Dilekçe & İzin Belgeleri",
          "icon": "folder_open",
          "link": "/veli-portali/belgeler"
        }
      ],
      "storyBanner": {
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBW7JpjUGLG6hQ1lEt6ds6K-96oZG5vOoMlpAp8peVFLhkSS3vqBGKUVfDPPq57VhARMXTx8bCmgx4f3RihcjU_I3xN380pb1nOlb2CCImbUJJt_Vai7vhddVDS-uFupciZa0mymwk88vP9Qwx60W3Dww8FXPwFIMajg5W_EFQIoZBLbn36YjEd_cBB-4y59HYWzjDBb0amxJd05Gdu-AsxXx7QC_jR2_hCqh_AadN87GRGbLARQOz4",
        "imageAlt": "Sevgi dolu anne ve küçük kızı güneşli sınıfta resimli masal kitabı okurken",
        "badgeText": "Birlikte Büyüyoruz",
        "quote": "“Aile desteği, çocuğun gelişiminde en güçlü adımdır.”",
        "author": "Eylül Çocuk Akademisi Rehberlik ve Aile Danışmanlığı Birimi"
      },
      "quickHelp": {
        "title": "Veli Destek Hattı",
        "desc": "Portal girişi, şifre sıfırlama veya idari sorularınız için danışma hattımız hizmetinizdedir.",
        "buttonText": "Hemen Arayın",
        "phone": "0 (551) 589 32 12"
      }
    },
    "enrollment": {
      "header": {
        "badge": "2024 - 2025 Dönemi Ön Kayıtları Başladı",
        "title": "Kayıt ve Başvuru",
        "subtitle": "Eylül'de Yeni Bir Başlangıç",
        "description": "Eylül Çocuk Akademisi ailesine adım atmak için ilk adımı bugün atın. Çocuğunuzun bireysel gelişim hızına saygı duyan, sevgi temelli ve modern öğrenme ortamımızda yerinizi erken kayıt imkanlarıyla ayırtabilirsiniz."
      },
      "steps": [
        {
          "stepNumber": "01",
          "title": "Başvuru Formu",
          "description": "Ön başvuru formunu doldurun, uzman rehberlik ekibimiz en kısa sürede sizinle iletişime geçsin.",
          "icon": "assignment"
        },
        {
          "stepNumber": "02",
          "title": "Okul Ziyareti",
          "description": "Okulumuzu gezin, eğitim kadromuzla tanışın ve çocuğunuz için hazırlanan doğal atölye ortamını keşfedin.",
          "icon": "school"
        },
        {
          "stepNumber": "03",
          "title": "Kayıt Süreci",
          "description": "Kontenjan dahilinde kayıt işlemlerini güvenle tamamlayın, sıcacık Eylül Akademisi ailesine katılın.",
          "icon": "verified"
        }
      ],
      "scheduleTourCard": {
        "title": "Okul Ziyareti Planlayın",
        "description": "Çocuğunuzla birlikte sınıflarımızı, bahçemizi ve yemekhanemizi bizzat deneyimleyin. Randevu oluşturarak uzman pedagoglarımızla birebir görüşebilirsiniz.",
        "buttonText": "Randevu Al",
        "hoursNote": "Hafta içi 09:00 - 17:00 arası müsait",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGA22rDFxNNgD1z4vl8u94Ga7ZPRILsbzshGnnP_mnQL23QrMMQjZFwGAFrktFj2eHwOga2ROZNvGcHg2IqsHUW2pLRZ0cb9qIM2LFYpvQu9kS5A5FiWYqJAMZxuDX194VqENUTtgNy7K32Mhr7LW1T5sHJajHH3PvkeGtJ7oFCthA9RthQwpYgVtxJF77dURfP-0pX4nIAmEMQ02y4eriO6SDolx5nmxUSvqPCvCRoO3-dfdM6dJ",
        "imageAlt": "Güler yüzlü anaokulu öğretmeni ve okul ziyareti ortamı"
      },
      "faq": [
        {
          "question": "Hangi yaş gruplarına eğitim veriyorsunuz?",
          "answer": "Okulumuz 36-72 ay (3-6 yaş) grubu çocuklarımıza yaş ve gelişim özelliklerine göre ayrılmış özel sınıflarda hizmet vermektedir."
        },
        {
          "question": "Kayıt için hangi belgeler gereklidir?",
          "answer": "Ön kayıt onayından sonra; aşı kartı fotokopisi, kimlik fotokopileri, vesikalık fotoğraflar ve sağlık durum beyan formu talep edilmektedir."
        },
        {
          "question": "Okul saatleri ve servis imkânı nasıldır?",
          "answer": "Eğitim saatlerimiz tam gün 08:30 - 18:30 arasındadır. Çayyolu, Ümitköy, İncek ve Yaşamkent bölgelerine hostesli okul servisimiz mevcuttur."
        }
      ]
    },
    "contact": {
      "header": {
        "badge": "Birlikte Geleceği İnşa Edelim",
        "title": "İletişim",
        "subtitle": "Sizi Tanımaktan Mutluluk Duyarız",
        "description": "Eylül Çocuk Akademisi ailesine katılmak, eğitim modelimiz hakkında ayrıntılı bilgi edinmek veya okulumuzu yerinde keşfetmek için bize her zaman ulaşabilirsiniz."
      },
      "infoCards": {
        "phoneTitle": "Telefon",
        "phoneNumber": "0 (551) 589 32 12",
        "phoneHours": "Hafta içi 08.00-17.00",
        "emailTitle": "E-Posta",
        "emailAddress": "info@eylulanaokulu.com.tr",
        "emailNote": "24 Saat İçinde Yanıt",
        "locationTitle": "Konum",
        "locationCity": "Merkez / KARS",
        "locationNote": "Villalar Bölgesi",
        "faxTitle": "Faks",
        "faxNumber": "0 (474) 225 12 22"
      },
      "addressBox": {
        "title": "Açık Adresimiz",
        "fullAddress": "Şehitler mh. 108 Sokak, No: 8 AL (Villalar Bölgesi) KARS",
        "directionsNote": "Özel Eylül Anaokulu - Kars Kreş ve Anaokulu Müstakil Villa Kampüsü"
      },
      "mapInfo": {
        "title": "Özel Eylül Anaokulu - Kars Kreş ve Anaokulu",
        "badge": "Otopark ve Servis Alanı Mevcuttur",
        "directionsUrl": "https://maps.google.com/?q=Ozel+Eylul+Anaokulu+Kars",
        "visitingHours": "Hafta içi: 08.00 - 17.00"
      },
      "campusImage": {
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBLTcFcP5lqXe6FlaDkYCXiyBz960GYtwkL5B3CnPmnU0BATMdea0vAAz_DMA_5USrA4-_e7kF0_0KX1FSz4XUXLkfw0Dsbv8G69wNNxzcmDkUl94iOK3v9TvGHu5n7Wcl0vj17K_5OgIK2aE_QBQDfb5B0OcJGKxqkzjoqF7foIS4nKSRHF2MI8qpQXArYcRcCkFHn_xBtJvo9wjaJqUBTqpK6kZf-vewwrV9S4RGsAjBe7FR81dVSnPmnU0BATMdea0vAAz_DMA_5USrA4-_e7kF0_0KX1FSz4XUXLkfw0Dsbv8G69wNNxzcmDkUl94iOK3v9TvGHu5n7Wcl0vj17K_5OgIK2aE_QBQDfb5B0OcJGKxqkzjoqF7foIS4nKSRHF2MI8qpQXArYcRcCkFHn_xBtJvo9wjaJqUBTqpK6kZf-vewwrV9S4RGsAjBe7FR81dVS",
        "badge": "Kampüsümüz",
        "title": "Kars Yeşillikler İçinde Güvenli Villa Bahçesi",
        "subtitle": "Müstakil villa ve çocuklara özel geniş yeşil yaşam alanı"
      },
      "formIntro": {
        "title": "Bize Yazın",
        "subtitle": "Sorularınızı, okul ziyareti taleplerinizi veya kayıt ile ilgili detayları form aracılığıyla hemen bize iletebilirsiniz."
      }
    }
  },
  "mediaLibrary": [
    {
      "id": "med-hero-1",
      "filename": "hero-classroom-smile.jpg",
      "originalName": "Eylul-Hero-Sinif.jpg",
      "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuAqqBvvgnitjIqoyH1pgnXbj3o4-F3EBt82a3u3eV1xvAXVhj6tXut0hX99r3X7k_NL9HykxwyoMAfDckVWNsua-e_pXcB3R84YrYxEZsoajqTAQxZT2l7p_1kSPuizUpKsEFIGHQbrMYEY_QZhoG4pm2RfCOqHIRe9NRR4maYaukvni2me_eE2Pj1a4XRvgH6ZiN9V771zsExQa-dWdT3CSSFClq1DC-CDQukG6_6r6u5t4Je3cqAu",
      "mimeType": "image/jpeg",
      "sizeBytes": 1283323,
      "altText": "Eylül Çocuk Akademisi mutlu öğrenci",
      "tags": [
        "hero",
        "anasayfa",
        "ogrenci",
        "sinif"
      ],
      "uploadedAt": "2026-10-21T08:00:00.000Z"
    },
    {
      "id": "med-campus-ext",
      "filename": "campus-exterior-garden.jpg",
      "originalName": "Cayyolu-Villa-Bahce.jpg",
      "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuBLTcFcP5lqXe6FlaDkYCXiyBz960GYtwkL5B3CnPmnU0BATMdea0vAAz_DMA_5USrA4-_e7kF0_0KX1FSz4XUXLkfw0Dsbv8G69wNNxzcmDkUl94iOK3v9TvGHu5n7Wcl0vj17K_5OgIK2aE_QBQDfb5B0OcJGKxqkzjoqF7foIS4nKSRHF2MI8qpQXArYcRcCkFHn_xBtJvo9wjaJqUBTqpK6kZf-vewwrV9S4RGsAjBe7FR81dVSnPmnU0BATMdea0vAAz_DMA_5USrA4-_e7kF0_0KX1FSz4XUXLkfw0Dsbv8G69wNNxzcmDkUl94iOK3v9TvGHu5n7Wcl0vj17K_5OgIK2aE_QBQDfb5B0OcJGKxqkzjoqF7foIS4nKSRHF2MI8qpQXArYcRcCkFHn_xBtJvo9wjaJqUBTqpK6kZf-vewwrV9S4RGsAjBe7FR81dVS",
      "mimeType": "image/jpeg",
      "sizeBytes": 880202,
      "altText": "Yeşillikler içinde güvenli bahçe ve okul dış cephesi",
      "tags": [
        "kampus",
        "bahce",
        "bina",
        "iletisim"
      ],
      "uploadedAt": "2026-10-21T08:05:00.000Z"
    },
    {
      "id": "med-bem-montessori",
      "filename": "bem-wooden-blocks.jpg",
      "originalName": "Montessori-BEM-Ogrenme.jpg",
      "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuA_HUJ8Dk0I5-9-CcAVN-23EtmKiHOp7uF7iJTio35lPh-RVt2Ww3BzorxwMjJCNw6-6J3RjPlIUZfiZPQqxBzublamKjRz0wCD7IXo6qX8F_35XYKa_eUaYfvau2j1sffb6E8wDPNa9Uak8ftkjp5WfYtaN4mv58_zTpEwiApJP9Cie23W1J1G_wIQp4-L2WSE8A7B9FraFpJuirTRQOaK_08d1Dwe4biK2A2tzfjBJj-bxe06lsLs-RVt2Ww3BzorxwMjJCNw6-6J3RjPlIUZfiZPQqxBzublamKjRz0wCD7IXo6qX8F_35XYKa_eUaYfvau2j1sffb6E8wDPNa9Uak8ftkjp5WfYtaN4mv58_zTpEwiApJP9Cie23W1J1G_wIQp4-L2WSE8A7B9FraFpJuirTRQOaK_08d1Dwe4biK2A2tzfjBJj-bxe06lsLs",
      "mimeType": "image/jpeg",
      "sizeBytes": 667848,
      "altText": "BEM modeli ahşap Montessori blokları ile öğrenen çocuk",
      "tags": [
        "bem",
        "montessori",
        "egitim-modeli"
      ],
      "uploadedAt": "2026-10-21T08:10:00.000Z"
    },
    {
      "id": "med-parent-child",
      "filename": "mother-child-storybook.jpg",
      "originalName": "Veli-Cocuk-Kitap.jpg",
      "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuBW7JpjUGLG6hQ1lEt6ds6K-96oZG5vOoMlpAp8peVFLhkSS3vqBGKUVfDPPq57VhARMXTx8bCmgx4f3RihcjU_I3xN380pb1nOlb2CCImbUJJt_Vai7vhddVDS-uFupciZa0mymwk88vP9Qwx60W3Dww8FXPwFIMajg5W_EFQIoZBLbn36YjEd_cBB-4y59HYWzjDBb0amxJd05Gdu-AsxXx7QC_jR2_hCqh_AadN87GRGbLARQOz4",
      "mimeType": "image/jpeg",
      "sizeBytes": 1529886,
      "altText": "Anne ve kızı birlikte neşeyle resimli hikaye kitabı okurken",
      "tags": [
        "veli",
        "aile",
        "rehberlik",
        "sevgi"
      ],
      "uploadedAt": "2026-10-21T08:15:00.000Z"
    },
    {
      "id": "med-act-piano",
      "filename": "piano-class.jpg",
      "originalName": "Piyano-Brans-Dersi.jpg",
      "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCyiN03arbqJBsDVFV1HUx8dy-0bAohSvrbAVnltFemm95vAkyAGyQNAHxMTuLHa4qDTSkH0IXZIxJhyXManVZMlLgW0w5JUzYdl9d8x_kcnTvOPOWa-blJUhgUfC6Rz6QiBCywGeQacUHXhmod4LDhy9CeBY_xClJyR-geaBYhVs8Tar70UAri1uEDuyTLj28jRWD5AEZt2m8MajVuEjyIozikNXLhwDoaBW9ewtiiHYMK7OQ8sQNM",
      "mimeType": "image/jpeg",
      "sizeBytes": 310000,
      "altText": "Piyano başında nota ve tuşları öğrenen çocuk",
      "tags": [
        "etkinlik",
        "piyano",
        "muzik"
      ],
      "uploadedAt": "2026-10-21T08:20:00.000Z"
    },
    {
      "id": "med-act-chess",
      "filename": "chess-club.jpg",
      "originalName": "Satranc-Kulubu.jpg",
      "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCmlJHBRLWiQ2Q-qpQGJqv2VTSeyDaB_wu7sGjoGaDg7nR8ikf6mZO_2dZaDKbGPKGGf0cVzjzY0sh5sLk21R54Zw1X3CLZ5UMKolADJfT6z9coFJns9Ffwub5onCfCeNGjrvvs9Q9WhWPB3uC8hadiuzeghHvYARzhn_-K8fGf_n1xyullYs_j4EiM51ZUO28vTf3BQuwr8w6hMUsFFzXRd-EHoBfpr3ebNXAdVPQJE66WnFsCUm3f",
      "mimeType": "image/jpeg",
      "sizeBytes": 295000,
      "altText": "Satranç tahtasında strateji geliştiren minik öğrenci",
      "tags": [
        "etkinlik",
        "satranc",
        "zeka"
      ],
      "uploadedAt": "2026-10-21T08:25:00.000Z"
    }
  ],
  "crmLeads": [
    {
      "parentName": "Test Veli Ayşe",
      "phone": "0555 123 45 67",
      "email": "ayse.test@example.com",
      "childName": "Can",
      "childAge": 4,
      "desiredClass": "4 Yaş Grubu",
      "source": "web_form",
      "status": "yeni",
      "notes": "Memati QA kabul testi başvurusu",
      "id": "lead-1792586075439",
      "createdAt": "2026-10-21T12:34:35.439Z",
      "updatedAt": "2026-10-21T12:34:35.439Z"
    },
    {
      "parentName": "Test Veli Ayşe",
      "phone": "0555 123 45 67",
      "email": "ayse.test@example.com",
      "childName": "Can",
      "childAge": 4,
      "desiredClass": "4 Yaş Grubu",
      "source": "web_form",
      "status": "yeni",
      "notes": "Memati QA kabul testi başvurusu",
      "id": "lead-1792586067219",
      "createdAt": "2026-10-21T12:34:27.219Z",
      "updatedAt": "2026-10-21T12:34:27.219Z"
    },
    {
      "id": "lead-101",
      "parentName": "Ayşe Yılmaz",
      "phone": "0532 111 22 33",
      "email": "ayse.yilmaz@gmail.com",
      "childName": "Can Yılmaz",
      "childAge": 4,
      "desiredClass": "4 Yaş Kelebekler",
      "source": "web_form",
      "status": "randevu_verildi",
      "notes": "İngilizce ağırlıklı eğitim programı ve Çayyolu servis güzergahını sordu. 23 Ekim 14:00 okul ziyareti planlandı.",
      "scheduledVisitDate": "2026-10-23T11:00:00.000Z",
      "createdAt": "2026-10-20T09:30:00.000Z",
      "updatedAt": "2026-10-21T08:00:00.000Z",
      "assignedStaff": "Merve Öğretmen (Halkla İlişkiler)"
    },
    {
      "id": "lead-102",
      "parentName": "Murat Demir",
      "phone": "0544 222 33 44",
      "email": "murat.demir@outlook.com",
      "childName": "Defne Demir",
      "childAge": 5,
      "desiredClass": "5 Yaş Bilginler (İlkokula Hazırlık)",
      "source": "tavsiye",
      "status": "on_kayit",
      "notes": "Okul ziyareti tamamlandı. Veli ve çocuk kampüsü çok beğendi. Ön kayıt evrakları teslim alındı.",
      "scheduledVisitDate": "2026-10-19T10:00:00.000Z",
      "createdAt": "2026-10-18T14:15:00.000Z",
      "updatedAt": "2026-10-20T16:00:00.000Z",
      "assignedStaff": "Selin Hanım (Müdür Yardımcısı)"
    },
    {
      "id": "lead-103",
      "parentName": "Ece & Burak Çetin",
      "phone": "0555 333 44 55",
      "email": "ece.cetin@sirket.com",
      "childName": "Mert Çetin",
      "childAge": 3,
      "desiredClass": "3 Yaş Çiçekler",
      "source": "instagram",
      "status": "yeni",
      "notes": "Instagram reklamı üzerinden form bıraktı. Yarım gün ve tam gün seçenekleri hakkında bilgi bekliyor.",
      "createdAt": "2026-10-21T07:45:00.000Z",
      "updatedAt": "2026-10-21T07:45:00.000Z",
      "assignedStaff": "Merve Öğretmen"
    }
  ],
  "portalAnnouncements": [
    {
      "id": "ann-1",
      "title": "Sonbahar Doğa ve Ekoloji Gezisi Hakkında",
      "content": "Sevgili Velilerimiz, 28 Ekim Cuma günü Çayyolu Doğa Parkı’nda yapacağımız sonbahar yaprak inceleme ve palamut toplama atölyesi için çocukların rahat spor ayakkabı ve mevsimlik mont giymelerini rica ederiz.",
      "targetClass": "Tümü",
      "publishDate": "2026-10-21T08:00:00.000Z",
      "isImportant": true,
      "author": "Okul Yönetimi"
    },
    {
      "id": "ann-2",
      "title": "Kasım Ayı Yemek Menüsü ve Diyetisyen Bülteni Yayında",
      "content": "Bağışıklık sistemini destekleyen taze sebze çorbaları ve kış meyveleriyle zenginleştirilmiş yeni ay menümüz Veli Portalında yayınlanmıştır.",
      "targetClass": "Tümü",
      "publishDate": "2026-10-20T10:00:00.000Z",
      "isImportant": false,
      "author": "Uzm. Dyt. Zeynep Kaya"
    }
  ],
  "studentPortfolios": [
    {
      "id": "port-1",
      "studentId": "std-201",
      "studentName": "Can Yılmaz",
      "className": "4 Yaş Kelebekler",
      "title": "Montessori Ahşap Geometri Çarkı",
      "bemCategory": "Bilişsel Gelişim",
      "date": "2026-10-20",
      "teacherNotes": "Can, üçgen ve prizma blokları eşleştirirken yüksek odaklanma gösterdi. Şekilleri arkadaşlarına anlatarak ifade becerisini sergiledi.",
      "mediaUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuA_HUJ8Dk0I5-9-CcAVN-23EtmKiHOp7uF7iJTio35lPh-RVt2Ww3BzorxwMjJCNw6-6J3RjPlIUZfiZPQqxBzublamKjRz0wCD7IXo6qX8F_35XYKa_eUaYfvau2j1sffb6E8wDPNa9Uak8ftkjp5WfYtaN4mv58_zTpEwiApJP9Cie23W1J1G_wIQp4-L2WSE8A7B9FraFpJuirTRQOaK_08d1Dwe4biK2A2tzfjBJj-bxe06lsLs-RVt2Ww3BzorxwMjJCNw6-6J3RjPlIUZfiZPQqxBzublamKjRz0wCD7IXo6qX8F_35XYKa_eUaYfvau2j1sffb6E8wDPNa9Uak8ftkjp5WfYtaN4mv58_zTpEwiApJP9Cie23W1J1G_wIQp4-L2WSE8A7B9FraFpJuirTRQOaK_08d1Dwe4biK2A2tzfjBJj-bxe06lsLs",
      "ratingGrade": "Çok Başarılı / Gelişim Sürüyor"
    },
    {
      "id": "port-2",
      "studentId": "std-202",
      "studentName": "Defne Demir",
      "className": "5 Yaş Bilginler",
      "title": "All Day English - Circle Time Şarkısı",
      "bemCategory": "Dil Gelişimi",
      "date": "2026-10-19",
      "teacherNotes": "Defne, \"Autumn Leaves Falling Down\" şarkısının sözlerine ve telaffuzuna çok hızlı adapte oldu, sınıfa liderlik etti.",
      "mediaUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuAIhDg4p8-gT_vNjaupVxMvU0BM4pvpL49udkQZ5Ol2cFtEwFhnwzEWuXCFlWivq37jmc2h7W-EPlaXlBykvmWvHpOPBI9R2omsbWD241a1OGYNynRhHpdbv-KlMJp--m4NdVsY_SnRf1zyvgFZFPFNIIr4fV-zvDCSyfpmiMQKiwwl7VtStT4LuAH3wqE0ToAYQYQf50eCxKmCatW4CeLflxfHnYpELKtFrqSBOhce_M-zCF7KKgn0",
      "ratingGrade": "Mükemmel Adaptasyon"
    }
  ],
  "jobPositions": [
    {
      "id": "job-1",
      "title": "Okul Öncesi Öğretmeni",
      "department": "Eğitim Kadrosu",
      "type": "Tam Zamanlı",
      "description": "Üniversitelerin Okul Öncesi Öğretmenliği lisans bölümünden mezun, BEM ve alternatif pedagojik yaklaşımlara açık, sevgi dolu eğitimciler arıyoruz.",
      "requirements": [
        "En az 3 yıl anaokulu sınıf deneyimi",
        "Montessori veya Reggio Emilia tecrübesi tercih sebebidir",
        "Güler yüzlü, sabırlı ve güçlü empati yeteneği",
        "Sigara kullanmayan"
      ],
      "isActive": true,
      "postedAt": "2026-10-15T09:00:00.000Z"
    },
    {
      "id": "job-2",
      "title": "Native / B2+ İngilizce Öğretmeni",
      "department": "Yabancı Diller",
      "type": "Tam Zamanlı",
      "description": "All Day English çift dilli modelimizde 3-6 yaş miniklerle gün boyu doğal iletişim kuracak ana dili veya ileri seviye İngilizce öğretmeni.",
      "requirements": [
        "İlgili lisans diploması veya CELTA/TEFL sertifikası",
        "Çocuklarla oyun ve drama odaklı dil öğretim tecrübesi",
        "Enerjik, şarkı ve ritim destekli iletişim becerisi"
      ],
      "isActive": true,
      "postedAt": "2026-10-16T11:00:00.000Z"
    }
  ],
  "jobApplications": [
    {
      "id": "app-501",
      "positionId": "job-1",
      "positionTitle": "Okul Öncesi Öğretmeni",
      "candidateName": "Zehra Arslan",
      "phone": "0533 999 88 77",
      "email": "zehra.arslan@gmail.com",
      "experienceYears": 4,
      "coverLetter": "Hacettepe Okul Öncesi mezunuyum. Eylül Çocuk Akademisi’nin BEM ve doğa temelli vizyonuna katkı sağlamak isterim.",
      "cvFileUrl": "/uploads/cvs/zehra-arslan-cv.pdf",
      "status": "mulakata_cagirildi",
      "appliedAt": "2026-10-18T14:30:00.000Z"
    }
  ],
  "socialPosts": [
    {
      "id": "soc-1",
      "platform": "instagram",
      "type": "reels",
      "scheduledDate": "2026-10-22T12:00:00.000Z",
      "caption": "Doğal bahçemizde sonbaharın renklerini keşfediyoruz! 🍂🌾 Minik eller doğayla buluşunca öğrenmek ne kadar neşeli... #EylulCocukAkademisi #CayyoluAnaokulu #MontessoriAnkara",
      "hashtags": [
        "#EylulCocukAkademisi",
        "#CayyoluAnaokulu",
        "#BEM",
        "#ErkenCocukluk",
        "#AllDayEnglish"
      ],
      "mediaUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuBLTcFcP5lqXe6FlaDkYCXiyBz960GYtwkL5B3CnPmnU0BATMdea0vAAz_DMA_5USrA4-_e7kF0_0KX1FSz4XUXLkfw0Dsbv8G69wNNxzcmDkUl94iOK3v9TvGHu5n7Wcl0vj17K_5OgIK2aE_QBQDfb5B0OcJGKxqkzjoqF7foIS4nKSRHF2MI8qpQXArYcRcCkFHn_xBtJvo9wjaJqUBTqpK6kZf-vewwrV9S4RGsAjBe7FR81dVS",
      "status": "onaylandi"
    },
    {
      "id": "soc-2",
      "platform": "linkedin",
      "type": "gonderi",
      "scheduledDate": "2026-10-23T09:00:00.000Z",
      "caption": "Bütünleştirilmiş Eğitim Modeli (BEM) ile erken çocukluk döneminde 6 temel gelişim alanını nasıl dengeliyoruz? Pedagojik makalemiz yayında.",
      "hashtags": [
        "#EgitimdeYenilik",
        "#OkulOncesi",
        "#Pedagoji",
        "#EylulAkademi"
      ],
      "mediaUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuA_HUJ8Dk0I5-9-CcAVN-23EtmKiHOp7uF7iJTio35lPh-RVt2Ww3BzorxwMjJCNw6-6J3RjPlIUZfiZPQqxBzublamKjRz0wCD7IXo6qX8F_35XYKa_eUaYfvau2j1sffb6E8wDPNa9Uak8ftkjp5WfYtaN4mv58_zTpEwiApJP9Cie23W1J1G_wIQp4-L2WSE8A7B9FraFpJuirTRQOaK_08d1Dwe4biK2A2tzfjBJj-bxe06lsLs",
      "status": "taslak"
    }
  ],
  "activityVideos": [
    {
      "id": "vid-1",
      "title": "Sonbahar Doğa ve Ekoloji Atölyemiz",
      "description": "Öğrencilerimizle okul bahçesinde yaprak inceleme, toprakla temas ve organik tohum ekim etkinliğimiz.",
      "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "thumbnailUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuBLTcFcP5lqXe6FlaDkYCXiyBz960GYtwkL5B3CnPmnU0BATMdea0vAAz_DMA_5USrA4-_e7kF0_0KX1FSz4XUXLkfw0Dsbv8G69wNNxzcmDkUl94iOK3v9TvGHu5n7Wcl0vj17K_5OgIK2aE_QBQDfb5B0OcJGKxqkzjoqF7foIS4nKSRHF2MI8qpQXArYcRcCkFHn_xBtJvo9wjaJqUBTqpK6kZf-vewwrV9S4RGsAjBe7FR81dVS",
      "category": "Fen & Doğa",
      "date": "2026-10-18"
    },
    {
      "id": "vid-2",
      "title": "All Day English: Circle Time Songs",
      "description": "İngilizce öğretmenimiz eşliğinde Circle Time ritim şarkıları ve drama diyalogları.",
      "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "thumbnailUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuAIhDg4p8-gT_vNjaupVxMvU0BM4pvpL49udkQZ5Ol2cFtEwFhnwzEWuXCFlWivq37jmc2h7W-EPlaXlBykvmWvHpOPBI9R2omsbWD241a1OGYNynRhHpdbv-KlMJp--m4NdVsY_SnRf1zyvgFZFPFNIIr4fV-zvDCSyfpmiMQKiwwl7VtStT4LuAH3wqE0ToAYQYQf50eCxKmCatW4CeLflxfHnYpELKtFrqSBOhce_M-zCF7KKgn0",
      "category": "All Day English",
      "date": "2026-10-15"
    },
    {
      "id": "vid-3",
      "title": "Minik Sanatçılar: Renkler ve Tuval Çalışması",
      "description": "Çocuklarımızın parmak boyası ve fırçalarla özgün duygu ve düşüncelerini tuvale yansıttığı renkli dakikalar.",
      "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "thumbnailUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuAwu52rU0SIT8ikWDgkNHi7XkWQjVRwqmgfd_ntKBvMaIA-4Fe-rK0FsIKMGGEik7NqqRCdDGzdBzEY4AczBOAa6EzJXBisddPqt9KcpTIk1E0p6kQ45so3YYdwcUY9Pq0xI3dCao9P5I-yMs_dbB-Ov5LmqBk31O-6o3jqCp2pUpJrVaaLHJcP_HbNPGVWTBWBhUvMJvOi07_cZrFuPB33n5iZnr9ReIvpkKqofc6pfc3741l-XFfh",
      "category": "Sanat & Tasarım",
      "date": "2026-10-12"
    },
    {
      "id": "vid-4",
      "title": "Montessori Denge ve Koordinasyon Parkuru",
      "description": "Kaba motor becerilerini güçlendiren denge tahtası ve jimnastik çalışmaları.",
      "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "thumbnailUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuDK9BJZq33Vq-ESZ01DJCa2vSHyrbqa9yUU-jbyIsazRqGsCa_DSGpW9sfC8XTfxR7tKlVxKakm5PIYRg75I6KSUbyLdXvehcT54GI-amuzszYTjXtUvXmbEm2mlXVzd7p4QYjFXP0I6Y6sziiVlhk_OSlEwfTmxZ8apyBbSoRyAtc41kqr5CuLbOiGAJXl5k7U2aTvdhxk29d4Y_HeM6ZTQEVaHMjEa8iXApOcm_MdqXNNZ296O6QO",
      "category": "Beden & Hareket",
      "date": "2026-10-09"
    }
  ],
  "courseSchedule": {
    "badge": "2024 - 2025 Eğitim Öğretim Dönemi",
    "title": "Özel Eylül Anaokulu Ders Programı",
    "subtitle": "Bütünleştirilmiş Eğitim Modeli (BEM) Esaslı Haftalık Plan",
    "description": "Öğrencilerimizin yaş gruplarına özel zihinsel, bedensel ve dil gelişim biyoritmleri gözetilerek hazırlanmış haftalık ders ve etkinlik akışı.",
    "scheduleImageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuA_HUJ8Dk0I5-9-CcAVN-23EtmKiHOp7uF7iJTio35lPh-RVt2Ww3BzorxwMjJCNw6-6J3RjPlIUZfiZPQqxBzublamKjRz0wCD7IXo6qX8F_35XYKa_eUaYfvau2j1sffb6E8wDPNa9Uak8ftkjp5WfYtaN4mv58_zTpEwiApJP9Cie23W1J1G_wIQp4-L2WSE8A7B9FraFpJuirTRQOaK_08d1Dwe4biK2A2tzfjBJj-bxe06lsLs",
    "ageGroupTabs": [
      {
        "id": "tab-3yas",
        "name": "3 Yaş Grubu (Çiçekler Sınıfı)",
        "rows": [
          {
            "time": "08.00 - 08.45",
            "monday": "Güne Merhaba & Serbest Oyun",
            "tuesday": "Güne Merhaba & Serbest Oyun",
            "wednesday": "Güne Merhaba & Serbest Oyun",
            "thursday": "Güne Merhaba & Serbest Oyun",
            "friday": "Güne Merhaba & Serbest Oyun"
          },
          {
            "time": "08.45 - 09.30",
            "monday": "Doğal Kahvaltı Saati",
            "tuesday": "Doğal Kahvaltı Saati",
            "wednesday": "Doğal Kahvaltı Saati",
            "thursday": "Doğal Kahvaltı Saati",
            "friday": "Doğal Kahvaltı Saati"
          },
          {
            "time": "09.30 - 10.15",
            "monday": "BEM: Duyusal Keşif Çemberi",
            "tuesday": "All Day English: Songs & Rhymes",
            "wednesday": "Montessori Ahşap Bloklar",
            "thursday": "All Day English: Action Words",
            "friday": "Masal & Hikaye Çemberi"
          },
          {
            "time": "10.30 - 11.15",
            "monday": "Jimnastik & Temel Hareket",
            "tuesday": "Sanat & Parmak Boyası",
            "wednesday": "Orff & Ritim Atölyesi",
            "thursday": "Doğa & Bahçe Keşfi",
            "friday": "Drama & Kukla Tiyatrosu"
          },
          {
            "time": "11.30 - 12.30",
            "monday": "Öğle Yemeği & Öz Bakım",
            "tuesday": "Öğle Yemeği & Öz Bakım",
            "wednesday": "Öğle Yemeği & Öz Bakım",
            "thursday": "Öğle Yemeği & Öz Bakım",
            "friday": "Öğle Yemeği & Öz Bakım"
          },
          {
            "time": "12.30 - 14.00",
            "monday": "Öğle Uykusu / Sessiz Dinlenme",
            "tuesday": "Öğle Uykusu / Sessiz Dinlenme",
            "wednesday": "Öğle Uykusu / Sessiz Dinlenme",
            "thursday": "Öğle Uykusu / Sessiz Dinlenme",
            "friday": "Öğle Uykusu / Sessiz Dinlenme"
          },
          {
            "time": "14.15 - 15.00",
            "monday": "All Day English: Circle Time",
            "tuesday": "Bilişsel Eşleştirme Oyunları",
            "wednesday": "Kil & Yoğurma Atölyesi",
            "thursday": "BEM Değerler Eğitimi",
            "friday": "Müzikli Oyunlar"
          },
          {
            "time": "15.15 - 15.45",
            "monday": "İkindi Beslenmesi",
            "tuesday": "İkindi Beslenmesi",
            "wednesday": "İkindi Beslenmesi",
            "thursday": "İkindi Beslenmesi",
            "friday": "İkindi Beslenmesi"
          },
          {
            "time": "16.00 - 17.00",
            "monday": "Bahçe Oyunları & Uğurlama",
            "tuesday": "Bahçe Oyunları & Uğurlama",
            "wednesday": "Bahçe Oyunları & Uğurlama",
            "thursday": "Bahçe Oyunları & Uğurlama",
            "friday": "Haftanın Kapanışı & Uğurlama"
          }
        ]
      },
      {
        "id": "tab-4yas",
        "name": "4 Yaş Grubu (Kelebekler Sınıfı)",
        "rows": [
          {
            "time": "08.00 - 08.45",
            "monday": "Güne Merhaba & Köşe Oyunları",
            "tuesday": "Güne Merhaba & Köşe Oyunları",
            "wednesday": "Güne Merhaba & Köşe Oyunları",
            "thursday": "Güne Merhaba & Köşe Oyunları",
            "friday": "Güne Merhaba & Köşe Oyunları"
          },
          {
            "time": "08.45 - 09.30",
            "monday": "Doğal Kahvaltı Saati",
            "tuesday": "Doğal Kahvaltı Saati",
            "wednesday": "Doğal Kahvaltı Saati",
            "thursday": "Doğal Kahvaltı Saati",
            "friday": "Doğal Kahvaltı Saati"
          },
          {
            "time": "09.30 - 10.15",
            "monday": "All Day English: Daily Dialogues",
            "tuesday": "BEM Bilişsel Matematik",
            "wednesday": "All Day English: Storybook",
            "thursday": "Fen & Deney Laboratuvarı",
            "friday": "Satranç Temel Kuralları"
          },
          {
            "time": "10.30 - 11.15",
            "monday": "Piyano & Kulak Eğitimi",
            "tuesday": "Jimnastik & Parkur",
            "wednesday": "Görsel Sanatlar & Kolaj",
            "thursday": "Robotik Kodlama Başlangıç",
            "friday": "Ekoloji & Bahçe Bakımı"
          },
          {
            "time": "11.30 - 12.30",
            "monday": "Öğle Yemeği & Hijyen",
            "tuesday": "Öğle Yemeği & Hijyen",
            "wednesday": "Öğle Yemeği & Hijyen",
            "thursday": "Öğle Yemeği & Hijyen",
            "friday": "Öğle Yemeği & Hijyen"
          },
          {
            "time": "12.30 - 13.45",
            "monday": "Dinlenme & Kitap İnceleme",
            "tuesday": "Dinlenme & Kitap İnceleme",
            "wednesday": "Dinlenme & Kitap İnceleme",
            "thursday": "Dinlenme & Kitap İnceleme",
            "friday": "Dinlenme & Kitap İnceleme"
          },
          {
            "time": "14.00 - 15.00",
            "monday": "Yaratıcı Drama & Rol Alma",
            "tuesday": "All Day English: Games",
            "wednesday": "BEM Karakter & Nezaket",
            "thursday": "Seramik & Heykel",
            "friday": "Akıl & Zeka Oyunları"
          },
          {
            "time": "15.15 - 15.45",
            "monday": "İkindi Beslenmesi",
            "tuesday": "İkindi Beslenmesi",
            "wednesday": "İkindi Beslenmesi",
            "thursday": "İkindi Beslenmesi",
            "friday": "İkindi Beslenmesi"
          },
          {
            "time": "16.00 - 17.00",
            "monday": "Serbest Bahçe Zamanı & Uğurlama",
            "tuesday": "Serbest Bahçe Zamanı & Uğurlama",
            "wednesday": "Serbest Bahçe Zamanı & Uğurlama",
            "thursday": "Serbest Bahçe Zamanı & Uğurlama",
            "friday": "Hafta Sonu Vedalaşması"
          }
        ]
      },
      {
        "id": "tab-5yas",
        "name": "5 Yaş Grubu (Bilginler Sınıfı - İlkokula Hazırlık)",
        "rows": [
          {
            "time": "08.00 - 08.45",
            "monday": "Karşılama & Planlama Çemberi",
            "tuesday": "Karşılama & Planlama Çemberi",
            "wednesday": "Karşılama & Planlama Çemberi",
            "thursday": "Karşılama & Planlama Çemberi",
            "friday": "Karşılama & Planlama Çemberi"
          },
          {
            "time": "08.45 - 09.30",
            "monday": "Doğal Kahvaltı Saati",
            "tuesday": "Doğal Kahvaltı Saati",
            "wednesday": "Doğal Kahvaltı Saati",
            "thursday": "Doğal Kahvaltı Saati",
            "friday": "Doğal Kahvaltı Saati"
          },
          {
            "time": "09.30 - 10.15",
            "monday": "İlkokula Hazırlık: Çizgi & Fonetik",
            "tuesday": "All Day English: Cambridge Fun",
            "wednesday": "Erken Matematik & Örüntüler",
            "thursday": "All Day English: Conversation",
            "friday": "Algoritmik Kodlama & STEM"
          },
          {
            "time": "10.30 - 11.15",
            "monday": "Satranç Taktikleri",
            "tuesday": "Piyano & Şan Atölyesi",
            "wednesday": "Spor & Denge Jimnastiği",
            "thursday": "Resim & Sanat Tarihi",
            "friday": "Fen, Uzay & Doğa Deneyleri"
          },
          {
            "time": "11.30 - 12.30",
            "monday": "Öğle Yemeği & Masa Adabı",
            "tuesday": "Öğle Yemeği & Masa Adabı",
            "wednesday": "Öğle Yemeği & Masa Adabı",
            "thursday": "Öğle Yemeği & Masa Adabı",
            "friday": "Öğle Yemeği & Masa Adabı"
          },
          {
            "time": "12.30 - 13.30",
            "monday": "Akıl Oyunları & Kitap Saati",
            "tuesday": "Akıl Oyunları & Kitap Saati",
            "wednesday": "Akıl Oyunları & Kitap Saati",
            "thursday": "Akıl Oyunları & Kitap Saati",
            "friday": "Akıl Oyunları & Kitap Saati"
          },
          {
            "time": "13.45 - 15.00",
            "monday": "BEM: Küresel Değerler",
            "tuesday": "Felsefe (P4C) Çocuklarla Sohbet",
            "wednesday": "Yaratıcı Sahne Draması",
            "thursday": "Bilim & Keşif Sunumu",
            "friday": "Portfolyo Değerlendirme"
          },
          {
            "time": "15.15 - 15.45",
            "monday": "İkindi Beslenmesi",
            "tuesday": "İkindi Beslenmesi",
            "wednesday": "İkindi Beslenmesi",
            "thursday": "İkindi Beslenmesi",
            "friday": "İkindi Beslenmesi"
          },
          {
            "time": "16.00 - 17.00",
            "monday": "Açık Hava & Serbest Aktivite",
            "tuesday": "Açık Hava & Serbest Aktivite",
            "wednesday": "Açık Hava & Serbest Aktivite",
            "thursday": "Açık Hava & Serbest Aktivite",
            "friday": "Uğurlama"
          }
        ]
      }
    ]
  },
  "monthlyMealList": {
    "badge": "Eylül Mutfak Atölyesi",
    "title": "Aylık Yemek Menüsü",
    "monthLabel": "Kasım 2026 Beslenme Takvimi",
    "description": "Uzman çocuk diyetisyenimiz tarafından hazırlanan; taze, katkısız, mevsimine uygun organik gıdalarla hazırlanan 4 haftalık tam menü planı.",
    "menuImageUrl": "https://lh3.googleusercontent.com/aida-public/AB6AXuBDPtPuOkoCFkx4vkNoJTLA0Ul1IQs_atMo-Mh2b-M4DK981siYIn5sPXDE7Z41c0lJrDUHSNWOtEC6jQE1mQAv-iYOxP69s4nGmJuMqRqamlIxH246wiGWbnCkw4h6tS-2on-7k5EygAAFeZagzxym3RSx0XZE11hkLk3Mc37UmdKrH5Z42tg_2DUENN6ADUzHkb8rP80gItK_k1kIvelwKiMCtZ6LyHO6MzPYMxMMSDKbPqUgZf-o",
    "weeks": [
      {
        "id": "hafta-1",
        "weekName": "1. Hafta (02 - 06 Kasım)",
        "days": [
          {
            "dayName": "Pazartesi",
            "breakfast": "Köy yumurtası, beyaz peynir, zeytin, domates-salatalık, tam buğday ekmeği, ıhlamur",
            "lunch": "Süzme mercimek çorbası, zeytinyağlı taze fasulye, bulgur pilavı, ev yapımı yoğurt",
            "snack": "Ilık süt, yulaflı fındıklı kurabiye, mevsim elması"
          },
          {
            "dayName": "Salı",
            "breakfast": "Kaşar peyniri, ev yapımı vişne reçeli, tereyağı, ceviz içi, omlet, çavdar ekmeği",
            "lunch": "Yayla çorbası, fırında anne köftesi, patates püresi, mevsim salatası",
            "snack": "Kefir, muz dilimleri, kuru üzüm & badem"
          },
          {
            "dayName": "Çarşamba",
            "breakfast": "Labne peyniri, haşlanmış yumurta, siyah zeytin, taze nane, simit, adaçayı",
            "lunch": "Ezogelin çorbası, nohut yemeği, siyez bulguru pilavı, ev yapımı turşu, ayran",
            "snack": "Taze sıkılmış elma-havuç suyu, fırınlanmış kek"
          },
          {
            "dayName": "Perşembe",
            "breakfast": "Menemen, beyaz peynir, söğüş tabağı, tam tahıllı köy ekmeği, süt",
            "lunch": "Balkabağı çorbası, fırında sebzeli somon balığı, haşlanmış brokoli, yeşil salata",
            "snack": "Ev yapımı meyveli yoğurt, buğday grissini"
          },
          {
            "dayName": "Cuma",
            "breakfast": "Peynirli krep, süzme bal, ceviz, siyah zeytin, günlük taze süt",
            "lunch": "Tarhana çorbası, kıymalı ıspanak yemeği, fırın makarna, ev kompostosu",
            "snack": "Ilık süt, havuçlu tarçınlı cevizli kek"
          }
        ]
      },
      {
        "id": "hafta-2",
        "weekName": "2. Hafta (09 - 13 Kasım)",
        "days": [
          {
            "dayName": "Pazartesi",
            "breakfast": "Haşlanmış yumurta, kaşar peyniri, zeytin, havuç dilimleri, tam buğday ekmeği",
            "lunch": "Kırmızı mercimek çorbası, kıymalı bezelye yemeği, pirinç pilavı, yoğurt",
            "snack": "Taze sıkılmış portakal suyu, mini poğaça"
          },
          {
            "dayName": "Salı",
            "breakfast": "Fırında peynirli ekmek dilimleri, ceviz, domates, zeytin, doğal adaçayı",
            "lunch": "Şehriye çorbası, fırında sebzeli tavuk but, bulgur pilavı, ayran",
            "snack": "Günlük ılık süt, armut dilimleri, ceviz"
          },
          {
            "dayName": "Çarşamba",
            "breakfast": "Kaşarlı omlet, beyaz peynir, yeşil zeytin, salatalık, çavdar ekmeği, ıhlamur",
            "lunch": "Sebze çorbası, kuru fasulye, arpa şehriyeli pirinç pilavı, lahana salatası",
            "snack": "Ev yapımı probiyotik yoğurt, kuru kayısı & fındık"
          },
          {
            "dayName": "Perşembe",
            "breakfast": "Labne, pekmez-tahin, ceviz içi, tam tahıl ekmeği, taze süt",
            "lunch": "Kremasız mantar çorbası, fırında sebzeli köfte, patates püresi, mevsim salatası",
            "snack": "Ihlamur çayı, elmalı tarçınlı kurabiye"
          },
          {
            "dayName": "Cuma",
            "breakfast": "Pankek, süzme bal, beyaz peynir, domates söğüş, günlük süt",
            "lunch": "Yarma çorbası, kıymalı karnabahar graten, erişte, ev kompostosu",
            "snack": "Muzlu süt, organik tam buğday kraker"
          }
        ]
      },
      {
        "id": "hafta-3",
        "weekName": "3. Hafta (16 - 20 Kasım)",
        "days": [
          {
            "dayName": "Pazartesi",
            "breakfast": "Yumurta, lor peyniri, siyah zeytin, salatalık, tam buğday ekmeği, süt",
            "lunch": "Ezogelin çorbası, zeytinyağlı pırasa yemeği, bulgur pilavı, yoğurt",
            "snack": "Kefir, fırınlanmış elma dilimleri, badem"
          },
          {
            "dayName": "Salı",
            "breakfast": "Kaşar peyniri, zeytin ezmesi, ceviz, domates, simit, adaçayı",
            "lunch": "Tavuk suyu çorbası, kıymalı patates yemeği, arpa şehriye pilavı, ayran",
            "snack": "Günlük süt, yulaflı kuru üzümlü kurabiye"
          },
          {
            "dayName": "Çarşamba",
            "breakfast": "Otlu omlet, beyaz peynir, salatalık, köy ekmeği, ıhlamur",
            "lunch": "Mercimek çorbası, etli yeşil mercimek yemeği, erişte, ev yapımı yoğurt",
            "snack": "Taze mandalina & portakal tabağı, ceviz"
          },
          {
            "dayName": "Perşembe",
            "breakfast": "Menemen, kaşar peyniri, siyah zeytin, çavdar ekmeği, süt",
            "lunch": "Balık çorbası, fırında levrek & fırın patates, roka-havuç salatası",
            "snack": "Ev yapımı meyve kompostosu, sade kek"
          },
          {
            "dayName": "Cuma",
            "breakfast": "Krep, beyaz peynir, domates, zeytin, ev reçeli, taze süt",
            "lunch": "Tarhana çorbası, etli dolma & sarma, yoğurt, mevsim meyvesi",
            "snack": "Ilık süt, tahinli cevizli çörek"
          }
        ]
      },
      {
        "id": "hafta-4",
        "weekName": "4. Hafta (23 - 27 Kasım)",
        "days": [
          {
            "dayName": "Pazartesi",
            "breakfast": "Haşlanmış yumurta, beyaz peynir, zeytin, domates, tam buğday ekmeği, süt",
            "lunch": "Süzme mercimek çorbası, zeytinyağlı taze barbunya, bulgur pilavı, yoğurt",
            "snack": "Kefir, muz, ceviz içi"
          },
          {
            "dayName": "Salı",
            "breakfast": "Kaşarlı tost, zeytin, salatalık, domates, doğal adaçayı",
            "lunch": "Yayla çorbası, fırında dana rosto & sebzeler, patates püresi, ayran",
            "snack": "Günlük süt, ev yapımı havuçlu kek"
          },
          {
            "dayName": "Çarşamba",
            "breakfast": "Peynirli omlet, siyah zeytin, yeşillik tabağı, köy ekmeği, ıhlamur",
            "lunch": "Domates çorbası, nohut yemeği, siyez bulguru pilavı, cacık",
            "snack": "Taze sıkılmış portakal suyu, cevizli kurabiye"
          },
          {
            "dayName": "Perşembe",
            "breakfast": "Labne, pekmez, ceviz, domates-salatalık, simit, süt",
            "lunch": "Balkabağı çorbası, fırında somon balığı, fırın patates, Akdeniz salatası",
            "snack": "Ev yoğurdu & meyve püresi, grissini"
          },
          {
            "dayName": "Cuma",
            "breakfast": "Fırında peynirli börek, domates, zeytin, salatalık, taze süt",
            "lunch": "Düğün çorbası, kıymalı ıspanak, fırın makarna, mevsim meyvesi",
            "snack": "Ilık süt, elmalı tarçınlı tart"
          }
        ]
      }
    ]
  },
  "blog": {
    "heroTitle": "Eylül Çocuk Akademisi Eğitim & Ebeveynlik Blogu",
    "heroSubtitle": "Kars'ta okul öncesi eğitim, çocuk psikolojisi, BEM felsefesi ve sağlıklı beslenme rehberi",
    "categories": [
      "Tümü",
      "Eğitim & Pedagoji",
      "BEM Modeli",
      "Yabancı Dil",
      "Beslenme & Sağlık",
      "Gelişim & Psikoloji",
      "Kars'ta Yaşam"
    ],
    "posts": [
      {
        "id": "post-1",
        "slug": "karsta-dogru-anaokulu-secimi-nelere-dikkat-edilmeli",
        "title": "Kars'ta Doğru Anaokulu Seçimi: Aileler İçin Kapsamlı Rehber",
        "excerpt": "Çocuğunuzun ilk okul deneyimi gelecekteki tüm öğrenme serüvenini şekillendirir. Kars'ın iklim koşulları, fiziki bina güvenliği, öğretmen niteliği ve oyun alanları seçimde nasıl rol oynar?",
        "content": [
          "Okul öncesi eğitim dönemi, bir çocuğun hayatındaki en kritik bilişsel ve duygusal eşiklerden biridir. Kars gibi kış aylarının uzun ve soğuk geçtiği bir coğrafyada anaokulu seçimi yaparken velilerin sadece eğitim müfredatına değil, aynı zamanda fiziksel yerleşkenin korunaklılığına, hava sirkülasyonuna ve doğal gün ışığı alma oranına özel dikkat göstermesi gerekir.",
          "Özel Eylül Anaokulu olarak Kars Merkez Villalar Bölgesi'ndeki müstakil kampüsümüzde, çocuklarımızın kışın dahi ferah, sıcak ve doğal ahşap atölyelerde güvenle hareket edebilmelerini sağlıyoruz. Şehrin gürültüsünden ve egzoz dumanından uzak, 3000 m² genişliğindeki yeşil bahçemiz ve yüksek tavanlı sınıflarımız çocukların enerjilerini sağlıklı bir şekilde dışa vurmalarına imkan tanır.",
          "Bunun yanı sıra bir kurumun pedagojik vizyonu, ezberci yaklaşımlar yerine çocuğun merak duygusunu besleyen bir eğitim modeli içermelidir. Öğretmen kadrosunun lisanslı okul öncesi eğitimcilerinden oluşması, diyetisyen kontrolünde günlük sıcak yemek pişirilmesi ve açık iletişim kanalları bir anaokulunu ayrıcalıklı kılan vazgeçilmez kriterlerdir."
        ],
        "category": "Kars'ta Yaşam",
        "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBLTcFcP5lqXe6FlaDkYCXiyBz960GYtwkL5B3CnPmnU0BATMdea0vAAz_DMA_5USrA4-_e7kF0_0KX1FSz4XUXLkfw0Dsbv8G69wNNxzcmDkUl94iOK3v9TvGHu5n7Wcl0vj17K_5OgIK2aE_QBQDfb5B0OcJGKxqkzjoqF7foIS4nKSRHF2MI8qpQXArYcRcCkFHn_xBtJvo9wjaJqUBTqpK6kZf-vewwrV9S4RGsAjBe7FR81dVS",
        "author": "Eylül Akademisi Rehberlik Kurulu",
        "publishedAt": "2026-10-18T10:00:00.000Z",
        "readTime": "5 dk okuma",
        "status": "published",
        "views": 482,
        "seo": {
          "metaTitle": "Kars'ta Doğru Anaokulu Seçimi Rehberi | Özel Eylül Anaokulu",
          "metaDescription": "Kars'ta anaokulu ve kreş seçerken nelere dikkat edilmeli? Fiziksel imkanlar, BEM eğitim modeli ve Kars kreş tavsiyeleri Özel Eylül Anaokulu blogunda.",
          "focusKeyword": "kars anaokulu seçimi",
          "seoScore": 96
        }
      },
      {
        "id": "post-2",
        "slug": "butunlestirilmis-egitim-modeli-bem-nedir-nasil-uygulanir",
        "title": "Bütünleştirilmiş Eğitim Modeli (BEM) Nedir? 6 Temel Gelişim Alanı",
        "excerpt": "Çocuğu tek bir alanda yarıştırmak yerine 6 temel boyutta dengeli büyüten BEM felsefesiyle tanışın: Sosyal-duygusal, bilişsel, dil, sanat, hareket ve evrensel değerler.",
        "content": [
          "Geleneksel eğitim kalıpları çoğu zaman çocukları tek tip akademik başarılara yönlendirmeye çalışır. Oysa 3-6 yaş aralığı, insan beyninin nöral bağlantılarının en yoğun kurulduğu ve kişiliğin temel harcının atıldığı dönemdir. Bütünleştirilmiş Eğitim Modeli (BEM), çocuğun gelişimini parçalara ayırmadan bir bütün olarak kucaklar.",
          "BEM çarkımız 6 ana petalsen oluşur: Sosyal-Duygusal Gelişim ile empati ve özgüven; Dil Gelişimi ve All Day English ile çift dillilik; Bilişsel Gelişim ile neden-sonuç ve kodlama; Sanat ve Yaratıcılık ile estetik duyuş; Fiziksel Gelişim ile jimnastik ve denge; Değerler Eğitimi ile nezaket ve paylaşma bilinci inşa edilir.",
          "Sınıflarımızda uygulanan her etkinlik bu 6 alanın en az ikisini veya üçünü eşzamanlı aktive eder. Örneğin bir sonbahar yaprağı incelenirken hem fen-doğa kavramları (bilişsel), hem renk ve doku baskısı (sanat), hem de yaprağın İngilizce adlandırılması (dil) aynı deneyim içinde harmanlanır."
        ],
        "category": "BEM Modeli",
        "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuA_HUJ8Dk0I5-9-CcAVN-23EtmKiHOp7uF7iJTio35lPh-RVt2Ww3BzorxwMjJCNw6-6J3RjPlIUZfiZPQqxBzublamKjRz0wCD7IXo6qX8F_35XYKa_eUaYfvau2j1sffb6E8wDPNa9Uak8ftkjp5WfYtaN4mv58_zTpEwiApJP9Cie23W1J1G_wIQp4-L2WSE8A7B9FraFpJuirTRQOaK_08d1Dwe4biK2A2tzfjBJj-bxe06lsLs",
        "author": "Psk. Selin Öztürk (Program Koordinatörü)",
        "publishedAt": "2026-10-15T11:30:00.000Z",
        "readTime": "6 dk okuma",
        "status": "published",
        "views": 614,
        "seo": {
          "metaTitle": "Bütünleştirilmiş Eğitim Modeli (BEM) Nedir? | Özel Eylül Anaokulu",
          "metaDescription": "Özel Eylül Anaokulu'nun özgün Bütünleştirilmiş Eğitim Modeli (BEM) ile 3-6 yaş çok yönlü gelişim aşamaları ve erken çocukluk pedagojisi.",
          "focusKeyword": "bütünleştirilmiş eğitim modeli bem",
          "seoScore": 98
        }
      },
      {
        "id": "post-3",
        "slug": "erken-cocuklukta-cift-dillilik-all-day-english-metodu",
        "title": "Erken Çocuklukta Çift Dillilik: All Day English Metodu Neden Fark Yaratır?",
        "excerpt": "Haftada 2 saatlik yabancı dil dersi yerine tüm gün doğal yaşam diline dönüşen İngilizce, çocukların ana dil edinim hızında dünya insanı olmalarını sağlıyor.",
        "content": [
          "Çocuk beyni 6 yaşına kadar duyduğu her dili birincil sistem olarak kodlama kabiliyetine sahiptir. Ancak masa başında kelime ezberletilen geleneksel yabancı dil dersleri bu doğal mekanizmayı işletemez. Çift dilli bireyler yetiştirmenin tek bilimsel yolu, dili bir ders konusu değil, iletişim aracı kılmaktır.",
          "All Day English programımız kapsamında Özel Eylül Anaokulu sınıflarında tam zamanlı Türk sınıf öğretmenimizin yanında ileri seviye İngilizce öğretmeni daima sınıftadır. Kahvaltıda süt isterken, bahçede körebe oynarken veya resim yaparken İngilizce doğal akışında kullanılır.",
          "Cambridge erken çocukluk materyalleri, şarkılar, kuklalar ve hareketli oyunlarla çocuklar İngilizceyi çeviri yapmadan, düşüncelerini doğrudan bu dilde kurgulayarak öğrenirler. Bu da ilkokula geçtiklerinde olağanüstü bir dil özgüveni kazandırır."
        ],
        "category": "Yabancı Dil",
        "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuAIhDg4p8-gT_vNjaupVxMvU0BM4pvpL49udkQZ5Ol2cFtEwFhnwzEWuXCFlWivq37jmc2h7W-EPlaXlBykvmWvHpOPBI9R2omsbWD241a1OGYNynRhHpdbv-KlMJp--m4NdVsY_SnRf1zyvgFZFPFNIIr4fV-zvDCSyfpmiMQKiwwl7VtStT4LuAH3wqE0ToAYQYQf50eCxKmCatW4CeLflxfHnYpELKtFrqSBOhce_M-zCF7KKgn0",
        "author": "Emily Walker (Yabancı Diller Bölüm Başkanı)",
        "publishedAt": "2026-10-12T14:15:00.000Z",
        "readTime": "4 dk okuma",
        "status": "published",
        "views": 530,
        "seo": {
          "metaTitle": "Erken Çocuklukta All Day English Çift Dilli Eğitim | Özel Eylül Anaokulu",
          "metaDescription": "Okul öncesinde All Day English çift dilli eğitim yöntemi nasıl çalışır? Kars Özel Eylül Anaokulu İngilizce etkinlikleri ve dil edinimi rehberi.",
          "focusKeyword": "all day english okul öncesi",
          "seoScore": 95
        }
      },
      {
        "id": "post-4",
        "slug": "karsta-cocuklar-icin-dogal-ve-bagisiklik-dostu-beslenme",
        "title": "Kars'ta Çocuklar İçin Doğal ve Bağışıklık Dostu Beslenme İlkelerimiz",
        "excerpt": "Sert kış şartlarında minik bedenleri güçlü tutmanın sırrı: Yerel tereyağı, probiyotik ev yoğurdu, mevsim çorbaları ve paketli gıdasız okul mutfağı.",
        "content": [
          "Beslenme, okul öncesi çağdaki bir çocuğun yalnızca fiziksel büyümesini değil, dikkat süresini, duygusal dengesini ve bağışıklık direncini doğrudan belirler. Kars'ın sert karasal ikliminde çocuklarımızın hastalıklara karşı dirençli olabilmeleri için besleyici, sıcak ve dengeli bir beslenme protokolü şarttır.",
          "Eylül Mutfak Atölyesi'nde endüstriyel hazır gıdalar, bulyonlar, yapay tatlandırıcılar ve gazlı içecekler kesinlikle yer almaz. Menülerimiz uzman çocuk diyetisyenimiz tarafından haftalık ve aylık olarak planlanır; Kars'ın taze sütü, yerel üreticilerden alınan tereyağı, bakliyatlar ve ev yapımı yoğurt baş tacımızdır.",
          "Günde 3 öğün (Doğal Kahvaltı, Sıcak Öğle Yemeği, İkindi Beslenmesi) okulumuzun kendi mutfağında hijyenik koşullarda günlük olarak pişirilir. Ayrıca alerjisi veya hassasiyeti olan çocuklarımız için kişiye özel menü alternatifleri titizlikle takip edilir."
        ],
        "category": "Beslenme & Sağlık",
        "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBDPtPuOkoCFkx4vkNoJTLA0Ul1IQs_atMo-Mh2b-M4DK981siYIn5sPXDE7Z41c0lJrDUHSNWOtEC6jQE1mQAv-iYOxP69s4nGmJuMqRqamlIxH246wiGWbnCkw4h6tS-2on-7k5EygAAFeZagzxym3RSx0XZE11hkLk3Mc37UmdKrH5Z42tg_2DUENN6ADUzHkb8rP80gItK_k1kIvelwKiMCtZ6LyHO6MzPYMxMMSDKbPqUgZf-o",
        "author": "Uzm. Dyt. Zeynep Kaya",
        "publishedAt": "2026-10-09T09:00:00.000Z",
        "readTime": "5 dk okuma",
        "status": "published",
        "views": 395,
        "seo": {
          "metaTitle": "Kars Anaokulu Doğal ve Dengeli Beslenme Menüsü | Özel Eylül Anaokulu",
          "metaDescription": "Özel Eylül Anaokulu çocuk beslenmesi ilkeleri: Diyetisyen kontrollü sıcak öğünler, organik Kars ürünleri ve bağışıklık güçlendirici menüler.",
          "focusKeyword": "kars anaokulu beslenme menüsü",
          "seoScore": 94
        }
      },
      {
        "id": "post-5",
        "slug": "anaokuluna-baslarken-ayrilik-kaygisi-ve-oryantasyon-sureci",
        "title": "Anaokuluna Başlarken Ayrılık Kaygısı ve Sağlıklı Oryantasyon",
        "excerpt": "Anne-babadan ilk kez ayrılan minikler için güvenli bağlanmayı koruyarak okula alışma süreci nasıl yönetilmeli? Pedagoglarımızdan pratik ipuçları.",
        "content": [
          "Ev ortamının güvenli kozasından çıkıp ilk defa sosyal bir topluluğa adım atmak hem çocuk hem de ebeveyn için duygusal bir süreçtir. Ayrılık kaygısı son derece doğal ve beklenen bir tepkidir; önemli olan bu sürecin şefkatle ve kademeli olarak yönetilmesidir.",
          "Özel Eylül Anaokulu'nda uyguladığımız Bireysel Oryantasyon Protokolü'nde çocuk asla ilk günden saatlerce yalnız bırakılmaz. İlk günlerde velimiz okul bahçesinde veya bekleme odasında hazır bulunur; çocuk sınıfta öğretmeniyle güven bağı kurdukça okulda kalış süresi adım adım uzatılır.",
          "Ebeveynlerin vedalaşırken kaçarak gitmemesi, 'Ben şimdi gidiyorum ama ikindi atıştırmalığından sonra seni almaya geleceğim' gibi somut zaman dilimleri vererek sözünü tutması çocuğun güven duygusunu perçinler."
        ],
        "category": "Gelişim & Psikoloji",
        "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBW7JpjUGLG6hQ1lEt6ds6K-96oZG5vOoMlpAp8peVFLhkSS3vqBGKUVfDPPq57VhARMXTx8bCmgx4f3RihcjU_I3xN380pb1nOlb2CCImbUJJt_Vai7vhddVDS-uFupciZa0mymwk88vP9Qwx60W3Dww8FXPwFIMajg5W_EFQIoZBLbn36YjEd_cBB-4y59HYWzjDBb0amxJd05Gdu-AsxXx7QC_jR2_hCqh_AadN87GRGbLARQOz4",
        "author": "Psk. Dan. Merve Şahin",
        "publishedAt": "2026-10-05T13:00:00.000Z",
        "readTime": "5 dk okuma",
        "status": "published",
        "views": 470,
        "seo": {
          "metaTitle": "Anaokuluna Alışma ve Oryantasyon Süreci Rehberi | Özel Eylül Anaokulu",
          "metaDescription": "Anaokuluna başlarken ayrılık kaygısıyla baş etme yöntemleri, güvenli bağlanma ve Özel Eylül Anaokulu kademeli oryantasyon süreci.",
          "focusKeyword": "anaokulu oryantasyon süreci",
          "seoScore": 97
        }
      },
      {
        "id": "post-6",
        "slug": "3-6-yas-doneminde-bireysel-ilgi-ve-yetenek-kesfi",
        "title": "3-6 Yaş Döneminde Bireysel İlgi ve Yetenek Keşfi Nasıl Yapılır?",
        "excerpt": "Her çocuk piyanist veya ressam olmak zorunda değildir; önemli olan piyano, satranç, drama, jimnastik ve fen atölyelerinde kendi tutkusunu bulmasıdır.",
        "content": [
          "Erken çocukluk dönemi yeteneklerin dikte edildiği değil, binbir çeşit uyaranla çocuğun önüne serildiği bir açık büfe olmalıdır. Bir çocuğun satranca mı, görsel sanatlara mı, ritim ve müziğe mi yoksa doğa ve mekanik düzeneklere mi yatkın olduğunu ancak zengin atölye deneyimleri açığa çıkarır.",
          "Özel Eylül Anaokulu'nun 9 branş etkinlik atölyesi (Piyano, Resim, Jimnastik, Satranç, Fen ve Doğa, Drama, Müzik, Kodlama, Değerler Eğitimi) her çocuğun haftalık döngüde tüm bu disiplinlerle doğrudan etkileşime girmesini sağlar.",
          "Öğretmenlerimiz öğrencinin hangi köşede daha uzun süre pürdikkat kaldığını, hangi malzemeyle çalışırken gözlerinin parladığını gözlemleyerek Veli Portalı Gelişim Raporlarına kaydeder ve aileye rehberlik sunar."
        ],
        "category": "Eğitim & Pedagoji",
        "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuCyiN03arbqJBsDVFV1HUx8dy-0bAohSvrbAVnlf6fX7g4q1V8Y4k9_8R4m_Q2V1eJISuXF82SBW9ewtiiHYMK7OQ8sQNM",
        "author": "Eylül Çocuk Akademisi Sanat & Müzik Kurulu",
        "publishedAt": "2026-10-01T15:45:00.000Z",
        "readTime": "4 dk okuma",
        "status": "published",
        "views": 388,
        "seo": {
          "metaTitle": "3-6 Yaş Çocuklarda Yetenek ve İlgi Keşfi | Özel Eylül Anaokulu Kars",
          "metaDescription": "Okul öncesinde piyano, satranç, jimnastik ve robotik kodlama ile yetenek keşfi nasıl yapılır? Kars Özel Eylül Anaokulu atölye modelleri.",
          "focusKeyword": "çocuklarda yetenek keşfi anaokulu",
          "seoScore": 96
        }
      }
    ]
  },
  "seo": {
    "serpbear": {
      "domain": "eylulanaokulu.com.tr",
      "serpBearUrl": "https://serp.eylulanaokulu.com.tr",
      "apiKey": "sb_live_kars_eylul_2026_x89",
      "lastUpdated": "2026-10-21T13:50:00.000Z",
      "keywords": [
        {
          "id": "kw-1",
          "keyword": "kars anaokulu",
          "device": "desktop",
          "country": "TR",
          "city": "Kars",
          "position": 1,
          "previousPosition": 2,
          "bestPosition": 1,
          "volume": 1600,
          "url": "https://eylulanaokulu.com.tr/",
          "history": [
            4,
            4,
            3,
            3,
            2,
            2,
            2,
            2,
            1,
            1,
            1,
            2,
            1,
            1
          ],
          "tags": [
            "ana-hedef",
            "yerel-seo",
            "kars"
          ],
          "lastChecked": "2026-10-21T06:30:00.000Z"
        },
        {
          "id": "kw-2",
          "keyword": "kars kreş ve anaokulu",
          "device": "mobile",
          "country": "TR",
          "city": "Kars",
          "position": 1,
          "previousPosition": 1,
          "bestPosition": 1,
          "volume": 1200,
          "url": "https://eylulanaokulu.com.tr/",
          "history": [
            2,
            2,
            2,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "tags": [
            "kurumsal-unvan",
            "yerel-seo"
          ],
          "lastChecked": "2026-10-21T06:30:00.000Z"
        },
        {
          "id": "kw-3",
          "keyword": "özel eylül anaokulu",
          "device": "desktop",
          "country": "TR",
          "city": "Kars",
          "position": 1,
          "previousPosition": 1,
          "bestPosition": 1,
          "volume": 880,
          "url": "https://eylulanaokulu.com.tr/",
          "history": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "tags": [
            "marka",
            "resmi-ad"
          ],
          "lastChecked": "2026-10-21T06:30:00.000Z"
        },
        {
          "id": "kw-4",
          "keyword": "kars özel anaokulu",
          "device": "mobile",
          "country": "TR",
          "city": "Kars",
          "position": 2,
          "previousPosition": 3,
          "bestPosition": 2,
          "volume": 720,
          "url": "https://eylulanaokulu.com.tr/hakkimizda",
          "history": [
            5,
            4,
            4,
            3,
            3,
            3,
            3,
            2,
            3,
            2,
            2,
            2,
            2,
            2
          ],
          "tags": [
            "ozel-okul",
            "kars"
          ],
          "lastChecked": "2026-10-21T06:30:00.000Z"
        },
        {
          "id": "kw-5",
          "keyword": "kars ingilizce anaokulu",
          "device": "desktop",
          "country": "TR",
          "city": "Kars",
          "position": 1,
          "previousPosition": 2,
          "bestPosition": 1,
          "volume": 490,
          "url": "https://eylulanaokulu.com.tr/egitim-modeli/all-day-english",
          "history": [
            3,
            3,
            3,
            2,
            2,
            2,
            1,
            2,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "tags": [
            "all-day-english",
            "yabanci-dil"
          ],
          "lastChecked": "2026-10-21T06:30:00.000Z"
        },
        {
          "id": "kw-6",
          "keyword": "kars villalar bölgesi kreş",
          "device": "mobile",
          "country": "TR",
          "city": "Kars",
          "position": 1,
          "previousPosition": 1,
          "bestPosition": 1,
          "volume": 320,
          "url": "https://eylulanaokulu.com.tr/iletisim",
          "history": [
            2,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "tags": [
            "lokasyon",
            "sehitler-mh"
          ],
          "lastChecked": "2026-10-21T06:30:00.000Z"
        },
        {
          "id": "kw-7",
          "keyword": "bütünsel eğitim modeli anaokulu",
          "device": "desktop",
          "country": "TR",
          "city": "Kars",
          "position": 1,
          "previousPosition": 1,
          "bestPosition": 1,
          "volume": 580,
          "url": "https://eylulanaokulu.com.tr/egitim-modeli/bem",
          "history": [
            2,
            2,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "tags": [
            "bem",
            "pedagoji"
          ],
          "lastChecked": "2026-10-21T06:30:00.000Z"
        },
        {
          "id": "kw-8",
          "keyword": "kars çocuk akademisi",
          "device": "mobile",
          "country": "TR",
          "city": "Kars",
          "position": 1,
          "previousPosition": 2,
          "bestPosition": 1,
          "volume": 640,
          "url": "https://eylulanaokulu.com.tr/",
          "history": [
            3,
            2,
            2,
            2,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "tags": [
            "marka",
            "yerel-seo"
          ],
          "lastChecked": "2026-10-21T06:30:00.000Z"
        }
      ]
    },
    "unlighthouse": {
      "lastScanAt": "2026-10-21T11:00:00.000Z",
      "reportUrl": "https://audit.eylulanaokulu.com.tr/unlighthouse-report",
      "summary": {
        "seo": 98,
        "performance": 96,
        "accessibility": 99,
        "bestPractices": 97,
        "totalPages": 14
      },
      "pages": [
        {
          "path": "/",
          "title": "Özel Eylül Anaokulu - Kars Kreş ve Anaokulu | Resmi Web Sitesi",
          "seoScore": 100,
          "performanceScore": 96,
          "accessibilityScore": 100,
          "bestPracticesScore": 98,
          "lcpMs": 1150,
          "responseTimeMs": 140,
          "titleLength": 60,
          "metaDescriptionLength": 155,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/hakkimizda",
          "title": "Hakkımızda | Özel Eylül Anaokulu - Kars",
          "seoScore": 98,
          "performanceScore": 95,
          "accessibilityScore": 98,
          "bestPracticesScore": 96,
          "lcpMs": 1220,
          "responseTimeMs": 150,
          "titleLength": 43,
          "metaDescriptionLength": 148,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/okulumuz",
          "title": "Okulumuz & Kampüsümüz | Özel Eylül Anaokulu Kars",
          "seoScore": 98,
          "performanceScore": 94,
          "accessibilityScore": 100,
          "bestPracticesScore": 97,
          "lcpMs": 1340,
          "responseTimeMs": 160,
          "titleLength": 48,
          "metaDescriptionLength": 152,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/egitim-modelimiz-bem",
          "title": "Bütünleştirilmiş Eğitim Modeli (BEM) | Özel Eylül Anaokulu",
          "seoScore": 100,
          "performanceScore": 97,
          "accessibilityScore": 99,
          "bestPracticesScore": 98,
          "lcpMs": 1180,
          "responseTimeMs": 145,
          "titleLength": 57,
          "metaDescriptionLength": 156,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/all-day-english",
          "title": "All Day English Çift Dilli Eğitim | Özel Eylül Anaokulu",
          "seoScore": 97,
          "performanceScore": 95,
          "accessibilityScore": 98,
          "bestPracticesScore": 97,
          "lcpMs": 1290,
          "responseTimeMs": 155,
          "titleLength": 53,
          "metaDescriptionLength": 150,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/etkinlikler",
          "title": "Zengin Etkinlik Dünyası & Atölyeler | Özel Eylül Anaokulu",
          "seoScore": 98,
          "performanceScore": 95,
          "accessibilityScore": 99,
          "bestPracticesScore": 96,
          "lcpMs": 1260,
          "responseTimeMs": 150,
          "titleLength": 55,
          "metaDescriptionLength": 154,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/dogal-ve-dengeli-beslenme",
          "title": "Doğal ve Dengeli Beslenme | Özel Eylül Anaokulu Mutfak",
          "seoScore": 99,
          "performanceScore": 96,
          "accessibilityScore": 100,
          "bestPracticesScore": 98,
          "lcpMs": 1210,
          "responseTimeMs": 140,
          "titleLength": 53,
          "metaDescriptionLength": 153,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/velilerimiz-icin",
          "title": "Velilerimiz İçin Veli Portalı & İletişim | Özel Eylül Anaokulu",
          "seoScore": 97,
          "performanceScore": 96,
          "accessibilityScore": 99,
          "bestPracticesScore": 97,
          "lcpMs": 1190,
          "responseTimeMs": 145,
          "titleLength": 58,
          "metaDescriptionLength": 155,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/kayit-ve-basvuru",
          "title": "Kayıt ve Başvuru & Okul Ziyareti Randevusu | Özel Eylül Anaokulu",
          "seoScore": 100,
          "performanceScore": 98,
          "accessibilityScore": 100,
          "bestPracticesScore": 99,
          "lcpMs": 1120,
          "responseTimeMs": 135,
          "titleLength": 61,
          "metaDescriptionLength": 158,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/iletisim",
          "title": "İletişim & Kars Kampüsü Harita | Özel Eylül Anaokulu",
          "seoScore": 100,
          "performanceScore": 97,
          "accessibilityScore": 100,
          "bestPracticesScore": 98,
          "lcpMs": 1140,
          "responseTimeMs": 138,
          "titleLength": 51,
          "metaDescriptionLength": 152,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/blog",
          "title": "Eğitim ve Ebeveynlik Blogu | Özel Eylül Anaokulu Kars",
          "seoScore": 98,
          "performanceScore": 96,
          "accessibilityScore": 99,
          "bestPracticesScore": 97,
          "lcpMs": 1200,
          "responseTimeMs": 142,
          "titleLength": 52,
          "metaDescriptionLength": 150,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/icerikler/etkinlik-videolari",
          "title": "Etkinlik Videoları Galerisi | Özel Eylül Anaokulu",
          "seoScore": 96,
          "performanceScore": 94,
          "accessibilityScore": 98,
          "bestPracticesScore": 96,
          "lcpMs": 1380,
          "responseTimeMs": 165,
          "titleLength": 49,
          "metaDescriptionLength": 145,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/icerikler/ders-programi",
          "title": "Haftalık Ders ve Etkinlik Programı | Özel Eylül Anaokulu",
          "seoScore": 97,
          "performanceScore": 95,
          "accessibilityScore": 99,
          "bestPracticesScore": 97,
          "lcpMs": 1250,
          "responseTimeMs": 150,
          "titleLength": 54,
          "metaDescriptionLength": 150,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        },
        {
          "path": "/icerikler/aylik-yemek-listesi",
          "title": "Aylık Yemek Menüsü & Beslenme Takvimi | Özel Eylül Anaokulu",
          "seoScore": 99,
          "performanceScore": 96,
          "accessibilityScore": 100,
          "bestPracticesScore": 98,
          "lcpMs": 1220,
          "responseTimeMs": 142,
          "titleLength": 58,
          "metaDescriptionLength": 156,
          "h1Count": 1,
          "imagesMissingAlt": 0,
          "canonicalValid": true,
          "indexable": true,
          "issues": []
        }
      ]
    },
    "analytics": {
      "summary": {
        "totalVisitors": 4280,
        "uniqueVisitors": 3150,
        "totalPageViews": 14890,
        "avgSessionDurationSec": 194,
        "bounceRate": 28.4,
        "conversionCount": 142
      },
      "dailyTraffic": [
        {
          "date": "2026-10-08",
          "visitors": 245,
          "pageViews": 840,
          "organic": 178
        },
        {
          "date": "2026-10-09",
          "visitors": 268,
          "pageViews": 920,
          "organic": 195
        },
        {
          "date": "2026-10-10",
          "visitors": 290,
          "pageViews": 1010,
          "organic": 210
        },
        {
          "date": "2026-10-11",
          "visitors": 185,
          "pageViews": 620,
          "organic": 130
        },
        {
          "date": "2026-10-12",
          "visitors": 312,
          "pageViews": 1130,
          "organic": 245
        },
        {
          "date": "2026-10-13",
          "visitors": 335,
          "pageViews": 1180,
          "organic": 260
        },
        {
          "date": "2026-10-14",
          "visitors": 348,
          "pageViews": 1240,
          "organic": 272
        },
        {
          "date": "2026-10-15",
          "visitors": 360,
          "pageViews": 1290,
          "organic": 285
        },
        {
          "date": "2026-10-16",
          "visitors": 382,
          "pageViews": 1360,
          "organic": 302
        },
        {
          "date": "2026-10-17",
          "visitors": 395,
          "pageViews": 1410,
          "organic": 315
        },
        {
          "date": "2026-10-18",
          "visitors": 210,
          "pageViews": 710,
          "organic": 150
        },
        {
          "date": "2026-10-19",
          "visitors": 420,
          "pageViews": 1520,
          "organic": 340
        },
        {
          "date": "2026-10-20",
          "visitors": 445,
          "pageViews": 1590,
          "organic": 365
        },
        {
          "date": "2026-10-21",
          "visitors": 465,
          "pageViews": 1670,
          "organic": 385
        }
      ],
      "pageMetrics": [
        {
          "path": "/",
          "label": "Anasayfa",
          "views": 4850,
          "uniqueVisitors": 3100,
          "avgTimeSec": 165,
          "bounceRate": 24.2
        },
        {
          "path": "/kayit-ve-basvuru",
          "label": "Kayıt ve Başvuru",
          "views": 2140,
          "uniqueVisitors": 1580,
          "avgTimeSec": 210,
          "bounceRate": 19.5
        },
        {
          "path": "/icerikler/aylik-yemek-listesi",
          "label": "Aylık Yemek Listesi",
          "views": 1820,
          "uniqueVisitors": 1340,
          "avgTimeSec": 195,
          "bounceRate": 21.0
        },
        {
          "path": "/egitim-modelimiz-bem",
          "label": "BEM Modeli",
          "views": 1430,
          "uniqueVisitors": 1050,
          "avgTimeSec": 240,
          "bounceRate": 26.5
        },
        {
          "path": "/okulumuz",
          "label": "Okulumuz & Kampüs",
          "views": 1350,
          "uniqueVisitors": 980,
          "avgTimeSec": 180,
          "bounceRate": 28.0
        },
        {
          "path": "/all-day-english",
          "label": "All Day English",
          "views": 1120,
          "uniqueVisitors": 850,
          "avgTimeSec": 215,
          "bounceRate": 27.2
        },
        {
          "path": "/icerikler/ders-programi",
          "label": "Ders Programı",
          "views": 980,
          "uniqueVisitors": 720,
          "avgTimeSec": 190,
          "bounceRate": 22.4
        },
        {
          "path": "/etkinlikler",
          "label": "Etkinlikler",
          "views": 940,
          "uniqueVisitors": 710,
          "avgTimeSec": 175,
          "bounceRate": 29.1
        },
        {
          "path": "/blog",
          "label": "Eğitim Blogu",
          "views": 890,
          "uniqueVisitors": 680,
          "avgTimeSec": 260,
          "bounceRate": 31.0
        },
        {
          "path": "/iletisim",
          "label": "İletişim & Harita",
          "views": 840,
          "uniqueVisitors": 640,
          "avgTimeSec": 145,
          "bounceRate": 22.0
        },
        {
          "path": "/dogal-ve-dengeli-beslenme",
          "label": "Beslenme İlkeleri",
          "views": 760,
          "uniqueVisitors": 580,
          "avgTimeSec": 170,
          "bounceRate": 28.5
        },
        {
          "path": "/velilerimiz-icin",
          "label": "Velilerimiz İçin",
          "views": 680,
          "uniqueVisitors": 510,
          "avgTimeSec": 160,
          "bounceRate": 25.0
        },
        {
          "path": "/hakkimizda",
          "label": "Hakkımızda",
          "views": 610,
          "uniqueVisitors": 460,
          "avgTimeSec": 150,
          "bounceRate": 30.5
        },
        {
          "path": "/icerikler/etkinlik-videolari",
          "label": "Etkinlik Videoları",
          "views": 580,
          "uniqueVisitors": 440,
          "avgTimeSec": 230,
          "bounceRate": 26.0
        }
      ],
      "clickEvents": [
        {
          "id": "clk-call",
          "label": "Telefon Arama Butonu (0 551 589 32 12)",
          "targetPath": "tel:05515893212",
          "category": "İletişim",
          "count": 284,
          "lastClickedAt": "2026-10-21T13:20:00.000Z"
        },
        {
          "id": "clk-tour",
          "label": "Okul Ziyareti / Randevu Al Butonu",
          "targetPath": "/kayit-ve-basvuru",
          "category": "Kayıt Hunisi",
          "count": 218,
          "lastClickedAt": "2026-10-21T13:42:00.000Z"
        },
        {
          "id": "clk-map",
          "label": "Kars Harita / Yol Tarifi Butonu",
          "targetPath": "https://maps.google.com/?q=Ozel+Eylul+Anaokulu+Kars",
          "category": "Harita",
          "count": 176,
          "lastClickedAt": "2026-10-21T12:55:00.000Z"
        },
        {
          "id": "clk-meal",
          "label": "Aylık Yemek Listesi İncele",
          "targetPath": "/icerikler/aylik-yemek-listesi",
          "category": "Menü",
          "count": 162,
          "lastClickedAt": "2026-10-21T13:10:00.000Z"
        },
        {
          "id": "clk-schedule",
          "label": "Ders Programı İncele",
          "targetPath": "/icerikler/ders-programi",
          "category": "Akademik",
          "count": 135,
          "lastClickedAt": "2026-10-21T11:40:00.000Z"
        },
        {
          "id": "clk-whatsapp",
          "label": "WhatsApp Hızlı İletişim Butonu",
          "targetPath": "https://wa.me/905515893212",
          "category": "Sosyal",
          "count": 149,
          "lastClickedAt": "2026-10-21T13:35:00.000Z"
        },
        {
          "id": "clk-video",
          "label": "Etkinlik Videosu Oynat",
          "targetPath": "/icerikler/etkinlik-videolari",
          "category": "Medya",
          "count": 94,
          "lastClickedAt": "2026-10-21T10:15:00.000Z"
        }
      ],
      "trafficSources": [
        {
          "source": "Google Organik Arama",
          "sessions": 2740,
          "percentage": 64.0
        },
        {
          "source": "Doğrudan (Direct)",
          "sessions": 780,
          "percentage": 18.2
        },
        {
          "source": "Instagram / Sosyal Medya",
          "sessions": 460,
          "percentage": 10.7
        },
        {
          "source": "Google Haritalar / Yerel",
          "sessions": 210,
          "percentage": 4.9
        },
        {
          "source": "Tavsiye / Diğer",
          "sessions": 90,
          "percentage": 2.2
        }
      ]
    }
  }
};
