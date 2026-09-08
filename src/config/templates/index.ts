import type { BusinessConfig, HeroLayoutVariant, NavigationConfig, GalleryItem, ServiceItem, TestimonialItem } from '../../types/business';
import { bengkelTemplate } from './bengkel';
import { laundryTemplate } from './laundry';
import { barbershopTemplate } from './barbershop';
import { restaurantTemplate } from './restaurant';
import { jasaTemplate } from './jasa';
import { rentalMobilTemplate } from './rental-mobil';
import { softwareTemplate } from './software';

export { bengkelTemplate, laundryTemplate, barbershopTemplate, restaurantTemplate, jasaTemplate, rentalMobilTemplate, softwareTemplate };

export interface TemplateDefinition {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  accentColor: string;
  heroVariant: HeroLayoutVariant;
  template: BusinessConfig;
}

const nav = (brandName: string, links: NavigationConfig['links']): NavigationConfig => ({
  brandName,
  brandSubtitle: 'Solusi terpercaya untuk kebutuhan Anda',
  showTopMicroBar: true,
  showMobileBottomNav: true,
  ctaButtonText: 'Booking WhatsApp',
  topNavMaxVisible: 5,
  links,
});

const hero = (
  template: BusinessConfig,
  variant: HeroLayoutVariant,
  headline: string,
  description: string,
  image: string,
): BusinessConfig['hero'] => ({
  ...template.hero,
  layoutVariant: variant,
  headline,
  description,
  primaryCtaText: template.primaryCtaText,
  secondaryCtaText: template.secondaryCtaText,
  backgroundImageUrl: image,
  backgroundImageOpacity: 0.22,
  backgroundImageBlur: 'md',
  backgroundBlur: 'none',
  showBackgroundImageOverlay: true,
  showTrustPoints: true,
  showRatingPill: true,
  trustPoints: template.hero?.trustPoints || ['Pelayanan profesional', 'Harga transparan', 'Booking cepat via WhatsApp'],
  ratingValue: template.hero?.ratingValue || '4.9 / 5.0',
  ratingLabel: template.hero?.ratingLabel || 'Ulasan pelanggan',
});

const make = (
  template: BusinessConfig,
  variant: HeroLayoutVariant,
  navigation: NavigationConfig,
  overrides: Partial<BusinessConfig> = {},
): BusinessConfig => ({
  ...template,
  ...overrides,
  hero: hero(
    { ...template, ...overrides },
    variant,
    overrides.hero?.headline || template.hero?.headline || template.heroHeadline,
    overrides.hero?.description || template.hero?.description || template.heroDescription,
    overrides.hero?.backgroundImageUrl || overrides.heroImageUrl || template.heroImageUrl,
  ),
  theme: { ...template.theme, ...overrides.theme, heroVariant: variant },
  navigation,
});

// Shared sample content used by the industry presets below.
const bengkelServices: ServiceItem[] = [
  { id: 'bm-service-1', name: 'Servis Rutin & Tune Up', category: 'Servis Berkala', description: 'Pemeriksaan mesin, oli, busi, rem, kelistrikan, dan penyetelan agar motor tetap responsif.', startingPrice: 75000, priceNote: 'Jasa mulai', duration: '60–90 menit', iconName: 'Wrench', popular: true, features: ['Checklist kondisi motor', 'Pemeriksaan oli & busi', 'Setelan mesin', 'Rekomendasi perawatan'], bookingMessage: 'Halo Bengkel Jaya Motor, saya ingin booking servis rutin.' },
  { id: 'bm-service-2', name: 'Servis CVT Motor Matic', category: 'Matic', description: 'Pembersihan rumah CVT, pengecekan roller, v-belt, kampas ganda, dan komponen penggerak.', startingPrice: 85000, priceNote: 'Jasa mulai', duration: '60–90 menit', iconName: 'Settings', popular: true, features: ['Bongkar & bersihkan CVT', 'Cek roller & v-belt', 'Cek kampas ganda', 'Test ride setelah servis'], bookingMessage: 'Halo Bengkel Jaya Motor, saya ingin booking servis CVT.' },
  { id: 'bm-service-3', name: 'Scan Injeksi & Diagnosa', category: 'Injeksi', description: 'Diagnosa motor injeksi menggunakan scanner untuk membaca error dan membantu menemukan sumber masalah.', startingPrice: 50000, priceNote: 'Per pemeriksaan', duration: '30–45 menit', iconName: 'Search', popular: false, features: ['Scan ECU', 'Baca kode error', 'Reset sesuai kebutuhan', 'Laporan hasil pemeriksaan'], bookingMessage: 'Halo Bengkel Jaya Motor, saya ingin cek injeksi motor.' },
  { id: 'bm-service-4', name: 'Ganti Oli & Pemeriksaan Cepat', category: 'Maintenance', description: 'Paket praktis untuk penggantian oli sekaligus pemeriksaan dasar sebelum motor kembali digunakan.', startingPrice: 45000, priceNote: 'Jasa belum termasuk oli', duration: '20–30 menit', iconName: 'Droplets', popular: false, features: ['Ganti oli', 'Cek rem', 'Cek tekanan ban', 'Cek lampu & aki'], bookingMessage: 'Halo Bengkel Jaya Motor, saya mau ganti oli.' },
  { id: 'bm-service-5', name: 'Servis Rem & Kaki-Kaki', category: 'Safety', description: 'Pengecekan dan perbaikan sistem pengereman, bearing, shock, serta komponen kaki-kaki motor.', startingPrice: 65000, priceNote: 'Jasa mulai', duration: '45–120 menit', iconName: 'ShieldCheck', popular: false, features: ['Cek kampas rem', 'Cek cakram', 'Cek bearing', 'Cek shock absorber'], bookingMessage: 'Halo Bengkel Jaya Motor, saya ingin cek rem dan kaki-kaki.' },
];

