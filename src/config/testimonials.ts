import { TestimonialItem } from '../types/business';

/**
 * Customer Testimonials Configuration
 */
export const testimonialsConfig: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Budi Santoso',
    roleOrVehicle: 'Pemilik Honda Vario 160',
    rating: 5,
    comment: 'CVT Vario saya yang awalnya gredek parah pas tarikan awal langsung sembuh total setelah diservis di Jaya Motor. Mekaniknya jujur, kalau part masih bagus dibilang bagus, nggak asal suruh ganti.',
    date: '3 hari yang lalu',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'testi-2',
    name: 'Rina Marlina',
    roleOrVehicle: 'Pengguna Yamaha Fazzio',
    rating: 5,
    comment: 'Senang banget servis di sini, ruang tunggunya bersih dan mekanik menjelaskan masalah motor dengan bahasa yang gampang dimengerti. Harganya pun transparan tercatat di nota resmi.',
    date: '1 minggu yang lalu',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'testi-3',
    name: 'Ahmad Fauzi',
    roleOrVehicle: 'Driver Ojek Online (Honda Beat)',
    rating: 5,
    comment: 'Buat kami para driver ojol, kecepatan dan biaya itu penting banget. Di Jaya Motor pengerjaan cepat dan tarikan motor langsung enak buat narik seharian. Sangat recommended!',
    date: '2 minggu yang lalu',
    avatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'testi-4',
    name: 'Hendrik Pratama',
    roleOrVehicle: 'Pemilik Kawasaki KLX 150',
    rating: 5,
    comment: 'Penyetelan klep dan karbu/injeksi sangat presisi. Motor enak diajak nanjak. Garansi 14 harinya benar-benar bikin tenang pelanggan. Sukses terus Jaya Motor!',
    date: '1 bulan yang lalu',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
];

export const ratingSummaryConfig = {
  platform: 'Google Reviews',
  rating: 4.9,
  maxRating: 5.0,
  totalReviewsCount: '450+',
};
