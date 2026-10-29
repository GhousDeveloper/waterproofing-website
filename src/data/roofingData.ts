export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  warranty: string;
  turnaround: string;
  idealFor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: 'residential' | 'commercial' | 'repair' | 'waterproofing';
  service: string;
  image: string;
  materials: string;
  duration: string;
  description: string;
  year: number;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  avatar: string;
  comment: string;
  isDemo?: boolean;
}

export interface BlogPostItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  excerpt: string;
  content: string[];
  tips: string[];
}

export const COMPANY_INFO = {
  name: 'RoofPro Roofing Services',
  shortName: 'RoofPro',
  positioning: 'Professional Roofing & Waterproofing Solutions in Pakistan',
  tagline: 'Reliable Roofing & Waterproofing Solutions You Can Trust.',
  phoneDisplay: '+92 300 1234567',
  phoneRaw: '+923001234567',
  whatsAppUrl: 'https://wa.me/923001234567',
  emailEstimates: 'estimates@roofpro.pk',
  emailInfo: 'info@roofpro.pk',
  headOffice: 'Main Shahrah-e-Faisal, Karachi, Sindh, Pakistan',
  serviceAreasText: 'Serving Homes & Businesses Across Sindh, Pakistan',
  serviceCities: [
    'Karachi',
    'Hyderabad',
    'Sukkur',
    'Ghotki',
    'Mirpur Khas',
    'Larkana',
    'Nawabshah (Shaheed Benazirabad)',
    'Surrounding Areas of Sindh'
  ],
  workingHours: {
    weekdays: 'Monday – Saturday: 8:00 AM – 7:00 PM',
    sunday: 'Sunday: Emergency Services Only',
    emergency: '24/7 Emergency Leak & Storm Response Available'
  }
};

