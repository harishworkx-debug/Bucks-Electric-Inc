import { useState, useEffect } from 'react';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { LANDING_IDENTITY } from '../data/landingData';

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#service-area', label: 'Service Areas' },
    { href: '#why-us', label: 'Why Choose Us' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'shadow-md py-3' : 'border-b border-navy-100 py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Strictly Text-based Identity: SERVICE + LOCATION with Zap Icon */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-navy-950 transition hover:opacity-90"
          aria-label={LANDING_IDENTITY.displayName}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-volt-500 shadow-sm transition group-hover:scale-105">
            <Zap className="h-5 w-5 fill-current" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-navy-900 sm:text-xl">
              {LANDING_IDENTITY.displayName}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy-500">
              Licensed Electrical Services
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Landing Page Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-navy-700 transition hover:bg-navy-50 hover:text-navy-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: Direct Clickable Call */}
        <div className="flex items-center gap-3">
          <a
            href={LANDING_IDENTITY.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-volt-500 px-5 py-2.5 text-sm font-extrabold text-navy-950 shadow-sm transition hover:bg-volt-400 active:scale-95"
          >
            <Phone className="h-4 w-4 shrink-0 fill-current" aria-hidden="true" />
            <span>{LANDING_IDENTITY.phoneDisplay}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-200 text-navy-900 transition hover:bg-navy-50 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="animate-rise border-t border-navy-100 bg-white px-5 pb-6 pt-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-navy-800 transition hover:bg-navy-50 hover:text-navy-950"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-navy-100 pt-4">
            <a
              href={LANDING_IDENTITY.phoneHref}
              onClick={handleNavClick}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-volt-500 py-3.5 text-base font-extrabold text-navy-950 shadow-sm hover:bg-volt-400"
            >
              <Phone className="h-4 w-4 fill-current" aria-hidden="true" />
              <span>Call {LANDING_IDENTITY.phoneDisplay}</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
