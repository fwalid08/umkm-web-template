import { BusinessConfig } from '../../types/business';
import { businessConfig } from '../business';

const heroImage = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=85';
const aboutImage = 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=85';
const ctaImage = 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=85';

export const rentalMobilTemplate: BusinessConfig = {
  ...businessConfig,
  id: 'template-rental-mobil',
  name: 'Sahabat Rent Car',
  industry: 'Rental Mobil',
  tagline: 'Sewa Mobil Mudah, Armada Terawat, Harga Transparan',
  heroHeadline: 'Rental Mobil Nyaman untuk Liburan, Bisnis, dan Perjalanan Keluarga',
  heroDescription: 'Pilihan mobil terawat dengan harga jelas, proses booking cepat via WhatsApp, tersedia lepas kunci maupun dengan driver untuk area Banjar, Ciamis, Pangandaran, dan sekitarnya.',
  primaryCtaText: 'Cek Ketersediaan Mobil',
  secondaryCtaText: 'Lihat Armada & Harga',
  heroImageUrl: heroImage,
  aboutImageUrl: aboutImage,
  ctaBannerImageUrl: ctaImage,
  sections: { stats:true, about:true, services:true, pricing:true, whyChooseUs:true, gallery:true, testimonials:true, process:true, faq:true, location:true, cta:true },
  theme: { ...businessConfig.theme, primaryColor:'#2563EB', primaryHover:'#1D4ED8', secondaryColor:'#0F172A', accentColor:'#F59E0B', backgroundColor:'#F8FAFC', surfaceColor:'#FFFFFF', textColor:'#0F172A', mutedTextColor:'#64748B', borderRadius:'1rem', whatsappColor:'#25D366', heroVariant:'split', fontOptionId:'plus-jakarta' },
  contact: { phone:'0812-7000-2211', whatsappNumber:'6281270002211', email:'booking@sahabatrentcar.id', address:'Jl. Raya Banjar No. 88, Hegarsari', city:'Banjar', province:'Jawa Barat', postalCode:'46333', googleMapsUrl:'https://maps.google.com/?q=Banjar+Jawa+Barat', defaultWhatsAppMessage:'Halo Sahabat Rent Car, saya ingin cek ketersediaan mobil dan harga rental untuk tanggal perjalanan saya.' },
  aboutText: { p1:'Sahabat Rent Car melayani kebutuhan rental mobil harian, mingguan, perjalanan luar kota, hingga antar-jemput bandara. Kami fokus pada armada yang bersih, terawat, dan siap digunakan.', p2:'Setiap unit diperiksa sebelum serah terima agar pelanggan dapat berkendara dengan lebih tenang. Pilih lepas kunci untuk fleksibilitas atau gunakan driver berpengalaman untuk perjalanan yang lebih praktis.', highlights:['Armada rutin servis dan inspeksi sebelum disewakan','Harga rental dan deposit dijelaskan sejak awal','Bisa booking via WhatsApp tanpa datang ke kantor','Lepas kunci dan paket dengan driver tersedia'], experienceYears:7 },
  statistics:[
    {id:'rstat-1',value:'25+',label:'Unit Armada',description:'MPV, city car, SUV, dan premium'},
    {id:'rstat-2',value:'7+',label:'Tahun Melayani',description:'Rental untuk keluarga dan bisnis'},
    {id:'rstat-3',value:'1.000+',label:'Perjalanan',description:'Disewa pelanggan setiap tahun'},
    {id:'rstat-4',value:'4.9 ★',label:'Rating Pelanggan',description:'Berdasarkan ulasan pelanggan'}
  ],
  services:[
    {id:'rental-lepas-kunci',name:'Rental Lepas Kunci',category:'Self Drive',description:'Sewa mobil untuk perjalanan pribadi dengan fleksibilitas rute dan waktu penggunaan sesuai ketentuan rental.',startingPrice:250000,priceNote:'Mulai / 12 jam',duration:'12–24 jam',iconName:'KeyRound',popular:true,features:['Mobil bersih dan terawat','Serah terima dengan checklist','Pilihan 12 atau 24 jam','Booking dan konfirmasi via WhatsApp'],bookingMessage:'Halo Sahabat Rent Car, saya ingin rental lepas kunci.'},
    {id:'rental-driver',name:'Rental + Driver',category:'Dengan Driver',description:'Perjalanan lebih santai dengan driver berpengalaman untuk wisata, meeting, keluarga, dan perjalanan luar kota.',startingPrice:450000,priceNote:'Mulai / hari',duration:'Harian',iconName:'UserRound',popular:true,features:['Driver berpengalaman','Mobil dan bahan bakar sesuai paket','Cocok untuk perjalanan wisata','Jadwal fleksibel'],bookingMessage:'Halo Sahabat Rent Car, saya ingin rental mobil dengan driver.'},
    {id:'antar-jemput',name:'Antar Jemput Bandara & Stasiun',category:'Transfer',description:'Layanan transfer terjadwal dari dan menuju bandara atau stasiun dengan penjemputan sesuai titik yang disepakati.',startingPrice:300000,priceNote:'Mulai / perjalanan',duration:'Sesuai jadwal',iconName:'Plane',popular:false,features:['Driver menunggu sesuai jadwal','Bisa bawa bagasi keluarga','Konfirmasi titik jemput','Reservasi jauh hari'],bookingMessage:'Halo Sahabat Rent Car, saya ingin booking antar jemput.'},
    {id:'rental-mingguan',name:'Rental Mingguan & Bulanan',category:'Jangka Panjang',description:'Pilihan hemat untuk kebutuhan proyek, operasional kantor, mudik panjang, atau penggunaan sementara.',startingPrice:1500000,priceNote:'Mulai / minggu',duration:'7 hari+',iconName:'CalendarDays',popular:false,features:['Harga paket lebih hemat','Unit dapat dipilih sesuai kebutuhan','Jadwal servis terkontrol','Kontrak rental jelas'],bookingMessage:'Halo Sahabat Rent Car, saya ingin konsultasi rental mingguan/bulanan.'}
  ],
  pricingPackages:[
    {id:'rental-citycar',name:'City Car',tagline:'Agya / Brio / Calya untuk mobilitas dalam kota dan perjalanan ringan.',price:250000,period:'12 jam',popular:false,badge:'Hemat',features:[{text:'Unit bersih & terawat',included:true},{text:'Gratis pengecekan sebelum serah terima',included:true},{text:'Lepas kunci',included:true},{text:'Driver',included:false}],bookingMessage:'Halo, saya ingin cek City Car.'},
    {id:'rental-mpv',name:'MPV Keluarga',tagline:'Avanza / Xpander / Ertiga untuk keluarga, mudik, dan perjalanan luar kota.',price:350000,period:'24 jam',popular:true,badge:'Paling Favorit',features:[{text:'Kapasitas keluarga',included:true},{text:'Unit bersih & terawat',included:true},{text:'Lepas kunci',included:true},{text:'Driver tersedia sebagai add-on',included:true}],bookingMessage:'Halo, saya ingin cek MPV keluarga.'},
    {id:'rental-suv-driver',name:'SUV + Driver',tagline:'Pilihan nyaman untuk perjalanan bisnis, wisata Pangandaran, dan rute luar kota.',price:650000,period:'hari',popular:false,badge:'Nyaman',features:[{text:'SUV terawat',included:true},{text:'Driver berpengalaman',included:true},{text:'Konsultasi rute perjalanan',included:true},{text:'Bahan bakar sesuai paket',included:true}],bookingMessage:'Halo, saya ingin cek paket SUV + driver.'}
  ],
  whyChooseUs:[
    {id:'rw-1',title:'Armada Terawat',description:'Setiap unit menjalani pemeriksaan kondisi dan kebersihan sebelum diserahkan kepada pelanggan.',iconName:'ShieldCheck'},
    {id:'rw-2',title:'Harga Transparan',description:'Harga sewa, deposit, durasi, dan ketentuan penggunaan dijelaskan sebelum booking.',iconName:'BadgeCheck'},
    {id:'rw-3',title:'Booking Cepat via WhatsApp',description:'Cukup kirim tanggal, tujuan, dan pilihan mobil. Admin membantu mengecek unit yang tersedia.',iconName:'MessageCircle'},
    {id:'rw-4',title:'Pilihan Lepas Kunci / Driver',description:'Sesuaikan pengalaman berkendara dengan kebutuhan perjalanan Anda.',iconName:'Users'},
    {id:'rw-5',title:'Dokumen & Checklist Jelas',description:'Serah terima menggunakan checklist kondisi kendaraan agar kedua pihak sama-sama nyaman.',iconName:'FileCheck'},
    {id:'rw-6',title:'Siap Perjalanan Luar Kota',description:'Tersedia paket untuk wisata dan kebutuhan perjalanan antar kota dengan rute yang fleksibel.',iconName:'Map'}
  ],
  gallery:[
    {id:'rgal-1',title:'Armada MPV Keluarga',category:'Armada',imageUrl:'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80',description:'MPV nyaman untuk keluarga dan perjalanan luar kota.'},
    {id:'rgal-2',title:'City Car Siap Jalan',category:'Armada',imageUrl:'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80',description:'City car praktis untuk mobilitas harian.'},
    {id:'rgal-3',title:'Serah Terima Kendaraan',category:'Layanan',imageUrl:'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1000&q=80',description:'Checklist kendaraan dilakukan sebelum dan sesudah rental.'},
    {id:'rgal-4',title:'Perjalanan Wisata',category:'Trip',imageUrl:'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1000&q=80',description:'Armada siap menemani perjalanan wisata keluarga.'}
  ],
  testimonials:[
    {id:'rtest-1',name:'Rina Amelia',roleOrVehicle:'Keluarga • MPV',rating:5,comment:'Bookingnya cepat, admin responsif, mobil bersih dan proses serah terimanya jelas. Cocok untuk keluarga yang mau jalan ke Pangandaran.',avatarUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'},
    {id:'rtest-2',name:'Fajar Nugraha',roleOrVehicle:'Perjalanan Bisnis • City Car',rating:5,comment:'Saya butuh mobil mendadak untuk meeting di Ciamis. Admin langsung cek unit dan bantu atur jadwal pengambilan. Sangat praktis.',avatarUrl:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'},
    {id:'rtest-3',name:'Dewi Kartika',roleOrVehicle:'Wisata Keluarga • + Driver',rating:5,comment:'Driver ramah dan tahu rute wisata. Kami tinggal duduk dan menikmati perjalanan. Mobil juga wangi dan nyaman.',avatarUrl:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
  ],
  process:[
    {step:1,title:'Kirim Detail Perjalanan',description:'Sebutkan tanggal, durasi, jumlah penumpang, tujuan, dan pilihan lepas kunci atau driver.',iconName:'MessageCircle'},
    {step:2,title:'Cek Armada & Harga',description:'Admin mengecek unit yang tersedia dan mengirimkan pilihan harga beserta ketentuan rental.',iconName:'Search'},
    {step:3,title:'Booking & Konfirmasi',description:'Pelanggan melakukan booking sesuai kebijakan dan menerima konfirmasi jadwal.',iconName:'CalendarCheck'},
    {step:4,title:'Serah Terima',description:'Kondisi kendaraan, dokumen, dan checklist diperiksa bersama sebelum kendaraan digunakan.',iconName:'FileCheck'},
    {step:5,title:'Kembalikan Kendaraan',description:'Kendaraan dikembalikan sesuai waktu dan lokasi yang disepakati, lalu dilakukan pengecekan akhir.',iconName:'KeyRound'}
  ],
  faqs:[
    {id:'rfaq-1',question:'Apakah tersedia rental lepas kunci?',answer:'Ya. Tersedia unit lepas kunci untuk pelanggan yang memenuhi persyaratan dokumen dan ketentuan rental.',category:'Booking'},
    {id:'rfaq-2',question:'Apakah bisa rental dengan driver?',answer:'Bisa. Paket dengan driver tersedia untuk perjalanan dalam kota maupun luar kota. Kirimkan rute dan jadwal agar admin dapat menghitung paketnya.',category:'Layanan'},
    {id:'rfaq-3',question:'Berapa lama minimal rental?',answer:'Durasi minimum mengikuti jenis unit dan paket. Umumnya tersedia pilihan 12 jam, 24 jam, mingguan, hingga bulanan.',category:'Harga'},
    {id:'rfaq-4',question:'Bagaimana jika ingin membawa mobil ke luar kota?',answer:'Boleh selama rute dan penggunaannya sesuai ketentuan rental. Informasikan tujuan sejak awal agar kami dapat menyiapkan paket yang sesuai.',category:'Ketentuan'},
    {id:'rfaq-5',question:'Bagaimana cara cek mobil yang tersedia?',answer:'Hubungi WhatsApp dan kirim tanggal penggunaan, durasi, jumlah penumpang, serta tipe mobil yang diinginkan. Admin akan mengecek ketersediaan.',category:'Booking'}
  ],
  openingHours:[{day:'Senin - Sabtu',hours:'08.00 - 20.00 WIB'},{day:'Minggu',hours:'09.00 - 17.00 WIB'}],
  socialLinks:[{platform:'instagram',url:'https://instagram.com',label:'Instagram'},{platform:'tiktok',url:'https://tiktok.com',label:'TikTok'},{platform:'google',url:'https://maps.google.com/?q=Banjar+Jawa+Barat',label:'Google Maps'}],
  seo:{title:'Sahabat Rent Car - Rental Mobil Banjar & Sekitarnya',description:'Rental mobil Banjar dengan armada terawat, lepas kunci dan dengan driver. Booking cepat via WhatsApp untuk perjalanan keluarga, bisnis, dan wisata.',keywords:['rental mobil Banjar','sewa mobil Banjar','rental mobil Pangandaran','sewa mobil lepas kunci Banjar','rental mobil dengan driver'],ogImage:heroImage,canonicalUrl:'https://sahabatrentcar.id',schemaType:'LocalBusiness'},
  hero:{layoutVariant:'split',eyebrowText:'SAHABAT RENT CAR',badgeText:'Armada siap untuk perjalanan Anda',headline:'Rental Mobil Nyaman untuk Liburan, Bisnis, dan Perjalanan Keluarga',description:'Pilihan mobil terawat dengan harga jelas, booking cepat via WhatsApp, tersedia lepas kunci maupun dengan driver.',primaryCtaText:'Cek Ketersediaan Mobil',secondaryCtaText:'Lihat Armada & Harga',ctaNote:'Admin siap membantu cek unit • Booking via WhatsApp',trustBadgeText:'⭐ 4.9/5 dari pelanggan Sahabat Rent Car',trustPoints:['Armada terawat & bersih','Harga transparan sebelum booking','Lepas kunci atau dengan driver','Booking cepat via WhatsApp'],showTrustPoints:true,showRatingPill:true,ratingValue:'4.9 / 5.0',ratingLabel:'Ulasan Pelanggan',showBackgroundImageOverlay:true,backgroundImageUrl:heroImage,backgroundImageAlt:'Armada rental mobil Sahabat Rent Car',backgroundImageOpacity:.22,backgroundImageBlur:'md',backgroundBlur:'none',gradientStyle:'brand-glow',backgroundColor:'#F8FAFC',backgroundMode:'light',ambientOrbs:{enabled:true,opacity:.12,blur:'xl'},texture:'dots',textureOpacity:.025,contentAlign:'left',textTheme:'dark'},
  locationSection:{badgeText:'Lokasi Rental',title:'Ambil Mobil di Banjar atau Atur Titik Serah Terima',description:'Hubungi admin untuk konfirmasi titik pengambilan, pengantaran, dan jadwal perjalanan Anda.',addressTitle:'Kantor & Garasi',hoursTitle:'Jam Operasional',openTodayBadgeText:'Booking Hari Ini',supportTitle:'Customer Support',directionsButtonText:'Buka Google Maps',askDirectionsButtonText:'Tanya Admin via WhatsApp',askDirectionsMessage:'Halo Sahabat Rent Car, saya ingin menanyakan lokasi pengambilan mobil.',features:['Serah terima dengan checklist','Bisa konsultasi rute perjalanan','Dukungan booking via WhatsApp']},
  ctaSection:{badgeText:'Sudah Tahu Tanggal Perjalanan?',headline:'Amankan Mobil Sebelum Unit Favorit Terisi',description:'Kirim tanggal, durasi, dan kebutuhan mobil Anda. Kami bantu cek armada yang tersedia dan paket harga yang paling sesuai.',primaryButtonText:'Cek Armada via WhatsApp',secondaryButtonText:'Lihat Pilihan Mobil',disclaimerText:'Ketersediaan unit mengikuti jadwal booking.',customWhatsAppMessage:'Halo Sahabat Rent Car, saya ingin cek ketersediaan mobil untuk perjalanan.'},
  footerSection:{aboutText:'Rental mobil Banjar dengan armada terawat, pilihan lepas kunci dan dengan driver untuk kebutuhan keluarga, bisnis, dan wisata.',quickLinksTitle:'Navigasi',servicesTitle:'Layanan Rental',contactTitle:'Hubungi Kami',copyrightText:'© 2026 Sahabat Rent Car. All rights reserved.',badgeText:'Rental Mobil Banjar',taglineNote:'Nyaman berangkat, tenang di perjalanan.',paymentMethodsTitle:'Pembayaran',paymentMethods:['Transfer Bank','QRIS','Cash']}
};
