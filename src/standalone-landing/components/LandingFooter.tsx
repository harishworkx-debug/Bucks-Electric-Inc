import { Zap, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { LANDING_IDENTITY } from '../data/landingData';

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-navy-200 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Identity Column */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-volt-500 text-navy-950">
                <Zap className="h-5 w-5 fill-current" aria-hidden="true" />
              </span>
              <span className="text-xl font-black tracking-tight text-white">{LANDING_IDENTITY.displayName}</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-navy-300">
              Professional residential and commercial electrical contracting services in Rapid City and the Black
              Hills region. Fully code-compliant installations, panel upgrades, and diagnostics.
            </p>
            <div className="flex items-center gap-2 text-xs text-volt-400">
              <ShieldCheck className="h-4 w-4" />
              <span>South Dakota Electrical Commission Compliant</span>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-volt-400 transition">
                  Electrical Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-volt-400 transition">
                  Local Standards
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-volt-400 transition">
                  Service Territory
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-volt-400 transition">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-volt-400 transition">
                  Common FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-volt-400 transition">
                  Request Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Direct Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={LANDING_IDENTITY.phoneHref} className="flex items-center gap-2 font-bold text-white hover:text-volt-400">
                  <Phone className="h-4 w-4 text-volt-400" />
                  <span>{LANDING_IDENTITY.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-navy-300">
                <MapPin className="h-4 w-4 text-volt-400 shrink-0 mt-0.5" />
                <span>
                  {LANDING_IDENTITY.address.street}
                  <br />
                  {LANDING_IDENTITY.address.city}, {LANDING_IDENTITY.address.state} {LANDING_IDENTITY.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Safe Legal Links */}
        <div className="mt-12 border-t border-navy-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-400">
          <p>© {currentYear} {LANDING_IDENTITY.fullDisplayName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-volt-400 transition">
              Privacy Policy
            </a>
            <span className="text-navy-700">•</span>
            <a href="/terms-and-conditions" className="hover:text-volt-400 transition">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