const bengkelGallery: GalleryItem[] = [
  { id: 'bg-1', title: 'Pit Servis Motor', category: 'Fasilitas', imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=85', description: 'Area kerja untuk servis rutin dan perbaikan kendaraan.' },
  { id: 'bg-2', title: 'Teknisi Melakukan Diagnosa', category: 'Aktivitas', imageUrl: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1000&q=85', description: 'Pemeriksaan dilakukan sebelum mekanik memberikan estimasi.' },
  { id: 'bg-3', title: 'Motor Setelah Servis', category: 'Hasil', imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=85', description: 'Motor dicek kembali sebelum diserahkan kepada pelanggan.' },
  { id: 'bg-4', title: 'Peralatan Workshop', category: 'Fasilitas', imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85', description: 'Peralatan kerja mendukung proses diagnosa dan perawatan.' },
];

const bengkelTestimonials: TestimonialItem[] = [
  { id: 'bt-1', name: 'Rizky Pratama', roleOrVehicle: 'Honda Vario 160', rating: 5, comment: 'Mekaniknya menjelaskan kerusakan dengan detail dan tidak langsung menyuruh ganti part. Biayanya juga jelas dari awal.', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
  { id: 'bt-2', name: 'Nadia Putri', roleOrVehicle: 'Yamaha NMAX', rating: 5, comment: 'Servis CVT selesai sesuai estimasi. Motor langsung terasa lebih halus dan adminnya responsif saat booking.', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
  { id: 'bt-3', name: 'Andi Kurniawan', roleOrVehicle: 'Honda Beat', rating: 5, comment: 'Saya suka karena sparepart lama dikembalikan dan mekanik menunjukkan komponen yang perlu diganti. Transparan.', avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80' },
];

const laundryServices: ServiceItem[] = [
  { id: 'laundry-1', name: 'Cuci + Setrika Kiloan', category: 'Kiloan', description: 'Cuci, kering, setrika uap, lipat, dan packing rapi untuk pakaian harian keluarga.', startingPrice: 8000, priceNote: 'Per kg • min. 3 kg', duration: '2 hari', iconName: 'Sparkles', popular: true, features: ['Sortir warna', 'Deterjen premium', 'Setrika uap', 'Packing rapi'], bookingMessage: 'Halo Klin Laundry, saya mau order cuci setrika kiloan.' },
  { id: 'laundry-2', name: 'Express 4–6 Jam', category: 'Express', description: 'Solusi pakaian mendesak yang diproses sebagai antrean prioritas dan selesai di hari yang sama.', startingPrice: 15000, priceNote: 'Per kg', duration: '4–6 jam', iconName: 'Zap', popular: true, features: ['Antrean prioritas', 'Cuci & kering', 'Setrika', 'Selesai hari yang sama'], bookingMessage: 'Halo Klin Laundry, saya butuh laundry express hari ini.' },
  { id: 'laundry-3', name: 'Bedcover & Selimut', category: 'Satuan', description: 'Treatment khusus untuk bedcover, selimut tebal, sprei, dan perlengkapan tidur.', startingPrice: 25000, priceNote: 'Mulai / pcs', duration: '1–2 hari', iconName: 'Home', popular: false, features: ['Cuci khusus bahan tebal', 'Pengeringan terkontrol', 'Anti bau apek', 'Packing bersih'], bookingMessage: 'Halo Klin Laundry, saya mau cuci bedcover.' },
  { id: 'laundry-4', name: 'Sepatu & Tas Deep Clean', category: 'Treatment', description: 'Pembersihan detail untuk sneakers, tas, dan perlengkapan berbahan tertentu menggunakan produk sesuai material.', startingPrice: 35000, priceNote: 'Mulai / item', duration: '2–3 hari', iconName: 'Award', popular: false, features: ['Detail cleaning', 'Treatment sol', 'Pengeringan aman', 'Quality check'], bookingMessage: 'Halo Klin Laundry, saya mau deep clean sepatu atau tas.' },
];

const laundryGallery: GalleryItem[] = [
  { id: 'lg-1', title: 'Mesin Cuci Industri', category: 'Fasilitas', imageUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1000&q=85', description: 'Mesin modern untuk proses pencucian yang konsisten.' },
  { id: 'lg-2', title: 'Area Setrika & Packing', category: 'Proses', imageUrl: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1000&q=85', description: 'Pakaian dikeringkan, disetrika, dilipat, lalu dipacking.' },
  { id: 'lg-3', title: 'Pakaian Siap Diantar', category: 'Hasil', imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=85', description: 'Hasil akhir rapi dan siap kembali ke rumah pelanggan.' },
];

const laundryTestimonials: TestimonialItem[] = [
  { id: 'lt-1', name: 'Maya Indriani', roleOrVehicle: 'Ibu Rumah Tangga', rating: 5, comment: 'Pakaian wangi dan lipatannya rapi. Antar jemputnya juga memudahkan karena saya tidak perlu keluar rumah.', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80' },
  { id: 'lt-2', name: 'Dimas Wicaksono', roleOrVehicle: 'Karyawan Swasta', rating: 5, comment: 'Express sangat membantu ketika ada pakaian kantor yang harus dipakai besok. Admin cepat membalas.', avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80' },
  { id: 'lt-3', name: 'Salsa Rahma', roleOrVehicle: 'Mahasiswa', rating: 5, comment: 'Harga jelas dan hasil setrikanya rapi. Paket langganan cocok untuk anak kos.', avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80' },
];

const barberServices: ServiceItem[] = [
  { id: 'barber-1', name: 'Signature Haircut', category: 'Haircut', description: 'Konsultasi bentuk wajah, potongan presisi, wash, styling, dan finishing sesuai karakter rambut.', startingPrice: 45000, priceNote: 'Per sesi', duration: '45 menit', iconName: 'Scissors', popular: true, features: ['Konsultasi gaya', 'Hot towel', 'Wash & styling', 'Finishing'], bookingMessage: 'Halo BarberKing, saya mau booking Signature Haircut.' },
  { id: 'barber-2', name: 'Haircut + Beard Trim', category: 'Grooming', description: 'Potong rambut sekaligus merapikan janggut dan kumis agar tampilan lebih clean.', startingPrice: 65000, priceNote: 'Per sesi', duration: '60 menit', iconName: 'UserRound', popular: true, features: ['Haircut', 'Beard trim', 'Hot towel', 'Styling'], bookingMessage: 'Halo BarberKing, saya mau booking Haircut + Beard.' },
  { id: 'barber-3', name: 'Color & Treatment', category: 'Treatment', description: 'Pewarnaan dan perawatan rambut dengan konsultasi warna serta treatment setelah proses.', startingPrice: 150000, priceNote: 'Mulai', duration: '2–3 jam', iconName: 'Sparkles', popular: false, features: ['Konsultasi warna', 'Coloring', 'Treatment', 'Styling'], bookingMessage: 'Halo BarberKing, saya ingin konsultasi coloring.' },
  { id: 'barber-4', name: 'Kids Haircut', category: 'Family', description: 'Potongan nyaman untuk anak dengan pendekatan santai agar proses tetap menyenangkan.', startingPrice: 35000, priceNote: 'Per sesi', duration: '30 menit', iconName: 'Heart', popular: false, features: ['Konsultasi sederhana', 'Potong rambut', 'Styling ringan'], bookingMessage: 'Halo BarberKing, saya mau booking haircut anak.' },
];

const barberGallery: GalleryItem[] = [
  { id: 'brg-1', title: 'Signature Fade', category: 'Haircut', imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85', description: 'Potongan fade dengan finishing modern.' },
  { id: 'brg-2', title: 'Barber Station', category: 'Studio', imageUrl: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1000&q=85', description: 'Area kerja barber dengan suasana studio yang nyaman.' },
  { id: 'brg-3', title: 'Beard Grooming', category: 'Grooming', imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85', description: 'Detail grooming untuk janggut dan kumis.' },
  { id: 'brg-4', title: 'Styling Session', category: 'Styling', imageUrl: 'https://images.unsplash.com/photo-1521490683712-1c2d0f6f4f4d?auto=format&fit=crop&w=1000&q=85', description: 'Finishing rambut sesuai gaya yang dipilih pelanggan.' },
];

const barberTestimonials: TestimonialItem[] = [
  { id: 'brt-1', name: 'Arif Ramadhan', roleOrVehicle: 'Haircut', rating: 5, comment: 'Barbernya mau konsultasi dulu dan hasil fade-nya presisi. Tempatnya nyaman dan booking gampang.', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
  { id: 'brt-2', name: 'Kevin Maulana', roleOrVehicle: 'Haircut + Beard', rating: 5, comment: 'Beard trim-nya detail dan hot towel bikin rileks. Saya pasti balik lagi.', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
  { id: 'brt-3', name: 'Naufal Akbar', roleOrVehicle: 'Color Treatment', rating: 5, comment: 'Dibantu pilih warna yang cocok dan rambut tetap terasa sehat setelah treatment.', avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80' },
];

const templateList: TemplateDefinition[] = [
  { id: 'bengkel', name: 'Bengkel Motor', category: 'Otomotif', description: 'Template bengkel motor dengan layanan servis, pricing, galeri, dan booking.', icon: 'Wrench', accentColor: '#DC2626', heroVariant: 'split', template: make(bengkelTemplate, 'split', nav('Bengkel Jaya Motor', [{ name: 'Layanan', href: '#services', showInTopNav: true, showInBottomNav: true }, { name: 'Harga', href: '#pricing', showInTopNav: true, showInBottomNav: true }, { name: 'Galeri', href: '#gallery', showInTopNav: true, showInBottomNav: false }, { name: 'Ulasan', href: '#testimonials', showInTopNav: true, showInBottomNav: false }, { name: 'Lokasi', href: '#location', showInTopNav: true, showInBottomNav: true }]), { services: bengkelServices, gallery: bengkelGallery, testimonials: bengkelTestimonials }) },
  { id: 'laundry', name: 'Laundry', category: 'Lifestyle', description: 'Template laundry kiloan dan express dengan fokus kemudahan order.', icon: 'Shirt', accentColor: '#0284C7', heroVariant: 'centered', template: make(laundryTemplate, 'centered', nav('Klin Laundry', [{ name: 'Layanan', href: '#services', showInTopNav: true, showInBottomNav: true }, { name: 'Harga', href: '#pricing', showInTopNav: true, showInBottomNav: true }, { name: 'Galeri', href: '#gallery', showInTopNav: true, showInBottomNav: false }, { name: 'Ulasan', href: '#testimonials', showInTopNav: true, showInBottomNav: false }, { name: 'Lokasi', href: '#location', showInTopNav: true, showInBottomNav: true }]), { services: laundryServices, gallery: laundryGallery, testimonials: laundryTestimonials }) },
  { id: 'barbershop', name: 'Barbershop', category: 'Lifestyle', description: 'Template barbershop modern untuk haircut, grooming, treatment, dan booking.', icon: 'Scissors', accentColor: '#7C3AED', heroVariant: 'card-overlay', template: make(barbershopTemplate, 'card-overlay', nav('BarberKing', [{ name: 'Layanan', href: '#services', showInTopNav: true, showInBottomNav: true }, { name: 'Harga', href: '#pricing', showInTopNav: true, showInBottomNav: true }, { name: 'Galeri', href: '#gallery', showInTopNav: true, showInBottomNav: false }, { name: 'Ulasan', href: '#testimonials', showInTopNav: true, showInBottomNav: false }, { name: 'Lokasi', href: '#location', showInTopNav: true, showInBottomNav: true }]), { services: barberServices, gallery: barberGallery, testimonials: barberTestimonials }) },
  { id: 'restaurant', name: 'Restaurant', category: 'F&B', description: 'Template restoran dengan menu, galeri, ulasan, dan lokasi.', icon: 'Utensils', accentColor: '#D97706', heroVariant: 'centered', template: restaurantTemplate },
  { id: 'jasa', name: 'Jasa Profesional', category: 'Jasa', description: 'Template layanan profesional yang fleksibel untuk berbagai usaha.', icon: 'BriefcaseBusiness', accentColor: '#0F766E', heroVariant: 'split', template: jasaTemplate },
  { id: 'rental-mobil', name: 'Rental Mobil', category: 'Transportasi', description: 'Template rental kendaraan dengan layanan, armada, dan CTA booking.', icon: 'Car', accentColor: '#059669', heroVariant: 'split', template: rentalMobilTemplate },
  { id: 'software', name: 'Software House', category: 'Digital', description: 'Template untuk jasa website, aplikasi, web app, dan software custom.', icon: 'Code2', accentColor: '#4F46E5', heroVariant: 'split', template: softwareTemplate },
];

export { templateList };
