import { BlogData, SeoSuiteData } from '@/types/cms';
import { createEmptySeoData } from '@/lib/seo';

export const initialBlogData: BlogData = {
  heroTitle: 'Eylül Çocuk Akademisi Blog & Rehberlik Yazıları',
  heroSubtitle: 'Okul öncesi eğitim, çocuk gelişimi, beslenme ve aile içi iletişim üzerine uzman yazılarımız',
  categories: ['Okul Öncesi Eğitim', 'BEM Modeli', 'Çocuk Gelişimi', 'Doğal Beslenme', 'Veli Rehberi'],
  posts: [
    {
      id: 'blog-1',
      slug: 'okul-oncesi-egitimde-guvenli-baglanma-ve-oryantasyon',
      title: 'Okul Öncesi Eğitimde Güvenli Bağlanma ve İlk Hafta Oryantasyonu',
      excerpt: 'Çocuğunuzun anaokuluna başlarken hissettiği kaygıyı güvene dönüştürmenin ve okula uyum sürecini kolaylaştırmanın bilimsel yolları.',
      content: [
        'Okula başlama süreci, çocuğun anne-babadan ayrışarak sosyal dünyaya adım attığı en kritik gelişim evrelerinden biridir. Bu geçiş döneminde Eylül Çocuk Akademisi olarak uyguladığımız kademeli oryantasyon süreci, çocuğun okulda güvende olduğunu hissetmesini temel alır.',
        'İlk günlerde velilerimizle birlikte bahçede başlayan tanışma çemberleri, güvenli bağın okul ortamına ve öğretmenine aktarılmasını sağlar. Çocuğun vedalaşma rutinleri, vedayı uzatmadan ancak gizlice kaçmadan gerçekleştirmek güven duygusunu pekiştirir.',
        'Kars yerleşkemizdeki doğa dostu mimari ve Montessori destekli atölyelerimiz, miniklerin keşfetme arzusunu tetikleyerek ayrılık kaygısını üretken bir oyuna dönüştürür.'
      ],
      category: 'Çocuk Gelişimi',
      coverImage: '/images/hero-classroom-smile.jpg',
      author: 'Uzman Çocuk Gelişimci & Rehberlik Servisi',
      publishedAt: '2026-10-18',
      readTime: '4 dk',
      status: 'published',
      views: 0,
      seo: {
        focusKeyword: 'okul öncesi oryantasyon',
        metaTitle: 'Okul Öncesi Oryantasyon Süreci | Eylül Çocuk Akademisi Kars',
        metaDescription: 'Çocuklarda anaokulu uyum süreci, ayrılık kaygısı ve güvenli bağlanma yöntemleri. Eylül Çocuk Akademisi uzman rehberlik önerileri.',
        seoScore: 95
      }
    },
    {
      id: 'blog-2',
      slug: 'erken-yasta-ingilizce-edinimi-all-day-english',
      title: 'Erken Yaşta Çift Dilli Yaşam: All Day English ile Doğal Dil Edinimi',
      excerpt: 'Ezber ve dilbilgisi kuralları yerine, gün boyu doğal akışta İngilizceye maruz kalmanın çocukların beyin gelişimine katkıları.',
      content: [
        'Dil öğretilmez; yaşanarak edinilir. Erken çocukluk döneminde beyin plastisitesi en yüksek seviyededir. All Day English yaklaşımımızda İngilizce ayrı bir ders değil, kahvaltıdan bahçe oyununa kadar günün doğal bir parçasıdır.',
        'Türkçe ve yabancı uyruklu koordinatör öğretmenlerimizle çift öğretmenli sınıf modelinde çocuklar dili dinleyerek, şarkılarla ve BEM atölyeleriyle sezgisel olarak kavrarlar.',
        'Bu model, çocukların yalnızca ikinci bir dili aksansız öğrenmelerini sağlamakla kalmaz; problem çözme ve analitik düşünme becerilerini de iki katına çıkarır.'
      ],
      category: 'All Day English',
      coverImage: '/images/gallery-workshop-painting.jpg',
      author: 'Yabancı Diller Zümre Başkanlığı',
      publishedAt: '2026-10-15',
      readTime: '5 dk',
      status: 'published',
      views: 0,
      seo: {
        focusKeyword: 'çocuklarda ingilizce eğitimi',
        metaTitle: 'Erken Yaşta İngilizce Edinimi | All Day English Kars',
        metaDescription: 'Okul öncesi dönemde çift dilli eğitim ve All Day English modeliyle doğal dil ediniminin önemi. Eylül Çocuk Akademisi.',
        seoScore: 92
      }
    },
    {
      id: 'blog-3',
      slug: 'okul-oncesi-cocuklarda-dogal-ve-dengeli-beslenme-aliskanliklari',
      title: 'Büyüme Çağında Doğal Beslenme: Paketli Gıdasız, Şekersiz Menü Planı',
      excerpt: 'Anaokulunda çocuklara doğru beslenme alışkanlığı kazandırmanın önemi ve Eylül Çocuk Akademisi diyetisyen onaylı mutfak kültürü.',
      content: [
        'Çocuklarımızın fiziksel gelişimi kadar bilişsel odaklanma süreleri de tükettikleri besinlerle doğrudan ilişkilidir. Rafine şeker ve koruyucu katkı maddeleri içermeyen bir beslenme programı uyguluyoruz.',
        'Kars yöresinin doğal süt ürünleri, köy yumurtaları, siyez ve tam tahıllar menümüzün temel yapı taşlarıdır. Çocuklarımız sebzeleri yalnızca tabakta görmekle kalmaz, okul bostanında tohumdan fidana büyümesini izlerler.',
        'Böylece sofraya oturduklarında yiyeceklere karşı pozitif bir merak ve sağlıklı beslenme bilinci geliştirirler.'
      ],
      category: 'Doğal Beslenme',
      coverImage: '/images/hero-montessori-wood.jpg',
      author: 'Kurumsal Diyetisyen',
      publishedAt: '2026-10-10',
      readTime: '4 dk',
      status: 'published',
      views: 0,
      seo: {
        focusKeyword: 'anaokulu beslenme menüsü',
        metaTitle: 'Anaokulunda Doğal ve Dengeli Beslenme | Eylül Çocuk Akademisi',
        metaDescription: 'Çocuklarda paketli gıdasız doğal beslenme alışkanlığı ve diyetisyen onaylı menü planı. Eylül Çocuk Akademisi Kars.',
        seoScore: 96
      }
    }
  ]
};

export const initialSeoSuiteData: SeoSuiteData = createEmptySeoData('eylulanaokulu.com.tr');
