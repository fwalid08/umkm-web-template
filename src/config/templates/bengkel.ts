import { BusinessConfig } from '../../types/business';
import { businessConfig } from '../business';

/**
 * Template: Bengkel Motor & Otomotif
 * Recommended Sections: Full (all sections enabled)
 * Hero Variant: 'split'
 */
export const bengkelTemplate: BusinessConfig = {
  ...businessConfig,
  id: 'template-bengkel',
  theme: {
    ...businessConfig.theme,
    heroVariant: 'split',
  },
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
};
