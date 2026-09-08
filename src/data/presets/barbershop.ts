import { BusinessConfig } from '../../types/business';

export const barbershopPreset: BusinessConfig = {
  id: 'barberking-studio',
  name: 'BarberKing Studio',
  industry: 'Gentleman Barbershop & Grooming',
  tagline: 'Gaya Rambut Maskulin, Rapi, dan Berkelas',
  heroHeadline: 'Potongan Rambut Presisi Bikin Percaya Diri Maksimal',
  heroDescription:
    'Barbershop modern di Banjar dengan hair stylist profesional. Nikmati cukur rambut presisi, hair wash relaksasi, hot towel massage, dan pomade impor premium.',
  primaryCtaText: 'Booking Jadwal Cukur WhatsApp',
  secondaryCtaText: 'Lihat Menu & Harga',

  logoUrl: '',
  heroImageUrl:
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=80',
  aboutImageUrl:
    'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=80',
  ctaBannerImageUrl:
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1400&q=80',

  aboutText: {
    p1: 'BarberKing Studio adalah destinasi grooming pria modern yang mengutamakan ketelitian teknik potong, higienitas alat, dan atmosfer ruang yang santai serta berkelas.',
    p2: 'Setiap gunting dan razor disterilisasi sebelum digunakan. Kami siap membantu Anda menemukan model rambut yang paling cocok dengan bentuk wajah Anda.',
    highlights: [
      'Alat cukur & pisau razor steril berstandar barbershop modern',
      'Free konsultasi gaya rambut sesuai kontur wajah',
      'Fasilitas cold drink, full musik & PlayStation 5',
      'Produk hair styling premium (Clay, Pomade, Tonic)',
    ],
    experienceYears: 5,
  },

  statistics: [
    { id: 'stat-1', value: '5+ Tahun', label: 'Melayani Pria Keren', description: 'Sejak 2019 di Banjar' },
    { id: 'stat-2', value: '800+', label: 'Kepala Dicukur Tiap Bulan', description: 'Pelanggan setia segala usia' },
    { id: 'stat-3', value: '100%', label: 'Pisau Silet Selalu Baru', description: 'Sterilisasi UV setiap sesi' },
    { id: 'stat-4', value: '4.9 / 5.0', label: 'Rating Google Reviews', description: '300+ ulasan bintang 5' },
  ],

  services: [
    {
      id: 'srv-1',
      name: 'King Gentleman Cut',
      category: 'Haircut',
      description: 'Potong rambut presisi, keramas sejuk, pijat kepala rileks, hot towel, dan styling pomade.',
      startingPrice: 40000,
      priceNote: 'Paket Komplit',
      duration: '40 Menit',
      iconName: 'Scissors',
      popular: true,
      features: ['Haircut sesuai bentuk wajah', 'Keramas 2x dengan tonik', 'Pijat leher & punggung ringan'],
      bookingMessage: 'Halo BarberKing, saya mau booking jadwal cukur King Gentleman Cut hari ini.',
    },
    {
      id: 'srv-2',
      name: 'Beard Trim & Hot Towel Shave',
      category: 'Shaving',
      description: 'Perapian jenggot & kumis menggunakan krim cukur mewah, kompres handuk hangat, dan razor tajam steril.',
      startingPrice: 25000,
      priceNote: 'Mulai dari',
      duration: '25 Menit',
      iconName: 'Smile',
      features: ['Pisau silet 1x pakai baru', 'Aftershave soothing lotion', 'Bentuk garis presisi'],
      bookingMessage: 'Halo BarberKing, saya mau booking treatment Beard Trim & Hot Towel Shave.',
    },
    {
      id: 'srv-3',
      name: 'Hair Coloring & Highlight',
      category: 'Coloring',
      description: 'Pewarnaan rambut trendi (Ash grey, Brown, Bleaching, Dark chocolate) dengan cat non-amonia.',
      startingPrice: 120000,
      priceNote: 'Tergantung panjang rambut',
      duration: '90 Menit',
      iconName: 'Sparkles',
      popular: true,
      features: ['Cat rambut tidak merusak kulit', 'Toner anti-kuning', 'Vitamin rambut berkilau'],
      bookingMessage: 'Halo BarberKing, saya ingin konsultasi warna rambut dan booking jadwal hair coloring.',
    },
    {
      id: 'srv-4',
      name: 'Junior Kids Haircut',
      category: 'Kids',
      description: 'Potongan sabar & menyenangkan untuk anak-anak dengan kursi mobil unik dan mainan.',
      startingPrice: 30000,
      priceNote: 'Anak usia < 10 tahun',
      duration: '30 Menit',
      iconName: 'HeartHandshake',
      features: ['Barber sabar & ramah anak', 'Kursi mainan khusus anak', 'Gratis permen/snack'],
      bookingMessage: 'Halo BarberKing, saya mau ajak anak saya cukur rambut siang ini.',
    },
  ],

  pricingPackages: [
    {
      id: 'pkg-1',
      name: 'Paket Signature King',
      tagline: 'Pengalaman grooming mewah dari ujung kepala',
      price: 65000,
      originalPrice: 85000,
      period: 'per sesi',
      popular: true,
      badge: 'Best Experience',
      features: [
        { text: 'Gentleman Haircut & Consultation', included: true },
        { text: 'Keramas Dingin Mint & Hair Tonic', included: true },
        { text: 'Hot Towel Face Treatment & Massage', included: true },
        { text: 'Beard/Mustache Shaping', included: true },
        { text: 'Styling dengan Pomade Impor', included: true },
        { text: 'Free Cold Brew / Softdrink', included: true },
      ],
      bookingMessage: 'Halo BarberKing, saya mau pesan Paket Signature King Rp 65.000.',
    },
  ],

  whyChooseUs: [
    { id: 'wcu-1', title: 'Barber Berpengalaman', description: 'Capster bersertifikat yang paham tren model rambut terbaru (fade, taper, comma hair, mullet).', iconName: 'Award' },
    { id: 'wcu-2', title: '100% Higienis & Steril', description: 'Pisau cukur selalu ganti baru di depan mata Anda dan alat dicelup cairan desinfektan.', iconName: 'ShieldCheck' },
    { id: 'wcu-3', title: 'Suasana Studio Ber-AC', description: 'Tempat cukur bersih, harum, ber-AC dingin, dilengkapi sofa santai dan free gaming console.', iconName: 'Coffee' },
  ],

  gallery: [
    { id: 'gal-1', title: 'Interior Vintage Studio', category: 'Studio', imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80' },
    { id: 'gal-2', title: 'Detailing Fade Haircut', category: 'Hasil Cukur', imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80' },
  ],

  testimonials: [
    {
      id: 'testi-1',
      name: 'Reza Fahlevi',
      roleOrVehicle: 'Mahasiswa',
      rating: 5,
      comment: 'Potongan taper fade-nya rapi banget! Capsternya ngerti model rambut yang pas sama muka saya. Pijat kepalanya juga juara bikin rileks.',
      avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
    },
  ],

  process: [
    { step: 1, title: 'Booking Jadwal', description: 'Chat WhatsApp untuk mengamankan jam kedatangan Anda tanpa perlu antre lama.', iconName: 'MessageCircle' },
    { step: 2, title: 'Konsultasi Gaya', description: 'Diskusikan gaya rambut yang Anda inginkan bersama capster kami.', iconName: 'Smile' },
    { step: 3, title: 'Cukur & Grooming', description: 'Pengerjaan presisi dengan alat steril dan teknik potongan modern.', iconName: 'Scissors' },
    { step: 4, title: 'Wash & Massage', description: 'Keramas menyegarkan dan relaksasi pijat leher.', iconName: 'Droplets' },
    { step: 5, title: 'Final Styling', description: 'Finishing pomade atau matte clay untuk tampilan maksimal.', iconName: 'ThumbsUp' },
  ],

  faqs: [
    { id: 'faq-1', question: 'Apakah harus booking dulu?', answer: 'Bisa langsung datang (walk-in), tapi kami sarankan booking via WhatsApp agar Anda tidak perlu mengantre.' },
    { id: 'faq-2', question: 'Apakah silet razor diganti setiap pelanggan?', answer: 'Ya, 100% selalu menggunakan mata silet baru yang dibuka langsung di hadapan Anda.' },
  ],

  openingHours: [
    { day: 'Senin - Jumat', hours: '10.00 - 21.00 WIB' },
    { day: 'Sabtu - Minggu', hours: '09.00 - 22.00 WIB' },
  ],

  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com/barberkingbanjar', label: '@barberkingbanjar' },
    { platform: 'tiktok', url: 'https://tiktok.com/@barberkingbanjar', label: '@barberkingbanjar' },
  ],

  contact: {
    phone: '0811-2233-4455',
    whatsappNumber: '6281122334455',
    email: 'booking@barberking.com',
    address: 'Jl. Kantor Pos No. 12, Banjar',
    city: 'Kota Banjar',
    province: 'Jawa Barat',
    postalCode: '46311',
    googleMapsUrl: 'https://maps.google.com/?q=Banjar+Barbershop',
    defaultWhatsAppMessage: 'Halo BarberKing, saya ingin booking jadwal cukur rambut.',
  },

  theme: {
    primaryColor: '#D97706', // Amber 600 - classy gold barbershop vibe
    primaryHover: '#B45309',
    secondaryColor: '#18181B', // Zinc 900
    accentColor: '#F59E0B',
    backgroundColor: '#FAFAFA',
    surfaceColor: '#FFFFFF',
    textColor: '#18181B',
    mutedTextColor: '#71717A',
    borderRadius: '0.75rem',
    whatsappColor: '#25D366',
  },

  seo: {
    title: 'BarberKing Studio Banjar - Barbershop Modern & Gentleman Grooming',
    description: 'Barbershop pria terbaik di Banjar. Cukur rambut fade rapi, hot towel shave, coloring & styling pomade bergaransi puas.',
    keywords: ['barbershop banjar', 'cukur rambut pria banjar', 'potong rambut banjar', 'barber modern'],
    ogImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://barberkingbanjar.com',
    schemaType: 'HairSalon',
  },
};
