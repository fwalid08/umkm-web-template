import { defaultBusiness } from '../business';
import { laundryPreset } from './laundry';
import { barbershopPreset } from './barbershop';
import { restaurantPreset } from './restaurant';
import { BusinessConfig } from '../../types/business';

export interface BusinessPresetItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  accentColor: string;
  config: BusinessConfig;
}

export const availablePresets: BusinessPresetItem[] = [
  {
    id: 'bengkel-jaya-motor',
    name: 'Bengkel Jaya Motor',
    category: 'Bengkel & Otomotif',
    icon: 'Wrench',
    accentColor: '#DC2626',
    config: defaultBusiness,
  },
  {
    id: 'klin-laundry-express',
    name: 'Klin Laundry Express',
    category: 'Laundry & Kiloan',
    icon: 'Shirt',
    accentColor: '#0284C7',
    config: laundryPreset,
  },
  {
    id: 'barberking-studio',
    name: 'BarberKing Studio',
    category: 'Barbershop & Pria',
    icon: 'Scissors',
    accentColor: '#D97706',
    config: barbershopPreset,
  },
  {
    id: 'dapur-sedap-nusantara',
    name: 'Dapur Sedap Nusantara',
    category: 'Restoran & Kuliner',
    icon: 'Utensils',
    accentColor: '#16A34A',
    config: restaurantPreset,
  },
];
