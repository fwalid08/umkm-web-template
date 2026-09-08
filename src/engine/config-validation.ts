import type { BusinessConfig } from '../types/business';
import { getIndustryPreset, getWebsiteTemplate } from '../config/presets';

export interface ConfigValidationIssue {
  path: string;
  message: string;
}

export interface ConfigValidationResult {
  valid: boolean;
  issues: ConfigValidationIssue[];
}

export function validateBusinessConfig(config: BusinessConfig): ConfigValidationResult {
  const issues: ConfigValidationIssue[] = [];

  const requiredStrings: Array<[keyof BusinessConfig, string]> = [
    ['id', 'Business ID is required.'],
    ['name', 'Business name is required.'],
    ['industry', 'Industry is required.'],
    ['tagline', 'Tagline is required.'],
    ['heroHeadline', 'Hero headline is required.'],
  ];

  for (const [key, message] of requiredStrings) {
    if (typeof config[key] !== 'string' || !String(config[key]).trim()) {
      issues.push({ path: key, message });
    }
  }

  if (config.templateId && !getWebsiteTemplate(config.templateId)) {
    issues.push({ path: 'templateId', message: `Unknown website template: ${config.templateId}.` });
  }

  if (config.industryPresetId && !getIndustryPreset(config.industryPresetId)) {
    issues.push({ path: 'industryPresetId', message: `Unknown industry preset: ${config.industryPresetId}.` });
  }

  if (!config.contact?.whatsappNumber) {
    issues.push({ path: 'contact.whatsappNumber', message: 'WhatsApp number is required for conversion CTAs.' });
  }

  if (!config.theme?.primaryColor) {
    issues.push({ path: 'theme.primaryColor', message: 'Primary theme color is required.' });
  }

  if (config.pageSections?.order) {
    const seen = new Set<string>();
    config.pageSections.order.forEach((id, index) => {
      if (seen.has(id)) issues.push({ path: `pageSections.order[${index}]`, message: `Duplicate section: ${id}.` });
      seen.add(id);
    });
  }

  return { valid: issues.length === 0, issues };
}
