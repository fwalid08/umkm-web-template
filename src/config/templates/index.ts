import { BusinessConfig } from '../../types/business';
import { bengkelTemplate } from './bengkel';
import { laundryTemplate } from './laundry';
import { barbershopTemplate } from './barbershop';
import { restaurantTemplate } from './restaurant';
import { jasaTemplate } from './jasa';

export {
  bengkelTemplate,
  laundryTemplate,
  barbershopTemplate,
  restaurantTemplate,
  jasaTemplate,
};

export interface TemplateDefinition {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  accentColor: string;
  heroVariant: 'split' | 'centered' | 'card-overlay';
  template: BusinessConfig;
}

export const templateList: TemplateDefinition[] = [
  {
    id: 'bengkel',
    name: 'Bengkel Sepeda Motor',
    category: 'Otomotif & Servis',
    description: 'Template untuk bengkel motor/mobil, servis injeksi, ganti oli, dan perbaikan bergaransi.',
    icon: 'Wrench',
    accentColor: '#DC2626',
    heroVariant: 'split',
    template: bengkelTemplate,
  },
  {
    id: 'laundry',
    name: 'Laundry Kiloan & Dry Clean',
    category: 'Jasa Cuci & Pakaian',
    description: 'Template untuk laundry kiloan, satuan, bed cover, sepatu, dan antar jemput pakaian.',
    icon: 'Sparkles',
    accentColor: '#0284C7',
    heroVariant: 'centered',
    template: laundryTemplate,
  },
  {
    id: 'barbershop',
    name: 'Barbershop & Men’s Studio',
    category: 'Potong Rambut & Grooming',
    description: 'Template barbershop modern dengan lookbook gaya rambut, booking jadwal, dan paket gentleman.',
    icon: 'Scissors',
    accentColor: '#D97706',
    heroVariant: 'card-overlay',
    template: barbershopTemplate,
  },
  {
    id: 'restaurant',
    name: 'Restoran, Cafe & Katering',
    category: 'Kuliner & F&B',
    description: 'Template untuk rumah makan keluarga, saung lesehan, menu unggulan, dan paket prasmanan/katering.',
    icon: 'Utensils',
    accentColor: '#16A34A',
    heroVariant: 'centered',
    template: restaurantTemplate,
  },
  {
    id: 'jasa',
    name: 'Jasa Panggilan & Service AC',
    category: 'Home & Maintenance Service',
    description: 'Template untuk teknisi AC, perbaikan rumah, teknisi listrik, dan jasa panggilan langsung ke lokasi.',
    icon: 'Droplets',
    accentColor: '#2563EB',
    heroVariant: 'split',
    template: jasaTemplate,
  },
];

export const getTemplateById = (id: string): BusinessConfig => {
  const match = templateList.find((t) => t.id === id);
  return match ? match.template : bengkelTemplate;
};
