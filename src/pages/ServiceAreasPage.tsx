import { MapPin } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { CallCta } from '@/components/CallCta';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICE_AREAS } from '@/data/areas';
import { SERVICES } from '@/data/services';
import { Link } from '@/lib/router';
import { breadcrumbSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';

export function ServiceAreasPage() {
  useSeo({
    title: 'Electrician Service Areas in Black Hills, SD | Bucks Electric',
    description:
      'Bucks Electric provides residential and commercial electrical services across Rapid City and the Black Hills region. Explore our local service communities.',
    path: '/service-areas',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Service Areas', path: '/service-areas' },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Electrician Black Hills SD"
        title="Electrical Services Across the Black Hills"
        description="Bucks Electric operates from 1720A Samco Rd in Rapid City, dispatching experienced electricians throughout Pennington, Meade, Lawrence, and Custer counties."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
        ]}
        actions={<CallButton label={`Call ${SITE.phoneDisplay}`} />}
      />

      <Section>
        <SectionHeading
          eyebrow="Our Locations"
          title="Areas we serve"
          description="Each area page lists the electrical services available there and answers common questions about booking work."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              to={`/${area.slug}`}
              className="card-lift group flex flex-col gap-5 rounded-2xl border border-navy-100 bg-white p-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900">
                <MapPin className="h-7 w-7 text-volt-500" aria-hidden="true" />
              </span>
              <h3 className="text-2xl text-navy-900">{area.name}</h3>
              <p className="leading-relaxed text-navy-700">{area.summary}</p>
              <span className="mt-auto text-sm font-bold text-navy-900 group-hover:text-navy-600">
                {`View electrician services in ${area.name}`}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Electrical Services available across all areas */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Our Capabilities"
          title="Electrical services provided throughout the Black Hills"
          description="Every community listed above receives full access to our residential, commercial, and emergency electrical solutions."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <CallCta
        title="Call to confirm service for your location"
        description={`If you are unsure whether we cover your address, call ${SITE.phoneDisplay} and we will let you know.`}
      />
    </>
  );
}
