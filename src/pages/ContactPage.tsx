import { MapPin, Phone, Clock3, ExternalLink } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { PageHero } from '@/components/PageHero';
import { Link } from '@/lib/router';
import { breadcrumbSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';

export function ContactPage() {
  useSeo({
    title: 'Contact Electrician in Rapid City, SD | Bucks Electric',
    description:
      'Need to contact an electrician in Rapid City, SD? Call Bucks Electric at (605) 343-5630 or visit 1720A Samco Rd for consultations, quotes, and emergency dispatch.',
    path: '/contact-us',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact-us' },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Contact Electrician Rapid City"
        title="Contact Bucks Electric for Electrical Service"
        description="Phone is the fastest way to reach us. Call (605) 343-5630 to describe your electrical problem or project, and speak directly with our team."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact-us' },
        ]}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div className="space-y-6">
            <div className="rounded-2xl border border-navy-100 p-8 shadow-sm">
              <p className="eyebrow">Phone</p>
              <a
                href={SITE.phoneHref}
                className="mt-3 inline-flex items-center gap-3 text-3xl font-extrabold text-navy-900 transition hover:text-navy-600 sm:text-4xl"
              >
                <Phone className="h-8 w-8 text-volt-600" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
              <p className="mt-4 leading-relaxed text-navy-700">
                Call us to talk through your electrical problem or project.
              </p>
              <CallButton label="Call Now" className="mt-6 w-full sm:w-auto" />
            </div>

            <div className="space-y-6 rounded-2xl border border-navy-100 p-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-navy-600" aria-hidden="true" />
                <div>
                  <h2 className="text-lg text-navy-900">Business address</h2>
                  <address className="mt-2 not-italic leading-relaxed text-navy-700">
                    Buck's Electric Inc
                    <br />
                    {SITE.streetAddress}
                    <br />
                    {`${SITE.city}, ${SITE.region} ${SITE.postalCode}`}
                    <br />
                    United States
                  </address>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock3 className="mt-1 h-6 w-6 shrink-0 text-navy-600" aria-hidden="true" />
                <div>
                  <h2 className="text-lg text-navy-900">How to reach us</h2>
                  <p className="mt-2 leading-relaxed text-navy-700">
                    Call {SITE.phoneDisplay} and describe what you need. If the problem is urgent, switch off power to
                    the affected circuit when it is safe to do so, then call us.
                  </p>
                </div>
              </div>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-navy-900 underline decoration-volt-500 decoration-2 underline-offset-4 hover:text-navy-600"
              >
                View our Google Maps listing
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-2xl shadow-lg ring-1 ring-navy-100 lg:min-h-full">
            <iframe
              src={SITE.mapsEmbedSrc}
              title="Map showing Buck's Electric Inc at 1720A Samco Rd, Rapid City, SD"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-navy-100 bg-navy-50/60 py-16">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">
            Explore Our Electrical Services & Black Hills Coverage
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-navy-700">
            Bucks Electric provides code-compliant electrical repairs, 200A panel upgrades, EV charger installations, and commercial contracting across Rapid City and 9 surrounding Black Hills communities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/electrical-services" className="btn-secondary">
              Browse All 10 Services
            </Link>
            <Link to="/service-areas" className="btn-outline">
              Browse All 10 Service Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
