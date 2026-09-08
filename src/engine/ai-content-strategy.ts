import type { IndustryPresetId } from '../types/business';
import type { ContentTone } from './ai-content';

export interface ContentStrategy {
  tone: ContentTone;
  serviceCount: number;
  faqCount: number;
  includePricing: boolean;
  ctaGoal: 'booking' | 'visit' | 'purchase' | 'consultation';
}

const strategies: Record<IndustryPresetId, ContentStrategy> = {
  automotive: { tone: 'professional', serviceCount: 6, faqCount: 6, includePricing: true, ctaGoal: 'booking' },
  restaurant: { tone: 'friendly', serviceCount: 8, faqCount: 5, includePricing: false, ctaGoal: 'visit' },
  retail: { tone: 'friendly', serviceCount: 8, faqCount: 5, includePricing: true, ctaGoal: 'purchase' },
  professional: { tone: 'professional', serviceCount: 5, faqCount: 6, includePricing: false, ctaGoal: 'consultation' },
};

export function getContentStrategy(industryPresetId?: IndustryPresetId): ContentStrategy {
  return strategies[industryPresetId || 'professional'];
}
