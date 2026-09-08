import type { BusinessConfig, CtaSectionConfig, HeroConfig, NavigationConfig } from '../types/business';
import { getIndustryPreset, getWebsiteTemplate } from '../config/presets';

/**
 * Normalizes config at the renderer boundary.
 * Explicit business config always wins over template/industry defaults.
 */
export function normalizeBusinessConfig(input: BusinessConfig): BusinessConfig {
  const template = getWebsiteTemplate(input.templateId);
  const industry = getIndustryPreset(input.industryPresetId);

  const presetHero = {
    ...template.hero,
    ...industry?.hero,
  };
  const fallbackHero = {
    layoutVariant: input.theme.heroVariant || presetHero.layoutVariant || 'split',
    headline: input.heroHeadline,
    description: input.heroDescription,
    primaryCtaText: input.primaryCtaText,
    secondaryCtaText: input.secondaryCtaText,
    backgroundImageUrl: input.heroImageUrl,
  } as HeroConfig;
  const hero: HeroConfig = {
    ...presetHero,
    ...fallbackHero,
    ...input.hero,
    headline: input.hero?.headline || input.heroHeadline,
    description: input.hero?.description || input.heroDescription,
    primaryCtaText: input.hero?.primaryCtaText || input.primaryCtaText,
    secondaryCtaText: input.hero?.secondaryCtaText || input.secondaryCtaText,
    backgroundImageUrl: input.hero?.backgroundImageUrl || input.heroImageUrl,
  };

  const presetNavigation = {
    ...template.navigation,
    ...industry?.navigation,
  } as Partial<NavigationConfig>;
  const navigation: NavigationConfig | undefined = input.navigation
    ? { ...presetNavigation, ...input.navigation, links: input.navigation.links }
    : Object.keys(presetNavigation).length
      ? { ...presetNavigation, links: [] } as NavigationConfig
      : undefined;

  const presetCta = {
    ...template.ctaSection,
    ...industry?.ctaSection,
  } as Partial<CtaSectionConfig>;
  const ctaSection: CtaSectionConfig | undefined = input.ctaSection
    ? { ...presetCta, ...input.ctaSection }
    : Object.keys(presetCta).length
      ? presetCta
      : undefined;

  const presetOrder = industry?.order || template.order;
  const presetDisabled = new Set([
    ...(template.disabledSections || []),
    ...(industry?.disabledSections || []),
  ]);
  const presetItems = Object.fromEntries(
    [...presetDisabled].map(id => [id, { id, enabled: false }]),
  );

  const pageSections = input.pageSections?.order?.length
    ? input.pageSections
    : {
        ...input.pageSections,
        order: presetOrder,
        items: {
          ...presetItems,
          ...input.pageSections?.items,
        },
      };

  return {
    ...input,
    pageSections,
    navigation,
    ctaSection,
    hero,
    heroHeadline: hero.headline || input.heroHeadline,
    heroDescription: hero.description || input.heroDescription,
    primaryCtaText: hero.primaryCtaText || input.primaryCtaText,
    secondaryCtaText: hero.secondaryCtaText || input.secondaryCtaText,
  };
}
