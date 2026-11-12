// Content data: services, projects, testimonials, process, FAQs.
// All imagery references local SVG placeholders in /public/images.

export const services = [
  {
    slug: 'tile-installation',
    title: 'Tile Installation',
    short: 'Flawless walls and floors with dead-level layouts and razor-tight grout lines.',
    description:
      'Precision tile installation for floors, walls and feature surfaces. We dry-lay every job, balance cuts, and finish with consistent grout joints for a result that looks designed, not just installed.',
    image: '/media/photos/patterned-floor-bath.jpg',
    video: '/media/videos/tile-installation-feature.mp4',
    poster: '/media/posters/tile-installation-feature.jpg',
    icon: 'grid',
    features: ['Floor & wall tile', 'Mosaic & feature walls', 'Natural stone', 'Pattern & herringbone layouts'],
  },
  {
    slug: 'bathroom-renovations',
    title: 'Bathroom Renovations',
    short: 'Full bathroom transformations managed end to end with one accountable crew.',
    description:
      'From demolition to the final silicone bead, we handle complete bathroom renovations — waterproofing, plumbing coordination, tile, glass and finishing — delivering a spa-grade space built to last.',
    image: '/media/photos/backlit-mirror-ensuite.jpg',
    icon: 'bath',
    features: ['Full demo & rebuild', 'Plumbing coordination', 'Vanity & fixtures', 'Spa-grade finishes'],
  },
  {
    slug: 'porcelain-slab-installation',
    title: 'Porcelain Slab Installation',
    short: 'Large-format porcelain slabs for seamless walls, floors and countertops.',
    description:
      'Specialists in oversized porcelain slab installation — book-matched feature walls, fireplace surrounds, shower panels and countertops with minimal grout lines and a monolithic, luxury finish.',
    image: '/media/photos/book-matched-slab-wall.jpg',
    icon: 'slab',
    features: ['Book-matched walls', 'Slab countertops', 'Fireplace surrounds', 'Seamless shower panels'],
  },
  {
    slug: 'heated-floors',
    title: 'Heated Floors',
    short: 'Radiant in-floor heating engineered for even, energy-smart warmth.',
    description:
      'Electric radiant heating systems installed under tile and stone for consistent comfort. Properly zoned, tested and programmed so every morning starts on a warm floor.',
    image: '/media/photos/heated-floors-schluter.jpg',
    icon: 'heat',
    features: ['Electric radiant systems', 'Programmable thermostats', 'Zoned comfort', 'Energy efficient'],
  },
  {
    slug: 'waterproofing-systems',
    title: 'Waterproofing Systems',
    short: 'Certified waterproofing that protects your investment for decades.',
    description:
      'We build wet areas on proven waterproofing assemblies — Schluter and equivalent systems — with bonded membranes, sloped pans and sealed penetrations engineered to keep water exactly where it belongs.',
    image: '/media/photos/shower-pan-waterproofing.jpg',
    video: '/media/videos/waterproofing-feature.mp4',
    poster: '/media/posters/waterproofing-feature.jpg',
    icon: 'shield',
    features: ['Bonded membranes', 'Sloped shower pans', 'Curbless wet rooms', 'Leak-tested assemblies'],
  },
  {
    slug: 'custom-showers',
    title: 'Custom Showers',
    short: 'Curbless, niche-detailed showers built around how you actually live.',
    description:
      'Bespoke shower builds — linear drains, curbless entries, integrated niches, benches and frameless glass — tiled with millimetre precision for a clean, contemporary statement.',
    image: '/media/photos/multi-head-spa-shower.jpg',
    video: '/media/videos/custom-shower-feature.mp4',
    poster: '/media/posters/custom-shower-feature.jpg',
    icon: 'shower',
    features: ['Curbless entries', 'Linear drains', 'Integrated niches & benches', 'Frameless glass'],
  },
  {
    slug: 'backsplashes',
    title: 'Backsplashes',
    short: 'Kitchen and bar backsplashes that become the centrepiece of the room.',
    description:
      'Detailed backsplash installation — from classic subway to full-height slab and intricate mosaic — with crisp edges, tidy outlet cuts and clean transitions to cabinetry and counters.',
    image: '/media/photos/marble-slab-backsplash.jpg',
    icon: 'tile',
    features: ['Subway & mosaic', 'Full-height slab', 'Clean outlet cuts', 'Cabinet transitions'],
  },
  {
    slug: 'large-format-tile',
    title: 'Large Format Tile Installation',
    short: 'Big-tile expertise with lippage-free, perfectly flat results.',
    description:
      'Large-format tile demands flat substrates and the right tools. We use leveling systems and back-buttering to deliver expansive, lippage-free surfaces with minimal grout lines.',
    image: '/media/photos/large-format-shower.jpg',
    icon: 'expand',
    features: ['Lippage-free finish', 'Substrate flattening', 'Leveling systems', 'Minimal grout lines'],
  },
];

