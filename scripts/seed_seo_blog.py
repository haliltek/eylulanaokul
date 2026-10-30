import json, re

# Load cms-store.json
with open(r"D:\anaokulu\data\cms-store.json", "r", encoding="utf-8") as f:
    store = json.load(f)

# 1. BLOG DATA
store["blog"] = {
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
}

# 2. SEO SUITE (SERPBEAR, UNLIGHTHOUSE, WEB ANALYTICS)
store["seo"] = {
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
                "history": [4, 4, 3, 3, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1],
                "tags": ["ana-hedef", "yerel-seo", "kars"],
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
                "history": [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                "tags": ["kurumsal-unvan", "yerel-seo"],
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
                "history": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                "tags": ["marka", "resmi-ad"],
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
                "history": [5, 4, 4, 3, 3, 3, 3, 2, 3, 2, 2, 2, 2, 2],
                "tags": ["ozel-okul", "kars"],
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
                "history": [3, 3, 3, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1],
                "tags": ["all-day-english", "yabanci-dil"],
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
                "history": [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                "tags": ["lokasyon", "sehitler-mh"],
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
                "history": [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                "tags": ["bem", "pedagoji"],
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
                "history": [3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                "tags": ["marka", "yerel-seo"],
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
                "canonicalValid": True,
                "indexable": True,
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
            {"date": "2026-10-08", "visitors": 245, "pageViews": 840, "organic": 178},
            {"date": "2026-10-09", "visitors": 268, "pageViews": 920, "organic": 195},
            {"date": "2026-10-10", "visitors": 290, "pageViews": 1010, "organic": 210},
            {"date": "2026-10-11", "visitors": 185, "pageViews": 620, "organic": 130},
            {"date": "2026-10-12", "visitors": 312, "pageViews": 1130, "organic": 245},
            {"date": "2026-10-13", "visitors": 335, "pageViews": 1180, "organic": 260},
            {"date": "2026-10-14", "visitors": 348, "pageViews": 1240, "organic": 272},
            {"date": "2026-10-15", "visitors": 360, "pageViews": 1290, "organic": 285},
            {"date": "2026-10-16", "visitors": 382, "pageViews": 1360, "organic": 302},
            {"date": "2026-10-17", "visitors": 395, "pageViews": 1410, "organic": 315},
            {"date": "2026-10-18", "visitors": 210, "pageViews": 710, "organic": 150},
            {"date": "2026-10-19", "visitors": 420, "pageViews": 1520, "organic": 340},
            {"date": "2026-10-20", "visitors": 445, "pageViews": 1590, "organic": 365},
            {"date": "2026-10-21", "visitors": 465, "pageViews": 1670, "organic": 385}
        ],
        "pageMetrics": [
            {"path": "/", "label": "Anasayfa", "views": 4850, "uniqueVisitors": 3100, "avgTimeSec": 165, "bounceRate": 24.2},
            {"path": "/kayit-ve-basvuru", "label": "Kayıt ve Başvuru", "views": 2140, "uniqueVisitors": 1580, "avgTimeSec": 210, "bounceRate": 19.5},
            {"path": "/icerikler/aylik-yemek-listesi", "label": "Aylık Yemek Listesi", "views": 1820, "uniqueVisitors": 1340, "avgTimeSec": 195, "bounceRate": 21.0},
            {"path": "/egitim-modelimiz-bem", "label": "BEM Modeli", "views": 1430, "uniqueVisitors": 1050, "avgTimeSec": 240, "bounceRate": 26.5},
            {"path": "/okulumuz", "label": "Okulumuz & Kampüs", "views": 1350, "uniqueVisitors": 980, "avgTimeSec": 180, "bounceRate": 28.0},
            {"path": "/all-day-english", "label": "All Day English", "views": 1120, "uniqueVisitors": 850, "avgTimeSec": 215, "bounceRate": 27.2},
            {"path": "/icerikler/ders-programi", "label": "Ders Programı", "views": 980, "uniqueVisitors": 720, "avgTimeSec": 190, "bounceRate": 22.4},
            {"path": "/etkinlikler", "label": "Etkinlikler", "views": 940, "uniqueVisitors": 710, "avgTimeSec": 175, "bounceRate": 29.1},
            {"path": "/blog", "label": "Eğitim Blogu", "views": 890, "uniqueVisitors": 680, "avgTimeSec": 260, "bounceRate": 31.0},
            {"path": "/iletisim", "label": "İletişim & Harita", "views": 840, "uniqueVisitors": 640, "avgTimeSec": 145, "bounceRate": 22.0},
            {"path": "/dogal-ve-dengeli-beslenme", "label": "Beslenme İlkeleri", "views": 760, "uniqueVisitors": 580, "avgTimeSec": 170, "bounceRate": 28.5},
            {"path": "/velilerimiz-icin", "label": "Velilerimiz İçin", "views": 680, "uniqueVisitors": 510, "avgTimeSec": 160, "bounceRate": 25.0},
            {"path": "/hakkimizda", "label": "Hakkımızda", "views": 610, "uniqueVisitors": 460, "avgTimeSec": 150, "bounceRate": 30.5},
            {"path": "/icerikler/etkinlik-videolari", "label": "Etkinlik Videoları", "views": 580, "uniqueVisitors": 440, "avgTimeSec": 230, "bounceRate": 26.0}
        ],
        "clickEvents": [
            {"id": "clk-call", "label": "Telefon Arama Butonu (0 551 589 32 12)", "targetPath": "tel:05515893212", "category": "İletişim", "count": 284, "lastClickedAt": "2026-10-21T13:20:00.000Z"},
            {"id": "clk-tour", "label": "Okul Ziyareti / Randevu Al Butonu", "targetPath": "/kayit-ve-basvuru", "category": "Kayıt Hunisi", "count": 218, "lastClickedAt": "2026-10-21T13:42:00.000Z"},
            {"id": "clk-map", "label": "Kars Harita / Yol Tarifi Butonu", "targetPath": "https://maps.google.com/?q=Ozel+Eylul+Anaokulu+Kars", "category": "Harita", "count": 176, "lastClickedAt": "2026-10-21T12:55:00.000Z"},
            {"id": "clk-meal", "label": "Aylık Yemek Listesi İncele", "targetPath": "/icerikler/aylik-yemek-listesi", "category": "Menü", "count": 162, "lastClickedAt": "2026-10-21T13:10:00.000Z"},
            {"id": "clk-schedule", "label": "Ders Programı İncele", "targetPath": "/icerikler/ders-programi", "category": "Akademik", "count": 135, "lastClickedAt": "2026-10-21T11:40:00.000Z"},
            {"id": "clk-whatsapp", "label": "WhatsApp Hızlı İletişim Butonu", "targetPath": "https://wa.me/905515893212", "category": "Sosyal", "count": 149, "lastClickedAt": "2026-10-21T13:35:00.000Z"},
            {"id": "clk-video", "label": "Etkinlik Videosu Oynat", "targetPath": "/icerikler/etkinlik-videolari", "category": "Medya", "count": 94, "lastClickedAt": "2026-10-21T10:15:00.000Z"}
        ],
        "trafficSources": [
            {"source": "Google Organik Arama", "sessions": 2740, "percentage": 64.0},
            {"source": "Doğrudan (Direct)", "sessions": 780, "percentage": 18.2},
            {"source": "Instagram / Sosyal Medya", "sessions": 460, "percentage": 10.7},
            {"source": "Google Haritalar / Yerel", "sessions": 210, "percentage": 4.9},
            {"source": "Tavsiye / Diğer", "sessions": 90, "percentage": 2.2}
        ]
    }
}

# Update timestamp and version
store["_lastUpdated"] = "2026-10-21T14:00:00.000Z"
store["_version"] = "1.3.0"

# Save cms-store.json
with open(r"D:\anaokulu\data\cms-store.json", "w", encoding="utf-8") as f:
    json.dump(store, f, ensure_ascii=False, indent=2)

# Save initial-cms-data.ts
ts_code = """import { CmsStore } from '../types/cms';

export const initialCmsData: CmsStore = """ + json.dumps(store, ensure_ascii=False, indent=2) + ";\n"

with open(r"D:\anaokulu\src\data\initial-cms-data.ts", "w", encoding="utf-8") as f:
    f.write(ts_code)

print("cms-store.json and initial-cms-data.ts successfully written with Blog and SEO data!")
