import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from '@/lib/router';

interface Crumb {
  name: string;
  path: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs: Crumb[];
  image?: { src: string; alt: string };
  actions?: ReactNode;
}

export function PageHero({ eyebrow, title, description, breadcrumbs, image, actions }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="animate-rise space-y-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-navy-200">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-1">
                    {isLast ? (
                      <span aria-current="page" className="font-semibold text-white">
                        {crumb.name}
                      </span>
                    ) : (
                      <>
                        <Link to={crumb.path} className="hover:text-volt-400">
                          {crumb.name}
                        </Link>
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
          {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.14em] text-volt-400">{eyebrow}</p>}
          <h1 className="text-4xl sm:text-5xl">{title}</h1>
          <p className="max-w-xl text-lg leading-relaxed text-navy-100">{description}</p>
          {actions && <div className="flex flex-col gap-4 pt-2 sm:flex-row">{actions}</div>}
        </div>

        {image && (
          <div className="animate-rise overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img
              src={image.src}
              alt={image.alt}
              width={940}
              height={650}
              className="h-full max-h-[460px] w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
