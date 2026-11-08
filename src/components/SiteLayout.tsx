import type { ReactNode } from 'react';
import { MobileCallBar } from '@/components/MobileCallBar';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-volt-500 focus:px-4 focus:py-2 focus:font-bold focus:text-navy-900"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <div className="pb-20 md:pb-0">
        <SiteFooter />
      </div>
      <MobileCallBar />
    </div>
  );
}
