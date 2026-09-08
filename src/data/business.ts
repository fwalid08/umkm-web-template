import { BusinessConfig } from '../types/business';

export const defaultBusiness: BusinessConfig = {
  id: 'bengkel-jaya-motor',
  name: 'Bengkel Jaya Motor',
  industry: 'Bengkel Motor & Service Center',
  tagline: 'Servis Motor Cepat, Jujur, dan Terpercaya',
  heroHeadline: 'Servis Motor Handal Tanpa Khawatir Kantong Jebol',
  heroDescription:
    'Bengkel motor spesialis matic & bebek di Banjar. Ditangani oleh mekanik berpengalaman lebih dari 10 tahun dengan peralatan modern dan suku cadang terjamin original.',
  primaryCtaText: 'Booking Servis via WhatsApp',
  secondaryCtaText: 'Lihat Layanan & Biaya',

  logoUrl: '',
  heroImageUrl:
    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1400&q=80',
  aboutImageUrl:
    'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80',
  ctaBannerImageUrl:
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1400&q=80',

  aboutText: {
    p1: 'Bengkel Jaya Motor didirikan dengan komitmen memberikan layanan perawatan sepeda motor yang jujur, transparan, dan berkualitas tinggi bagi masyarakat Banjar dan sekitarnya.',
    p2: 'Kami percaya kenyamanan dan keselamatan berkendara bermula dari perawatan mesin yang teliti. Sebelum pengerjaan, kami selalu menjelaskan kondisi motor dan memberikan estimasi biaya tanpa ada biaya tersembunyi.',
    highlights: [
      'Pengecekan komputer & scanner injeksi digital',
      'Suku cadang 100% original bergaransi resmi',
      'Ruang tunggu bersih dilengkapi AC, Free WiFi & kopi',
      'Garansi servis hingga 14 hari pengerjaan',
    ],
    experienceYears: 10,
  },

  statistics: [
    {
      id: 'stat-1',
      value: '10+ Tahun',
      label: 'Pengalaman Servis',
      description: 'Melayani sejak 2014 di Jawa Barat',
    },
    {
      id: 'stat-2',
      value: '1.200+',
      label: 'Motor Diservis Tiap Bulan',
      description: 'Dipercaya ribuan pengendara',
    },
    {
      id: 'stat-3',
      value: '100%',
      label: 'Mekanik Tersertifikasi',
      description: 'Standar pelatihan bengkel resmi',
    },
    {
      id: 'stat-4',
      value: '4.9 / 5.0',
      label: 'Rating Kepuasan Pelanggan',
      description: 'Berdasarkan 450+ ulasan Google Maps',
    },
  ],

  services: [
    {
      id: 'srv-1',
      name: 'Servis Ringan / Berkala',
      category: 'Perawatan Rutin',
      description:
        'Pembersihan filter udara, penyetelan rem, cek busi, cek aki, pengecekan tekanan angin ban, dan pelumasan rantai/kabel.',
      startingPrice: 35000,
      priceNote: 'Mulai dari',
      duration: '30 Menit',
      iconName: 'Wrench',
      popular: true,
      features: ['Pembersihan filter udara', 'Cek tekanan kompresi & kelistrikan', 'Penyetelan kampas rem'],
      bookingMessage:
        'Halo Bengkel Jaya Motor, saya mau booking Servis Ringan untuk motor saya. Apakah bisa hari ini?',
    },
    {
      id: 'srv-2',
      name: 'Servis Lengkap & Tune Up Injeksi',
      category: 'Performa Mesin',
      description:
        'Pembersihan Throttle Body (TB) dengan injector cleaner, reset ECM scanner, cek kompresi mesin, dan gurah ruang bakar.',
      startingPrice: 75000,
      priceNote: 'Mulai dari',
      duration: '45 - 60 Menit',
      iconName: 'Zap',
      popular: true,
      features: ['Reset ECU Scanner Digital', 'Gurah Throttle Body & Injektor', 'Kalibrasi sensor gas'],
      bookingMessage:
        'Halo Bengkel Jaya Motor, saya ingin konsultasi dan booking Servis Lengkap & Tune Up Injeksi.',
    },
    {
      id: 'srv-3',
      name: 'Ganti Oli Mesin & Gardan',
      category: 'Pelumasan',
      description:
        'Tersedia aneka oli ternama: Shell Advance, Motul, Pertamina Enduro, Yamalube, AHM Oil, Castrol. Gratis cek oli rem.',
      startingPrice: 45000,
      priceNote: 'Harga oli + Jasa Free',
      duration: '15 Menit',
      iconName: 'Droplets',
      features: ['Jaminan oli 100% Original', 'Gratis semprot angin & cek rantai', 'Pembersihan saringan oli'],
      bookingMessage:
        'Halo Bengkel Jaya Motor, saya mau ganti oli motor saya. Oli apa saja yang ready stok hari ini?',
    },
    {
      id: 'srv-4',
      name: 'Servis CVT Komplit (Matic)',
      category: 'Spesialis Matic',
      description:
        'Bongkar total blok CVT, pembersihan debu belt, cek roller, v-belt, kampas ganda, sliding sheave, dan pelumasan gemuk CVT original.',
      startingPrice: 50000,
      priceNote: 'Mulai dari',
      duration: '40 Menit',
      iconName: 'Settings',
      popular: true,
      features: ['Hilangkan gredek tarikan awal', 'Gemuk CVT High-Temp Original', 'Pembersihan mangkok ganda'],
      bookingMessage:
        'Halo Bengkel Jaya Motor, motor matic saya tarikannya gredek. Mau booking Servis CVT Komplit.',
    },
    {
      id: 'srv-5',
      name: 'Ganti Sparepart & Kaki-Kaki',
      category: 'Perbaikan',
      description:
        'Penggantian kampas rem, ban luar/dalam, rantai & gir set, bearing roda, komstir, sokbreker, dan bohlam LED.',
      startingPrice: 25000,
      priceNote: 'Jasa pasang mulai',
      duration: '20 - 45 Menit',
      iconName: 'ShieldCheck',
      features: ['Suku cadang ori atau aftermarket berkualitas', 'Pemasangan presisi dengan torsi kunci pas', 'Garansi pasang'],
      bookingMessage:
        'Halo Bengkel Jaya Motor, saya mau tanya ketersediaan dan estimasi biaya ganti sparepart motor.',
    },
    {
      id: 'srv-6',
      name: 'Overhaul / Turun Mesin',
      category: 'Perbaikan Berat',
      description:
        'Penanganan motor berasap putih/hitam, ganti seher/piston, korter blok silinder, skir klep, dan ganti stang seher bergaransi.',
      startingPrice: 350000,
      priceNote: 'Jasa mulai dari',
      duration: '2 - 4 Hari',
      iconName: 'Gauge',
      features: ['Bongkar pasang bersih teliti', 'Uji kompresi sebelum serah terima', 'Garansi mesin 30 hari'],
      bookingMessage:
        'Halo Bengkel Jaya Motor, motor saya knalpotnya ngebul dan oli sering habis. Mohon estimasi turun mesin.',
    },
  ],

  pricingPackages: [
    {
      id: 'pkg-1',
      name: 'Paket Hemat Rutin',
      tagline: 'Ideal untuk perawatan bulanan motor harian',
      price: 65000,
      originalPrice: 85000,
      period: 'per motor',
      badge: 'Hemat',
      features: [
        { text: 'Ganti Oli Mesin Standard', included: true },
        { text: 'Pembersihan Filter Udara', included: true },
        { text: 'Penyetelan Rem Depan & Belakang', included: true },
        { text: 'Cek Busi & Tekanan Angin Ban', included: true },
        { text: 'Servis CVT Komplit', included: false },
        { text: 'Scan Komputer Injeksi', included: false },
      ],
      bookingMessage:
        'Halo Bengkel Jaya Motor, saya ingin ambil promo Paket Hemat Rutin seharga Rp 65.000.',
    },
    {
      id: 'pkg-2',
      name: 'Paket Matic Segar Anti-Gredek',
      tagline: 'Solusi tuntas motor matic tarikan berat dan bergetar',
      price: 135000,
      originalPrice: 175000,
      period: 'per motor',
      popular: true,
      badge: 'Paling Populer',
      features: [
        { text: 'Servis CVT Total & Bersihkan Debu', included: true },
        { text: 'Grease / Gemuk CVT High-Temp Baru', included: true },
        { text: 'Ganti Oli Mesin & Oli Gardan Synthetic', included: true },
        { text: 'Pembersihan Throttle Body Ringan', included: true },
        { text: 'Pengecekan Aki & Kelistrikan', included: true },
        { text: 'Garansi Servis 14 Hari', included: true },
      ],
      bookingMessage:
        'Halo Bengkel Jaya Motor, saya mau booking Paket Matic Segar Anti-Gredek Rp 135.000.',
    },
    {
      id: 'pkg-3',
      name: 'Paket Tune Up Super Injeksi',
      tagline: 'Performa mesin kembali responsif seperti motor baru keluar dealer',
      price: 195000,
      originalPrice: 250000,
      period: 'per motor',
      badge: 'Best Performance',
      features: [
        { text: 'Pembersihan Throttle Body & Injector Ultrasonic', included: true },
        { text: 'Reset Sensor ECM dengan Diagnostic Scanner', included: true },
        { text: 'Gurah Ruang Bakar (Carbon Cleaner Premium)', included: true },
        { text: 'Ganti Oli Mesin Semi-Synthetic', included: true },
        { text: 'Penyetelan Kerenggangan Klep', included: true },
        { text: 'Cuci Motor Gratis Setelah Servis', included: true },
      ],
      bookingMessage:
        'Halo Bengkel Jaya Motor, saya mau booking Paket Tune Up Super Injeksi Rp 195.000.',
    },
  ],

  whyChooseUs: [
    {
      id: 'wcu-1',
      title: 'Mekanik Berpengalaman & Teliti',
      description:
        'Semua mekanik memiliki jam terbang tinggi, bersertifikat teknis, dan memahami anatomi motor matic, bebek hingga sport.',
      iconName: 'Award',
    },
    {
      id: 'wcu-2',
      title: 'Harga Transparan Tanpa Tipu-Tipu',
      description:
        'Biaya jasa dan harga sparepart diinfokan di awal sebelum dikerjakan. Tidak ada penggantian part tanpa persetujuan Anda.',
      iconName: 'DollarSign',
    },
    {
      id: 'wcu-3',
      title: 'Sparepart 100% Original',
      description:
        'Kami hanya menjual oli dan suku cadang asli bergaransi dari distributor resmi (Honda AHM, Yamaha YGP, Suzuki, dll).',
      iconName: 'ShieldCheck',
    },
    {
      id: 'wcu-4',
      title: 'Pengerjaan Cepat & Tepat Waktu',
      description:
        'Didukung 4 pit servis dan peralatan modern pneumatic, pengerjaan lebih cepat tanpa antre berlama-lama.',
      iconName: 'Clock',
    },
    {
      id: 'wcu-5',
      title: 'Garansi Servis Hingga 14 Hari',
      description:
        'Jika setelah diservis keluhan yang sama masih terasa, bawa kembali ke bengkel kami untuk dicek ulang tanpa biaya jasa tambahan.',
      iconName: 'ThumbsUp',
    },
    {
      id: 'wcu-6',
      title: 'Ruang Tunggu Nyaman & Ber-AC',
      description:
        'Sambil menunggu motor diservis, Anda bisa santai di ruang tunggu ber-AC dengan fasilitas Free WiFi, charging station, dan kopi hangat.',
      iconName: 'Coffee',
    },
  ],

  gallery: [
    {
      id: 'gal-1',
      title: 'Area Bengkel & Pit Servis Modern',
      category: 'Bengkel',
      imageUrl:
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
      description: 'Pit servis bersih dengan peralatan pneumatic standar industri.',
    },
    {
      id: 'gal-2',
      title: 'Pembersihan & Perawatan CVT Matic',
      category: 'Proses Servis',
      imageUrl:
        'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      description: 'Pembersihan debu CVT hingga kinclong agar motor bebas gredek.',
    },
    {
      id: 'gal-3',
      title: 'Mekanik Sedang Diagnosa Kelistrikan',
      category: 'Mekanik',
      imageUrl:
        'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
      description: 'Pengecekan menggunakan scanner injeksi komputer terkini.',
    },
    {
      id: 'gal-4',
      title: 'Etalase Oli & Sparepart Original',
      category: 'Bengkel',
      imageUrl:
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      description: 'Stok oli resmi dan suku cadang asli selalu siap sedia.',
    },
    {
      id: 'gal-5',
      title: 'Pemasangan Ban Menggunakan Tire Changer',
      category: 'Proses Servis',
      imageUrl:
        'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
      description: 'Velg motor tidak akan lecet berkat mesin bongkar pasang ban hidrolik.',
    },
    {
      id: 'gal-6',
      title: 'Serah Terima Kendaraan Pelanggan',
      category: 'Pelanggan',
      imageUrl:
        'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
      description: 'Motor diserahkan kembali dalam kondisi prima dan siap touring.',
    },
  ],

  testimonials: [
    {
      id: 'testi-1',
      name: 'Rian Hidayat',
      roleOrVehicle: 'Pemilik Honda Vario 160 (Banjar)',
      rating: 5,
      comment:
        'Vario saya tarikan awalnya gredek parah udah bolak-balik bengkel lain ga sembuh. Di Bengkel Jaya Motor langsung dicek CVT sama mekaniknya, dibersihkan dan diganti roller asli. Tarikan langsung halus kayak baru! Harganya transparan banget.',
      date: '3 hari yang lalu',
      avatarUrl:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 'testi-2',
      name: 'Siti Nurhaliza',
      roleOrVehicle: 'Pemilik Yamaha Fazzio (Ciamis)',
      rating: 5,
      comment:
        'Sebagai cewek sering takut dibohongi kalau ke bengkel. Tapi di Jaya Motor mas mekaniknya ramah banget, dijelasin bagian mana yang rusak dan dikasih pilihan mau ganti sekarang atau nanti. Tempat nunggunya adem ada AC dan WiFi.',
      date: '1 minggu yang lalu',
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 'testi-3',
      name: 'Budi Santoso',
      roleOrVehicle: 'Driver Ojek Online (Banjar Kota)',
      rating: 5,
      comment:
        'Buat harian ojol, motor itu senjata cari nafkah. Kalau servis di sini pengerjaannya cepet dan ga bertele-tele. Oli dijamin asli mesin ga cepet panas. Pokoknya langganan setia sejak 3 tahun lalu!',
      date: '2 minggu yang lalu',
      avatarUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 'testi-4',
      name: 'Dimas Pratama',
      roleOrVehicle: 'Pemilik Yamaha NMAX 155',
      rating: 5,
      comment:
        'Servis injeksi tune up paket lengkap mantap pisan. Tarikan motor enteng kembali dan konsumsi bensin jadi lebih irit. Plus dapat garansi servis 14 hari jadi tenang di jalan.',
      date: '1 bulan yang lalu',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
  ],

  process: [
    {
      step: 1,
      title: 'Hubungi via WhatsApp',
      description:
        'Klik tombol booking di website ini untuk chat langsung dengan admin kami. Jelaskan keluhan motor Anda.',
      iconName: 'MessageCircle',
    },
    {
      step: 2,
      title: 'Konsultasi & Jadwal',
      description:
        'Admin akan mengkonfirmasi ketersediaan pit servis dan menyiapkan suku cadang yang mungkin dibutuhkan.',
      iconName: 'Calendar',
    },
    {
      step: 3,
      title: 'Datang ke Bengkel',
      description:
        'Bawa motor Anda ke lokasi bengkel di Banjar. Tim kami menyambut dan mencatat keluhan kendaraan.',
      iconName: 'MapPin',
    },
    {
      step: 4,
      title: 'Pemeriksaan & Estimasi Biaya',
      description:
        'Mekanik memeriksa motor dan menginfokan estimasi biaya secara transparan sebelum obeng disentuhkan.',
      iconName: 'ShieldCheck',
    },
    {
      step: 5,
      title: 'Servis Selesai & Bergaransi',
      description:
        'Motor dites jalan, diserahterimakan, dan siap melaju kencang dengan jaminan garansi servis hingga 14 hari.',
      iconName: 'ThumbsUp',
    },
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'Apakah harus booking dulu sebelum datang ke bengkel?',
      answer:
        'Anda bisa langsung datang tanpa booking. Namun dengan melakukan booking terlebih dahulu via WhatsApp, Anda akan mendapatkan prioritas antrian dan kami bisa memastikan ketersediaan sparepart motor Anda.',
      category: 'Layanan',
    },
    {
      id: 'faq-2',
      question: 'Apakah suku cadang dan oli yang dijual dijamin asli?',
      answer:
        '100% Asli dan Bergaransi Resmi. Kami hanya bekerjasama dengan distributor resmi pabrikan (AHM, Yamaha Genuine Parts, Motul, Shell, dll). Kami berani menjamin uang kembali jika terbukti tiruan.',
      category: 'Suku Cadang',
    },
    {
      id: 'faq-3',
      question: 'Berapa lama garansi servis yang diberikan?',
      answer:
        'Kami memberikan garansi servis selama 14 hari kerja untuk servis berkala dan tune up, serta 30 hari untuk perbaikan turun mesin/overhaul. Jika timbul keluhan yang sama, kami periksa ulang gratis tanpa biaya jasa.',
      category: 'Garansi',
    },
    {
      id: 'faq-4',
      question: 'Bolehkah membawa suku cadang atau oli sendiri dari rumah?',
      answer:
        'Tentu saja diperbolehkan! Kami melayani jasa pasang dengan tarif yang jelas dan terjangkau sesuai jenis suku cadang yang dipasang.',
      category: 'Layanan',
    },
    {
      id: 'faq-5',
      question: 'Apa saja metode pembayaran yang diterima?',
      answer:
        'Kami menerima pembayaran tunai (Cash), Transfer Bank (BCA, BRI, Mandiri), dan pembayaran instan menggunakan QRIS (GoPay, OVO, Dana, ShopeePay, Mobile Banking).',
      category: 'Pembayaran',
    },
    {
      id: 'faq-6',
      question: 'Berapa lama waktu yang dibutuhkan untuk servis motor?',
      answer:
        'Untuk ganti oli sekitar 10-15 menit. Servis ringan atau CVT sekitar 30-45 menit. Servis lengkap tune up sekitar 60 menit. Anda bisa menunggu santai di ruang tunggu ber-AC kami.',
      category: 'Waktu',
    },
  ],

  openingHours: [
    { day: 'Senin - Jumat', hours: '08.00 - 17.00 WIB' },
    { day: 'Sabtu', hours: '08.00 - 17.00 WIB' },
    { day: 'Minggu', hours: '08.00 - 14.00 WIB' },
  ],

  socialLinks: [
    {
      platform: 'instagram',
      url: 'https://instagram.com/bengkeljayamotor',
      label: '@bengkeljayamotor',
    },
    {
      platform: 'facebook',
      url: 'https://facebook.com/bengkeljayamotorbanjar',
      label: 'Bengkel Jaya Motor Banjar',
    },
    {
      platform: 'tiktok',
      url: 'https://tiktok.com/@bengkeljayamotor',
      label: '@bengkeljayamotor',
    },
  ],

  contact: {
    phone: '0812-3456-7890',
    whatsappNumber: '628123456789',
    email: 'kontak@bengkeljayamotor.com',
    address: 'Jl. Letjen Suwarto No. 45, Hegarsari, Kec. Pataruman',
    city: 'Kota Banjar',
    province: 'Jawa Barat',
    postalCode: '46311',
    googleMapsUrl: 'https://maps.google.com/?q=Banjar+Jawa+Barat',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.883906232537!2d108.5342125740445!3d-7.366887572496805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e659c2bc5555555%3A0x1234567890abcdef!2sBanjar%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
    defaultWhatsAppMessage:
      'Halo Bengkel Jaya Motor, saya ingin melakukan booking servis motor. Apakah tersedia jadwal hari ini?',
  },

  theme: {
    primaryColor: '#DC2626', // Red 600 - bold automotive racing energy
    primaryHover: '#B91C1C', // Red 700
    secondaryColor: '#0F172A', // Slate 900
    accentColor: '#F59E0B', // Amber 500
    backgroundColor: '#F8FAFC', // Slate 50
    surfaceColor: '#FFFFFF',
    textColor: '#0F172A',
    mutedTextColor: '#64748B',
    borderRadius: '0.75rem',
    whatsappColor: '#25D366',
  },

  seo: {
    title: 'Bengkel Jaya Motor Banjar - Servis Motor Cepat, Jujur & Terpercaya',
    description:
      'Bengkel motor spesialis matic & bebek di Kota Banjar, Jawa Barat. Servis injeksi, servis CVT anti gredek, ganti oli, tune up & turun mesin bergaransi 14 hari.',
    keywords: [
      'bengkel motor banjar',
      'servis motor banjar jawa barat',
      'bengkel matic banjar',
      'servis cvt banjar',
      'tune up injeksi banjar',
      'ganti oli banjar',
      'bengkel motor terdekat',
    ],
    ogImage:
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://bengkeljayamotor.com',
    schemaType: 'AutomotiveBusiness',
  },
};
