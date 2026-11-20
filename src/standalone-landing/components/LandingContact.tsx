import { useState, type FormEvent } from 'react';
import { Phone, MapPin, Clock, AlertTriangle, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { LANDING_IDENTITY, LANDING_SERVICES } from '../data/landingData';

interface LandingContactProps {
  selectedService?: string;
}

export function LandingContact({ selectedService = '' }: LandingContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService || LANDING_SERVICES[0]?.name || '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setErrorMessage('Please enter a valid phone number so our electrician can call you back.');
      return;
    }

    setSubmitting(true);
    // Simulate instantaneous client-side handling & feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      service: LANDING_SERVICES[0]?.name || '',
      details: '',
    });
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-volt-600">Get In Touch</span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-950 sm:text-4xl lg:text-5xl">
            Schedule Electrical Service in Rapid City, SD
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-700 sm:text-lg">
            Call our direct dispatch desk or send an inquiry below. We respond promptly with upfront answers and
            scheduling.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Direct Call & Base Information Box */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-navy-100 bg-navy-900 p-8 text-white shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-volt-400">Direct Phone Line</span>
              <a
                href={LANDING_IDENTITY.phoneHref}
                className="mt-3 inline-flex items-center gap-3 text-3xl font-extrabold text-white transition hover:text-volt-400 sm:text-4xl"
              >
                <Phone className="h-8 w-8 text-volt-400 shrink-0" aria-hidden="true" />
                <span>{LANDING_IDENTITY.phoneDisplay}</span>
              </a>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">
                Call now to speak directly with an experienced local electrician. We discuss your project scope, code
                requirements, and arrange on-site visits.
              </p>

              <div className="mt-6 border-t border-navy-800 pt-6 space-y-4 text-sm text-navy-200">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-volt-400" />
                  <div>
                    <h3 className="font-bold text-white">Physical Shop & Parts Facility</h3>
                    <p>{LANDING_IDENTITY.address.full}</p>
                    <p className="text-xs text-navy-300">Pennington County, South Dakota</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-volt-400" />
                  <div>
                    <h3 className="font-bold text-white">Operating Hours</h3>
                    <p>{LANDING_IDENTITY.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-navy-800/80 p-4 border border-navy-700 flex items-start gap-3 text-xs text-navy-200">
                <AlertTriangle className="h-4 w-4 text-volt-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Emergency Warning:</strong> If you detect burning electrical odors or
                  sparking panels, shut off your main breaker if safe, and call us immediately.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Service Inquiry Form */}
          <div className="rounded-3xl border border-navy-200 bg-navy-50/50 p-8 shadow-sm sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-5 animate-rise">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">Inquiry Received Successfully!</h3>
                <p className="max-w-md text-base leading-relaxed text-navy-700">
                  Thank you, <span className="font-semibold text-navy-950">{formData.name}</span>. A licensed
                  electrician will review your request for{' '}
                  <span className="font-semibold text-navy-950">{formData.service}</span> and call you back at{' '}
                  <span className="font-bold text-navy-950">{formData.phone}</span> promptly.
                </p>
                <div className="rounded-2xl bg-white p-4 border border-navy-100 text-xs text-navy-600 max-w-sm">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 inline mr-1" />
                  Immediate help needed? Call our dispatch desk directly at{' '}
                  <a href={LANDING_IDENTITY.phoneHref} className="font-bold text-navy-900 underline">
                    {LANDING_IDENTITY.phoneDisplay}
                  </a>
                  .
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl bg-navy-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-navy-800"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-navy-950">Request Service or Estimate</h3>
                  <p className="mt-1 text-sm text-navy-600">
                    Fill out this quick form and our team will get in touch to confirm availability.
                  </p>
                </div>

                {errorMessage && (
                  <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs font-semibold text-rose-700">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label htmlFor="landing-name" className="block text-xs font-bold uppercase tracking-wider text-navy-700">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="landing-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dale Henderson"
                    className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-400 focus:border-volt-500 focus:outline-none focus:ring-2 focus:ring-volt-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="landing-phone" className="block text-xs font-bold uppercase tracking-wider text-navy-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="landing-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(605) 555-0123"
                    className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-400 focus:border-volt-500 focus:outline-none focus:ring-2 focus:ring-volt-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="landing-service" className="block text-xs font-bold uppercase tracking-wider text-navy-700">
                    Service Needed *
                  </label>
                  <select
                    id="landing-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-950 focus:border-volt-500 focus:outline-none focus:ring-2 focus:ring-volt-500/20"
                  >
                    {LANDING_SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="General Electrical Work">Other Electrical Work / Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="landing-details" className="block text-xs font-bold uppercase tracking-wider text-navy-700">
                    Project Notes or Warning Signs
                  </label>
                  <textarea
                    id="landing-details"
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe what is occurring, property type, or any tripping breakers..."
                    className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-400 focus:border-volt-500 focus:outline-none focus:ring-2 focus:ring-volt-500/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-volt-500 py-4 text-base font-extrabold text-navy-950 shadow-md transition hover:bg-volt-400 active:scale-95 disabled:opacity-50"
                >
                  <Send className="h-4 w-4 fill-current" />
                  <span>{submitting ? 'Submitting Request...' : 'Send Service Request'}</span>
                </button>

                <p className="text-center text-xs text-navy-500">
                  Your information is kept private. We use it solely to respond to your electrical service inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
