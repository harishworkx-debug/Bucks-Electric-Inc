import { CallButton } from '@/components/CallButton';
import { CallCta } from '@/components/CallCta';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { breadcrumbSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { Link } from '@/lib/router';
import { BadgeCheck, Handshake, Lightbulb, ShieldCheck } from 'lucide-react';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Safety first',
    text: 'Electricity can cause serious harm, so we treat every repair, installation, and upgrade with care and explain the safety reasons behind our recommendations.',
  },
  {
    icon: Lightbulb,
    title: 'Clear explanations',
    text: 'We explain what is wrong, what the options are, and what the work involves, so you can make an informed decision about your property.',
  },
  {
    icon: Handshake,
    title: 'Local and accountable',
    text: 'We are based in Rapid City at 1720A Samco Rd. You can call us directly at (605) 343-5630 and speak with us about your work.',
  },
];

const APPROACH = [
  'Start with a phone call so we understand the problem or project before we arrive.',
  'Assess the existing wiring, panel, or fixtures to find the actual cause or the right scope.',
  'Explain the work in plain terms before it begins, including what it involves.',
  'Complete the work and test it so the system is ready for everyday use.',
];

export function AboutPage() {
  useSeo({
    title: 'About Bucks Electric | Electrical Contractor in Rapid City, SD',
    description:
      'Meet Bucks Electric, your local electrical contractor based at 1720A Samco Rd in Rapid City, SD. Learn about our values, master electrician standards, and community dedication.',
    path: '/about-us',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="About Bucks Electric"
        title="Meet Bucks Electric – Your Rapid City Electrical Contractor"
        description="Bucks Electric is an established electrical contractor based in Rapid City, South Dakota, delivering dependable repairs, 200A panel upgrades, rewiring, and commercial contracting."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about-us' },
        ]}
        image={{
          src: 'https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          alt: 'Complex network of electrical wiring and control panels in an industrial setting',
        }}
        actions={<CallButton label={`Call ${SITE.phoneDisplay}`} />}
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Who We Are"
              title="Electrical work built on careful planning"
              description="Electrical problems rarely fix themselves, and small issues can become serious when they are ignored. We focus on finding the real cause, explaining it clearly, and completing the work properly."
            />
            <p className="leading-relaxed text-navy-700">
              Whether you need a single outlet repaired or a larger project planned, Buck's Electric Inc works with
              homeowners and businesses in Rapid City. Our service pages describe the common problems, the process,
              and the questions people ask for each type of electrical work.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-navy-50/60 p-8 sm:p-10">
            <h3 className="text-xl text-navy-900">Our approach</h3>
            <ol className="mt-6 space-y-5">
              {APPROACH.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-volt-400">
                    {index + 1}
                  </span>
                  <span className="pt-1.5 leading-relaxed text-navy-800">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Our Values" title="What guides our work" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <article key={value.title} className="card-lift rounded-2xl border border-navy-100 bg-white p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900">
                  <Icon className="h-7 w-7 text-volt-500" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl text-navy-900">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-700">{value.text}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-4">
            <SectionHeading eyebrow="Company Details" title="Find Buck's Electric Inc" />
            <dl className="grid gap-6 pt-2 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-bold uppercase tracking-[0.12em] text-navy-600">Business name</dt>
                <dd className="mt-1 text-lg font-semibold text-navy-900">Buck's Electric Inc</dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-[0.12em] text-navy-600">Address</dt>
                <dd className="mt-1 text-lg font-semibold text-navy-900">
                  {`${SITE.streetAddress}, ${SITE.city}, ${SITE.region} ${SITE.postalCode}`}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-[0.12em] text-navy-600">Phone</dt>
                <dd className="mt-1 text-lg font-semibold text-navy-900">
                  <a href={SITE.phoneHref} className="underline decoration-volt-500 decoration-2 underline-offset-4 hover:text-navy-600">
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-[0.12em] text-navy-600">Google listing</dt>
                <dd className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-navy-900">
                  <BadgeCheck className="h-5 w-5 text-navy-600" aria-hidden="true" />
                  <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-volt-500 decoration-2 underline-offset-4 hover:text-navy-600">
                    4.8 ★ on Google Maps (9 reviews)
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-[0.12em] text-navy-600">Contractor Verification</dt>
                <dd className="mt-1 text-sm font-semibold text-navy-900 leading-normal">
                  BuildZoom verified local contractor footprint at 1720A Samco Rd, Rapid City, SD.
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col gap-3 self-start sm:flex-row">
            <Link to="/electrical-services" className="btn-outline">
              Explore electrical services
            </Link>
            <Link to="/service-areas" className="btn-secondary">
              View Black Hills service areas
            </Link>
          </div>
        </div>
      </Section>

      <CallCta
        title="Talk to Buck's Electric Inc today"
        description={`Call ${SITE.phoneDisplay} to describe your electrical work. We are based at 1720A Samco Rd in Rapid City.`}
      />
    </>
  );
}
