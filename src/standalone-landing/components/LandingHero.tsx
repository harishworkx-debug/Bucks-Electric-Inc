import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { LANDING_IDENTITY, LANDING_TRUST_METRICS } from '../data/landingData';

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950 pt-12 pb-20 text-white lg:pt-20 lg:pb-28">
      {/* Decorative Glow */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-volt-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-navy-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Main Hero Column */}
          <div className="space-y-6">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-volt-500/30 bg-volt-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-volt-400 sm:text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0 text-volt-500" aria-hidden="true" />
              <span>South Dakota State Licensed • SDEC Code Verified</span>
            </div>

            {/* Strict H1: NICHE + LOCATION */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Electrician in{' '}
              <span className="text-volt-400 underline decoration-volt-500/60 decoration-wavy decoration-2 underline-offset-8">
                Rapid City
              </span>
              , South Dakota
            </h1>

            {/* Localized Descriptive Paragraph */}
            <p className="max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl">
              Professional residential and commercial electrical contracting dispatched directly from{' '}
              <span className="font-semibold text-white">1720A Samco Rd</span>. From 200A panel upgrades and root-cause
              diagnostics to EV chargers and safe rewiring across Rapid City and the Black Hills.
            </p>

            {/* Direct CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
              <a
                href={LANDING_IDENTITY.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-volt-500 px-8 py-4 text-base font-extrabold text-navy-950 shadow-lg shadow-volt-500/20 transition hover:bg-volt-400 hover:shadow-xl active:scale-95 sm:text-lg"
              >
                <Phone className="h-5 w-5 fill-current" aria-hidden="true" />
                <span>Call {LANDING_IDENTITY.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-xs transition hover:border-volt-400 hover:bg-white/10 active:scale-95"
              >
                <span>Request Service Online</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Quick Benefits Checklist */}
            <div className="grid gap-2 pt-4 sm:grid-cols-2 text-sm text-navy-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-volt-400 shrink-0" />
                <span>Permitted SDEC Inspections Handled</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-volt-400 shrink-0" />
                <span>Upfront Written Estimates Before Work</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-volt-400 shrink-0" />
                <span>Pennington County Direct Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-volt-400 shrink-0" />
                <span>Priority Emergency Hazard Response</span>
              </div>
            </div>
          </div>

          {/* Quick Dispatch Card */}
          <div className="rounded-3xl border border-navy-700/80 bg-navy-800/80 p-7 shadow-2xl backdrop-blur-md sm:p-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-navy-700 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-volt-400">Direct Local Dispatch</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available Now
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">Need an Electrician in Rapid City Today?</h2>

              <p className="text-sm leading-relaxed text-navy-200">
                Call our local shop to describe your project or electrical concern. Speak directly with experienced
                electricians who know Rapid City homes and commercial codes.
              </p>

              <div className="space-y-3 rounded-2xl bg-navy-900/90 p-4 text-sm text-navy-200">
                <div className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-volt-400" />
                  <div>
                    <strong className="text-white">Shop Hours:</strong> {LANDING_IDENTITY.hours}
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-volt-400" />
                  <div>
                    <strong className="text-white">Local Base:</strong> {LANDING_IDENTITY.address.full}
                  </div>
                </div>
              </div>

              <a
                href={LANDING_IDENTITY.phoneHref}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-volt-500 py-3.5 text-base font-extrabold text-navy-950 transition hover:bg-volt-400"
              >
                <Phone className="h-4 w-4 fill-current" />
                <span>Click to Call: {LANDING_IDENTITY.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Trust Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-navy-800 pt-10 sm:grid-cols-4 lg:gap-8">
          {LANDING_TRUST_METRICS.map((metric) => (
            <div key={metric.label} className="rounded-2xl bg-navy-800/40 p-5 border border-navy-800/60">
              <span className="text-2xl font-black text-volt-400 sm:text-3xl lg:text-4xl">{metric.value}</span>
              <h3 className="mt-1 text-sm font-bold text-white sm:text-base">{metric.label}</h3>
              <p className="mt-1 text-xs text-navy-300">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
