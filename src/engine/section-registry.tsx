import React from 'react';
import type { BusinessConfig, SectionId } from '../types/business';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Pricing } from '../components/Pricing';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { Process } from '../components/Process';
import { FAQ } from '../components/FAQ';
import { Location } from '../components/Location';
import { CTA } from '../components/CTA';

export type { SectionId };

type SectionDefinition = {
  id: SectionId;
  label: string;
  render: (business: BusinessConfig) => React.ReactNode;
  isAvailable?: (business: BusinessConfig) => boolean;
};

export const defaultSectionOrder: readonly SectionId[] = [
  'stats', 'about', 'services', 'pricing', 'whyChooseUs', 'gallery',
  'testimonials', 'process', 'faq', 'location', 'cta',
];

export const sectionRegistry: readonly SectionDefinition[] = [
  { id: 'stats', label: 'Stats', render: business => <Stats business={business} />, isAvailable: business => business.statistics.length > 0 },
  { id: 'about', label: 'About', render: business => <About business={business} /> },
  { id: 'services', label: 'Services', render: business => <Services business={business} />, isAvailable: business => business.services.length > 0 },
  { id: 'pricing', label: 'Pricing', render: business => <Pricing business={business} />, isAvailable: business => business.pricingPackages.length > 0 },
  { id: 'whyChooseUs', label: 'Why Choose Us', render: business => <WhyChooseUs business={business} />, isAvailable: business => business.whyChooseUs.length > 0 },
  { id: 'gallery', label: 'Gallery', render: business => <Gallery business={business} />, isAvailable: business => business.gallery.length > 0 },
  { id: 'testimonials', label: 'Testimonials', render: business => <Testimonials business={business} />, isAvailable: business => business.testimonials.length > 0 },
  { id: 'process', label: 'Process', render: business => <Process business={business} />, isAvailable: business => business.process.length > 0 },
  { id: 'faq', label: 'FAQ', render: business => <FAQ business={business} />, isAvailable: business => business.faqs.length > 0 },
  { id: 'location', label: 'Location', render: business => <Location business={business} /> },
  { id: 'cta', label: 'CTA', render: business => <CTA business={business} /> },
];

const registryById = new Map(sectionRegistry.map(section => [section.id, section]));

export function resolveSectionOrder(business: BusinessConfig): SectionId[] {
  const configuredOrder = business.pageSections?.order;
  if (!configuredOrder?.length) return [...defaultSectionOrder];

  const result: SectionId[] = [];
  const seen = new Set<SectionId>();

  for (const id of configuredOrder) {
    if (!registryById.has(id) || seen.has(id)) continue;
    result.push(id);
    seen.add(id);
  }

  for (const id of defaultSectionOrder) {
    if (!seen.has(id)) result.push(id);
  }

  return result;
}

export function isSectionEnabled(business: BusinessConfig, id: SectionId): boolean {
  const item = business.pageSections?.items?.[id];
  if (item?.enabled !== undefined) return item.enabled;
  return business.sections?.[id] !== false;
}

export function renderSections(business: BusinessConfig) {
  return resolveSectionOrder(business)
    .map(id => registryById.get(id))
    .filter((section): section is SectionDefinition => Boolean(section))
    .filter(section => isSectionEnabled(business, section.id))
    .filter(section => section.isAvailable?.(business) ?? true)
    .map(section => <React.Fragment key={section.id}>{section.render(business)}</React.Fragment>);
}
