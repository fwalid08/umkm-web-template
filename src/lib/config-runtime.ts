import { BusinessConfig, HeroConfig } from '../types/business';

/**
 * Normalizes the configuration consumed by renderers.
 *
 * The project still keeps a few legacy top-level Hero fields for backwards
 * compatibility with existing presets. The generator edits `business.hero`,
 * so the live preview must receive the Hero values from that same source.
 */
export function normalizeBusinessConfig(input: BusinessConfig): BusinessConfig {
  const hero: HeroConfig | undefined = input.hero
    ? { ...input.hero }
    : undefined;

  if (!hero) return input;

  return {
    ...input,
    hero,
    heroHeadline: hero.headline ?? input.heroHeadline,
    heroDescription: hero.description ?? input.heroDescription,
    primaryCtaText: hero.primaryCtaText ?? input.primaryCtaText,
    secondaryCtaText: hero.secondaryCtaText ?? input.secondaryCtaText,
  };
}
