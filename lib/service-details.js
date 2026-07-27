// Long-form, per-service content powering /services/[slug] landing pages.
// Keyed by the service slug in lib/data.js. Each entry targets one primary
// search intent — one page, one topic — rather than repeating generic copy.
//
// Written to be genuinely useful to a homeowner deciding who to hire. Keep it
// specific and factual: no invented certifications, no invented prices.

export const serviceDetails = {
  'tile-installation': {
    metaTitle: 'Tile Installer in Toronto | Floor & Wall Tile Installation',
    metaDescription:
      'Professional tile installers serving Toronto & the GTA. Floor, wall, mosaic and natural stone tile installation with dead-level layouts and tight grout lines. Free quotes.',
    h1: 'Tile Installation in Toronto & the GTA',
    lede: 'Precision floor and wall tile installation for homeowners, builders and designers across Toronto and the Greater Toronto Area.',
    intro: [
      'Tile is unforgiving. A floor that is out by a few millimetres over a long run, a grout joint that drifts, a cut that lands badly at a doorway — these are the details that separate a professional installation from one you notice every day for the next twenty years.',
      'Diamond Tiling installs floor tile, wall tile, mosaic and natural stone throughout Toronto and the GTA. Every job starts with a dry layout so we can balance cuts, centre patterns on the sightlines that matter, and make sure you are never left with a sliver tile in the most visible corner of the room.',
    ],
    sections: [
      {
        title: 'Substrate preparation comes first',
        body: 'Most tile failures are substrate failures. We check floors for flatness and deflection before any adhesive is mixed, and correct what we find — self-levelling compound, backer board, or an uncoupling membrane where movement is a risk. Tile installed over an unsound substrate will crack no matter how good the tilework looks on day one.',
      },
      {
        title: 'Layout planned before the first tile',
        body: 'We dry-lay and snap lines so the pattern reads correctly from the room’s main entry point. Cuts get balanced wall to wall, grout joints stay consistent, and transitions to hardwood, carpet or thresholds are planned rather than improvised at the end.',
      },
      {
        title: 'Materials handled properly',
        body: 'Natural stone, porcelain, ceramic and glass each behave differently — different setting materials, different blades, different sealing requirements. We match the method to the material, back-butter where coverage demands it, and seal natural stone before grouting so the surface is not stained by the grout itself.',
      },
    ],
    faqs: [
      {
        question: 'How long does a tile installation take?',
        answer:
          'A typical bathroom floor and shower surround runs three to five working days including waterproofing and cure time. Larger areas such as open-concept main floors depend on prep — if the substrate needs levelling, add a day. We give you a realistic schedule with the quote, not an optimistic one.',
      },
      {
        question: 'Can you tile over existing tile?',
        answer:
          'Sometimes, but it is rarely the right call. It raises floor height at doorways and transitions, adds weight, and means your new installation is only as sound as the old one underneath. We will tell you honestly whether it is viable for your specific floor or whether removal is the better investment.',
      },
      {
        question: 'Do you supply the tile or do I?',
        answer:
          'Either works. Many clients buy their own tile from a supplier they like, and we are happy to install it. We can also advise on selections and quantities before you order — the most common mistake we see is under-ordering, which is a serious problem when dye lots differ between batches.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'Toronto and the entire GTA, including North York, Etobicoke, Scarborough, Vaughan, Markham, Richmond Hill, Mississauga, Oakville, Burlington, Brampton and Aurora.',
      },
    ],
    related: ['large-format-tile', 'bathroom-renovations', 'custom-showers'],
  },

  'bathroom-renovations': {
    metaTitle: 'Bathroom Renovation Toronto | Full Bathroom Remodels',
    metaDescription:
      'Complete bathroom renovations in Toronto & the GTA — demolition through final finish, certified waterproofing, custom showers and tile. One accountable crew. Free quotes.',
    h1: 'Bathroom Renovations in Toronto & the GTA',
    lede: 'Full bathroom transformations managed end to end — demolition, waterproofing, tile, glass and finishing, delivered by one crew that stays accountable from start to finish.',
    intro: [
      'The hardest part of a bathroom renovation is rarely the tile. It is the coordination — making sure the plumber has roughed in before the waterproofing goes on, that the glass is measured after the tile is set rather than before, and that nobody has to come back and cut into finished work.',
      'Diamond Tiling manages complete bathroom renovations across Toronto and the GTA. You deal with one team that owns the schedule and the outcome, rather than chasing separate trades who each blame the last one.',
    ],
    sections: [
      {
        title: 'What a full renovation includes',
        body: 'Demolition and disposal, substrate repair, plumbing and electrical coordination, certified waterproofing, tile installation, vanity and fixture setting, glass measurement and install, and a final detail clean. We handle the trades and the sequencing so the work happens in the right order.',
      },
      {
        title: 'Waterproofing is not optional',
        body: 'Every wet area we build is waterproofed to manufacturer specification and flood-tested before tile goes on. It is the single most important stage of a bathroom renovation and the one most often rushed. A shower that leaks behind the wall will not announce itself for two years — and by then the damage is structural.',
      },
      {
        title: 'Realistic timelines and clear pricing',
        body: 'A full bathroom renovation typically runs three to five weeks depending on scope, material lead times and inspection scheduling. We quote in writing with the scope itemised, so you can see what is included rather than discovering exclusions halfway through.',
      },
    ],
    faqs: [
      {
        question: 'How much does a bathroom renovation cost in Toronto?',
        answer:
          'Cost is driven by size, whether plumbing is being relocated, material selections and the amount of custom work such as curbless entries or slab walls. Relocating drains and moving walls adds significantly more than upgrading finishes does. We provide a written, itemised quote after seeing the space so you get a real number rather than a range that means nothing.',
      },
      {
        question: 'How long will my bathroom be out of use?',
        answer:
          'Plan for three to five weeks for a full renovation. Waterproofing and mortar both need cure time that cannot be rushed, and glass is typically fabricated after tile is complete, which adds one to two weeks on its own.',
      },
      {
        question: 'Do I need a permit for a bathroom renovation?',
        answer:
          'Replacing finishes in the same layout generally does not require a permit. Moving plumbing, altering structure or changing the room’s footprint usually does. We will tell you which category your project falls into before work begins.',
      },
      {
        question: 'Can you work with my designer or architect?',
        answer:
          'Yes. We regularly execute drawings from designers and work directly with custom home builders. Bring us in early and we can flag installation issues while they are still cheap to solve on paper.',
      },
    ],
    related: ['custom-showers', 'waterproofing-systems', 'heated-floors'],
  },

  'porcelain-slab-installation': {
    metaTitle: 'Porcelain Slab Installation Toronto | Large-Format Slab Walls',
    metaDescription:
      'Porcelain slab installation across Toronto & the GTA — book-matched feature walls, fireplace surrounds, countertops and seamless shower panels with minimal grout lines.',
    h1: 'Porcelain Slab Installation in Toronto',
    lede: 'Oversized porcelain slab work — book-matched walls, fireplace surrounds, countertops and seamless shower panels installed with a monolithic, near-grout-free finish.',
    intro: [
      'Porcelain slabs are the most demanding material in modern tile work. A single panel can run 3200 × 1600 mm and weigh well over a hundred kilograms, and it will crack if it is lifted wrong, cut wrong, or set on a substrate that is not dead flat.',
      'Diamond Tiling specialises in large-format porcelain slab installation throughout Toronto and the GTA. Handling frames, rail cutting systems, suction rigs and proper crew numbers are not optional extras on this material — they are the difference between a flawless feature wall and an expensive pile of broken porcelain.',
    ],
    sections: [
      {
        title: 'Book-matching and layout',
        body: 'Book-matched slabs create a mirrored vein pattern across two or more panels — the effect that makes a slab feature wall look like carved stone rather than tile. It only works if the panels are sequenced, oriented and cut to preserve the match, which means planning the layout before anything is cut.',
      },
      {
        title: 'Where slabs work best',
        body: 'Feature and fireplace walls, shower surrounds with almost no grout lines to clean, waterfall countertops and vanity tops, and large-format floors. Because porcelain is non-porous, it handles wet areas and heat better than most natural stone and does not require sealing.',
      },
      {
        title: 'Substrate and support',
        body: 'Slab installation is unforgiving of flatness variation. We flatten and prepare the substrate first, use the correct large-and-heavy-tile mortar, and achieve full coverage behind the panel. Voids behind a slab are failure points — under thermal movement or impact, that is where it cracks.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between porcelain slab and natural stone?',
        answer:
          'Porcelain slabs are manufactured, so they are non-porous, highly consistent, do not need sealing and resist staining and heat. Natural stone such as marble is porous, unique in every piece, requires sealing and can etch from acids. Many clients choose porcelain that reproduces a marble look precisely to get the appearance without the maintenance.',
      },
      {
        question: 'Can porcelain slabs be used for countertops?',
        answer:
          'Yes — porcelain works well for countertops, waterfall edges and vanity tops, and it handles heat better than engineered quartz. Edge detailing and mitred corners require specific tooling and experience, which is where most of the skill in slab countertop work sits.',
      },
      {
        question: 'Are slab walls more expensive than regular tile?',
        answer:
          'The material costs more per square foot and the installation requires more crew and specialised equipment, so yes. What you are buying is the seamless look — a wall with one or two joints instead of dozens of grout lines. For feature walls it is usually the detail clients remember most.',
      },
    ],
    related: ['large-format-tile', 'custom-showers', 'tile-installation'],
  },

  'heated-floors': {
    metaTitle: 'Heated Floor Installation Toronto | Radiant In-Floor Heating',
    metaDescription:
      'Electric heated floor installation in Toronto & the GTA. Schluter DITRA-HEAT and equivalent radiant systems installed under tile and stone, zoned, tested and programmed.',
    h1: 'Heated Floor Installation in Toronto',
    lede: 'Electric radiant in-floor heating installed under tile and stone — properly zoned, fully tested and programmed so the floor is warm before you are awake.',
    intro: [
      'A heated floor is the upgrade clients tell us they would never build a bathroom without again. It is also one of the easiest things to get wrong, because almost all of the work is buried permanently under tile.',
      'Diamond Tiling installs electric radiant floor heating throughout Toronto and the GTA, including Schluter DITRA-HEAT and equivalent uncoupling-membrane systems. The membrane does two jobs at once: it holds the heating cable at the correct spacing and it isolates the tile from substrate movement, which is why we prefer it over loose cable stapled to the subfloor.',
    ],
    sections: [
      {
        title: 'How DITRA-HEAT systems work',
        body: 'An uncoupling membrane is bonded to the subfloor, and heating cable is pressed into studs moulded into the membrane — no clips, no self-levelling encapsulation needed. Tile is then set directly over top. Because the cable sits within the membrane rather than under a thick pour, the floor heats faster and the assembly stays thin enough to avoid awkward height differences at doorways.',
      },
      {
        title: 'Testing before, during and after',
        body: 'We meter the cable for resistance and continuity before installation, again after it is set in the membrane, and once more after tile is laid. A cable damaged mid-install and discovered after grouting means lifting a finished floor — testing at each stage is what prevents that.',
      },
      {
        title: 'Thermostats and zoning',
        body: 'Each heated area gets its own programmable thermostat with a floor sensor, set to your schedule so the system runs when you need it rather than continuously. Because electric radiant heats the surface directly rather than the air, running costs on a bathroom-sized zone are modest — it is not a whole-home heating system and should not be sized as one.',
      },
    ],
    faqs: [
      {
        question: 'Is Schluter DITRA-HEAT worth it over cheaper cable systems?',
        answer:
          'In our experience yes, for two reasons. The membrane provides uncoupling — it isolates tile from substrate movement, which meaningfully reduces cracking risk — and cable spacing is set by the membrane rather than by hand, so heat distribution is even. Loose-cable systems can work, but they leave more room for installation error you cannot see once tile is down.',
      },
      {
        question: 'How much does heated flooring cost to run?',
        answer:
          'For a typical bathroom zone the running cost is modest, particularly on a programmed schedule where the system runs a few hours a day rather than continuously. Cost scales with heated area and your electricity rate, so a small ensuite is very different from an open main floor.',
      },
      {
        question: 'Can heated floors go under any tile?',
        answer:
          'They work under porcelain, ceramic and most natural stone, which conduct heat well. They are not appropriate under all floor coverings — some engineered products have temperature limits. If you have already selected material, tell us and we will confirm compatibility before quoting.',
      },
      {
        question: 'What happens if the heating cable fails?',
        answer:
          'Quality systems carry manufacturer warranties, and failures in properly installed cable are rare — most failures trace to damage during installation, which is exactly what staged resistance testing catches. The thermostat is the component most likely to need replacement eventually, and it is accessible in the wall rather than buried under the floor.',
      },
    ],
    related: ['tile-installation', 'bathroom-renovations', 'waterproofing-systems'],
  },

  'waterproofing-systems': {
    metaTitle: 'Shower Waterproofing Toronto | Certified Wet-Area Systems',
    metaDescription:
      'Certified shower and wet-area waterproofing in Toronto & the GTA. Bonded membranes, sloped pans, curbless wet rooms and flood-tested assemblies built to manufacturer spec.',
    h1: 'Waterproofing Systems for Showers & Wet Areas',
    lede: 'Bonded membranes, correctly sloped pans and sealed penetrations — wet areas engineered and leak-tested to keep water exactly where it belongs.',
    intro: [
      'Waterproofing is the part of your bathroom you will never see and the only part that can quietly destroy the rest of your house. Tile and grout are not waterproof. Water passes through grout, and what stops it reaching your framing is the membrane assembly underneath.',
      'Diamond Tiling builds wet areas on proven waterproofing systems — Schluter and equivalent bonded assemblies — across Toronto and the GTA. Every shower we build is flood-tested before a single tile is set.',
    ],
    sections: [
      {
        title: 'A system, not a product',
        body: 'Waterproofing works as a continuous assembly: bonded membrane on walls and floor, sealed corners and changes of plane, waterproof collars at every pipe and valve penetration, and a drain designed to bond to the membrane. Mixing components from incompatible systems is one of the most common causes of failure, and it usually voids the manufacturer warranty.',
      },
      {
        title: 'Slope and drainage',
        body: 'A shower floor must slope consistently to the drain — no flat spots, no ponding. We build sloped pans to the correct fall, and for curbless and wet-room designs we handle the linear drains and recessed framing that let the floor run level into the shower without water escaping.',
      },
      {
        title: 'Flood testing before tile',
        body: 'We plug the drain, fill the pan, and leave it. If the assembly holds, tile goes on. If it does not, we find out at the only stage where fixing it is straightforward. Skipping this test saves a day and risks a rebuild.',
      },
    ],
    faqs: [
      {
        question: 'Isn’t tile and grout already waterproof?',
        answer:
          'No. Grout is porous and water moves through it steadily. Sealers slow surface absorption but are not a waterproofing layer. What actually protects the structure is the bonded membrane assembly behind the tile — which is why a shower can look perfect while soaking the framing behind it.',
      },
      {
        question: 'How do I know if my existing shower is leaking?',
        answer:
          'Common signs are loose or hollow-sounding tile, grout that keeps cracking in the same corner, musty smell, discoloured paint or soft drywall on the other side of the shower wall, and stains on the ceiling below. By the time these appear the leak has usually been active for some time.',
      },
      {
        question: 'Can you waterproof a curbless or wet-room shower?',
        answer:
          'Yes — curbless entries are one of our specialities. They require recessing the subfloor or building up the surrounding floor, a linear or offset drain, and careful membrane detailing at the transition. Done properly they are as watertight as a curbed shower and considerably better to live with.',
      },
    ],
    related: ['custom-showers', 'bathroom-renovations', 'heated-floors'],
  },

  'custom-showers': {
    metaTitle: 'Custom Shower Builds Toronto | Curbless & Frameless Showers',
    metaDescription:
      'Custom shower construction in Toronto & the GTA — curbless entries, linear drains, integrated niches and benches, frameless glass and certified waterproofing.',
    h1: 'Custom Shower Construction in Toronto',
    lede: 'Curbless entries, linear drains, integrated niches and benches, and frameless glass — showers built around how you actually use the space.',
    intro: [
      'A custom shower is where tile work is judged. Every plane meets another plane, every niche has an inside corner, and the glass will show you instantly whether the walls are plumb and the curb is level.',
      'Diamond Tiling builds bespoke showers throughout Toronto and the GTA — from compact condo ensuites to full wet rooms in custom homes. Every build starts with waterproofing and ends with millimetre-level tile detailing.',
    ],
    sections: [
      {
        title: 'Curbless and barrier-free entries',
        body: 'A curbless shower reads as one continuous floor, makes a small bathroom feel larger, and is genuinely accessible as mobility needs change. It requires recessing the subfloor or building up the surrounding floor, a linear or offset drain, and precise membrane detailing at the transition — done properly it is as watertight as any curbed shower.',
      },
      {
        title: 'Niches, benches and the details',
        body: 'Niches are set out to land within the tile grid rather than cutting awkwardly through it, sized to actually fit shampoo bottles, and sloped slightly so water drains rather than pools. Benches are framed solid, fully waterproofed, and pitched so you are not sitting in standing water.',
      },
      {
        title: 'Built for the glass',
        body: 'Frameless glass is measured after tile is complete, and it will expose any wall that is out of plumb. We build to tolerance for the glass from the framing stage, then coordinate the template so panels sit tight with even reveals and clean silicone lines.',
      },
    ],
    faqs: [
      {
        question: 'How long does a custom shower take to build?',
        answer:
          'Framing, waterproofing, flood testing, tile and grout usually run one to two weeks. Frameless glass is templated after the tile is finished and typically takes another one to two weeks to fabricate and install, so plan for that in your overall schedule.',
      },
      {
        question: 'Is a curbless shower a good idea in a condo?',
        answer:
          'Often yes, but it depends on the floor assembly — recessing the subfloor is not always possible over a concrete slab without building up the surrounding floor instead. We assess the structure first and will tell you honestly whether it works in your unit.',
      },
      {
        question: 'What size tile is best in a shower?',
        answer:
          'Large-format tile and slabs mean fewer grout lines to clean and a more seamless look, but they demand very flat walls. Smaller mosaic is standard on shower floors because more grout joints mean more slip resistance and easier conformity to slope. We commonly combine both.',
      },
    ],
    related: ['waterproofing-systems', 'porcelain-slab-installation', 'bathroom-renovations'],
  },

  backsplashes: {
    metaTitle: 'Kitchen Backsplash Installation Toronto | Tile & Slab',
    metaDescription:
      'Kitchen and bar backsplash installation across Toronto & the GTA — subway, mosaic and full-height slab with crisp edges, clean outlet cuts and tidy cabinet transitions.',
    h1: 'Kitchen Backsplash Installation in Toronto',
    lede: 'Subway, mosaic and full-height slab backsplashes with crisp edges, clean outlet cuts and precise transitions to cabinetry and counters.',
    intro: [
      'A backsplash is a small job that is highly visible and sits at eye level, which is exactly why sloppy work shows. Outlet cuts that do not sit square behind the cover plate, an end run that finishes on a 5 mm sliver, a wavy line where the tile meets the counter — these are the things you see every time you cook.',
      'Diamond Tiling installs kitchen and bar backsplashes throughout Toronto and the GTA, from classic subway to full-height porcelain slab.',
    ],
    sections: [
      {
        title: 'Layout that lands correctly',
        body: 'We set out the layout so the pattern centres on the range or hood, and so cuts at the ends of a run are balanced rather than leaving a sliver in a corner. Where the backsplash meets upper cabinets and the counter, the line stays straight and the reveal stays consistent.',
      },
      {
        title: 'Outlets, switches and edges',
        body: 'Outlet and switch cuts are made so cover plates sit flat and fully cover the opening. Exposed edges get a finished treatment — metal profile, mitred edge or bullnose — rather than raw tile edge or a bead of caulk covering a rough cut.',
      },
      {
        title: 'Full-height slab backsplashes',
        body: 'Running porcelain slab from counter to underside of the uppers — or all the way to the ceiling behind a range — creates an almost seamless surface with no grout lines to clean behind the stove. It requires precise templating around outlets and window returns, and it is one of the highest-impact upgrades in a kitchen.',
      },
    ],
    faqs: [
      {
        question: 'How long does a backsplash take to install?',
        answer:
          'Most standard kitchen backsplashes are a one to two day job — tile one day, grout the next. Full-height slab or intricate mosaic patterns take longer because of templating and cutting.',
      },
      {
        question: 'Can you install a backsplash without removing the counters?',
        answer:
          'Yes. Backsplashes are installed against existing counters routinely. We protect the counter surface throughout and finish with a flexible sealant at the joint rather than grout, because that joint needs to move.',
      },
      {
        question: 'What is the best backsplash material behind a stove?',
        answer:
          'Porcelain and ceramic handle heat and clean easily. Natural stone and unglazed materials are more porous and will stain from cooking oils unless properly sealed and maintained. Full-height slab is the easiest of all to keep clean since there are almost no joints.',
      },
    ],
    related: ['tile-installation', 'porcelain-slab-installation', 'large-format-tile'],
  },

  'large-format-tile': {
    metaTitle: 'Large Format Tile Installation Toronto | Lippage-Free Floors',
    metaDescription:
      'Large-format tile installation in Toronto & the GTA. Substrate flattening, levelling systems and back-buttering for expansive, lippage-free floors and walls.',
    h1: 'Large Format Tile Installation in Toronto',
    lede: 'Expansive, lippage-free floors and walls — substrate flattening, levelling systems and full-coverage back-buttering on big-format porcelain.',
    intro: [
      'Large-format tile makes a room feel bigger and calmer because there is so much less grout interrupting the surface. It is also the least forgiving format there is: the bigger the tile, the more brutally it exposes a floor that is not flat.',
      'Diamond Tiling installs large-format porcelain and stone across Toronto and the GTA — floors, walls, and shower surrounds — using the preparation and tooling this material actually requires.',
    ],
    sections: [
      {
        title: 'Flatness is the whole job',
        body: 'Industry tolerance tightens as tile size increases. A subfloor that is acceptable for 12-inch tile will produce visible lippage under 24 by 48-inch planks. We measure flatness across the room and correct it with self-levelling compound or patching before installation — this preparation is most of what separates a flat large-format floor from a bad one.',
      },
      {
        title: 'Levelling systems and coverage',
        body: 'We use tile levelling clips to hold adjacent edges flush while mortar cures, and back-butter the tile so there are no voids behind it. Hollow spots under large tile are impact failure points — a dropped pan cracks a tile that has air behind it, and does nothing to one with full coverage.',
      },
      {
        title: 'Offset and layout',
        body: 'Large-format tile should not be laid in a 50 percent brick offset — the natural crown in the middle of a long tile guarantees lippage at the joint. We keep offsets to a third or less, or run a stacked layout, which is both correct practice and usually the better look.',
      },
    ],
    faqs: [
      {
        question: 'What counts as large-format tile?',
        answer:
          'Generally any tile with one edge of 15 inches or more. Common sizes now run 24 by 48 inches and larger, and full porcelain slabs extend well beyond that — those are handled as slab installations with their own methods and equipment.',
      },
      {
        question: 'What is lippage and why does it happen?',
        answer:
          'Lippage is the height difference between adjacent tile edges — you feel it with a bare foot and see it in raking light. It comes from an uneven substrate, insufficient mortar coverage, tile warpage, or an excessive brick-pattern offset. Flattening the floor first and using levelling systems addresses all of them.',
      },
      {
        question: 'Does large-format tile work in small bathrooms?',
        answer:
          'Yes, and it often looks better than small tile there. Fewer grout lines makes a compact room read as larger and less busy. The constraint is cuts around fixtures and the number of full tiles you can actually land in the space, which we work out at layout stage.',
      },
    ],
    related: ['porcelain-slab-installation', 'tile-installation', 'custom-showers'],
  },
};

export function getServiceDetail(slug) {
  return serviceDetails[slug];
}
