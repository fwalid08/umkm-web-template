import type { BusinessConfig, HeroConfig } from '../types/business';
import { resolvePresetOrder } from '../config/presets';

/**
 * Normalizes config at the renderer boundary so older configs remain valid while
 * new template/industry presets can control the default section order.
 */
export function normalizeBusinessConfig(input: BusinessConfig): BusinessConfig {
  const fallback = input.hero || ({
    layoutVariant: input.theme.heroVariant || 'split',
    headline: input.heroHeadline,
    description: input.heroDescription,
    primaryCtaText: input.primaryCtaText,
    secondaryCtaText: input.secondaryCtaText,
    backgroundImageUrl: input.heroImageUrl,
  } as HeroConfig);

  const hero: HeroConfig = {
    ...fallback,
    headline: fallback.headline || input.heroHeadline,
    description: fallback.description || input.heroDescription,
    primaryCtaText: fallback.primaryCtaText || input.primaryCtaText,
    secondaryCtaText: fallback.secondaryCtaText || input.secondaryCtaText,
    backgroundImageUrl: fallback.backgroundImageUrl || input.heroImageUrl,
  };

  const presetOrder = resolvePresetOrder(input.templateId, input.industryPresetId);
  const pageSections = input.pageSections?.order?.length
    ? input.pageSections
    : { ...input.pageSections, order: presetOrder };

  return {
    ...input,
    pageSections,
    hero,
    heroHeadline: hero.headline || input.heroHeadline,
    heroDescription: hero.description || input.heroDescription,
    primaryCtaText: hero.primaryCtaText || input.primaryCtaText,
    secondaryCtaText: hero.secondaryCtaText || input.secondaryCtaText,
  };
}
