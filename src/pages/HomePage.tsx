import { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  Cable,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  FileCheck,
  Home,
  Lightbulb,
  MapPin,
  MessageSquareText,
  Phone,
  Plug,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  Wrench,
  Zap,
} from 'lucide-react';
import { FaqList } from '@/components/FaqList';
import { CallButton } from '@/components/CallButton';
import { CallCta } from '@/components/CallCta';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';
import { localBusinessSchema, websiteSchema } from '@/lib/schema';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/areas';
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_SUMMARY, type Review } from '@/data/reviews';

const TRUST_METRICS = [
  {
    value: '4.8 ★',
    label: '9 Google Reviews',
    description: 'Trusted by local homeowners and business owners across Rapid City',
  },
  {
    value: '30+ yrs',
    label: 'Combined Experience',
    description: 'Master & journeyman electrical knowledge in the Black Hills',
  },
  {
    value: '10+',
    label: 'Core Services',
    description: 'Panels, wiring, lighting, EV chargers, generators, and diagnostics',
  },
  {
    value: '100%',
    label: 'Code Compliant',
    description: 'Permitted South Dakota Electrical Commission & NEC standards',
  },
];

const TRUST_ITEMS = [
  {
    icon: Building2,
    title: "Buck's Electric Inc",
    text: 'Licensed electrical contractor serving Rapid City & the Black Hills.',
  },
  {
    icon: MapPin,
    title: 'Our location',
    text: `${SITE.streetAddress}, ${SITE.city}, ${SITE.region} ${SITE.postalCode}`,
  },
  {
    icon: Phone,
    title: 'Call us directly',
    text: SITE.phoneDisplay,
    href: SITE.phoneHref,
  },
  {
    icon: Star,
    title: '4.8 ★ Google Rating',
    text: '9 verified reviews on Google Maps. Read real customer feedback.',
    href: SITE.mapsUrl,
    external: true,
  },
];

const STRENGTHS = [
  {
    icon: MapPin,
    title: 'Rapid City Based & Dispatched',
    text: 'Our shop at 1720A Samco Rd means quick response times for residential and commercial customers throughout Pennington County.',
  },
  {
    icon: MessageSquareText,
    title: 'Direct Master Electrician Guidance',
    text: 'Speak directly with electricians like Dale and Dana who know South Dakota electrical codes. We explain your options honestly.',
  },
  {
    icon: FileCheck,
    title: 'Permitted & 100% Code-Compliant',
    text: 'Every panel replacement, service upgrade, and commercial project complies with South Dakota Electrical Commission rules.',
  },
  {
    icon: Shield,
    title: 'Safety-First Workmanship',
    text: 'We thoroughly diagnose the root cause behind tripping breakers, hot outlets, and voltage dips rather than just swapping parts.',
  },
];

