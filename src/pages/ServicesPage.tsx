import { CallButton } from '@/components/CallButton';
import { CallCta } from '@/components/CallCta';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/areas';
import { ELECTRICAL_GUIDES } from '@/data/guides';
import { Link } from '@/lib/router';
import { breadcrumbSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';

export function ServicesPage() {
  useSeo({
    title: 'Electrical Services in Rapid City, SD | Bucks Electric',
    description:
      'Looking for professional electrical services in Rapid City, SD? Bucks Electric provides residential and commercial electrical work, repairs, panel upgrades, and installations.',
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
        eyebrow="Electrical Services Rapid City"
        title="Electrical Services for Homes and Businesses"
        description="Explore professional electrical services across Rapid City and the Black Hills. Each service page explains typical issues, process, and code requirements."
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

      <Section>
        <SectionHeading
          eyebrow="Electrical Knowledge Base"
          title="Educational Guides for Homeowners & Property Managers"
          description="Read our comprehensive guides covering electrical panel upgrades, Level 2 EV charging stations, wiring safety, and commercial power solutions."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ELECTRICAL_GUIDES.slice(0, 6).map((guide) => (
            <article
              key={guide.id}
              className="card-lift flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-7 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-volt-500/15 px-3 py-1 text-navy-900">
                    <BookOpen className="h-3.5 w-3.5 text-volt-600" />
                    {guide.category}
                  </span>
                  <span className="text-navy-500">{guide.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900">{guide.title}</h3>
                <p className="text-sm leading-relaxed text-navy-700">{guide.summary}</p>
                <div className="space-y-2 border-t border-navy-100 pt-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-navy-500">Key Takeaways:</p>
                  <ul className="space-y-1.5 text-xs text-navy-800">
                    {guide.keyTakeaways.slice(0, 2).map((takeaway) => (
                      <li key={takeaway} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-volt-600" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 border-t border-navy-100 pt-4">
                <Link
                  to={`/${guide.relatedServiceSlug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-volt-700 transition"
                >
                  <span>{guide.relatedServiceAnchor}</span>
                  <ArrowRight className="h-4 w-4 text-volt-600" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CallCta
        title="Not sure which service you need?"
        description={`Call Bucks Electric at ${SITE.phoneDisplay}. Describe the problem, and we will help you figure out the next step.`}
      />
    </>
  );
}
