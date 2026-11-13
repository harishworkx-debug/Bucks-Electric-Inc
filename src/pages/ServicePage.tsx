import { CallButton } from '@/components/CallButton';
import { CallCta } from '@/components/CallCta';
import { FaqList } from '@/components/FaqList';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { findService, SERVICES, type Service } from '@/data/services';
import { SERVICE_AREAS } from '@/data/areas';
import { Link } from '@/lib/router';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { CheckCircle2, MapPin } from 'lucide-react';

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
            <aside className="h-fit space-y-6 rounded-2xl bg-navy-900 p-8 text-white shadow-md">
              <div className="flex items-center gap-3">
                <MapPin className="h-7 w-7 text-volt-500 shrink-0" aria-hidden="true" />
                <h2 className="text-xl font-bold text-white">{`${service.name} in ${area.name}`}</h2>
              </div>
              <p className="leading-relaxed text-navy-100 text-sm">
                Dispatched directly from our Rapid City shop at {SITE.streetAddress}, {SITE.city}, {SITE.region} {SITE.postalCode}.
              </p>

              <div className="border-t border-navy-700/80 pt-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-volt-400">
                  Related Electrical Services in Rapid City:
                </p>
                <ul className="space-y-2 text-sm">
                  {SERVICES.filter((s) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/${s.slug}`}
                          className="inline-flex items-center gap-1.5 text-navy-200 hover:text-volt-300 font-medium transition"
                        >
                          <span className="text-volt-500">&bull;</span>
                          <span className="underline underline-offset-2">{`${s.name} in Rapid City`}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="border-t border-navy-700/80 pt-4 flex flex-col gap-2.5 text-sm">
                <Link
                  to="/electrician-rapid-city-sd"
                  className="inline-flex items-center gap-2 font-bold text-volt-400 hover:text-volt-300 underline underline-offset-4"
                >
                  <span>&rarr;</span> {`Electrician in Rapid City, SD`}
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 font-semibold text-navy-200 hover:text-white"
                >
                  <span>&rarr;</span> {`Contact Bucks Electric for a Free Quote`}
                </Link>
              </div>
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

      {service.sections && service.sections.length > 0 && (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Expertise & Standards"
            title={`Professional guide to ${service.name.toLowerCase()} in Rapid City`}
            description="Our master and journeyman electricians explain the safety principles, code requirements, and technical factors behind every project."
          />
          <div className="mt-14 space-y-10">
            {service.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm lg:p-10"
              >
                <h3 className="text-2xl font-extrabold text-navy-900 lg:text-3xl">{section.title}</h3>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-navy-800">
                  {section.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bulletPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 rounded-xl bg-navy-50/80 p-4 text-navy-900"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-volt-600" aria-hidden="true" />
                        <span className="text-base font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </Section>
      )}

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

      {/* Black Hills Regional Service Coverage */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Black Hills Service Areas"
          title={`${service.name} across the Black Hills region`}
          description={`Bucks Electric operates from 1720A Samco Rd in Rapid City, dispatching master and journeyman electricians to provide ${service.name.toLowerCase()} in all surrounding communities:`}
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SERVICE_AREAS.map((loc) => (
            <Link
              key={loc.slug}
              to={`/${loc.slug}`}
              className="flex items-center gap-2.5 rounded-xl border border-navy-100 bg-white p-3.5 text-sm font-semibold text-navy-800 shadow-2xs transition hover:border-volt-500 hover:bg-navy-50 hover:text-navy-900"
            >
              <MapPin className="h-4 w-4 shrink-0 text-volt-600" aria-hidden="true" />
              <span>{`Electrician in ${loc.name}`}</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 underline underline-offset-4 hover:text-volt-600"
          >
            <span>View all Black Hills service communities</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </Section>

      <CallCta
        title={`Call about ${service.name.toLowerCase()} in Rapid City`}
        description={`Call ${SITE.phoneDisplay} and describe what you need. Buck's Electric Inc is ready to talk through your project.`}
      />
    </>
  );
}
