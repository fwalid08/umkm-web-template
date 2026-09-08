import type { IndustryPresetId, WebsiteTemplateId } from '../types/business';

export type ContentTone = 'friendly' | 'professional' | 'premium' | 'casual';

export interface AiContentRequest {
  businessName: string;
  industry: string;
  industryPresetId?: IndustryPresetId;
  templateId?: WebsiteTemplateId;
  tone?: ContentTone;
  language?: 'id' | 'en';
  serviceCount?: number;
  faqCount?: number;
  includePricing?: boolean;
}

export interface GeneratedServiceContent { name: string; description: string; startingPrice?: number; duration?: string; features?: string[]; }
export interface GeneratedFaqContent { question: string; answer: string; }
export interface GeneratedBusinessContent {
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  about: { p1: string; p2: string; highlights: string[] };
  services: GeneratedServiceContent[];
  pricingPackages: Array<{ name: string; tagline: string; price: number; features: string[] }>;
  whyChooseUs: Array<{ title: string; description: string }>;
  testimonials: Array<{ name: string; roleOrVehicle?: string; rating: number; comment: string }>;
  process: Array<{ title: string; description: string }>;
  faqs: GeneratedFaqContent[];
  seo: { title: string; description: string; keywords: string[] };
}

export type AiGenerationStatus = 'draft' | 'accepted' | 'rejected';
export interface AiContentDraft { id: string; request: AiContentRequest; content: GeneratedBusinessContent; status: AiGenerationStatus; createdAt: string; }