const SOLUTIONS_TABS = [
  {
    id: 'panel',
    name: 'Panel Upgrades',
    icon: Zap,
    badge: 'High Demand',
    title: '200-Amp Main Panel Upgrades & Subpanels',
    desc: 'Modern homes require significantly more power than older 60-amp or 100-amp services can safely deliver. We upgrade obsolete fuse boxes and panels to modern 200A breaker systems with whole-home surge protection.',
    points: [
      'Replace obsolete Zinsco, Federal Pacific, or fuse panels',
      'Add capacity for heat pumps, hot tubs, and modern kitchens',
      'Dual ground rod installation and utility coordination',
      'Full state electrical inspection compliance',
    ],
    slug: 'electrical-panel-upgrade-rapid-city-sd',
    image: 'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'ev',
    name: 'EV Chargers',
    icon: Plug,
    badge: 'Modern Upgrade',
    title: 'Level 2 Electric Vehicle Charging Stations',
    desc: 'Charge your EV up to 5x faster right at home. We install dedicated 240V circuits and hardwired or plug-in Level 2 charging stations compatible with Tesla, Ford, GM, Rivian, Hyundai, and universal EVs.',
    points: [
      'Dedicated 40A to 60A 240V branch circuit runs',
      'Load calculations to protect your main service panel',
      'Indoor garage or exterior weather-rated installations',
      'Tesla Wall Connector & NEMA 14-50 receptacle setups',
    ],
    slug: 'ev-charger-installation-rapid-city-sd',
    image: 'https://images.pexels.com/photos/27355831/pexels-photo-27355831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'lighting',
    name: 'Lighting Upgrades',
    icon: Lightbulb,
    badge: 'Energy Savings',
    title: 'LED Recessed & Exterior Security Lighting',
    desc: 'Transform dark rooms, basements, and outdoor perimeters with custom LED installations. We install recessed wafer lights, under-cabinet illumination, chandeliers, and motion-activated security lights.',
    points: [
      'Ultra-slim dimmable LED recessed can conversions',
      'Kitchen island, vanity, and accent light wiring',
      'Outdoor floodlights, soffit lights, and parking lot illumination',
      'Smart dimmer and multi-switch circuit configurations',
    ],
    slug: 'lighting-installation-rapid-city-sd',
    image: 'https://images.pexels.com/photos/1253128/pexels-photo-1253128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'commercial',
    name: 'Commercial Work',
    icon: Building2,
    badge: 'Business Ready',
    title: 'Commercial Power, 3-Phase & Tenant Fit-outs',
    desc: 'Dependable electrical systems for showrooms, retail storefronts, warehouses, offices, and restaurants in Rapid City. We handle three-phase distribution, machinery connections, and commercial code corrections.',
    points: [
      '3-Phase panel boards, transformers, and switchgear',
      'Dedicated equipment circuits for manufacturing & food service',
      'Commercial LED high-bay retrofits and emergency lighting',
      'Tenant buildouts, remodel rewiring, and scheduled maintenance',
    ],
    slug: 'commercial-electrician-rapid-city-sd',
    image: 'https://images.pexels.com/photos/7285965/pexels-photo-7285965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'repair',
    name: 'Repairs & Wiring',
    icon: Wrench,
    badge: 'Urgent Care',
    title: 'Troubleshooting, Rewiring & Safety Inspections',
    desc: 'Dead outlets, flickering lights, buzzing switches, and ungrounded wiring are safety hazards. Our electricians quickly diagnose the root problem and restore safe, reliable electrical flow.',
    points: [
      'GFCI and AFCI breaker/receptacle upgrades',
      'Aluminum wiring remediation and basement rewiring',
      'Tracing intermittent breaker trips and dead circuits',
      'Pre-purchase electrical safety home inspections',
    ],
    slug: 'electrical-repair-rapid-city-sd',
    image: 'https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const FEATURED_PROJECTS = [
  {
    title: 'Commercial Showroom & Power Distribution',
    location: 'Rapid City, SD',
    category: 'Commercial Electrical',
    description:
      'Completed comprehensive electrical infrastructure for a local showroom including custom track lighting, dedicated display power, and panel distribution.',
    outcome: 'Delivered on schedule with high praise from business owners for craftsmanship and clean finish.',
    image: 'https://images.pexels.com/photos/7285965/pexels-photo-7285965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: '200-Amp Main Service Panel Modernization',
    location: 'Rapid City, SD (West Boulevard Area)',
    category: 'Residential Panel Upgrade',
    description:
      'Replaced a hazardous 100-amp split-bus fuse panel with a high-capacity 200A 40-circuit panel, dual copper ground rods, and whole-home surge protector.',
    outcome: 'Eliminated nuisance tripping, passed city inspection seamlessly, and prepared the home for heat pump heating.',
    image: 'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Full Basement Rewiring & Safety Upgrades',
    location: 'Rapid City, SD',
    category: 'Residential Rewiring',
    description:
      'Engineered and rewired an entire basement with modern Arc-Fault (AFCI) and GFCI protected branch circuits, recessed lighting, and dedicated outlets.',
    outcome: 'Turned a dark, hazardous basement into a safe, modern, and code-compliant living area.',
    image: 'https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Dual Level 2 EV Charging Station Installation',
    location: 'Box Elder, SD',
    category: 'EV Charging Infrastructure',
    description:
      'Engineered and installed dedicated 60A and 50A branch circuits in an attached 3-car garage, with industrial EMT conduit and hardwired wall connectors.',
    outcome: 'High-speed overnight charging for household vehicles without overloading existing electrical circuits.',
    image: 'https://images.pexels.com/photos/27355831/pexels-photo-27355831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

const AVATAR_COLORS: Record<string, string> = {
  'richard-ball': 'bg-blue-600',
  'twiggit-ann': 'bg-purple-600',
  'kelley-meyer': 'bg-teal-600',
  'george-waxler': 'bg-amber-600',
  'justin-jones-1': 'bg-rose-600',
  'james-munger': 'bg-indigo-600',
  'justin-jones-2': 'bg-rose-700',
  'lee-magelky': 'bg-emerald-600',
  'rob-bradford': 'bg-cyan-600',
};

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Direct Phone Consultation',
    text: 'Call (605) 343-5630 to discuss your electrical project or issue with our team. We gather details to ensure the right tools and parts are prepared.',
  },
  {
    step: '02',
    title: 'On-Site Diagnostic & Scope',
    text: 'We inspect the panel, wiring, and affected circuits, pinpointing the actual root issue and walking you through transparent options before work starts.',
  },
  {
    step: '03',
    title: 'Code-Compliant Execution',
    text: 'Our electricians carry out the installation, repair, or upgrade using premium materials strictly following National Electrical Code standards.',
  },
  {
    step: '04',
    title: 'Multi-Point Testing & Clean-up',
    text: 'We thoroughly test voltage, polarity, and circuit integrity, leaving your home or job site immaculate and completely ready for daily operation.',
  },
];

const WARNING_SIGNS = [
  {
    title: 'Breakers that trip again and again',
    text: 'Indicates chronic circuit overloading, a short circuit, or a failing breaker that needs professional diagnosis.',
  },
  {
    title: 'Outlets or wall switches that feel warm or show scorch marks',
    text: 'A dangerous sign of arcing or loose terminal screws inside the junction box that poses a serious fire hazard.',
  },
  {
    title: 'A burning plastic odor, sizzle, or buzzing sound',
    text: 'Never ignore buzzing or burning smells from electrical panels or switches. Shut off power and call immediately.',
  },
  {
    title: 'Lights that flicker or dim when major appliances start',
    text: 'Commonly caused by undersized wiring, failing neutral conductors, or an outdated main service panel.',
  },
  {
    title: 'Two-prong ungrounded outlets in older homes',
    text: 'Lack modern ground paths required to protect expensive sensitive electronics and prevent electrical shock.',
  },
];

const SAFETY_TIPS = [
  {
    title: 'South Dakota Winter Heating Demands',
    desc: 'Space heaters pull up to 1,500 watts each. Avoid running multiple heaters on shared circuits to prevent breaker trips and wire overheating.',
  },
  {
    title: 'Black Hills Thunderstorms & Surge Defense',
    desc: 'Summer lightning storms cause severe electrical grid spikes. Whole-home surge arresters at the main panel protect HVAC, TVs, and smart appliances.',
  },
  {
    title: 'Outdated Fuse Boxes & Split-Bus Panels',
    desc: 'Homes over 40 years old frequently have 60A or 100A services inadequate for modern power demands, EV charging, or central air conditioning.',
  },
];

const HOME_FAQS = [
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
    question: 'Do you provide upfront pricing or estimates?',
    answer:
      'Yes. We believe in honest, transparent pricing. When you call us, we discuss the scope of your project, evaluate on-site requirements, and provide straightforward options before work begins so you never encounter surprise hidden charges.',
  },
];

