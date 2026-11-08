import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, usePathname } from '@/lib/router';
import { CallButton } from '@/components/CallButton';
import { BrandLogo } from '@/components/BrandLogo';
import { NavDropdown, type NavChild } from '@/components/NavDropdown';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/areas';

interface NavItem {
  to: string;
  label: string;
  children?: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  {
    to: '/electrical-services',
    label: 'Electrical Services',
    children: SERVICES.map((service) => ({ to: `/${service.slug}`, label: service.name })),
  },
  {
    to: '/service-areas',
    label: 'Service Areas',
    children: SERVICE_AREAS.map((area) => ({ to: `/${area.slug}`, label: `Electrician in ${area.name}` })),
  },
  { to: '/contact-us', label: 'Contact' },
];

function isItemActive(item: NavItem, pathname: string) {
  if (pathname === item.to) return true;
  return item.children?.some((child) => child.to === pathname) ?? false;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'border-b border-navy-100'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <BrandLogo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <NavDropdown
                key={item.to}
                to={item.to}
                label={item.label}
                children={item.children}
                isActive={isItemActive(item, pathname)}
              />
            ) : (
              <Link
                key={item.to}
                to={item.to}
                aria-current={pathname === item.to ? 'page' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  pathname === item.to
                    ? 'bg-navy-50 text-navy-900'
                    : 'text-navy-700 hover:bg-navy-50 hover:text-navy-900'
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <CallButton label="Call Now" className="px-5 py-2.5 text-sm" />
          </div>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-navy-200 text-navy-900 transition hover:bg-navy-50 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="animate-rise max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-navy-100 bg-white px-5 pb-6 pt-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item, pathname);
              if (!item.children) {
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`block rounded-lg px-4 py-3 text-base font-semibold ${
                        active ? 'bg-navy-50 text-navy-900' : 'text-navy-700 hover:bg-navy-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const isOpen = expanded === item.to;
              return (
                <li key={item.to}>
                  <div className="flex items-center">
                    <Link
                      to={item.to}
                      className={`flex-1 rounded-lg px-4 py-3 text-base font-semibold ${
                        active ? 'bg-navy-50 text-navy-900' : 'text-navy-700 hover:bg-navy-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? 'Hide' : 'Show'} ${item.label} links`}
                      onClick={() => setExpanded(isOpen ? null : item.to)}
                      className="flex h-11 w-11 items-center justify-center rounded-lg text-navy-700 hover:bg-navy-50"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {isOpen && (
                    <ul className="mb-2 ml-4 mt-1 flex flex-col gap-1 border-l-2 border-volt-500 pl-3">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link to={child.to} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-navy-800 hover:bg-navy-50">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <CallButton label="Call Now" className="mt-4 w-full" />
        </nav>
      )}
    </header>
  );
}
