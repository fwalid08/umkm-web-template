import type { BusinessConfig } from '../types/business';

/**
 * Metadata used by the config generator. Keeping editor structure here makes
 * it possible to evolve the generator without coupling it to App.tsx.
 */
export type ConfigEditorTab =
  | 'business'
  | 'theme'
  | 'navigation'
  | 'hero'
  | 'seo'
  | 'services'
  | 'testimonials'
  | 'gallery'
  | 'faq'
  | 'location'
  | 'cta'
  | 'footer';

export type ConfigSectionKey = Exclude<keyof BusinessConfig, 'id'>;

export interface ConfigEditorSection {
  id: ConfigEditorTab;
  label: string;
  configKey?: keyof BusinessConfig;
  group: 'brand' | 'content';
}

export const configEditorSections: ConfigEditorSection[] = [
  { id: 'business', label: 'Business & Content', group: 'brand' },
  { id: 'theme', label: 'Theme & Style', configKey: 'theme', group: 'brand' },
  { id: 'navigation', label: 'Navigation', configKey: 'navigation', group: 'brand' },
  { id: 'hero', label: 'Hero', configKey: 'hero', group: 'brand' },
  { id: 'seo', label: 'SEO', configKey: 'seo', group: 'brand' },
  { id: 'services', label: 'Services & Pricing', configKey: 'services', group: 'content' },
  { id: 'testimonials', label: 'Testimonials', configKey: 'testimonials', group: 'content' },
  { id: 'gallery', label: 'Gallery', configKey: 'gallery', group: 'content' },
  { id: 'faq', label: 'FAQ', configKey: 'faqs', group: 'content' },
  { id: 'location', label: 'Location', configKey: 'locationSection', group: 'content' },
  { id: 'cta', label: 'CTA', configKey: 'ctaSection', group: 'content' },
  { id: 'footer', label: 'Footer', configKey: 'footerSection', group: 'content' },
];

export const configEditorGroups = [
  {
    id: 'brand' as const,
    title: 'Website & Brand',
    items: configEditorSections.filter((section) => section.group === 'brand'),
  },
  {
    id: 'content' as const,
    title: 'Sections & Content',
    items: configEditorSections.filter((section) => section.group === 'content'),
  },
];

/** Maps an editor tab to the actual BusinessConfig property. */
export const configTabToKey: Partial<Record<ConfigEditorTab, keyof BusinessConfig>> =
  Object.fromEntries(
    configEditorSections
      .filter((section): section is ConfigEditorSection & { configKey: keyof BusinessConfig } => Boolean(section.configKey))
      .map((section) => [section.id, section.configKey]),
  );
