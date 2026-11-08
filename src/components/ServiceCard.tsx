import { ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';
import { Link } from '@/lib/router';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="card-lift group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-8">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 transition duration-300 group-hover:bg-volt-500">
        <Icon className="h-7 w-7 text-volt-500 transition duration-300 group-hover:text-navy-900" aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-xl text-navy-900">{service.name}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-navy-700">{service.cardSummary}</p>
      <Link
        to={`/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-900 transition-colors hover:text-navy-600"
      >
        {`View ${service.name.toLowerCase()} service`}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
