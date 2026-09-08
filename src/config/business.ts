import { BusinessConfig } from '../types/business';
import { themeConfig } from './theme';
import { navigationConfig } from './navigation';
import { seoConfig } from './seo';
import { servicesConfig, pricingConfig } from './services';
import { testimonialsConfig } from './testimonials';
import { galleryConfig } from './gallery';
import { faqConfig } from './faq';
import { locationConfig } from './location';
import { ctaConfig } from './cta';
import { footerConfig } from './footer';
import { heroConfig } from './hero';

/**
 * ==============================================================================
 * CLIENT WEBSITE CONFIGURATION (Single Source of Truth)
 * ==============================================================================
 * To launch a new client website, you only need to edit:
 * 1. src/config/business.ts (This file - Identity, Contact, About, Stats)
 * 2. src/config/theme.ts (Brand Colors & Hero Variant)
 *
 * For deeper customization, you can also modify services.ts, testimonials.ts,
 * gallery.ts, and faq.ts without ever touching UI components!
 */
export const businessConfig: BusinessConfig = {
  id: 'bengkel-jaya-motor',
  name: 'Bengkel Jaya Motor',
  industry: 'Bengkel Sepeda Motor',
  tagline: 'Spesialis Servis Injeksi & Matic Bergaransi',
  
  // Hero Copywriting
  heroHeadline: 'Solusi Terpercaya Perawatan Motor Anda di Kota Banjar',
  heroDescription: 'Layanan servis motor profesional, kalibrasi sistem injeksi, dan perawatan CVT matic anti-gredek. Dikerjakan oleh mekanik bersertifikat dengan suku cadang original dan garansi pengerjaan 14 hari.',
  primaryCtaText: 'Booking Servis via WhatsApp',
  secondaryCtaText: 'Lihat Daftar Layanan',
  
  // Key Imagery
  heroImageUrl: 'https://images.unsplash.com/photo-1597762470488-3877b1f538c6?auto=format&fit=crop&w=1200&q=80',
  aboutImageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80',
  ctaBannerImageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
  
  // Section Visibility (Toggle on/off based on client needs)
  sections: {
    stats: true,
    about: true,
    services: true,
    pricing: true,
    whyChooseUs: true,
    gallery: true,
    testimonials: true,
    process: true,
    faq: true,
    location: true,
    cta: true,
  },

  // Contact Information
  contact: {
    phone: '0812-3456-7890',
    whatsappNumber: '6281234567890',
    email: 'kontak@bengkeljayamotor.com',
    address: 'Jl. Raya Banjar - Ciamis No. 128, Mekarsari',
    city: 'Banjar',
    province: 'Jawa Barat',
    postalCode: '46322',
    googleMapsUrl: 'https://maps.google.com/?q=Banjar+Jawa+Barat',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2713843510526!2d108.53676837499988!3d-7.36832279264096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e659c026d36e2eb%3A0xe543e3cb89fa3b3e!2sKota%20Banjar%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
    defaultWhatsAppMessage: 'Halo Bengkel Jaya Motor, saya ingin konsultasi atau booking jadwal servis motor saya.',
  },

  // About the Business
  aboutText: {
    p1: 'Berdiri sejak tahun 2014, Bengkel Jaya Motor berkomitmen memberikan layanan perawatan sepeda motor yang jujur, transparan, dan berstandar bengkel resmi bagi masyarakat Banjar dan sekitarnya.',
    p2: 'Kami didukung oleh mekanik berpengalaman yang menguasai teknologi motor karburator konvensional hingga motor injeksi modern, motor matic premium, dan motor sport.',
    highlights: [
      'Pengecekan komputer OBD Scanner untuk motor injeksi',
      'Tidak ada penggantian suku cadang tanpa persetujuan pemilik',
      'Sparepart lama rusak selalu dikembalikan ke konsumen',
      'Ruang tunggu nyaman ber-AC, free Wi-Fi, dan kopi hangat gratis',
    ],
    experienceYears: 10,
  },

  // Key Statistics
  statistics: [
    {
      id: 'stat-1',
      value: '10+',
      label: 'Tahun Pengalaman',
      description: 'Melayani pengendara sejak 2014',
    },
    {
      id: 'stat-2',
      value: '1.200+',
      label: 'Motor Diservis / Bulan',
      description: 'Kepercayaan pelanggan setia',
    },
    {
      id: 'stat-3',
      value: '100%',
      label: 'Mekanik Bersertifikat',
      description: 'Standar pelatihan otomotif nasional',
    },
    {
      id: 'stat-4',
      value: '4.9 ★',
      label: 'Rating Google Maps',
      description: 'Dari 450+ ulasan pengendara',
    },
  ],

  // Value Propositions (Why Choose Us)
  whyChooseUs: [
    {
      id: 'why-1',
      title: 'Mekanik Ahli & Bersertifikat',
      description: 'Teknisi kami berpengalaman lebih dari 10 tahun menangani motor bebek, matic, hingga moge sport.',
      iconName: 'Wrench',
    },
    {
      id: 'why-2',
      title: 'Estimasi Biaya Transparan',
      description: 'Biaya jasa dan harga suku cadang diinformasikan di depan. Tidak ada biaya siluman atau ganti part sepihak.',
      iconName: 'CheckCircle',
    },
    {
      id: 'why-3',
      title: 'Suku Cadang 100% Original',
      description: 'Kami hanya menggunakan oli dan suku cadang asli bergaransi dari distributor resmi ternama.',
      iconName: 'ShieldCheck',
    },
    {
      id: 'why-4',
      title: 'Pengerjaan Cepat & Tepat',
      description: 'Peralatan mekanik modern dengan bike lift hidrolik dan scanner injeksi untuk diagnosa yang akurat.',
      iconName: 'Clock',
    },
    {
      id: 'why-5',
      title: 'Garansi Servis 14 Hari',
      description: 'Keluhan masih timbul setelah servis? Kami perbaiki kembali secara gratis tanpa biaya jasa tambahan.',
      iconName: 'Award',
    },
    {
      id: 'why-6',
      title: 'Ruang Tunggu Bersih & Ber-AC',
      description: 'Nikmati Wi-Fi berkecepatan tinggi, colokan charger, dan minuman teh/kopi gratis sambil menunggu motor selesai.',
      iconName: 'Sparkles',
    },
  ],

  // 5-Step Service Process
  process: [
    {
      step: 1,
      title: 'Booking WhatsApp',
      description: 'Hubungi admin via WhatsApp untuk konsultasi keluhan dan tentukan jadwal kedatangan.',
      iconName: 'MessageCircle',
    },
    {
      step: 2,
      title: 'Pemeriksaan Awal',
      description: 'Mekanik melakukan test ride dan cek fisik motor bersama Anda di pit area.',
      iconName: 'Search',
    },
    {
      step: 3,
      title: 'Estimasi & Persetujuan',
      description: 'Anda menerima estimasi rincian biaya dan menyetujui tindakan sebelum pengerjaan dimulai.',
      iconName: 'FileText',
    },
    {
      step: 4,
      title: 'Pengerjaan Presisi',
      description: 'Proses servis dikerjakan dengan peralatan standar presisi tinggi dan suku cadang original.',
      iconName: 'Wrench',
    },
    {
      step: 5,
      title: 'Uji Akhir & Garansi',
      description: 'Pemeriksaan kualitas akhir (QC) dan penyerahan motor beserta nota dan kartu garansi 14 hari.',
      iconName: 'ShieldCheck',
    },
  ],

  // Operating Hours
  openingHours: [
    { day: 'Senin - Jumat', hours: '08.00 - 17.00 WIB' },
    { day: 'Sabtu', hours: '08.00 - 16.00 WIB' },
    { day: 'Minggu', hours: '08.30 - 14.00 WIB' },
  ],

  // Social Links
  socialLinks: [
    { platform: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
    { platform: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
    { platform: 'tiktok', url: 'https://tiktok.com', label: 'TikTok' },
    { platform: 'google', url: 'https://maps.google.com', label: 'Google Maps' },
  ],

  // Aggregated Modules
  theme: themeConfig,
  navigation: navigationConfig,
  seo: seoConfig,
  services: servicesConfig,
  pricingPackages: pricingConfig,
  testimonials: testimonialsConfig,
  gallery: galleryConfig,
  faqs: faqConfig,
  hero: heroConfig,
  locationSection: locationConfig,
  ctaSection: ctaConfig,
  footerSection: footerConfig,
};

export default businessConfig;
