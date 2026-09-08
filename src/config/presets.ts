import type { IndustryPresetId, SectionId, WebsiteTemplateId } from '../types/business';

export interface WebsitePreset {
  id: WebsiteTemplateId;
  label: string;
  description: string;
  order: SectionId[];
}

export interface IndustryPreset {
  id: IndustryPresetId;
  label: string;
  description: string;
  order: SectionId[];
  disabledSections?: SectionId[];
}

export const websiteTemplates: Record<WebsiteTemplateId, WebsitePreset> = {
  'modern-local-business': {
    id: 'modern-local-business',
    label: 'Modern Local Business',
    description: 'Conversion-focused layout for local service businesses.',
    order: ['services', 'whyChooseUs', 'stats', 'testimonials', 'process', 'pricing', 'about', 'gallery', 'faq', 'location', 'cta'],
  },
  'service-first': {
    id: 'service-first',
    label: 'Service First',
    description: 'Prioritizes services, pricing and booking intent.',
    order: ['services', 'pricing', 'process', 'whyChooseUs', 'testimonials', 'stats', 'about', 'gallery', 'faq', 'location', 'cta'],
  },
};

export const industryPresets: Record<IndustryPresetId, IndustryPreset> = {
  automotive: {
    id: 'automotive',
    label: 'Automotive',
    description: 'Designed around services, trust, process and booking.',
    order: ['services', 'whyChooseUs', 'stats', 'testimonials', 'process', 'pricing', 'about', 'gallery', 'faq', 'location', 'cta'],
  },
  restaurant: {
    id: 'restaurant',
    label: 'Restaurant',
    description: 'Prioritizes offerings, social proof, gallery and location.',
    order: ['services', 'gallery', 'testimonials', 'stats', 'about', 'faq', 'location', 'cta', 'pricing', 'whyChooseUs', 'process'],
  },
  retail: {
    id: 'retail',
    label: 'Retail',
    description: 'Prioritizes offerings, proof, gallery and store location.',
    order: ['services', 'gallery', 'whyChooseUs', 'testimonials', 'stats', 'about', 'faq', 'location', 'cta', 'pricing', 'process'],
  },
  professional: {
    id: 'professional',
    label: 'Professional Services',
    description: 'Trust-first structure for consultants and professional services.',
    order: ['about', 'whyChooseUs', 'services', 'stats', 'testimonials', 'process', 'faq', 'location', 'cta', 'pricing', 'gallery'],
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
