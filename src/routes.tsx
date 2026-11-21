import type { ReactNode } from 'react';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { HomePage } from '@/pages/HomePage';
import { LegalPage } from '@/pages/LegalPage';
import { LocationPage } from '@/pages/LocationPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ServiceAreasPage } from '@/pages/ServiceAreasPage';
import { ServicePage } from '@/pages/ServicePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { findServiceArea } from '@/data/areas';
import { findService } from '@/data/services';
import { PRIVACY_SECTIONS, TERMS_SECTIONS } from '@/data/legal';

const STATIC_ROUTES: Record<string, ReactNode> = {
  '/': <HomePage />,
  '/about-us': <AboutPage />,
  '/electrical-services': <ServicesPage />,
  '/service-areas': <ServiceAreasPage />,
  '/contact-us': <ContactPage />,
  '/privacy-policy': (
    <LegalPage
      title="Privacy Policy"
      description="How Buck's Electric Inc handles information on this website, including calls and the embedded Google Map."
      path="/privacy-policy"
      sections={PRIVACY_SECTIONS}
    />
  ),
  '/terms-and-conditions': (
    <LegalPage
      title="Terms and Conditions"
      description="Terms for using the Buck's Electric Inc website in Rapid City, South Dakota."
      path="/terms-and-conditions"
      sections={TERMS_SECTIONS}
    />
  ),
};

export function renderRoute(pathname: string): ReactNode {
  const staticPage = STATIC_ROUTES[pathname];
  if (staticPage) return staticPage;

  const slug = pathname.slice(1);
  const service = findService(slug);
  if (service) return <ServicePage service={service} />;

  const area = findServiceArea(slug);
  if (area) return <LocationPage area={area} />;

  return <NotFoundPage />;
}
