import React from 'react';
import type { BusinessConfig } from '../types/business';
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

export type SectionId = keyof NonNullable<BusinessConfig['sections']>;

type SectionDefinition = {
  id: SectionId;
  label: string;
  render: (business: BusinessConfig) => React.ReactNode;
  isAvailable?: (business: BusinessConfig) => boolean;
};

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

export function renderSections(business: BusinessConfig) {
  const visibility = business.sections || {};

  return sectionRegistry
    .filter(section => visibility[section.id] !== false)
    .filter(section => section.isAvailable?.(business) ?? true)
    .map(section => <React.Fragment key={section.id}>{section.render(business)}</React.Fragment>);
}
