export interface ServiceCategory {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  turnaround: string;
  propertyTypes: string;
  scopeItems: string[];
}

export interface ShowcaseProject {
  id: string;
  title: string;
  suburb: 'Sandton' | 'Fourways' | 'Kempton Park' | 'Cosmo City / Randburg' | 'Rosebank';
  category: string;
  type: 'Residential' | 'Industrial';
  duration: string;
  summary: string;
  highlights: string[];
  image: string;
}

export interface PricingTier {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  priceIndicator: string;
  unitLabel: string;
  description: string;
  features: string[];
  recommended?: boolean;
  preselectService: string;
}

export interface Testimonial {
  id: string;
  author: string;
  roleOrHome: string;
  suburb: string;
  platform: 'ProCompare Verified' | 'Facebook Recommendation' | 'Direct Repeat Client';
  serviceTag: string;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  brandName: 'FAG Projects',
  altName: 'FagProjects',
  contactPerson: 'Frank',
  locationShort: 'Cosmo City Ext 4, Randburg',
  locationFull: 'Cosmo City Ext 4, Randburg, Johannesburg, Gauteng, South Africa',
  phonePrimary: '+27 73 719 5799',
  phonePrimaryHref: 'tel:+27737195799',
  phoneSecondary: '+27 67 718 5029',
  phoneSecondaryHref: 'tel:+27677185029',
  email: 'info@fagprojects.co.za',
  emailHref: 'mailto:info@fagprojects.co.za',
  whatsappHref: 'https://wa.me/27737195799?text=Hello%20Frank%2C%20I%20would%20like%20to%20request%20a%20site%20assessment%20and%20quote%20from%20FAG%20Projects.',
  serviceAreas: [
    'Cosmo City Ext 4',
    'Randburg',
    'Sandton',
    'Rosebank',
    'Fourways',
    'Kempton Park',
  ],
  socials: {
    facebookLabel: 'FagProjects on Facebook',
    facebookUrl: 'https://www.facebook.com/search/top?q=FagProjects',
    proCompareLabel: 'Fagprojects on ProCompare',
    proCompareUrl: 'https://www.procompare.co.za/',
  },
};