// Image used in the About story section.
export const craftImage = '/media/photos/about-luxury-marble-shower.jpg';

export const categories = [
  { slug: 'all', label: 'All Work' },
  { slug: 'bathrooms', label: 'Bathrooms' },
  { slug: 'custom-homes', label: 'Custom Homes' },
  { slug: 'porcelain-slabs', label: 'Porcelain Slabs' },
  { slug: 'floors', label: 'Floors' },
  { slug: 'showers', label: 'Showers' },
];

// Real Diamond Tiling projects. Photography lives in /public/media/photos.
// `featured` projects are surfaced in the editorial showcase on the home page.
export const projects = [
  {
    slug: 'marble-bath-reveal',
    title: 'Marble Bath Reveal',
    category: 'bathrooms',
    location: 'Toronto, ON',
    image: '/media/posters/marble-bath-reveal.jpg',
    blurb: 'A full bathroom walkthrough — warm natural materials, cove lighting and a seamless tile finish throughout.',
  },
  {
    slug: 'travertine-porcelain-bathroom',
    title: 'Travertine & Porcelain Bathroom',
    category: 'bathrooms',
    location: 'Toronto, ON',
    image: '/media/photos/travertine-porcelain-shower.jpg',
    // Mini-gallery shown in the Featured Projects showcase. First is the lead image.
    gallery: [
      '/media/photos/travertine-porcelain-shower.jpg',
      '/media/photos/travertine-porcelain-vanity.jpg',
      '/media/photos/travertine-porcelain-niche.jpg',
    ],
    blurb: 'A serene spa bathroom pairing grey porcelain marble with warm travertine-look walls — a frameless walk-in shower, floating vanity and recessed niche shelving.',
    featured: true,
  },
  {
    slug: 'backlit-slab-feature',
    title: 'Backlit Book-Matched Slab Hallway',
    category: 'porcelain-slabs',
    location: 'Forest Hill, Toronto',
    image: '/media/photos/backlit-slab-feature.jpg',
    blurb: 'A dramatic, backlit book-matched porcelain slab wall turning a hallway into a gallery moment.',
    featured: true,
  },
  {
    slug: 'yorkville-luxury-ensuite',
    title: 'Yorkville Luxury Ensuite',
    category: 'bathrooms',
    location: 'Yorkville, Toronto',
    image: '/media/photos/yorkville-ensuite-vanity.jpg',
    // Mini-gallery shown in the Featured Projects showcase. First is the lead image.
    gallery: [
      '/media/photos/yorkville-ensuite-vanity.jpg',
      '/media/photos/yorkville-ensuite-shower.jpg',
    ],
    blurb: 'Bold black porcelain, custom walk-in shower, floating vanity, and hotel-inspired lighting designed for modern luxury living.',
    featured: true,
  },
  {
    slug: 'porcelain-slab-curbless-shower',
    title: 'Porcelain Slab Curbless Shower',
    category: 'bathrooms',
    location: 'Toronto, ON',
    image: '/media/photos/porcelain-slab-curbless-shower.jpg',
    blurb: 'A modern bathroom featuring large-format porcelain slabs, a curbless walk-in shower, floating tub, and seamless minimalist design.',
    featured: true,
  },
  {
    slug: 'multi-head-spa-shower',
    title: 'Multi-Head Spa Shower',
    category: 'showers',
    location: 'Bridle Path, Toronto',
    image: '/media/photos/multi-head-spa-shower.jpg',
    blurb: 'A walk-in spa shower with multiple heads, full marble-look walls and a concealed linear drain.',
    featured: true,
  },
  {
    slug: 'slab-shower-marble',
    title: 'Large-Format Marble Slab Shower',
    category: 'porcelain-slabs',
    location: 'Rosedale, Toronto',
    image: '/media/photos/slab-shower-marble.jpg',
    blurb: 'Floor-to-ceiling large-format slabs with frameless glass for a seamless, monolithic finish.',
    featured: true,
  },
  {
    slug: 'emerald-glass-feature',
    title: 'Emerald Glass Feature Wall',
    category: 'custom-homes',
    location: 'Vaughan, ON',
    image: '/media/photos/emerald-glass-feature.jpg',
    blurb: 'A cascading emerald glass-mosaic feature wall — the centrepiece of a custom spa bath.',
    featured: true,
  },
  {
    slug: 'carrara-walk-in-shower',
    title: 'Carrara Walk-In Shower',
    category: 'showers',
    location: 'Oakville, ON',
    image: '/media/photos/carrara-walk-in-shower.jpg',
    blurb: 'A bright Carrara-look walk-in shower with frameless glass and a recessed niche.',
    featured: true,
  },
  {
    slug: 'book-matched-slab-wall',
    title: 'Book-Matched Porcelain Slab Wall',
    category: 'porcelain-slabs',
    location: 'King West, Toronto',
    image: '/media/photos/book-matched-slab-wall.jpg',
    blurb: 'Mirror-matched veining flows across oversized porcelain panels with minimal grout lines.',
  },
  {
    slug: 'marble-walk-in-shower',
    title: 'Marble Walk-In Shower',
    category: 'showers',
    location: 'Lawrence Park, Toronto',
    image: '/media/photos/marble-walk-in-shower.jpg',
    blurb: 'A timeless marble-look walk-in with a contrasting dark floor and crisp glass entry.',
  },
  {
    slug: 'chevron-marble-ensuite',
    title: 'Chevron Marble Ensuite',
    category: 'bathrooms',
    location: 'Leaside, Toronto',
    image: '/media/photos/chevron-marble-ensuite.jpg',
    blurb: 'Hand-laid chevron detailing and a recessed niche anchor this refined ensuite.',
  },
  {
    slug: 'frameless-glass-shower',
    title: 'Frameless Glass Marble Shower',
    category: 'showers',
    location: 'Etobicoke, ON',
    image: '/media/photos/frameless-glass-shower.jpg',
    blurb: 'Floor-to-ceiling marble-look walls paired with a clean frameless glass enclosure.',
  },
  {
    slug: 'slab-bench-shower',
    title: 'Porcelain Slab Bench Shower',
    category: 'porcelain-slabs',
    location: 'North York, Toronto',
    image: '/media/photos/slab-bench-shower.jpg',
    blurb: 'Large-format slabs wrap the walls and integrated bench for a low-maintenance, luxury shower.',
  },
  {
    slug: 'large-format-shower',
    title: 'Large-Format Grey Shower',
    category: 'showers',
    location: 'Mississauga, ON',
    image: '/media/photos/large-format-shower.jpg',
    blurb: 'Warm grey large-format tile with niche shelving and a contemporary, lippage-free finish.',
  },
  {
    slug: 'white-marble-bath',
    title: 'White Marble Bathroom',
    category: 'bathrooms',
    location: 'The Beaches, Toronto',
    image: '/media/photos/white-marble-bath.jpg',
    blurb: 'A light-filled white marble bath with a window niche and full-height tile.',
  },
  {
    slug: 'marble-vanity-ensuite',
    title: 'Marble Vanity Ensuite',
    category: 'bathrooms',
    location: 'Richmond Hill, ON',
    image: '/media/photos/marble-vanity-ensuite.jpg',
    blurb: 'A sophisticated ensuite with large-format marble walls and a floating vanity.',
  },
  {
    slug: 'mosaic-feature-shower',
    title: 'Mosaic Feature Shower',
    category: 'showers',
    location: 'Scarborough, Toronto',
    image: '/media/photos/mosaic-feature-shower.jpg',
    blurb: 'A patterned mosaic feature band brings texture and warmth to a full tile surround.',
  },
  {
    slug: 'stone-fireplace-feature',
    title: 'Stone Fireplace Feature',
    category: 'custom-homes',
    location: 'Markham, ON',
    image: '/media/photos/stone-fireplace-feature.jpg',
    blurb: 'A floor-to-ceiling stone fireplace surround with integrated shelving in a custom home.',
  },
  {
    slug: 'slab-fireplace-feature',
    title: 'Porcelain Slab Fireplace',
    category: 'custom-homes',
    location: 'Aurora, ON',
    image: '/media/photos/slab-fireplace-feature.jpg',
    blurb: 'A sleek large-format slab fireplace wall with a built-in bench in an open-concept living space.',
  },
  {
    slug: 'cedar-steam-room',
    title: 'Cedar Steam Room',
    category: 'custom-homes',
    location: 'King City, ON',
    image: '/media/photos/cedar-steam-room.jpg',
    blurb: 'A spa-grade cedar steam room with a tiled bench and softly lit niche.',
  },
  {
    slug: 'glass-marble-shower',
    title: 'Glass-Enclosed Marble Shower',
    category: 'showers',
    location: 'Davisville, Toronto',
    image: '/media/photos/glass-marble-shower.jpg',
    blurb: 'A compact, light marble shower with a sharp glass enclosure and tidy fixtures.',
  },
  {
    slug: 'modern-marble-shower',
    title: 'Modern Marble Shower',
    category: 'showers',
    location: 'Thornhill, ON',
    image: '/media/photos/modern-marble-shower.jpg',
    blurb: 'A clean, contemporary marble-look shower with frameless glass and minimal lines.',
  },
  {
    slug: 'floating-vanity-bath',
    title: 'Modern Floating-Vanity Bath',
    category: 'bathrooms',
    location: 'Liberty Village, Toronto',
    image: '/media/photos/floating-vanity-bath.jpg',
    blurb: 'A modern bath with a floating vanity, round mirror and full-height tiled walls.',
  },
  {
    slug: 'grey-marble-bath',
    title: 'Grey Marble Bathroom',
    category: 'bathrooms',
    location: 'Don Mills, Toronto',
    image: '/media/photos/grey-marble-bath.jpg',
    blurb: 'Soft grey marble-look tile, a floating vanity and a bright window for an airy feel.',
  },
  {
    slug: 'contemporary-vanity-bath',
    title: 'Contemporary Vanity Bath',
    category: 'bathrooms',
    location: 'Burlington, ON',
    image: '/media/photos/contemporary-vanity-bath.jpg',
    blurb: 'A contemporary bath with large-format walls and a streamlined vanity and mirror.',
  },
  {
    slug: 'tub-glass-shower',
    title: 'Soaker Tub & Glass Shower',
    category: 'bathrooms',
    location: 'Unionville, Markham',
    image: '/media/photos/tub-glass-shower.jpg',
    blurb: 'A freestanding-style tub paired with a glass shower in a fully tiled marble-look surround.',
  },
  {
    slug: 'niche-detail-shower',
    title: 'Niche-Detail Marble Shower',
    category: 'showers',
    location: 'High Park, Toronto',
    image: '/media/photos/niche-detail-shower.jpg',
    blurb: 'A marble-look shower with a precisely aligned recessed niche and window detail.',
  },
  {
    slug: 'textured-feature-wall',
    title: 'Textured Slab Feature Wall',
    category: 'porcelain-slabs',
    location: 'Vaughan, ON',
    image: '/media/photos/textured-feature-wall.jpg',
    blurb: 'A vertically textured large-format feature wall adding depth to a modern space.',
  },
  {
    slug: 'minimal-slab-niche',
    title: 'Minimalist Slab Niche',
    category: 'porcelain-slabs',
    location: 'Yorkville, Toronto',
    image: '/media/photos/minimal-slab-niche.jpg',
    blurb: 'A clean recessed niche set into a seamless large-format slab wall.',
  },
  {
    slug: 'large-format-floor',
    title: 'Large-Format Porcelain Floor',
    category: 'floors',
    location: 'Mississauga, ON',
    image: '/media/photos/large-format-floor.jpg',
    blurb: 'Expansive large-format porcelain flooring laid dead-flat with minimal grout lines.',
  },
  {
    slug: 'porcelain-floor-hall',
    title: 'Porcelain Floor Hallway',
    category: 'floors',
    location: 'Etobicoke, ON',
    image: '/media/photos/porcelain-floor-hall.jpg',
    blurb: 'A crisp porcelain floor flowing through a hallway into a bright living space.',
  },
  {
    slug: 'hexagon-mosaic-floor',
    title: 'Hexagon Mosaic Floor',
    category: 'floors',
    location: 'Riverdale, Toronto',
    image: '/media/photos/hexagon-mosaic-floor.jpg',
    blurb: 'A detailed hexagon mosaic floor adding a designer touch underfoot.',
  },
  {
    slug: 'patterned-floor-bath',
    title: 'Patterned Tile Floor Bath',
    category: 'floors',
    location: 'Cabbagetown, Toronto',
    image: '/media/photos/patterned-floor-bath.jpg',
    blurb: 'A patterned tile floor anchors a characterful bathroom with a blue ceiling detail.',
  },
  {
    slug: 'marble-slab-backsplash',
    title: 'Marble Slab Kitchen Backsplash',
    category: 'custom-homes',
    location: 'Forest Hill, Toronto',
    image: '/media/photos/marble-slab-backsplash.jpg',
    blurb: 'A full-height marble slab backsplash behind the range for a seamless, high-end kitchen.',
  },
  {
    slug: 'skylit-subway-shower',
    title: 'Skylit Subway-Tile Shower',
    category: 'showers',
    location: 'Toronto, ON',
    image: '/media/photos/skylit-subway-shower.jpg',
    blurb: 'A bright walk-in shower in classic white subway tile, crowned by a skylight and an arabesque mosaic feature panel.',
  },
  {
    slug: 'subway-marble-wet-room',
    title: 'Subway & Marble Mosaic Wet Room',
    category: 'showers',
    location: 'Toronto, ON',
    image: '/media/photos/subway-marble-wet-room.jpg',
    blurb: 'A curbless wet room blending white subway walls, an arabesque feature strip and a marble mosaic floor.',
  },
  {
    slug: 'grid-tile-shower-pan',
    title: 'Grid-Tile Curbless Shower Pan',
    category: 'showers',
    location: 'Toronto, ON',
    image: '/media/photos/grid-tile-shower-pan.jpg',
    blurb: 'A crisp grid-tile shower with a precisely sloped, fully waterproofed curbless pan ready for glass.',
  },
  {
    slug: 'marble-tub-herringbone',
    title: 'Marble Tub Surround & Herringbone Floor',
    category: 'bathrooms',
    location: 'Toronto, ON',
    image: '/media/photos/marble-tub-herringbone.jpg',
    blurb: 'A statuario marble-look tub surround with a built-in niche, paired with a warm herringbone wood-look floor.',
  },
  {
    slug: 'sage-vanity-powder-room',
    title: 'Sage Vanity Powder Room',
    category: 'bathrooms',
    location: 'Toronto, ON',
    image: '/media/photos/sage-vanity-powder-room.jpg',
    blurb: 'A serene powder room with stacked vertical tile, a sage floating vanity and a soft oval mirror.',
  },
  {
    slug: 'black-slate-fireplace',
    title: 'Black Slate Fireplace Surround',
    category: 'custom-homes',
    location: 'Toronto, ON',
    image: '/media/photos/black-slate-fireplace.jpg',
    blurb: 'A floor-to-ceiling black slate-look porcelain fireplace surround anchoring an open-concept kitchen and living space.',
  },
  {
    slug: 'lakeside-black-stone-spa',
    title: 'Lakeside Black-Stone Cold Plunge',
    category: 'custom-homes',
    location: 'Toronto, ON',
    image: '/media/photos/lakeside-black-stone-spa.jpg',
    blurb: 'A sunken black-stone cold plunge and bluestone terrace built into a lakefront entertaining space.',
  },
  {
    slug: 'nordic-spa-lounge',
    title: 'Nordic Spa Lounge',
    category: 'custom-homes',
    location: 'Greater Toronto Area',
    image: '/media/photos/nordic-spa-lounge.jpg',
    blurb: 'A large-format porcelain spa lounge with cedar saunas, barrel features and a relaxation terrace.',
  },
  {
    slug: 'cedar-infrared-sauna-suite',
    title: 'Cedar & Infrared Sauna Suite',
    category: 'custom-homes',
    location: 'Greater Toronto Area',
    image: '/media/photos/cedar-infrared-sauna-suite.jpg',
    blurb: 'A wellness suite pairing a stone feature wall, cedar sauna and glowing infrared cabin over a porcelain tile floor.',
  },
];

