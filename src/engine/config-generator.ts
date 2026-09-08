import type { BusinessConfig, IndustryPresetId, WebsiteTemplateId } from '../types/business';
import { getIndustryPreset, getWebsiteTemplate } from '../config/presets';

export interface BusinessConfigInput {
  name: string;
  industry: string;
  tagline?: string;
  templateId?: WebsiteTemplateId;
  industryPresetId?: IndustryPresetId;
  heroHeadline?: string;
  heroDescription?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  heroImageUrl?: string;
  aboutImageUrl?: string;
}

const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'business';

/** Creates the smallest useful BusinessConfig shell for the website engine. */
export function generateBusinessConfig(input: BusinessConfigInput, base: BusinessConfig): BusinessConfig {
  const template = getWebsiteTemplate(input.templateId);
  const industry = getIndustryPreset(input.industryPresetId);
  const id = slugify(input.name);

  return {
    ...base,
    id,
    name: input.name,
    industry: input.industry,
    tagline: input.tagline || base.tagline,
    templateId: input.templateId || base.templateId || 'modern-local-business',
    industryPresetId: input.industryPresetId || base.industryPresetId,
    heroHeadline: input.heroHeadline || `${input.name}: ${input.tagline || base.tagline}`,
    heroDescription: input.heroDescription || base.heroDescription,
    primaryCtaText: input.primaryCtaText || industry?.navigation?.ctaButtonText || template.navigation?.ctaButtonText || base.primaryCtaText,
    secondaryCtaText: input.secondaryCtaText || base.secondaryCtaText,
    heroImageUrl: input.heroImageUrl || base.heroImageUrl,
    aboutImageUrl: input.aboutImageUrl || base.aboutImageUrl,
    pageSections: {
      ...base.pageSections,
      order: [...(industry?.order || template.order)],
      items: {
        ...base.pageSections?.items,
        ...Object.fromEntries([...(template.disabledSections || []), ...(industry?.disabledSections || [])].map(id => [id, { id, enabled: false }])),
      },
    },
  };
}
