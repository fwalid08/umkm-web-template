import { GalleryItem } from '../types/business';

/**
 * Gallery & Portfolio Configuration
 */
export const galleryCategories: string[] = [
  'Semua',
  'Area Bengkel',
  'Proses Servis',
  'Mekanik Handal',
  'Pelanggan Puas',
];

export const galleryConfig: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Area Pengerjaan & Bike Lift Modern',
    category: 'Area Bengkel',
    imageUrl: 'https://images.unsplash.com/photo-1597762470488-3877b1f538c6?auto=format&fit=crop&w=800&q=80',
    description: 'Peralatan mekanik lengkap dengan bike lift hidrolik untuk pengerjaan yang ergonomis dan aman.',
  },
  {
    id: 'gal-2',
    title: 'Diagnosa Scanner Injeksi Komputer',
    category: 'Proses Servis',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    description: 'Pengecekan sensor ECU dan throttle body dengan scanner OBD modern berakurasi tinggi.',
  },
  {
    id: 'gal-3',
    title: 'Mekanik Berpengalaman & Bersertifikat',
    category: 'Mekanik Handal',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    description: 'Teknisi profesional kami selalu ramah dan siap memberikan penjelasan detail mengenai kondisi motor Anda.',
  },
  {
    id: 'gal-4',
    title: 'Pembersihan Komponen CVT Matic',
    category: 'Proses Servis',
    imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    description: 'Pembersihan tuntas debu kampas ganda dan pemberian pelumas hi-temp anti getar.',
  },
  {
    id: 'gal-5',
    title: 'Etalase Sparepart 100% Original',
    category: 'Area Bengkel',
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    description: 'Stok oli resmi, busi, aki, kampas rem, dan v-belt terjamin keasliannya dari distributor resmi.',
  },
  {
    id: 'gal-6',
    title: 'Serah Terima Motor & Garansi Servis',
    category: 'Pelanggan Puas',
    imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    description: 'Setiap pelanggan menerima kartu garansi servis dan penjelasan hasil perbaikan sebelum meninggalkan bengkel.',
  },
];
