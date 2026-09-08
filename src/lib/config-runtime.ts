import { BusinessConfig, HeroConfig } from '../types/business';

/**
 * Keeps the renderer contract simple: the nested `hero` object is the source
 * of truth for Hero content, while legacy top-level fields remain synchronized
 * for presets/export compatibility.
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

  return {
    ...input,
    hero,
    heroHeadline: hero.headline || input.heroHeadline,
    heroDescription: hero.description || input.heroDescription,
    primaryCtaText: hero.primaryCtaText || input.primaryCtaText,
    secondaryCtaText: hero.secondaryCtaText || input.secondaryCtaText,
  };
}