export const IMAGES = {
  hero: '/src/assets/images/hero_roofers_team_1793215350822.jpg',
  install: '/src/assets/images/service_roof_install_1793215350962.jpg',
  repair: '/src/assets/images/service_roof_repair_1793215351586.jpg',
  commercial: '/src/assets/images/service_commercial_roof_1793215352790.jpg',
  completed: '/src/assets/images/completed_luxury_roof_1793215352412.jpg',
  inspection: '/src/assets/images/service_roof_inspection_1793215369910.jpg',
  stormDamage: '/src/assets/images/storm_damage_repair_1793215369328.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    slug: 'installation',
    number: '01',
    title: 'Roof Installation & Replacement',
    shortDesc: 'Professional residential, commercial, and industrial roof installation and replacement engineered for durability and weather resistance.',
    fullDesc: 'Whether you are constructing a new residence, factory, or replacing a deteriorating roof, RoofPro delivers industry-grade installation precision. Our team installs weather-barrier systems, concrete slab protection, corrugated metal roofs, and proper slope drainage to protect your property against harsh sun, rain, and moisture.',
    image: IMAGES.install,
    features: [
      'Residential, commercial, and industrial roof installations',
      'High-grade weather barrier and multi-layer underlayment',
      'Roof slope alignment and rainwater drainage planning',
      'Quality flashing and perimeter edge waterproofing'
    ],
    warranty: 'Workmanship Guarantee Included',
    turnaround: 'Prompt turnaround tailored to project scope',
    idealFor: 'New construction, aging roofs, industrial facilities, residential bungalows'
  },
  {
    id: '2',
    slug: 'repair',
    number: '02',
    title: 'Roof Leak Repair',
    shortDesc: 'Fast diagnosis and repair of roof leakage, cracks, damaged roofing, drainage problems, and water penetration.',
    fullDesc: 'Roof leakage and seepage can silently compromise your concrete slabs, ceiling plaster, and electrical wiring. Our diagnostic team inspects the root source of water intrusion, seals hairline fractures, rebuilds drainage channels, and executes permanent repairs before costly interior damage occurs.',
    image: IMAGES.repair,
    features: [
      'Rapid emergency leak diagnosis and repair dispatch',
      'Crack sealing with elastomeric polymers and cementitious compounds',
      'Parapet wall joint, rainwater downpipe, and flashing repair',
      'Ceiling dampness and seepage source containment'
    ],
    warranty: 'Workmanship Repair Guarantee',
    turnaround: 'Same-day or next-day inspection',
    idealFor: 'Active water drips, ceiling dampness, cracks, water pooling after rain'
  },
  {
    id: '3',
    slug: 'waterproofing',
    number: '03',
    title: 'Roof Waterproofing',
    shortDesc: 'Professional waterproofing solutions for concrete/RCC roofs, terraces, commercial buildings, and residential properties.',
    fullDesc: 'Concrete and RCC roofs in Pakistan face intense seasonal rainfall and thermal expansion, causing micro-cracks and chronic water penetration. RoofPro applies multi-layer bitumen membranes, liquid-applied elastomeric acrylic coatings, and fiber-reinforced waterproofing barriers that seal porous concrete completely.',
    image: IMAGES.stormDamage,
    features: [
      'Multi-coat elastomeric waterproof membrane applications',
      'Chemical injection and crack grouting for RCC slabs',
      'Terrace, expansion joint, and parapet waterproofing',
      'Puddle prevention and rainwater drainage slope correction'
    ],
    warranty: 'Multi-Year Waterproofing Warranty',
    turnaround: '2 - 3 business days for standard homes',
    idealFor: 'RCC slab roofs, residential terraces, commercial flat roofs, monsoon readiness'
  },
  {
    id: '4',
    slug: 'heatproofing',
    number: '04',
    title: 'Roof Heat Proofing',
    shortDesc: 'Roof heatproofing and reflective coating solutions designed for Pakistan\'s extreme summer temperatures to keep interiors significantly cooler.',
    fullDesc: 'Pakistan’s scorching summer heat drives indoor temperatures up and inflates electricity bills. RoofPro provides specialized heat-reflective solar coatings and elastomeric thermal barrier membranes that reflect up to 85% of solar radiation, noticeably reducing indoor temperature and reducing air conditioning load.',
    image: IMAGES.completed,
    features: [
      'High-albedo solar reflective white thermal coatings',
      'Up to 5°C to 8°C reduction in indoor roof surface temperature',
      'Dual-action thermal resistance with integrated waterproofing',
      'UV-resistant protective topcoats with long-lasting reflectivity'
    ],
    warranty: 'Thermal Protection Guarantee',
    turnaround: '1 - 2 business days',
    idealFor: 'Top-floor apartments, houses, office terraces, industrial shed roofs'
  },
  {
    id: '5',
    slug: 'commercial',
    number: '05',
    title: 'Commercial & Industrial Roofing',
    shortDesc: 'Roofing and waterproofing solutions for factories, warehouses, offices, schools, hospitals, shops, and commercial buildings.',
    fullDesc: 'Commercial and industrial facilities demand robust roofing that resists heavy weather with minimal disruption to business operations. RoofPro handles large-span corrugated steel sheds, pre-engineered building (PEB) roofs, factory waterproofing, and scheduled corporate preventive maintenance contracts across Sindh.',
    image: IMAGES.commercial,
    features: [
      'Industrial warehouse and factory shed roof maintenance',
      'Large-scale commercial roof waterproofing and heatproofing',
      'Corrugated sheet replacement, screw-hole sealing, and rust treatment',
      'Flexible scheduling to avoid disruption to daily operations'
    ],
    warranty: 'Commercial Project Guarantee',
    turnaround: 'Milestone-based corporate schedule',
    idealFor: 'Warehouses, textile mills, corporate buildings, hospitals, schools'
  },
  {
    id: '6',
    slug: 'inspection',
    number: '06',
    title: 'Roof Inspection & Assessment',
    shortDesc: 'Professional roof inspection to detect cracks, moisture, leakage, drainage issues, weak areas, and structural roofing concerns.',
    fullDesc: 'Gain total clarity on the true condition of your roof before the monsoon season begins or before purchasing a commercial property. RoofPro conducts thorough visual, moisture, and structural inspections, providing you with a clear, itemized report outlining required repairs with zero high-pressure sales.',
    image: IMAGES.inspection,
    features: [
      'Comprehensive structural, moisture, and slab integrity audit',
      'Detection of hidden cracks, porous mortar, and drainage blockages',
      'Itemized assessment report with clear recommendations',
      'Cost-effective preventive maintenance roadmap'
    ],
    warranty: 'Professional Assessment Report',
    turnaround: 'Detailed report delivered within 24 hours',
    idealFor: 'Pre-monsoon maintenance, property handover, persistent leaks, industrial audits'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'DHA Phase 6 Residential Bungalow Waterproofing',
    location: 'Karachi, Sindh',
    category: 'waterproofing',
    service: 'Roof Waterproofing & Heatproofing',
    image: IMAGES.completed,
    materials: 'Multi-layer elastomeric polymer waterproofing + thermal reflective coating',
    duration: '3 Days',
    description: 'Complete surface preparation, crack grouting, and dual-layer waterproofing with thermal heat-reflective topcoat for a 600 sq yd residential bungalow.',
    year: 2026
  },
  {
    id: 'p2',
    title: 'Korangi Industrial Area Textile Facility',
    location: 'Karachi, Sindh',
    category: 'commercial',
    service: 'Industrial Shed Waterproofing',
    image: IMAGES.commercial,
    materials: 'Industrial seam sealant, anti-rust primer, and heavy-duty protective coating',
    duration: '7 Days',
    description: 'Restored 24,000 sq ft industrial corrugated steel roof shed, sealing all J-bolts, overlapping joints, and rainwater gutters without pausing factory shifts.',
    year: 2026
  },
  {
    id: 'p3',
    title: 'Latifabad Commercial Plaza Terrace Repair',
    location: 'Hyderabad, Sindh',
    category: 'repair',
    service: 'Leak Repair & Drainage Correction',
    image: IMAGES.repair,
    materials: 'Polymer modified cementitious compound + heavy-duty drainage pipes',
    duration: '2 Days',
    description: 'Diagnosed persistent rainwater pooling, corrected terrace slope gradients, and resealed parapet wall joints to eliminate floor seepage.',
    year: 2025
  },
  {
    id: 'p4',
    title: 'Clifton Block 4 Luxury Residence Heatproofing',
    location: 'Karachi, Sindh',
    category: 'residential',
    service: 'Roof Heat Proofing System',
    image: IMAGES.install,
    materials: 'Solar reflective elastomeric barrier membrane',
    duration: '2 Days',
    description: 'Applied high-albedo heat reflective coating system on 4,500 sq ft concrete roof terrace, reducing top-floor indoor temperatures by 6°C.',
    year: 2026
  },
  {
    id: 'p5',
    title: 'Sukkur Logistics Warehouse Rain Restoration',
    location: 'Sukkur, Sindh',
    category: 'repair',
    service: 'Monsoon Rain Damage Repair',
    image: IMAGES.stormDamage,
    materials: 'Cold-applied bitumen membrane + fiber mesh reinforcement',
    duration: '3 Days',
    description: 'Emergency post-monsoon repair for water penetration and cracked slab joints across a regional distribution depot.',
    year: 2025
  },
  {
    id: 'p6',
    title: 'Shahrah-e-Faisal Corporate Office Inspection',
    location: 'Karachi, Sindh',
    category: 'commercial',
    service: 'Comprehensive Roof Inspection',
    image: IMAGES.inspection,
    materials: 'Moisture diagnostic audit & drainage survey',
    duration: '1 Day',
    description: 'Full roof condition audit identifying slab expansion joint failures and water tank overflow leaks, providing an actionable maintenance plan.',
    year: 2026
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Ahmed Raza',
    role: 'Homeowner',
    location: 'Karachi, Sindh',
    rating: 5,
    date: 'March 2026',
    service: 'Roof Waterproofing & Heat Proofing',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    comment: 'RoofPro solved a stubborn monsoon leakage problem on our terrace that two previous contractors couldn’t fix. The team was punctual, polite, and very neat. The heatproofing coating has also made our upper bedrooms noticeably cooler during hot afternoons.',
    isDemo: true
  },
  {
    id: 'r2',
    name: 'Muhammad Usman',
    role: 'Business Owner',
    location: 'Hyderabad, Sindh',
    rating: 5,
    date: 'February 2026',
    service: 'Commercial Warehouse Waterproofing',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    comment: 'We hired RoofPro for our commercial storage facility in Hyderabad. Their team repaired sheet seams, replaced rusty fasteners, and sealed our gutters thoroughly. Excellent communication and an itemized, transparent quotation without hidden costs.',
    isDemo: true
  },
  {
    id: 'r3',
    name: 'Ali Hassan',
    role: 'Property Manager',
    location: 'Sukkur, Sindh',
    rating: 5,
    date: 'January 2026',
    service: 'Roof Leak Repair',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    comment: 'Prompt response and thorough diagnosis of roof water seepage in our residential building. They accurately pinpointed the crack near the water tank and sealed it completely before rains started. Highly recommended for roofing work in Sindh.',
    isDemo: true
  },
  {
    id: 'r4',
    name: 'Fatima Malik',
    role: 'School Administrator',
    location: 'Karachi, Sindh',
    rating: 5,
    date: 'November 2025',
    service: 'School Campus Waterproofing',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    comment: 'RoofPro waterproofed three building blocks during school holidays. The work was completed strictly on schedule with clean site handover. No leakage reported throughout the winter rains.',
    isDemo: true
  }
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    slug: '7-warning-signs-roof-needs-immediate-repair-before-monsoon',
    title: '7 Warning Signs Your Roof Needs Immediate Repair Before Monsoon',
    category: 'Monsoon Preparation',
    date: 'April 14, 2026',
    readTime: '5 min read',
    image: IMAGES.repair,
    author: 'RoofPro Technical Team',
    excerpt: 'Catching concrete slab cracks and blocked drainage before monsoon rains prevents ceiling plaster collapse and costly structural damage.',
    content: [
      'In Pakistan, the annual monsoon season brings heavy, concentrated downpours that test every square foot of your roof. Because concrete slabs naturally expand and contract in extreme summer temperatures, small hairline fractures can turn into major water leaks once rains arrive.',
      '1. Water Stains and Dampness on Ceilings: Dark moisture patches or peeling ceiling paint inside upper-floor rooms are clear indicators that rainwater is penetrating your concrete slab.',
      '2. Hairline Cracks on the Roof Terrace: Surface cracks may seem minor, but water pools inside them during heavy showers, soaking through the slab and reaching structural reinforcement steel.',
      '3. Blocked Rainwater Downpipes and Parapet Corners: Accumulated dust, fallen leaves, and dried mud frequently block roof drains, causing standing water that accelerates slab leakage.',
      '4. Deteriorated Mortar Around Water Tanks and AC Bases: Concrete plinths holding overhead water tanks and air conditioning outdoor units frequently crack over time, creating prime water entry points.'
    ],
    tips: [
      'Inspect your terrace surface at least 3 weeks before monsoon rains begin.',
      'Ensure rainwater drainage outlets and PVC downpipes are completely clear of debris.',
      'Never ignore recurring ceiling seepage, as it can corrode internal steel reinforcement.'
    ]
  },
  {
    slug: 'best-roof-waterproofing-solutions-for-homes-in-pakistan',
    title: 'Best Roof Waterproofing Solutions for Homes in Pakistan',
    category: 'Waterproofing Guide',
    date: 'March 28, 2026',
    readTime: '6 min read',
    image: IMAGES.install,
    author: 'RoofPro Engineering Desk',
    excerpt: 'A comprehensive comparison of liquid elastomeric acrylic coatings, polymer cementitious compounds, and bitumen membranes for concrete roofs.',
    content: [
      'Choosing the right waterproofing method depends on your roof\'s existing condition, whether it is an accessible terrace, and how much foot traffic it receives.',
      'Elastomeric Acrylic Coatings: Highly popular for residential terraces in Pakistan because they form a seamless, flexible rubber-like membrane that bridges minor hairline cracks while reflecting sunlight.',
      'Polymer-Modified Cementitious Slurries: Excellent for high-moisture zones, water tank plinths, and pre-tiling waterproofing. It bonds tenaciously with concrete surfaces.',
      'Bituminous Membranes: Ideal for heavy-duty commercial slabs and flat roofs. When applied with heat or cold adhesive, it provides a thick impervious barrier against standing water.'
    ],
    tips: [
      'Always insist on thorough surface cleaning and washing before applying chemical waterproofing.',
      'Cracks must be grooved and filled with high-grade polymer crack filler before coating.',
      'Waterproofing works best when combined with adequate rainwater drainage slope.'
    ]
  },
  {
    slug: 'roof-heat-proofing-guide-keep-home-cooler-in-summer',
    title: 'Roof Heat Proofing Guide: How to Keep Your Home Cooler in Summer',
    category: 'Heat Proofing',
    date: 'February 19, 2026',
    readTime: '4 min read',
    image: IMAGES.stormDamage,
    author: 'RoofPro Energy & Cooling Team',
    excerpt: 'How solar-reflective heatproofing coatings reduce indoor temperatures by up to 5°C to 8°C and lower monthly electricity bills.',
    content: [
      'During scorching summer months across Sindh, roof concrete slabs can absorb tremendous amounts of heat, reaching temperatures well over 55°C. This heat radiates downward into upper-floor rooms day and night, forcing air conditioners to work continuously.',
      'How Solar Reflective Coatings Work: Roof heatproofing chemicals contain microscopic ceramic or polymeric reflective particles that reflect up to 85% of solar radiation back into the atmosphere rather than absorbing it.',
      'Dual Benefits: Most high-grade heatproofing solutions also function as an elastomeric water barrier, providing both thermal comfort in hot summers and leak defense during rainy seasons.',
      'Electricity Savings: By lowering indoor ambient temperatures by 5°C to 8°C, your air conditioning units reach set temperatures faster and consume significantly less energy.'
    ],
    tips: [
      'Clean roof surfaces every few months to remove dust and maintain maximum solar reflectivity.',
      'Apply heatproofing coatings in dry, sunny weather for optimal chemical bonding.',
      'Combine roof heatproofing with proper indoor cross-ventilation for maximum cooling effect.'
    ]
  }
];

