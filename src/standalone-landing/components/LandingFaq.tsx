import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { LANDING_FAQS } from '../data/landingData';

export function LandingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-20 bg-navy-50/60 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-volt-600">Homeowner Guidance</span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-950 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-700 sm:text-lg">
            Straight answers about electrical codes, permit requirements, and service scheduling in Rapid City.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {LANDING_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xs transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-navy-50/40"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-navy-950 sm:text-lg">{faq.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-100 text-navy-800 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-volt-500 text-navy-950' : ''
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-navy-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-navy-700 sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
