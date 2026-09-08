import type {
  CtaSectionConfig,
  HeroConfig,
  IndustryPresetId,
  NavigationConfig,
  SectionId,
  WebsiteTemplateId,
} from '../types/business';

export interface WebsitePreset {
  id: WebsiteTemplateId;
  label: string;
  description: string;
  order: SectionId[];
  hero?: Partial<HeroConfig>;
  navigation?: Partial<NavigationConfig>;
  ctaSection?: Partial<CtaSectionConfig>;
  disabledSections?: SectionId[];
}

export interface IndustryPreset {
  id: IndustryPresetId;
  label: string;
  description: string;
  order: SectionId[];
  hero?: Partial<HeroConfig>;
  navigation?: Partial<NavigationConfig>;
  ctaSection?: Partial<CtaSectionConfig>;
  disabledSections?: SectionId[];
}

export const websiteTemplates: Record<WebsiteTemplateId, WebsitePreset> = {
  'modern-local-business': {
    id: 'modern-local-business',
    label: 'Modern Local Business',
    description: 'Conversion-focused layout for local service businesses.',
    order: ['services', 'whyChooseUs', 'stats', 'testimonials', 'process', 'pricing', 'about', 'gallery', 'faq', 'location', 'cta'],
    hero: { layoutVariant: 'split', backgroundMode: 'dark', gradientStyle: 'dark-slate', showTrustPoints: true, showRatingPill: true },
    navigation: { showMobileBottomNav: true, topNavMaxVisible: 5 },
    ctaSection: { primaryButtonText: 'Hubungi Kami', secondaryButtonText: 'Lihat Lokasi' },
  },
  'service-first': {
    id: 'service-first',
    label: 'Service First',
    description: 'Prioritizes services, pricing and booking intent.',
    order: ['services', 'pricing', 'process', 'whyChooseUs', 'testimonials', 'stats', 'about', 'gallery', 'faq', 'location', 'cta'],
    hero: { layoutVariant: 'centered', backgroundMode: 'dark', gradientStyle: 'brand-glow', contentAlign: 'center' },
    navigation: { showMobileBottomNav: true, topNavMaxVisible: 5 },
    ctaSection: { primaryButtonText: 'Pesan Sekarang', secondaryButtonText: 'Lihat Layanan' },
  },
};

export const industryPresets: Record<IndustryPresetId, IndustryPreset> = {
  automotive: {
    id: 'automotive',
    label: 'Automotive',
    description: 'Designed around services, trust, process and booking.',
    order: ['services', 'whyChooseUs', 'stats', 'testimonials', 'process', 'pricing', 'about', 'gallery', 'faq', 'location', 'cta'],
    hero: { layoutVariant: 'split', backgroundMode: 'dark', gradientStyle: 'dark-slate', showFloatingStats: true, showTrustPoints: true, showRatingPill: true },
    navigation: { ctaButtonText: 'Booking Servis', showMobileBottomNav: true, topNavMaxVisible: 5 },
    ctaSection: { primaryButtonText: 'Booking Servis via WhatsApp', secondaryButtonText: 'Lihat Lokasi' },
  },
  restaurant: {
    id: 'restaurant',
    label: 'Restaurant',
    description: 'Prioritizes offerings, social proof, gallery and location.',
    order: ['services', 'gallery', 'testimonials', 'stats', 'about', 'faq', 'location', 'cta', 'pricing', 'whyChooseUs', 'process'],
    hero: { layoutVariant: 'card-overlay', backgroundMode: 'dark', gradientStyle: 'sunset-radiant', contentAlign: 'center', showRatingPill: true },
    navigation: { ctaButtonText: 'Pesan Sekarang', showMobileBottomNav: true, topNavMaxVisible: 4 },
    ctaSection: { primaryButtonText: 'Pesan Sekarang', secondaryButtonText: 'Lihat Lokasi' },
    disabledSections: ['pricing', 'process'],
  },
  retail: {
    id: 'retail',
    label: 'Retail',
    description: 'Prioritizes offerings, proof, gallery and store location.',
    order: ['gallery', 'services', 'whyChooseUs', 'testimonials', 'stats', 'about', 'faq', 'location', 'cta', 'pricing', 'process'],
    hero: { layoutVariant: 'split', backgroundMode: 'light', gradientStyle: 'clean-subtle', showRatingPill: true },
    navigation: { ctaButtonText: 'Lihat Produk', showMobileBottomNav: true, topNavMaxVisible: 5 },
    ctaSection: { primaryButtonText: 'Belanja Sekarang', secondaryButtonText: 'Kunjungi Toko' },
    disabledSections: ['process'],
  },
  professional: {
    id: 'professional',
    label: 'Professional Services',
    description: 'Trust-first structure for consultants and professional services.',
    order: ['about', 'whyChooseUs', 'services', 'stats', 'testimonials', 'process', 'faq', 'location', 'cta', 'pricing', 'gallery'],
    hero: { layoutVariant: 'centered', backgroundMode: 'light', gradientStyle: 'clean-subtle', contentAlign: 'center', showTrustPoints: true },
    navigation: { ctaButtonText: 'Konsultasi', showMobileBottomNav: true, topNavMaxVisible: 5 },
    ctaSection: { primaryButtonText: 'Jadwalkan Konsultasi', secondaryButtonText: 'Hubungi Kami' },
  },
};

export function getWebsiteTemplate(id?: WebsiteTemplateId): WebsitePreset {
  return websiteTemplates[id || 'modern-local-business'];
}

export function getIndustryPreset(id?: IndustryPresetId): IndustryPreset | undefined {
  return id ? industryPresets[id] : undefined;
}

export function resolvePresetOrder(templateId?: WebsiteTemplateId, industryId?: IndustryPresetId): SectionId[] {
  const template = getWebsiteTemplate(templateId);
  const industry = getIndustryPreset(industryId);
  return [...(industry?.order || template.order)];
}
