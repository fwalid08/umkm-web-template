import { BusinessConfig } from '../../types/business';

export const laundryPreset: BusinessConfig = {
  id: 'klin-laundry-express',
  name: 'Klin Laundry Express',
  industry: 'Jasa Laundry Kiloan & Satuan Premium',
  tagline: 'Pakaian Bersih, Wangi Tahan Lama, dan Higienis',
  heroHeadline: 'Cucian Bersih Maksimal Tanpa Ribet Jemur & Setrika',
  heroDescription:
    'Layanan laundry kiloan, satuan, bed cover, dan sepatu di Banjar. Menggunakan deterjen ramah lingkungan, setrika uap boiler anti kusut, dan parfum premium.',
  primaryCtaText: 'Pesan Antar-Jemput WhatsApp',
  secondaryCtaText: 'Daftar Harga Laundry',

  logoUrl: '',
  heroImageUrl:
    'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1400&q=80',
  aboutImageUrl:
    'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1000&q=80',
  ctaBannerImageUrl:
    'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1400&q=80',

  aboutText: {
    p1: 'Klin Laundry Express hadir memberikan solusi praktis bagi keluarga, pekerja, dan mahasiswa yang sibuk tanpa sempat mencuci pakaian sendiri.',
    p2: 'Setiap pelanggan dicuci dalam 1 mesin terpisah (1 nota 1 mesin) sehingga pakaian tidak tercampur dengan orang lain dan terjamin higienis.',
    highlights: [
      '1 Mesin 1 Pelanggan (Tidak dicampur)',
      'Setrika uap boiler profesional anti gosong',
      'Gratis antar jemput radius 3 km',
      'Parfum grade hotel tahan wangi hingga 14 hari',
    ],
    experienceYears: 6,
  },

  statistics: [
    { id: 'stat-1', value: '6+ Tahun', label: 'Pengalaman Melayani', description: 'Sejak 2018 di Kota Banjar' },
    { id: 'stat-2', value: '4.500+', label: 'Kilogram Cucian Tiap Bulan', description: 'Pelanggan setia & perkantoran' },
    { id: 'stat-3', value: '100%', label: 'Mesin Higienis Terpisah', description: 'Standar sanitasi air filter' },
    { id: 'stat-4', value: '4.9 / 5.0', label: 'Kepuasan Pelanggan', description: 'Ratusan ulasan positif' },
  ],

  services: [
    {
      id: 'srv-1',
      name: 'Cuci Setrika Kiloan Reguler',
      category: 'Kiloan',
      description: 'Pencucian bersih, pelembut higienis, setrika uap rapi, dan packing plastik kedap udara.',
      startingPrice: 7000,
      priceNote: 'Per Kilogram (2 hari)',
      duration: '2 Hari Kerja',
      iconName: 'Shirt',
      popular: true,
      features: ['1 Mesin 1 Nota', 'Setrika Uap Boiler', 'Parfum Bebas Pilih'],
      bookingMessage: 'Halo Klin Laundry, saya mau order cuci setrika kiloan reguler. Apakah bisa antar jemput?',
    },
    {
      id: 'srv-2',
      name: 'Laundry Express 6 Jam Jadi',
      category: 'Express',
      description: 'Layanan kilat prioritas untuk kebutuhan darurat, pakaian dinas, atau seragam penting.',
      startingPrice: 12000,
      priceNote: 'Per Kilogram',
      duration: '6 Jam Selesai',
      iconName: 'Zap',
      popular: true,
      features: ['Selesai dalam 6 jam', 'Pengering gas steril', 'Prioritas pengerjaan'],
      bookingMessage: 'Halo Klin Laundry, saya butuh layanan Laundry Express 6 Jam untuk seragam saya.',
    },
    {
      id: 'srv-3',
      name: 'Cuci Bed Cover & Selimut',
      category: 'Rumah Tangga',
      description: 'Pembersihan mendalam dari tungau debu, pengeringan steril, dan pelipatan khusus.',
      startingPrice: 25000,
      priceNote: 'Mulai dari per pcs',
      duration: '1 - 2 Hari',
      iconName: 'Droplets',
      features: ['Basmi tungau & kuman', 'Wangi segar tahan lama', 'Kemasan tas resleting'],
      bookingMessage: 'Halo Klin Laundry, saya mau mencuci bed cover ukuran King. Berapa biayanya?',
    },
    {
      id: 'srv-4',
      name: 'Laundry Sepatu & Tas Premium',
      category: 'Satuan',
      description: 'Deep cleaning sepatu sneakers, kulit, canvas dengan deterjen khusus tanpa merusak lem dan warna.',
      startingPrice: 30000,
      priceNote: 'Per pasang sepatu',
      duration: '2 - 3 Hari',
      iconName: 'Sparkles',
      features: ['Un-yellowing midsole', 'Semprotan anti-bakteri', 'Khusus material delicate'],
      bookingMessage: 'Halo Klin Laundry, saya mau cuci sepatu sneaker putih. Apakah bisa diantar jemput?',
    },
  ],

  pricingPackages: [
    {
      id: 'pkg-1',
      name: 'Paket Anak Kos / Mahasiswa',
      tagline: 'Hemat bulanan untuk pakaian harian',
      price: 95000,
      originalPrice: 120000,
      period: '15 Kg per bulan',
      badge: 'Hemat',
      features: [
        { text: 'Total kuota 15 Kg cuci setrika', included: true },
        { text: 'Bebas ambil berkala (3x drop)', included: true },
        { text: 'Pilihan 5 aroma parfum', included: true },
        { text: 'Gratis antar jemput', included: false },
      ],
      bookingMessage: 'Halo Klin Laundry, saya mau daftar Paket Anak Kos 15 Kg seharga Rp 95.000.',
    },
    {
      id: 'pkg-2',
      name: 'Paket Keluarga Ceria',
      tagline: 'Solusi lengkap cuci baju sekeluarga bebas repot',
      price: 240000,
      originalPrice: 300000,
      period: '40 Kg per bulan',
      popular: true,
      badge: 'Paling Laris',
      features: [
        { text: 'Kuota 40 Kg cuci setrika', included: true },
        { text: 'Gratis Antar Jemput ke Rumah', included: true },
        { text: 'Free 1x Cuci Bed Cover Besar', included: true },
        { text: 'Prioritas Antrian Pengerjaan', included: true },
      ],
      bookingMessage: 'Halo Klin Laundry, saya tertarik berlangganan Paket Keluarga Ceria Rp 240.000.',
    },
  ],

  whyChooseUs: [
    { id: 'wcu-1', title: '1 Mesin 1 Pelanggan', description: 'Pakaian Anda dijamin tidak akan pernah tertukar atau dicampur dengan pakaian orang lain.', iconName: 'ShieldCheck' },
    { id: 'wcu-2', title: 'Setrika Uap Boiler', description: 'Pakaian lebih halus, serat kain tetap awet, dan bebas risiko gosong atau mengkilap.', iconName: 'Shirt' },
    { id: 'wcu-3', title: 'Gratis Antar Jemput', description: 'Tinggal kirim share location via WhatsApp, kurir kami langsung datang mengambil cucian Anda.', iconName: 'Truck' },
    { id: 'wcu-4', title: 'Parfum Tahan 14 Hari', description: 'Pilihan aroma eksklusif Sakura, Downy, Snappy, dan Ocean Fresh yang tahan lama di lemari.', iconName: 'Droplets' },
  ],

  gallery: [
    { id: 'gal-1', title: 'Mesin Cuci Front Loading Steril', category: 'Fasilitas', imageUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80' },
    { id: 'gal-2', title: 'Proses Setrika Uap Boiler', category: 'Proses', imageUrl: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80' },
    { id: 'gal-3', title: 'Hasil Packing Rapi & Higienis', category: 'Kemasan', imageUrl: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80' },
  ],

  testimonials: [
    {
      id: 'testi-1',
      name: 'Dewi Kartika',
      roleOrVehicle: 'Ibu Rumah Tangga (Banjar)',
      rating: 5,
      comment: 'Senang banget langganan di Klin Laundry. Wanginya awet banget di lemari seminggu lebih masih segar. Kurir antar jemputnya tepat waktu!',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 'testi-2',
      name: 'Agus Setiawan',
      roleOrVehicle: 'Karyawan Bank',
      rating: 5,
      comment: 'Kemeja kerja selalu licin rapi berkat setrika uapnya. Pelayanan ramah dan transparan timbangannya difotoin via WhatsApp.',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    },
  ],

  process: [
    { step: 1, title: 'Chat WhatsApp', description: 'Hubungi kami dan kirimkan alamat penjemputan Anda.', iconName: 'MessageCircle' },
    { step: 2, title: 'Kurir Menjemput', description: 'Kurir kami mengambil cucian dan menimbang di depan Anda.', iconName: 'Truck' },
    { step: 3, title: 'Pencucian & Setrika', description: 'Dicuci higienis 1 mesin 1 pelanggan dengan setrika uap.', iconName: 'Shirt' },
    { step: 4, title: 'Packing Rapi', description: 'Pakaian dikemas rapat menjaga aroma wangi dan kebersihan.', iconName: 'ShieldCheck' },
    { step: 5, title: 'Diantar Kembali', description: 'Pakaian bersih dan wangi diantar tepat waktu ke pintu rumah Anda.', iconName: 'ThumbsUp' },
  ],

  faqs: [
    { id: 'faq-1', question: 'Apakah cucian saya akan dicampur dengan milik orang lain?', answer: 'Sama sekali tidak! Kebijakan utama kami adalah 1 mesin cuci hanya untuk 1 pelanggan, berapapun jumlah kilogramnya.' },
    { id: 'faq-2', question: 'Apakah ada minimal order untuk fasilitas antar jemput gratis?', answer: 'Gratis antar jemput berlaku untuk minimal order 5 Kg dalam radius 3 km dari outlet kami.' },
    { id: 'faq-3', question: 'Berapa lama durasi pengerjaan cucian?', answer: 'Reguler selesai dalam 2 hari, One Day Service 24 jam, dan Express selesai dalam 6 jam.' },
  ],

  openingHours: [
    { day: 'Senin - Sabtu', hours: '07.00 - 20.00 WIB' },
    { day: 'Minggu', hours: '08.00 - 18.00 WIB' },
  ],

  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com/klinlaundry', label: '@klinlaundry' },
    { platform: 'tiktok', url: 'https://tiktok.com/@klinlaundry', label: '@klinlaundry' },
  ],

  contact: {
    phone: '0813-9876-5432',
    whatsappNumber: '6281398765432',
    email: 'halo@klinlaundry.com',
    address: 'Jl. Pemuda No. 18, Purwaharja',
    city: 'Kota Banjar',
    province: 'Jawa Barat',
    postalCode: '46312',
    googleMapsUrl: 'https://maps.google.com/?q=Banjar+Laundry',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.883906232537!2d108.5342125740445!3d-7.366887572496805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e659c2bc5555555%3A0x1234567890abcdef!2sBanjar%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
    defaultWhatsAppMessage: 'Halo Klin Laundry, saya ingin memesan layanan antar jemput cucian pakaian.',
  },

  theme: {
    primaryColor: '#0284C7', // Sky 600 - clean, fresh laundry water blue
    primaryHover: '#0369A1',
    secondaryColor: '#0F172A',
    accentColor: '#06B6D4',
    backgroundColor: '#F0F9FF',
    surfaceColor: '#FFFFFF',
    textColor: '#0F172A',
    mutedTextColor: '#64748B',
    borderRadius: '0.875rem',
    whatsappColor: '#25D366',
  },

  seo: {
    title: 'Klin Laundry Express Banjar - Cuci Setrika Bersih, Wangi & Antar Jemput',
    description: 'Jasa laundry kiloan & satuan terpercaya di Banjar. 1 mesin 1 pelanggan, setrika uap anti kusut, parfum tahan lama & gratis antar jemput.',
    keywords: ['laundry banjar', 'laundry express banjar', 'cuci sepatu banjar', 'laundry antar jemput'],
    ogImage: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://klinlaundry.com',
    schemaType: 'DryCleaningOrLaundry',
  },
};
