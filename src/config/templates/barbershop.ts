import { BusinessConfig } from '../../types/business';

/**
 * Template: Barbershop & Men's Grooming Studio
 * Recommended Sections: Stats, Services, Pricing, Gallery (Hairstyle Lookbook), WhyChooseUs, Testimonials, Location, FAQ
 * Hero Variant: 'card-overlay' (App-style modern card layout with quick booking drawer)
 */
export const barbershopTemplate: BusinessConfig = {
  id: 'template-barbershop',
  name: 'BarberKing Studio',
  industry: 'Barbershop & Men’s Grooming',
  tagline: 'Potongan Rambut Presisi & Perawatan Pria Berkelas',
  heroHeadline: 'Tampil Lebih Rapi, Percaya Diri, dan Berkarakter Setiap Hari',
  heroDescription: 'Nikmati sentuhan kapster berpengalaman dengan teknik gunting presisi, pijat relaksasi pundak, kompres handuk hangat aromaterapi, dan produk styling premium.',
  primaryCtaText: 'Booking Jadwal Cukur WhatsApp',
  secondaryCtaText: 'Lihat Katalog Gaya Rambut',

  heroImageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
  aboutImageUrl: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80',
  ctaBannerImageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',

  sections: {
    stats: true,
    about: true,
    services: true,
    pricing: true,
    whyChooseUs: true,
    gallery: true, // Crucial for hair cuts & styling lookbook!
    testimonials: true,
    process: false, // Barbershops don't usually need a 5-step process section
    faq: true,
    location: true,
    cta: true,
  },

  theme: {
    primaryColor: '#D97706', // Classic Barber Amber Gold
    primaryHover: '#B45309',
    secondaryColor: '#18181B', // Dark Obsidian
    accentColor: '#F59E0B',
    backgroundColor: '#FAFAFA',
    surfaceColor: '#FFFFFF',
    textColor: '#18181B',
    mutedTextColor: '#71717A',
    borderRadius: '1rem',
    whatsappColor: '#25D366',
    heroVariant: 'card-overlay', // Uses modern app-like card overlay hero
    fontOptionId: 'outfit',
    fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },

  seo: {
    title: 'BarberKing Studio - Barbershop Premium & Potong Rambut Pria',
    description: 'Barbershop modern dengan kapster bersertifikat, potongan Fade, Undercut, Two-Block, dan pijat relaksasi. Booking jadwal online via WhatsApp.',
    keywords: ['barbershop terdekat', 'potong rambut pria', 'cukur rambut fade', 'two block haircut', 'barberking'],
    ogImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://barberkingstudio.com',
    schemaType: 'HairSalon',
  },

  contact: {
    phone: '0812-7788-9900',
    whatsappNumber: '6281277889900',
    email: 'hello@barberkingstudio.com',
    address: 'Jl. R.E. Martadinata No. 88',
    city: 'Yogyakarta',
    province: 'D.I. Yogyakarta',
    postalCode: '55281',
    googleMapsUrl: 'https://maps.google.com/?q=Yogyakarta',
    defaultWhatsAppMessage: 'Halo BarberKing Studio, saya mau booking jadwal potong rambut hari ini.',
  },

  aboutText: {
    p1: 'BarberKing Studio memadukan tradisi seni potong rambut klasik dengan tren gaya pria kontemporer internasional. Kami percaya bahwa gaya rambut yang tepat mampu meningkatkan rasa percaya diri Anda secara drastis.',
    p2: 'Dengan suasana studio bernuansa industrial vintage, alunan musik yang santai, serta layanan minuman dingin gratis, setiap kunjungan Anda menjadi momen rehat yang menyenangkan.',
    highlights: [
      'Kapster berpengalaman sertifikasi internasional',
      'Peralatan steril dengan sterilisasi UV setiap pergantian pelanggan',
      'Free hair tonic, pomade styling & aftershave cooling',
      'Bebas konsultasi bentuk wajah dan arah tumbuh rambut',
    ],
    experienceYears: 8,
  },

  statistics: [
    { id: 'bstat-1', value: '8+', label: 'Tahun Eksistensi' },
    { id: 'bstat-2', value: '25.000+', label: 'Gentlemen Bercukur' },
    { id: 'bstat-3', value: '100%', label: 'Peralatan Steril UV' },
    { id: 'bstat-4', value: '4.9 ★', label: 'Rating Kepuasan Google' },
  ],

  services: [
    {
      id: 'gentleman-haircut',
      name: 'Gentleman Signature Cut',
      category: 'Haircut',
      description: 'Konsultasi gaya rambut, potong rambut detail, keramas dengan sampo cooling mint, pijat pundak & leher, dan hair tonic styling.',
      startingPrice: 65000,
      priceNote: 'Sudah termasuk keramas & pijat',
      duration: '45 Menit',
      iconName: 'Scissors',
      popular: true,
      features: ['Analisa bentuk wajah', 'Cuci rambut sampo relaksasi', 'Pijat leher & punggung ringan', 'Finishing pomade & hair powder'],
      bookingMessage: 'Halo BarberKing, saya mau booking jadwal Gentleman Signature Cut.',
    },
    {
      id: 'hot-towel-shave',
      name: 'Hot Towel Royal Shave',
      category: 'Grooming',
      description: 'Cukur janggut dan kumis dengan busa hangat berlimpah, pisau cukur silet baru steril, kompres handuk hangat, dan aftershave soothing balm.',
      startingPrice: 45000,
      priceNote: 'Silet baru steril',
      duration: '30 Menit',
      iconName: 'Sparkles',
      popular: false,
      features: ['Handuk hangat minyak aromaterapi', 'Busa cukur kaya pelembab', 'Silet baru sekali pakai', 'Aftershave dingin anti-iritasi'],
      bookingMessage: 'Halo BarberKing, saya mau booking Hot Towel Royal Shave.',
    },
    {
      id: 'hair-coloring',
      name: 'Hair Coloring & Bleaching',
      category: 'Pewarnaan',
      description: 'Pewarnaan rambut trendi (Ash Grey, Platinum, Natural Black, Brown) dengan produk pewarna minim amonia yang aman untuk kulit kepala.',
      startingPrice: 150000,
      priceNote: 'Mulai dari (Tergantung panjang)',
      duration: '90 - 120 Menit',
      iconName: 'Palette',
      popular: true,
      features: ['Cat rambut minim amonia', 'Tidak membuat rambut patah', 'Sudah termasuk vitamin rambut', 'Konsultasi warna kulit'],
      bookingMessage: 'Halo BarberKing, saya mau konsultasi dan booking hair coloring.',
    },
    {
      id: 'junior-cut',
      name: 'Kids & Junior Haircut',
      category: 'Anak-anak',
      description: 'Cukur rambut anak dengan kapster yang sabar dan ramah anak. Menjadikan potong rambut pengalaman seru tanpa tangisan.',
      startingPrice: 50000,
      priceNote: 'Usia 2 - 12 Tahun',
      duration: '30 Menit',
      iconName: 'UserCheck',
      popular: false,
      features: ['Kapster sabar dan ramah anak', 'Kursi khusus anak', 'Free permen atau stiker'],
      bookingMessage: 'Halo BarberKing, saya mau booking potong rambut untuk anak saya.',
    },
  ],

  pricingPackages: [
    {
      id: 'paket-gentleman-complete',
      name: 'The King’s Treatment',
      tagline: 'Paket perawatan komplit dari ujung rambut hingga wajah.',
      price: 120000,
      originalPrice: 145000,
      period: 'per kedatangan',
      popular: true,
      badge: 'Best Experience',
      features: [
        { text: 'Gentleman Signature Haircut', included: true },
        { text: 'Hot Towel Shave / Beard Trim', included: true },
        { text: 'Black Mask Charcoal Facial Poripori', included: true },
        { text: 'Cuci Rambut Double Shampoo Menthol', included: true },
        { text: 'Pijat Ekstra Relaksasi Kepala & Leher', included: true },
        { text: 'Free Minuman Dingin (Kopi / Softdrink)', included: true },
      ],
      bookingMessage: 'Halo BarberKing, saya mau booking paket The King’s Treatment Rp 120.000.',
    },
  ],

  whyChooseUs: [
    { id: 'bw-1', title: 'Kapster Bersertifikat', description: 'Teknisi rambut terlatih dengan teknik gradasi fade dan guntingan modern.', iconName: 'Award' },
    { id: 'bw-2', title: '100% Sterilisasi UV', description: 'Gunting, sisir, dan clipper disterilisasi dengan mesin sinar UV setiap pelanggan.', iconName: 'ShieldCheck' },
    { id: 'bw-3', title: 'Bebas Antre Panjang', description: 'Sistem booking via WhatsApp mengunci jam kedatangan Anda tanpa perlu menunggu.', iconName: 'Clock' },
    { id: 'bw-4', title: 'Produk Grooming Premium', description: 'Kami hanya menggunakan pomade, clay, tonic, dan serum rambut impor berkualitas.', iconName: 'Sparkles' },
  ],

  gallery: [
    {
      id: 'bgal-1',
      title: 'Low Fade with Textured Crop',
      category: 'Hairstyle Lookbook',
      imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
      description: 'Potongan crop modern dengan gradasi low fade yang tajam dan rapi.',
    },
    {
      id: 'bgal-2',
      title: 'Classic Side Part Pompadour',
      category: 'Hairstyle Lookbook',
      imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
      description: 'Gaya formal maskulin yang cocok untuk eksekutif dan acara resmi.',
    },
    {
      id: 'bgal-3',
      title: 'Studio Interior & Vintage Barber Chair',
      category: 'Suasana Studio',
      imageUrl: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
      description: 'Kursi barber hidrolik vintage berbahan kulit dengan kenyamanan maksimal.',
    },
  ],

  testimonials: [
    {
      id: 'btest-1',
      name: 'Rian Hidayat',
      roleOrVehicle: 'Digital Marketer',
      rating: 5,
      comment: 'Gradasi fade-nya paling rapi se-Jogja! Kapsternya ngerti banget bentuk kepala dan rambut tebal saya. Tempatnya adem dan wangi.',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 'btest-2',
      name: 'Faris Gunawan',
      roleOrVehicle: 'Mahasiswa',
      rating: 5,
      comment: 'Booking via WhatsApp sat-set langsung dapet jam. Nggak buang-buang waktu nongkrong di antrean. Kompres handuk hangatnya mantul!',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    },
  ],

  process: [],

  faqs: [
    {
      id: 'bfaq-1',
      question: 'Apakah saya bisa datang tanpa booking (walk-in)?',
      answer: 'Bisa, namun jika sedang jam ramai pengunjung walk-in harus mengantre di belakang pelanggan yang sudah memiliki jadwal booking WhatsApp.',
      category: 'Booking',
    },
    {
      id: 'bfaq-2',
      question: 'Berapa lama rata-rata proses potong rambut?',
      answer: 'Rata-rata memakan waktu 40 hingga 50 menit karena kami sangat mementingkan kepresisian detail dan pencucian rambut yang rileks.',
      category: 'Layanan',
    },
  ],

  openingHours: [
    { day: 'Senin - Minggu', hours: '10.00 - 21.00 WIB' },
  ],

  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
    { platform: 'tiktok', url: 'https://tiktok.com', label: 'TikTok' },
  ],

  locationSection: {
    badgeText: 'Studio & Lokasi Kami',
    title: 'Kunjungi Studio BarberKing di Pusat Kota Jakarta Selatan',
    description: 'Suasana studio berkonsep vintage industrial modern yang dingin dan wangi, lengkap dengan area parkir kendaraan dan sofa santai.',
    addressTitle: 'Alamat Studio',
    hoursTitle: 'Jam Operasional Studio',
    openTodayBadgeText: 'Kapster Ready',
    supportTitle: 'Pusat Booking & Layanan',
    directionsButtonText: 'Petunjuk Arah Google Maps',
    askDirectionsButtonText: 'Tanya Patokan Studio via WA',
    askDirectionsMessage: 'Halo BarberKing Studio, saya mau tanya patokan jalan menuju ke lokasi studio.',
    features: [
      'Ruang pangkas ber-AC dingin & musik chill',
      'Area parkir mobil & motor tersedia',
      'Free minuman hangat / dingin',
      'Pembayaran non-tunai lengkap (QRIS & Kartu)',
    ],
  },

  ctaSection: {
    badgeText: 'Slot Booking Terbatas Setiap Hari',
    headline: 'Siap Tampil Beda & Lebih Percaya Diri Hari Ini?',
    description: 'Hindari antrean panjang di lokasi. Pilih jam terbaik Anda sekarang dan nikmati perlakuan grooming eksklusif dari kapster profesional kami.',
    primaryButtonText: 'Ambil Antrean / Booking via WhatsApp',
    secondaryButtonText: 'Telepon Studio Langsung',
    disclaimerText: 'Admin merespons dalam 5 menit untuk memastikan ketersediaan kursi.',
    customWhatsAppMessage: 'Halo BarberKing Studio, saya ingin booking jadwal potong rambut untuk hari ini.',
  },

  footerSection: {
    aboutText: 'BarberKing Studio menghadirkan standar potong rambut pria presisi, hair treatment, dan pengalaman grooming berkelas di lingkungan modern.',
    quickLinksTitle: 'Navigasi Cepat',
    servicesTitle: 'Layanan Favorit',
    contactTitle: 'Hubungi Studio',
    copyrightText: 'Hak Cipta Dilindungi Undang-Undang.',
    badgeText: '100% Puas dengan Garansi Rapikan Ulang',
    taglineNote: 'Studio grooming pria modern Indonesia',
    paymentMethodsTitle: 'Metode Pembayaran',
    paymentMethods: ['QRIS All Payment', 'Debit / Kartu Kredit', 'Transfer Bank', 'Tunai'],
  },
};
