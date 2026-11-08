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
}

export const SERVICES: Service[] = [
  {
    slug: 'electrical-repair-rapid-city-sd',
    name: 'Electrical Repair',
    icon: Wrench,
    cardSummary:
      'Diagnosis and repair for dead outlets, flickering lights, tripping breakers, and faulty switches in Rapid City homes and businesses.',
    metaTitle: 'Electrical Repair in Rapid City, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrical repair in Rapid City, SD for dead outlets, flickering lights, tripping breakers, and faulty switches. Call Buck\'s Electric at (605) 343-5630.',
    heading: 'Electrical Repair in Rapid City, SD',
    intro: [
      'When an electrical problem stops something from working, or makes it behave strangely, it needs attention before it becomes a safety issue. Buck\'s Electric Inc handles electrical repairs for properties in Rapid City, South Dakota, working out of our office at 1720A Samco Rd.',
      'Repairs start with finding the actual cause instead of replacing parts that may not be the problem. Call (605) 343-5630 to describe what you are seeing and to arrange a visit.',
    ],
    problems: [
      {
        title: 'Outlets that stop working or run warm',
        description:
          'A dead or warm outlet can point to a loose connection, a failing device, or wiring problems behind the wall.',
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
          'Buzzing, heat, or discoloration at a switch is a warning sign that should be checked promptly.',
      },
    ],
    process: [
      {
        title: 'Call and describe the problem',
        description:
          'Tell us what is happening, when it started, and which part of the property is affected.',
      },
      {
        title: 'Inspect and diagnose',
        description: 'We trace the fault to its source and confirm what is causing it.',
      },
      {
        title: 'Explain the repair',
        description: 'We explain the cause and the repair needed before any work begins.',
      },
      {
        title: 'Repair and test',
        description: 'We complete the repair and test the affected circuit before it goes back into use.',
      },
    ],
    faqs: [
      {
        question: 'Should I keep using an outlet that is warm or smells like burning?',
        answer:
          'No. Switch off the breaker for that circuit and call (605) 343-5630. Heat or a burning smell can indicate a serious connection problem that should be inspected before the outlet is used again.',
      },
      {
        question: 'Why does my breaker keep tripping?',
        answer:
          'A breaker trips to protect the circuit from overload or a fault. Resetting it repeatedly without finding the cause can damage wiring and devices, so the cause should be investigated.',
      },
      {
        question: 'Can you repair electrical problems in a business building as well as a home?',
        answer:
          'Call (605) 343-5630 and describe the building and the problem, and we will tell you whether we can help with it.',
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
    metaTitle: 'Electrical Installation in Rapid City, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrical installation in Rapid City, SD, including new outlets, switches, circuits, and equipment connections. Call Buck\'s Electric at (605) 343-5630.',
    heading: 'Electrical Installation in Rapid City, SD',
    intro: [
      'Electrical installation covers new outlets, switches, circuits, and connections for equipment, whether you are finishing a new room, adding space to a building, or setting up a workspace. Buck\'s Electric Inc provides installation work in Rapid City, South Dakota.',
      'Good installation starts with planning where power is needed and confirming the existing system can support it. Call (605) 343-5630 to talk through your project.',
    ],
    problems: [
      {
        title: 'Not enough outlets for how a room is used',
        description:
          'Extension cords running across floors are often a sign that a space needs additional outlets on proper circuits.',
      },
      {
        title: 'Equipment that needs its own circuit',
        description:
          'Some appliances, tools, and machines need a dedicated circuit sized for their load.',
      },
      {
        title: 'Renovations that require new wiring',
        description:
          'Remodeling often opens walls and ceilings, which is the right time to add circuits where they will be needed.',
      },
      {
        title: 'Switches that do not control what they should',
        description:
          'Switch layouts that were wired for an older use of a room can be corrected with new wiring.',
      },
    ],
    process: [
      {
        title: 'Plan the layout',
        description: 'We review where power is needed and how each new outlet or switch will be used.',
      },
      {
        title: 'Confirm capacity',
        description: 'We check that the existing electrical system can support the new load.',
      },
      {
        title: 'Install and connect',
        description: 'New outlets, switches, and circuits are installed and connected to the system.',
      },
      {
        title: 'Test and label',
        description: 'Each new circuit is tested before it is put into use.',
      },
    ],
    faqs: [
      {
        question: 'Do I need a permit for new circuits?',
        answer:
          'Permit requirements depend on the scope of the work and local rules in Rapid City. Confirm what applies to your project before the work begins.',
      },
      {
        question: 'Can you add outlets to a finished room?',
        answer:
          'Often, yes. Adding outlets to finished walls depends on how the wiring can be routed. Describe the room when you call (605) 343-5630.',
      },
      {
        question: 'How do I get started?',
        answer:
          'Call (605) 343-5630 and tell us what you are planning, including the room or area and what the new power will be used for.',
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
    metaTitle: 'Electrical Panel Upgrade in Rapid City, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrical panel upgrades in Rapid City, SD for overloaded or outdated panels. Call Buck\'s Electric at (605) 343-5630 to talk through your panel.',
    heading: 'Electrical Panel Upgrade in Rapid City, SD',
    intro: [
      'The electrical panel is the central point where power enters your property and is divided into circuits. When a panel is overloaded or outdated, breakers trip, lights dim, and adding new equipment becomes risky. Buck\'s Electric Inc can assess your panel and discuss upgrade options in Rapid City, South Dakota.',
      'Call (605) 343-5630 to describe your current panel, the problems you are seeing, and any equipment you plan to add.',
    ],
    problems: [
      {
        title: 'Frequent breaker trips',
        description:
          'Breakers that trip often can mean the panel is carrying more load than it was built for.',
      },
      {
        title: 'Dimming when large appliances start',
        description:
          'Lights that dim when an air conditioner, well pump, or large appliance starts can indicate limited capacity.',
      },
      {
        title: 'Planned equipment that exceeds capacity',
        description:
          'Adding an EV charger, workshop, or major appliance may need more capacity than the current panel provides.',
      },
      {
        title: 'Older panels that need attention',
        description:
          'Aging panels and breakers should be evaluated to confirm they are still safe and dependable.',
      },
    ],
    process: [
      {
        title: 'Assess the load',
        description: 'We review the existing panel and the equipment it currently supports.',
      },
      {
        title: 'Review options',
        description: 'We explain the upgrade options that fit your property and planned use.',
      },
      {
        title: 'Install the new panel',
        description: 'The new panel is installed and existing circuits are moved over carefully.',
      },
      {
        title: 'Inspect and label',
        description: 'Circuits are checked and labeled so the panel is easy to read and maintain.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my panel needs upgrading?',
        answer:
          'Common signs include frequent breaker trips, dimming when appliances start, and plans to add major equipment. An inspection can confirm whether your panel has the capacity you need.',
      },
      {
        question: 'Will I need a panel upgrade for an EV charger?',
        answer:
          'It depends on the panel capacity and the charger\'s requirements. Call (605) 343-5630 and we can discuss your situation.',
      },
      {
        question: 'Will the power be off during a panel upgrade?',
        answer:
          'Yes, power is interrupted while the panel is replaced. We plan the work to keep the interruption as short as the job allows.',
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
    metaTitle: 'Lighting Installation in Rapid City, SD | Buck\'s Electric Inc',
    metaDescription:
      'Lighting installation in Rapid City, SD for indoor ceiling fixtures and outdoor lighting. Call Buck\'s Electric at (605) 343-5630.',
    heading: 'Lighting Installation in Rapid City, SD',
    intro: [
      'Good lighting changes how a space feels and functions. Buck\'s Electric Inc installs indoor and outdoor lighting in Rapid City, South Dakota, including ceiling fixtures, controls, and exterior lighting for entrances, walkways, and yards.',
      'Call (605) 343-5630 to describe the space and the lighting you have in mind. We will look at the wiring before you commit to fixtures.',
    ],
    problems: [
      {
        title: 'Old fixtures that no longer work safely',
        description:
          'Worn or damaged fixtures can flicker, overheat, or fail, and they should be replaced by a qualified electrician.',
      },
      {
        title: 'Rooms with poor lighting coverage',
        description:
          'Dark corners and shadowed work areas often need additional fixtures or better placement.',
      },
      {
        title: 'Dark entrances, walkways, and yards',
        description:
          'Exterior lighting improves visibility and makes entrances and paths safer after dark.',
      },
      {
        title: 'Switches that do not match how you use a room',
        description:
          'Dimmers, multi-location switches, and motion controls can be added where the wiring allows.',
      },
    ],
    process: [
      {
        title: 'Choose the layout',
        description: 'We plan fixture locations based on how the space is used.',
      },
      {
        title: 'Confirm the wiring path',
        description: 'We check the existing wiring to see where fixtures and controls can connect.',
      },
      {
        title: 'Install fixtures and controls',
        description: 'Fixtures, switches, and controls are installed and connected.',
      },
      {
        title: 'Test lighting and switching',
        description: 'Each fixture and control is tested to confirm it works as intended.',
      },
    ],
    faqs: [
      {
        question: 'Can I buy my own fixtures for installation?',
        answer:
          'Please call (605) 343-5630 before purchasing fixtures, so we can confirm they suit the wiring in your property.',
      },
      {
        question: 'Do you install outdoor lighting?',
        answer:
          'Yes. Call (605) 343-5630 and describe the entrance, walkway, or yard you want to light.',
      },
      {
        question: 'Can you add dimmers or motion-activated switches?',
        answer:
          'Controls can often be added where the wiring allows. Describe the switch location and the fixture when you call.',
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
    metaTitle: 'Electrical Wiring and Rewiring in Rapid City, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrical wiring and rewiring in Rapid City, SD, including older wiring replacement and new circuits. Call Buck\'s Electric at (605) 343-5630.',
    heading: 'Electrical Wiring and Rewiring in Rapid City, SD',
    intro: [
      'Wiring carries power safely through a property, and it can wear out over time or fall short of modern needs. Buck\'s Electric Inc handles new wiring and rewiring for Rapid City, South Dakota, including areas where older wiring needs to be replaced.',
      'Call (605) 343-5630 to describe the wiring, the age of the property, and the areas you want to address.',
    ],
    problems: [
      {
        title: 'Older wiring that cannot carry current loads',
        description:
          'Older systems were not designed for today\'s demand from electronics, appliances, and heating and cooling equipment.',
      },
      {
        title: 'Damaged or brittle insulation',
        description:
          'Cracked or deteriorated insulation exposes conductors and can lead to shorts or shocks.',
      },
      {
        title: 'Power problems in one area',
        description:
          'Inconsistent power or repeated faults in one part of a property can point to wiring that needs attention.',
      },
      {
        title: 'Renovations that need new circuits',
        description:
          'Remodeling is an efficient time to run new wiring to where it will be used.',
      },
    ],
    process: [
      {
        title: 'Inspect existing wiring',
        description: 'We assess the condition of the wiring and identify what needs replacing.',
      },
      {
        title: 'Plan the route and circuits',
        description: 'We plan the wiring routes and circuit layout before work begins.',
      },
      {
        title: 'Install and connect',
        description: 'New wiring is installed and connected to the panel and devices.',
      },
      {
        title: 'Test and verify',
        description: 'The new wiring is tested to confirm it is connected and working correctly.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my property needs rewiring?',
        answer:
          'Warning signs include frequent breaker trips, warm outlets, burning smells, and wiring with damaged insulation. An inspection can confirm the condition.',
      },
      {
        question: 'Can you rewire only part of a property?',
        answer:
          'Partial rewiring is often possible. The right scope depends on the condition of the existing system. Call (605) 343-5630 to discuss the area.',
      },
      {
        question: 'What should I expect during rewiring?',
        answer:
          'Rewiring usually involves opening walls and ceilings in the work area. We can talk through what to expect for your property before work starts.',
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
    metaTitle: 'Commercial Electrician in Rapid City, SD | Buck\'s Electric Inc',
    metaDescription:
      'Commercial electrician in Rapid City, SD for business repairs, upgrades, and new circuits. Call Buck\'s Electric at (605) 343-5630.',
    heading: 'Commercial Electrician in Rapid City, SD',
    intro: [
      'Businesses depend on reliable power, and electrical problems can disrupt operations quickly. Buck\'s Electric Inc provides commercial electrical work in Rapid City, South Dakota, covering repairs, upgrades, and new circuits for commercial properties.',
      'Call (605) 343-5630 with your property address and a description of the work. We will discuss how to plan the work around your operations.',
    ],
    problems: [
      {
        title: 'Equipment that needs dedicated circuits',
        description:
          'Commercial equipment often requires its own circuit sized for its load, and mismatched circuits cause faults.',
      },
      {
        title: 'Power problems that affect operations',
        description:
          'Intermittent outages or tripping breakers can stop work and should be traced to the cause.',
      },
      {
        title: 'Aging electrical systems',
        description:
          'Older commercial buildings may have systems that no longer match how the space is used.',
      },
      {
        title: 'Build-outs and tenant improvements',
        description:
          'Interior changes often require new circuits, lighting, and outlets for the new layout.',
      },
    ],
    process: [
      {
        title: 'Walk through the property',
        description: 'We review the electrical system and the problem or project area.',
      },
      {
        title: 'Scope and plan',
        description: 'We define the work and confirm how it will be carried out.',
      },
      {
        title: 'Schedule around operations',
        description: 'Timing is discussed in advance so the work can fit your business needs.',
      },
      {
        title: 'Test and confirm',
        description: 'Completed work is tested before the affected areas return to use.',
      },
    ],
    faqs: [
      {
        question: 'Can you work around business hours?',
        answer:
          'Scheduling is discussed when you call (605) 343-5630, so the work can be planned around your operations.',
      },
      {
        question: 'What should I have ready when I call?',
        answer:
          'Have the property address, a description of the electrical problem or project, and the type of equipment involved. This helps us understand the work before we arrive.',
      },
      {
        question: 'Can you help with a repair as well as a larger project?',
        answer:
          'Call (605) 343-5630 and describe both. We will explain what we can help with and how the work would be handled.',
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
    metaTitle: 'Electrical Troubleshooting in Rapid City, SD | Buck\'s Electric Inc',
    metaDescription:
      'Electrical troubleshooting in Rapid City, SD to find the cause of dead circuits, intermittent power, and faults. Call Buck\'s Electric at (605) 343-5630.',
    heading: 'Electrical Troubleshooting in Rapid City, SD',
    intro: [
      'Some electrical problems are obvious, but many are intermittent or hidden inside walls and panels. Troubleshooting is the process of testing each part of the system to find the actual source of the fault before anything is replaced. Buck\'s Electric Inc provides this service in Rapid City, South Dakota.',
      'Call (605) 343-5630 and describe when the problem happens, which areas are affected, and what you have already noticed.',
    ],
    problems: [
      {
        title: 'Power that cuts out intermittently',
        description: 'Problems that come and go are often caused by loose connections that only fail under load.',
      },
      {
        title: 'Circuits that stopped working for no clear reason',
        description: 'A dead section of a property may involve a tripped device, a broken connection, or a wiring fault.',
      },
      {
        title: 'Problems that appear only with certain appliances',
        description: 'A device may overload a circuit or reveal a fault that is not visible during normal use.',
      },
      {
        title: 'Unexplained breaker trips or hot spots',
        description: 'Heat and tripping are signs that a circuit needs to be tested rather than simply reset.',
      },
    ],
    process: [
      {
        title: 'Gather the symptoms',
        description: 'We start by learning when the problem happens and which parts of the property it affects.',
      },
      {
        title: 'Test the circuit',
        description: 'We test the affected circuits, devices, and connections to isolate the fault.',
      },
      {
        title: 'Explain the cause',
        description: 'We explain what we found and the repair it requires before any work starts.',
      },
      {
        title: 'Repair and confirm',
        description: 'After the repair, we test the circuit again to confirm the problem is resolved.',
      },
    ],
    faqs: [
      {
        question: 'Why not just replace the outlet or breaker?',
        answer:
          'Replacing a part without finding the cause often leaves the fault in place. Troubleshooting identifies the real source first.',
      },
      {
        question: 'Can you find a problem that only happens sometimes?',
        answer:
          'Yes. Describe when it happens, and we will plan the testing to match the conditions when it occurs.',
      },
      {
        question: 'What should I do while I wait for the visit?',
        answer:
          'Avoid using any outlet or device that feels warm or smells unusual, and switch off the affected circuit if it is safe to do so.',
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
    metaTitle: 'Outlet and Switch Installation in Rapid City, SD | Buck\'s Electric Inc',
    metaDescription:
      'Outlet and switch installation in Rapid City, SD, including new and replacement outlets and switches. Call Buck\'s Electric at (605) 343-5630.',
    heading: 'Outlet and Switch Installation in Rapid City, SD',
    intro: [
      'Outlets and switches are the parts of the electrical system you use every day. When they are missing, worn out, or in the wrong place, daily life becomes harder and sometimes unsafe. Buck\'s Electric Inc installs new and replacement outlets and switches in Rapid City, South Dakota.',
      'Call (605) 343-5630 to tell us where you need new outlets or switches and what the space is used for.',
    ],
    problems: [
      {
        title: 'Worn or damaged outlets',
        description: 'Loose, cracked, or discolored outlets should be replaced to keep plugs secure and connections safe.',
      },
      {
        title: 'Not enough outlets in a room',
        description: 'Extension cords used as permanent power sources are a sign that more outlets are needed.',
      },
      {
        title: 'Switches that no longer work correctly',
        description: 'Switches that stick, buzz, or fail to control a light should be inspected and replaced.',
      },
      {
        title: 'Outlets without modern protection',
        description: 'Kitchens, bathrooms, and outdoor areas often need protected outlets to reduce shock risk.',
      },
    ],
    process: [
      {
        title: 'Choose locations',
        description: 'We review where outlets and switches are needed and how the room is used.',
      },
      {
        title: 'Check the wiring',
        description: 'We confirm the existing wiring can support the new or replacement device.',
      },
      {
        title: 'Install and connect',
        description: 'Devices are installed, connected, and secured in their boxes.',
      },
      {
        title: 'Test each device',
        description: 'Every outlet and switch is tested to confirm it works as intended.',
      },
    ],
    faqs: [
      {
        question: 'Can you replace an outlet with a protected one?',
        answer:
          'In many cases, yes. Describe the location and the outlet when you call (605) 343-5630 so we can confirm the right option.',
      },
      {
        question: 'Can you add a switch that controls an outlet?',
        answer:
          'That depends on the wiring available at the location. Call us to describe the room and the switch you want.',
      },
      {
        question: 'Why does my outlet feel loose?',
        answer:
          'A loose outlet can result from worn contacts or a loose connection. It should be checked, as it can overheat.',
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
    metaTitle: 'EV Charger Installation in Rapid City, SD | Buck\'s Electric Inc',
    metaDescription:
      'EV charger installation in Rapid City, SD for home garages and driveways, with panel capacity checks. Call Buck\'s Electric at (605) 343-5630.',
    heading: 'EV Charger Installation in Rapid City, SD',
    intro: [
      'A dedicated electric vehicle charger makes charging at home more convenient. A proper installation needs its own circuit and enough capacity in your electrical panel. Buck\'s Electric Inc installs home EV chargers for Rapid City, South Dakota properties.',
      'Call (605) 343-5630 with the make of your vehicle, where the charger would be located, and the panel that serves that location.',
    ],
    problems: [
      {
        title: 'Panel capacity that is not enough',
        description: 'An existing panel may not have room for a charger, which can require a panel upgrade.',
      },
      {
        title: 'Charging from a standard outlet',
        description: 'Charging from an ordinary outlet for long periods can overheat the circuit.',
      },
      {
        title: 'Charger location far from the panel',
        description: 'Long distances between the panel and the garage or driveway affect routing and cost.',
      },
      {
        title: 'Outdoor exposure',
        description: 'Chargers installed outdoors need weather-appropriate equipment and connections.',
      },
    ],
    process: [
      {
        title: 'Review your panel',
        description: 'We check the panel and the location to confirm capacity and routing.',
      },
      {
        title: 'Plan the circuit',
        description: 'We plan a dedicated circuit that suits the charger and the vehicle.',
      },
      {
        title: 'Install the charger',
        description: 'The charger is mounted and connected to its dedicated circuit.',
      },
      {
        title: 'Test and review',
        description: 'The charger and circuit are tested and we explain how to use them.',
      },
    ],
    faqs: [
      {
        question: 'Do I need a panel upgrade for a charger?',
        answer:
          'It depends on your panel capacity and the charger. Call (605) 343-5630 and we can discuss your situation.',
      },
      {
        question: 'Can I buy my own charger?',
        answer:
          'Please call before purchasing, so we can confirm the charger suits your vehicle and electrical system.',
      },
      {
        question: 'Can you install a charger in a detached garage?',
        answer:
          'Often, yes. Describe the distance and the panel location when you call, and we will explain the options.',
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
    metaTitle: 'Generator Installation in Rapid City, SD | Buck\'s Electric Inc',
    metaDescription:
      'Generator installation in Rapid City, SD for standby and portable backup power connections. Call Buck\'s Electric at (605) 343-5630.',
    heading: 'Generator Installation in Rapid City, SD',
    intro: [
      'A generator keeps essential circuits running during an outage, but it must be connected correctly to protect your system and the utility lines. Buck\'s Electric Inc handles generator electrical connections for Rapid City, South Dakota properties.',
      'Call (605) 343-5630 to describe the circuits you want to keep running and whether you have a standby or portable generator.',
    ],
    problems: [
      {
        title: 'No safe way to power essential circuits',
        description: 'Without a proper connection, a generator may be run unsafely or not used at all.',
      },
      {
        title: 'Unclear circuit priorities',
        description: 'Choosing which circuits to power requires planning around the generator capacity.',
      },
      {
        title: 'Portable generators without a proper connection',
        description: 'Portable units need a correct connection method to avoid backfeeding the grid.',
      },
      {
        title: 'Outdated switching equipment',
        description: 'Transfer equipment that is old or undersized should be reviewed before use.',
      },
    ],
    process: [
      {
        title: 'Define the load',
        description: 'We review the circuits you want to power and the generator capacity.',
      },
      {
        title: 'Plan the connection',
        description: 'We choose the connection method that suits your generator and property.',
      },
      {
        title: 'Install the connection',
        description: 'The connection and transfer equipment are installed and wired to the panel.',
      },
      {
        title: 'Test the system',
        description: 'We test the connection and explain how to operate it safely.',
      },
    ],
    faqs: [
      {
        question: 'Can I plug a generator directly into an outlet?',
        answer:
          'No. Connecting a generator through an outlet can send power back into the utility lines and endanger workers. Call us to discuss a proper connection.',
      },
      {
        question: 'Do you install standby generators?',
        answer:
          'Call (605) 343-5630 and describe the generator and the circuits you want to power, and we will explain what we can help with.',
      },
      {
        question: 'Which circuits should be on the generator?',
        answer:
          'That depends on the generator capacity and what you need during an outage. We can help you plan the circuits when you call.',
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
