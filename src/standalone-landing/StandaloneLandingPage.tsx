import { useState, useEffect } from 'react';
import { LandingHeader } from './components/LandingHeader';
import { LandingHero } from './components/LandingHero';
import { LandingServices } from './components/LandingServices';
import { LandingAbout } from './components/LandingAbout';
import { LandingServiceAreas } from './components/LandingServiceAreas';
import { LandingWhyUs } from './components/LandingWhyUs';
import { LandingFaq } from './components/LandingFaq';
import { LandingContact } from './components/LandingContact';
import { LandingFooter } from './components/LandingFooter';
import { getStandaloneSeoMetadata } from './seo/landingSeo';
import { usePathname } from '@/lib/router';

export function StandaloneLandingPage() {
  const [selectedService, setSelectedService] = useState('');
  const pathname = usePathname();

  // Dynamic Client-side SEO injection
  useEffect(() => {
    const seo = getStandaloneSeoMetadata(pathname);

    // Set document title
    document.title = seo.title;

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seo.description);

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seo.canonical);

    // Set JSON-LD Schema
    const scriptId = 'standalone-landing-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(seo.schema);

    return () => {
      // Clean up dynamic schema when unmounted
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white text-navy-950 font-sans selection:bg-volt-500 selection:text-navy-950">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-volt-500 focus:px-4 focus:py-2 focus:font-bold focus:text-navy-950"
      >
        Skip to main content
      </a>

      <LandingHeader />

      <main id="landing-content">
        <LandingHero />
        <LandingServices onSelectService={(service) => setSelectedService(service)} />
        <LandingAbout />
        <LandingServiceAreas />
        <LandingWhyUs />
        <LandingFaq />
        <LandingContact selectedService={selectedService} />
      </main>

      <LandingFooter />
    </div>
  );
}
