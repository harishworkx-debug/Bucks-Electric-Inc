import { LANDING_IDENTITY } from '../data/landingData';

export interface StandaloneSeoData {
  title: string;
  description: string;
  canonical: string;
  schema: object;
}

export function getStandaloneSeoMetadata(path: string = '/'): StandaloneSeoData {
  const canonicalUrl = `https://www.buckselectricsd.com${path === '/' ? '/' : path}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: LANDING_IDENTITY.displayName,
    description:
      'Licensed residential and commercial electrical contracting, 200-amp panel upgrades, diagnostic troubleshooting, EV charging installations, and code-compliant wiring in Rapid City, SD.',
    url: canonicalUrl,
    telephone: '+1-605-343-5630',
    address: {
      '@type': 'PostalAddress',
      streetAddress: LANDING_IDENTITY.address.street,
      addressLocality: LANDING_IDENTITY.address.city,
      addressRegion: LANDING_IDENTITY.address.state,
      postalCode: LANDING_IDENTITY.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.0538966,
      longitude: -103.2081829,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    areaServed: [
      'Rapid City',
      'Box Elder',
      'Black Hawk',
      'Summerset',
      'Piedmont',
      'Hill City',
      'Keystone',
      'Sturgis',
      'Spearfish',
      'Custer',
    ],
  };

  return {
    title: 'Electrician in Rapid City, SD | Professional Electrical Services & Repairs',
    description:
      'Looking for a licensed electrician in Rapid City, SD? Call (605) 343-5630 for code-compliant panel upgrades, troubleshooting, wiring, EV chargers, and emergency repairs.',
    canonical: canonicalUrl,
    schema,
  };
}
