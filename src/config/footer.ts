import { FooterSectionConfig } from '../types/business';

/**
 * Footer Section Configuration
 * Customize brand summary, navigation labels, accepted payment methods, and legal copyrights.
 */
export const footerConfig: FooterSectionConfig = {
  aboutText: 'Bengkel Jaya Motor berdedikasi menghadirkan solusi perawatan sepeda motor yang jujur, transparan, berstandar bengkel resmi dengan jaminan suku cadang asli dan garansi pengerjaan nyata.',
  quickLinksTitle: 'Navigasi Cepat',
  servicesTitle: 'Layanan Populer',
  contactTitle: 'Hubungi Kami',
  copyrightText: 'Hak Cipta Dilindungi Undang-Undang.',
  badgeText: 'Garansi Pengerjaan 14 Hari',
  taglineNote: 'Didesain dengan standar mobile-first profesional untuk UMKM Indonesia',
  paymentMethodsTitle: 'Metode Pembayaran Diterima',
  paymentMethods: [
    'QRIS (GoPay, OVO, ShopeePay, BCA)',
    'Transfer Bank (BCA, BRI, Mandiri)',
    'Tunai (Cash)',
  ],
};
