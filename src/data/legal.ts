export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: 'Information we collect',
    paragraphs: [
      'This website does not contain contact forms, quote requests, booking forms, or newsletter sign-ups. We do not ask visitors to submit personal information through the website.',
      'If you choose to call Buck\'s Electric Inc at (605) 343-5630, the information you share during that call is handled as part of our normal business communications.',
    ],
  },
  {
    heading: 'Maps and third-party services',
    paragraphs: [
      'The Contact page displays a Google Maps embed and links to our Google Maps listing. Google may process technical information, such as your IP address, when those features load. Google\'s own privacy policy governs that processing.',
    ],
  },
  {
    heading: 'Cookies and analytics',
    paragraphs: [
      'This website does not set its own tracking cookies. Your browser may still store cookies set by Google Maps when you view the embedded map.',
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The date at the top of this page reflects the latest revision.',
    ],
  },
  {
    heading: 'Contact us',
    paragraphs: [
      'For questions about this Privacy Policy, call Buck\'s Electric Inc at (605) 343-5630 or visit us at 1720A Samco Rd, Rapid City, SD 57702.',
    ],
  },
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: 'Use of this website',
    paragraphs: [
      'This website provides general information about the electrical services offered by Buck\'s Electric Inc in Rapid City, South Dakota. You may browse it for personal, non-commercial use.',
    ],
  },
  {
    heading: 'Information and accuracy',
    paragraphs: [
      'We work to keep the information on this website accurate and current. Descriptions of services are general and do not replace an on-site assessment by a qualified electrician. Information on this site is not a quote, estimate, or guarantee of work.',
    ],
  },
  {
    heading: 'Electrical safety',
    paragraphs: [
      'Electrical problems can be dangerous. If you notice burning smells, sparks, warm outlets, or repeated breaker trips, switch off power to the affected circuit where it is safe to do so and call (605) 343-5630 before continuing to use it.',
    ],
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      'The text, images, logos, and design of this website belong to Buck\'s Electric Inc or are used with permission. Do not copy or reuse them without written permission, except for personal reference.',
    ],
  },
  {
    heading: 'Third-party links',
    paragraphs: [
      'This website links to third-party services, such as Google Maps. We do not control those websites and are not responsible for their content or practices.',
    ],
  },
  {
    heading: 'Limitation of liability',
    paragraphs: [
      'To the fullest extent permitted by law, Buck\'s Electric Inc is not liable for losses arising from your use of this website or reliance on the information it contains.',
    ],
  },
  {
    heading: 'Contact us',
    paragraphs: [
      'For questions about these Terms and Conditions, call (605) 343-5630 or visit 1720A Samco Rd, Rapid City, SD 57702.',
    ],
  },
];
