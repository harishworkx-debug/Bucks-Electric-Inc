export interface LandingService {
  id: string;
  name: string;
  shortName: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface NearbyCommunity {
  name: string;
  zip: string;
  distance: string;
  driveTime: string;
  route: string;
  focus: string;
}

export interface WhyUsPillar {
  title: string;
  description: string;
  badge: string;
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export const LANDING_IDENTITY = {
  niche: 'Electrician',
  location: 'Rapid City',
  state: 'South Dakota',
  stateAbbr: 'SD',
  county: 'Pennington County',
  displayName: 'Electrician in Rapid City',
  fullDisplayName: 'Electrician in Rapid City, SD',
  headline: 'Electrician in Rapid City, South Dakota',
  tagline: 'Licensed Master & Journeyman Electrical Contracting for Homes & Businesses',
  phoneDisplay: '(605) 343-5630',
  phoneHref: 'tel:+16053435630',
  address: {
    street: '1720A Samco Rd',
    city: 'Rapid City',
    state: 'SD',
    zip: '57702',
    full: '1720A Samco Rd, Rapid City, SD 57702',
  },
  hours: 'Monday – Friday: 8:00 AM – 5:00 PM',
  emergencyAvailability: 'Priority dispatch available for urgent electrical safety hazards & power outages',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183186.29961601704!2d-103.36440811568284!3d44.07598858853765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877d42a420958197%3A0xc4f63cbb0302b1c4!2sRapid%20City%2C%20SD!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus',
};

export const LANDING_TRUST_METRICS = [
  { value: '30+ Yrs', label: 'Black Hills Experience', detail: 'Master & journeyman electricians' },
  { value: '100%', label: 'NEC Code Compliant', detail: 'Permitted South Dakota Electrical Commission standards' },
  { value: '240V / 200A', label: 'Heavy Power Specialists', detail: 'Panel upgrades, EV chargers & commercial feeds' },
  { value: 'Local Base', label: '1720A Samco Rd', detail: 'Fast dispatch across Rapid City & Pennington County' },
];

export const LANDING_SERVICES: LandingService[] = [
  {
    id: 'panel-upgrades',
    name: 'Electrical Panel Upgrades & Replacements',
    shortName: 'Panel Upgrades',
    description:
      'Upgrade outdated 60-amp or 100-amp electrical panels and obsolete fuse boxes to heavy-duty 200-amp breaker systems with whole-home surge protection to support modern electrical demands.',
    benefits: [
      '200-amp service capacity upgrades for modern appliances & HVAC',
      'NEC Article 220 load calculations & South Dakota code compliance',
      'Whole-home surge suppression & dedicated breaker circuits',
    ],
    icon: 'PanelTop',
  },
  {
    id: 'troubleshooting',
    name: 'Electrical Troubleshooting & Diagnostic Repairs',
    shortName: 'Diagnostic Repairs',
    description:
      'Comprehensive diagnostic testing to locate intermittent circuit faults, buzzing panels, persistent breaker trips, and voltage drops using specialized multimeters and thermal imaging.',
    benefits: [
      'Root-cause diagnostics for flickering lights & tripping breakers',
      'Thermal analysis for overloaded breakers and loose terminal lugs',
      'GFCI & AFCI circuit protection troubleshooting and code corrections',
    ],
    icon: 'Search',
  },
  {
    id: 'rewiring',
    name: 'Residential & Commercial Wiring & Rewiring',
    shortName: 'Wiring & Rewiring',
    description:
      'Safe replacement of deteriorated, ungrounded, or obsolete wiring in historic and older properties across Pennington County, upgrading to grounded copper branch circuits.',
    benefits: [
      'Safe replacement of outdated ungrounded wiring systems',
      'Dedicated 120V & 240V branch circuit installations for workshops & kitchens',
      'South Dakota Electrical Commission code compliance certification',
    ],
    icon: 'Cable',
  },
  {
    id: 'ev-chargers',
    name: 'Level 2 EV Charger Installation',
    shortName: 'EV Charger Installation',
    description:
      'Turnkey installation of high-amperage 240-volt Level 2 electric vehicle charging stations for Tesla and all universal J1772 / NACS EV models.',
    benefits: [
      'Dedicated 40A to 60A 240-volt charging circuit installation',
      'Panel load evaluation to guarantee safe simultaneous electrical use',
      'Indoor garage and weatherproof exterior pedestal mounting',
    ],
    icon: 'BatteryCharging',
  },
  {
    id: 'lighting',
    name: 'Interior & Exterior Lighting Installation',
    shortName: 'Lighting Installation',
    description:
      'Custom design and installation of energy-efficient recessed LED downlights, high-bay commercial warehouse fixtures, exterior security floodlights, and dimming controls.',
    benefits: [
      'Modern ultra-thin recessed wafer LED layouts with warm dimming',
      'Commercial retail, shop, and warehouse high-bay illumination',
      'Dusk-to-dawn exterior security, photocell, and motion sensor fixtures',
    ],
    icon: 'Lightbulb',
  },
  {
    id: 'generators',
    name: 'Backup Generator & Transfer Switch Wiring',
    shortName: 'Generator Wiring',
    description:
      'Installation of manual and automatic generator transfer switches connecting portable or standby generators directly to your home’s main distribution panel.',
    benefits: [
      'Code-compliant interlock kit and manual transfer switch wiring',
      'Critical circuit power backup during severe Black Hills winter blizzards',
      'Safe utility grid isolation preventing dangerous back-feeding',
    ],
    icon: 'Zap',
  },
];

export const NEARBY_COMMUNITIES: NearbyCommunity[] = [
  {
    name: 'Box Elder, SD',
    zip: '57719',
    distance: '9 miles East',
    driveTime: '12–15 min',
    route: 'E Hwy 44 / I-90 E',
    focus: 'Residential circuits, Ellsworth AFB area new builds, 200A upgrades',
  },
  {
    name: 'Black Hawk, SD',
    zip: '57718',
    distance: '10 miles NW',
    driveTime: '12–15 min',
    route: 'I-90 W / Sturgis Rd',
    focus: 'Home rewiring, detached garage wiring, panel replacements',
  },
  {
    name: 'Summerset, SD',
    zip: '57718',
    distance: '13 miles NW',
    driveTime: '15–18 min',
    route: 'I-90 W',
    focus: 'Subdivision electrical installations, EV chargers, lighting retrofits',
  },
  {
    name: 'Piedmont, SD',
    zip: '57769',
    distance: '16 miles NW',
    driveTime: '18–20 min',
    route: 'I-90 W',
    focus: 'Rural residential services, outbuilding subpanels, generator wiring',
  },
  {
    name: 'Hill City, SD',
    zip: '57745',
    distance: '27 miles SW',
    driveTime: '35–40 min',
    route: 'US-16 W',
    focus: 'Mountain cabin electrical safety, heating circuits, panel modernizations',
  },
  {
    name: 'Keystone, SD',
    zip: '57751',
    distance: '22 miles South',
    driveTime: '30–35 min',
    route: 'US-16 W & SD-40 W',
    focus: 'Commercial seasonal retail power, lighting, emergency backup systems',
  },
  {
    name: 'Sturgis, SD',
    zip: '57785',
    distance: '29 miles NW',
    driveTime: '30–35 min',
    route: 'I-90 W',
    focus: 'Commercial event electrical, panel upgrades, heavy load calculations',
  },
  {
    name: 'Spearfish, SD',
    zip: '57783',
    distance: '48 miles NW',
    driveTime: '45–50 min',
    route: 'I-90 W',
    focus: 'Commercial buildouts, residential panel modernizations, EV chargers',
  },
  {
    name: 'Custer, SD',
    zip: '57730',
    distance: '42 miles SW',
    driveTime: '50–55 min',
    route: 'US-16 W',
    focus: 'High-draw electrical circuits, generator transfer switches, rewiring',
  },
];

export const WHY_US_PILLARS: WhyUsPillar[] = [
  {
    title: 'South Dakota State Licensed & Insured',
    description:
      'All installations and repairs are performed to the rigorous standards of the South Dakota Electrical Commission (SDEC) and the National Electrical Code (NEC). Every required project is properly permitted and inspected.',
    badge: 'Code Verified',
  },
  {
    title: '30+ Years Combined Black Hills Experience',
    description:
      'Our master and journeyman electricians have extensive local knowledge of Rapid City homes, historic West Boulevard electrical systems, and commercial building infrastructures throughout Pennington County.',
    badge: 'Local Depth',
  },
  {
    title: 'Upfront, Transparent Itemized Estimates',
    description:
      'No hidden fees, surprise hourly add-ons, or vague line items. We inspect the scope of work, explain the technical requirements in clear terms, and provide honest pricing before opening your electrical panel.',
    badge: 'Clear Pricing',
  },
  {
    title: 'Root-Cause Diagnostic Problem Solving',
    description:
      'We don’t just swap out a breaker and hope for the best. We test branch circuits, check for voltage drop, calculate conductor load margins, and locate the actual underlying cause to prevent recurring faults.',
    badge: 'Precision Focus',
  },
];

export const LANDING_FAQS: LandingFaq[] = [
  {
    question: 'Do I need a permit for an electrical panel upgrade in Rapid City?',
    answer:
      'Yes. In Rapid City and across South Dakota, replacing an electrical service panel or upgrading service amperage requires a state electrical permit filed with the South Dakota Electrical Commission or the City of Rapid City Building Inspection Division. Our licensed electricians handle all permit filings and schedule the required final inspection for your safety and property insurance compliance.',
  },
  {
    question: 'What are the main signs that an electrical panel needs a 200A upgrade?',
    answer:
      'Common warning signs include circuit breakers that trip frequently when multiple appliances run simultaneously, flickering or dimming lights when your refrigerator or A/C kicks on, crackling noises inside the breaker box, or having an older 60-amp or 100-amp panel that has run out of physical breaker slots for additions like an EV charger or heat pump.',
  },
  {
    question: 'How far do you dispatch outside of Rapid City?',
    answer:
      'Our electricians operate from our central base on Samco Road in Rapid City, dispatching throughout Pennington, Meade, Lawrence, and Custer counties. We regularly serve customers in Box Elder, Black Hawk, Summerset, Piedmont, Sturgis, Spearfish, Hill City, Keystone, and Custer with transparent travel scheduling.',
  },
  {
    question: 'What is required to install a Level 2 EV charging station at my home?',
    answer:
      'A Level 2 EV charger requires a dedicated 240-volt branch circuit rated between 40 and 60 amps, wired with appropriate copper conductors back to your main electrical panel. Before installation, we perform a load calculation on your existing service to ensure your panel has sufficient headroom without overloading your main breaker.',
  },
  {
    question: 'What should I do during an electrical emergency before an electrician arrives?',
    answer:
      'If you notice sparking, smell burning plastic or fishy electrical odors near an outlet, or hear buzzing from your breaker box, immediately switch off the individual circuit breaker or the main service disconnect if it is safe to do so. Keep clear of any exposed wires or standing water, and call our direct dispatch line at (605) 343-5630 right away.',
  },
];