// Real project videos. Each has a poster frame in /public/media/posters.
// `kind`: 'reveal' = finished walkthrough, 'process' = installation/build footage.
export const videos = [
  {
    slug: 'backsplash-installation',
    title: 'Vanity Backsplash Installation',
    category: 'bathrooms',
    kind: 'process',
    src: '/media/videos/backsplash-installation.mp4',
    poster: '/media/posters/backsplash-installation.jpg',
  },
  {
    slug: 'marble-bath-reveal',
    title: 'Marble Bath Reveal',
    category: 'bathrooms',
    kind: 'reveal',
    src: '/media/videos/marble-bath-reveal.mp4',
    poster: '/media/posters/marble-bath-reveal.jpg',
  },
  {
    slug: 'slab-hallway-reveal',
    title: 'Slab Hallway Reveal',
    category: 'porcelain-slabs',
    kind: 'reveal',
    src: '/media/videos/slab-hallway-reveal.mp4',
    poster: '/media/posters/slab-hallway-reveal.jpg',
  },
  {
    slug: 'large-format-reveal',
    title: 'Large-Format Reveal',
    category: 'porcelain-slabs',
    kind: 'reveal',
    src: '/media/videos/large-format-reveal.mp4',
    poster: '/media/posters/large-format-reveal.jpg',
  },
  {
    slug: 'bathroom-finish',
    title: 'Finished Bathroom Tour',
    category: 'bathrooms',
    kind: 'reveal',
    src: '/media/videos/bathroom-finish.mp4',
    poster: '/media/posters/bathroom-finish.jpg',
  },
  {
    slug: 'project-tour',
    title: 'Project Walkthrough',
    category: 'bathrooms',
    kind: 'reveal',
    src: '/media/videos/project-tour.mp4',
    poster: '/media/posters/project-tour.jpg',
  },
  {
    slug: 'shower-detail',
    title: 'Custom Shower Detail',
    category: 'showers',
    kind: 'reveal',
    src: '/media/videos/shower-detail.mp4',
    poster: '/media/posters/shower-detail.jpg',
  },
  {
    slug: 'tile-installation-process',
    title: 'Tile Installation in Progress',
    category: 'floors',
    kind: 'process',
    src: '/media/videos/tile-installation-process.mp4',
    poster: '/media/posters/tile-installation-process.jpg',
  },
  {
    slug: 'heated-floor-system',
    title: 'Heated Floor System',
    category: 'floors',
    kind: 'process',
    src: '/media/videos/heated-floor-system.mp4',
    poster: '/media/posters/heated-floor-system.jpg',
  },
  {
    slug: 'floor-installation',
    title: 'Floor Installation',
    category: 'floors',
    kind: 'process',
    src: '/media/videos/floor-installation.mp4',
    poster: '/media/posters/floor-installation.jpg',
  },
  {
    slug: 'craftsmanship-closeup',
    title: 'Craftsmanship Close-Up',
    category: 'showers',
    kind: 'process',
    src: '/media/videos/craftsmanship-closeup.mp4',
    poster: '/media/posters/craftsmanship-closeup.jpg',
  },
  {
    slug: 'bathroom-build-out',
    title: 'Bathroom Build-Out',
    category: 'bathrooms',
    kind: 'process',
    src: '/media/videos/bathroom-build-out.mp4',
    poster: '/media/posters/bathroom-build-out.jpg',
  },
];