export const TRUST_INDICATORS = [
  { name: 'Experienced Roofing Team', highlight: 'Skilled Specialists', subtitle: 'Trained & Safety-Focused' },
  { name: 'Quality Materials', highlight: 'Premium Products', subtitle: 'Proven Weather Resistance' },
  { name: 'Safety-Focused Practices', highlight: 'Safe Job Sites', subtitle: 'Strict Field Protocols' },
  { name: 'Professional Site Assessment', highlight: 'Thorough Inspection', subtitle: 'Detailed Problem Diagnosis' },
  { name: 'Transparent Quotations', highlight: 'Itemized Pricing', subtitle: 'No Hidden Charges' },
  { name: 'Workmanship Guarantee', highlight: 'Quality Assured', subtitle: 'Committed to Client Satisfaction' }
];

export const STATS = [
  { value: 'Residential & Commercial', label: 'Property Solutions', desc: 'Serving homes, offices, schools, and factories' },
  { value: 'Experienced Team', label: 'Skilled Roofers', desc: 'Hands-on expertise in roofing & waterproofing' },
  { value: 'Quality-Focused', label: 'Reliable Workmanship', desc: 'Committed to durable materials & clean finishing' },
  { value: 'Emergency Response', label: 'Prompt Support', desc: 'Fast assistance for urgent roof leaks & rain damage' }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Experienced Roofing Team',
    desc: 'Skilled and trained roofing specialists with hands-on expertise in residential, commercial, and industrial roofing systems.',
    tag: 'Skilled & Dedicated'
  },
  {
    title: 'Quality-Grade Materials',
    desc: 'We use high-grade waterproofing chemicals, heat-reflective coatings, and durable roofing materials suitable for Pakistan’s climate.',
    tag: 'Durable Quality'
  },
  {
    title: 'Safety-Focused Work Practices',
    desc: 'Safety harnesses, secure scaffolding, and disciplined jobsite procedures to ensure safety for both workers and property.',
    tag: 'Safety Standards'
  },
  {
    title: 'Workmanship Guarantee',
    desc: 'We stand behind the quality of our repair and waterproofing solutions with reliable workmanship commitments.',
    tag: 'Client Assurance'
  }
];

