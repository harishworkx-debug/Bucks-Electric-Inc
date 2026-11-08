import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl space-y-4 ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="text-3xl text-navy-900 sm:text-4xl">{title}</h2>
      {description && <p className="text-lg leading-relaxed text-navy-700">{description}</p>}
    </div>
  );
}

export function Section({
  id,
  tone = 'white',
  children,
}: {
  id?: string;
  tone?: 'white' | 'muted';
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${tone === 'muted' ? 'bg-navy-50/60' : 'bg-white'} py-20 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}
