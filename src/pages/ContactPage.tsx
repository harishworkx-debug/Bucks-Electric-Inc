import { MapPin, Phone, Clock3, ExternalLink } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { PageHero } from '@/components/PageHero';
import { breadcrumbSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';

export function ContactPage() {
  useSeo({
    title: "Contact Buck's Electric Inc | Rapid City, SD",
    description:
      "Call Buck's Electric Inc at (605) 343-5630 or visit 1720A Samco Rd, Rapid City, SD 57702. Find our location on the map.",
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
        eyebrow="Contact Us"
        title="Call Buck's Electric Inc"
        description="Phone is the fastest way to reach us. Call to describe your electrical problem or project, and we will explain how we can help."
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
    </>
  );
}
