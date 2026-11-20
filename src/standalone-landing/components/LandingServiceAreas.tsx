import { MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { LANDING_IDENTITY, NEARBY_COMMUNITIES } from '../data/landingData';

export function LandingServiceAreas() {
  return (
    <section id="service-area" className="scroll-mt-20 bg-navy-50/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-volt-600">Geographic Coverage</span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-950 sm:text-4xl lg:text-5xl">
            Serving Rapid City & Surrounding Black Hills Communities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-700 sm:text-lg">
            Our electricians are centrally based at{' '}
            <span className="font-bold text-navy-950">{LANDING_IDENTITY.address.street}</span> in Rapid City, providing
            prompt, fully equipped service vehicles throughout Pennington, Meade, Lawrence, and Custer counties.
          </p>
        </div>

        {/* Primary Hub Spotlight */}
        <div className="mt-14 rounded-3xl border border-navy-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
            <div className="space-y-2 lg:col-span-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-volt-500/20 px-3 py-1 text-xs font-bold text-navy-900">
                <MapPin className="h-3.5 w-3.5 text-volt-600" />
                Primary Hub & Dispatch Base
              </span>
              <h3 className="text-2xl font-bold text-navy-950 sm:text-3xl">Rapid City, South Dakota</h3>
              <p className="text-sm leading-relaxed text-navy-700 sm:text-base">
                Immediate dispatch across all Rapid City neighborhoods: Downtown, West Boulevard, Robbinsdale, Canyon
                Lake, North Rapid, Red Rocks, and Rapid Valley.
              </p>
            </div>
            <div className="rounded-2xl bg-navy-900 p-5 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-volt-400">Direct Base Address</div>
              <div className="mt-1 text-base font-bold">{LANDING_IDENTITY.address.full}</div>
              <div className="mt-3 text-xs text-navy-300 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-volt-400 shrink-0" />
                <span>Centralized electrical parts & trucks</span>
              </div>
            </div>
          </div>
        </div>

        {/* 9 Surrounding Communities Grid */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-navy-900 mb-4">Genuinely Served Nearby Towns & Cities:</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {NEARBY_COMMUNITIES.map((community) => (
              <div
                key={community.name}
                className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-5 shadow-2xs transition hover:border-volt-400 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-navy-950">{community.name}</h4>
                    <span className="text-xs font-semibold text-navy-500">ZIP {community.zip}</span>
                  </div>

                  <p className="mt-2 text-xs text-navy-600 leading-relaxed">{community.focus}</p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-navy-50 pt-3 text-xs font-semibold text-navy-700">
                  <span className="flex items-center gap-1 text-navy-500">
                    <Navigation className="h-3.5 w-3.5 text-volt-600" />
                    {community.distance}
                  </span>
                  <span className="flex items-center gap-1 text-navy-500">
                    <Clock className="h-3.5 w-3.5 text-volt-600" />
                    {community.driveTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Google Maps Embed Centered on Rapid City, SD (Without business name parameters) */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-navy-200 bg-white shadow-lg">
          <div className="p-4 bg-navy-900 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-volt-400">Service Territory Map</span>
              <p className="text-sm font-semibold">Rapid City & Black Hills Operational Radius</p>
            </div>
            <a
              href={LANDING_IDENTITY.phoneHref}
              className="inline-flex items-center gap-2 text-xs font-bold text-volt-400 hover:text-volt-300"
            >
              <span>Call to confirm your address</span>
              <span>&rarr;</span>
            </a>
          </div>
          <div className="h-[380px] w-full">
            <iframe
              src={LANDING_IDENTITY.mapEmbedUrl}
              title="Service Area Map for Electrician in Rapid City, South Dakota"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
