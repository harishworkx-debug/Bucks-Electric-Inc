import { SITE } from '@/lib/site';

const businessId = `${SITE.url}/#business`;

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': businessId,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phoneE164,
  priceRange: '$$',
  image: SITE.heroImage,
  hasMap: SITE.mapsUrl,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.streetAddress,
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.1016669,
    longitude: -103.265889,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '9',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    { '@type': 'City', name: 'Rapid City', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Box Elder', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Black Hawk', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Summerset', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Piedmont', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Hill City', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Keystone', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Sturgis', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Spearfish', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
    { '@type': 'City', name: 'Custer', containedInPlace: { '@type': 'State', name: 'South Dakota' } },
  ],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: "Buck's Electric Inc",
  url: SITE.url,
  logo: `${SITE.url}/favicon.svg`,
  telephone: SITE.phoneE164,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.streetAddress,
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  sameAs: [
    SITE.mapsUrl,
    'https://www.buildzoom.com/contractor/bucks-electric-inc',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { '@id': businessId },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE.url}${path}`,
    provider: { '@id': businessId },
    areaServed: {
      '@type': 'City',
      name: SITE.city,
      containedInPlace: { '@type': 'State', name: 'South Dakota' },
    },
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
