/** Doğal ve Dengeli Beslenme içeriği */
const day = (dayId: string, dayName: string, breakfast: string, lunch: string, snack: string) => ({
  dayId,
  dayName,
  breakfast,
  breakfastTime: '08:45 - 09:30',
  lunch,
  lunchTime: '12:00 - 13:00',
  snack,
  snackTime: '15:15 - 15:45',
});

export const nutritionContent = {
  header: {
    badge: 'Eylül Mutfağı',
    title: 'Doğal ve Dengeli Beslenme',
    subtitle: 'Sağlıklı Çocuklar, Mutlu Yarınlar',
    description:
      'Okulumuzda sunulan her öğün; uzman çocuk diyetisyenleri kontrolünde, yerel üreticilerden temin edilen mevsimine uygun taze ve organik malzemelerle kendi mutfağımızda günlük olarak pişirilir.',
  },
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDPtPuOkoCFkx4vkNoJTLA0Ul1IQs_atMo-Mh2b-M4DK981siYIn5sPXDE7Z41c0lJrDUHSNWOtEC6jQE1mQAv-iYOxP69s4nGmJuMqRqamlIxH246wiGWbnCkw4h6tS-2on-7k5EygAAFeZagzxym3RSx0XZE11hkLk3Mc37UmdKrH5Z42tg_2DUENN6ADUzHkb8rP80gItK_k1kIvelwKiMCtZ6LyHO6MzPYMxMMSDKbPqUgZf-o',
  heroImageAlt: 'Özel Eylül Anaokulu doğal ve dengeli beslenme saati',
  heroCard: {
    title: "GDO'suz & Katkısız Mutfak Standartları",
    text: 'Çocuklarımızın günlük enerji ve mikro-besin gereksinimlerine göre kalibre edilmiş öğünler.',
    badge: '%100 Doğal',
  },
  pillars: [
    { id: 'nutr-1', title: 'Taze ve Doğal', desc: 'Mevsiminde sebze ve meyve, katkısız doğal gıdalar' },
    { id: 'nutr-2', title: 'Diyetisyen Kontrolü', desc: 'Yaş gruplarına özel kalori ve mikro-besin planlaması' },
    { id: 'nutr-3', title: 'Günlük Taze Pişirim', desc: 'Endüstriyel hazır gıdasız, okul mutfağında sıcacık üretim' },
    { id: 'nutr-4', title: 'Dengeli Menü', desc: 'Kahvaltı, sıcak öğle yemeği ve taze ikindi atıştırmalığı' },
  ],
  menuBadge: 'Diyetisyen Onaylı',
  menuTitle: 'Haftalık Yemek Menüsü',
  mealLabels: { breakfast: 'Kahvaltı', lunch: 'Öğle Yemeği', snack: 'İkindi' },
  weeklyMenu: [
    day('pazartesi', 'Pazartesi', 'Zeytin, peynir, domates, salatalık, haşlanmış yumurta, tam tahıl ekmeği, ıhlamur çayı', 'Sebze çorbası, zeytinyağlı taze fasulye & bulgur pilavı, ev yapımı yoğurt, mevsim meyvesi', 'Günlük ılık süt, taze elma dilimleri, yulaflı fındıklı kurabiye'),
    day('sali', 'Salı', 'Kaşar peyniri, ev yapımı reçel, tereyağı, ceviz içi, omlet, çavdar ekmeği', 'Mercimek çorbası, fırında anne köftesi & patates, mevsim yeşillikleri salatası, ayran', 'Kefir, muz dilimleri, kuru üzüm & çiğ badem tabağı'),
    day('carsamba', 'Çarşamba', 'Labne peynir, haşlanmış yumurta, siyah-yeşil zeytin, taze nane, köy ekmeği', 'Ezogelin çorbası, nohut yemeği & siyez bulguru pilavı, ev turşusu, yoğurt', 'Taze sıkılmış portakal & elma suyu, ev yapımı havuçlu tarçınlı kek'),
    day('persembe', 'Perşembe', 'Menemen, beyaz peynir, domates söğüş, simit, doğal adaçayı', 'Balkabağı çorbası, fırında sebzeli somon balığı, patates püresi, yeşil salata', 'Organik yoğurt & taze çilek püresi, tam buğday grissini'),
    day('cuma', 'Cuma', 'Beyaz peynir, kaşar peyniri, kuru kayısı, ceviz, krep, taze süt', 'Tarhana çorbası, kıymalı ıspanak yemeği, fırın makarna, komposto', 'Ilık süt, ev yapımı elmalı turta, kavrulmamış fındık'),
  ],
  dietitianNote: {
    title: 'Özel Diyet & Alerjen Hassasiyeti',
    content: 'Alerji ve özel beslenme ihtiyaçları için bireysel planlama yapılır.',
    buttonText: 'Diyetisyen İle Görüşün',
    buttonLink: '/iletisim',
  },
  infoCards: [
    { id: 'nc-1', title: 'Doğal Sıvı Alımı', text: 'Okulumuzda paketli şekerli meyve suları ve asitli içecekler tüketilmez. Gün boyunca taze filtrelenmiş su, ayran ve bitki çayları sunulur.' },
    { id: 'nc-2', title: 'Ekolojik Bahçe', text: 'Çocuklarımız anaokulu bahçemizdeki bostanda kendi nane, çilek ve domateslerini yetiştirerek topraktan sofraya gıda farkındalığı kazanırlar.' },
    { id: 'nc-3', title: 'Pozitif Sofra Kültürü', text: 'Yemek saatleri baskıdan uzak, arkadaşça paylaşım ve sofra adabı kazanım anlarıdır. Kendi porsiyonunu seçme ve deneme cesareti teşvik edilir.' },
  ],
};