export const SERVICES: ServiceCategory[] = [
  {
    id: 'renovations',
    code: '01',
    title: 'Renovations & Building',
    shortTitle: 'Renovations',
    tagline: 'Structural additions, turnkey kitchens, bathrooms & precision masonry.',
    description:
      'From opening up living spaces in Sandton homes to full room extensions and commercial partition building in Kempton Park, we manage every brick, lintel, screed, and finish under direct owner supervision.',
    image: '/images/service-renovations.jpg',
    turnaround: '1 – 6 Weeks (Scope Dependent)',
    propertyTypes: 'Residential Homes & Industrial Units',
    scopeItems: [
      'Kitchen, bathroom & master bedroom full renovations',
      'Seamless room extensions, granny flats & structural alterations',
      'General load-bearing & internal brickwork wall building',
      'Controlled structural wall demolition, rubble removal & making good',
      'Concrete foundations, lintel installations, plastering & floor screed',
    ],
  },
  {
    id: 'painting',
    code: '02',
    title: 'Painting & Ceilings',
    shortTitle: 'Painting & Ceilings',
    tagline: 'Crisp interior/exterior coatings, weather-shield roofs & modern ceilings.',
    description:
      'Proper surface preparation sets lasting work apart. We scrape, damp-treat, prime, and apply multi-coat architectural paints alongside flush-plastered RhinoBoard and suspended ceiling installations.',
    image: '/images/service-painting.jpg',
    turnaround: '3 – 10 Days',
    propertyTypes: 'Private Residences, Office Suites & Warehouses',
    scopeItems: [
      'High-build exterior wall painting with crack bridging & UV shield',
      'Low-VOC interior matte, satin & washable washable coatings',
      'Airless spray & brushed roof painting for tiled & corrugated roofs',
      'Flush-plastered drywall ceilings, bulkhead drops & cornice fitment',
      'Acoustic suspended ceiling grids for offices & retail units',
    ],
  },
  {
    id: 'roofing',
    code: '03',
    title: 'Roofing & Waterproofing',
    shortTitle: 'Roofing',
    tagline: 'Highveld storm-proof roof repairs, torch-on membranes & structural reroofing.',
    description:
      'Johannesburg hailstorms and summer downpours punish neglected roofs. Our roofing team traces stubborn leaks to the source, replaces cracked tiles or corroded valleys, and seals concrete slabs with certified torch-on systems.',
    image: '/images/service-roofing.jpg',
    turnaround: '1 – 7 Days',
    propertyTypes: 'Pitched Tiled Roofs, Flat Slabs & Factory Roofs',
    scopeItems: [
      'Complete leak tracing, ridge cap repointing & valley iron replacement',
      'Concrete tile, clay tile, IBR & corrugated sheeting roof repairs',
      '4mm Derbigum / torch-on waterproofing for flat concrete slabs & balconies',
      'Liquid acrylic & fiber-reinforced parapet & flashing sealing',
      'Barge board, fascia board & seamless aluminum gutter replacements',
    ],
  },
  {
    id: 'plumbing',
    code: '04',
    title: 'Plumbing Services',
    shortTitle: 'Plumbing',
    tagline: 'Dependable residential & industrial piping, fixtures, drainage & geyser work.',
    description:
      'Clean concealed pipework, balanced water pressure, and zero hidden drips. Whether fitting out a luxury Rosebank bathroom remodel or clearing industrial line blockages, our plumbers deliver lasting mechanical reliability.',
    image: '/images/service-plumbing.jpg',
    turnaround: 'Same-Day Callout to 5 Days',
    propertyTypes: 'Domestic, Commercial & Light Industrial',
    scopeItems: [
      'Complete bathroom & kitchen first-fix and sanitaryware fit-off',
      'Burst pipe repairs, pressure control valves & copper/PEX rerouting',
      'High-pressure geyser installations, drip trays & valve replacements',
      'Blocked drains, gullies, soil stack repairs & stormwater discharge',
      'Tap, mixer, concealed cistern & utility sink upgrades',
    ],
  },
  {
    id: 'paving',
    code: '05',
    title: 'Paving, Fencing & Gates',
    shortTitle: 'Paving & Gates',
    tagline: 'Cobblestone driveways, boundary walls, electric security & automated access.',
    description:
      'Elevate kerb appeal and perimeter security across Fourways and Randburg estates. We compact sub-bases properly to prevent sinking pavers, build reinforced precast or brick boundary walls, and automate driveway gates and garage doors.',
    image: '/images/service-paving.jpg',
    turnaround: '4 – 14 Days',
    propertyTypes: 'Estates, Townhouses & Commercial Premises',
    scopeItems: [
      'Bevel, cobblestone & interlock driveway and patio paving',
      'Engineered brick-and-mortar boundary walls with coping stones',
      'Steel palisade, ClearView & perimeter security fencing installs',
      'Custom sliding & swing steel gates, pedestrian gates & pedestrian locks',
      'Centurion gate motor automation, sectional garage doors & battery backup',
    ],
  },
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'proj-sandton',
    title: 'Open-Plan Kitchen & Entertainment Patio Extension',
    suburb: 'Sandton',
    category: 'Renovations & Building',
    type: 'Residential',
    duration: '5 Weeks',
    summary:
      'Demolished an internal load-bearing partition with engineered steel beam insertion, extending the living footprint by 28m² with bespoke cabinetry, honed countertops, and wide aluminum sliders.',
    highlights: ['Wall demolition & beam support', 'Bulkhead ceiling & LED trough', 'Complete plumbing relocation'],
    image: '/images/project-sandton.jpg',
  },
  {
    id: 'proj-fourways',
    title: 'Perimeter Boundary Wall, Driveway Paving & Automated Gate',
    suburb: 'Fourways',
    category: 'Paving, Fencing & Gates',
    type: 'Residential',
    duration: '10 Days',
    summary:
      'Replaced a subsiding gravel apron with compacted herringbone cobblestone paving, plastered 42 linear meters of perimeter walling, and commissioned a high-speed automated sliding gate.',
    highlights: ['42m plastered masonry boundary wall', '145m² compacted herringbone paving', 'Centurion D5 EVO automation'],
    image: '/images/project-fourways.jpg',
  },
  {
    id: 'proj-kempton',
    title: 'Warehouse Roof Waterproofing & Facade Coating',
    suburb: 'Kempton Park',
    category: 'Roofing & Waterproofing',
    type: 'Industrial',
    duration: '2 Weeks',
    summary:
      'High-pressure washed and sealed 680m² of industrial box-rib roofing with rust converter and elastomeric membrane, paired with complete external masonry repainting across loading bays.',
    highlights: ['680m² industrial roof waterproofing', 'Parapet & box gutter resealing', 'Heavy-duty exterior masonry coats'],
    image: '/images/project-kempton.jpg',
  },
  {
    id: 'proj-cosmo',
    title: 'Complete Roof Tile Overhaul & Exterior Repaint',
    suburb: 'Cosmo City / Randburg',
    category: 'Painting & Ceilings',
    type: 'Residential',
    duration: '8 Days',
    summary:
      'Replaced fractured roof tiles, repointed concrete ridges, treated interior damp patches, and applied three coats of weather-resistant warm cream exterior paint along with fresh RhinoBoard ceilings.',
    highlights: ['Ridge repointing & valley flashings', 'New flush-plastered ceilings', 'UV-shield exterior repaint'],
    image: '/images/service-roofing.jpg',
  },
  {
    id: 'proj-rosebank',
    title: 'Master Bathroom Remodel & Concealed Plumbing Suite',
    suburb: 'Rosebank',
    category: 'Plumbing Services',
    type: 'Residential',
    duration: '12 Days',
    summary:
      'Stripped an dated 1990s bathroom back to bare brick, rerouted concealed mixer pipework, waterproofed the walk-in wet area, and fitted large-format travertine tiles with custom fixtures.',
    highlights: ['Concealed copper/PEX plumbing', 'Walk-in shower waterproofing', 'Precision mitered tilework'],
    image: '/images/service-plumbing.jpg',
  },
  {
    id: 'proj-ceilings',
    title: 'Architectural Ceilings & Interior Repainting',
    suburb: 'Sandton',
    category: 'Painting & Ceilings',
    type: 'Residential',
    duration: '6 Days',
    summary:
      'Installed crisp dropped shadow-line ceilings across an open-plan reception room, concealing HVAC ducting and ambient LED strips before finishing in ultra-matte warm linen tones.',
    highlights: ['Concealed perimeter shadow lines', 'Skimmed drywall perfection', 'Washable matte wall finishes'],
    image: '/images/service-painting.jpg',
  },
];

