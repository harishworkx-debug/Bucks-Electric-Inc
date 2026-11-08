import {
  AlertTriangle,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  MapPin,
  MessageSquareText,
  Phone,
  Shield,
  Wrench,
} from 'lucide-react';
import { FaqList } from '@/components/FaqList';
import { CallButton } from '@/components/CallButton';
import { CallCta } from '@/components/CallCta';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';
import { localBusinessSchema, websiteSchema } from '@/lib/schema';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/areas';

const TRUST_ITEMS = [
  {
    icon: Building2,
    title: "Buck's Electric Inc",
    text: 'Electrical contractor serving Rapid City, South Dakota.',
  },
  {
    icon: MapPin,
    title: 'Our location',
    text: `${SITE.streetAddress}, ${SITE.city}, ${SITE.region} ${SITE.postalCode}`,
  },
  {
    icon: Phone,
    title: 'Call us directly',
    text: SITE.phoneDisplay,
    href: SITE.phoneHref,
  },
  {
    icon: BadgeCheck,
    title: 'Business listing',
    text: 'See our listing on Google Maps.',
    href: SITE.mapsUrl,
    external: true,
  },
];

const STRENGTHS = [
  {
    icon: MapPin,
    title: 'Based in Rapid City',
    text: 'Our office at 1720A Samco Rd means we work close to the homes and businesses we serve in Rapid City.',
  },
  {
    icon: MessageSquareText,
    title: 'Talk to us directly',
    text: 'Call (605) 343-5630 to describe your problem or project and get a straight answer about what we can help with.',
  },
  {
    icon: ClipboardCheck,
    title: 'Know what to expect',
    text: 'Each service page explains the common problems, the process, and the questions people ask before work begins.',
  },
  {
    icon: Shield,
    title: 'Safety first',
    text: 'Electrical problems can be dangerous. If something looks or smells wrong, call us before you keep using it.',
  },
];

const rapidCity = SERVICE_AREAS[0];

const PROCESS_STEPS = [
  {
    title: 'Call and describe the problem',
    text: 'Tell us what is happening, where in the property it is, and when it started.',
  },
  {
    title: 'We review the situation',
    text: 'We confirm what the work involves and explain the options before anything begins.',
  },
  {
    title: 'Work is carried out',
    text: 'The repair, installation, or upgrade is completed with the safety of the property in mind.',
  },
  {
    title: 'Everything is tested',
    text: 'We check the finished work so the affected circuits are ready for everyday use.',
  },
];

const WARNING_SIGNS = [
  'Breakers that trip again and again',
  'Outlets or switches that feel warm or show discoloration',
  'A burning smell or buzzing from a panel, outlet, or switch',
  'Lights that flicker or dim when appliances start',
  'Outlets that only work some of the time',
];

const HOME_FAQS = [
  {
    question: 'What electrical services does Buck\'s Electric Inc offer in Rapid City?',
    answer:
      'We offer electrical repair, installation, wiring and rewiring, panel upgrades, lighting installation, and commercial electrical work. Each service has its own page with details.',
  },
  {
    question: 'How do I schedule electrical work?',
    answer: `Call ${SITE.phoneDisplay} and describe the problem or project. We will tell you what we can help with and how the next step works.`,
  },
  {
    question: 'Where is your office?',
    answer: `We are at ${SITE.streetAddress}, ${SITE.city}, ${SITE.region} ${SITE.postalCode}. Our Google Maps listing is linked on the Contact page.`,
  },
  {
    question: 'What should I do if I smell burning or see sparks?',
    answer:
      'Switch off the power to the affected circuit if it is safe to do so, avoid using the outlet or switch, and call us at ' +
      `${SITE.phoneDisplay} right away.`,
  },
];