// Hero background video options. The first is used by default — swap the order to change it.
export const heroVideos = [
  { slug: 'marble-bath-reveal', src: '/media/videos/marble-bath-reveal.mp4', poster: '/media/posters/marble-bath-reveal.jpg' },
  { slug: 'large-format-reveal', src: '/media/videos/large-format-reveal.mp4', poster: '/media/posters/large-format-reveal.jpg' },
  { slug: 'slab-hallway-reveal', src: '/media/videos/slab-hallway-reveal.mp4', poster: '/media/posters/slab-hallway-reveal.jpg' },
];

// Before / After highlights. NOTE: these pair real "in-progress" and "finished"
// Diamond Tiling photos to illustrate the transformation — swap in true same-project
// pairs as they become available.
export const transformations = [
  {
    title: 'Shower Refresh',
    category: 'Custom Showers',
    before: '/media/photos/curbless-shower-before.jpg',
    after: '/media/photos/curbless-shower-after-marble.jpg',
    caption: 'From a dated subway-tile shower to a finished large-format marble shower.',
  },
  {
    title: 'From Framing to Finish',
    category: 'Custom Shower',
    before: '/media/photos/framing-to-finish-before.jpg',
    after: '/media/photos/framing-to-finish-after.jpg',
    caption: 'Complete shower build featuring waterproofing, large-format porcelain tile, recessed niche, and precision installation.',
  },
];