export const BENEFIT_PILLARS = [
  {
    num: '01',
    title: 'Direct On-Site Supervision by Frank',
    description:
      'No passing your project down a chain of unknown sub-contractors. Frank personally scopes, quotes, and oversees work quality across Cosmo City, Sandton, Fourways, and Kempton Park.',
  },
  {
    num: '02',
    title: 'Five Trades Under One Contract',
    description:
      'Renovations require builders, plumbers, roofers, painters, and pavers working in sequence. FAG Projects handles all five trades in-house so timelines never stall between contractors.',
  },
  {
    num: '03',
    title: 'Residential Warmth & Industrial Rigour',
    description:
      'We respect inhabited family homes with clean dust sheets and polite crews—while carrying the equipment, safety discipline, and scale needed for Kempton Park commercial facilities.',
  },
  {
    num: '04',
    title: 'Zero-Surprise Itemized Quotes',
    description:
      'Before a brick is laid or a tile lifted, you receive a transparent written quotation separating labor and approved materials—no surprise variations mid-build.',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'tier-maintenance',
    code: 'TIER 01',
    name: 'Essential Maintenance & Repairs',
    subtitle: 'Rapid fixes for homes & business suites',
    priceIndicator: 'From R1,950',
    unitLabel: 'PER TARGETED JOB / CALL-OUT',
    description:
      'Ideal for urgent leak diagnostics, roof valley repairs, plumbing replacements, single-room painting, or gate motor servicing.',
    features: [
      'Free diagnostic inspection on site approval',
      'Roof leak patching, tile swap & waterproofing',
      'General plumbing: taps, traps, toilets & leaks',
      'Gate automation troubleshooting & welding repairs',
      '1-year workmanship guarantee on repaired areas',
    ],
    preselectService: 'Roofing & Waterproofing',
  },
  {
    id: 'tier-renovation',
    code: 'TIER 02',
    name: 'Signature Renovation & Upgrade',
    subtitle: 'Most popular for Johannesburg homeowners',
    priceIndicator: 'Custom Quote',
    unitLabel: 'LABOR-ONLY OR FULL TURNKEY SUPPLY',
    description:
      'Designed for full bathroom or kitchen remodels, house painting & ceiling installations, driveway paving, and automated boundary walls.',
    features: [
      'Detailed architectural walkthrough with Frank',
      'Itemized bill of materials & phased payment schedule',
      'Multi-trade coordination (building, plumbing & painting)',
      'Dedicated site foreman & daily WhatsApp progress updates',
      'Full rubble clearance & spotless handover',
    ],
    recommended: true,
    preselectService: 'Renovations & Building',
  },
  {
    id: 'tier-extension',
    code: 'TIER 03',
    name: 'Structural Extension & Industrial',
    subtitle: 'Room additions, demolitions & warehouse maintenance',
    priceIndicator: 'Project Proposal',
    unitLabel: 'CONTRACTED SCHEDULE OF WORKS',
    description:
      'Tailored for room extensions, structural wall demolition, complete residential reroofs, or ongoing industrial property maintenance in Gauteng.',
    features: [
      'Foundation to ridge completion under one team',
      'Engineered wall building & steel lintel support',
      'Large-scale torch-on waterproofing & factory coatings',
      'Commercial plumbing & high-traffic security fencing',
      'Scheduled industrial maintenance agreements available',
    ],
    preselectService: 'Paving, Fencing & Gates',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Thabo Mokoena',
    roleOrHome: 'Homeowner · 4-Bedroom House Extension',
    suburb: 'Cosmo City Ext 4',
    platform: 'ProCompare Verified',
    serviceTag: 'Renovations & Roofing',
    quote:
      'Frank and the FAG Projects team extended our main bedroom and redid the entire tiled roof valley before the rains hit. Always on time, honest about material costs, and left our yard spotless.',
  },
  {
    id: 'rev-2',
    author: 'Claire van der Merwe',
    roleOrHome: 'Homeowner · Kitchen & Bathroom Remodel',
    suburb: 'Sandton',
    platform: 'Facebook Recommendation',
    serviceTag: 'Renovations & Plumbing',
    quote:
      'We hired FAG Projects to knock down our dividing dining wall and refit two bathrooms. Having builders, plumbers, and ceiling installers all under Frank meant zero waiting around.',
  },
  {
    id: 'rev-3',
    author: 'Nolan Pillay',
    roleOrHome: 'Facilities Supervisor · Logistics Park',
    suburb: 'Kempton Park',
    platform: 'Direct Repeat Client',
    serviceTag: 'Waterproofing & Industrial Painting',
    quote:
      'Reliable contractors who understand industrial deadlines are rare. Frank’s crew waterproofed our warehouse parapets and painted 900m² of exterior blockwork cleanly over two weekends.',
  },
  {
    id: 'rev-4',
    author: 'Sarah Khumalo',
    roleOrHome: 'Estate Resident · Perimeter & Driveway',
    suburb: 'Fourways',
    platform: 'ProCompare Verified',
    serviceTag: 'Paving & Gate Automation',
    quote:
      'Our old driveway pavers were sinking and our sliding gate kept tripping. FAG Projects compacted the base properly, laid neat cobbles, and installed a silent automated gate motor.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Which areas around Johannesburg does FAG Projects service?',
    answer:
      'We are based right in Cosmo City Ext 4, Randburg, and dispatch teams daily across Randburg, Sandton, Rosebank, Fourways, Bryanston, Midrand, and Kempton Park for both residential and industrial projects.',
  },
  {
    id: 'faq-2',
    question: 'Does Frank charge a call-out fee to quote on renovations or repairs?',
    answer:
      'No—site assessments and formal itemized quotations within our core Gauteng service areas (Cosmo City, Randburg, Sandton, Rosebank, Fourways, and Kempton Park) are free. Simply call or WhatsApp Frank on +27 73 719 5799 or submit the form below to schedule a walk-through.',
  },
  {
    id: 'faq-3',
    question: 'Do you supply building materials, or can I choose a labor-only quote?',
    answer:
      'We offer both options transparently. Clients often ask us to procure full materials using our trade hardware accounts (passing savings on tiles, waterproof membranes, RhinoBoard, paint, and gate motors), or you may supply specialized finishes such as bathroom fittings while we handle all structural materials and labor.',
  },
  {
    id: 'faq-4',
    question: 'Do you handle both small emergency repairs and full structural building?',
    answer:
      'Yes. Whether you need an urgent roof leak repaired or a burst pipe replaced today, or you are planning a multi-week kitchen remodel, room extension, boundary wall, and automated driveway gate installation, our multi-trade crew scales to fit the job.',
  },
  {
    id: 'faq-5',
    question: 'What brands and types of gate automation and roofing do you work with?',
    answer:
      'For perimeter security and garages, we install and service Centurion gate motors, ET systems, custom sliding/swing steel gates, and sectional or roll-up garage doors. On roofing, we work across concrete tiles, clay tiles, IBR/corrugated metal roofs, and flat concrete slab torch-on waterproofing.',
  },
];