export function HomePage() {
  useSeo({
    title: "Buck's Electric Inc | Rapid City, SD Electrical Contractor",
    description:
      "Buck's Electric Inc provides electrical repair, installation, wiring, panel upgrades, and lighting in Rapid City, SD. Call (605) 343-5630.",
    path: '/',
    jsonLd: [localBusinessSchema, websiteSchema],
  });

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <img
          src={SITE.heroImage}
          alt="Electrician working on an indoor circuit breaker panel"
          width={940}
          height={650}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-navy-900/70" />
        <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-5 py-20 lg:px-8 lg:py-28">
          <div className="animate-rise max-w-3xl space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-volt-500/50 bg-navy-900/60 px-4 py-2 text-sm font-semibold text-volt-300">
              <span className="h-2 w-2 rounded-full bg-volt-500" aria-hidden="true" />
              Electrical contractor in Rapid City, South Dakota
            </p>
            <h1 className="text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">
              Dependable Electrical Services in Rapid City, SD
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl">
              Buck's Electric Inc handles electrical repairs, installations, wiring, panel upgrades, and lighting for
              homes and businesses across Rapid City. Call us to talk through your project.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <CallButton label={`Call ${SITE.phoneDisplay}`} className="px-8 py-4 text-lg" />
              <Link to="/electrical-services" className="btn-secondary px-8 py-4 text-lg">
                Explore Electrical Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-navy-100 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="h-6 w-6 text-navy-600" aria-hidden="true" />
                <dt className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-navy-600">{item.title}</dt>
                <dd className="mt-2 font-semibold text-navy-900">{item.text}</dd>
              </>
            );
            return (
              <div key={item.title} className="bg-white p-8">
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="block rounded-lg transition hover:text-navy-600"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </dl>
      </section>

      <Section id="services" tone="muted">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Electrical Services"
            title="Electrical work for Rapid City homes and businesses"
            description="Choose a service to see the common problems we address, how the work is carried out, and the questions people ask before they call."
          />
          <Link to="/electrical-services" className="btn-outline shrink-0">
            View all electrical services
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Why Choose Buck's Electric Inc"
              title="A local electrical contractor you can call directly"
              description="We keep our approach simple: understand the problem, explain the work, and do it carefully."
            />
            <ul className="grid gap-8 sm:grid-cols-2">
              {STRENGTHS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="space-y-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-100">
                      <Icon className="h-6 w-6 text-navy-900" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg text-navy-900">{item.title}</h3>
                    <p className="leading-relaxed text-navy-700">{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-navy-100">
            <img
              src="https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Electrician using a multimeter to check industrial control panel wiring"
              width={940}
              height={650}
              loading="lazy"
              className="h-full max-h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Service Areas"
              title="Serving Rapid City, South Dakota"
              description="Our office is in Rapid City, and our electrical work is focused on the city and the people who live and work here."
            />
            <Link to="/service-areas" className="inline-flex items-center gap-2 font-bold text-navy-900 hover:text-navy-600">
              Browse all service areas
            </Link>
          </div>
          {rapidCity && (
            <Link
              to={`/${rapidCity.slug}`}
              className="card-lift group flex flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-8 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="space-y-2">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-navy-600">Primary location</p>
                <h3 className="text-2xl text-navy-900">{rapidCity.name}</h3>
                <p className="leading-relaxed text-navy-700">{rapidCity.summary}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white transition group-hover:bg-navy-700">
                {`Electrician in ${rapidCity.name}`}
              </span>
            </Link>
          )}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple process from your first call to finished work"
          description="Every job starts with a conversation, so you know what to expect before we begin."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-navy-100 bg-white p-7">
              <span className="text-4xl font-extrabold text-volt-600">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg text-navy-900">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-navy-700">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Warning Signs"
              title="When your electrical system needs attention"
              description="These signs often point to a problem that should be checked rather than ignored."
            />
            <ul className="space-y-4">
              {WARNING_SIGNS.map((sign) => (
                <li key={sign} className="flex items-start gap-3 text-navy-800">
                  <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-volt-600" aria-hidden="true" />
                  <span className="leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <CallButton />
              <Link to="/electrical-repair-rapid-city-sd" className="btn-outline">
                <Wrench className="h-4 w-4" aria-hidden="true" />
                Read about electrical repair
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-xl text-navy-900">Common questions</h3>
            <FaqList faqs={HOME_FAQS} />
          </div>
        </div>
      </Section>

      <CallCta
        title="Call Buck's Electric Inc about your electrical project"
        description={`Describe the problem or the work you are planning, and call ${SITE.phoneDisplay}. We will tell you how we can help.`}
      />
    </>
  );
}