export const whyChooseUs = [
  {
    title: 'Master Craftsmanship',
    description:
      'Every layout is dry-fit and balanced before a single tile is set. The result is dead-level surfaces and grout lines you could measure with a caliper.',
    icon: 'diamond',
  },
  {
    title: 'Certified Waterproofing',
    description:
      'We build wet areas on proven, fully-bonded systems and leak-test before tiling — protecting your home for decades, not seasons.',
    icon: 'shield',
  },
  {
    title: 'Premium Materials',
    description:
      'From porcelain slabs to natural stone, we handle high-end materials daily and treat them with the care a custom home deserves.',
    icon: 'gem',
  },
  {
    title: 'On Time, On Budget',
    description:
      'Clear scopes, honest timelines and tidy job sites. Builders and homeowners trust us to deliver without surprises.',
    icon: 'clock',
  },
  {
    title: 'Fully Insured & WSIB',
    description:
      'Licensed, insured and WSIB-covered. Total peace of mind on every residential and contract project.',
    icon: 'badge',
  },
  {
    title: 'Detail Obsessed',
    description:
      'Mitred edges, aligned niches and seamless transitions. The details others skip are exactly where we focus.',
    icon: 'sparkle',
  },
];

export const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We review your space, materials and vision, then provide a detailed, transparent quote.',
  },
  {
    step: '02',
    title: 'Design & Layout',
    description: 'We plan tile layout, waterproofing and transitions so every cut and line is intentional.',
  },
  {
    step: '03',
    title: 'Expert Installation',
    description: 'Our crew prepares substrates, waterproofs wet areas and installs with millimetre precision.',
  },
  {
    step: '04',
    title: 'Final Walkthrough',
    description: 'We clean, detail and walk the finished space with you to confirm it exceeds expectations.',
  },
];

