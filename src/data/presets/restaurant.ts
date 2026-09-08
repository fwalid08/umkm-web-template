import { BusinessConfig } from '../../types/business';

export const restaurantPreset: BusinessConfig = {
  id: 'dapur-sedap-nusantara',
  name: 'Dapur Sedap Nusantara',
  industry: 'Restoran Masakan Sunda & Katering',
  tagline: 'Cita Rasa Otentik Warisan Leluhur Priangan',
  heroHeadline: 'Nikmati Kelezatan Gurame Bakar & Sambal Dadak Khas Banjar',
  heroDescription:
    'Restoran keluarga & saung lesehan di Banjar. Menyajikan aneka olahan ikan bakar, ayam kampung, tumis kangkung terasi, dan nasi liwet pulen yang menggugah selera.',
  primaryCtaText: 'Reservasi Meja via WhatsApp',
  secondaryCtaText: 'Lihat Menu Favorit',

  logoUrl: '',
  heroImageUrl:
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80',
  aboutImageUrl:
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
  ctaBannerImageUrl:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',

  aboutText: {
    p1: 'Dapur Sedap Nusantara bermula dari kecintaan kami terhadap kekayaan bumbu rempah tradisional Jawa Barat. Kami berkomitmen menyajikan hidangan segar dari bahan-bahan lokal pilihan setiap hari.',
    p2: 'Dengan konsep saung lesehan asri di kelilingi kolam ikan, kami menjadi tempat favorit untuk berkumpul bersama keluarga, arisan, reuni, hingga jamuan dinas kantor.',
    highlights: [
      'Bahan baku ikan & sayuran segar dipetik setiap pagi',
      'Area lesehan luas berkapasitas hingga 150 orang',
      'Tersedia mushola bersih, area bermain anak & parkir luas',
      'Menerima pesanan nasi box & katering hajatan besar',
    ],
    experienceYears: 8,
  },

  statistics: [
    { id: 'stat-1', value: '8+ Tahun', label: 'Melestarikan Rasa', description: 'Favorit warga Banjar & pelancong' },
    { id: 'stat-2', value: '50+ Menu', label: 'Hidangan Nusantara', description: 'Resep otentik turun temurun' },
    { id: 'stat-3', value: '150 Kursi', label: 'Kapasitas Tempat', description: 'Saung lesehan & meja VIP' },
    { id: 'stat-4', value: '4.8 / 5.0', label: 'Ulasan Pengunjung', description: '500+ ulasan Google' },
  ],

  services: [
    {
      id: 'srv-1',
      name: 'Gurame Bakar Cobek Sedap',
      category: 'Ikan Bakar',
      description: 'Ikan gurame hidup dibakar dengan bumbu kecap rempah khas Sunda disajikan di atas cobek batu panas.',
      startingPrice: 65000,
      priceNote: 'Porsi 2-3 orang',
      duration: '20 Menit',
      iconName: 'Utensils',
      popular: true,
      features: ['Ikan segar langsung dari kolam', 'Sambal cobek pedas segar', 'Lalapan komplet'],
      bookingMessage: 'Halo Dapur Sedap, saya mau reservasi meja dan pesan Gurame Bakar Cobek.',
    },
    {
      id: 'srv-2',
      name: 'Nasi Liwet Kastrol Komplit',
      category: 'Paket Nasi',
      description: 'Nasi liwet wangi aroma serai dan daun salam dengan taburan teri medan, petai, tahu tempe, dan ikan asin.',
      startingPrice: 35000,
      priceNote: 'Per porsi komplit',
      duration: '15 Menit',
      iconName: 'Sparkles',
      popular: true,
      features: ['Kastrol tradisional', 'Ayam goreng lengkuas', 'Sayur asem segar'],
      bookingMessage: 'Halo Dapur Sedap, saya mau pesan Nasi Liwet Kastrol Komplit untuk rombongan.',
    },
    {
      id: 'srv-3',
      name: 'Katering Nasi Kotak Acara',
      category: 'Katering',
      description: 'Penyediaan konsumsi rapat dinas, pengajian, ulang tahun, dan pesta pernikahan dengan packaging higienis.',
      startingPrice: 22000,
      priceNote: 'Mulai dari per box',
      duration: 'H-1 Pesan',
      iconName: 'Coffee',
      features: ['Menu variatif bisa kustom', 'Gratis ongkir se-Kota Banjar', 'Kemasan bento premium'],
      bookingMessage: 'Halo Dapur Sedap, saya ingin konsultasi paket katering nasi box untuk acara kantor.',
    },
  ],

  pricingPackages: [
    {
      id: 'pkg-1',
      name: 'Paket Rombongan Keluarga (4-5 Orang)',
      tagline: 'Kompak, kenyang, dan hemat untuk santap bersama',
      price: 185000,
      originalPrice: 225000,
      period: 'per paket',
      popular: true,
      badge: 'Favorit Keluarga',
      features: [
        { text: '1 Ekor Gurame Bakar / Goreng Terbang', included: true },
        { text: '4 Porsi Nasi Putih / Liwet Wangi', included: true },
        { text: '2 Porsi Tumis Kangkung / Genjer Terasi', included: true },
        { text: '1 Porsi Tahu & Tempe Mendoan Hangat', included: true },
        { text: '1 Pitcher Es Teh Manis / Jeruk', included: true },
      ],
      bookingMessage: 'Halo Dapur Sedap, saya mau booking Paket Rombongan Keluarga untuk akhir pekan ini.',
    },
  ],

  whyChooseUs: [
    { id: 'wcu-1', title: 'Ikan Segar dari Kolam', description: 'Ikan baru diambil saat Anda memesan sehingga daging manis, gurih, dan bebas bau tanah.', iconName: 'Droplets' },
    { id: 'wcu-2', title: '100% Halal & Higienis', description: 'Diproses dari bahan-bahan berlabel halal MUI dan dapur terbuka yang bersih dan rapi.', iconName: 'ShieldCheck' },
    { id: 'wcu-3', title: 'Suasana Lesehan Asri', description: 'Udara segar dengan semilir angin dan pemandangan kolam membuat makan semakin lahap.', iconName: 'Smile' },
  ],

  gallery: [
    { id: 'gal-1', title: 'Saung Lesehan di Atas Kolam', category: 'Suasana', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80' },
    { id: 'gal-2', title: 'Sajian Gurame Bakar & Sambal Cobek', category: 'Menu', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
  ],

  testimonials: [
    {
      id: 'testi-1',
      name: 'H. Asep Suryana',
      roleOrVehicle: 'Pelanggan Arisan Keluarga',
      rating: 5,
      comment: 'Gurame bakarnya luar biasa meresap bumbunya! Sambal dadaknya mantap pedasnya. Tempatnya adem dan ramah anak-anak.',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    },
  ],

  process: [
    { step: 1, title: 'Chat WhatsApp', description: 'Pilih meja atau saung lesehan favorit dan tentukan jam kedatangan.', iconName: 'MessageCircle' },
    { step: 2, title: 'Konfirmasi Pesanan', description: 'Pilih menu makanan terlebih dahulu agar saat tiba hidangan langsung hangat siap santap.', iconName: 'Calendar' },
    { step: 3, title: 'Datang & Santap', description: 'Nikmati kebersamaan bersama keluarga dengan pelayanan ramah.', iconName: 'Utensils' },
    { step: 4, title: 'Pembayaran Mudah', description: 'Tersedia pembayaran QRIS, Transfer, dan Tunai.', iconName: 'ThumbsUp' },
  ],

  faqs: [
    { id: 'faq-1', question: 'Apakah bisa booking untuk rombongan di atas 30 orang?', answer: 'Bisa sekali! Kami memiliki area saung utama berkapasitas hingga 100 orang untuk reuni, arisan, maupun gathering.' },
    { id: 'faq-2', question: 'Apakah ada fasilitas parkir bus pariwisata?', answer: 'Ya, area parkir kami luas dan muat hingga 3 bus pariwisata dan puluhan mobil pribadi.' },
  ],

  openingHours: [
    { day: 'Setiap Hari', hours: '09.30 - 21.00 WIB' },
  ],

  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com/dapursedapbanjar', label: '@dapursedapbanjar' },
  ],

  contact: {
    phone: '0812-7788-9900',
    whatsappNumber: '6281277889900',
    email: 'reservasi@dapursedap.com',
    address: 'Jl. Raya Cimaragas No. 88, Banjar',
    city: 'Kota Banjar',
    province: 'Jawa Barat',
    postalCode: '46313',
    googleMapsUrl: 'https://maps.google.com/?q=Banjar+Resto',
    defaultWhatsAppMessage: 'Halo Dapur Sedap Nusantara, saya ingin reservasi meja saung lesehan.',
  },

  theme: {
    primaryColor: '#16A34A', // Green 600 - fresh culinary herb & Indonesian nature
    primaryHover: '#15803D',
    secondaryColor: '#1C1917', // Warm Stone 900
    accentColor: '#EAB308',
    backgroundColor: '#FAFAF9',
    surfaceColor: '#FFFFFF',
    textColor: '#1C1917',
    mutedTextColor: '#78716C',
    borderRadius: '0.75rem',
    whatsappColor: '#25D366',
  },

  seo: {
    title: 'Dapur Sedap Nusantara Banjar - Rumah Makan Sunda & Saung Lesehan',
    description: 'Restoran sunda keluarga terbaik di Banjar. Ikan gurame bakar cobek, nasi liwet kastrol pulen, katering prasmanan & nasi kotak.',
    keywords: ['restoran banjar', 'rumah makan sunda banjar', 'lesehan banjar', 'gurame bakar banjar', 'katering banjar'],
    ogImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://dapursedap.com',
    schemaType: 'Restaurant',
  },
};
