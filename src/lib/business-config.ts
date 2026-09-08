import type { BusinessConfig } from '../types/business';

export interface ConfigIssue {
  path: string;
  message: string;
}

const requiredString = (value: unknown, path: string, issues: ConfigIssue[]) => {
  if (typeof value !== 'string' || value.trim() === '') {
    issues.push({ path, message: 'Wajib diisi.' });
  }
};

const requiredArray = (value: unknown, path: string, issues: ConfigIssue[]) => {
  if (!Array.isArray(value)) issues.push({ path, message: 'Harus berupa array.' });
};

/** Lightweight runtime validation before a config is exported or persisted. */
export function validateBusinessConfig(config: BusinessConfig): ConfigIssue[] {
  const issues: ConfigIssue[] = [];

  requiredString(config.id, 'id', issues);
  requiredString(config.name, 'name', issues);
  requiredString(config.industry, 'industry', issues);
  requiredString(config.tagline, 'tagline', issues);
  requiredString(config.heroHeadline, 'heroHeadline', issues);
  requiredString(config.heroDescription, 'heroDescription', issues);
  requiredString(config.heroImageUrl, 'heroImageUrl', issues);
  requiredString(config.aboutImageUrl, 'aboutImageUrl', issues);

  requiredArray(config.services, 'services', issues);
  requiredArray(config.pricingPackages, 'pricingPackages', issues);
  requiredArray(config.gallery, 'gallery', issues);
  requiredArray(config.testimonials, 'testimonials', issues);
  requiredArray(config.process, 'process', issues);
  requiredArray(config.faqs, 'faqs', issues);
  requiredArray(config.openingHours, 'openingHours', issues);
  requiredArray(config.socialLinks, 'socialLinks', issues);

  requiredString(config.contact?.whatsappNumber, 'contact.whatsappNumber', issues);
  requiredString(config.contact?.address, 'contact.address', issues);
  requiredString(config.seo?.title, 'seo.title', issues);
  requiredString(config.seo?.description, 'seo.description', issues);
  requiredString(config.theme?.primaryColor, 'theme.primaryColor', issues);

  return issues;
}

export function isValidBusinessConfig(config: BusinessConfig): boolean {
  return validateBusinessConfig(config).length === 0;
}
