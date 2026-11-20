import {
  PanelTop,
  Search,
  Cable,
  BatteryCharging,
  Lightbulb,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { LANDING_SERVICES, type LandingService } from '../data/landingData';

interface LandingServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export function LandingServices({ onSelectService }: LandingServicesProps) {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'PanelTop':
        return <PanelTop className="h-6 w-6 text-volt-600" aria-hidden="true" />;
      case 'Search':
        return <Search className="h-6 w-6 text-volt-600" aria-hidden="true" />;
      case 'Cable':
        return <Cable className="h-6 w-6 text-volt-600" aria-hidden="true" />;
      case 'BatteryCharging':
        return <BatteryCharging className="h-6 w-6 text-volt-600" aria-hidden="true" />;
      case 'Lightbulb':
        return <Lightbulb className="h-6 w-6 text-volt-600" aria-hidden="true" />;
      case 'Zap':
      default:
        return <Zap className="h-6 w-6 text-volt-600" aria-hidden="true" />;
    }
  };

  const handleServiceClick = (service: LandingService) => {
    if (onSelectService) {
      onSelectService(service.name);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="scroll-mt-20 bg-navy-50/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-volt-600">Our Core Capabilities</span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-950 sm:text-4xl lg:text-5xl">
            Professional Electrical Services in Rapid City
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-700 sm:text-lg">
            Every electrical installation and repair is completed in accordance with the National Electrical Code (NEC)
            and South Dakota Electrical Commission safety regulations.
          </p>
        </div>

        {/* 6 Responsive Service Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LANDING_SERVICES.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between rounded-3xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-volt-400 hover:shadow-xl lg:p-8"
            >
              <div className="space-y-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-volt-500/15">
                  {getServiceIcon(service.icon)}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy-950 sm:text-2xl">{service.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700 sm:text-base">{service.description}</p>
                </div>

                {/* Benefits Bullet Points */}
                <div className="space-y-2.5 border-t border-navy-100 pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-500">Service Highlights:</span>
                  <ul className="space-y-2 text-xs font-medium text-navy-800 sm:text-sm">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-volt-600" aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inquiry Trigger */}
              <div className="mt-8 border-t border-navy-100 pt-5">
                <button
                  type="button"
                  onClick={() => handleServiceClick(service)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 py-3 text-sm font-bold text-white transition hover:bg-navy-800 active:scale-95"
                >
                  <span>Request {service.shortName}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
