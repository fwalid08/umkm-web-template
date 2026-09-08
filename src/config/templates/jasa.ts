import { BusinessConfig } from '../../types/business';

/**
 * Template: Jasa Servis AC & Teknisi Panggilan (Home Services)
 * Recommended Sections: Stats, Services, Pricing, WhyChooseUs, Process, Testimonials, FAQ, Location
 * Hero Variant: 'split'
 */
export const jasaTemplate: BusinessConfig = {
  id: 'template-jasa',
  name: 'MasterCool AC Teknik',
  industry: 'Jasa Servis AC & Pendingin Ruangan',
  tagline: 'AC Kembali Dingin Menggigil, Bersih Bebas Bau & Bergaransi 30 Hari',
  heroHeadline: 'Jasa Cuci AC & Teknisi Panggilan Cepat Langsung ke Lokasi Anda',
  heroDescription: 'Layanan servis AC profesional untuk rumah, kantor, dan ruko. Didukung teknisi bersertifikat BNSP dengan peralatan steam jet pressure tinggi, pengisian freon standar pabrikan, dan garansi kerja 30 hari.',
  primaryCtaText: 'Panggil Teknisi via WhatsApp',
  secondaryCtaText: 'Cek Daftar Ongkos Jasa',

  heroImageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
  aboutImageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
  ctaBannerImageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',

  sections: {
    stats: true,
    about: true,
    services: true,
    pricing: true,
    whyChooseUs: true,
    gallery: false, // Jasa clients prioritize direct services, pricing, and process
    testimonials: true,
    process: true,
    faq: true,
    location: true,
    cta: true,
  },

  theme: {
    primaryColor: '#2563EB', // Tech Royal Blue
    primaryHover: '#1D4ED8',
    secondaryColor: '#0F172A',
    accentColor: '#10B981', // Emerald Cool Green
    backgroundColor: '#F8FAFC',
    surfaceColor: '#FFFFFF',
    textColor: '#0F172A',
    mutedTextColor: '#64748B',
    borderRadius: '1rem',
    whatsappColor: '#25D366',
    heroVariant: 'split',
    fontOptionId: 'dm-sans',
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },

  seo: {
    title: 'MasterCool AC Teknik - Jasa Cuci AC & Servis AC Panggilan',
    description: 'Jasa servis AC panggilan terpercaya. Cuci AC 0.5 - 2 PK, isi freon R32 / R410A, bongkar pasang, dan atasi AC bocor air bergaransi 30 hari.',
    keywords: ['service ac panggilan terdekat', 'cuci ac rumah', 'tambah freon r32', 'bongkar pasang ac', 'service ac kantor'],
    ogImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://mastercoolteknik.com',
    schemaType: 'HomeAndConstructionBusiness',
  },

  contact: {
    phone: '0812-4455-6677',
    whatsappNumber: '6281244556677',
    email: 'layanan@mastercoolteknik.com',
    address: 'Jl. Ahmad Yani No. 56, Sukajadi',
    city: 'Semarang',
    province: 'Jawa Tengah',
    postalCode: '50134',
    googleMapsUrl: 'https://maps.google.com/?q=Semarang',
    defaultWhatsAppMessage: 'Halo MasterCool Teknik, AC saya bermasalah/kurang dingin, mau panggil teknisi ke rumah.',
  },

  aboutText: {
    p1: 'MasterCool AC Teknik telah berpengalaman melayani ribuan unit AC split perumahan, instansi pemerintah, dan gedung perkantoran. Kami mengedepankan etika kerja yang jujur, tepat waktu, dan menjaga kebersihan ruangan Anda.',
    p2: 'Setiap proses cuci AC dilengkapi dengan penutup plastik anti-cipratan air dan pembersihan evaporator sampai bersih tuntas dari jamur dan debu penyebab alergi pernapasan.',
    highlights: [
      'Teknisi bersertifikat kompetensi pendingin (BNSP)',
      'Plastik proteksi dinding & lantai saat pencucian AC',
      'Pemeriksaan tekanan ampere dan manifold akurat',
      'Garansi pengerjaan 30 hari bebas bocor air',
    ],
    experienceYears: 9,
  },

  statistics: [
    { id: 'jstat-1', value: '9+', label: 'Tahun Pengalaman' },
    { id: 'jstat-2', value: '18.000+', label: 'Unit AC Diservis' },
    { id: 'jstat-3', value: '30 Hari', label: 'Garansi Servis Penuh' },
    { id: 'jstat-4', value: '4.9 ★', label: 'Rating Kepuasan Konsumen' },
  ],

  services: [
    {
      id: 'cuci-ac-split',
      name: 'Cuci AC Split Berkala (0.5 - 2 PK)',
      category: 'Perawatan Rutin',
      description: 'Pembersihan menyeluruh unit indoor & outdoor dengan steam pressure, cuci filter, pembersihan talang air kondensasi, dan cek tekanan freon.',
      startingPrice: 65000,
      priceNote: 'Per Unit (0.5 - 1 PK)',
      duration: '45 Menit / Unit',
      iconName: 'Droplets',
      popular: true,
      features: ['Steam jet cleaner indoor & outdoor', 'Pembersihan talang air pembuangan', 'Free cek tekanan freon & ampere', 'Plastik pelindung tembok anti basah'],
      bookingMessage: 'Halo MasterCool, saya ingin order cuci AC split untuk rumah.',
    },
    {
      id: 'tambah-freon',
      name: 'Tambah & Isi Ulang Freon (R32 / R410A / R22)',
      category: 'Pengisian Gas',
      description: 'Pengisian gas pendingin freon murni sesuai takaran PSI standar pabrikan agar kinerja pendinginan evaporator kembali maksimal dan dingin menggigil.',
      startingPrice: 125000,
      priceNote: 'Mulai dari (Tergantung jenis freon)',
      duration: '30 Menit',
      iconName: 'Gauge',
      popular: true,
      features: ['Freon murni 100% tanpa oplosan', 'Cek kebocoran pipa instalasi', 'Pengecekan arus listrik kompresor'],
      bookingMessage: 'Halo MasterCool, saya butuh jasa isi / tambah freon AC.',
    },
    {
      id: 'bongkar-pasang-ac',
      name: 'Bongkar & Pasang AC Pindahan',
      category: 'Instalasi',
      description: 'Jasa pemindahan dan pemasangan unit AC baru maupun bekas dengan instalasi pipa rapi, pemakuman pipa instalasi, dan uji fungsi kelistrikan.',
      startingPrice: 250000,
      priceNote: 'Jasa pasang mulai',
      duration: '2 - 3 Jam',
      iconName: 'Wrench',
      popular: false,
      features: ['Vakum instalasi wajib standar pabrik', 'Pemasangan rapi tidak merusak estetika dinding', 'Garansi instalasi 30 hari'],
      bookingMessage: 'Halo MasterCool, saya ingin order jasa bongkar pasang AC.',
    },
    {
      id: 'perbaikan-ac-netes',
      name: 'Perbaikan AC Bocor Air / Netes',
      category: 'Perbaikan',
      description: 'Penanganan tuntas saluran pembuangan air tersumbat lendir lumut yang menyebabkan AC bocor dan menetes membasahi lantai dan dinding.',
      startingPrice: 75000,
      priceNote: 'Jasa perbaikan',
      duration: '45 Menit',
      iconName: 'ShieldCheck',
      popular: false,
      features: ['Sodok dan tembak selang pembuangan', 'Cuci talang kondensasi', 'Garansi anti-bocor kembali'],
      bookingMessage: 'Halo MasterCool, AC saya netes/bocor air di dalam kamar, tolong dibantu.',
    },
  ],

  pricingPackages: [
    {
      id: 'paket-cuci-sekeluarga',
      name: 'Paket Cuci Borongan Rumah (3 Unit)',
      tagline: 'Perawatan serentak seluruh kamar dengan biaya jauh lebih hemat.',
      price: 180000,
      originalPrice: 210000,
      period: 'per 3 unit AC',
      popular: true,
      badge: 'Paling Hemat',
      features: [
        { text: 'Cuci Steam Bersih 3 Unit AC (0.5 - 1 PK)', included: true },
        { text: 'Pembersihan Unit Indoor & Outdoor', included: true },
        { text: 'Pengecekan Tekanan Freon Semua Unit', included: true },
        { text: 'Semprot Disinfektan Anti-Bakteri', included: true },
        { text: 'Garansi Bebas Bocor Air 30 Hari', included: true },
      ],
      bookingMessage: 'Halo MasterCool, saya ingin pesan Paket Cuci Borongan 3 Unit AC seharga Rp 180.000.',
    },
  ],

  whyChooseUs: [
    { id: 'jw-1', title: 'Teknisi Ramah & Berpengalaman', description: 'Teknisi berseragam rapi, menjaga sopan santun dan kebersihan rumah Anda.', iconName: 'Award' },
    { id: 'jw-2', title: 'Biaya Transparan di Awal', description: 'Rincian biaya dijelaskan sebelum pengerjaan. Tidak ada biaya siluman.', iconName: 'CheckCircle' },
    { id: 'jw-3', title: 'Peralatan Standar Lengkap', description: 'Steam jet bertekanan pas, manifold presisi, dan pompa vakum modern.', iconName: 'Wrench' },
    { id: 'jw-4', title: 'Garansi Nyata 30 Hari', description: 'Jika AC kurang dingin atau netes kembali, teknisi datang tanpa dipungut biaya.', iconName: 'ShieldCheck' },
  ],

  gallery: [],

  testimonials: [
    {
      id: 'jtest-1',
      name: 'Bapak Hendra',
      roleOrVehicle: 'Pemilik Rumah di Graha Candi',
      rating: 5,
      comment: 'Teknisinya tepat waktu dan kerjanya rapi banget. Dinding kamar nggak ada yang kecipratan air kotor. AC langsung adem semriwing!',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 'jtest-2',
      name: 'Ibu Siska',
      roleOrVehicle: 'Pengelola Kantor Notaris',
      rating: 5,
      comment: 'Pelayanan cepat dan ramah. Kemarin AC ruang rapat mendadak panas, panggil via WA langsung datang dalam 45 menit.',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    },
  ],

  process: [
    { step: 1, title: 'Chat WhatsApp', description: 'Sampaikan keluhan AC dan alamat lengkap Anda.', iconName: 'MessageCircle' },
    { step: 2, title: 'Jadwal Kunjungan', description: 'Tentukan jam kedatangan teknisi sesuai kenyamanan Anda.', iconName: 'Clock' },
    { step: 3, title: 'Pengecekan Teknis', description: 'Teknisi memeriksa suhu, kebocoran, dan tekanan freon.', iconName: 'Search' },
    { step: 4, title: 'Pengerjaan Bersih', description: 'Proses cuci atau perbaikan dilakukan dengan rapi dan aman.', iconName: 'Wrench' },
    { step: 5, title: 'Uji Dingin & Garansi', description: 'Pengukuran suhu akhir dan penyerahan nota bergaransi 30 hari.', iconName: 'ShieldCheck' },
  ],

  faqs: [
    {
      id: 'jfaq-1',
      question: 'Berapa bulan sekali AC idealnya dicuci?',
      answer: 'Untuk pemakaian normal di rumah (8-12 jam per hari), disarankan mencuci AC secara rutin setiap 3 hingga 4 bulan sekali agar kompresor awet dan hemat listrik.',
      category: 'Perawatan',
    },
    {
      id: 'jfaq-2',
      question: 'Apakah teknisi membawa tangga sendiri?',
      answer: 'Ya, teknisi kami selalu membawa tangga lipat, terpal pelindung, selang panjang, dan seluruh peralatan kerja lengkap.',
      category: 'Peralatan',
    },
  ],

  openingHours: [
    { day: 'Senin - Minggu', hours: '08.00 - 20.00 WIB' },
  ],

  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
    { platform: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
  ],

  locationSection: {
    badgeText: 'Workshop & Area Jangkauan Servis',
    title: 'Workshop Pusat & Area Teknisi Siaga di Tangerang Selatan',
    description: 'Teknisi kami tersebar di berbagai titik pos siaga dan siap datang langsung ke rumah, kantor, atau apartemen Anda dengan peralatan lengkap.',
    addressTitle: 'Alamat Workshop & Pos Teknisi',
    hoursTitle: 'Jam Operasional Teknisi Panggilan',
    openTodayBadgeText: 'Teknisi Panggilan Siaga',
    supportTitle: 'Pusat Dispatcher Teknisi AC',
    directionsButtonText: 'Petunjuk Arah Google Maps',
    askDirectionsButtonText: 'Share Lokasi Rumah via WA',
    askDirectionsMessage: 'Halo MasterCool Teknik, ini lokasi rumah saya untuk pengecekan servis AC.',
    features: [
      'Peralatan steam jet pressure tinggi',
      'Terpal pelindung dinding & lantai kerja bersih',
      'Suku cadang & freon original bersegel',
      'Garansi dingin & pengerjaan 30 hari penuh',
    ],
  },

  ctaSection: {
    badgeText: 'Teknisi Siaga Siap Meluncur',
    headline: 'AC Kurang Dingin, Berisik, atau Bocor Air? Jangan Tunggu Kompresor Jebol!',
    description: 'Panggil teknisi profesional MasterCool AC Teknik sekarang via WhatsApp. Cepat, tepat, kerja bersih, dan bergaransi 30 hari.',
    primaryButtonText: 'Panggil Teknisi via WhatsApp Sekarang',
    secondaryButtonText: 'Hubungi Hotline Teknisi',
    disclaimerText: 'Dispatcher memproses jadwal kedatangan dalam waktu 5-15 menit.',
    customWhatsAppMessage: 'Halo MasterCool Teknik, saya ingin panggil teknisi AC untuk servis ke lokasi saya.',
  },

  footerSection: {
    aboutText: 'MasterCool AC Teknik adalah solusi pendingin ruangan terpercaya untuk rumah dan perkantoran, dengan teknisi bersertifikasi dan garansi dingin nyata 30 hari.',
    quickLinksTitle: 'Navigasi Cepat',
    servicesTitle: 'Layanan Utama',
    contactTitle: 'Hubungi Workshop',
    copyrightText: 'Hak Cipta Dilindungi Undang-Undang.',
    badgeText: 'Garansi Servis 30 Hari',
    taglineNote: 'Jasa servis AC panggilan profesional Indonesia',
    paymentMethodsTitle: 'Metode Pembayaran',
    paymentMethods: ['QRIS All Payment', 'Transfer BCA / Mandiri', 'Tunai Setelah Selesai'],
  },
};
