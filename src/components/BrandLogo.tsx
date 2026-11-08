import { Zap } from 'lucide-react';
import { Link } from '@/lib/router';
import { SITE } from '@/lib/site';

interface BrandLogoProps {
  tone?: 'light' | 'dark';
}

export function BrandLogo({ tone = 'dark' }: BrandLogoProps) {
  const isLight = tone === 'light';
  return (
    <Link to="/" className="group flex items-center gap-3 rounded-lg" aria-label={`${SITE.name} home`}>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 shadow-sm transition duration-300 group-hover:rotate-[-6deg]">
        <Zap className="h-6 w-6 fill-volt-500 text-volt-500" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className={`block text-lg font-extrabold ${isLight ? 'text-white' : 'text-navy-900'}`}>
          Buck's Electric
        </span>
        <span
          className={`block text-xs font-semibold uppercase tracking-[0.18em] ${isLight ? 'text-navy-100' : 'text-navy-600'}`}
        >
          Inc. · Rapid City, SD
        </span>
      </span>
    </Link>
  );
}
