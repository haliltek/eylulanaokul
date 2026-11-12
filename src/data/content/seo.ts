/**
 * SEO varsayılanları. Her sayfanın "seo" alanı Sayfa Editörü'nün en altında düzenlenir;
 * "Genel SEO Ayarları" tüm siteye uygulanır (boş bırakılan sayfa alanları buradan tamamlanır).
 */
export interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  noindex: boolean;
}

const seo = (title: string, description: string, keywords: string[]): PageSeo => ({ title, description, keywords, ogImage: '', noindex: false });

export const seoGlobalContent = {
  siteName: 'Eylül Çocuk Akademisi Anaokulu',
  siteUrl: '',
  titleTemplate: '%s | Eylül Çocuk Akademisi',
  defaultTitle: 'Eylül Çocuk Akademisi Anaokulu | Güvenle Bugüne, Umutla Yarına',
  defaultDescription:
    'Eylül Çocuk Akademisi; 3-6 yaş sınıfları, Bütünleştirilmiş Eğitim Modeli (BEM), All Day English tam gün İngilizce, zengin etkinlik dünyası ve doğal beslenme anlayışıyla çocukları geleceğe hazırlar.',
  keywords: ['Kars anaokulu', 'Kars kreş', 'Eylül Çocuk Akademisi', 'okul öncesi eğitim', 'özel anaokulu Kars'],
  ogImage: '/images/okul-bina.jpg',
  googleVerification: '',
  bingVerification: '',
  yandexVerification: '',
  allowIndexing: true,
};

export const PAGE_SEO = {
  home: seo(
    'Eylül Çocuk Akademisi Anaokulu | Güvenle Bugüne, Umutla Yarına',
    'Eylül Çocuk Akademisi; 3-6 yaş sınıfları, Bütünleştirilmiş Eğitim Modeli (BEM), All Day English tam gün İngilizce, zengin etkinlik dünyası ve doğal beslenmeyle geleceğe sevgiyle hazırlar.',
    ['Kars anaokulu', 'Kars kreş', 'özel anaokulu Kars', 'Eylül Çocuk Akademisi'],
  ),
  about: seo(
    'Hakkımızda | Eylül Çocuk Akademisi Anaokulu',
    '12 yıllık deneyimimiz, eğitim kadromuz ve sevgi, ilgi, özen değerlerimizle çocuklarımızın özgürce keşfettiği güvenli bir eğitim yuvası sunuyoruz.',
    ['Eylül Çocuk Akademisi hakkında', 'Kars anaokulu', 'okul öncesi eğitim kadrosu'],
  ),
  campus: seo(
    'Okulumuz & Kampüsümüz | Eylül Çocuk Akademisi Anaokulu',
    'Aydınlık sınıflarımız, masal köşemiz, doğal çim bahçemiz ve tanıtım videolarıyla okulumuzu keşfedin.',
    ['Kars anaokulu kampüs', 'anaokulu sınıfları', 'anaokulu bahçesi'],
  ),
  bem: seo(
    'Bütünleştirilmiş Eğitim Modeli (BEM) | Eylül Çocuk Akademisi',
    'Sosyal-duygusal, dil, bilişsel, sanat ve yaratıcılık, fiziksel ve değerler eğitimi olmak üzere altı alanda çocuğunuzun çok yönlü gelişimini destekleyen modelimiz.',
    ['BEM eğitim modeli', 'bütünleştirilmiş eğitim', 'okul öncesi eğitim modeli'],
  ),
  english: seo(
    'All Day English - Tam Gün İngilizce | Eylül Çocuk Akademisi',
    'Gün boyu doğal akışta İngilizce: şarkılar, masallar, drama ve günlük iletişimle çocuklar yabancı dili doğal bir şekilde benimser.',
    ['anaokulu İngilizce', 'tam gün İngilizce', 'okul öncesi İngilizce Kars'],
  ),
  activities: seo(
    'Etkinlikler & Branş Dersleri | Eylül Çocuk Akademisi',
    'Piyano, resim, jimnastik, satranç, fen ve doğa, drama, müzik, kodlama ve değerler eğitimi etkinlikleriyle zengin bir okul öncesi programı.',
    ['anaokulu etkinlikleri', 'branş dersleri', 'okul öncesi etkinlik Kars'],
  ),
  nutrition: seo(
    'Doğal ve Dengeli Beslenme & Haftalık Menü | Eylül Çocuk Akademisi',
    'Okulumuzda hazır gıda kullanılmaz. Diyetisyen onaylı, her sabah taze pişirilen haftalık yemek menümüzü inceleyin.',
    ['anaokulu yemek menüsü', 'çocuk beslenmesi', 'haftalık yemek listesi'],
  ),
  parents: seo(
    'Velilerimiz İçin | Eylül Çocuk Akademisi Anaokulu',
    'Duyurular, etkinlik takvimi, yemek menüsü ve okul-aile iletişimiyle velilerimiz için bilgi rehberi.',
    ['veli rehberi', 'okul aile iletişimi', 'anaokulu duyurular'],
  ),
  enrollment: seo(
    'Kayıt ve Başvuru | Eylül Çocuk Akademisi Anaokulu',
    '2026 - 2027 dönemi ön kayıtları başladı. Kolay kayıt süreci, okul ziyareti planlama ve bilgi talep formu.',
    ['anaokulu kayıt', 'Kars anaokulu kayıt', 'ön kayıt 2026-2027'],
  ),
  contact: seo(
    'İletişim & Randevu | Eylül Çocuk Akademisi Anaokulu',
    'Adresimiz, telefon numaramız, harita ve okul yönetimine doğrudan ulaşabileceğiniz iletişim formu.',
    ['Eylül Çocuk Akademisi iletişim', 'Kars anaokulu adres', 'okul ziyareti randevu'],
  ),
  videos: seo(
    'Etkinlik Videoları | Eylül Çocuk Akademisi',
    'Öğrencilerimizin müzik, sanat, drama ve İngilizce etkinliklerinden videolar.',
    ['anaokulu etkinlik videoları', 'okul öncesi etkinlik'],
  ),
  schedule: seo(
    'Ders Programı | Eylül Çocuk Akademisi',
    '3, 4 ve 5 yaş gruplarımızın haftalık etkinlik, İngilizce ve gelişim ders programı.',
    ['anaokulu ders programı', 'haftalık ders programı'],
  ),
  meals: seo(
    'Aylık Yemek Listesi | Eylül Çocuk Akademisi',
    'Diyetisyen onaylı, taze ve doğal aylık yemek menüsü takvimimiz.',
    ['anaokulu aylık yemek listesi', 'çocuk menüsü'],
  ),
  blogPage: seo(
    'Eğitim & Ebeveynlik Blogu | Eylül Çocuk Akademisi',
    'Okul öncesi eğitim, BEM yaklaşımı, beslenme ve çocuk gelişimi üzerine rehber yazılar.',
    ['okul öncesi eğitim blog', 'çocuk gelişimi', 'ebeveynlik rehberi'],
  ),
  portal: { ...seo('Veli Portalı | Eylül Çocuk Akademisi', 'Veli portalımız çalışma aşamasındadır.', []), noindex: true },
};
