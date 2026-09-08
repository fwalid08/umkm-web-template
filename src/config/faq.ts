import { FaqItem } from '../types/business';

/**
 * Frequently Asked Questions (FAQ) Configuration
 */
export const faqConfig: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah harus booking terlebih dahulu sebelum datang?',
    answer: 'Tidak wajib, Anda bisa langsung datang (walk-in). Namun, kami sangat menyarankan booking via WhatsApp terlebih dahulu agar Anda mendapatkan slot prioritas dan tidak perlu menunggu antrean panjang.',
    category: 'Reservasi',
  },
  {
    id: 'faq-2',
    question: 'Berapa lama waktu pengerjaan untuk servis berkala?',
    answer: 'Untuk servis ringan berkala dan ganti oli umumnya memakan waktu 30 hingga 45 menit. Untuk servis lengkap injeksi dan CVT matic sekitar 60 menit.',
    category: 'Waktu & Pengerjaan',
  },
  {
    id: 'faq-3',
    question: 'Bagaimana ketentuan garansi servis 14 hari?',
    answer: 'Jika dalam waktu 14 hari setelah servis motor Anda mengalami keluhan yang sama pada komponen yang telah dikerjakan, silakan bawa kembali ke bengkel. Kami periksa dan perbaiki ulang secara GRATIS tanpa biaya jasa tambahan.',
    category: 'Garansi',
  },
  {
    id: 'faq-4',
    question: 'Bolehkah saya membawa oli atau sparepart sendiri dari rumah?',
    answer: 'Tentu saja boleh! Anda hanya dikenakan biaya jasa pemasangan yang sangat terjangkau. Mekanik kami tetap akan memeriksa kesesuaian part demi keamanan berkendara Anda.',
    category: 'Sparepart',
  },
  {
    id: 'faq-5',
    question: 'Metode pembayaran apa saja yang diterima?',
    answer: 'Kami menerima pembayaran Tunai (Cash), Transfer Bank (BCA, BRI, Mandiri), dan pembayaran non-tunai instan melalui QRIS (GoPay, OVO, Dana, ShopeePay, Mobile Banking).',
    category: 'Pembayaran',
  },
  {
    id: 'faq-6',
    question: 'Apakah melayani panggilan darurat jika motor mogok di jalan?',
    answer: 'Ya, kami melayani mekanik darurat panggilan untuk area Kota Banjar dan sekitarnya. Silakan langsung hubungi WhatsApp kami dengan mengirimkan lokasi terkini (share live location).',
    category: 'Layanan Darurat',
  },
];
