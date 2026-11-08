import { CallButton } from '@/components/CallButton';
import { CallCta } from '@/components/CallCta';
import { FaqList } from '@/components/FaqList';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { findService, type Service } from '@/data/services';
import { SERVICE_AREAS } from '@/data/areas';
import { Link } from '@/lib/router';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { MapPin } from 'lucide-react';

export function ServicePage({ service }: { service: Service }) {
  const area = SERVICE_AREAS[0];
  const related = service.related
    .map((slug) => findService(slug))
    .filter((item): item is Service => item !== undefined);

  useSeo({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/${service.slug}`,
    jsonLd: [
      serviceSchema({ name: service.name, description: service.metaDescription, path: `/${service.slug}` }),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Electrical Services', path: '/electrical-services' },
        { name: service.name, path: `/${service.slug}` },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Electrical Services"
        title={service.heading}
        description={service.cardSummary}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Electrical Services', path: '/electrical-services' },
          { name: service.name, path: `/${service.slug}` },
        ]}
        image={service.image}
        actions={<CallButton label={`Call ${SITE.phoneDisplay}`} />}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-navy-800">
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {area && (
            <aside className="h-fit space-y-4 rounded-2xl bg-navy-900 p-8 text-white">
              <MapPin className="h-7 w-7 text-volt-500" aria-hidden="true" />
              <h2 className="text-xl text-white">{`${service.name} in ${area.name}`}</h2>
              <p className="leading-relaxed text-navy-100">
                We are located at {SITE.streetAddress}, {SITE.city}, {SITE.region} {SITE.postalCode}.
              </p>
              <Link
                to={`/${area.slug}`}
                className="inline-flex items-center gap-2 font-bold text-volt-400 underline underline-offset-4 hover:text-volt-300"
              >
                {`View our Rapid City electrician page`}
              </Link>
            </aside>
          )}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Common Problems"
          title={`Common issues with ${service.name.toLowerCase()} in homes and businesses`}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {service.problems.map((problem) => (
            <article key={problem.title} className="rounded-2xl border border-navy-100 bg-white p-8">
              <h3 className="text-xl text-navy-900">{problem.title}</h3>
              <p className="mt-3 leading-relaxed text-navy-700">{problem.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Process" title={`How our ${service.name.toLowerCase()} work is carried out`} />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {service.process.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-navy-100 p-7">
              <span className="text-4xl font-extrabold text-volt-600">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg text-navy-900">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-navy-700">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
          <FaqList faqs={service.faqs} />
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Related Services" title="Other electrical services we provide" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </Section>
      )}

      <CallCta
        title={`Call about ${service.name.toLowerCase()} in Rapid City`}
        description={`Call ${SITE.phoneDisplay} and describe what you need. Buck's Electric Inc is ready to talk through your project.`}
      />
    </>
  );
}
