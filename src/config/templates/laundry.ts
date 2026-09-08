import { BusinessConfig } from '../../types/business';

/**
 * Template: Laundry Kiloan & Dry Cleaning
 * Recommended Sections: Stats, Services, Pricing, WhyChooseUs, Process, Testimonials, FAQ, Location
 * Hero Variant: 'centered'
 */
export const laundryTemplate: BusinessConfig = {
  id: 'template-laundry',
  name: 'Klin Laundry Express',
  industry: 'Laundry Kiloan & Dry Cleaning',
  tagline: 'Bersih Higienis, Wangi Tahan Lama, Antar Jemput Gratis',
  heroHeadline: 'Pakaian Bersih Sempurna Tanpa Repot, Siap Pakai Setiap Hari',
  heroDescription: 'Layanan laundry kiloan profesional dengan deterjen hypoallergenic ramah serat kain, teknologi setrika uap anti-kusut, 1 mesin 1 pelanggan, dan garansi cuci ulang jika kurang puas.',
  primaryCtaText: 'Pesan Antar Jemput WhatsApp',
  secondaryCtaText: 'Lihat Daftar Tarif Kiloan',

  heroImageUrl: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80',
  aboutImageUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1000&q=80',
  ctaBannerImageUrl: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80',

  // Recommended Sections for Laundry
  sections: {
    stats: true,
    about: true,
    services: true,
    pricing: true,
    whyChooseUs: true,
    gallery: false, // Laundry clients usually prioritize pricing & process over gallery
    testimonials: true,
    process: true,
    faq: true,
    location: true,
    cta: true,
  },

  theme: {
    primaryColor: '#0284C7', // Clean Sky Blue
    primaryHover: '#0369A1',
    secondaryColor: '#0F172A',
    accentColor: '#06B6D4', // Fresh Aqua
    backgroundColor: '#F8FAFC',
    surfaceColor: '#FFFFFF',
    textColor: '#0F172A',
    mutedTextColor: '#64748B',
    borderRadius: '1rem',
    whatsappColor: '#25D366',
    heroVariant: 'centered', // Uses the centered editorial showcase hero
    fontOptionId: 'outfit',
    fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },

  seo: {
    title: 'Klin Laundry Express - Cuci Kiloan & Antar Jemput Terdekat',
    description: 'Jasa laundry kiloan dan satuan higienis dengan sistem 1 mesin 1 pelanggan. Free antar jemput, setrika uap, dan selesai cepat mulai 4 jam.',
    keywords: ['laundry kiloan terdekat', 'laundry antar jemput', 'cuci bedcover', 'cuci sepatu', 'laundry express 4 jam'],
    ogImage: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://klinlaundry.com',
    schemaType: 'DryCleaningOrLaundry',
  },

  contact: {
    phone: '0813-8899-7711',
    whatsappNumber: '6281388997711',
    email: 'order@klinlaundry.com',
    address: 'Jl. Melati Asri Raya No. 45',
    city: 'Bandung',
    province: 'Jawa Barat',
    postalCode: '40123',
    googleMapsUrl: 'https://maps.google.com/?q=Bandung',
    defaultWhatsAppMessage: 'Halo Klin Laundry, saya ingin order laundry antar-jemput untuk pakaian kotor.',
  },

  aboutText: {
    p1: 'Klin Laundry Express hadir memberikan kemudahan bagi keluarga modern, pekerja kantoran, dan mahasiswa. Kami menjamin pakaian Anda dicuci secara higienis tanpa dicampur pakaian pelanggan lain.',
    p2: 'Dengan tim profesional dan mesin cuci modern berstandar industri, pakaian Anda dirawat dengan hati-hati sehingga tetap lembut, tidak melar, dan wangi tahan hingga 14 hari di lemari.',
    highlights: [
      '1 Mesin 1 Pelanggan (Tidak pernah dicampur)',
      'Deterjen premium ramah kulit sensitif & anak-anak',
      'Setrika uap boiler anti-hangus & licin rapi',
      'Gratis antar jemput radius hingga 5 km',
    ],
    experienceYears: 6,
  },

  statistics: [
    { id: 'lstat-1', value: '15.000+', label: 'Kg Cucian / Bulan' },
    { id: 'lstat-2', value: '1 Mesin 1 Nota', label: 'Higienis & Terpisah' },
    { id: 'lstat-3', value: '4 Jam', label: 'Layanan Express Tersedia' },
    { id: 'lstat-4', value: '4.9 ★', label: 'Kepuasan Pelanggan' },
  ],

  services: [
    {
      id: 'laundry-kiloan-reguler',
      name: 'Cuci & Setrika Kiloan Reguler',
      category: 'Kiloan Harian',
      description: 'Pencucian pakaian harian dengan deterjen wangi, pelembut premium, setrika uap rapi, dan packing plastik kedap udara.',
      startingPrice: 8000,
      priceNote: 'Per Kilogram (Min. 3 Kg)',
      duration: '2 Hari Kerja',
      iconName: 'Sparkles',
      popular: true,
      features: ['1 Mesin khusus pakaian Anda', 'Setrika uap boiler', 'Wangi tahan 14 hari', 'Packing rapi lipatan rapi'],
      bookingMessage: 'Halo Klin Laundry, saya mau order cuci setrika kiloan reguler.',
    },
    {
      id: 'laundry-express-4jam',
      name: 'Laundry Kilat Express (4 - 6 Jam)',
      category: 'Layanan Darurat',
      description: 'Pakaian kotor selesai dicuci, dikeringkan, dan disetrika rapi hanya dalam hitungan beberapa jam untuk kebutuhan mendesak.',
      startingPrice: 15000,
      priceNote: 'Per Kilogram',
      duration: '4 - 6 Jam Selesai',
      iconName: 'Zap',
      popular: true,
      features: ['Prioritas antrean cuci langsung', 'Pengering gas suhu terkontrol', 'Siap pakai di hari yang sama'],
      bookingMessage: 'Halo Klin Laundry, saya butuh laundry kilat Express 4 jam hari ini.',
    },
    {
      id: 'cuci-bedcover',
      name: 'Cuci Bedcover & Selimut Tebal',
      category: 'Perlengkapan Tidur',
      description: 'Pencucian khusus selimut tebal, sprei, dan bedcover hingga bersih dari debu dan tungau tanpa merusak dakron di dalamnya.',
      startingPrice: 25000,
      priceNote: 'Per Pcs (Sesuai Ukuran)',
      duration: '1 - 2 Hari',
      iconName: 'Home',
      popular: false,
      features: ['Dibasmi tungau & kuman debu', 'Dakron tidak menggumpal', 'Aroma segar menenangkan'],
      bookingMessage: 'Halo Klin Laundry, saya mau cuci bedcover & selimut.',
    },
    {
      id: 'deep-clean-sepatu',
      name: 'Deep Clean Sepatu Sneakers & Tas',
      category: 'Treatment Khusus',
      description: 'Pembersihan detail untuk sneakers, tas kulit, dan helm dengan pembersih khusus material tanpa melunturkan warna asli.',
      startingPrice: 35000,
      priceNote: 'Per Pasang',
      duration: '2 - 3 Hari',
      iconName: 'Award',
      popular: false,
      features: ['Shoe cleaner premium', 'Unyellowing sol kuning', 'Pengeringan tanpa sinar matahari langsung'],
      bookingMessage: 'Halo Klin Laundry, saya mau treatment cuci sepatu / tas.',
    },
  ],

  pricingPackages: [
    {
      id: 'paket-kiloan-keluarga',
      name: 'Paket Berlangganan 30 Kg',
      tagline: 'Solusi hemat bulanan untuk kebutuhan cucian seluruh anggota keluarga.',
      price: 210000,
      originalPrice: 240000,
      period: 'kuota 30 hari',
      popular: true,
      badge: 'Hemat Rp 30.000',
      features: [
        { text: 'Total Kuota 30 Kg Cuci Setrika', included: true },
        { text: 'Bebas ambil berkala (min 4 kg)', included: true },
        { text: 'Gratis Antar Jemput Unlimited', included: true },
        { text: 'Prioritas Antrean 1 Hari Kerja', included: true },
        { text: 'Free 1x Cuci Bedcover Single', included: true },
      ],
      bookingMessage: 'Halo Klin Laundry, saya ingin langganan Paket Kuota Keluarga 30 Kg.',
    },
    {
      id: 'paket-kost-praktis',
      name: 'Paket Kost 15 Kg',
      tagline: 'Ideal bagi mahasiswa dan pekerja kantoran yang sibuk berkegiatan.',
      price: 115000,
      originalPrice: 130000,
      period: 'kuota 30 hari',
      popular: false,
      badge: 'Favorit Mahasiswa',
      features: [
        { text: 'Total Kuota 15 Kg Cuci Setrika', included: true },
        { text: 'Bisa dicicil 3x penjemputan', included: true },
        { text: 'Free Antar Jemput Kos / Rumah', included: true },
        { text: 'Selesai dalam 24-36 jam', included: true },
      ],
      bookingMessage: 'Halo Klin Laundry, saya mau ambil Paket Kost 15 Kg.',
    },
  ],

  whyChooseUs: [
    { id: 'lw-1', title: '1 Mesin 1 Pelanggan', description: 'Pakaian Anda tidak pernah digabung dengan pakaian orang lain demi kebersihan maksimal.', iconName: 'ShieldCheck' },
    { id: 'lw-2', title: 'Antar Jemput Tepat Waktu', description: 'Driver kami siap menjemput dan mengantar pakaian langsung ke depan pintu rumah Anda.', iconName: 'Clock' },
    { id: 'lw-3', title: 'Setrika Uap Ramah Kain', description: 'Menghilangkan kusut secara instan tanpa risiko gosong atau meninggalkan kilau mengkilap.', iconName: 'Sparkles' },
    { id: 'lw-4', title: 'Garansi Cuci Ulang', description: 'Masih ada noda atau kurang wangi? Kami cuci ulang gratis tanpa banyak syarat.', iconName: 'Award' },
  ],

  gallery: [],

  testimonials: [
    {
      id: 'ltest-1',
      name: 'Maya Indriani',
      roleOrVehicle: 'Ibu Rumah Tangga',
      rating: 5,
      comment: 'Sejak langganan di Klin Laundry, hidup saya jauh lebih santai. Wanginya enak banget dan lipatannya super rapi, tinggal masuk lemari.',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 'ltest-2',
      name: 'Dimas Wicaksono',
      roleOrVehicle: 'Karyawan Swasta',
      rating: 5,
      comment: 'Layanan jemputnya on time. Kemeja kantor disetrika pakai uap rapi banget, garis lipatan presisi. Sangat memuaskan!',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    },
  ],

  process: [
    { step: 1, title: 'Chat WhatsApp', description: 'Kirim alamat Anda untuk penjemputan pakaian.', iconName: 'MessageCircle' },
    { step: 2, title: 'Penimbangan', description: 'Driver menimbang cucian di depan Anda dan nota dibuat digital.', iconName: 'Search' },
    { step: 3, title: 'Pencucian Higienis', description: 'Dicuci tersendiri dengan deterjen dan pelembut premium.', iconName: 'Sparkles' },
    { step: 4, title: 'Setrika Uap', description: 'Disetrika uap boiler dan dipacking rapi kedap udara.', iconName: 'CheckCircle' },
    { step: 5, title: 'Antar Sampai Rumah', description: 'Pakaian wangi siap pakai diantar kembali ke lokasi Anda.', iconName: 'Clock' },
  ],

  faqs: [
    {
      id: 'lfaq-1',
      question: 'Berapa batas minimum kilogram untuk layanan antar-jemput gratis?',
      answer: 'Minimum order untuk free antar jemput adalah 5 kg untuk area dalam radius 4 km dari outlet kami.',
      category: 'Antar Jemput',
    },
    {
      id: 'lfaq-2',
      question: 'Apakah pakaian luntur akan dipisahkan?',
      answer: 'Ya, tim checker kami selalu menyortir pakaian putih dan pakaian berwarna yang berpotensi luntur sebelum masuk ke drum mesin cuci.',
      category: 'Proses Cuci',
    },
  ],

  openingHours: [
    { day: 'Setiap Hari', hours: '07.00 - 21.00 WIB' },
  ],

  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
    { platform: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
  ],

  locationSection: {
    badgeText: 'Outlet & Layanan Antar Jemput',
    title: 'Kunjungi Outlet Kami di Bandung atau Request Kurir Jemput',
    description: 'Anda dapat mengantar pakaian langsung ke outlet atau bagikan alamat rumah via WhatsApp untuk penjemputan gratis.',
    addressTitle: 'Alamat Outlet Utama',
    hoursTitle: 'Jam Buka Outlet & Operasional Kurir',
    openTodayBadgeText: 'Kurir Siap Antar-Jemput',
    supportTitle: 'Customer Care & Status Laundry',
    directionsButtonText: 'Petunjuk Arah Google Maps',
    askDirectionsButtonText: 'Share Lokasi Rumah via WA',
    askDirectionsMessage: 'Halo Klin Laundry, ini lokasi rumah saya untuk penjemputan cucian kiloan.',
    features: [
      'Gratis Antar Jemput radius 4 KM',
      'Sistem 1 Mesin 1 Pelanggan (Higienis)',
      'Penimbangan digital transparan di depan Anda',
      'Ruang drop-off nyaman ber-AC',
    ],
  },

  ctaSection: {
    badgeText: 'Gratis Antar Jemput Radius 4 KM',
    headline: 'Pakaian Kotor Menumpuk? Jangan Korbankan Waktu Istirahat Anda.',
    description: 'Cucian beres tanpa repot! Tim Klin Laundry Express siap menjemput, mencuci dengan deterjen ramah serat kain, menyetrika uap rapi, dan mengantar tepat waktu.',
    primaryButtonText: 'Pesan Antar Jemput via WhatsApp',
    secondaryButtonText: 'Hubungi Hotline Laundry',
    disclaimerText: 'Kurir merespons konfirmasi jemputan dalam 10 menit.',
    customWhatsAppMessage: 'Halo Klin Laundry, saya ingin order antar-jemput cucian kiloan hari ini.',
  },

  footerSection: {
    aboutText: 'Klin Laundry Express menghadirkan standar pencucian higienis dengan sistem 1 mesin 1 pelanggan, formula deterjen hypoallergenic, dan setrika uap anti-kusut.',
    quickLinksTitle: 'Navigasi Cepat',
    servicesTitle: 'Layanan Terfavorit',
    contactTitle: 'Hubungi Outlet',
    copyrightText: 'Hak Cipta Dilindungi Undang-Undang.',
    badgeText: 'Garansi Cuci Ulang 100% Gratis',
    taglineNote: 'Layanan laundry kiloan & dry cleaning profesional Indonesia',
    paymentMethodsTitle: 'Metode Pembayaran',
    paymentMethods: ['QRIS All Payment', 'Transfer BCA / BRI', 'Bayar Tunai di Tempat (COD)'],
  },
};
