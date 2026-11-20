import { ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react';
import { WHY_US_PILLARS } from '../data/landingData';

export function LandingWhyUs() {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="h-6 w-6 text-volt-600" aria-hidden="true" />;
      case 1:
        return <Award className="h-6 w-6 text-volt-600" aria-hidden="true" />;
      case 2:
        return <FileText className="h-6 w-6 text-volt-600" aria-hidden="true" />;
      case 3:
      default:
        return <CheckCircle2 className="h-6 w-6 text-volt-600" aria-hidden="true" />;
    }
  };

  return (
    <section id="why-us" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-volt-600">Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-950 sm:text-4xl lg:text-5xl">
            Built on Safety, Code Compliance & Proven Local Expertise
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-700 sm:text-lg">
            Electricity is not an area for guesswork. Here is why homeowners, contractors, and business owners across
            Rapid City trust our licensed electrical team.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between rounded-3xl border border-navy-100 bg-navy-50/40 p-7 shadow-xs transition hover:border-volt-400 hover:bg-white hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-volt-500/15">
                    {getPillarIcon(idx)}
                  </div>
                  <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-bold text-volt-400">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-950">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-navy-700">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
