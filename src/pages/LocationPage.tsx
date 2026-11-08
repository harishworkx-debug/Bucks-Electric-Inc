import { CallButton } from '@/components/CallButton';
import { CallCta } from '@/components/CallCta';
import { FaqList } from '@/components/FaqList';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import type { ServiceArea } from '@/data/areas';
import { SERVICES } from '@/data/services';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';

export function LocationPage({ area }: { area: ServiceArea }) {
  useSeo({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/${area.slug}`,
    jsonLd: [
      localBusinessSchema,
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Service Areas', path: '/service-areas' },
        { name: area.name, path: `/${area.slug}` },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title={area.heading}
        description={area.summary}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: area.name, path: `/${area.slug}` },
        ]}
        actions={<CallButton label={`Call ${SITE.phoneDisplay}`} />}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-navy-800">
            {area.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-5 rounded-2xl bg-navy-50/60 p-8 text-navy-800">
            <h2 className="text-2xl text-navy-900">{`Electrical work in ${area.name.split(',')[0]}`}</h2>
            {area.localContext.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted">
        {area.servicePagesAvailable ? (
          <>
            <SectionHeading
              eyebrow="Services in Rapid City"
              title="Electrical services available in Rapid City"
              description="Each service page explains the common problems, the process, and the questions people ask before work begins."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
              {SERVICES.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <SectionHeading
              eyebrow="Services"
              title={`Electrical services for ${area.name.split(',')[0]} properties`}
              description="Call to confirm which of these services we can provide at your address."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <li
                  key={service.slug}
                  className="rounded-xl border border-navy-100 bg-white px-5 py-4 font-semibold text-navy-900"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Questions" title={`${area.name} electrician questions`} />
          <FaqList faqs={area.faqs} />
        </div>
      </Section>

      <CallCta
        title={`Call an electrician in ${area.name.split(',')[0]}`}
        description={`Call Buck's Electric Inc at ${SITE.phoneDisplay}. Describe the electrical work you need, and we will tell you how we can help.`}
      />
    </>
  );
}