// Client testimonials. INTENTIONALLY EMPTY: the previous entries were
// placeholder copy from the initial build, not real clients. Publishing
// invented testimonials (or review schema built from them) violates Google's
// structured-data policy and Canadian consumer-protection law. Add entries
// here only for real, permission-cleared quotes from actual customers.
export const testimonials = [];

export const faqs = [
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Toronto and the entire GTA, including North York, Etobicoke, Scarborough, Vaughan, Markham, Richmond Hill, Mississauga, Oakville and surrounding communities.',
  },
  {
    question: 'Do you handle full bathroom renovations or just tile?',
    answer:
      'Both. We offer tile-only installation as well as complete bathroom renovations — including demolition, waterproofing, plumbing coordination, glass and finishing — managed by one accountable crew.',
  },
  {
    question: 'Are you insured and certified?',
    answer:
      'Yes. Diamond Tiling is fully insured and WSIB-covered, and we build all wet areas on certified waterproofing systems that are leak-tested before tiling.',
  },
  {
    question: 'Do you work with builders and contractors?',
    answer:
      'Absolutely. A large share of our work is for custom home builders and general contractors who need a dependable tile partner that delivers on schedule and on spec.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Submit the quote request form on our Contact page or call us directly. We will review your project details and provide a clear, transparent estimate.',
  },
];
