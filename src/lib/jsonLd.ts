import { BusinessConfig } from '../types/business';

/**
 * Generate Schema.org JSON-LD for LocalBusiness / AutomotiveBusiness
 */
export function generateLocalBusinessJsonLd(business: BusinessConfig): Record<string, unknown> {
  const schemaType = business.seo.schemaType || 'AutomotiveBusiness';
  
  return {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: business.name,
    image: [business.heroImageUrl, business.aboutImageUrl],
    description: business.seo.description,
    telephone: business.contact.phone,
    url: business.seo.canonicalUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.contact.address,
      addressLocality: business.contact.city,
      addressRegion: business.contact.province,
      postalCode: business.contact.postalCode || '46311',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.3712, // Banjar, Jawa Barat
      longitude: 108.5342,
    },
    openingHoursSpecification: business.openingHours.map((oh) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: mapDayToSchema(oh.day),
      opens: oh.isClosed ? undefined : oh.hours.split(' - ')[0] || '08:00',
      closes: oh.isClosed ? undefined : oh.hours.split(' - ')[1] || '17:00',
    })),
    sameAs: business.socialLinks.map((s) => s.url),
    priceRange: 'Rp 20.000 - Rp 500.000',
  };
}

function mapDayToSchema(dayName: string): string[] {
  const lower = dayName.toLowerCase();
  if (lower.includes('senin - sabtu')) {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }
  if (lower.includes('senin - jumat')) {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  }
  if (lower.includes('minggu')) {
    return ['Sunday'];
  }
  return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
}