export const FAQS = [
  {
    q: 'What is the best solution for concrete roof leakage in Pakistan?',
    a: 'For concrete/RCC roofs in Pakistan, the most effective solution is a multi-step process: first, surface cleaning and grooving of cracks; second, applying high-strength polymer crack sealants; and third, coating the entire slab with multi-layer elastomeric waterproofing membranes with proper drainage slope alignment.'
  },
  {
    q: 'How much does roof heatproofing reduce indoor temperatures?',
    a: 'High-quality solar reflective heatproofing coatings reflect up to 80-85% of direct sunlight. In hot Pakistani summers, this typically reduces roof surface temperatures by 15°C to 20°C, translating to a 5°C to 8°C cooler indoor ambient temperature on upper floors.'
  },
  {
    q: 'Do you offer free on-site roof inspections and estimates in Karachi & Sindh?',
    a: 'Yes. We provide free initial on-site inspections for homeowners and businesses in Karachi, Hyderabad, Sukkur, Ghotki, and surrounding areas. Our estimator assesses the roof, identifies leakage or heat issues, and provides an itemized, transparent quotation.'
  },
  {
    q: 'Can you handle industrial factory sheds and warehouse roofs?',
    a: 'Yes, we provide specialized commercial and industrial roofing services including corrugated metal sheet waterproofing, J-bolt sealing, anti-rust coatings, gutter drainage rehabilitation, and heat-reflective coatings for warehouses and factories.'
  },
  {
    q: 'How quickly can your team respond in an emergency roof leakage situation?',
    a: 'We offer emergency response for active roof leaks and post-rain storm damage. In Karachi and major service areas, our technicians can usually be dispatched on the same day or within 24 hours to assess and contain active leaks.'
  }
];
