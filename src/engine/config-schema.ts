import type { IndustryPresetId, WebsiteTemplateId } from '../types/business';
import type { BusinessConfigInput } from './config-generator';

export const businessConfigInputDefaults: Required<Pick<BusinessConfigInput, 'templateId' | 'industryPresetId'>> = {
  templateId: 'modern-local-business',
  industryPresetId: 'professional',
};

export function normalizeBusinessInput(input: Partial<BusinessConfigInput>): BusinessConfigInput {
  return {
    name: input.name?.trim() || 'Bisnis Baru',
    industry: input.industry?.trim() || 'Local Business',
    tagline: input.tagline?.trim(),
    templateId: input.templateId || businessConfigInputDefaults.templateId,
    industryPresetId: input.industryPresetId || businessConfigInputDefaults.industryPresetId,
    heroHeadline: input.heroHeadline?.trim(),
    heroDescription: input.heroDescription?.trim(),
    primaryCtaText: input.primaryCtaText?.trim(),
    secondaryCtaText: input.secondaryCtaText?.trim(),
    heroImageUrl: input.heroImageUrl?.trim(),
    aboutImageUrl: input.aboutImageUrl?.trim(),
  };
}

export function isValidTemplateId(value?: string): value is WebsiteTemplateId {
  return value === 'modern-local-business' || value === 'service-first';
}

export function isValidIndustryPresetId(value?: string): value is IndustryPresetId {
  return value === 'automotive' || value === 'restaurant' || value === 'retail' || value === 'professional';
}
