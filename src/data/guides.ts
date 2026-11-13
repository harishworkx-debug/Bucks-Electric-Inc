export interface ElectricalGuide {
  id: string;
  title: string;
  targetKeyword: string;
  category: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  relatedServiceSlug: string;
  relatedServiceAnchor: string;
}

export const ELECTRICAL_GUIDES: ElectricalGuide[] = [
  {
    id: 'signs-panel-upgrade',
    title: 'Signs Your Electrical Panel Needs an Upgrade',
    targetKeyword: 'Electrical panel upgrade signs',
    category: 'Panel Modernization',
    readTime: '5 min read',
    summary:
      'Discover the critical warning signs that your circuit breaker box is struggling to keep up with modern household power demands, from flickering lights to warm breaker handles.',
    keyTakeaways: [
      'Frequent circuit breaker tripping indicates bus bar overload or circuit degradation',
      'Flickering or dimming lights when central air or appliances start reveals inadequate service',
      'Obsolete brands (Federal Pacific, Zinsco, fuse boxes) carry documented fire risks',
      'Lack of physical breaker slots prevents adding heat pumps, hot tubs, or Level 2 EV chargers',
    ],
    relatedServiceSlug: 'electrical-panel-upgrade-rapid-city-sd',
    relatedServiceAnchor: 'Electrical Panel Upgrade in Rapid City',
  },
  {
    id: 'level-2-ev-charger-home',
    title: 'Level 2 EV Charger Installation: What Homeowners Should Know',
    targetKeyword: 'Level 2 EV charger installation',
    category: 'EV Charging',
    readTime: '6 min read',
    summary:
      'Compare Level 1 vs. Level 2 charging speeds, understand 240V dedicated circuit requirements, and learn how to prepare your garage for an electric vehicle.',
    keyTakeaways: [
      'Level 2 charging adds 25-44 miles of range per hour compared to just 3-4 miles on Level 1',
      'Requires a dedicated 240V double-pole circuit (40A to 60A) with #6 or #4 AWG copper wire',
      'An NEC Article 220 load calculation prevents overloading your main service panel',
      'Hardwired installations provide maximum charging speeds and weather resistance for SD winters',
    ],
    relatedServiceSlug: 'ev-charger-installation-rapid-city-sd',
    relatedServiceAnchor: 'EV Charger Installation in Rapid City',
  },
  {
    id: 'common-electrical-problems',
    title: 'Common Electrical Problems Homeowners Should Never Ignore',
    targetKeyword: 'Common electrical problems',
    category: 'Electrical Safety',
    readTime: '4 min read',
    summary:
      'Burning plastic smells, warm wall plates, buzzing switches, and ungrounded two-prong outlets are critical warnings that demand professional diagnosis.',
    keyTakeaways: [
      'Burning odors or sizzling sounds signal active arcing that requires shutting off the breaker',
      'Warm or discolored outlet plates indicate high contact resistance and impending wire failure',
      'Ungrounded outlets lack an equipment ground path to protect sensitive modern electronics',
      'Resetting a repeatedly tripping breaker without finding the cause damages wire insulation',
    ],
    relatedServiceSlug: 'electrical-repair-rapid-city-sd',
    relatedServiceAnchor: 'Electrical Repair in Rapid City',
  },
  {
    id: 'rewiring-older-homes',
    title: 'What to Know Before Rewiring an Older Home',
    targetKeyword: 'Home rewiring',
    category: 'Rewiring & Renovation',
    readTime: '7 min read',
    summary:
      'A practical guide to replacing brittle cloth insulation, remediating 1960s aluminum wiring, and adding grounded circuits during basement or home remodels.',
    keyTakeaways: [
      'Homes built before 1975 often feature aging cloth wiring, aluminum branches, or ungrounded boxes',
      'Basement finishing is the ideal opportunity to pull new dedicated 20A kitchen and bath circuits',
      'Modern non-metallic (NM-B) copper wiring with AFCI protection prevents electrical fires',
      'Permitted work with South Dakota Electrical Commission sign-off protects home resale value',
    ],
    relatedServiceSlug: 'electrical-wiring-rapid-city-sd',
    relatedServiceAnchor: 'Electrical Wiring in Rapid City',
  },
  {
    id: 'generator-installation-prep',
    title: 'How to Prepare Your Property for a Generator Installation',
    targetKeyword: 'Generator installation',
    category: 'Backup Power',
    readTime: '5 min read',
    summary:
      'Learn the difference between automatic standby generators and manual interlock kits, and how to keep furnace blowers and well pumps running during Black Hills blizzards.',
    keyTakeaways: [
      'Automatic transfer switches (ATS) restore power automatically within 10-20 seconds',
      'Manual interlock kits provide safe, affordable portable generator power without extension cords',
      'Prioritizing critical loads (furnace, refrigerator, well pump) determines generator sizing',
      'Approved transfer switches prevent lethal utility backfeeding to line workers',
    ],
    relatedServiceSlug: 'generator-installation-rapid-city-sd',
    relatedServiceAnchor: 'Generator Installation in Rapid City',
  },
  {
    id: 'when-to-call-commercial-electrician',
    title: 'When Should You Call a Commercial Electrician?',
    targetKeyword: 'Commercial electrician',
    category: 'Commercial Contracting',
    readTime: '6 min read',
    summary:
      'Understand 3-phase power distribution, commercial lighting retrofits, machinery disconnects, and why businesses require specialized commercial electrical contractors.',
    keyTakeaways: [
      'Commercial facilities require 120/208V and 277/480V 3-phase balancing to prevent motor failures',
      'High-bay LED lighting retrofits reduce commercial electricity bills by up to 60%',
      'Tenant buildouts and retail showrooms require coordinated permitting and inspections',
      'Preventative thermal scanning identifies loose lugs before catastrophic power outages occur',
    ],
    relatedServiceSlug: 'commercial-electrician-rapid-city-sd',
    relatedServiceAnchor: 'Commercial Electrician in Rapid City',
  },
  {
    id: 'why-breakers-trip',
    title: 'Why Do Circuit Breakers Keep Tripping?',
    targetKeyword: 'Circuit breaker keeps tripping',
    category: 'Diagnostics',
    readTime: '4 min read',
    summary:
      'Understand the three primary reasons breakers trip: circuit overloads, short circuits, and ground faults, and how professional troubleshooting isolates the source.',
    keyTakeaways: [
      'Circuit overloads occur when appliances draw more current than the wire gauge allows',
      'Short circuits occur when a hot conductor touches a neutral wire, causing an immediate trip',
      'Ground faults happen when current strays into grounded metal boxes or water paths',
      'Professional digital metering pinpoints the fault without unnecessary drywall cuts',
    ],
    relatedServiceSlug: 'electrical-troubleshooting-rapid-city-sd',
    relatedServiceAnchor: 'Electrical Troubleshooting in Rapid City',
  },
  {
    id: 'benefits-led-lighting',
    title: 'Benefits of Professional LED Lighting Installation',
    targetKeyword: 'LED lighting installation',
    category: 'Lighting',
    readTime: '5 min read',
    summary:
      'From energy savings to modern aesthetic warmth, explore why ultra-thin recessed wafer lights, under-cabinet task illumination, and exterior security lights enhance properties.',
    keyTakeaways: [
      'LED retrofits use up to 80% less energy than outdated incandescent or halogen bulbs',
      'Recessed wafer downlights install easily into finished drywall ceilings with minimal clearance',
      'Modern trailing-edge LED dimmers eliminate humming, buzzing, and flickering',
      'All-weather outdoor security lighting enhances visibility during dark South Dakota winters',
    ],
    relatedServiceSlug: 'lighting-installation-rapid-city-sd',
    relatedServiceAnchor: 'Lighting Installation in Rapid City',
  },
];

