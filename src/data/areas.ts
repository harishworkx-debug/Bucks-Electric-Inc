export interface ServiceAreaFaq {
  question: string;
  answer: string;
}

export interface ServiceArea {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  summary: string;
  intro: string[];
  localContext: string[];
  servicePagesAvailable: boolean;
  faqs: ServiceAreaFaq[];
}

const CALL_FAQ = (name: string): ServiceAreaFaq => ({
  question: `How do I arrange electrical work in ${name}?`,
  answer: 'Call (605) 343-5630 and describe the property and the work you need. We will confirm what we can help with.',
});

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'electrician-rapid-city-sd',
    name: 'Rapid City, SD',
    metaTitle: 'Electrician in Rapid City, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrician in Rapid City, SD for repairs, installation, wiring, panel upgrades, and lighting. Call Buck\'s Electric at (605) 343-5630.',
    heading: 'Electrician in Rapid City, SD',
    summary:
      'Electrical repair, installation, wiring, panel upgrades, and lighting for homes and businesses in Rapid City.',
    intro: [
      'Buck\'s Electric Inc is based at 1720A Samco Rd in Rapid City, South Dakota. Our electrical work is focused on the homes and businesses of this city.',
      'If you need an electrician in Rapid City, call (605) 343-5630 and describe the problem or project. We will tell you what we can help with.',
    ],
    localContext: [
      'Rapid City sits at the eastern edge of the Black Hills, and its homes and businesses see the full range of South Dakota weather. Cold winters place heavy demand on heating equipment, and summers bring heavy cooling loads, both of which can stress older electrical systems.',
      'Many properties in the city have wiring and panels that were installed decades ago. Checking breakers, outlets, and panel capacity is a practical first step when electrical problems start to appear.',
    ],
    servicePagesAvailable: true,
    faqs: [
      {
        question: 'Where is Buck\'s Electric Inc located?',
        answer: 'We are at 1720A Samco Rd, Rapid City, SD 57702.',
      },
      CALL_FAQ('Rapid City'),
    ],
  },
  {
    slug: 'electrician-box-elder-sd',
    name: 'Box Elder, SD',
    metaTitle: 'Electrician in Box Elder, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrician in Box Elder, SD for electrical repairs, installation, and upgrades. Call Buck\'s Electric Inc at (605) 343-5630.',
    heading: 'Electrician in Box Elder, SD',
    summary: 'Electrical repairs, installation, and panel upgrades for Box Elder homes and businesses.',
    intro: [
      'Box Elder is a community in the Rapid City area, and many of its homes and buildings rely on electrical systems that need periodic attention. Buck\'s Electric Inc serves Box Elder, South Dakota, with electrical work scheduled from our Rapid City office.',
      'If you have a problem or project in Box Elder, call (605) 343-5630 and tell us the address and what you need.',
    ],
    localContext: [
      'Properties in Box Elder are often a mix of newer construction and older buildings. Power demands from heating, cooling, and workshop equipment can outgrow an existing panel, making a capacity check worthwhile.',
      'Its proximity to Rapid City means many residents and businesses see the same weather and wear on outdoor wiring and fixtures, so outdoor lighting and exterior outlets are common requests.',
    ],
    servicePagesAvailable: false,
    faqs: [
      { question: 'Do you serve Box Elder, SD?', answer: 'Call (605) 343-5630 with your address and we will confirm service for that location.' },
      CALL_FAQ('Box Elder'),
    ],
  },
  {
    slug: 'electrician-black-hawk-sd',
    name: 'Black Hawk, SD',
    metaTitle: 'Electrician in Black Hawk, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrician in Black Hawk, SD for repairs, wiring, and lighting. Call Buck\'s Electric Inc at (605) 343-5630 to discuss your project.',
    heading: 'Electrician in Black Hawk, SD',
    summary: 'Electrical repair, wiring, and lighting for Black Hawk homes and properties.',
    intro: [
      'Black Hawk is a community near Rapid City in the Black Hills area. Buck\'s Electric Inc provides electrical work in Black Hawk, South Dakota, coordinated from our office at 1720A Samco Rd.',
      'For electrical repairs or new work in Black Hawk, call (605) 343-5630 and describe the property and the problem.',
    ],
    localContext: [
      'Homes in the Black Hills area often have outdoor lighting, detached garages, and workshops that need dependable power. Each of these can require added circuits or fixtures.',
      'Because weather can affect outdoor connections, checking exterior outlets and fixtures is a common part of maintaining a property here.',
    ],
    servicePagesAvailable: false,
    faqs: [
      { question: 'Do you serve Black Hawk, SD?', answer: 'Call (605) 343-5630 with your address and we will confirm service for that location.' },
      CALL_FAQ('Black Hawk'),
    ],
  },
  {
    slug: 'electrician-summerset-sd',
    name: 'Summerset, SD',
    metaTitle: 'Electrician in Summerset, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrician in Summerset, SD for electrical installation, lighting, and repairs. Call Buck\'s Electric Inc at (605) 343-5630.',
    heading: 'Electrician in Summerset, SD',
    summary: 'Electrical installation, lighting, and repairs for homes and properties in Summerset.',
    intro: [
      'Summerset is a growing community near Rapid City. Buck\'s Electric Inc provides electrical installation and repair in Summerset, South Dakota, with work coordinated from our Rapid City office.',
      'Call (605) 343-5630 to talk through new outlets, lighting, or repairs in Summerset.',
    ],
    localContext: [
      'Newer homes and growing neighborhoods often need additional circuits for kitchens, home offices, and garages, which makes installation planning important.',
      'Lighting upgrades, including exterior and entryway lighting, are common in residential areas where people want safe, well-lit approaches.',
    ],
    servicePagesAvailable: false,
    faqs: [
      { question: 'Do you serve Summerset, SD?', answer: 'Call (605) 343-5630 with your address and we will confirm service for that location.' },
      CALL_FAQ('Summerset'),
    ],
  },
  {
    slug: 'electrician-piedmont-sd',
    name: 'Piedmont, SD',
    metaTitle: 'Electrician in Piedmont, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrician in Piedmont, SD for electrical repairs, wiring, and panel upgrades. Call Buck\'s Electric Inc at (605) 343-5630.',
    heading: 'Electrician in Piedmont, SD',
    summary: 'Electrical repairs, wiring, and panel upgrades for Piedmont homes and properties.',
    intro: [
      'Piedmont is a community near Rapid City. Buck\'s Electric Inc serves Piedmont, South Dakota, with electrical work planned and scheduled from our office at 1720A Samco Rd.',
      'If you are dealing with a repair or planning an upgrade in Piedmont, call (605) 343-5630 and describe what you are seeing.',
    ],
    localContext: [
      'Rural and semi-rural properties often rely on panels and outbuildings that were added over time. Adding a well pump, shop, or equipment can push an older panel to its limit.',
      'A panel capacity check is a practical first step for properties that have changed how they use power.',
    ],
    servicePagesAvailable: false,
    faqs: [
      { question: 'Do you serve Piedmont, SD?', answer: 'Call (605) 343-5630 with your address and we will confirm service for that location.' },
      CALL_FAQ('Piedmont'),
    ],
  },
  {
    slug: 'electrician-hill-city-sd',
    name: 'Hill City, SD',
    metaTitle: 'Electrician in Hill City, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrician in Hill City, SD for lighting, repairs, and wiring in Black Hills properties. Call Buck\'s Electric Inc at (605) 343-5630.',
    heading: 'Electrician in Hill City, SD',
    summary: 'Lighting, repairs, and wiring for Hill City homes, cabins, and businesses.',
    intro: [
      'Hill City is a Black Hills town known for its tourism and seasonal visitors. Buck\'s Electric Inc provides electrical work in Hill City, South Dakota, coordinated from our Rapid City office.',
      'Call (605) 343-5630 to discuss repairs, lighting, or wiring for your home, cabin, or business in Hill City.',
    ],
    localContext: [
      'Cabins and seasonal properties can sit unused for long periods, so checking outlets, breakers, and connections before the busy season is a sensible habit.',
      'Businesses that serve visitors rely on dependable lighting and power, so prompt repairs and clear lighting upgrades matter.',
    ],
    servicePagesAvailable: false,
    faqs: [
      { question: 'Do you serve Hill City, SD?', answer: 'Call (605) 343-5630 with your address and we will confirm service for that location.' },
      CALL_FAQ('Hill City'),
    ],
  },
  {
    slug: 'electrician-keystone-sd',
    name: 'Keystone, SD',
    metaTitle: 'Electrician in Keystone, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrician in Keystone, SD for commercial electrical repairs, lighting, and wiring. Call Buck\'s Electric Inc at (605) 343-5630.',
    heading: 'Electrician in Keystone, SD',
    summary: 'Electrical repairs, lighting, and wiring for Keystone homes and visitor-focused businesses.',
    intro: [
      'Keystone is a town in the Black Hills near Mount Rushmore, with many businesses that depend on lighting and reliable power for visitors. Buck\'s Electric Inc serves Keystone, South Dakota, from our Rapid City office.',
      'For repairs or new work in Keystone, call (605) 343-5630 and describe the building and the work needed.',
    ],
    localContext: [
      'Businesses in tourist towns often have heavy seasonal use, which can strain circuits and expose worn connections. Scheduling checks before peak season helps prevent interruptions.',
      'Exterior lighting for entrances, signs, and parking areas is a common need for businesses and homes in Keystone.',
    ],
    servicePagesAvailable: false,
    faqs: [
      { question: 'Do you serve Keystone, SD?', answer: 'Call (605) 343-5630 with your address and we will confirm service for that location.' },
      CALL_FAQ('Keystone'),
    ],
  },
  {
    slug: 'electrician-sturgis-sd',
    name: 'Sturgis, SD',
    metaTitle: 'Electrician in Sturgis, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrician in Sturgis, SD for commercial repairs, circuit installation, and lighting. Call Buck\'s Electric Inc at (605) 343-5630.',
    heading: 'Electrician in Sturgis, SD',
    summary: 'Commercial repairs, circuit installation, and lighting for Sturgis businesses and homes.',
    intro: [
      'Sturgis is a city in the northern Black Hills with a busy local economy. Buck\'s Electric Inc provides electrical work in Sturgis, South Dakota, coordinated from our office at 1720A Samco Rd.',
      'Call (605) 343-5630 to discuss repairs, new circuits, or lighting for your Sturgis property.',
    ],
    localContext: [
      'Businesses in Sturgis often expand or change layouts, which means new circuits, outlets, and lighting are common requests.',
      'Events that draw large crowds can put heavy seasonal demand on electrical systems, so checking equipment and circuits ahead of busy periods is useful.',
    ],
    servicePagesAvailable: false,
    faqs: [
      { question: 'Do you serve Sturgis, SD?', answer: 'Call (605) 343-5630 with your address and we will confirm service for that location.' },
      CALL_FAQ('Sturgis'),
    ],
  },
  {
    slug: 'electrician-spearfish-sd',
    name: 'Spearfish, SD',
    metaTitle: 'Electrician in Spearfish, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrician in Spearfish, SD for electrical installation, wiring, and repairs. Call Buck\'s Electric Inc at (605) 343-5630.',
    heading: 'Electrician in Spearfish, SD',
    summary: 'Electrical installation, wiring, and repairs for Spearfish homes and businesses.',
    intro: [
      'Spearfish is a city in the northern Black Hills, home to a college campus and a mix of residential and commercial properties. Buck\'s Electric Inc serves Spearfish, South Dakota, from our Rapid City office.',
      'Call (605) 343-5630 to describe your electrical installation, wiring, or repair needs in Spearfish.',
    ],
    localContext: [
      'Older homes near the city center may have wiring that was not designed for modern appliances and electronics. Rewiring or adding circuits is a common solution.',
      'Rental properties and multi-unit buildings often need repairs that keep tenants safe and reduce interruptions in power.',
    ],
    servicePagesAvailable: false,
    faqs: [
      { question: 'Do you serve Spearfish, SD?', answer: 'Call (605) 343-5630 with your address and we will confirm service for that location.' },
      CALL_FAQ('Spearfish'),
    ],
  },
  {
    slug: 'electrician-custer-sd',
    name: 'Custer, SD',
    metaTitle: 'Electrician in Custer, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrician in Custer, SD for lighting, repairs, and generator connections. Call Buck\'s Electric Inc at (605) 343-5630.',
    heading: 'Electrician in Custer, SD',
    summary: 'Lighting, repairs, and generator connections for Custer homes, cabins, and businesses.',
    intro: [
      'Custer is a community in the southern Black Hills, close to Custer State Park. Buck\'s Electric Inc provides electrical work in Custer, South Dakota, coordinated from our Rapid City office.',
      'Call (605) 343-5630 to discuss repairs, lighting, or backup power connections for your property in Custer.',
    ],
    localContext: [
      'Properties in rural Black Hills areas can be affected by longer outages, which makes backup power planning and generator connections a practical concern.',
      'Cabins and lodging properties often need dependable lighting and outlets for guests, along with regular checks of outdoor fixtures.',
    ],
    servicePagesAvailable: false,
    faqs: [
      { question: 'Do you serve Custer, SD?', answer: 'Call (605) 343-5630 with your address and we will confirm service for that location.' },
      CALL_FAQ('Custer'),
    ],
  },
];

export function findServiceArea(slug: string) {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}
