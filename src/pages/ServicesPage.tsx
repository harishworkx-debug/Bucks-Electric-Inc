import { CallButton } from '@/components/CallButton';
import { CallCta } from '@/components/CallCta';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/areas';
import { Link } from '@/lib/router';
import { breadcrumbSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';

export function ServicesPage() {
  useSeo({
    title: "Electrical Services in Rapid City, SD | Buck's Electric Inc",
    description:
      "Electrical repair, installation, wiring, panel upgrades, lighting, and commercial electrical work from Buck's Electric Inc in Rapid City, SD.",
    path: '/electrical-services',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Electrical Services', path: '/electrical-services' },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Electrical Services"
        title="Electrical Services in Rapid City, SD"
        description="Choose the service that matches your situation. Each page explains the common problems, how the work is carried out, and how to reach us."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Electrical Services', path: '/electrical-services' },
        ]}
        actions={<CallButton label={`Call ${SITE.phoneDisplay}`} />}
      />

      <Section>
        <SectionHeading
          eyebrow="Our Services"
          title="Find the electrical work you need"
          description="If you are not sure which service applies, call us and describe what is happening."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Service Areas" title="Where we provide electrical service" />
        <div className="mt-10 flex flex-wrap gap-4">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              to={`/${area.slug}`}
              className="rounded-lg border border-navy-200 bg-white px-5 py-3 font-bold text-navy-900 transition hover:border-navy-900 hover:bg-navy-900 hover:text-white"
            >
              {`Electrician in ${area.name}`}
            </Link>
          ))}
        </div>
      </Section>

      <CallCta
        title="Not sure which service you need?"
        description={`Call Buck's Electric Inc at ${SITE.phoneDisplay}. Describe the problem, and we will help you figure out the next step.`}
      />
    </>
  );
}
