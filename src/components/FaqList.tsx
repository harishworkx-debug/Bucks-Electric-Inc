import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/data/services';

export function FaqList({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white">
      {faqs.map((faq) => (
        <details key={faq.question} className="group px-6 py-5 open:bg-navy-50/60">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-bold text-navy-900 marker:hidden">
            {faq.question}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-navy-600 transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-4 leading-relaxed text-navy-700">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
