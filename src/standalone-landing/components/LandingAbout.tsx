import { ShieldCheck, CheckCircle2, Award, Wrench } from 'lucide-react';
import { LANDING_IDENTITY } from '../data/landingData';

export function LandingAbout() {
  const highlights = [
    'South Dakota Electrical Commission (SDEC) licensed master & journeyman electricians',
    'Deep understanding of Black Hills seasonal climate, deep freeze cycles & ground conductivity',
    'Specialized expertise in historic Rapid City homes (West Boulevard, Robbinsdale, Canyon Lake)',
    'Full compliance with National Electrical Code (NEC) Article 220 load calculation standards',
    'Direct coordination with the City of Rapid City for electrical permits & final inspections',
  ];

  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Context & Local Mastery */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-volt-600">Local Craftsmanship</span>
            <h2 className="text-3xl font-extrabold text-navy-950 sm:text-4xl lg:text-5xl">
              Dedicated Electrical Contracting Standards in Rapid City
            </h2>

            <p className="text-base leading-relaxed text-navy-700 sm:text-lg">
              Operating an electrical system safely in Western South Dakota requires an understanding of distinct
              regional conditions. From sub-zero winter temperatures that stress outdoor meter sockets and transformer
              connections to rapid spring thunderstorms that produce destructive voltage surges, electrical systems in
              Rapid City demand robust engineering.
            </p>

            <p className="text-base leading-relaxed text-navy-700 sm:text-lg">
              Many historic neighborhoods throughout Pennington County feature original 60-amp or 100-amp service
              panels that are simply inadequate for modern high-efficiency heat pumps, induction cooking, and Level 2
              electric vehicle chargers. Our team approaches every project with meticulous code compliance, sizing
              conductors and breaker buses to deliver clean, uninterrupted power for decades to come.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-volt-600" aria-hidden="true" />
                  <span className="text-sm font-semibold text-navy-900 sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Standards Card */}
          <div className="rounded-3xl border border-navy-100 bg-navy-900 p-8 text-white shadow-xl sm:p-10">
            <div className="space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-volt-500 text-navy-950 font-bold">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="text-2xl font-extrabold text-white">Our Workmanship Code</h3>

              <div className="space-y-4 text-sm leading-relaxed text-navy-200">
                <div className="flex items-start gap-3 rounded-2xl bg-navy-800/80 p-4 border border-navy-700/60">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-volt-400" />
                  <div>
                    <h4 className="font-bold text-white">Licensed Craftsmanship Only</h4>
                    <p className="mt-1 text-xs text-navy-300">
                      We never cut corners or use unqualified labor. All work is executed or directly overseen by state-certified master and journeyman electricians.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-navy-800/80 p-4 border border-navy-700/60">
                  <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-volt-400" />
                  <div>
                    <h4 className="font-bold text-white">Permitted & Inspected Peace of Mind</h4>
                    <p className="mt-1 text-xs text-navy-300">
                      When a project requires a permit, we manage the filings with the South Dakota Electrical Commission and ensure clean sign-offs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-navy-800 p-5 border border-navy-700 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-volt-400">Headquarters Dispatch</span>
                <p className="mt-1 text-base font-bold text-white">{LANDING_IDENTITY.address.full}</p>
                <p className="mt-0.5 text-xs text-navy-300">Directly serving Pennington County & the Black Hills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
