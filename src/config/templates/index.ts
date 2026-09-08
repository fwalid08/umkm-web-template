import { BusinessConfig } from '../../types/business';
import { bengkelTemplate } from './bengkel';
import { laundryTemplate } from './laundry';
import { barbershopTemplate } from './barbershop';
import { restaurantTemplate } from './restaurant';
import { jasaTemplate } from './jasa';

export { bengkelTemplate, laundryTemplate, barbershopTemplate, restaurantTemplate, jasaTemplate };

export interface TemplateDefinition {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  accentColor: string;
  heroVariant: 'centered' | 'card-left' | 'card-right' | 'background-focus' | 'minimal' | 'editorial' | 'image-split' | 'floating-card' | 'spotlight' | 'bottom-bar';
  template: BusinessConfig;
}

export const templateList: TemplateDefinition[] = [
  {
    id: 'bengkel',
    name: 'Bengkel Sepeda Motor',
    category: 'Otomotif & Servis',
    description: 'Template realistis untuk bengkel motor/mobil, servis injeksi, ganti oli, CVT, dan perbaikan bergaransi.',
    icon: 'Wrench',
    accentColor: '#DC2626',
    heroVariant: 'card-left',
    template: bengkelTemplate,
  },
  {
    id: 'laundry',
    name: 'Laundry Kiloan & Dry Clean',
    category: 'Jasa Cuci & Pakaian',
    description: 'Template untuk laundry kiloan, satuan, bed cover, sepatu, express, serta layanan antar jemput.',
    icon: 'Sparkles',
    accentColor: '#0284C7',
    heroVariant: 'centered',
    template: laundryTemplate,
  },
  {
    id: 'barbershop',
    name: 'Barbershop & Men’s Studio',
    category: 'Potong Rambut & Grooming',
    description: 'Template barbershop modern dengan layanan haircut, beard trim, grooming, paket membership, dan booking.',
    icon: 'Scissors',
    accentColor: '#D97706',
    heroVariant: 'card-right',
    template: barbershopTemplate,
  },
  {
    id: 'restaurant',
    name: 'Restoran, Cafe & Katering',
    category: 'Kuliner & F&B',
    description: 'Template untuk rumah makan, cafe, saung, menu unggulan, reservasi meja, takeaway, dan katering.',
    icon: 'Utensils',
    accentColor: '#16A34A',
    heroVariant: 'background-focus',
    template: restaurantTemplate,
  },
  {
    id: 'jasa',
    name: 'Jasa Panggilan & Service AC',
    category: 'Home & Maintenance Service',
    description: 'Template untuk teknisi AC, listrik, plumbing, perbaikan rumah, dan jasa panggilan dengan booking WhatsApp.',
    icon: 'Droplets',
    accentColor: '#2563EB',
    heroVariant: 'card-left',
    template: jasaTemplate,
  },
];

export const getTemplateById = (id: string): BusinessConfig => templateList.find((t) => t.id === id)?.template || bengkelTemplate;
