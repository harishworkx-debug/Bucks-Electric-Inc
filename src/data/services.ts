import {
  BatteryCharging,
  Building2,
  Cable,
  Lightbulb,
  PanelTop,
  Plug,
  Search,
  ToggleRight,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceProblem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceSection {
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface Service {
  slug: string;
  name: string;
  icon: LucideIcon;
  cardSummary: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string[];
  problems: ServiceProblem[];
  process: ServiceStep[];
  faqs: FaqItem[];
  image: { src: string; alt: string };
  related: string[];
  sections?: ServiceSection[];
}

export const SERVICES: Service[] = [
  {
    slug: 'electrical-repair-rapid-city-sd',
    name: 'Electrical Repair',
    icon: Wrench,
    cardSummary:
      'Diagnosis and repair for dead outlets, flickering lights, tripping breakers, and faulty switches in Rapid City homes and businesses.',
    metaTitle: 'Electrical Repair in Rapid City, SD | Bucks Electric',
    metaDescription:
      'Need electrical repair in Rapid City? Contact Bucks Electric for professional diagnosis and electrical repair solutions.',
    heading: 'Electrical Repair in Rapid City, SD',
    intro: [
      'When an electrical problem stops something from working, or makes it behave strangely, it needs attention before it becomes a safety issue. Bucks Electric provides dependable electrical repair and emergency electrical repair in Rapid City, South Dakota, operating from our central shop at 1720A Samco Rd.',
      'Repairs start with an accurate electrical problem diagnosis and circuit breaker replacement instead of swapping parts blindly. Call (605) 343-5630 to describe what you are seeing and to arrange a prompt visit from our local electricians.',
    ],
    problems: [
      {
        title: 'Outlets that stop working or run warm',
        description:
          'A dead or warm outlet can point to a loose connection, a failing device, or dangerous resistance heating behind the wall.',
      },
      {
        title: 'Breakers that trip repeatedly',
        description:
          'Repeated trips usually mean an overloaded circuit, a short, or a ground fault that has to be traced to its source.',
      },
      {
        title: 'Flickering or dimming lights',
        description:
          'Flickering often comes from loose connections, failing fixtures, or a circuit carrying more load than it was designed for.',
      },
      {
        title: 'Switches that buzz or show burn marks',
        description:
          'Buzzing, heat, or discoloration at a switch is a critical warning sign of arcing that should be checked promptly.',
      },
    ],
    process: [
      {
        title: 'Call and describe the problem',
        description:
          'Tell us what is happening, when it started, and which part of the property is affected. We ensure our technician arrives prepared.',
      },
      {
        title: 'Inspect and diagnose',
        description:
          'We test voltages, trace circuit paths, and identify the root cause rather than guessing.',
      },
      {
        title: 'Explain the repair',
        description:
          'We explain the cause and the repair options in plain terms before any work begins, so you know exactly what to expect.',
      },
      {
        title: 'Repair and test',
        description:
          'We complete the repair using code-compliant materials and verify the entire circuit before restoring regular service.',
      },
    ],
    sections: [
      {
        title: 'Diagnostic Methodology for Rapid City Electrical Repairs',
        paragraphs: [
          'Electrical issues in the Black Hills can stem from sudden weather swings, seasonal heating demands, or historical wiring installations. Rather than guessing or merely replacing breakers, our technicians follow a systematic diagnostic methodology.',
          'We check circuit continuity, measure actual load draw with calibrated digital clamp meters, and inspect all junction points along the circuit path. This isolates whether a problem is a localized device failure, a loose neutral wire, or a deeper panel issue.',
        ],
        bulletPoints: [
          'Thermal diagnostic check of suspected junction boxes and panel lugs',
          'Tracing intermittent short circuits and ground faults without unnecessary wall cuts',
          'Verification of proper polarity and ground continuity on all repaired outlets',
          'Prompt response for residential homes, retail spaces, and local facilities',
        ],
      },
      {
        title: 'Common Electrical Hazards We Correct',
        paragraphs: [
          'Over decades of service in Pennington County, we routinely correct hazards left by amateur DIY attempts, ungrounded circuits, or aging components.',
          'Loose terminal screws, deteriorated wire nuts, and overloaded multi-outlet adapters generate dangerous heat. We replace damaged conductors, install proper junction boxes, and bring circuits up to current South Dakota Electrical Commission standards.',
        ],
        bulletPoints: [
          'Burnt or melted receptacles caused by high-draw winter space heaters',
          'Double-tapped circuit breakers inside older distribution panels',
          'Ungrounded two-prong outlets converted to safe GFCI-protected circuits',
          'Corroded exterior weatherproof covers and water-damaged outdoor feeds',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I keep using an outlet that is warm or smells like burning?',
        answer:
          'No. Switch off the breaker for that circuit immediately and call (605) 343-5630. Heat or a burning smell indicates an active electrical resistance or arcing fault that poses an immediate fire hazard.',
      },
      {
        question: 'Why does my breaker keep tripping?',
        answer:
          'A circuit breaker trips to protect wiring from overheating during an overload or short circuit. Resetting it repeatedly without finding the root cause can permanently damage wiring insulation.',
      },
      {
        question: 'Can you repair electrical problems in commercial buildings as well as homes?',
        answer:
          'Yes. Bucks Electric handles commercial repairs, 3-phase machinery connections, showroom lighting, and office circuits across Rapid City and the Black Hills.',
      },
    ],
    image: {
      src: 'https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Electrician inspecting an outdoor electrical fuse box',
    },
    related: [
      'electrical-wiring-rapid-city-sd',
      'electrical-panel-upgrade-rapid-city-sd',
      'lighting-installation-rapid-city-sd',
    ],
  },
  {
    slug: 'electrical-installation-rapid-city-sd',
    name: 'Electrical Installation',
    icon: Plug,
    cardSummary:
      'New outlets, switches, circuits, and equipment connections installed for homes and businesses in Rapid City.',
    metaTitle: 'Electrical Installation Rapid City, SD | Bucks Electric',
    metaDescription:
      'Explore professional electrical installation services in Rapid City for residential and commercial projects.',
    heading: 'Electrical Installation Rapid City, SD',
    intro: [
      'Electrical installation covers new outlets, switches, dedicated circuits, and connections for equipment, whether you are finishing a basement, expanding a commercial building, or installing heavy equipment. Bucks Electric provides professional installation work throughout Rapid City and Pennington County.',
      'Sound installation begins with calculating continuous electrical demand and ensuring the main distribution system has ample capacity. Call (605) 343-5630 to talk through your project requirements.',
    ],
    problems: [
      {
        title: 'Not enough outlets for modern appliances',
        description:
          'Extension cords running across floors and overloaded power strips indicate that a room requires permanent, dedicated outlets.',
      },
      {
        title: 'New equipment requiring dedicated branch circuits',
        description:
          'Appliances like induction ranges, air compressors, hot tubs, and heat pumps demand dedicated circuits sized specifically for their amperage.',
      },
      {
        title: 'Home remodeling requiring wiring reconfiguration',
        description:
          'Opening walls during a kitchen, bathroom, or basement remodel is the ideal time to add circuits and future-proof power delivery.',
      },
      {
        title: 'Outdated switches and awkward control layouts',
        description:
          'Switch layouts wired for older property layouts can be redesigned for modern convenience with multi-way switching and dimming.',
      },
    ],
    process: [
      {
        title: 'Plan the layout',
        description:
          'We evaluate your layout, power demands, and equipment specifications to plan optimal circuit routing.',
      },
      {
        title: 'Confirm capacity',
        description:
          'We review your service panel to ensure ample breaker spaces and continuous amp capacity exist.',
      },
      {
        title: 'Install and connect',
        description:
          'New copper conductors, conduit, junction boxes, and devices are installed strictly to National Electrical Code standards.',
      },
      {
        title: 'Test and label',
        description:
          'Every newly installed device and circuit is load-tested, polarity-checked, and clearly indexed at the main panel.',
      },
    ],
    sections: [
      {
        title: 'Comprehensive Installation Services for Homes & Businesses',
        paragraphs: [
          'Modern residential and commercial properties require far more power than properties built 30 years ago. Whether you are installing a new commercial kitchen, outfitting a detached pole barn, or adding circuits for modern appliances, we plan every run with precision.',
          'Our licensed electricians install dedicated 120V and 240V circuits, subpanels, industrial disconnects, and tamper-resistant devices that comply fully with South Dakota electrical regulations.',
        ],
        bulletPoints: [
          'Dedicated 240-volt circuits for shop equipment, welders, and compressors',
          'Finished basement and home addition electrical infrastructure',
          'Heavy-duty kitchen appliance branch circuits (ranges, double ovens, dishwashers)',
          'Subpanel additions for detached garages, sheds, and outbuildings',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a permit for new electrical circuits in Rapid City?',
        answer:
          'Most new branch circuits, subpanels, and major equipment installations require a permit from the South Dakota Electrical Commission or local building jurisdiction. We handle permit applications and inspection scheduling.',
      },
      {
        question: 'Can you add outlets to finished drywall without destroying the walls?',
        answer:
          'Yes. Using specialized fish tapes, flexible drill bits, and existing crawlspaces or attic cavities, we minimize drywall cutting whenever routing new wiring through finished rooms.',
      },
      {
        question: 'How do I get an estimate for an installation project?',
        answer:
          'Call (605) 343-5630 with your property location and project scope. We can provide ballpark insights and schedule an on-site evaluation.',
      },
    ],
    image: {
      src: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Electrical wiring prepared for outlet installation',
    },
    related: [
      'electrical-wiring-rapid-city-sd',
      'lighting-installation-rapid-city-sd',
      'commercial-electrician-rapid-city-sd',
    ],
  },
  {
    slug: 'electrical-panel-upgrade-rapid-city-sd',
    name: 'Electrical Panel Upgrade',
    icon: PanelTop,
    cardSummary:
      'Upgrades for outdated or overloaded electrical panels, so your property has the capacity and safety margin it needs.',
    metaTitle: 'Electrical Panel Upgrade Rapid City, SD | Bucks Electric',
    metaDescription:
      'Planning an electrical panel upgrade in Rapid City? Contact Bucks Electric to discuss your electrical service needs.',
    heading: 'Electrical Panel Upgrade in Rapid City, SD',
    intro: [
      'The electrical panel is the central distribution hub where utility power enters your property and is safely divided into individual circuits. If you are planning an electrical panel replacement or a 200-amp electrical service upgrade in Rapid City, Bucks Electric delivers code-compliant, master-level craftsmanship.',
      'From replacing hazardous fuse boxes and obsolete breaker brands to upgrading utility service masts and meter bases, call (605) 343-5630 to discuss your electrical panel requirements.',
    ],
    problems: [
      {
        title: 'Frequent breaker trips and overloaded buses',
        description:
          'Breakers that trip under normal household use indicate that existing circuits or the main bus bar have exceeded safe capacity.',
      },
      {
        title: 'Lights dimming when large appliances start',
        description:
          'Noticeable voltage drops when an air conditioner, well pump, or dryer cycles on reveal an inadequate main service or failing neutral.',
      },
      {
        title: 'No space remaining for EV chargers or heat pumps',
        description:
          'Adding modern conveniences like Level 2 EV charging or mini-split heat pumps requires dedicated double-pole breaker slots that older panels lack.',
      },
      {
        title: 'Aging panels with known safety hazards',
        description:
          'Brands like Federal Pacific Electric (FPE), Zinsco, Challenger, and old split-bus fuse panels have high failure rates and should be replaced.',
      },
    ],
    process: [
      {
        title: 'NEC Article 220 Load Calculation',
        description:
          'We inspect your existing panel, calculate continuous and non-continuous loads, and assess future expansion needs.',
      },
      {
        title: 'Utility & Permit Coordination',
        description:
          'We pull state/city permits and coordinate disconnect and reconnect schedules with Black Hills Energy.',
      },
      {
        title: 'Precision Panel Installation',
        description:
          'The old panel is removed, new heavy-duty copper service cables and grounding electrodes are installed, and circuits are transferred.',
      },
      {
        title: 'Labeling, Testing & Inspection',
        description:
          'We test breaker trip currents, verify AFCI/GFCI protection, cleanly label every circuit, and facilitate the final electrical inspection.',
      },
    ],
    sections: [
      {
        title: 'What Your Electrical Panel Does & Why Upgrading Protects Your Home',
        paragraphs: [
          'Your electrical panel is the safety heart of your property. It takes the high-amperage electricity delivered by Black Hills Energy and distributes it safely across branch circuits. Crucially, its circuit breakers are calibrated to trip the instant current exceeds safe thresholds, preventing electrical wires inside your walls from overheating and sparking a fire.',
          'Many homes in Rapid City—particularly in historic neighborhoods like West Boulevard and older Robbinsdale subdivisions—were originally wired with 60-amp or 100-amp services. Today, typical households run central air conditioning, induction cooktops, dual refrigerators, home computers, and power tools, requiring a modern 200-amp service.',
        ],
        bulletPoints: [
          'Automatic thermal and magnetic overcurrent protection for all branch circuits',
          'Arc-Fault Circuit Interrupters (AFCI) that detect dangerous sparking behind drywall',
          'Whole-home surge protection to shield smart appliances and electronics from grid spikes',
          'Modern copper bus bars that prevent terminal oxidation and loose connections',
        ],
      },
      {
        title: 'Panel Replacement vs. Full 200-Amp Service Capacity Upgrade',
        paragraphs: [
          'Homeowners often wonder about the distinction between a simple panel replacement and a comprehensive service upgrade. A panel replacement swaps an obsolete or damaged breaker box with a new modern enclosure while maintaining the existing 100-amp utility capacity.',
          'In contrast, a full 200-amp (or 400-amp) service upgrade modernizes the entire electrical pathway from the utility connection downward. This includes installing a larger outdoor meter socket, a new weatherhead/service mast, heavy-gauge copper service entrance conductors, two 8-foot copper-bonded grounding rods, and an external emergency main disconnect per recent NEC requirements.',
        ],
        bulletPoints: [
          'Service capacity doubling from 100A to 200A or 400A for heavy residential demands',
          'Complete coordination with Black Hills Energy for meter disconnect and reconnect',
          'Dual copper grounding rods driven 8+ feet into native South Dakota soil for reliable grounding',
          'Whole-house surge protective device (SPD) installed directly into the main panel',
        ],
      },
      {
        title: 'What Homeowners Should Expect During a Panel Upgrade',
        paragraphs: [
          'We recognize that having your electricity turned off is disruptive, which is why we meticulously orchestrate each upgrade to complete the work in a single organized day.',
          'Our crew arrives early morning, Black Hills Energy cuts power at the meter, we dismantle the old equipment, mount the new panel enclosure, organize and land each circuit cleanly, drive new ground rods, and restore power before evening. A South Dakota Electrical Commission inspector subsequently inspects and signs off on the permit.',
        ],
        bulletPoints: [
          'Single-day power interruption planned and communicated in advance',
          'All permitting and municipal inspection paperwork handled on your behalf',
          'Meticulous circuit indexing so every room and appliance is clearly labeled',
          'Financing options available for major upgrades to keep costs predictable',
        ],
      },
      {
        title: 'Local Rapid City Project Example: West Boulevard Panel Modernization',
        paragraphs: [
          'Recently, our electricians modernized an obsolete 1960s 100-amp split-bus fuse box for a residence near Rapid City\'s West Boulevard historic district. The homeowner experienced chronic breaker trips when running their central air and microwave simultaneously.',
          'We installed a new 200-amp 40-circuit Square D panel, installed an exterior meter disconnect, drove dual grounding electrodes, and added whole-home surge protection. The installation passed state electrical inspection on the first visit with zero callbacks.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I know if my electrical panel needs an upgrade?',
        answer:
          'Key warning signs include breakers tripping repeatedly, lights flickering when the furnace or AC turns on, rust or moisture inside the panel enclosure, a lack of available breaker slots, or having an obsolete panel brand like Federal Pacific or Zinsco.',
      },
      {
        question: 'Will I need to upgrade my panel to install an EV charger?',
        answer:
          'If your panel is currently 100 amps and already powers central air conditioning, an electric dryer, and an electric stove, you will likely need a 200-amp service upgrade to safely support a 40A to 60A Level 2 EV charging station.',
      },
      {
        question: 'How long will the power be off during a panel upgrade?',
        answer:
          'In most residential installations, power is off for approximately 4 to 7 hours during the day while the old panel is removed and the new panel is tied in. We work diligently to restore power before dinner time.',
      },
    ],
    image: {
      src: 'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Organized circuit breaker panel with color-coded wiring',
    },
    related: [
      'electrical-repair-rapid-city-sd',
      'electrical-installation-rapid-city-sd',
      'commercial-electrician-rapid-city-sd',
    ],
  },
  {
    slug: 'lighting-installation-rapid-city-sd',
    name: 'Lighting Installation',
    icon: Lightbulb,
    cardSummary:
      'Indoor and outdoor lighting installed for ceilings, entrances, walkways, and yards at Rapid City properties.',
    metaTitle: 'Lighting Installation Rapid City, SD | Bucks Electric',
    metaDescription:
      'Upgrade your property with professional lighting installation in Rapid City, SD. Contact Bucks Electric for details.',
    heading: 'Lighting Installation in Rapid City, SD',
    intro: [
      'Thoughtful lighting completely changes how a living space or commercial facility functions and feels. Bucks Electric provides professional lighting installation across Rapid City, South Dakota, from recessed LED conversions and statement chandeliers to durable outdoor security lighting.',
      'Call (605) 343-5630 to describe the space you wish to illuminate. We evaluate existing wiring paths, switch locations, and circuit loads before work begins.',
    ],
    problems: [
      {
        title: 'Dated fixtures that flicker or overheat',
        description:
          'Aging incandescent or fluorescent fixtures draw excessive power, run hot, and suffer from degrading internal sockets.',
      },
      {
        title: 'Uneven room lighting with dark shadows',
        description:
          'Single central fixtures often leave kitchen countertops, desks, and living room corners uncomfortably dim.',
      },
      {
        title: 'Dark exterior entryways, pathways, and driveways',
        description:
          'Insufficient outdoor lighting increases trip hazards during icy South Dakota winters and compromises home security.',
      },
      {
        title: 'Flickering LED dimmers and humming switches',
        description:
          'Incompatible dimmer switches cause annoying LED buzz, strobing, and reduced bulb longevity.',
      },
    ],
    process: [
      {
        title: 'Design and Layout Planning',
        description:
          'We determine fixture placements, beam angles, and color temperatures suited to the room’s architecture.',
      },
      {
        title: 'Circuit & Switching Review',
        description:
          'We inspect the existing wiring to ensure proper neutral connections for modern dimmer and smart controls.',
      },
      {
        title: 'Safe Fixture & Control Installation',
        description:
          'Fixtures, wafer downlights, commercial tracks, and dimmers are securely mounted and wired to code.',
      },
      {
        title: 'Testing & Dimmer Calibration',
        description:
          'We test all switches, adjust minimum dimming thresholds, and verify flicker-free operation.',
      },
    ],
    sections: [
      {
        title: 'Interior Architectural & Recessed LED Conversions',
        paragraphs: [
          'Upgrading to modern ultra-thin recessed LED wafer downlights provides bright, even illumination without occupying ceiling clearance. We configure selectable color temperatures (from warm 2700K to clean 4000K daylight) tailored to kitchens, bathrooms, basements, and living areas.',
          'For commercial clients—such as our featured showroom project in Rapid City—we install high-output display tracks and commercial fixtures designed to accentuate products and welcome customers.',
        ],
        bulletPoints: [
          'Ultra-thin LED recessed wafer lights with IC-rated airtight housings',
          'Under-cabinet LED task illumination for kitchen food preparation',
          'Architectural commercial showroom track lighting and high-bay fixtures',
          '3-way and 4-way multi-switch wiring for long hallways and staircases',
        ],
      },
      {
        title: 'Exterior All-Weather Security & Landscape Lighting',
        paragraphs: [
          'South Dakota winters bring early darkness, sub-zero freezes, and blowing snow. Outdoor lighting must withstand extreme temperature swings and moisture penetration.',
          'Bucks Electric installs rugged, wet-location-rated exterior floodlights, motion-sensing security fixtures, dusk-to-dawn photocells, and decorative soffit downlights that enhance your property’s curb appeal and safety.',
        ],
        bulletPoints: [
          'Dual-head motion-activated security floodlights covering driveways and yards',
          'Soffit-mounted LED downlights providing elegant, glare-free architectural washing',
          'Commercial building perimeter and parking lot security illumination',
          'Weatherproof silicone-sealed boxes and conduit protecting wiring from freeze-thaw cycles',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can you install customer-supplied light fixtures?',
        answer:
          'Yes. If you have purchased your own chandeliers, ceiling fans, or pendants, we can install them safely, ensuring the ceiling junction box is properly rated for the fixture\'s weight.',
      },
      {
        question: 'Why do my new LED lights flicker when dimmed?',
        answer:
          'Older incandescent dimmers chop the electrical sine wave in a manner incompatible with electronic LED drivers. We install modern trailing-edge LED dimmers calibrated to eliminate buzzing and flickering.',
      },
      {
        question: 'Can you add recessed lights to a finished drywall ceiling without an attic above?',
        answer:
          'Yes. Ultra-thin wafer LED lights require only 1 to 2 inches of clearance and snap directly into drywall cutouts, allowing installation in rooms beneath second floors or flat roofs.',
      },
    ],
    image: {
      src: 'https://images.pexels.com/photos/1253128/pexels-photo-1253128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Modern ceiling light fixtures in a contemporary interior',
    },
    related: [
      'electrical-installation-rapid-city-sd',
      'electrical-wiring-rapid-city-sd',
      'electrical-repair-rapid-city-sd',
    ],
  },
  {
    slug: 'electrical-wiring-rapid-city-sd',
    name: 'Electrical Wiring',
    icon: Cable,
    cardSummary:
      'New wiring and rewiring for Rapid City homes and businesses, including older wiring that needs to be replaced.',
    metaTitle: 'Electrical Wiring Rapid City, SD | Bucks Electric',
    metaDescription:
      'Need electrical wiring or rewiring in Rapid City? Discuss your residential or commercial project with Bucks Electric.',
    heading: 'Electrical Wiring and Rewiring in Rapid City, SD',
    intro: [
      'Electrical wiring safely carries power throughout your property. Over decades, wiring insulation can degrade, connections can loosen, and older wire gauges can become inadequate for modern electrical demands. Bucks Electric provides professional residential and commercial wiring across Rapid City and the Black Hills.',
      'From new construction and full basement rewiring to replacing dangerous knob-and-tube or ungrounded wiring, call (605) 343-5630 to discuss your project with an experienced electrician.',
    ],
    problems: [
      {
        title: 'Aging wiring unable to support modern loads',
        description:
          'Homes built before the 1980s often lack sufficient circuits, causing wires to heat up under modern appliance loads.',
      },
      {
        title: 'Brittle, cracking, or deteriorated insulation',
        description:
          'Cloth-covered or old rubber insulation degrades over time, exposing bare copper and creating short-circuit or fire risks.',
      },
      {
        title: 'Ungrounded two-wire circuits without safety grounds',
        description:
          'Two-prong outlets lack an equipment ground wire, exposing sensitive electronics to surge damage and occupants to shock.',
      },
      {
        title: 'Improper splices hidden inside ceilings or walls',
        description:
          'Uncontained wire splices outside of junction boxes violate electrical code and present an unseen fire risk.',
      },
    ],
    process: [
      {
        title: 'Comprehensive Wiring Inspection',
        description:
          'We inspect the service drop, attic, basement, and sample receptacles to determine wiring type, age, and grounding integrity.',
      },
      {
        title: 'Circuit Route & Homerun Planning',
        description:
          'We plan direct homerun cable routes back to the main panel, minimizing drywall disruption and maximizing efficiency.',
      },
      {
        title: 'Code-Compliant Pull & Termination',
        description:
          'Modern copper NM-B cable or commercial EMT conduit is run, secured with proper staples, and neatly terminated in steel or PVC boxes.',
      },
      {
        title: 'Multi-Point Polarity & Insulation Testing',
        description:
          'Every conductor is tested for correct polarity, solid ground connection, and zero neutral-to-ground resistance.',
      },
    ],
    sections: [
      {
        title: 'Whole-Home Rewiring & Full Basement Finishes',
        paragraphs: [
          'Rewiring a home or finishing a basement requires careful planning of circuit separation. Kitchens, bathrooms, laundry rooms, and workshops require dedicated 20-amp circuits that cannot share power with general lighting.',
          'As praised by customer TwiggitAnn in our Google reviews, Bucks Electric frequently undertakes whole-home and full basement rewiring projects, walking property owners through every step and explaining how new circuits improve safety and functionality.',
        ],
        bulletPoints: [
          'Full basement rewiring with dedicated lighting and receptacle circuits',
          'Arc-Fault (AFCI) breaker protection installed on all bedroom and living area homeruns',
          'Careful cable pulling techniques that preserve finished plaster and drywall',
          'South Dakota Electrical Commission permit acquisition and final inspection sign-off',
        ],
      },
      {
        title: 'Remediating Aluminum Wiring & Knob-and-Tube Systems',
        paragraphs: [
          'In older Rapid City neighborhoods, homes constructed between 1965 and 1973 frequently feature single-strand aluminum branch wiring. Aluminum expands significantly more than copper when carrying current, which causes connections at switch terminals to loosen and oxidize over time.',
          'Bucks Electric specializes in aluminum wiring remediation using approved AlumiConn or Copalum connectors with antioxidant paste, as well as safe replacement of legacy knob-and-tube wiring.',
        ],
        bulletPoints: [
          'Complete replacement or code-approved remediation of aluminum branch circuits',
          'Safe removal or isolation of abandoned knob-and-tube wiring',
          'Dedicated equipment grounds added to protect sensitive computing and smart devices',
          'Official compliance documentation for home insurance and mortgage underwriting',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I know if my Rapid City home needs rewiring?',
        answer:
          'Tell-tale signs include two-prong ungrounded outlets, frequent circuit breaker tripping, burning smells or buzzing near switches, visible cloth-wrapped cables in the basement or attic, or lights dimming when appliances start.',
      },
      {
        question: 'Can you rewire only part of my house, such as the basement or kitchen?',
        answer:
          'Yes. Partial rewiring is very common during room remodels. We isolate the specific zone, run new dedicated homeruns to your panel, and leave untouched areas intact.',
      },
      {
        question: 'Will rewiring require tearing down all my drywall?',
        answer:
          'No. By accessing unfinished basements, crawlspaces, attics, and using specialized wire-fishing techniques, our electricians keep wall cuts to a minimum.',
      },
    ],
    image: {
      src: 'https://images.pexels.com/photos/7285965/pexels-photo-7285965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Electrician cutting and organizing colored wires with pliers',
    },
    related: [
      'electrical-repair-rapid-city-sd',
      'electrical-installation-rapid-city-sd',
      'electrical-panel-upgrade-rapid-city-sd',
    ],
  },
  {
    slug: 'commercial-electrician-rapid-city-sd',
    name: 'Commercial Electrician',
    icon: Building2,
    cardSummary:
      'Electrical repairs, upgrades, and new circuits for businesses and commercial properties in Rapid City.',
    metaTitle: 'Commercial Electrician Rapid City, SD | Bucks Electric',
    metaDescription:
      'Looking for a commercial electrician in Rapid City? Contact Bucks Electric for electrical contracting solutions.',
    heading: 'Commercial Electrician in Rapid City, SD',
    intro: [
      'Commercial enterprises depend on continuous, reliable electrical power. From retail storefronts and car showrooms to warehouses, medical clinics, and restaurants, electrical downtime directly impacts your bottom line. Bucks Electric delivers commercial electrical contracting, maintenance, and installations throughout Rapid City and the Black Hills.',
      'Our team is experienced in 3-phase power distribution, commercial lighting systems, machinery connections, and code compliance. Call (605) 343-5630 to discuss your commercial facility needs.',
    ],
    problems: [
      {
        title: 'Heavy equipment requiring dedicated 3-phase circuits',
        description:
          'Commercial machinery, ovens, CNC tools, and refrigeration compressors require balanced 3-phase power and properly sized disconnects.',
      },
      {
        title: 'Nuisance breaker trips disrupting business operations',
        description:
          'Unbalanced distribution panels or failing motor starters can trigger shutdowns during critical operating hours.',
      },
      {
        title: 'Outdated, energy-draining commercial lighting',
        description:
          'Old fluorescent or metal-halide fixtures inflate utility bills, produce harsh buzzing, and require frequent maintenance.',
      },
      {
        title: 'Tenant buildouts and commercial renovations',
        description:
          'Adapting a commercial shell for a new retail tenant, office suite, or restaurant demands complete electrical reconfiguration.',
      },
    ],
    process: [
      {
        title: 'Facility Walkthrough & Scope Review',
        description:
          'We inspect your existing electrical service, switchgear, phase balancing, and machinery requirements.',
      },
      {
        title: 'Engineering & Code Compliance',
        description:
          'We design circuit pathways, calculate fault current ratings, and submit plans for municipal commercial permits.',
      },
      {
        title: 'Scheduled Execution Around Operations',
        description:
          'Work is organized around your operating hours to minimize or eliminate disruption to your customers and staff.',
      },
      {
        title: 'Commissioning & Load Testing',
        description:
          'We verify phase voltages, test emergency egress lighting, and ensure all machinery connections operate under load.',
      },
    ],
    sections: [
      {
        title: 'Commercial Power Distribution & 3-Phase Systems',
        paragraphs: [
          'Bucks Electric provides comprehensive commercial power infrastructure, including 120/208V and 277/480V 3-phase services, step-down dry-type transformers, commercial distribution panels, and EMT/rigid conduit installations.',
          'We balance phase loads across large commercial panels to prevent neutral wire overheating and utility power factor penalties, ensuring your equipment receives steady, clean power.',
        ],
        bulletPoints: [
          'Installation and maintenance of 3-phase distribution boards and switchgear',
          'Dry-type step-down transformer installation and grounding electrode systems',
          'Heavy-wall EMT and rigid metallic conduit bending and installation',
          'Phase load balancing and harmonic mitigation for commercial facilities',
        ],
      },
      {
        title: 'Commercial Lighting Systems & High-Bay LED Conversions',
        paragraphs: [
          'Lighting sets the atmosphere for retail customers and ensures workplace safety in industrial settings. We install commercial architectural track lighting, LED high-bay fixtures for warehouses and shops, exterior parking lot pole lighting, and code-mandated emergency egress lighting with battery backups.',
          'Upgrading to commercial LED lighting dramatically lowers Black Hills Energy utility expenses and virtually eliminates ladder maintenance for bulb replacements.',
        ],
        bulletPoints: [
          'Warehouse high-bay LED retrofits with integrated motion sensors',
          'Retail showroom track lighting and product display illumination',
          'Code-mandated illuminated exit signs and emergency egress lighting tests',
          'Exterior commercial security wall packs and parking lot illumination',
        ],
      },
      {
        title: 'Dedicated Machinery Connections & Tenant Fit-Out Contracting',
        paragraphs: [
          'From commercial kitchen equipment (walk-in freezers, exhaust hoods, fryers) to automotive lifts and industrial air compressors, our electricians install dedicated disconnects and flexible conduit whips matched to equipment nameplate ratings.',
          'We also partner with general contractors and business owners on tenant improvements, providing timely electrical rough-in and trim-out so new locations open on schedule.',
        ],
        bulletPoints: [
          'Fused and non-fused local disconnect switches for heavy machinery',
          'Commercial kitchen and restaurant equipment power feeds',
          'Retail showroom improvements and office cubicle power drops',
          'Preventative thermal scanning and commercial electrical maintenance',
        ],
      },
      {
        title: 'Featured Project: Rapid City Commercial Showroom',
        paragraphs: [
          'As shared by Richard Ball in our Google reviews, Dale and our team completed extensive electrical work for a Rapid City commercial showroom: "Dale has been working on our showroom and has done an incredible job with everything! We highly recommend Dale and Buck\'s Electric!"',
          'Our work included installing custom overhead track lighting, dedicated display circuits, and clean panel distribution, delivered with high praise for craftsmanship and attention to detail.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can Bucks Electric perform commercial electrical work outside normal business hours?',
        answer:
          'Yes. We coordinate after-hours or weekend work for critical tie-ins and panel upgrades so your business operations and customer traffic remain unaffected.',
      },
      {
        question: 'Do you handle commercial electrical permits in Rapid City?',
        answer:
          'Yes. We handle all required permitting with the South Dakota Electrical Commission and local municipal building departments, coordinating inspections from rough-in through final sign-off.',
      },
      {
        question: 'What information should I have ready when inquiring about commercial work?',
        answer:
          'Having your facility address, equipment nameplate specifications (voltage, phase, full-load amps), and architectural or floor plans helps us rapidly assess your project scope.',
      },
    ],
    image: {
      src: 'https://images.pexels.com/photos/8961695/pexels-photo-8961695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Electrical contractor installing cables on a commercial construction site',
    },
    related: [
      'electrical-repair-rapid-city-sd',
      'electrical-panel-upgrade-rapid-city-sd',
      'electrical-installation-rapid-city-sd',
    ],
  },
  {
    slug: 'electrical-troubleshooting-rapid-city-sd',
    name: 'Electrical Troubleshooting',
    icon: Search,
    cardSummary:
      'Systematic testing to find the source of intermittent power, dead circuits, and electrical faults in Rapid City properties.',
    metaTitle: 'Electrical Troubleshooting Rapid City, SD | Bucks Electric',
    metaDescription:
      'Experiencing electrical problems? Contact Bucks Electric for electrical troubleshooting and diagnosis in Rapid City.',
    heading: 'Electrical Troubleshooting in Rapid City, SD',
    intro: [
      'Some electrical problems are obvious, like a broken switch toggle. But the most dangerous electrical issues are subtle and intermittent—a circuit that cuts out only on windy days, a breaker that trips whenever two appliances run, or a mystery wall switch that leaves a room without power. Bucks Electric provides systematic electrical troubleshooting throughout Rapid City and Pennington County.',
      'Call (605) 343-5630 to describe the symptoms you are experiencing. We bring professional diagnostic instrumentation to isolate the exact cause before opening walls or replacing components.',
    ],
    problems: [
      {
        title: 'Power cutting out intermittently with no clear pattern',
        description:
          'Intermittent issues often point to loose wire nut splices, failing neutral connections, or thermal expansion at breaker terminals.',
      },
      {
        title: 'Entire sections of outlets going dead unexpectedly',
        description:
          'A tripped upstream GFCI device, a failed daisy-chain backstab connection, or a concealed junction box fault can kill downstream power.',
      },
      {
        title: 'Sensitive AFCI or GFCI breakers that trip without load',
        description:
          'Shared neutral wires, damaged wire jackets in wall framing, or inductive motor noise can trigger nuisance breaker tripping.',
      },
      {
        title: 'Unexplained electrical odors, humming, or warm wall plates',
        description:
          'Localized heat or buzzing is a serious warning sign that electricity is arcing or experiencing high contact resistance.',
      },
    ],
    process: [
      {
        title: 'Gather Environmental & Operating Symptoms',
        description:
          'We record when the issue occurs, what appliances were running, and any historical changes to the property.',
      },
      {
        title: 'Diagnostic Isolation & Metering',
        description:
          'Using true-RMS digital multimeters, circuit tracers, and insulation resistance testers, we isolate the fault zone.',
      },
      {
        title: 'Explain Findings in Plain Terms',
        description:
          'We show you the exact fault and explain what is necessary to correct it safely before performing repairs.',
      },
      {
        title: 'Repair, Verify & Re-test',
        description:
          'We correct the physical issue and perform full load testing to ensure the fault is completely resolved.',
      },
    ],
    sections: [
      {
        title: 'Systematic Fault Isolation vs. Guesswork',
        paragraphs: [
          'Amateur troubleshooting often consists of replacing breakers or outlets at random, hoping the issue disappears. This approach is dangerous because it ignores the underlying short circuit, loose connection, or damaged wiring.',
          'Our licensed electricians follow strict NEC diagnostic protocols. We measure voltage drops under load, verify continuity between hot, neutral, and ground conductors, and test breaker trip thresholds. This systematic approach saves you time and eliminates unnecessary costs.',
        ],
        bulletPoints: [
          'True-RMS voltage and current measurements identifying hidden neutral imbalances',
          'Circuit tracing behind drywall without unnecessary exploratory wall penetrations',
          'Thermal diagnostic scanning detecting loose lugs and overheated bus connections',
          'Elimination of dangerous back-stabbed receptacle connections causing open circuits',
        ],
      },
      {
        title: 'Solving Complex AFCI & GFCI Tripping Problems',
        paragraphs: [
          'Arc-Fault Circuit Interrupters (AFCI) are required by South Dakota code in all modern living spaces. They detect subtle electrical sparking that standard thermal breakers miss. However, troubleshooting an AFCI trip requires specialized diagnostic meters to determine whether the trigger is a genuine in-wall arc or a shared neutral wire.',
          'We isolate individual branch circuits, inspect junction boxes along the run, and identify pinched wires, damaged staples, or improper neutral cross-connections.',
        ],
        bulletPoints: [
          'Tracing multi-wire branch circuits with improperly shared neutral conductors',
          'Identifying appliance motor interference vs. genuine wiring insulation faults',
          'Testing exterior GFCI receptacles exposed to moisture or condensation',
          'Restoring reliable, code-compliant circuit performance with zero nuisance trips',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my circuit breaker trip even when nothing is plugged in?',
        answer:
          'A breaker that trips immediately with no loads connected usually indicates a direct short circuit (hot wire touching neutral or ground) or an internal failure in the breaker itself. An electrician should inspect the circuit before resetting it again.',
      },
      {
        question: 'Can you troubleshoot an issue that happens only occasionally?',
        answer:
          'Yes. Intermittent electrical issues usually correlate with specific variables like outdoor temperature, wind, humidity, or combined electrical loads. Documenting what was running when the trip occurs helps us replicate and isolate the condition.',
      },
      {
        question: 'What should I do if an outlet feels warm or buzzes while I wait for service?',
        answer:
          'Shut off the breaker controlling that outlet immediately. Do not attempt to use the outlet. If you are unsure which breaker controls it, call (605) 343-5630 and we will walk you through safety precautions.',
      },
    ],
    image: {
      src: 'https://images.pexels.com/photos/17842843/pexels-photo-17842843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Electrical engineer inspecting an industrial electrical circuit board',
    },
    related: [
      'electrical-repair-rapid-city-sd',
      'electrical-wiring-rapid-city-sd',
      'electrical-panel-upgrade-rapid-city-sd',
    ],
  },
  {
    slug: 'outlet-and-switch-installation-rapid-city-sd',
    name: 'Outlet and Switch Installation',
    icon: ToggleRight,
    cardSummary:
      'New and replacement outlets and switches installed for Rapid City homes and businesses, wired to the right circuit.',
    metaTitle: 'Outlet & Switch Installation Rapid City, SD | Bucks Electric',
    metaDescription:
      'Need new outlets or switches? Contact Bucks Electric for electrical installation in Rapid City.',
    heading: 'Outlet and Switch Installation in Rapid City, SD',
    intro: [
      'Outlets and switches are the electrical touchpoints you interact with every single day. Worn, loose, or cracked receptacles are more than an inconvenience—they are a frequent cause of electrical fires and shocks. Bucks Electric provides professional outlet replacement, GFCI upgrades, and switch installations across Rapid City.',
      'From upgrading two-prong outlets to grounded tamper-resistant devices, installing USB-C charging receptacles, or configuring 3-way smart lighting switches, call (605) 343-5630 for dependable service.',
    ],
    problems: [
      {
        title: 'Loose receptacles where plugs fall out easily',
        description:
          'Worn internal spring contacts create loose mechanical connections, generating electrical resistance and dangerous localized heat.',
      },
      {
        title: 'Lack of GFCI protection near sinks and outdoors',
        description:
          'Kitchens, bathrooms, garages, and exterior outlets without GFCI protection fail modern life-safety codes and increase shock risk.',
      },
      {
        title: 'Wall switches that snap, crackle, or feel warm',
        description:
          'Internal arcing inside an aging switch toggle produces buzzing or popping sounds and should be replaced promptly.',
      },
      {
        title: 'Insufficient outlets requiring dangerous power strips',
        description:
          'Daisy-chaining power strips in home offices or entertainment centers creates continuous circuit overloading.',
      },
    ],
    process: [
      {
        title: 'Assess Electrical Box & Wiring',
        description:
          'We inspect the junction box depth, wire condition, and confirm whether an equipment ground is present.',
      },
      {
        title: 'Select Appropriate Device Rating',
        description:
          'We match devices to circuit amp ratings (15A vs 20A) and select tamper-resistant, weather-resistant, or GFCI models.',
      },
      {
        title: 'Secure Side-Terminal Connection',
        description:
          'We secure wires firmly to screw terminals with proper clockwise loops rather than weak push-in backstabs.',
      },
      {
        title: 'Polarity & Ground Fault Verification',
        description:
          'We test each device with an electrical circuit analyzer to verify correct polarity and GFCI trip sensitivity.',
      },
    ],
    sections: [
      {
        title: 'Modern Receptacle Safety: GFCI, AFCI & Tamper-Resistant Outlets',
        paragraphs: [
          'Electrical codes have evolved significantly to safeguard families from electrical accidents. Tamper-resistant (TR) receptacles feature spring-loaded internal shutters that prevent children from inserting objects into outlet slots.',
          'Ground-Fault Circuit Interrupters (GFCI) monitor electrical balance between hot and neutral wires, cutting power in milliseconds if current leaks to water or human contact. We install heavy-duty commercial-grade GFCI receptacles in kitchens, bathrooms, basements, and outdoor locations.',
        ],
        bulletPoints: [
          'Class A GFCI receptacles protecting kitchens, bathrooms, laundry rooms, and garages',
          'Tamper-resistant safety shutters required by current South Dakota electrical code',
          'Weather-resistant (WR) receptacles with in-use bubble covers for exterior patios',
          'Integrated USB-A and USB-C high-speed charging receptacles for kitchens and bedrooms',
        ],
      },
      {
        title: 'Modern Lighting Controls: Dimmers, 3-Way & Smart Switches',
        paragraphs: [
          'Upgrading your switches enhances both ambiance and energy efficiency. We install trailing-edge LED dimmers, multi-location 3-way and 4-way switches for stairs and hallways, and smart switches that integrate with mobile apps.',
          'Older homes often lack neutral wires at switch boxes. We verify existing wiring and provide solutions—including pulling neutral conductors or selecting compatible no-neutral smart controls.',
        ],
        bulletPoints: [
          'Flicker-free LED dimmers calibrated for smooth illumination from 1% to 100%',
          'Multi-location 3-way and 4-way switch configurations for hallways and entryways',
          'Smart WiFi switches and timer controls for exterior lighting and exhaust fans',
          'Heavy-duty 20-amp commercial switches for workshops and retail facilities',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why do my plugs keep falling out of the wall outlet?',
        answer:
          'Over thousands of insertions, the internal brass contact wipers in the outlet stretch and lose tension. This creates a loose connection that generates resistance heating. Worn outlets should be replaced with commercial-grade receptacles.',
      },
      {
        question: 'Can you install GFCI outlets in an older home that does not have ground wires?',
        answer:
          'Yes. Under NEC 406.4(D)(2), you can replace ungrounded two-prong outlets with GFCI receptacles. A GFCI will still protect people against shocks even without an equipment ground, provided it is labeled "No Equipment Ground".',
      },
      {
        question: 'What is the difference between a 15-amp and a 20-amp outlet?',
        answer:
          'A 20-amp outlet has a horizontal T-slot on the neutral blade and requires #12 AWG copper wire and a 20A breaker. They are required in kitchens, bathrooms, and workshops for high-draw appliances.',
      },
    ],
    image: {
      src: 'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Gloved hands installing a power outlet on a wall',
    },
    related: [
      'electrical-installation-rapid-city-sd',
      'electrical-troubleshooting-rapid-city-sd',
      'lighting-installation-rapid-city-sd',
    ],
  },
  {
    slug: 'ev-charger-installation-rapid-city-sd',
    name: 'EV Charger Installation',
    icon: BatteryCharging,
    cardSummary:
      'Home electric vehicle charger installation for Rapid City garages and driveways, including a check of your panel capacity.',
    metaTitle: 'EV Charger Installation Rapid City, SD | Bucks Electric',
    metaDescription:
      'Planning to install an EV charging station? Contact Bucks Electric about EV charger installation in Rapid City.',
    heading: 'EV Charger Installation in Rapid City, SD',
    intro: [
      'A dedicated Level 2 EV charging station at your Rapid City home transforms electric vehicle ownership, providing fast, overnight replenishment so you always start the day with maximum range. Bucks Electric delivers certified, code-compliant EV charger installations throughout Rapid City and Pennington County.',
      'We install high-power charging stations for Tesla (Universal Wall Connector), Ford Charge Station Pro, Chevrolet, Rivian, Hyundai, and universal J1772/NACS vehicles. Call (605) 343-5630 to plan your home or business EV installation.',
    ],
    problems: [
      {
        title: 'Painfully slow charging from standard 120V wall outlets',
        description:
          'Standard Level 1 charging delivers only 3 to 4 miles of range per hour, taking upwards of 30 hours to recharge a modern EV battery.',
      },
      {
        title: 'Electrical panel lacking breaker space or amp capacity',
        description:
          'Adding a 40A to 60A EV charging circuit without an electrical load calculation can overload an older 100-amp service panel.',
      },
      {
        title: 'Outdoor charging exposed to harsh South Dakota winter freezes',
        description:
          'Exterior chargers require NEMA 4/4X weatherproof enclosures and cold-rated cables that remain flexible in sub-zero Rapid City winters.',
      },
      {
        title: 'Overheating 120V circuits and nuisance tripping',
        description:
          'Using a household outlet continuously for 12+ hours pushes standard wiring to thermal limits, presenting an arcing and fire hazard.',
      },
    ],
    process: [
      {
        title: 'Panel Load Calculation & Site Evaluation',
        description:
          'We evaluate your main service panel capacity, calculate continuous load headroom, and map the optimal conduit path.',
      },
      {
        title: 'Circuit Sizing & Wire Selection',
        description:
          'We install dedicated copper conductors (#6 or #4 AWG) sized for continuous 80% duty cycle operation per NEC Article 625.',
      },
      {
        title: 'Charger Mounting & Conduit Run',
        description:
          'We securely mount the charging unit and route industrial EMT or PVC conduit to an attached garage, carport, or outdoor pedestal.',
      },
      {
        title: 'Commissioning & Vehicle Test',
        description:
          'We configure maximum amperage dip switches, verify ground-fault protection, and test charging connectivity with your vehicle.',
      },
    ],
    sections: [
      {
        title: 'Level 1 vs. Level 2 EV Charging: Speed & Efficiency',
        paragraphs: [
          'Every electric vehicle includes a basic Level 1 cord that plugs into an ordinary 120-volt wall outlet. Level 1 charging operates at approximately 1.4 kW, adding only 3 to 4 miles of range per hour. For modern EVs with 70 to 100 kWh battery packs, a full recharge can take 24 to 36 hours.',
          'In contrast, a dedicated Level 2 240-volt charging station operates between 7.2 kW and 11.5 kW, delivering 25 to 44 miles of range per hour. This allows you to recharge a completely depleted battery overnight in just 6 to 9 hours during off-peak utility hours.',
        ],
        bulletPoints: [
          'Level 1: 120V / 12A (~1.4 kW) adding 3-4 miles of driving range per hour',
          'Level 2: 240V / 32A-48A (~7.7-11.5 kW) adding 25-44 miles of range per hour',
          'Complete overnight recharge so your vehicle is ready for Black Hills commutes',
          'Compatibility with Tesla NACS, universal J1772, and CCS charging standards',
        ],
      },
      {
        title: 'Dedicated Circuits & Electrical Panel Compatibility',
        paragraphs: [
          'Electric vehicle charging is classified by the National Electrical Code as a continuous load, meaning the circuit will operate at maximum capacity for 3 hours or more. Under NEC Article 625, the branch circuit and breaker must be rated for 125% of the charger’s continuous output.',
          'For example, a 48-amp hardwired charger requires a dedicated 60-amp double-pole breaker and heavy-gauge #6 THHN or #4 Romex copper conductors. During our initial visit, we conduct an NEC Article 220 load calculation to ensure your main panel can safely handle the additional draw without risking main breaker trips.',
        ],
        bulletPoints: [
          'Dedicated 40A, 50A, or 60A double-pole circuit breakers installed in your panel',
          'Heavy-gauge 90°C copper conductors properly sized for continuous duty',
          'Hardwired connections recommended for maximum safety and full 48A charging speeds',
          'High-grade commercial NEMA 14-50 receptacles installed when plug-in models are preferred',
        ],
      },
      {
        title: 'Indoor vs. Outdoor Charger Placement in South Dakota Winters',
        paragraphs: [
          'Rapid City winters regularly drop well below freezing, which presents unique considerations for EV charging. Batteries charge more slowly when cold, making a high-powered Level 2 charger essential for pre-conditioning your cabin and battery before departure.',
          'For detached garages or exterior driveways, we install NEMA 4 or 4X rated weatherproof units equipped with heavy-duty cold-weather cable jackets that resist cracking and remain flexible even at -20°F.',
        ],
        bulletPoints: [
          'NEMA 4/4X rated weatherproof enclosures resisting rain, blowing snow, and ice',
          'Cold-rated flexible charging cables designed for sub-zero Black Hills weather',
          'Secure wall mounting with integrated cable holsters for clean organization',
          'Exterior pedestal installations with underground trenching for driveway parking',
        ],
      },
      {
        title: 'Residential & Commercial Fleet Charging Solutions',
        paragraphs: [
          'In addition to single-family garage installations, Bucks Electric installs commercial EV charging infrastructure for Rapid City businesses, tourist hotels, and commercial fleets. We deploy smart dual-port pedestals with load-sharing technology, RFID access control, and payment processing.',
        ],
        bulletPoints: [
          'Commercial fleet charging with automated load balancing to prevent demand spikes',
          'Hotel and hospitality guest charging stations attracting EV travelers',
          'South Dakota Electrical Commission permitted and verified installations',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will I need to upgrade my electrical panel to install a Level 2 EV charger?',
        answer:
          'It depends on your current panel capacity and existing major appliances. If you have a 200-amp service with available slots, an upgrade is usually unnecessary. If your home has an older 100-amp service that already runs electric heat or central air, a service upgrade or a smart energy management load-shedding switch may be required.',
      },
      {
        question: 'Is it better to hardwire an EV charger or use a NEMA 14-50 outlet?',
        answer:
          'Hardwiring is generally superior. It enables full 48-amp charging speeds (delivering 11.5 kW), eliminates a mechanical plug connection point that can degrade from heat, and removes the requirement for an expensive GFCI breaker that can occasionally suffer from nuisance tripping with certain EV models.',
      },
      {
        question: 'Can you install a charger in a detached garage or on an outdoor post?',
        answer:
          'Yes. We can run underground trench conduit from your main panel to a detached garage or outdoor parking pad, installing a dedicated subpanel or weatherproof pedestal.',
      },
    ],
    image: {
      src: 'https://images.pexels.com/photos/27355831/pexels-photo-27355831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Electric vehicle connected to a home charging station outdoors',
    },
    related: [
      'electrical-panel-upgrade-rapid-city-sd',
      'electrical-installation-rapid-city-sd',
      'electrical-wiring-rapid-city-sd',
    ],
  },
  {
    slug: 'generator-installation-rapid-city-sd',
    name: 'Generator Installation',
    icon: Zap,
    cardSummary:
      'Standby and portable generator connections for Rapid City homes and businesses that need backup power.',
    metaTitle: 'Generator Installation Rapid City, SD | Bucks Electric',
    metaDescription:
      'Explore backup generator installation options for your property in Rapid City. Contact Bucks Electric for assistance.',
    heading: 'Generator Installation in Rapid City, SD',
    intro: [
      'Severe weather in the Black Hills—from heavy winter blizzards and ice storms to summer high winds—can knock out electrical utility power for hours or days. A properly installed backup generator protects your family from freezing temperatures, keeps well pumps and medical equipment running, and prevents costly food spoilage.',
      'Bucks Electric provides professional standby generator installations and portable generator manual transfer switch hookups throughout Rapid City and Pennington County. Call (605) 343-5630 to discuss backup power solutions.',
    ],
    problems: [
      {
        title: 'Running unsafe extension cords through open windows',
        description:
          'Feeding cords through cracked doors or windows lets in freezing winter drafts and creates carbon monoxide and tripping hazards.',
      },
      {
        title: 'Dangerous utility backfeeding risks',
        description:
          'Plugging a generator directly into a dryer outlet backfeeds high voltage into neighborhood utility lines, creating lethal risks for utility lineworkers.',
      },
      {
        title: 'Inability to power 240V appliances like well pumps and furnaces',
        description:
          'Extension cords cannot power hardwired equipment like heating blowers, sump pumps, water heaters, and well pumps.',
      },
      {
        title: 'Outdated or non-compliant transfer equipment',
        description:
          'Older manual switches that lack interlocks or proper neutral switching can cause equipment damage and violate South Dakota code.',
      },
    ],
    process: [
      {
        title: 'Critical Circuit Load Assessment',
        description:
          'We calculate starting and running wattages for essential appliances (furnace, refrigerator, well pump, lights) to size your system.',
      },
      {
        title: 'Transfer Equipment Selection',
        description:
          'We select either an Automatic Transfer Switch (ATS) for permanent standby units or a manual mechanical interlock for portable generators.',
      },
      {
        title: 'Panel Wiring & Inlet Installation',
        description:
          'We install a dedicated exterior power inlet box, connect transfer equipment, and cleanly isolate emergency circuits.',
      },
      {
        title: 'Simulation & Safety Demonstration',
        description:
          'We simulate a full utility power outage, test seamless transfer operation under load, and walk you through operating procedures.',
      },
    ],
    sections: [
      {
        title: 'Automatic Standby Generators vs. Portable Generator Interlocks',
        paragraphs: [
          'Homeowners typically select between two backup power solutions: automatic whole-home standby generators or portable generator interlock kits.',
          'An automatic standby generator (powered by natural gas or propane) sits permanently outside your home. Equipped with an Automatic Transfer Switch (ATS), it monitors utility power 24/7. When Black Hills Energy power drops, the generator starts automatically within 10 to 20 seconds, whether you are home or away.',
          'A portable generator transfer system utilizes an exterior 30A or 50A power inlet box wired directly to your main panel through a mechanical interlock. When power fails, you connect a heavy-duty cord, start your portable generator, and flip the interlock to energize chosen household circuits safely.',
        ],
        bulletPoints: [
          'Automatic standby generators providing hands-free power restoration in seconds',
          'Manual transfer switches and mechanical interlock kits for portable generators',
          'Complete isolation from the grid, eliminating dangerous backfeed to line workers',
          'Direct power delivery to hardwired heating systems, well pumps, and refrigeration',
        ],
      },
      {
        title: 'Critical Circuit Prioritization During Winter Outages',
        paragraphs: [
          'During sub-zero South Dakota winter storms, heating failure can cause domestic plumbing pipes to freeze and burst within hours. When engineering your generator connection, we prioritize critical life-safety circuits.',
          'We calculate inrush motor starting currents for furnace blowers and well pumps to ensure your generator operates comfortably within its rated continuous kilowatt capacity without stalling.',
        ],
        bulletPoints: [
          'Heating system blowers, boilers, and heat pump backup coils',
          'Domestic water supply well pumps and basement sump pumps',
          'Kitchen refrigeration and deep freezers preventing expensive food spoilage',
          'Security systems, home medical equipment, and essential LED lighting',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why is connecting a portable generator with a "suicide cord" so dangerous?',
        answer:
          'Plugging a dual-male extension cord into a home outlet backfeeds power into utility lines, stepping voltage back up through the neighborhood transformer to 7,200 volts. This can electrocute Black Hills Energy lineworkers working down the street and constitutes a severe criminal and fire hazard. South Dakota code mandates an approved mechanical interlock or transfer switch.',
      },
      {
        question: 'Can a portable generator power my central heating or well pump?',
        answer:
          'Yes, provided it is connected through a properly sized 240V 30-amp or 50-amp manual transfer switch and the generator has sufficient running and starting watts to handle the motor load.',
      },
      {
        question: 'What size generator do I need for my Rapid City home?',
        answer:
          'For essential circuits (furnace, fridge, lights, well pump), a 7,500 to 10,000-watt portable generator is typically sufficient. For whole-home coverage including central air conditioning, an 18 kW to 24 kW automatic standby generator is recommended.',
      },
    ],
    image: {
      src: 'https://images.pexels.com/photos/5693845/pexels-photo-5693845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      alt: 'Industrial generator with piping and wiring against a concrete wall',
    },
    related: [
      'electrical-panel-upgrade-rapid-city-sd',
      'electrical-installation-rapid-city-sd',
      'commercial-electrician-rapid-city-sd',
    ],
  },
];

export function findService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