export function HomePage() {
  useSeo({
    title: "Buck's Electric Inc | Rapid City, SD Electrical Contractor",
    description:
      "Buck's Electric Inc has a 4.8-star Google rating. We provide electrical repairs, 200A panel upgrades, EV chargers, wiring, lighting, and commercial electrical services in Rapid City, SD. Call (605) 343-5630.",
    path: '/',
    jsonLd: [localBusinessSchema, websiteSchema],
  });

  const [activeTab, setActiveTab] = useState(SOLUTIONS_TABS[0].id);
  const currentTab = SOLUTIONS_TABS.find((t) => t.id === activeTab) || SOLUTIONS_TABS[0];

  const [reviewFilter, setReviewFilter] = useState<'all' | 'comments' | 'guides'>('all');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
  const [copiedReviewId, setCopiedReviewId] = useState<string | null>(null);

  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryService, setInquiryService] = useState('Panel Upgrade');
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const toggleLike = (id: string) => {
    setLikedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (review: Review) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `"${review.comment}" - ${review.author} on Buck's Electric Inc: ${SITE.mapsUrl}`
      );
      setCopiedReviewId(review.id);
      setTimeout(() => setCopiedReviewId(null), 2500);
    } else {
      window.open(SITE.mapsUrl, '_blank');
    }
  };

  const filteredReviews = GOOGLE_REVIEWS.filter((review) => {
    if (reviewFilter === 'comments') {
      return review.comment && !review.comment.startsWith('5-star rating');
    }
    if (reviewFilter === 'guides') {
      return review.isLocalGuide;
    }
    return true;
  });

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <img
          src={SITE.heroImage}
          alt="Electrician working on an indoor circuit breaker panel"
          width={940}
          height={650}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
        <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-5 py-20 lg:px-8 lg:py-28">
          <div className="animate-rise max-w-3xl space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-volt-500/50 bg-navy-900/80 px-4 py-2 text-sm font-semibold text-volt-300 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-volt-500 animate-pulse" aria-hidden="true" />
              Licensed Electrical Contractor • Rapid City & Black Hills
            </div>
            <h1 className="text-4xl leading-[1.12] sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Dependable Electrical Services in Rapid City, SD
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-navy-100 sm:text-xl">
              Buck's Electric Inc holds a <span className="font-bold text-volt-400">4.8-star Google rating</span> across Rapid City.
              We provide electrical repairs, 200-amp panel upgrades, Level 2 EV chargers, modern lighting, and commercial wiring.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <CallButton label={`Call ${SITE.phoneDisplay}`} className="px-8 py-4 text-lg shadow-lg" />
              <Link to="/electrical-services" className="btn-secondary px-8 py-4 text-lg">
                Explore All Services
              </Link>
            </div>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4 border-t border-navy-700/60 text-xs sm:text-sm font-medium text-navy-200">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-volt-400 text-volt-400 shrink-0" />
                <span className="font-bold text-white">4.8 Rating (9 Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-volt-400 shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-volt-400 shrink-0" />
                <span>1720A Samco Rd Office</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-volt-400 shrink-0" />
                <span>Residential & Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. URGENT SAFETY CALLOUT BANNER */}
      <div className="border-y border-amber-300/40 bg-amber-500/10 px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center lg:px-8">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-navy-900">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-navy-900">
                Experiencing an electrical emergency, buzzing panel, or burning smell in Rapid City?
              </p>
              <p className="text-xs text-navy-700 sm:text-sm">
                Shut off power safely if possible, avoid touching hot breakers, and call our Rapid City technicians.
              </p>
            </div>
          </div>
          <a
            href={SITE.phoneHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-bold text-volt-300 shadow hover:bg-navy-800"
          >
            <Phone className="h-4 w-4 text-volt-400" />
            Call Now: {SITE.phoneDisplay}
          </a>
        </div>
      </div>

      {/* 3. KEY METRICS STRIP */}
      <section className="bg-navy-900 text-white py-12 border-b border-navy-800">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {TRUST_METRICS.map((metric) => (
              <div key={metric.label} className="border-l-2 border-volt-500 pl-5">
                <div className="text-3xl font-extrabold text-volt-400 sm:text-4xl">{metric.value}</div>
                <div className="mt-1 text-base font-bold text-white">{metric.label}</div>
                <p className="mt-1 text-xs sm:text-sm text-navy-200">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRUST & CONTACT STRIP */}
      <section className="border-b border-navy-100 bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-navy-100 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="h-6 w-6 text-navy-600" aria-hidden="true" />
                <dt className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-navy-600">{item.title}</dt>
                <dd className="mt-2 font-semibold text-navy-900">{item.text}</dd>
              </>
            );
            return (
              <div key={item.title} className="bg-white p-8">
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="block rounded-lg transition hover:text-navy-600"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </dl>
      </section>

      {/* 5. INTERACTIVE SERVICE SELECTOR TABS */}
      <Section id="solutions" tone="muted">
        <div className="space-y-4">
          <SectionHeading
            eyebrow="Specialized Solutions"
            title="Common Electrical Projects We Handle Daily"
            description="Explore our most frequently requested electrical upgrades and emergency solutions in the Rapid City area."
          />

          {/* Solution Tabs Navigation */}
          <div className="flex flex-wrap gap-2 pt-6 border-b border-navy-200">
            {SOLUTIONS_TABS.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-bold rounded-t-xl transition-all ${
                    isActive
                      ? 'bg-white text-navy-900 border-t-2 border-volt-500 shadow-sm'
                      : 'text-navy-600 hover:text-navy-900 hover:bg-white/50'
                  }`}
                >
                  <TabIcon className={`h-4 w-4 ${isActive ? 'text-volt-600' : 'text-navy-500'}`} />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Card */}
          <div className="rounded-2xl border border-navy-100 bg-white p-8 lg:p-12 shadow-sm mt-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-md bg-volt-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
                  <Sparkles className="h-3.5 w-3.5 text-volt-700" />
                  {currentTab.badge}
                </span>
                <h3 className="text-2xl font-bold text-navy-900 sm:text-3xl">{currentTab.title}</h3>
                <p className="leading-relaxed text-navy-700">{currentTab.desc}</p>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-navy-500">Key Project Highlights:</p>
                  <ul className="space-y-2.5">
                    {currentTab.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-navy-800">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-volt-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <CallButton label={`Call for ${currentTab.name}`} />
                  <Link
                    to={`/${currentTab.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-navy-900 hover:text-navy-600"
                  >
                    View detailed service breakdown
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-navy-100">
                <img
                  src={currentTab.image}
                  alt={currentTab.title}
                  width={940}
                  height={650}
                  loading="lazy"
                  className="h-80 w-full object-cover sm:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-volt-300">Rapid City, South Dakota</p>
                  <p className="text-sm font-bold">{currentTab.name} by Buck's Electric Inc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. COMPREHENSIVE SERVICES GRID */}
      <Section id="services">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Electrical Services"
            title="Complete Electrical Solutions for Rapid City Homes & Businesses"
            description="From minor residential repairs to complex 3-phase commercial installations, we provide licensed, code-compliant electrical work across Pennington County."
          />
          <Link to="/electrical-services" className="btn-outline shrink-0">
            View all 10 electrical services
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* 7. RESIDENTIAL VS COMMERCIAL SPOTLIGHT */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Versatile Capabilities"
          title="Electrical Tailored to Your Property Type"
          description="Whether you are upgrading an older Rapid City home or powering a commercial facility, we bring the appropriate equipment, certifications, and crew."
          centered
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Residential Card */}
          <div className="card-lift flex flex-col justify-between rounded-3xl border border-navy-100 bg-white p-8 sm:p-10 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-volt-500 text-navy-900 shadow">
                  <Home className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900">Residential Electrical</h3>
                  <p className="text-sm text-navy-600">Homeowners, Townhomes, Condos & Rentals</p>
                </div>
              </div>

              <p className="leading-relaxed text-navy-700">
                Keep your family safe and your home operating smoothly. We handle everything from replacing hazardous
                fuse boxes to installing modern lighting, basement rewiring, and EV charging stations for everyday convenience.
              </p>

              <div className="rounded-xl bg-navy-50/70 p-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-navy-700">Residential Services Include:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-navy-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>200A Panel Replacements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>Level 2 EV Home Chargers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>Basement & House Rewiring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>GFCI / AFCI Outlet Upgrades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>Recessed LED Can Lights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>Kitchen & Bath Remodels</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-navy-600">Safe, code-compliant home power</span>
              <CallButton label="Call (605) 343-5630" />
            </div>
          </div>

          {/* Commercial Card */}
          <div className="card-lift flex flex-col justify-between rounded-3xl border border-navy-100 bg-white p-8 sm:p-10 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-volt-400 shadow">
                  <Building2 className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900">Commercial Electrical</h3>
                  <p className="text-sm text-navy-600">Showrooms, Retail, Warehouses & Facilities</p>
                </div>
              </div>

              <p className="leading-relaxed text-navy-700">
                Prevent costly downtime and maintain strict electrical safety standards. We support local businesses
                with showroom electrical buildouts, dedicated power distribution, commercial lighting retrofits, and scheduled safety maintenance.
              </p>

              <div className="rounded-xl bg-navy-50/70 p-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-navy-700">Commercial Capabilities:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-navy-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>Showroom & Retail Fit-outs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>3-Phase Power Distribution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>High-Bay LED Retrofits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>Machinery Connections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>Emergency Exit Signs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-volt-600 shrink-0" />
                    <span>Commercial Code Audits</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-navy-600">Reliable business uptime</span>
              <Link to="/commercial-electrician-rapid-city-sd" className="btn-outline">
                Commercial Details
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. FEATURED RECENT PROJECTS */}
      <Section id="projects">
        <SectionHeading
          eyebrow="Recent Work"
          title="Featured Projects in the Rapid City Area"
          description="A snapshot of completed electrical installations, showroom builds, panel modernizations, and wiring projects across Pennington County."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {FEATURED_PROJECTS.map((proj) => (
            <article
              key={proj.title}
              className="card-lift flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm"
            >
              <div className="relative h-60 w-full overflow-hidden bg-navy-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  width={940}
                  height={650}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-md bg-navy-900/80 backdrop-blur-sm px-3 py-1 text-xs font-bold text-volt-400">
                  {proj.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-500">
                  <MapPin className="h-3.5 w-3.5 text-volt-600" />
                  {proj.location}
                </div>
                <h3 className="text-xl font-bold text-navy-900">{proj.title}</h3>
                <p className="text-sm leading-relaxed text-navy-700 flex-1">{proj.description}</p>
                <div className="rounded-lg bg-navy-50 p-4 border-l-4 border-volt-500">
                  <p className="text-xs font-bold uppercase tracking-wider text-navy-800">Project Outcome:</p>
                  <p className="text-xs text-navy-700 mt-1">{proj.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 9. WHY CHOOSE BUCK'S ELECTRIC */}
      <Section tone="muted">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Why Choose Buck's Electric Inc"
              title="A local electrical contractor you can call directly"
              description="We keep our approach simple: understand the problem, explain the work, follow strict safety guidelines, and complete the job cleanly."
            />
            <ul className="grid gap-8 sm:grid-cols-2">
              {STRENGTHS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="space-y-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-volt-100">
                      <Icon className="h-6 w-6 text-navy-900" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-navy-700">{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-navy-100">
            <img
              src="https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Electrician using a multimeter to check industrial control panel wiring"
              width={940}
              height={650}
              loading="lazy"
              className="h-full max-h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* 10. GOOGLE REVIEWS SECTION (MAIN REVIEWS) */}
      <Section id="reviews">
        <div className="space-y-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Google Customer Reviews"
              title="4.8 ★★★★★ Based on 9 Google Reviews"
              description="Read verified experiences from Rapid City homeowners and businesses who rely on Dale, Dana, and Buck's Electric Inc."
            />

            {/* Google Rating Card Header */}
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href={GOOGLE_REVIEWS_SUMMARY.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-navy-200 bg-white px-5 py-2.5 text-sm font-bold text-navy-900 shadow-sm transition hover:bg-navy-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                Write a review
                <ExternalLink className="h-3.5 w-3.5 text-navy-400" />
              </a>

              <a
                href={GOOGLE_REVIEWS_SUMMARY.readReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-navy-800"
              >
                View on Google Maps
                <ExternalLink className="h-3.5 w-3.5 text-volt-400" />
              </a>
            </div>
          </div>

          {/* Review Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-navy-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-500 mr-2">Filter Reviews:</span>
            <button
              onClick={() => setReviewFilter('all')}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                reviewFilter === 'all'
                  ? 'bg-navy-900 text-volt-400 shadow-sm'
                  : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
              }`}
            >
              All Reviews (9)
            </button>
            <button
              onClick={() => setReviewFilter('comments')}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                reviewFilter === 'comments'
                  ? 'bg-navy-900 text-volt-400 shadow-sm'
                  : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
              }`}
            >
              With Comments (6)
            </button>
            <button
              onClick={() => setReviewFilter('guides')}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                reviewFilter === 'guides'
                  ? 'bg-navy-900 text-volt-400 shadow-sm'
                  : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
              }`}
            >
              Local Guides (5)
            </button>
          </div>

          {copiedReviewId && (
            <div className="rounded-lg bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-800 border border-emerald-200 animate-rise">
              ✓ Review quote copied to clipboard!
            </div>
          )}

          {/* Review Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((review) => {
              const isLiked = likedReviews[review.id];
              const avatarBg = AVATAR_COLORS[review.id] || 'bg-navy-800';

              return (
                <div
                  key={review.id}
                  className="card-lift flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-7 shadow-xs hover:border-volt-400 transition"
                >
                  <div className="space-y-4">
                    {/* Reviewer Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white shadow-xs ${avatarBg}`}
                        >
                          {review.initials}
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-navy-900 leading-tight">{review.author}</h4>
                          {review.badge && (
                            <p className="text-xs text-navy-500 font-medium leading-normal flex items-center gap-1 mt-0.5">
                              {review.isLocalGuide && (
                                <Star className="h-3 w-3 fill-amber-500 text-amber-500 shrink-0" />
                              )}
                              <span>{review.badge}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Google G Logo icon */}
                      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>

                    {/* Rating Stars & Time */}
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5 text-amber-400" aria-label={`${review.rating} stars`}>
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-navy-400">• {review.time}</span>
                    </div>

                    {/* Review Body */}
                    <p className="text-sm leading-relaxed text-navy-800">
                      "{review.comment}"
                    </p>

                    {/* Extra Assessment if available (like George Waxler) */}
                    {(review.priceAssessment || review.services) && (
                      <div className="rounded-lg bg-navy-50/80 p-3 space-y-1 text-xs border border-navy-100">
                        {review.priceAssessment && (
                          <div className="flex justify-between text-navy-700">
                            <span className="font-semibold">Price assessment:</span>
                            <span className="font-bold text-navy-900">{review.priceAssessment} ({review.price})</span>
                          </div>
                        )}
                        {review.services && (
                          <div className="flex justify-between text-navy-700">
                            <span className="font-semibold">Services:</span>
                            <span className="font-bold text-navy-900">{review.services}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Footer with Like & Share Buttons */}
                  <div className="mt-6 pt-4 border-t border-navy-100 flex items-center justify-between text-xs text-navy-600">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleLike(review.id)}
                        className={`inline-flex items-center gap-1.5 font-semibold transition hover:text-navy-900 ${
                          isLiked ? 'text-blue-600' : 'text-navy-500'
                        }`}
                      >
                        <ThumbsUp className={`h-3.5 w-3.5 ${isLiked ? 'fill-blue-600' : ''}`} />
                        <span>{isLiked ? 'Liked' : 'Like'}</span>
                      </button>

                      <button
                        onClick={() => handleShare(review)}
                        className="inline-flex items-center gap-1.5 font-semibold text-navy-500 transition hover:text-navy-900"
                      >
                        <Share2 className="h-3.5 w-3.5" />
                        <span>Share</span>
                      </button>
                    </div>

                    <a
                      href={GOOGLE_REVIEWS_SUMMARY.readReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-navy-400 hover:text-navy-700 inline-flex items-center gap-1"
                    >
                      Google Maps
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Banner */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Star className="h-6 w-6 fill-amber-500 text-amber-500" />
              </span>
              <div>
                <h4 className="text-base font-bold text-navy-900">Have you worked with Dale, Dana, or Buck's Electric?</h4>
                <p className="text-xs sm:text-sm text-navy-600 mt-0.5">
                  Share your experience with fellow Rapid City and Black Hills homeowners.
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEWS_SUMMARY.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-volt-500 px-6 py-3 text-sm font-bold text-navy-900 shadow transition hover:bg-volt-400"
            >
              Write a Review on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>

      {/* 11. 4-STEP PROCESS */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, transparent process from initial call to final inspection"
          description="Every job starts with a real conversation, so you know exactly what to expect before any work begins."
          centered
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <li key={step.title} className="card-lift rounded-2xl border border-navy-100 bg-white p-7 shadow-sm">
              <span className="text-4xl font-extrabold text-volt-600">{step.step}</span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 12. WARNING SIGNS & SOUTH DAKOTA ELECTRICAL SAFETY */}
      <Section id="safety">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Electrical Safety"
              title="Warning signs that your electrical system needs immediate attention"
              description="Electrical problems rarely solve themselves. These symptoms indicate overloaded wiring or failing devices that should be evaluated promptly."
            />
            <ul className="space-y-4">
              {WARNING_SIGNS.map((sign) => (
                <li key={sign.title} className="rounded-xl border border-navy-100 bg-white p-4 shadow-xs">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="mt-1 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">{sign.title}</h4>
                      <p className="text-xs text-navy-600 mt-0.5 leading-relaxed">{sign.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <CallButton label={`Call ${SITE.phoneDisplay}`} />
              <Link to="/electrical-repair-rapid-city-sd" className="btn-outline">
                <Wrench className="h-4 w-4" aria-hidden="true" />
                Read about electrical repair
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-navy-100 bg-navy-50/70 p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-navy-900" />
                <div>
                  <h3 className="text-xl font-bold text-navy-900">Black Hills Seasonal Safety</h3>
                  <p className="text-xs text-navy-600">Local climate realities in western South Dakota</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {SAFETY_TIPS.map((tip) => (
                  <div key={tip.title} className="rounded-xl bg-white p-4 border border-navy-100">
                    <h4 className="text-sm font-bold text-navy-900">{tip.title}</h4>
                    <p className="text-xs leading-relaxed text-navy-700 mt-1">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consultation Request Form */}
            <div className="rounded-2xl border border-navy-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-navy-900">Request a Service Consultation</h3>
              <p className="text-xs text-navy-600 mt-1">
                Tell us about your project or call us directly at {SITE.phoneDisplay}.
              </p>

              {inquirySubmitted ? (
                <div className="mt-6 rounded-xl bg-emerald-50 p-6 text-center text-emerald-900 border border-emerald-200">
                  <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
                  <p className="mt-2 text-base font-bold">Inquiry Noted!</p>
                  <p className="mt-1 text-xs text-emerald-700">
                    Thank you, {inquiryName || 'neighbor'}. For fastest immediate dispatch, please call us directly at{' '}
                    <a href={SITE.phoneHref} className="font-bold underline">
                      {SITE.phoneDisplay}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-navy-700">Your Name</label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. John Miller"
                      className="mt-1 w-full rounded-lg border border-navy-200 px-3 py-2 text-sm text-navy-900 focus:border-volt-500 focus:ring-1 focus:ring-volt-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy-700">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      placeholder="(605) 555-0123"
                      className="mt-1 w-full rounded-lg border border-navy-200 px-3 py-2 text-sm text-navy-900 focus:border-volt-500 focus:ring-1 focus:ring-volt-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy-700">Service Needed</label>
                    <select
                      value={inquiryService}
                      onChange={(e) => setInquiryService(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-navy-200 px-3 py-2 text-sm text-navy-900 focus:border-volt-500 focus:ring-1 focus:ring-volt-500"
                    >
                      <option value="Panel Upgrade">200A Electrical Panel Upgrade</option>
                      <option value="EV Charger">Level 2 EV Charger Installation</option>
                      <option value="Electrical Repair">Electrical Repair / Tripping Breakers</option>
                      <option value="Lighting">Recessed or Exterior Lighting</option>
                      <option value="Commercial">Commercial Electrical Project</option>
                      <option value="Rewiring">Whole-Home / Basement Rewiring</option>
                      <option value="Other">Other Electrical Work</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy-700">Short Description (optional)</label>
                    <textarea
                      rows={2}
                      value={inquiryNotes}
                      onChange={(e) => setInquiryNotes(e.target.value)}
                      placeholder="Brief details about what you need..."
                      className="mt-1 w-full rounded-lg border border-navy-200 px-3 py-2 text-sm text-navy-900 focus:border-volt-500 focus:ring-1 focus:ring-volt-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-navy-900 py-3 text-sm font-bold text-volt-400 transition hover:bg-navy-800"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* 13. FULL SERVICE AREAS DIRECTORY */}
      <Section tone="muted">
        <div className="space-y-4">
          <SectionHeading
            eyebrow="Service Coverage"
            title="Serving Rapid City & the Black Hills Region"
            description="Our primary facility is in Rapid City at 1720A Samco Rd, and our service trucks travel throughout Pennington, Meade, Lawrence, and Custer counties."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                to={`/${area.slug}`}
                className="card-lift group rounded-xl border border-navy-100 bg-white p-5 transition hover:border-volt-500 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-navy-900 group-hover:text-navy-600">{area.name}</span>
                  <ChevronRight className="h-4 w-4 text-navy-400 transition-transform group-hover:translate-x-1 group-hover:text-volt-600" />
                </div>
                <p className="mt-2 text-xs text-navy-600 line-clamp-2">{area.summary}</p>
              </Link>
            ))}
          </div>

          <div className="pt-4 text-center">
            <Link to="/service-areas" className="inline-flex items-center gap-2 font-bold text-navy-900 hover:text-navy-600">
              Browse detailed service area pages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* 14. COMPREHENSIVE FAQS */}
      <Section id="faqs">
        <div className="mx-auto max-w-4xl space-y-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Electrical Questions"
            description="Find answers to common questions about electrical repairs, permits, pricing, panel upgrades, and scheduling in Rapid City, SD."
            centered
          />
          <FaqList faqs={HOME_FAQS} />
          <div className="text-center pt-4">
            <p className="text-sm text-navy-600">
              Have a specific question not covered here? Call our electricians at{' '}
              <a href={SITE.phoneHref} className="font-bold text-navy-900 underline decoration-volt-500">
                {SITE.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* 15. FINAL CALL CTA */}
      <CallCta
        title="Ready to discuss your electrical project in Rapid City?"
        description={`Call ${SITE.phoneDisplay} today to speak directly with Dale and Buck's Electric Inc. We will evaluate your project, explain the scope, and provide dependable service.`}
      />
    </>
  );
}
