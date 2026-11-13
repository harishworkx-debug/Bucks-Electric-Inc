import { SITE } from '@/lib/site';
import {
  breadcrumbSchema,
  faqPageSchema,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from '@/lib/schema';
import { SERVICES, findService } from '@/data/services';
import { SERVICE_AREAS, findServiceArea } from '@/data/areas';
import { HOME_FAQS } from '@/data/faqs';

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  canonical: string;
  jsonLd: object[];
  image: string;
  noindex?: boolean;
}

export function getAllRoutes(): string[] {
  const staticRoutes = [
    '/',
    '/about-us',
    '/electrical-services',
    '/service-areas',
    '/contact-us',
    '/privacy-policy',
    '/terms-and-conditions',
  ];
  const serviceRoutes = SERVICES.map((s) => `/${s.slug}`);
  const areaRoutes = SERVICE_AREAS.map((a) => `/${a.slug}`);
  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}

export function getPageSeo(pathname: string): PageSeo {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  // 1. Home
  if (cleanPath === '/') {
    return {
      title: 'Bucks Electric | Electrician in Rapid City, SD',
      description:
        'Looking for an experienced electrician in Rapid City, SD? Contact Bucks Electric for professional electrical services, installations, repairs and commercial electrical work.',
      path: '/',
      canonical: `${SITE.url}/`,
      jsonLd: [localBusinessSchema, organizationSchema, websiteSchema, faqPageSchema(HOME_FAQS)],
      image: SITE.heroImage,
    };
  }

  // 2. About Us
  if (cleanPath === '/about-us') {
    return {
      title: 'About Bucks Electric | Electrical Contractor in Rapid City, SD',
      description:
        'Meet Bucks Electric, your local electrical contractor based at 1720A Samco Rd in Rapid City, SD. Learn about our values, master electrician standards, and community dedication.',
      path: '/about-us',
      canonical: `${SITE.url}/about-us`,
      jsonLd: [
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about-us' },
        ]),
        localBusinessSchema,
        organizationSchema,
      ],
      image: SITE.heroImage,
    };
  }

  // 3. Electrical Services Hub
  if (cleanPath === '/electrical-services') {
    return {
      title: 'Electrical Services in Rapid City, SD | Bucks Electric',
      description:
        'Looking for professional electrical services in Rapid City, SD? Bucks Electric provides residential and commercial electrical work, repairs, panel upgrades, and installations.',
      path: '/electrical-services',
      canonical: `${SITE.url}/electrical-services`,
      jsonLd: [
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Electrical Services', path: '/electrical-services' },
        ]),
        localBusinessSchema,
      ],
      image: SITE.heroImage,
    };
  }

  // 4. Service Areas Hub
  if (cleanPath === '/service-areas') {
    return {
      title: 'Electrician Service Areas in Black Hills, SD | Bucks Electric',
      description:
        'Bucks Electric provides residential and commercial electrical services across Rapid City and the Black Hills region. Explore our local service communities.',
      path: '/service-areas',
      canonical: `${SITE.url}/service-areas`,
      jsonLd: [
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
        ]),
        localBusinessSchema,
      ],
      image: SITE.heroImage,
    };
  }

  // 5. Contact Us
  if (cleanPath === '/contact-us') {
    return {
      title: 'Contact Electrician in Rapid City, SD | Bucks Electric',
      description:
        'Need to contact an electrician in Rapid City, SD? Call Bucks Electric at (605) 343-5630 or visit 1720A Samco Rd for consultations, quotes, and emergency dispatch.',
      path: '/contact-us',
      canonical: `${SITE.url}/contact-us`,
      jsonLd: [
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact-us' },
        ]),
        localBusinessSchema,
      ],
      image: SITE.heroImage,
    };
  }

  // 6. Privacy Policy
  if (cleanPath === '/privacy-policy') {
    return {
      title: 'Privacy Policy | Bucks Electric',
      description:
        'How Bucks Electric handles information on this website, including calls and the embedded Google Map.',
      path: '/privacy-policy',
      canonical: `${SITE.url}/privacy-policy`,
      jsonLd: [
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ]),
      ],
      image: SITE.heroImage,
    };
  }

  // 7. Terms & Conditions
  if (cleanPath === '/terms-and-conditions') {
    return {
      title: 'Terms and Conditions | Bucks Electric',
      description:
        'Terms for using the Bucks Electric website in Rapid City, South Dakota.',
      path: '/terms-and-conditions',
      canonical: `${SITE.url}/terms-and-conditions`,
      jsonLd: [
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms and Conditions', path: '/terms-and-conditions' },
        ]),
      ],
      image: SITE.heroImage,
    };
  }

  // 8. Dynamic Service Page
  const slug = cleanPath.slice(1);
  const service = findService(slug);
  if (service) {
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      path: `/${service.slug}`,
      canonical: `${SITE.url}/${service.slug}`,
      jsonLd: [
        serviceSchema({
          name: service.name,
          description: service.metaDescription,
          path: `/${service.slug}`,
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Electrical Services', path: '/electrical-services' },
          { name: service.name, path: `/${service.slug}` },
        ]),
        faqPageSchema(service.faqs),
      ],
      image: service.image.src,
    };
  }

  // 9. Dynamic Area Page
  const area = findServiceArea(slug);
  if (area) {
    return {
      title: area.metaTitle,
      description: area.metaDescription,
      path: `/${area.slug}`,
      canonical: `${SITE.url}/${area.slug}`,
      jsonLd: [
        localBusinessSchema,
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: area.name, path: `/${area.slug}` },
        ]),
        faqPageSchema(area.faqs),
      ],
      image: SITE.heroImage,
    };
  }

  // 10. Fallback 404
  return {
    title: "Page Not Found | Buck's Electric Inc",
    description: "The page you are looking for does not exist. Call Buck's Electric at (605) 343-5630.",
    path: cleanPath,
    canonical: `${SITE.url}${cleanPath}`,
    jsonLd: [],
    image: SITE.heroImage,
    noindex: true,
  };
}

