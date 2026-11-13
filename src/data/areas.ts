export interface ServiceAreaFaq {
  question: string;
  answer: string;
}

export interface TravelDetails {
  distance: string;
  driveTime: string;
  route: string;
  dispatchNotice: string;
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
  travel: TravelDetails;
  landmarks: string[];
  faqs: ServiceAreaFaq[];
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'electrician-rapid-city-sd',
    name: 'Rapid City, SD',
    metaTitle: 'Electrician in Rapid City, SD | Bucks Electric',
    metaDescription:
      'Licensed electrician in Rapid City, SD providing residential and commercial electrical repairs, panel upgrades, wiring, and lighting. Call (605) 343-5630.',
    heading: 'Electrician in Rapid City, SD',
    summary:
      'Comprehensive residential and commercial electrical repairs, 200A panel upgrades, EV chargers, and rewiring in Rapid City.',
    intro: [
      'Bucks Electric is headquartered at 1720A Samco Rd in Rapid City, South Dakota. As a locally owned electrical contractor holding a 4.8-star Google rating, we provide dependable master-level electrical services across Pennington County.',
      'Whether you are dealing with flickering lights in a historic West Boulevard home, modernizing an overloaded circuit breaker panel, or outfitting a commercial showroom, our licensed electricians provide transparent pricing and code-compliant workmanship. Call (605) 343-5630 to schedule service.',
    ],
    localContext: [
      'Rapid City sits at the base of the Black Hills where summer thunderstorms cause severe utility surges and winter blizzards push home heating systems to their limits. Many neighborhoods—including West Boulevard, Robbinsdale, and Canyon Lake—feature homes built between 1940 and 1980 with original 60A or 100A electrical services.',
      'Modern living demands substantial power for central air conditioning, induction ranges, and electric vehicles. Bucks Electric specializes in 200-amp service upgrades, working directly with Black Hills Energy to safely expand household capacity.',
    ],
    servicePagesAvailable: true,
    travel: {
      distance: '0 miles (Local Headquarters)',
      driveTime: 'Immediate local dispatch',
      route: 'Central shop at 1720A Samco Rd, Rapid City, SD 57702',
      dispatchNotice:
        'Our primary shop and inventory warehouse are located right here in Rapid City. Vans are fully stocked for same-day repairs and scheduled installations across the city.',
    },
    landmarks: [
      'Skyline Drive & Dinosaur Park',
      'West Boulevard Historic District',
      'Canyon Lake Park & Chapel in the Hills',
      'South Dakota School of Mines & Technology',
      'Founders Park & Rapid Creek Corridor',
      'Robbinsdale & Red Rocks Communities',
    ],
    faqs: [
      {
        question: 'Where is Bucks Electric physically located in Rapid City?',
        answer:
          'Our office and shop are located at 1720A Samco Rd, Rapid City, SD 57702. Customers are welcome to contact us directly at (605) 343-5630.',
      },
      {
        question: 'Do you offer commercial electrical services in Rapid City?',
        answer:
          'Yes. We handle commercial power distribution, 3-phase machinery hookups, showroom lighting retrofits, tenant buildouts, and electrical maintenance across Rapid City commercial districts.',
      },
      {
        question: 'How quickly can an electrician arrive for troubleshooting in Rapid City?',
        answer:
          'Because our headquarters is in Rapid City, we schedule prompt appointments across all city zip codes (57701, 57702, 57703) and provide emergency diagnostic dispatch for urgent electrical safety hazards.',
      },
    ],
  },
  {
    slug: 'electrician-box-elder-sd',
    name: 'Box Elder, SD',
    metaTitle: 'Electrician in Box Elder, SD | Bucks Electric',
    metaDescription:
      'Reliable electrician serving Box Elder, SD. Bucks Electric offers residential electrical upgrades, panel replacements, EV chargers, and new installations.',
    heading: 'Electrician in Box Elder, SD',
    summary:
      'Electrical repairs, 200A service upgrades, Level 2 EV charging stations, and new wiring for Box Elder homes and businesses.',
    intro: [
      'Box Elder is one of the fastest-growing communities in South Dakota, driven by residential subdivision expansions and the historic B-21 Raider mission at Ellsworth Air Force Base. Bucks Electric provides dependable residential and commercial electrical services for Box Elder property owners.',
      'Dispatched directly from our Rapid City shop just minutes away, our electricians handle everything from dedicated garage circuits and home EV chargers to commercial lighting. Call (605) 343-5630 to discuss your electrical project.',
    ],
    localContext: [
      'The explosive housing growth in Box Elder means many homeowners are finishing basements, adding Level 2 electric vehicle chargers, or equipping detached outbuildings with subpanels. Meanwhile, established homes near the Douglas School District and Highway 14/16 corridor frequently need breaker upgrades to handle modern appliance loads.',
      'Our team coordinates closely with local utility providers and municipal inspectors to ensure all electrical work is 100% permitted and compliant with South Dakota electrical regulations.',
    ],
    servicePagesAvailable: true,
    travel: {
      distance: '~10-12 miles east of our Rapid City shop',
      driveTime: 'Approx. 15-20 minutes',
      route: 'Direct access via I-90 E and SD-44 E',
      dispatchNotice:
        'All Box Elder service calls are dispatched from our central shop at 1720A Samco Rd in Rapid City. We do not operate a separate storefront in Box Elder, ensuring direct accountability and lower overhead costs for our customers.',
    },
    landmarks: [
      'Ellsworth Air Force Base (Main Gate & Flightline)',
      'Douglas High School & Middle School Campus',
      'Highway 14/16 Commercial Corridor',
      'Patriot Elementary & Northern Lights Subdivisions',
    ],
    faqs: [
      {
        question: 'Does Bucks Electric charge extra travel fees for Box Elder, SD?',
        answer:
          'No. Box Elder is within our core immediate service radius just 15 minutes east of our Rapid City headquarters, so standard local rates apply.',
      },
      {
        question: 'Can you install a 240V Level 2 EV charger in Box Elder?',
        answer:
          'Yes. We frequently install dedicated 50A and 60A circuits for Tesla Wall Connectors and universal EV charging stations in Box Elder attached garages.',
      },
      {
        question: 'Do you work on commercial light-industrial buildings near Ellsworth AFB?',
        answer:
          'Yes. We provide 3-phase electrical maintenance, equipment hookups, and LED high-bay installations for commercial properties throughout the Box Elder area.',
      },
    ],
  },
  {
    slug: 'electrician-black-hawk-sd',
    name: 'Black Hawk, SD',
    metaTitle: 'Electrician in Black Hawk, SD | Bucks Electric',
    metaDescription:
      'Professional electrician serving Black Hawk, SD. Bucks Electric provides home electrical repairs, wiring, lighting, and code-compliant installations.',
    heading: 'Electrician in Black Hawk, SD',
    summary:
      'Residential electrical repairs, well pump wiring, panel upgrades, and lighting for homes and properties in Black Hawk.',
    intro: [
      'Black Hawk sits nestled along the foothills of the Black Hills just northwest of Rapid City along the Meade County line. Bucks Electric serves Black Hawk homeowners with prompt, honest electrical contracting scheduled directly from our 1720A Samco Rd headquarters.',
      'From troubleshooting dead circuits and upgrading older 100-amp panels to wiring detached workshops and exterior lighting, call (605) 343-5630 to speak with an experienced electrician.',
    ],
    localContext: [
      'Properties in Black Hawk often feature acreage lots, detached workshops, private well systems, and custom homes exposed to heavy foothills winds and winter cold. Reliable electrical distribution to outbuildings and freeze-protected heating circuits are vital.',
      'Our electricians ensure every circuit is properly sized, protected with modern AFCI/GFCI breakers, and grounded with dual copper grounding rods driven deep into Black Hills soil.',
    ],
    servicePagesAvailable: true,
    travel: {
      distance: '~9-11 miles northwest of our Rapid City shop',
      driveTime: 'Approx. 12-15 minutes',
      route: 'Quick commute via I-90 W / Sturgis Rd (SD-79)',
      dispatchNotice:
        'All Black Hawk service calls are dispatched directly from our main Rapid City headquarters. Our fully equipped vans carry standard breakers, wiring, and diagnostic tools to complete most repairs in a single visit.',
    },
    landmarks: [
      'Black Hawk Elementary School',
      'Peaceful Pines Road Foothills Corridor',
      'Sturgis Road (Old Highway 79)',
      'Meade County Border Communities',
    ],
    faqs: [
      {
        question: 'Can you wire a detached garage or workshop in Black Hawk?',
        answer:
          'Yes. We install underground conduit feeds, subpanels (60A to 100A), 240V welder outlets, and high-output LED lighting for workshops and barns in Black Hawk.',
      },
      {
        question: 'How do I schedule an electrical repair in Black Hawk?',
        answer:
          'Call our office at (605) 343-5630. We can discuss your symptoms, provide clear pricing expectations, and dispatch a technician to your property.',
      },
    ],
  },
  {
    slug: 'electrician-summerset-sd',
    name: 'Summerset, SD',
    metaTitle: 'Electrician in Summerset, SD | Bucks Electric',
    metaDescription:
      'Licensed electrician serving Summerset, SD. Contact Bucks Electric for residential electrical wiring, panel upgrades, and fixture installations.',
    heading: 'Electrician in Summerset, SD',
    summary:
      'Residential electrical installations, finished basement wiring, panel modernizations, and EV chargers for Summerset residents.',
    intro: [
      'Summerset is an active, family-friendly community positioned along the Interstate 90 corridor between Black Hawk and Piedmont. Bucks Electric provides premier electrical wiring, installations, and repairs for Summerset homeowners.',
      'Whether you are finishing a lower-level living area, modernizing your interior lighting with recessed LED downlights, or installing backup generator interlocks, our team delivers code-compliant excellence. Call (605) 343-5630 to schedule your appointment.',
    ],
    localContext: [
      'As a master-planned community that has seen substantial expansion over the past two decades, Summerset homes typically feature modern 200-amp service panels. However, growing families frequently require additional circuits for basement bedroom additions, entertainment suites, hot tubs, and garage electric vehicle charging stations.',
      'Bucks Electric specializes in clean, minimally invasive wiring runs that preserve your home’s finished drywall and architectural trim.',
    ],
    servicePagesAvailable: true,
    travel: {
      distance: '~12-14 miles northwest of our Rapid City shop',
      driveTime: 'Approx. 15-18 minutes',
      route: 'Northwest along the I-90 corridor (Exit 48 / Exit 52)',
      dispatchNotice:
        'Service calls for Summerset are dispatched from our central Rapid City shop. We do not maintain a local office in Summerset, keeping our operational costs low and our service quality consistent.',
    },
    landmarks: [
      'Stagebarn Canyon Road & Stagebarn Middle School',
      'Sun Valley Residential Area',
      'Summerset City Park & Community Trail',
      'I-90 Foothills Corridor',
    ],
    faqs: [
      {
        question: 'Can you install electrical wiring for an unfinished basement in Summerset?',
        answer:
          'Yes. We design and install complete basement electrical packages including AFCI-protected bedroom circuits, smoke detector interlinks, bathroom GFCI feeds, and recessed LED can conversions.',
      },
      {
        question: 'Do you install hot tub and spa electrical connections in Summerset?',
        answer:
          'Yes. We install dedicated 50A or 60A 240V circuits with outdoor weatherproof GFCI disconnects located within line-of-sight of the spa per electrical code.',
      },
    ],
  },
  {
    slug: 'electrician-piedmont-sd',
    name: 'Piedmont, SD',
    metaTitle: 'Electrician in Piedmont, SD | Bucks Electric',
    metaDescription:
      'Experienced electrician serving Piedmont, SD. Bucks Electric provides residential rewiring, panel upgrades, and commercial electrical repairs.',
    heading: 'Electrician in Piedmont, SD',
    summary:
      'Acreage property electrical service, 200A/400A panel upgrades, barn wiring, and repairs in Piedmont, South Dakota.',
    intro: [
      'Located along the Piedmont Valley at the eastern foot of the Northern Black Hills, Piedmont features a unique mix of residential neighborhoods, equestrian homesteads, and rural acreage properties. Bucks Electric brings dependable electrical contracting to Piedmont homeowners and agricultural properties.',
      'From upgrading undersized rural electrical services to troubleshooting intermittent power outages on outbuildings, call (605) 343-5630 to speak directly with an electrician.',
    ],
    localContext: [
      'Rural and foothills properties in Piedmont often feature long underground service runs from utility transformers to main panels, making proper wire sizing critical to prevent voltage drops. In addition, properties with horse barns, detached workshops, and well pumps place high continuous demands on electrical distribution.',
      'We install heavy-duty subpanels, surge protection for domestic water pumps, and safe backup generator connections designed for harsh winter freezes.',
    ],
    servicePagesAvailable: true,
    travel: {
      distance: '~15-18 miles northwest of our Rapid City shop',
      driveTime: 'Approx. 18-22 minutes',
      route: 'Straight northwest on I-90 W (Exit 44 / Exit 46)',
      dispatchNotice:
        'Dispatched directly from our 1720A Samco Rd shop in Rapid City. We serve both the town of Piedmont and surrounding valley acreage properties.',
    },
    landmarks: [
      'Piedmont Valley & Elk Creek Road',
      'Timberwood Park & Foothills Subdivisions',
      'Piedmont Community Center & Park',
      'Stagebarn Road Agricultural Corridor',
    ],
    faqs: [
      {
        question: 'Can you upgrade an older rural property in Piedmont to 200-amp or 400-amp service?',
        answer:
          'Yes. We coordinate with the electric utility to calculate voltage drop over long service laterals, install new heavy-duty meter pedestals, and upgrade main breaker panels.',
      },
      {
        question: 'Do you offer generator connections for homes on well water in Piedmont?',
        answer:
          'Yes. A 240V manual interlock or automatic transfer switch allows a backup generator to power your 240V well pump, furnace, and refrigeration during winter power cuts.',
      },
    ],
  },
  {
    slug: 'electrician-hill-city-sd',
    name: 'Hill City, SD',
    metaTitle: 'Electrician in Hill City, SD | Bucks Electric',
    metaDescription:
      'Trusted electrician serving Hill City, SD and the Black Hills. Residential and commercial electrical repairs, lighting, and wiring solutions.',
    heading: 'Electrician in Hill City, SD',
    summary:
      'Electrical services for historic properties, seasonal cabins, commercial restaurants, and year-round homes in Hill City.',
    intro: [
      'Hill City—the "Heart of the Black Hills"—is renowned for its rich history, timbered mountain cabins, tourist attractions, and active Main Street businesses. Bucks Electric provides professional electrical services across Hill City, dispatched from our Rapid City headquarters.',
      'From modernizing cabin fuse boxes and installing winter freeze-protection circuits to commercial restaurant and retail lighting, call (605) 343-5630 to discuss your electrical needs.',
    ],
    localContext: [
      'Nestled deep in the Black Hills National Forest along US-16, Hill City experiences heavier mountain snowfall and colder winter extremes than the foothills below. Mountain cabins and seasonal lodging properties often sit unheated during shoulder months, making safe wiring and dedicated heat-tape circuits essential to prevent burst plumbing.',
      'Retail storefronts, wineries, and restaurants on Main Street also experience heavy seasonal visitor surges requiring reliable commercial power distribution and aesthetic lighting.',
    ],
    servicePagesAvailable: true,
    travel: {
      distance: '~26-28 miles southwest of our Rapid City shop',
      driveTime: 'Approx. 35-40 minutes',
      route: 'Scenic drive via US-16 W through the Black Hills National Forest',
      dispatchNotice:
        'All work in Hill City is coordinated from our central shop at 1720A Samco Rd, Rapid City. We schedule dedicated service appointments to ensure comprehensive, efficient project completion.',
    },
    landmarks: [
      'The 1880 Train Depot & Black Hills Central Railroad',
      'Black Hills Institute of Geological Research',
      'Historic Hill City Main Street Commercial District',
      'Sheridan Lake & Spring Creek Recreation Areas',
    ],
    faqs: [
      {
        question: 'Do you service seasonal cabins and vacation rentals in Hill City?',
        answer:
          'Yes. We inspect electrical wiring, install safe heating circuits, replace outdated panels, and install code-compliant smoke/CO detector interlinks for vacation rentals.',
      },
      {
        question: 'Can you install commercial lighting for businesses on Hill City Main Street?',
        answer:
          'Yes. We install architectural track lighting, commercial display illumination, and outdoor pedestrian lighting for local retail shops, restaurants, and tasting rooms.',
      },
    ],
  },
  {
    slug: 'electrician-keystone-sd',
    name: 'Keystone, SD',
    metaTitle: 'Electrician in Keystone, SD | Bucks Electric',
    metaDescription:
      'Commercial and residential electrician serving Keystone, SD. Dependable electrical repairs, lighting systems, and service upgrades.',
    heading: 'Electrician in Keystone, SD',
    summary:
      'Commercial hospitality electrical maintenance, boardwalk lighting, residential repairs, and 3-phase power in Keystone.',
    intro: [
      'Keystone serves as the world-famous gateway to Mount Rushmore National Memorial. With millions of annual visitors, Keystone’s hotels, boardwalk shops, and restaurants depend on flawless electrical reliability. Bucks Electric delivers commercial and residential electrical services throughout Keystone, South Dakota.',
      'Whether you operate a hospitality business preparing for the peak summer tourist season or need residential electrical repairs on a mountain home, call (605) 343-5630 to speak with our licensed team.',
    ],
    localContext: [
      'During the summer tourism rush, Keystone’s electrical grid and commercial facilities run at peak capacity. Commercial kitchens, HVAC chillers, illuminated signage, and boardwalk lighting operate under heavy continuous loads. Electrical failures during July or August can cost businesses thousands in lost revenue.',
      'Bucks Electric provides scheduled preventative maintenance, 3-phase panel load balancing, and prompt troubleshooting to keep Keystone businesses operating smoothly.',
    ],
    servicePagesAvailable: true,
    travel: {
      distance: '~21-23 miles southwest of our Rapid City shop',
      driveTime: 'Approx. 25-30 minutes',
      route: 'Direct access via SD-79 S and SD-40 W / US-16A',
      dispatchNotice:
        'Dispatched from our primary Rapid City facility. We maintain full scheduling coordination for commercial hospitality clients and mountain homeowners in Keystone.',
    },
    landmarks: [
      'Mount Rushmore National Memorial Gateway',
      'Historic Keystone Boardwalk & Main Street',
      'Iron Mountain Road Scenic Corridor',
      'Big Thunder Gold Mine & National Forest Trails',
    ],
    faqs: [
      {
        question: 'Can Bucks Electric perform commercial maintenance before Keystone’s tourist season starts?',
        answer:
          'Yes. We recommend scheduling spring electrical audits in March or April to test emergency lighting, inspect commercial kitchen circuits, and balance panels before summer visitors arrive.',
      },
      {
        question: 'Do you work on commercial signs and exterior boardwalk lighting in Keystone?',
        answer:
          'Yes. We install and repair weather-resistant exterior LED lighting, illuminated business signage feeds, and parking area illumination.',
      },
    ],
  },
  {
    slug: 'electrician-sturgis-sd',
    name: 'Sturgis, SD',
    metaTitle: 'Electrician in Sturgis, SD | Bucks Electric',
    metaDescription:
      'Licensed electrical contractor serving Sturgis, SD. Bucks Electric offers commercial electrical, residential repairs, panel upgrades, and lighting.',
    heading: 'Electrician in Sturgis, SD',
    summary:
      'Commercial venue power distribution, residential panel upgrades, rewiring, and lighting services in Sturgis, South Dakota.',
    intro: [
      'Sturgis is world-renowned for hosting the annual Sturgis Motorcycle Rally, yet it remains a vibrant, year-round community with busy local businesses, civic institutions, and historic residential neighborhoods. Bucks Electric provides commercial and residential electrical contracting across Sturgis, coordinated from our Rapid City facility.',
      'From commercial venue power distribution and main service upgrades to troubleshooting home circuits and installing EV chargers, call (605) 343-5630 to discuss your electrical project.',
    ],
    localContext: [
      'Sturgis businesses must be prepared for extreme surges in power demand during rally events, requiring robust 3-phase distribution, temporary power hookups, and heavy-duty disconnects. Year-round, residential homeowners in older Sturgis neighborhoods near downtown benefit from modernizing outdated 100A panels and cloth-insulated wiring.',
      'Our team is licensed, bonded, and certified to meet all South Dakota Electrical Commission code requirements across Meade County.',
    ],
    servicePagesAvailable: true,
    travel: {
      distance: '~28-30 miles northwest of our Rapid City shop',
      driveTime: 'Approx. 30-35 minutes',
      route: 'Convenient commute northwest along I-90 W (Exit 30 / Exit 32)',
      dispatchNotice:
        'All Sturgis electrical projects are dispatched from our central shop at 1720A Samco Rd in Rapid City. We schedule scheduled projects and estimate consultations with clear arrival windows.',
    },
    landmarks: [
      'Bear Butte State Park (Sacred Mato Paha)',
      'Fort Meade VA Medical Center & Historic Campus',
      'Lazelle Street & Downtown Sturgis Commercial District',
      'Sturgis Motorcycle Museum & Hall of Fame',
    ],
    faqs: [
      {
        question: 'Can you handle commercial power distribution for event venues in Sturgis?',
        answer:
          'Yes. We configure heavy commercial disconnects, 3-phase panel boards, subpanels, and temporary generator hookups tailored for event venues and commercial plazas.',
      },
      {
        question: 'Do you offer residential electrical panel upgrades in Sturgis?',
        answer:
          'Yes. We modernize older residential fuse boxes and 100-amp panels to modern 200-amp services, coordinating permits with the South Dakota Electrical Commission.',
      },
    ],
  },
  {
    slug: 'electrician-spearfish-sd',
    name: 'Spearfish, SD',
    metaTitle: 'Electrician in Spearfish, SD | Bucks Electric',
    metaDescription:
      'Professional electrician serving Spearfish, SD. Bucks Electric provides residential wiring, panel upgrades, and commercial electrical services.',
    heading: 'Electrician in Spearfish, SD',
    summary:
      'Residential rewiring, 200A service modernizations, commercial installations, and EV charging in Spearfish, South Dakota.',
    intro: [
      'Spearfish, known as the "Queen City," is a scenic hub in the Northern Black Hills home to Black Hills State University, outdoor enthusiasts, and a thriving local economy. Bucks Electric serves Spearfish residential homeowners, rental property managers, and commercial business owners.',
      'Whether you are modernizing a historic residence near the university, upgrading your service panel, or outfitting a commercial building, call (605) 343-5630 to discuss your electrical project with our team.',
    ],
    localContext: [
      'The Spearfish housing market blends historic Queen City homes featuring older wiring configurations with brand-new residential subdivisions stretching along the valley floor. Older properties often require aluminum wiring remediation, ungrounded outlet replacement, and panel expansions.',
      'Meanwhile, modern properties frequently seek Level 2 electric vehicle charging installations and whole-home backup generator transfer systems to withstand Northern Hills blizzards.',
    ],
    servicePagesAvailable: true,
    travel: {
      distance: '~47-50 miles northwest of our Rapid City shop',
      driveTime: 'Approx. 45-50 minutes',
      route: 'Northwest along I-90 W through Lawrence County',
      dispatchNotice:
        'All Spearfish appointments are planned and dispatched from our primary facility at 1720A Samco Rd, Rapid City. We cluster appointments and arrive with fully stocked vehicles to ensure efficient, full-day productivity.',
    },
    landmarks: [
      'Black Hills State University (BHSU) Campus',
      'Spearfish Canyon Scenic Byway & Bridal Veil Falls',
      'Lookout Mountain & Crow Peak Recreation Areas',
      'Historic Downtown Spearfish Commercial District',
    ],
    faqs: [
      {
        question: 'How do you coordinate service calls in Spearfish from Rapid City?',
        answer:
          'We schedule dedicated half-day and full-day appointment blocks for Spearfish projects. Our service vans arrive fully equipped with breakers, conduit, wiring, and diagnostic tools to complete the job cleanly.',
      },
      {
        question: 'Do you install EV chargers for homeowners in Spearfish?',
        answer:
          'Yes. We install Level 2 EV charging stations (Tesla, ChargePoint, Emporia, universal) in garages and on exterior posts across Spearfish.',
      },
    ],
  },
  {
    slug: 'electrician-custer-sd',
    name: 'Custer, SD',
    metaTitle: 'Electrician in Custer, SD | Bucks Electric',
    metaDescription:
      'Reliable electrical services in Custer, SD. Bucks Electric provides home electrical repairs, generator hookups, lighting, and panel upgrades.',
    heading: 'Electrician in Custer, SD',
    summary:
      'Backup generator connections, timber cabin electrical repairs, 200A panel upgrades, and lighting in Custer, South Dakota.',
    intro: [
      'Custer is the historic county seat of Custer County, situated in the heart of the Southern Black Hills near Custer State Park and Crazy Horse Memorial. Bucks Electric delivers dependable residential and commercial electrical contracting to Custer property owners.',
      'From installing whole-house generator transfer switches to modernizing older cabin wiring and repairing breaker faults, call (605) 343-5630 to speak directly with an experienced electrician.',
    ],
    localContext: [
      'The rugged topography and forested acreage of Custer County mean rural properties can experience extended power outages when heavy winter snow brings down tree limbs on overhead utility lines. Having a code-compliant backup generator connection or automatic transfer switch is an essential safeguard for keeping well pumps and heating systems running.',
      'Additionally, many vacation cabins and mountain retreats benefit from comprehensive electrical safety inspections, GFCI protection, and exterior lighting upgrades.',
    ],
    servicePagesAvailable: true,
    travel: {
      distance: '~40-42 miles southwest of our Rapid City shop',
      driveTime: 'Approx. 45-50 minutes',
      route: 'Southwest via US-16 W through Pennington and Custer counties',
      dispatchNotice:
        'Coordinated and dispatched from our main Rapid City shop at 1720A Samco Rd. We schedule dedicated time for Custer projects to deliver thorough, unhurried craftsmanship.',
    },
    landmarks: [
      'Custer State Park (Wildlife Loop & Sylvan Lake)',
      'Crazy Horse Memorial Mountain Monument',
      'Jewel Cave National Monument Corridor',
      'Historic Downtown Custer Commercial Corridor',
    ],
    faqs: [
      {
        question: 'Can you install a generator transfer switch for my rural home in Custer?',
        answer:
          'Yes. We install manual transfer interlocks and automatic standby transfer switches (ATS) that safely power your furnace, well pump, and refrigerator during winter outages.',
      },
      {
        question: 'Do you work on seasonal cabins in the Custer area?',
        answer:
          'Yes. We inspect and upgrade wiring, replace obsolete fuse boxes, install freeze-protection heat cables, and verify grounding for seasonal and year-round properties.',
      },
    ],
  },
];

export function findServiceArea(slug: string) {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}
