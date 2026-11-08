import { ArrowRight } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { BrandLogo } from '@/components/BrandLogo';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/data/services';

export function NotFoundPage() {
  useSeo({
    title: "Page Not Found | Buck's Electric Inc",
    description: "The page you are looking for could not be found. Return to Buck's Electric Inc or call (605) 343-5630.",
    noindex: true,
  });

  return (
    <section className="flex flex-1 items-center bg-navy-50/50 py-20">
      <div className="mx-auto w-full max-w-3xl px-5 text-center lg:px-8">
        <div className="flex justify-center">
          <BrandLogo />
        </div>
        <p className="mt-12 text-7xl font-extrabold text-volt-600 sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl text-navy-900 sm:text-4xl">This page could not be found</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-700">
          The page may have moved or the address may be incorrect. Return to the homepage or call us directly to
          talk about your electrical work.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CallButton />
          <Link to="/" className="btn-outline">
            Return to the homepage
          </Link>
        </div>
        <div className="mt-14 border-t border-navy-100 pt-10">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-navy-600">Popular electrical services</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-3">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition hover:border-navy-900"
                >
                  {service.name}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-navy-600">{`Phone: ${SITE.phoneDisplay}`}</p>
        </div>
      </div>
    </section>
  );
}
