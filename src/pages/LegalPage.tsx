import { CallButton } from '@/components/CallButton';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/SectionHeading';
import type { LegalSection } from '@/data/legal';
import { Link } from '@/lib/router';
import { breadcrumbSchema } from '@/lib/schema';
import { useSeo } from '@/lib/seo';
import { SITE } from '@/lib/site';

interface LegalPageProps {
  title: string;
  description: string;
  path: string;
  sections: LegalSection[];
}

export const LEGAL_UPDATED = 'November 8, 2026';

export function LegalPage({ title, description, path, sections }: LegalPageProps) {
  useSeo({
    title: `${title} | Bucks Electric`,
    description,
    path,
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: title, path },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        title={title}
        description={description}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: title, path },
        ]}
        actions={<CallButton label={`Call ${SITE.phoneDisplay}`} />}
      />

      <Section>
        <article className="mx-auto max-w-3xl space-y-10">
          <p className="text-sm font-semibold text-navy-600">{`Last updated: ${LEGAL_UPDATED}`}</p>
          {sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl text-navy-900">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-navy-700">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <div className="border-t border-navy-100 pt-8 text-sm text-navy-600">
            <p>
              Looking for electrical service? Return to{' '}
              <Link to="/" className="font-semibold text-navy-900 underline hover:text-navy-700">
                Home
              </Link>
              , browse our{' '}
              <Link to="/electrical-services" className="font-semibold text-navy-900 underline hover:text-navy-700">
                Electrical Services
              </Link>
              , or{' '}
              <Link to="/contact-us" className="font-semibold text-navy-900 underline hover:text-navy-700">
                Contact Bucks Electric
              </Link>
              .
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}
