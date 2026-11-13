import { SITE } from '@/lib/site';

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQS: HomeFaqItem[] = [
  {
    question: "What electrical services does Buck's Electric Inc offer in Rapid City?",
    answer:
      "We provide complete electrical repair, 200-amp panel upgrades, whole-home wiring and rewiring, Level 2 EV charger installation, commercial electrical buildouts, recessed LED lighting, outlet and switch repairs, and electrical troubleshooting across Rapid City and the Black Hills.",
  },
  {
    question: 'How do I know if my electrical panel needs an upgrade?',
    answer:
      'Common signs include frequent breaker tripping, flickering lights when appliances kick on, an older fuse box or split-bus panel, rust or corrosion inside the box, or planning additions like a hot tub, central heat pump, or EV charging station. An upgrade to 200 amps ensures safe, reliable power.',
  },
  {
    question: 'Do you handle both residential homes and commercial businesses?',
    answer:
      'Yes. We service both residential properties (homes, townhouses, cabins, and rentals) and commercial facilities (showrooms, offices, retail stores, warehouses, and tenant buildouts) with dedicated equipment circuits, 3-phase power distribution, and code-compliant installations.',
  },
  {
    question: 'Do you pull permits with the South Dakota Electrical Commission?',
    answer:
      'Yes. For work requiring permits—such as panel upgrades, service replacements, new circuits, and commercial buildouts—we pull the appropriate state and local permits and coordinate the final inspection so your property remains fully insured and code-compliant.',
  },
  {
    question: 'Can you install a Level 2 EV charger in my garage?',
    answer:
      'Yes. We install dedicated 240V 40A to 60A circuits for Level 2 EV charging stations. We perform electrical load calculations to ensure your main panel can handle the charging load and install hardwired wall units or NEMA 14-50 receptacles for Tesla and all EV brands.',
  },
  {
    question: 'How quickly can an electrician arrive in Rapid City?',
    answer:
      `Our office is located right at 1720A Samco Rd in Rapid City, SD. For scheduled work, we offer prompt appointment windows. If you have an urgent electrical issue such as total power loss or a burning smell, call ${SITE.phoneDisplay} immediately for priority guidance.`,
  },
  {
    question: 'What should I do if I smell burning or see sparks from an outlet or panel?',
    answer:
      `Immediately switch off the breaker controlling that circuit if it is safe to do so. If you cannot identify the breaker or the panel is sparking, shut down the main breaker or contact the utility company. Keep people away and call Buck's Electric at ${SITE.phoneDisplay} right away.`,
  },
  {
    question: 'Do you provide upfront pricing, estimates, or financing options?',
    answer:
      'Yes. We believe in honest, transparent pricing. When you call us, we discuss the scope of your project, evaluate on-site requirements, and provide straightforward options before work begins so you never encounter surprise hidden charges. Flexible payment and financing assistance are also available for major electrical upgrades.',
  },
];

