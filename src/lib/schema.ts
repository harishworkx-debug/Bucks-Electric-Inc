import { SITE } from '@/lib/site';

const businessId = `${SITE.url}/#business`;

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': businessId,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phoneE164,
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
