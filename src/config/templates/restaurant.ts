import { BusinessConfig } from '../../types/business';

/**
 * Template: Restoran & Kuliner Nusantara
 * Recommended Sections: About, Services (Menu Utama), Pricing (Paket Liwet / Katering), Gallery, Testimonials, Location, FAQ
 * Hero Variant: 'centered'
 */
export const restaurantTemplate: BusinessConfig = {
  id: 'template-restaurant',
  name: 'Dapur Sedap Nusantara',
  industry: 'Restoran & Kuliner Keluarga',
  tagline: 'Cita Rasa Otentik Masakan Tradisional Warisan Leluhur',
  heroHeadline: 'Kenikmatan Kuliner Asli Nusantara dengan Suasana Lesehan Asri',
  heroDescription: 'Nikmati gurihnya Gurame Bakar Cobek, Nasi Liwet Kastrol beraroma rempah wangi, sambal dadak pedas segar, dan suasana saung bambu yang sejuk untuk momen kumpul keluarga dan rekan kerja.',
  primaryCtaText: 'Reservasi Meja via WhatsApp',
  secondaryCtaText: 'Lihat Daftar Menu & Harga',

  heroImageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  aboutImageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
  ctaBannerImageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',

  sections: {
    stats: true,
    about: true,
    services: true,
    pricing: true,
    whyChooseUs: true,
    gallery: true, // Crucial for mouth-watering culinary photos
    testimonials: true,
    process: false, // Restaurants don't need a mechanical 5-step process
    faq: true,
    location: true,
    cta: true,
  },

  theme: {
    primaryColor: '#16A34A', // Fresh Emerald Herb Green
    primaryHover: '#15803D',
    secondaryColor: '#1C1917', // Warm Stone Black
    accentColor: '#F97316', // Appetizing Warm Chili Orange
    backgroundColor: '#FDFBF7', // Warm soft ivory/rice canvas
    surfaceColor: '#FFFFFF',
    textColor: '#1C1917',
    mutedTextColor: '#57534E',
    borderRadius: '1rem',
    whatsappColor: '#25D366',
    heroVariant: 'centered',
    fontOptionId: 'poppins',
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },

  seo: {
    title: 'Dapur Sedap Nusantara - Restoran Lesehan Sunda & Kuliner Nusantara',
    description: 'Restoran keluarga dengan menu khas nasi liwet, gurame bakar, ayam kampung kremes, dan saung lesehan. Reservasi meja dan katering via WhatsApp.',
    keywords: ['restoran keluarga terdekat', 'rumah makan sunda', 'nasi liwet enak', 'gurame bakar', 'katering nasi kotak'],
    ogImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://dapursedapnusantara.com',
    schemaType: 'Restaurant',
  },

  contact: {
    phone: '0812-9988-1122',
    whatsappNumber: '6281299881122',
    email: 'reservasi@dapursedapnusantara.com',
    address: 'Jl. Surya Kencana No. 102',
    city: 'Bogor',
    province: 'Jawa Barat',
    postalCode: '16123',
    googleMapsUrl: 'https://maps.google.com/?q=Bogor',
    defaultWhatsAppMessage: 'Halo Dapur Sedap Nusantara, saya ingin reservasi meja / tanya katering.',
  },

  aboutText: {
    p1: 'Dapur Sedap Nusantara lahir dari kecintaan kami terhadap kekayaan bumbu rempah tradisional Indonesia yang kaya rasa. Semua hidangan dimasak secara fresh dengan resep turun-temurun tanpa bahan pengawet sintetis.',
    p2: 'Dengan area saung lesehan berlatar kolam ikan alami, taman hijau, serta fasilitas mushola bersih dan playground anak, kami menjadi destinasi favorit makan bersama keluarga besar, arisan, maupun jamuan kantor.',
    highlights: [
      'Bahan baku ikan & sayuran segar langsung dari petani lokal',
      '100% Halal bersertifikasi dan higienis',
      'Saung lesehan luas berkapasitas hingga 150 orang',
      'Area parkir mobil & bus yang luas dan aman',
    ],
    experienceYears: 12,
  },

  statistics: [
    { id: 'rstat-1', value: '12+', label: 'Tahun Melayani' },
    { id: 'rstat-2', value: '80.000+', label: 'Porsi Liwet Terjual' },
    { id: 'rstat-3', value: '100%', label: 'Bahan Baku Halal' },
    { id: 'rstat-4', value: '4.8 ★', label: 'Rating Google (1.200+ Review)' },
  ],

  services: [
    {
      id: 'gurame-bakar-cobek',
      name: 'Gurame Bakar Sambal Cobek',
      category: 'Menu Utama',
      description: 'Ikan gurame hidup segar dibakar dengan bumbu kecap rempah gurih, disajikan di atas cobek tanah liat dengan lumuran sambal dadak khas.',
      startingPrice: 85000,
      priceNote: 'Porsi 2 - 3 Orang',
      duration: 'Penyajian 15-20 Menit',
      iconName: 'Flame',
      popular: true,
      features: ['Ikan gurame segar non-tanah', 'Sambal dadak terasi bakar', 'Lalapan segar melimpah', 'Bisa request tingkat kepedasan'],
      bookingMessage: 'Halo Dapur Sedap, saya ingin pesan Gurame Bakar Sambal Cobek.',
    },
    {
      id: 'nasi-liwet-kastrol',
      name: 'Nasi Liwet Kastrol Spesial',
      category: 'Menu Utama',
      description: 'Nasi liwet yang ditanak langsung di dalam kastrol aluminium dengan teri medan, pete, daun kemangi, serai, dan cabai rawit utuh yang wangi.',
      startingPrice: 65000,
      priceNote: 'Kastrol Sedang (4 Orang)',
      duration: 'Penyajian 20 Menit',
      iconName: 'Utensils',
      popular: true,
      features: ['Aroma rempah kemangi & serai', 'Taburan teri medan gurih', 'Kerak liwet renyah di dasar', 'Pilihan pete bakar/goreng'],
      bookingMessage: 'Halo Dapur Sedap, saya ingin order Nasi Liwet Kastrol Spesial.',
    },
    {
      id: 'ayam-kampung-kremes',
      name: 'Ayam Kampung Goreng Kremes',
      category: 'Olahan Ayam',
      description: 'Ayam kampung muda diungkep bumbu kuning rempah hingga empuk meresap ke tulang, digoreng garing dengan taburan kremes renyah.',
      startingPrice: 38000,
      priceNote: 'Per Porsi (Paha/Dada)',
      duration: 'Penyajian 15 Menit',
      iconName: 'CheckCircle',
      popular: false,
      features: ['Ayam kampung asli bukan broiler', 'Daging empuk tidak alot', 'Kremesan gurih renyah tanpa minyak berlebih'],
      bookingMessage: 'Halo Dapur Sedap, saya ingin pesan Ayam Kampung Goreng Kremes.',
    },
    {
      id: 'katering-nasi-kotak',
      name: 'Katering Nasi Kotak & Prasmanan',
      category: 'Layanan Acara',
      description: 'Penyediaan katering nasi kotak higienis dan prasmanan lengkap untuk acara kantor, syukuran, pernikahan, dan pengajian.',
      startingPrice: 28000,
      priceNote: 'Mulai per box (Min. 20 box)',
      duration: 'Pesan H-2 Acara',
      iconName: 'Award',
      popular: true,
      features: ['Packaging bento box eksklusif', 'Gratis ongkir area Jabodetabek', 'Bisa custom menu sesuai budget'],
      bookingMessage: 'Halo Dapur Sedap, saya ingin konsultasi paket katering nasi kotak.',
    },
  ],

  pricingPackages: [
    {
      id: 'paket-liwet-bancakan',
      name: 'Paket Bancakan Daun Pisang (5 Orang)',
      tagline: 'Sensasi makan bersama beralaskan daun pisang panjang yang hangat dan akrab.',
      price: 295000,
      originalPrice: 345000,
      period: 'porsi 5 orang',
      popular: true,
      badge: 'Favorit Kumpul Keluarga',
      features: [
        { text: 'Nasi Liwet Kastrol Komplit (5 Porsi)', included: true },
        { text: '1 Ekor Gurame Bakar / Goreng Terbang', included: true },
        { text: '5 Potong Ayam Goreng Lengkuas', included: true },
        { text: 'Tahu, Tempe Mendoan, & Bakwan Jagung', included: true },
        { text: 'Sayur Asem Khas Jawa Barat 1 Mangkuk Besar', included: true },
        { text: '2 Macam Sambal (Terasi Dadak & Sambal Ijo)', included: true },
        { text: '5 Gelas Es Teh Manis / Teh Hangat Melati', included: true },
      ],
      bookingMessage: 'Halo Dapur Sedap, saya ingin reservasi meja untuk Paket Bancakan 5 Orang Rp 295.000.',
    },
  ],

  whyChooseUs: [
    { id: 'rw-1', title: 'Bahan Baku Segar Pilihan', description: 'Ikan hidup dari kolam sendiri dan sayuran segar dipanen setiap subuh.', iconName: 'Sparkles' },
    { id: 'rw-2', title: '100% Halal & Higienis', description: 'Dapur berstandar sanitasi tinggi dengan sertifikat halal resmi.', iconName: 'ShieldCheck' },
    { id: 'rw-3', title: 'Suasana Saung Lesehan Asri', description: 'Sejuk alami dengan gemercik air kolam dan semilir angin persawahan.', iconName: 'Home' },
    { id: 'rw-4', title: 'Layanan Cepat & Ramah', description: 'Pramusaji sigap dan pesanan disajikan hangat tanpa waktu tunggu lama.', iconName: 'Clock' },
  ],

  gallery: [
    {
      id: 'rgal-1',
      title: 'Gurame Bakar Cobek Panas',
      category: 'Menu Utama',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: 'Gurame bakar kaya bumbu rempah disajikan di atas cobek tradisional.',
    },
    {
      id: 'rgal-2',
      title: 'Suasana Saung Lesehan Keluarga',
      category: 'Suasana Saung',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      description: 'Area makan saung bambu di kelilingi tanaman hijau asri.',
    },
    {
      id: 'rgal-3',
      title: 'Paket Katering Nasi Kotak Rapi',
      category: 'Katering',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      description: 'Penyajian nasi kotak higienis bersegel rapi siap kirim tepat waktu.',
    },
  ],

  testimonials: [
    {
      id: 'rtest-1',
      name: 'Ibu Ratna Dewi',
      roleOrVehicle: 'Pelanggan Arisan Keluarga',
      rating: 5,
      comment: 'Liwetnya juara! Gurame bakarnya empuk dan nggak ada bau tanah sama sekali. Anak-anak betah banget karena tempatnya luas dan ada kolam ikan.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 'rtest-2',
      name: 'Bapak Gunawan',
      roleOrVehicle: 'Manajer Perusahaan (Order Katering)',
      rating: 5,
      comment: 'Pesan 120 nasi box buat acara meeting tahunan, datang tepat waktu setengah jam sebelum acara. Peserta semua puas dengan rasanya.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
  ],

  process: [],

  faqs: [
    {
      id: 'rfaq-1',
      question: 'Apakah bisa memesan tempat (reservasi) untuk acara ulang tahun / arisan?',
      answer: 'Tentu bisa! Kami menyediakan area khusus saung VIP atau gazebo utama. Silakan hubungi WhatsApp kami minimal H-2 untuk booking jadwal dan pemilihan paket menu.',
      category: 'Reservasi',
    },
    {
      id: 'rfaq-2',
      question: 'Apakah makanan dijamin 100% Halal?',
      answer: 'Semua menu makanan dan minuman kami 100% Halal, tanpa kandungan babi, alkohol, atau minyak yang meragukan.',
      category: 'Kehalalan',
    },
  ],

  openingHours: [
    { day: 'Setiap Hari', hours: '10.00 - 22.00 WIB' },
  ],

  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
    { platform: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
  ],

  locationSection: {
    badgeText: 'Lokasi & Suasana Resto',
    title: 'Kunjungi Restoran Kami di Kawasan Sejuk Bogor',
    description: 'Suasana saung bambu alami dikelilingi kolam ikan air mengalir yang asri. Cocok untuk acara keluarga besar, arisan, hingga rapat kantor.',
    addressTitle: 'Alamat Restoran',
    hoursTitle: 'Jam Buka Resto & Dapur',
    openTodayBadgeText: 'Dapur Buka Siap Melayani',
    supportTitle: 'Pusat Reservasi Meja & Katering',
    directionsButtonText: 'Petunjuk Arah Google Maps',
    askDirectionsButtonText: 'Tanya Patokan Resto via WA',
    askDirectionsMessage: 'Halo Dapur Sedap Nusantara, saya mau tanya patokan jalan menuju ke resto.',
    features: [
      'Parkir bus & 30+ mobil luas gratis',
      'Saung lesehan asri & ruang VIP ber-AC',
      'Mushola luas, bersih & toilet higienis',
      'Area bermain anak (playground) aman',
    ],
  },

  ctaSection: {
    badgeText: 'Reservasi Meja & Pemesanan Katering',
    headline: 'Rencanakan Acara Makan Bersama Keluarga Tanpa Khawatir Kehabisan Tempat.',
    description: 'Booking meja atau saung favorit Anda sekarang via WhatsApp. Kami pastikan hidangan tersaji hangat dan tepat waktu saat Anda tiba.',
    primaryButtonText: 'Reservasi Meja via WhatsApp',
    secondaryButtonText: 'Hubungi Telepon Restoran',
    disclaimerText: 'Admin reservasi merespons cepat dalam 5 - 10 menit.',
    customWhatsAppMessage: 'Halo Dapur Sedap Nusantara, saya ingin reservasi meja untuk acara makan bersama.',
  },

  footerSection: {
    aboutText: 'Dapur Sedap Nusantara menyajikan hidangan otentik nusantara dengan bumbu rempah segar, ikan air tawar pilihan hidup, dan 100% Halal.',
    quickLinksTitle: 'Navigasi Cepat',
    servicesTitle: 'Menu Andalan',
    contactTitle: 'Hubungi Resto',
    copyrightText: 'Hak Cipta Dilindungi Undang-Undang.',
    badgeText: '100% Bahan Segar & Halal',
    taglineNote: 'Restoran keluarga & kuliner nusantara Indonesia',
    paymentMethodsTitle: 'Metode Pembayaran',
    paymentMethods: ['QRIS All Payment', 'Kartu Debit / Kredit (BCA, Mandiri)', 'Tunai'],
  },
};
