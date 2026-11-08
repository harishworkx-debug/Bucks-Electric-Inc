import { MapPin, Phone } from 'lucide-react';
import { Link } from '@/lib/router';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/areas';
import { BrandLogo } from '@/components/BrandLogo';

const COMPANY_LINKS = [
  { to: '/about-us', label: 'About Us' },
  { to: '/contact-us', label: 'Contact Us' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms and Conditions' },
];

const FOOTER_LINK_CLASS =
  'text-navy-100 transition-colors duration-200 hover:text-volt-400 focus-visible:text-volt-400';

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-6">
          <BrandLogo tone="light" />
          <p className="max-w-xs text-sm leading-relaxed text-navy-200">
            Electrical repair, installation, wiring, and panel upgrades for homes and businesses in Rapid City,
            South Dakota.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Contact</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-3 text-base font-bold text-white hover:text-volt-400">
                <Phone className="h-4 w-4 text-volt-500" aria-hidden="true" />
                {`+1 ${SITE.phoneDisplay}`}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-volt-500" aria-hidden="true" />
              <span>
                {SITE.streetAddress}
                <br />
                {`${SITE.city}, ${SITE.region} ${SITE.postalCode}`}
              </span>
            </li>
            <li>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className={FOOTER_LINK_CLASS}>
                View our Google Maps listing
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Electrical Services</h2>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link to={`/${service.slug}`} className={FOOTER_LINK_CLASS}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Service Areas</h2>
          <ul className="space-y-3 text-sm">
            {SERVICE_AREAS.map((area) => (
              <li key={area.slug}>
                <Link to={`/${area.slug}`} className={FOOTER_LINK_CLASS}>
                  {`Electrician in ${area.name}`}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/service-areas" className={FOOTER_LINK_CLASS}>
                All service areas
              </Link>
            </li>
          </ul>
          <h2 className="pt-2 text-sm font-bold uppercase tracking-[0.14em] text-white">Company</h2>
          <ul className="space-y-3 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={FOOTER_LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-700">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-navy-200 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>{`© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.`}</p>
          <p>{`${SITE.streetAddress}, ${SITE.city}, ${SITE.region} ${SITE.postalCode}`}</p>
        </div>
      </div>
    </footer>
  );
}
