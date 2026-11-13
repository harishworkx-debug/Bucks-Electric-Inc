import { CallButton } from '@/components/CallButton';
import { CallCta } from '@/components/CallCta';
import { FaqList } from '@/components/FaqList';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICE_AREAS, type ServiceArea } from '@/data/areas';
import { SERVICES } from '@/data/services';
import { Link } from '@/lib/router';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { ArrowRight, Clock, Compass, MapPin, Navigation, ShieldCheck } from 'lucide-react';

export function LocationPage({ area }: { area: ServiceArea }) {
  const cityName = area.name.split(',')[0].trim();

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
        eyebrow={`Electrician in ${cityName}`}
        title={area.heading}
        description={area.summary}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: area.name, path: `/${area.slug}` },
        ]}
        actions={<CallButton label={`Call ${SITE.phoneDisplay}`} />}
      />

      {/* Intro and Local Electrical Needs */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-navy-800">
            {area.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-6 rounded-2xl bg-navy-50/70 p-8 text-navy-800 lg:p-10">
            <h2 className="text-2xl font-bold text-navy-900">{`Electrical Infrastructure in ${cityName}`}</h2>
            {area.localContext.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Real Travel Logistics & Transparent Dispatch Information */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Service Logistics"
          title={`Transparent dispatch & travel details for ${cityName}`}
          description="We believe in total transparency. Bucks Electric dispatches all Black Hills calls directly from our central headquarters at 1720A Samco Rd in Rapid City."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-navy-100 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-500/20 text-navy-900">
              <Compass className="h-6 w-6 text-volt-600" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy-900">Distance from Shop</h3>
            <p className="mt-2 text-base font-medium text-navy-700">{area.travel.distance}</p>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-500/20 text-navy-900">
              <Clock className="h-6 w-6 text-volt-600" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy-900">Typical Travel Time</h3>
            <p className="mt-2 text-base font-medium text-navy-700">{area.travel.driveTime}</p>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-500/20 text-navy-900">
              <Navigation className="h-6 w-6 text-volt-600" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy-900">Primary Travel Route</h3>
            <p className="mt-2 text-base font-medium text-navy-700">{area.travel.route}</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-navy-200/80 bg-navy-900 p-8 text-white">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-volt-400" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-bold text-white">Direct Accountability Notice</h3>
              <p className="mt-2 leading-relaxed text-navy-100">{area.travel.dispatchNotice}</p>
            </div>
          </div>
        </div>

        {/* Local Geographic Landmarks Served */}
        {area.landmarks && area.landmarks.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg font-bold text-navy-900">{`Communities & Landmarks Served in ${cityName}:`}</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {area.landmarks.map((landmark) => (
                <span
                  key={landmark}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-semibold text-navy-800 shadow-2xs"
                >
                  <MapPin className="h-3.5 w-3.5 text-volt-600" aria-hidden="true" />
                  {landmark}
                </span>
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* Internal Links to All 10 Services */}
      <Section>
        <SectionHeading
          eyebrow="Available Services"
          title={`Electrical services available in ${cityName}`}
          description={`Click any service below to explore common problems, our code-compliant process, and FAQs for your ${cityName} property.`}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Location-Specific FAQs */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Local FAQs" title={`${cityName} electrician questions`} />
          <FaqList faqs={area.faqs} />
        </div>
      </Section>

      {/* Neighboring Black Hills Service Communities */}
      <Section>
        <SectionHeading
          eyebrow="Regional Coverage"
          title={`Other Black Hills communities served near ${cityName}`}
          description={`Beyond ${cityName}, Bucks Electric provides fully licensed residential and commercial electrical contracting throughout the surrounding Black Hills region:`}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {SERVICE_AREAS.filter((a) => a.slug !== area.slug).map((neighbor) => (
            <Link
              key={neighbor.slug}
              to={`/${neighbor.slug}`}
              className="inline-flex items-center gap-2 rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-sm font-semibold text-navy-800 shadow-2xs transition hover:border-navy-900 hover:bg-navy-900 hover:text-white"
            >
              <MapPin className="h-4 w-4 text-volt-600" aria-hidden="true" />
              <span>{`Electrician in ${neighbor.name}`}</span>
            </Link>
          ))}
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-1.5 rounded-xl border border-volt-500 bg-volt-500/20 px-5 py-2.5 text-sm font-bold text-navy-900 transition hover:bg-volt-500"
          >
            <span>All 10 Service Areas</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      <CallCta
        title={`Call an electrician for ${cityName}`}
        description={`Call Bucks Electric at ${SITE.phoneDisplay}. Describe the electrical work you need in ${cityName}, and speak directly with our experienced team.`}
      />
    </>
  );
}
