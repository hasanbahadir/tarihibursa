export type BlogCategory =
  | "Tarihi Yerler"
  | "Gastronomi"
  | "Doğa"
  | "Kültür"
  | "Alışveriş"
  | "Sağlık";

export interface BlogPostContentBlock {
  type: "paragraph" | "heading" | "list" | "quote" | "image";
  content?: string;
  items?: string[];
}

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  views?: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  content: BlogPostContentBlock[];
}

export const blogPosts: BlogPostData[] = [
  {
    slug: "bursada-gorulmesi-gereken-10-tarihi-yer",
    title: "Bursa'da Görülmesi Gereken 10 Tarihi Yer",
    excerpt:
      "Osmanlı'nın ilk başkenti Bursa'nın mutlaka görülmesi gereken tarihi mekanlarını keşfedin. Ulucami'den Yeşil Türbe'ye...",
  image: "/tarih.png",
    category: "Tarihi Yerler",
    date: "15 Ocak 2024",
    readTime: "8 dk",
    views: "1.2K",
    featured: true,
    seoTitle: "Bursa'da Görülmesi Gereken 10 Tarihi Yer | Tarihi Bursa Rehberi",
    seoDescription:
      "Osmanlı'nın ilk başkenti Bursa'nın en önemli tarihi mekanlarını keşfedin. Ulu Cami, Yeşil Türbe, Cumalıkızık ve daha fazlası hakkında detaylı bilgiler. Bursa tarihi yerler rehberi.",
    content: [
      { type: "paragraph", content: "Osmanlı İmparatorluğu'nun ilk göz ağrısı, kadim şehir Bursa, sadece doğal güzellikleriyle değil, aynı zamanda yüzyıllara meydan okuyan tarihi dokusuyla da büyüleyici bir atmosfere sahip. Bu şehir, her köşesinde Osmanlı'nın ihtişamlı geçmişine tanıklık eden yapıtlarıyla adeta bir açık hava müzesi niteliğinde." },
      { type: "paragraph", content: "Eğer siz de tarihin derinliklerine doğru unutulmaz bir yolculuğa çıkmak isterseniz, Bursa'da mutlaka görmeniz gereken 10 tarihi yeri keşfetmeye davetlisiniz." },
      { type: "heading", content: "Mutlaka Görülmesi Gereken Tarihi Mekanlar" },
      { type: "heading", content: "Ulu Cami: Osmanlı'nın Heybetli Mirası" },
      { type: "paragraph", content: "1399 yılında Yıldırım Bayezid tarafından yaptırılan Ulu Cami, 20 kubbesiyle Türkiye'nin en büyük camilerinden biridir. Selçuklu ve Osmanlı mimarisinin zarif bir sentezi olan bu yapı, içindeki 192 hat levhasıyla da dikkat çekiyor. Caminin ortasındaki şadırvan ise ayrı bir estetik katıyor." },
      { type: "heading", content: "Yeşil Türbe ve Yeşil Cami: Çinilerin Büyüsü" },
      { type: "paragraph", content: "Çelebi Mehmet tarafından yaptırılan Yeşil Cami ve Yeşil Türbe, Bursa'nın sembol yapılarından. Özellikle Yeşil Türbe'nin iç ve dış cephelerindeki İznik çinileri, Osmanlı çini sanatının en nadide örneklerini sunuyor." },
      { type: "heading", content: "Emir Sultan Külliyesi: Manevi Atmosfer ve Panoramik Şehir Manzarası" },
      { type: "paragraph", content: "Bursa'nın manevi merkezlerinden biri olan Emir Sultan Külliyesi, cami, türbe, hamam ve çeşmeden oluşuyor. Özellikle tepe üzerindeki konumu sayesinde şehre hakim bir manzaraya sahip." },
      { type: "heading", content: "Muradiye Külliyesi: Hanedan Türbeleriyle Bezeli Sakin Bir Vaha" },
      { type: "paragraph", content: "II. Murat tarafından yaptırılan Muradiye Külliyesi, içinde barındırdığı hanedan türbeleriyle Osmanlı tarihine ışık tutuyor. Huzurlu atmosferi ve bakımlı bahçesiyle ziyaretçilerine dinlendirici bir deneyim sunuyor." },
      { type: "heading", content: "Cumalıkızık: 700 Yıllık Bir Osmanlı Köyü" },
      { type: "paragraph", content: "UNESCO Dünya Mirası Listesi'nde yer alan Cumalıkızık, 700 yıllık tarihiyle Osmanlı kırsal yaşamını günümüze taşıyor. Taş sokakları, ahşap evleri ve yöresel lezzetleriyle adeta zamanda bir yolculuk yapmanızı sağlıyor." },
      { type: "heading", content: "Koza Han: İpek Ticaretinin Kalbi" },
      { type: "paragraph", content: "1490 yılında II. Bayezid tarafından yaptırılan Koza Han, Bursa'nın tarihi ticaret merkezlerinden biri olmuştur. Günümüzde de ipek ürünleri başta olmak üzere çeşitli el sanatları ve hediyelik eşyaların satıldığı canlı bir mekan." },
      { type: "heading", content: "Bursa Kent Müzesi: Şehrin Hafızası" },
      { type: "paragraph", content: "Bursa'nın geçmişine ışık tutan Bursa Kent Müzesi, şehrin tarihi, kültürel ve sosyal yaşamına dair zengin bir koleksiyona ev sahipliği yapıyor. Balmumu heykelleri ve interaktif sergileriyle her yaştan ziyaretçiye hitap ediyor." },
      { type: "heading", content: "Tophane ve Saat Kulesi: Şehrin Sembolik Noktası" },
      { type: "paragraph", content: "Tophane semtinde yer alan tarihi surlar ve üzerindeki Saat Kulesi, Bursa'nın en bilinen simgelerinden. Buradan şehri kuşbakışı izlemek de ayrı bir keyif." },
      { type: "heading", content: "Hünkar Köşkü: Sultanların İhtişamlı Konutu" },
      { type: "paragraph", content: "19. yüzyılda Abdülmecid tarafından yaptırılan Hünkar Köşkü, dönemin Osmanlı mimarisini yansıtan zarif bir yapı. İçindeki eşyalar ve dekorasyon, sultanların yaşam tarzına dair ipuçları sunuyor." },
      { type: "heading", content: "Irışkapanı Han: Geçmişin İzinde Bir Mola" },
      { type: "paragraph", content: "Osmanlı döneminde önemli bir ticaret merkezi olan Irışkapanı Han, günümüzde restore edilerek farklı amaçlarla kullanılıyor. Tarihi atmosferi içinde bir mola vermek için ideal bir nokta." },
      { type: "paragraph", content: "Bursa'nın tarihi dokusunu keşfetmek, adeta bir zaman yolculuğuna çıkmak gibi. Bu 10 tarihi mekan, şehrin zengin geçmişini gözler önüne seriyor ve ziyaretçilerine unutulmaz anılar biriktirme fırsatı sunuyor. Bursa gezinizde bu önemli noktaları rotanıza ekleyerek, tarihin büyülü atmosferine kendinizi bırakabilirsiniz." }
    ],
  },
  {
    slug: "osmanlidan-gunumuze-bursa-mutfagi",
    title: "Osmanlı'dan Günümüze Bursa Mutfağı",
    excerpt:
      "İskender kebabın doğduğu şehirde, geleneksel lezzetlerin hikayesini ve en iyi mekanları öğrenin.",
  image: "/gastronomi.png",
    category: "Gastronomi",
    date: "12 Ocak 2024",
    readTime: "6 dk",
    views: "985",
    seoTitle: "Osmanlı'dan Günümüze Bursa Mutfağı - İskender’den Keşkek’e Lezzet Dolu Yolculuk",
    seoDescription:
      "Bursa mutfağının Osmanlı’dan bu yana şekillenen özgün lezzetlerini; İskender kebabından Cantık ve Keşkek’e uzanan zengin hikâyeleri, mekan önerileriyle keşfedin.",
    content: [
      { type: "heading", content: "Giriş - Zaman Tünelinden Bir Lezzet Serüveni" },
      { type: "paragraph", content: "Bursa mutfağı, Osmanlı saray mutfağının ince dokusunu ve yerel tarım ürünlerinin güçlü karakterini birleştirerek ortaya çıkan benzersiz bir gastronomi mirasıdır. Tereyağının, yoğurdun ve yerel et kalitesinin ön planda olduğu bu mutfak, hem sadeliği hem de derin tadıyla dikkat çeker." },

      { type: "heading", content: "Bursa Mutfak Kültürünün Öne Çıkan Tatları" },

      { type: "heading", content: "1. İskender Kebabı - Bursa’nın Taçlı Lezzeti" },
      { type: "list", items: [
        "19. yüzyıl sonlarında Bursa’da yaşayan İskender Efendi tarafından ortaya çıkarıldı; Kayhan Çarşısı’nda küçük bir dükkânda başladı (1867).",
        "Eti kemik ve sinirlerinden arındırıp dikey şişte odun kömüründe pişirdi; ince dilimleyip pide üzerine yerleştirip domates sosu, tereyağı ve yoğurtla servis etti.",
        "Kullanılan eti genellikle Uludağ’ın kekik ve yerel otlarıyla beslenen kuzu ve koç eti oluşturur; bu da lezzete ayrı bir derinlik katar."
      ]},

      { type: "heading", content: "2. Cantık & Tahinli Pide" },
      { type: "paragraph", content: "Bursa fırın kültürünün tatlı-tuzlu iki ikonik temsilcisi. Cantık, etli küçük boy pide; Tahinli ise tatlı olarak sunulan tahinli pide. Her ikisi de şehir fırınlarının vazgeçilmezleri arasındadır." },

      { type: "heading", content: "3. Cıra Uşşağı / Keşkek" },
      { type: "paragraph", content: "Kırsal mutfağın doyurucu örneği olan keşkek, buğday ve etin uzun sürede pişirilmesiyle elde edilen zengin dokusu ve topluluk bağlamında sunumuyla öne çıkar." },

      { type: "heading", content: "Bursa’da Öne Çıkan Lezzet Durakları" },
      { type: "paragraph", content: "Yalnızca tatları değil, mekanları da araştırdım. Bursa’da otantik deneyim için öne çıkan yerler:" },
      { type: "list", items: [
        "İskender Efendi Konağı: 1867 kökenli; Botanik Park içindeki tarihi Osmanlı konağında orijinal ambiyans eşliğinde sunum.",
        "Kebapçı İskender: Yaratıcısının ailesi tarafından işletilen, Ulu Cami ve Kapalıçarşı’ya yakın, klasik İskender’i yaşatan tarihi dükkân.",
        "Mutlu Et: Odun ateşinde pişirme yöntemiyle öne çıkan, közlenmiş biber ve ayran eşliğiyle tavsiye edilen bir mekan."
      ]},

      { type: "heading", content: "Bursa Mutfağında Tadı Sarsan Ayrıntılar" },
      { type: "list", items: [
        "Et Kalitesi: Uludağ’ın otlarıyla beslenmiş kuzu/koç eti; yağ oranı dengeli, aroması güçlü.",
        "Pide ve Sos Uyumu: Taze pide, domates sosu ve sızan tereyağının birleşimi sunuma derinlik katar.",
        "Sunumun Sanatı: Etin şişten kesilme tekniği ve serviste sos ile yağın etkileyici sunumu deneyimi zenginleştirir."
      ]},

      { type: "heading", content: "Sonuç - Neden Okumaya Değer?" },
      { type: "list", items: [
        "Bursa mutfağı, İskender gibi bir dünya markasını doğurmuş; kökleri Osmanlı kültürüne dayanan özgün ve güçlü bir mirastır.",
        "Sadeliğin içindeki ustalık ve ustaların seçimlerindeki incelik, her lokmada hissedilir.",
        "Sadece lezzet değil; bir şehir tarihinin özeti, sosunda, etinde ve sunumunda saklıdır."
      ]}
    ],
  },
  {
    slug: "uludagda-1-gunluk-gezi-plani",
    title: "Uludağ'da 1 Günlük Gezi Planı",
    excerpt: "Türkiye'nin en popüler kayak merkezinden doğa yürüyüşlerine kadar Uludağ'da yapılabilecek aktiviteler.",
  image: "/uludag.png",
    category: "Doğa",
    date: "10 Ocak 2024",
    readTime: "7 dk",
    views: "756",
    seoTitle: "Uludağ’da 1 Günlük Gezi Planı – Teleferik, Sarıalan-Çobankaya ve Panoramik Duraklar",
    seoDescription: "Teleferikle zirveye çıkın, Sarıalan-Çobankaya yürüyüşü yapın, Bakacak’ta Bursa manzarasını izleyin. Kışın kayak/board, yazın serin orman rotalarıyla dolu 1 günlük Uludağ rehberi.",
    content: [
      { type: "paragraph", content: "Uludağ, dört mevsim etkinlik sunar. Kışın kayak ve snowboard; yazın serin orman patikaları, yürüyüş ve piknik. Bu plan, teleferikle yükselip Sarıalan–Çobankaya hattında doğayla yakın temas kurduğun, panoramik noktalarda nefes tazelediğin dolu dolu bir günü sunar." },
      { type: "heading", content: "Önerilen Günlük Rota (Saatli Plan)" },
      { type: "list", items: [
        "08:30 – Teferrüç’te buluşma, teleferik hazırlığı.",
        "09:00 – 09:30 – Teleferikle Sarıalan/Oteller Bölgesi; kabinden panoramik fotoğraflar.",
        "09:45 – 10:30 – Sarıalan’da kahve/kahvaltı ve kısa manzara molası.",
        "10:30 – 12:30 – Sarıalan → Çobankaya yürüyüşü (varyanta göre ~4–7.5 km).",
        "12:30 – 14:00 – Çobankaya mesire alanında öğle molası (piknik/tesis).",
        "14:00 – 15:30 – (Opsiyonel) Bakacak seyir noktası ziyaret.",
        "16:00 – 17:00 – Sarıalan’a dönüş ve teleferikle Teferrüç’e iniş."
      ] },
      { type: "heading", content: "Kış Senaryosu (Aralık–Nisan)" },
      { type: "paragraph", content: "Oteller Bölgesi merkezli plan yapın. Pist seçenekleri ve ekipman kiralama noktaları burada yoğunlaşır. Havanın hızlı değişebildiğini unutmayın; katmanlı giyinin." },
      { type: "heading", content: "Ekipman Listesi" },
      { type: "list", items: [
        "Yaz/İlkbahar: Trekking ayakkabısı, yağmurluk, 1–1.5 L su, şapka/güneş kremi, atıştırmalık.",
        "Kış: Su geçirmez bot, termal katmanlar, buff/eldenlik, gözlük, sıcak içecek termosu.",
        "Her mevsim: Harita/GPX, powerbank, küçük ilk yardım kiti."
      ] },
      { type: "heading", content: "Pratik Notlar" },
      { type: "list", items: [
        "Teleferik bilet/saatleri değişebilir; gitmeden önce operatör sayfasını kontrol edin.",
        "Patikada işaretlemeyi takip edin; ormanda cep telefonu çekimi yer yer zayıflar.",
        "Piknik alanında çöpünüzü geri götürün; ayırt edici doğa kurallarına uyun."
      ] },
      { type: "heading", content: "Kısa Şiirsel Mola" },
      { type: "paragraph", content: "Teleferik yükselirken Bursa, yeşil bir kilim gibi serilir; çamların arasından esen rüzgâr, yüzünüze Uludağ’ın serin nefesini taşır. Patika her kıvrımda yeni bir cümle kurar; siz yürüdükçe dağ yazmaya, siz dinledikçe orman anlatmaya devam eder." }
    ],
  },
  {
    slug: "cumalikizik-unesco-dunya-mirasi-koyu",
    title: "Cumalıkızık: UNESCO Dünya Mirası Köyü",
    excerpt:
      "700 yıllık tarihi dokusu ile büyüleyen Cumalıkızık köyünde neler yapılır, nasıl gidilir?",
  image: "/cumalıkızık.png",
    category: "Kültür",
    date: "8 Ocak 2024",
    readTime: "7 dk",
    views: "1.1K",
    seoTitle: "Cumalıkızık Gezi Rehberi – UNESCO Dünya Mirası, Tarihî Sokaklar ve Etnografya Müzesi",
    seoDescription: "Erken Osmanlı kırsal mimarisinin canlı örneği Cumalıkızık’ta görülmesi gereken yerler: köy meydanı, Cin Aralığı, Etnografya Müzesi. Ulaşım ve pratik ipuçlarıyla tam gün plan.",
    content: [
      {
        type: "paragraph",
        content:
          "Cumalıkızık, UNESCO’nun “Bursa ve Cumalıkızık: Osmanlı İmparatorluğu’nun Doğuşu” başlığıyla 2014’te Dünya Mirası’na dâhil ettiği alanın kırsal bileşenidir; erken Osmanlı’nın şehir–kır düzenini birlikte gösteren örnek bir yerleşim olarak kabul edilir. Bu statü, köyün özgün dokusunu koruyarak geleceğe taşımayı amaçlar. (Kaynak: UNESCO, ICOMOS belgeleri).",
      },
      {
        type: "paragraph",
        content:
          "Mimari doku üç katlı, moloz taş–ahşap–kerpiç karışımı evlerden oluşur; cumbalı/kafesli pencereler, mor–mavi–sarı tonlarla boyalı cepheler ve kaldırımsız, taş döşeli dar sokaklar özgün atmosferi tamamlar. Köy, vakıf yerleşimi olarak 14. yüzyıla tarihlenir.",
      },
      { type: "heading", content: "Görülmesi Gereken Yerler" },
      {
        type: "list",
        items: [
          "Köy Meydanı: Yöresel kahvaltı ve reçellerle güne başlamak için ideal ortam; el sanatları tezgâhlarıyla canlı bir merkez.",
          "Cumalıkızık Etnografya Müzesi: 1992’de açılan, 2015’te çağdaş müzecilik anlayışıyla yenilenen müzede köy yaşamına ait eşyalar, Orhan Bey beratı ve açık alanda tarımsal araçlar görülebilir.",
          "Cin Aralığı: Rivayete göre “dünyanın en dar sokağı” olarak anılan, iki yapının arasında tek kişinin zor sığdığı geçit. Hikâyesi kadar fotoğrafı da meşhur.",
          "Cumalıkızık Camii, Zekiye Hatun Çeşmesi ve hamam: Osmanlı dönemi yapılarıyla köyün tarihî katmanını somutlaştırır.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Şiirsel bir an: Çakıl taşlarının üstünde yürürken ayak sesin geçmişe karışır; ahşap kapıların tokmakları sanki zamana vurulur. Mor sıvalı bir duvarın gölgesi yüzüne düşer; Uludağ’dan inen rüzgâr, avluların diliyle fısıldar: ‘Burası, taşın ve sessizliğin konuştuğu köydür.’",
      },
      { type: "heading", content: "Önerilen Rota (3–4 Saat)" },
      {
        type: "list",
        items: [
          "Meydan’da kahvaltı → Arasta ve sokaklarda mimari gözlem",
          "Etnografya Müzesi ziyareti (1 saat)",
          "Cin Aralığı’na yürüyüş ve fotoğraf molası",
          "Zekiye Hatun Çeşmesi–Camii–Hamam hattı",
          "Meydana dönüş; yerel ürün alışverişi (reçel, tarhana, ahududu ürünleri)",
        ],
      },
      { type: "heading", content: "Etkinlik & Mevsimler" },
      {
        type: "paragraph",
        content:
          "Haziran’da düzenlenen Uluslararası Ahududu Festivali köyü en renkli haliyle görmek için iyi bir fırsat. İlkbahar ve sonbahar yumuşak ışık ve kalabalık dengesi açısından fotoğrafçılar için ideal.",
      },
      { type: "heading", content: "Ulaşım" },
      {
        type: "list",
        items: [
          "Toplu taşıma: BursaRay M2 hattında “Cumalıkızık (Değirmenönü)” durağında inip köy minibüslerine aktarma; kent merkezinden direkt minibüs seçeneği de mevcut.",
          "Özel araç: Ankara yolu istikametinde yönlendirmeleri izleyerek köy girişine kadar ulaşılıyor (iç sokaklarda araç kullanmaktan kaçının).",
        ],
      },
      { type: "heading", content: "Pratik İpuçları" },
      {
        type: "list",
        items: [
          "Hafta içi veya erken saatler, kalabalıktan kaçınmak için avantajlı.",
          "Dar sokaklarda tripod kurulumu için sabırlı olun; yerel yaşamı rahatsız etmemeye özen gösterin.",
          "Kışın zemin ıslak/kaygan olabilir; tabanlı yürüyüş ayakkabısı önerilir.",
          "Yerel üreticiden doğrudan alışveriş yaparak sürdürülebilir turizme katkıda bulunun.",
        ],
      },
    ],
  },
  {
    slug: "bursada-ipekcilik",
    title: "Bursa’da İpekçilik: Kozadan Kumaşa Bir Şehrin Hikâyesi",
    excerpt:
      "Osmanlı’nın ilk başkentinde ipek yolunun izleri: Koza Han, atölyeler, kumaşlar ve 700 yıllık dokunun bugünkü yankısı.",
    image: "/ipek.png",
    category: "Kültür",
    date: "2 Ocak 2024",
    readTime: "8 dk",
    views: "1.3K",
    seoTitle: "Bursa’da İpekçilik – Koza Han, Osmanlı Kumaşları ve Modern İzler",
    seoDescription:
      "Bursa ipekçiliğinin tarihi: 15.–16. yy’da dokuma, Koza Han ve hanlar ekosistemi, kadife/kemha/seraser gibi Osmanlı kumaşları ve 19. yy dönüşümü. Günümüzde nerede görülür?",
    content: [
      {
        type: "paragraph",
        content:
          "Bursa, Osmanlı’nın ilk başkenti olarak ipek ticaretinin hem aktarım hem de üretim merkezlerinden biri oldu. Hanlar bölgesindeki atölyeler, saray için lüks kumaşlar dokudu; ipek sadece bir emtia değil, şehrin belleği hâline geldi.",
      },
      { type: "heading", content: "Kısa Tarihçe: Kökler, Zirve, Dönüşüm" },
      {
        type: "list",
        items: [
          "15. yüzyılda Bursa’daki dokumahaneler oturmuş bir üretim düzenine kavuştu; Osmanlı’nın lüks kadife (çatma) ve metal telli ipekleri (kemha/seraser) burada yoğunlaştı.",
          "1491’de II. Bayezid, İstanbul’daki imareti için vakıf geliri oluşturmak üzere Koza Han’ı yaptırdı; han, ipek kozasından kumaşa uzanan ticaretin kalbi oldu.",
          "Bursa, İpek Yolu’nun Akdeniz’e uzanan hattında İran üzerinden gelen ham ipeğin toplandığı ve işlendiği bir odak olarak anıldı.",
          "16. yüzyılın ikinci yarısında fiyat makası dokumayı zorlar, ham ipek kârlılığı öne çıkar; ekonomi dokumadan ham ipeğe kayar.",
          "19. yüzyılda buharlı çekim (reeling) teknolojisi ve dış pazar etkisiyle dokumada ‘geri-imalatlaşma’, ham ipeğe uzmanlaşma yaşanır; aynı yüzyılda ipekböceği hastalıkları sektörü sarsar.",
        ],
      },
      { type: "heading", content: "Kumaşların Dili: Kadife, Kemha, Seraser" },
      {
        type: "paragraph",
        content:
          "Saray giysilerinden mihrap örtülerine uzanan Osmanlı ipekleri Bursa’da bir estetik dil kurdu: kabarık ve zengin dokusuyla kadife (çatma), lâmba dokuma (lampas) tekniğine dayanan kemha ve metal tel çözgü/atkı kullanan gösterişli seraser… Motifler lale, karanfil, rûmî ve hatayî ile ‘sultanın bahçesini’ kumaşa taşır.",
      },
      { type: "heading", content: "Koza Han ve Hanlar Ekosistemi" },
      {
        type: "paragraph",
        content:
          "Orhan Camii’nin yanı başındaki Koza Han, iki katlı revakları ve avlu ortasındaki mescidiyle ipek kozası ticaretinin simgesidir. Erken 16. yüzyılda Avrupalı tüccarların (ör. Medici acenteleri) ofis açtığı bilinir. Bugün han, ipek mağazaları ve avlu kahveleriyle geleneği yaşatır.",
      },
      { type: "heading", content: "19. Yüzyıl: Fabrika Çağı, Hastalıklar ve Dış Pazar" },
      {
        type: "paragraph",
        content:
          "1830’lardan itibaren buharlı ipek çekimhaneleri devreye girerken, küresel fiyatlar ve ticaret yolları Bursa’daki üretimi ham ipeğe yöneltti. Orta yüzyılda pebrin/flacherie gibi hastalıklar yayılıp koza verimini düşürdü; bölge yine de ham ipek ihracatında ağırlığını korudu.",
      },
      { type: "heading", content: "Bugün Bursa’da İpek Nerede Görülür?" },
      {
        type: "list",
        items: [
          "Koza Han ve çevresi: İpek şal/eşarp ve dokuma ürünleri, atölye gösterimleri.",
          "İpek Han ve İpek Pazarı çevresi: Geleneksel–modern desenlerin bir aradalığı.",
          "Müze ve koleksiyonlar: Osmanlı ipeklerini sergileyen kurumlar (geçici/kalıcı sergilere bakın).",
        ],
      },
      { type: "heading", content: "Ziyaret ve Alım İçin İpuçları" },
      {
        type: "list",
        items: [
          "Kalite okuması: Dokuma sıklığı, ipliğin homojenliği ve desenin netliği fiyatı belirler.",
          "İçerik şeffaflığı: ‘%100 ipek’ beyanı için etiket/sertifika isteyin; karışım oranlarını sorun.",
          "Bakım: İpek narin lif; doğrudan güneşten kaçının, kuru temizleme veya hassas elde yıkama tercih edin.",
        ],
      },
      { type: "heading", content: "Kısa Şiirsel Mola" },
      {
        type: "paragraph",
        content:
          "Kozanın sessizliğinde iplik ince bir su gibi akar; tezgâhın ritmi, Bursa’nın nabzına karışır. Bir lale motifi, bir karanfil; sarayın bahçesi kumaşa sızar. Her düğüm, bir ustanın nefesidir — ve şehir, ipeğin hafızasında yeniden dokunur.",
      },
    ],
  },
  {
    slug: "bursa-kapali-carsi-alisveris-rehberi",
    title: "Bursa Kapalı Çarşı Alışveriş Rehberi",
    excerpt:
      "Türkiye'nin en eski kapalı çarşılarından birinde alışveriş yapmanın püf noktaları ve öneriler.",
  image: "/kapalıCarsı.png",
    category: "Alışveriş",
    date: "5 Ocak 2024",
    readTime: "6 dk",
    views: "623",
    seoTitle: "Bursa Kapalı Çarşı Alışveriş Rehberi – Koza Han, Uzun Çarşı ve Bıçakçılar",
    seoDescription:
      "Hanlar Bölgesi’nde ipekten bıçağa, yerel tatlardan pazarlık ipuçlarına kadar alışverişin püf noktaları. Koza Han, Uzun Çarşı, Bıçakçılar hattında pratik rota.",
    content: [
      {
        type: "paragraph",
        content:
          "Bursa Hanlar Bölgesi, 14. yüzyıldan beri kentin ticari kalbidir. Kapalı Çarşı ve hanlar birlikte bir alışveriş ekosistemi oluşturur; bugün gördüğünüz canlılık yüzyılların alışveriş ritüelidir.",
      },
      {
        type: "paragraph",
        content:
          "Tarih boyunca yangınlar ve onarımlarla dönüşen doku 1958 Kapalı Çarşı yangınıyla büyük bir sınav vermiştir. Bugünkü hareketlilik, bu sınavdan sonra yeniden filizlenen çarşı kültürünün göstergesidir.",
      },
      { type: "heading", content: "Nereden Ne Alınır?" },
      {
        type: "list",
        items: [
          "Koza Han: 1491 tarihli han; ipek şal–eşarp ve el dokumaları için ilk adres.",
          "Uzun Çarşı: Tarihî ana aks; günlük ihtiyaçlar, yerel tatlar ve hatıralıklar.",
          "Bıçakçılar Çarşısı: 700 yıllık zanaat; el yapımı mutfak bıçağı ve çakılar.",
        ],
      },
      { type: "heading", content: "Pazarlık ve Kalite Kontrol" },
      {
        type: "list",
        items: [
          "Fiyat karşılaştırması yapın; iki–üç dükkân gezin.",
          "İpek ürünlerde içerik yüzdesi ve işçilik kalitesini sorun.",
          "Bıçakta usta damgası, denge ve birleşim kalitesine dikkat edin.",
          "Fiş/fatura isteyin; iade/değişim koşullarını baştan konuşun.",
        ],
      },
      { type: "heading", content: "Önerilen Rota (2–3 saat)" },
      {
        type: "list",
        items: [
          "Ulu Cami ve Orhan Külliyesi çevresi",
          "Koza Han (ipek) → Kapalı Çarşı/Uzun Çarşı",
          "Bıçakçılar Çarşısı ile kapanış",
        ],
      },
      { type: "heading", content: "Pratik Bilgiler" },
      {
        type: "list",
        items: [
          "Açılış–kapanış saatleri mağazaya göre değişir; önceden teyit edin.",
          "Kalabalıktan kaçınmak için sabah erken veya hafta içi gidin.",
          "Fotoğraf için esnaftan izin isteyin; ustalara saygı gösterin.",
        ],
      },
      { type: "heading", content: "Kısa Şiirsel Mola" },
      {
        type: "paragraph",
        content:
          "Revakların gölgesinde, ipek bir sözcük gibi akıp gider zaman; örsün ritmi, Bursa’nın kalp atışıdır. Bir bıçak sırtı kadar keskin pazarlıkla, bir ipek kadar yumuşak tebessüm arasında kurulur alışverişin dengesi.",
      },
    ],
  },
  {
    slug: "bursada-termal-turizm-oylat-kaplicalari",
    title: "Bursa'da Termal Turizm: Oylat Kaplıcaları",
    excerpt:
      "Şifalı sularıyla ünlü Oylat kaplıcalarında dinlence ve sağlık turizminin keyfini çıkarın.",
  image: "/termal.png",
    category: "Sağlık",
    date: "3 Ocak 2024",
    readTime: "7 dk",
    views: "892",
    seoTitle: "Oylat Kaplıcaları Rehberi – Suyun Özellikleri, Ulaşım, Yakın Geziler",
    seoDescription:
      "İnegöl’e 27 km mesafedeki Oylat Kaplıcaları’nda 40–40.5°C termal su, hamam ve spa olanakları. Oylat Mağarası ve şelale rotalarıyla tam günlük dinlenme planı.",
    content: [
      {
        type: "paragraph",
        content:
          "Oylat, Uludağ’ın güneydoğu eteklerinde, denizden yaklaşık 750 m yüksekte yer alan tarihî bir termal merkezdir. Bölgenin kaplıca kültürü Roma ve Osmanlı dönemlerinden beri sürer; günümüzde de termal turizmin Marmara’daki güçlü duraklarından biridir.",
      },
      { type: "heading", content: "Nerede? Nasıl gidilir?" },
      {
        type: "list",
        items: [
          "Konum: Bursa / İnegöl. Oylat, İnegöl’e ~27 km uzaklıktadır. Bursa–Eskişehir yolunun 7. km’sinden Domaniç yönüne sapılarak ulaşılır.",
          "Bursa merkez–Oylat: Yaklaşık 47 km (~45–55 dk).",
          "Toplu taşıma: İnegöl’e ulaşıp Oylat yönüne dolmuş/minibüs bağlantıları mevsime göre değişebilir; hareket saatlerini yerel idare/işletmelerden teyit edin.",
        ],
      },
      { type: "heading", content: "Suyun özellikleri (özet)" },
      {
        type: "list",
        items: [
          "Sıcaklık: ~40–40.5°C (kaynaklar arası küçük değişimler).",
          "pH: ~7.2–7.3 (nötre yakın).",
          "Debi: ~40–55 L/sn aralığı bildirilmektedir.",
          "Radon: Ortalama ~10 eman (jeolojik etütlerde raporlanmıştır).",
          "Mineral bileşenler: Bikarbonat, sülfat, sodyum, kalsiyum, magnezyum, klorür, florür gibi iyonlar.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Tanıtım kaynaklarında termal suyun romatizmal rahatsızlıklar ve sinirsel yorgunluk gibi durumlarda destekleyici amaçla tercih edildiği ifade edilir; ancak sağlık beyanı tıbbi değerlendirme gerektirir. Kişisel durumunuz için hekiminize danışın.",
      },
      { type: "heading", content: "Tesisler, kullanım ve rezervasyon" },
      {
        type: "paragraph",
        content:
          "Oylat’ta konaklama tesisleri termal havuz, aile banyosu, hamam ve spa olanakları sunar. Fiyat, paket kapsamı (havuz, sauna, aile banyosu, pansiyon tipi) ve kampanyalar dönemsel değişir; son bilgiyi işletmelerin resmî kanallarından doğrulayın.",
      },
      { type: "heading", content: "Yakın geziler: Mağara ve şelale" },
      {
        type: "list",
        items: [
          "Oylat Mağarası: Fosil karakterli, yatay gelişimli; uzunluğu ~665–700 m olarak verilir. Yaz–kış ~18°C civarı serinlik hissedilir.",
          "Oylat Vadisi & Şelalesi: Çam ve kayınların eşlik ettiği vadi yürüyüşleri, fotoğraf molaları için idealdir.",
        ],
      },
      { type: "heading", content: "Mevsimlere göre plan" },
      {
        type: "list",
        items: [
          "Kış: Termal–hamam ağırlıklı dinlenme; mağara ziyareti için kaymaz tabanlı ayakkabı.",
          "İlkbahar/Sonbahar: Vadi–şelale yürüyüşleri + termal banyo ile kombine günlük plan.",
          "Yaz: Serin orman kaçamağı; kalabalık günlerde sabah/akşam saatlerini tercih edin.",
        ],
      },
      { type: "heading", content: "Paket listesi ve pratik ipuçları" },
      {
        type: "list",
        items: [
          "Termal kullanım: Mayo/bikini/şort, terlik, havlu/bornoz; cilt hassasiyeti olanlar için duş sonrası nemlendirici.",
          "Güvenlik: Termal suda süre–sıklığı abartmayın; tansiyon/kalp/hamilelik gibi durumlarda hekim onayı şart.",
          "Ulaşım: Kış döneminde zincir–kış lastiği; vadide telefon çekimi yer yer zayıflayabilir.",
          "Rezervasyon: Hafta sonu ve tatil dönemlerinde erken planlayın; iptal/iadeyi okuyun.",
        ],
      },
      { type: "heading", content: "Kısa şiirsel mola" },
      {
        type: "paragraph",
        content:
          "Suyun yüzeyinde yükselen buhar, vadinin sabah sisine karışır; her damla, mermerin derinlerinden gelen bir masal anlatır. Termal kubbede yankılanan sessizlikte, zaman ağır çekime alınır; şehir çok uzakta kalır.",
      },
    ],
  },
];
