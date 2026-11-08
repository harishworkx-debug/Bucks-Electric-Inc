import { MapPin } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { CallCta } from '@/components/CallCta';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { SERVICE_AREAS } from '@/data/areas';
import { Link } from '@/lib/router';
import { breadcrumbSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';

export function ServiceAreasPage() {
  useSeo({
    title: "Service Areas | Buck's Electric Inc in Rapid City, SD",
    description:
      "Service areas for Buck's Electric Inc. Our electrical contractor office is at 1720A Samco Rd in Rapid City, SD. Call (605) 343-5630.",
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
        eyebrow="Service Areas"
        title="Electrical Service Areas"
        description="Buck's Electric Inc is based in Rapid City, South Dakota. Choose your area to see the electrical services available there."
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

      <CallCta
        title="Call to confirm service for your location"
        description={`If you are unsure whether we cover your address, call ${SITE.phoneDisplay} and we will let you know.`}
      />
    </>
  );
}
