export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  location: string;
  images: string[];
  featured?: boolean;
}

export const categories = [
  { name: "All", slug: "all" },
  { name: "New Builds", slug: "new-builds" },
  { name: "Extensions", slug: "extensions" },
  { name: "Decking & Outdoor", slug: "decking-outdoor" },
  { name: "Custom Details", slug: "custom-details" },
  { name: "Commercial", slug: "commercial" },
];

export const projects: Project[] = [
  // === NEW BUILDS ===
  {
    id: "modern-timber-residence",
    title: "Modern Timber & Render Residence",
    category: "New Builds",
    categorySlug: "new-builds",
    description: "A striking two-storey home combining warm natural timber cladding with dark render and concrete. Floor-to-ceiling glazing captures light across both levels.",
    location: "Geelong",
    images: [
      "/images/projects/new-builds/modern-timber-dark-render-01.jpg",
      "/images/projects/new-builds/modern-sunset-timber-cladding-01.jpg",
    ],
    featured: true,
  },
  {
    id: "coastal-modern-build",
    title: "Coastal Modern Home",
    category: "New Builds",
    categorySlug: "new-builds",
    description: "Contemporary coastal home with timber garage door, glass balustrade upper balcony, and clean rendered finish. Designed to maximise natural light and ocean views.",
    location: "Barwon Heads",
    images: [
      "/images/projects/new-builds/coastal-modern-timber-garage-01.jpg",
    ],
  },
  {
    id: "hamptons-cottage",
    title: "Coastal Hamptons Cottage",
    category: "New Builds",
    categorySlug: "new-builds",
    description: "Classic Hamptons-style weatherboard home with porthole windows, barn doors on black hardware, and sun-drenched living spaces. Coastal charm with modern craftsmanship.",
    location: "Bellarine Peninsula",
    images: [
      "/images/projects/new-builds/hamptons-cottage-blue-01.jpg",
      "/images/projects/new-builds/hamptons-barn-door-porthole-01.jpg",
      "/images/projects/new-builds/hamptons-living-sunlit-01.jpg",
    ],
    featured: true,
  },
  {
    id: "two-storey-weatherboard",
    title: "Two-Storey Weatherboard & Stone",
    category: "New Builds",
    categorySlug: "new-builds",
    description: "A distinctive two-storey home featuring weatherboard cladding with stone feature columns, large windows, and a contemporary roofline that stands out in the streetscape.",
    location: "Armstrong Creek",
    images: [
      "/images/projects/new-builds/two-storey-weatherboard-stone-01.jpg",
    ],
  },
  {
    id: "modern-concrete-timber",
    title: "Modern Concrete & Timber Batten",
    category: "New Builds",
    categorySlug: "new-builds",
    description: "Bold architectural design combining polished concrete with full-height timber batten cladding. A modern statement build with clean geometric lines.",
    location: "Geelong",
    images: [
      "/images/projects/new-builds/modern-concrete-timber-batten-01.jpg",
    ],
  },
  {
    id: "balcony-cladding-build",
    title: "Contemporary Balcony Residence",
    category: "New Builds",
    categorySlug: "new-builds",
    description: "Two-storey build with expansive glass balcony, mixed cladding materials, and steel canopy structure. Clean modern design with indoor-outdoor flow on the upper level.",
    location: "Surf Coast",
    images: [
      "/images/projects/new-builds/two-storey-balcony-cladding-01.jpg",
    ],
  },

  // === EXTENSIONS ===
  {
    id: "second-storey-extension",
    title: "Second Storey Addition",
    category: "Extensions",
    categorySlug: "extensions",
    description: "Complete second storey addition to an existing home, including new roofline, cladding integration, and structural steel beam work. Doubling the living space without moving.",
    location: "Geelong West",
    images: [
      "/images/projects/extensions/second-storey-scaffold-01.jpg",
      "/images/projects/extensions/second-storey-framing-01.jpg",
    ],
  },
  {
    id: "roof-extension-reno",
    title: "Roof Extension & Renovation",
    category: "Extensions",
    categorySlug: "extensions",
    description: "Major roof extension with dormer addition and full interior renovation. Steel and timber framing to open up the existing floor plan and add a mezzanine level.",
    location: "Belmont",
    images: [
      "/images/projects/extensions/roof-dormer-install-01.jpg",
      "/images/projects/extensions/interior-scissor-lift-01.jpg",
      "/images/projects/extensions/roof-framing-residential-01.jpg",
    ],
  },
  {
    id: "residential-roof-reframe",
    title: "Residential Roof Reframe",
    category: "Extensions",
    categorySlug: "extensions",
    description: "Complete roof reframe on an established home, replacing aging structure with new engineered timber trusses and preparing for modern roofing and insulation.",
    location: "Highton",
    images: [
      "/images/projects/extensions/roof-framing-panorama-01.jpg",
    ],
  },

  // === DECKING & OUTDOOR ===
  {
    id: "louvre-pergola-deck",
    title: "Elevated Deck & Louvre Pergola",
    category: "Decking & Outdoor",
    categorySlug: "decking-outdoor",
    description: "Custom elevated composite deck with stone paving steps and automated louvre pergola system. Year-round outdoor entertaining with adjustable shade and weather protection.",
    location: "Armstrong Creek",
    images: [
      "/images/projects/decking-outdoor/deck-stone-complete-01.jpg",
      "/images/projects/decking-outdoor/deck-stone-paving-02.jpg",
      "/images/projects/decking-outdoor/louvre-pergola-install-02.jpg",
      "/images/projects/decking-outdoor/deck-composite-steps-01.jpg",
    ],
    featured: true,
  },
  {
    id: "covered-entertaining-area",
    title: "Covered Entertaining Deck",
    category: "Decking & Outdoor",
    categorySlug: "decking-outdoor",
    description: "Full-length covered deck with polycarbonate roofing, wire balustrade, and oiled hardwood flooring. Seamless connection between indoor living and outdoor entertaining.",
    location: "Leopold",
    images: [
      "/images/projects/decking-outdoor/covered-deck-twilight-01.jpg",
      "/images/projects/decking-outdoor/covered-deck-polycarbonate-01.jpg",
      "/images/projects/decking-outdoor/covered-deck-exterior-01.jpg",
      "/images/projects/decking-outdoor/covered-deck-interior-01.jpg",
    ],
  },
  {
    id: "rural-composite-deck",
    title: "Rural Composite Deck",
    category: "Decking & Outdoor",
    categorySlug: "decking-outdoor",
    description: "Expansive composite deck running the full length of a rural home, offering uninterrupted views across the paddocks. Low-maintenance materials built to handle the elements.",
    location: "Lara",
    images: [
      "/images/projects/decking-outdoor/composite-deck-rural-01.jpg",
    ],
  },
  {
    id: "steel-pergola-firepit",
    title: "Steel Pergola & Fire Pit Area",
    category: "Decking & Outdoor",
    categorySlug: "decking-outdoor",
    description: "Modern steel louvre pergola over a dedicated fire pit entertaining zone. The perfect outdoor room for year-round socialising.",
    location: "Ocean Grove",
    images: [
      "/images/projects/decking-outdoor/fire-pit-entertaining-01.jpg",
      "/images/projects/decking-outdoor/steel-pergola-01.jpg",
      "/images/projects/decking-outdoor/louvre-pergola-01.jpg",
    ],
  },
  {
    id: "white-deck-planter",
    title: "Hamptons Deck with Built-in Planters",
    category: "Decking & Outdoor",
    categorySlug: "decking-outdoor",
    description: "Warm timber deck with white-painted balustrade and built-in planter boxes. Classic coastal style that extends the living area outdoors.",
    location: "Drysdale",
    images: [
      "/images/projects/decking-outdoor/white-deck-planter-01.jpg",
      "/images/projects/decking-outdoor/white-deck-planter-02.jpg",
    ],
  },
  {
    id: "grey-cladding-deck",
    title: "Modern Grey Deck & Verandah",
    category: "Decking & Outdoor",
    categorySlug: "decking-outdoor",
    description: "Timber deck paired with grey weatherboard cladding and covered verandah. Clean, modern finish with wire balustrade and polycarbonate roofing.",
    location: "Grovedale",
    images: [
      "/images/projects/decking-outdoor/deck-grey-cladding-01.jpg",
      "/images/projects/decking-outdoor/covered-porch-steps-01.jpg",
      "/images/projects/decking-outdoor/covered-deck-side-01.jpg",
    ],
  },

  // === CUSTOM DETAILS ===
  {
    id: "timber-vanity-bathrooms",
    title: "Custom Timber Vanity Bathrooms",
    category: "Custom Details",
    categorySlug: "custom-details",
    description: "Bespoke floating timber vanities with vessel basins, dark panelled feature walls, and black tapware. Two stunning bathroom designs showcasing natural timber craftsmanship.",
    location: "Geelong",
    images: [
      "/images/projects/custom-details/bathroom-timber-vanity-herringbone-01.jpg",
      "/images/projects/custom-details/bathroom-timber-vanity-round-mirrors-01.jpg",
    ],
    featured: true,
  },
  {
    id: "glass-staircase-build",
    title: "Glass Balustrade Staircases",
    category: "Custom Details",
    categorySlug: "custom-details",
    description: "Floating timber staircases with frameless glass balustrades, stainless steel handrails, and engineered oak treads. Statement architectural features that connect levels with elegance.",
    location: "Geelong",
    images: [
      "/images/projects/custom-details/glass-staircase-timber-treads-01.jpg",
      "/images/projects/new-builds/glass-staircase-polished-floor-01.jpg",
    ],
  },
  {
    id: "timber-entry-doors",
    title: "Custom Timber Entry Doors",
    category: "Custom Details",
    categorySlug: "custom-details",
    description: "Handcrafted timber entry doors including a grand double-height foyer with pendant lighting and a vertical-batten door with smart lock. First impressions that set the tone.",
    location: "Various",
    images: [
      "/images/projects/custom-details/grand-entry-double-doors-01.jpg",
      "/images/projects/custom-details/timber-entry-door-frosted-01.jpg",
      "/images/projects/custom-details/brick-timber-glass-entry-01.jpg",
    ],
  },
  {
    id: "timber-batten-features",
    title: "Timber Batten Feature Work",
    category: "Custom Details",
    categorySlug: "custom-details",
    description: "Interior timber batten room dividers, ceiling features, and custom sliding doors. The warm texture of natural timber transforming interior spaces.",
    location: "Geelong",
    images: [
      "/images/projects/custom-details/timber-batten-room-divider-01.jpg",
      "/images/projects/custom-details/timber-sliding-door-detail-01.jpg",
      "/images/projects/custom-details/timber-soffit-cladding-01.jpg",
    ],
  },
  {
    id: "geometric-timber-art",
    title: "Geometric Timber Art Piece",
    category: "Custom Details",
    categorySlug: "custom-details",
    description: "A one-of-a-kind geometric timber art installation crafted from multiple species of reclaimed hardwood. Where building meets art.",
    location: "Geelong",
    images: [
      "/images/projects/custom-details/geometric-timber-art-01.jpg",
    ],
  },

  // === COMMERCIAL ===
  {
    id: "dark-commercial-building",
    title: "Modern Commercial Facility",
    category: "Commercial",
    categorySlug: "commercial",
    description: "Striking dark-cladded commercial building with vertical louvre screening and landscaped surrounds. Bold modern architecture for a community facility.",
    location: "Armstrong Creek",
    images: [
      "/images/projects/commercial/dark-cladding-louvres-01.jpg",
      "/images/projects/commercial/dark-commercial-building-01.jpg",
    ],
  },
  {
    id: "indoor-pool-facility",
    title: "Indoor Pool & Aquatic Centre",
    category: "Commercial",
    categorySlug: "commercial",
    description: "Commercial indoor pool facility featuring timber batten ceiling treatment, clerestory windows, and decorative breeze block feature wall. Precision building at scale.",
    location: "Geelong Region",
    images: [
      "/images/projects/commercial/indoor-pool-timber-ceiling-01.jpg",
    ],
    featured: true,
  },
  {
    id: "steel-frame-commercial",
    title: "Steel Frame Commercial Build",
    category: "Commercial",
    categorySlug: "commercial",
    description: "Large-scale steel and timber frame commercial construction from slab to roof. Crane lifts, scissor lifts, and structural engineering on an impressive scale.",
    location: "Geelong Region",
    images: [
      "/images/projects/commercial/steel-frame-roof-01.jpg",
      "/images/projects/commercial/steel-frame-interior-01.jpg",
      "/images/projects/commercial/steel-frame-crane-01.jpg",
      "/images/projects/commercial/commercial-frame-exterior-01.jpg",
    ],
  },
  {
    id: "mailbox-shelter-structure",
    title: "Community Mailbox Shelter",
    category: "Commercial",
    categorySlug: "commercial",
    description: "Custom-designed mailbox shelter with timber batten canopy, stone feature wall, and integrated letterbox units. Functional community infrastructure with architectural flair.",
    location: "Armstrong Creek",
    images: [
      "/images/projects/commercial/mailbox-shelter-timber-battens-01.jpg",
    ],
  },
];
