import { Link } from '@/lib/router';
import { CallButton } from '@/components/CallButton';
import { SITE } from '@/lib/site';

interface CallCtaProps {
  title: string;
  description: string;
}

export function CallCta({ title, description }: CallCtaProps) {
  return (
    <section className="bg-navy-900 py-20 text-white lg:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 text-center lg:px-8">
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-navy-100">{description}</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <CallButton />
          <a
            href={SITE.phoneHref}
            className="text-lg font-bold text-white underline decoration-volt-500 decoration-2 underline-offset-8 transition hover:text-volt-400"
          >
            {SITE.phoneDisplay}
          </a>
        </div>
        <p className="text-sm text-navy-200">
          Visiting us?{' '}
          <Link to="/contact-us" className="font-semibold text-white underline underline-offset-4 hover:text-volt-400">
            Find our address and map
          </Link>
        </p>
      </div>
    </section>
  );
}
