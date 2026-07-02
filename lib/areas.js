// Local service-area landing pages. Each entry drives a page at
// /service-areas/[slug] with unique, city-specific copy for local SEO.
// Ordered by search demand + proximity — Richmond Hill leads because it
// already drives organic impressions in Search Console.
import { projects } from './data';

export const serviceAreas = [
  {
    slug: 'richmond-hill',
    city: 'Richmond Hill',
    region: 'ON',
    lat: 43.8828,
    lng: -79.4403,
    blurb:
      'Premium tile installation, custom showers and full bathroom renovations for Richmond Hill homeowners and builders — from Bayview Hill estates to new builds in Oak Ridges.',
    intro:
      'Diamond Tiling is a trusted tile contractor in Richmond Hill, delivering custom-home quality across the community. Whether you are renovating a primary ensuite in Mill Pond or tiling a whole new build off Yonge Street, our crews bring dead-level layouts, certified waterproofing and razor-tight grout lines to every Richmond Hill project.',
    neighbourhoods: ['Bayview Hill', 'Oak Ridges', 'Mill Pond', 'Jefferson', 'Observatory', 'Westbrook'],
  },
  {
    slug: 'vaughan',
    city: 'Vaughan',
    region: 'ON',
    lat: 43.8361,
    lng: -79.4983,
    blurb:
      'Expert tile installation and bathroom renovations across Vaughan — porcelain slab feature walls, curbless showers and large-format floors built to a custom-home standard.',
    intro:
      'From Kleinburg estate homes to modern builds in Maple and Thornhill, Diamond Tiling is the tile specialist Vaughan homeowners and builders rely on. We handle everything from book-matched porcelain slab walls to spa-grade bathroom renovations, finished with the precision your home deserves.',
    neighbourhoods: ['Kleinburg', 'Maple', 'Thornhill', 'Woodbridge', 'Concord', 'Vellore Village'],
  },
  {
    slug: 'markham',
    city: 'Markham',
    region: 'ON',
    lat: 43.8561,
    lng: -79.337,
    blurb:
      'Tile installation, custom showers and bathroom renovations for Markham homes — from Unionville heritage properties to new-build ensuites in Cornell and Berczy.',
    intro:
      'Diamond Tiling serves homeowners and contractors throughout Markham with premium tile and wet-area work. Whether it is a heated floor in Unionville, a frameless glass shower in Cornell or a full bathroom renovation in Berczy Village, our crew delivers a flawless, leak-tested finish.',
    neighbourhoods: ['Unionville', 'Cornell', 'Berczy Village', 'Cathedraltown', 'Markham Village', 'Angus Glen'],
  },
  {
    slug: 'toronto',
    city: 'Toronto',
    region: 'ON',
    lat: 43.6532,
    lng: -79.3832,
    blurb:
      'Toronto’s tile installation specialists — bathroom renovations, porcelain slabs, custom showers and heated floors for downtown condos and estate homes alike.',
    intro:
      'From Forest Hill and Rosedale estates to King West condos, Diamond Tiling is the tile contractor Toronto homeowners and builders trust. We bring custom-home craftsmanship to every project — precise layouts, certified waterproofing and premium materials handled with care.',
    neighbourhoods: ['Forest Hill', 'Rosedale', 'Yorkville', 'Leaside', 'The Beaches', 'King West'],
  },
  {
    slug: 'north-york',
    city: 'North York',
    region: 'ON',
    lat: 43.7615,
    lng: -79.4111,
    blurb:
      'Tile installation and bathroom renovations across North York — large-format porcelain, custom showers and spa-grade ensuites built to last.',
    intro:
      'Diamond Tiling delivers premium tile installation throughout North York, from Willowdale condos to family homes in Bayview Village and Don Mills. Every wet area is built on certified waterproofing and finished with the tight, intentional detailing our clients expect.',
    neighbourhoods: ['Willowdale', 'Bayview Village', 'Don Mills', 'York Mills', 'Lawrence Park', 'Bridle Path'],
  },
  {
    slug: 'etobicoke',
    city: 'Etobicoke',
    region: 'ON',
    lat: 43.6205,
    lng: -79.5132,
    blurb:
      'Custom tile installation, showers and bathroom renovations for Etobicoke homes — from lakeshore condos to established family neighbourhoods.',
    intro:
      'Diamond Tiling is the tile contractor Etobicoke homeowners call for flawless floors, frameless glass showers and full bathroom renovations. From The Kingsway to Mimico, we deliver waterproofed, lippage-free results with clean transitions throughout.',
    neighbourhoods: ['The Kingsway', 'Mimico', 'Islington', 'Humber Bay', 'Long Branch', 'Alderwood'],
  },
  {
    slug: 'scarborough',
    city: 'Scarborough',
    region: 'ON',
    lat: 43.7764,
    lng: -79.2318,
    blurb:
      'Tile installation and bathroom renovations across Scarborough — mosaic features, heated floors and custom showers finished to a premium standard.',
    intro:
      'Serving homeowners and builders throughout Scarborough, Diamond Tiling brings precision tile work to every project — from mosaic feature showers in Guildwood to full ensuite renovations in Agincourt. Expect certified waterproofing and detail-obsessed finishing on every job.',
    neighbourhoods: ['Guildwood', 'Agincourt', 'Birch Cliff', 'Bluffs', 'Highland Creek', 'Rouge'],
  },
  {
    slug: 'mississauga',
    city: 'Mississauga',
    region: 'ON',
    lat: 43.589,
    lng: -79.6441,
    blurb:
      'Premium tile installation, large-format floors and bathroom renovations for Mississauga homes — from Port Credit to Lorne Park estates.',
    intro:
      'Diamond Tiling serves Mississauga with custom-home quality tile installation and wet-area work. Whether it is an expansive large-format porcelain floor in Erin Mills or a curbless shower in Lorne Park, our crews deliver dead-flat, leak-tested results.',
    neighbourhoods: ['Port Credit', 'Lorne Park', 'Erin Mills', 'Streetsville', 'Meadowvale', 'Clarkson'],
  },
  {
    slug: 'oakville',
    city: 'Oakville',
    region: 'ON',
    lat: 43.4675,
    lng: -79.6877,
    blurb:
      'Tile installation, custom showers and luxury bathroom renovations for Oakville homes — Carrara-look walk-ins, porcelain slabs and heated floors.',
    intro:
      'From Old Oakville heritage homes to new estates in Bronte, Diamond Tiling brings meticulous tile craftsmanship to every Oakville project. We specialise in premium materials — natural stone, book-matched slabs and large-format porcelain — installed to a custom-home standard.',
    neighbourhoods: ['Old Oakville', 'Bronte', 'Glen Abbey', 'Joshua Creek', 'River Oaks', 'Clearview'],
  },
  {
    slug: 'burlington',
    city: 'Burlington',
    region: 'ON',
    lat: 43.3255,
    lng: -79.799,
    blurb:
      'Custom tile installation and bathroom renovations across Burlington — contemporary vanities, frameless showers and large-format walls.',
    intro:
      'Diamond Tiling delivers premium tile work throughout Burlington, from lakeside condos downtown to family homes in Alton Village. Every bathroom renovation and custom shower is built on certified waterproofing and finished with clean, contemporary detailing.',
    neighbourhoods: ['Downtown Burlington', 'Aldershot', 'Alton Village', 'Millcroft', 'Roseland', 'Tyandaga'],
  },
  {
    slug: 'brampton',
    city: 'Brampton',
    region: 'ON',
    lat: 43.7315,
    lng: -79.7624,
    blurb:
      'Tile installation, custom showers and full bathroom renovations for Brampton homes — porcelain slabs, heated floors and waterproofed wet rooms.',
    intro:
      'Diamond Tiling serves Brampton homeowners and builders with reliable, high-end tile installation. From Springdale new builds to established homes in Bramalea, we deliver precise layouts, certified waterproofing and a finish that looks designed, not just installed.',
    neighbourhoods: ['Springdale', 'Bramalea', 'Heart Lake', 'Castlemore', 'Mount Pleasant', 'Fletcher’s Meadow'],
  },
  {
    slug: 'aurora',
    city: 'Aurora',
    region: 'ON',
    lat: 44.0065,
    lng: -79.4504,
    blurb:
      'Premium tile installation and bathroom renovations for Aurora homes — porcelain slab fireplaces, custom showers and spa-grade ensuites.',
    intro:
      'Diamond Tiling brings custom-home craftsmanship to Aurora, from estate homes in Aurora Highlands to new builds in Bayview Wellington. Whether it is a large-format slab fireplace or a full ensuite renovation, our crew delivers a flawless, durable finish.',
    neighbourhoods: ['Aurora Highlands', 'Bayview Wellington', 'Aurora Village', 'Hills of St Andrew', 'Aurora Grove', 'Stronach'],
  },
];

// Look up a single area by slug.
export function getServiceArea(slug) {
  return serviceAreas.find((area) => area.slug === slug);
}

// Projects photographed in (or nearest to) a given city, for the local-work
// section. Falls back to featured projects when we have none tagged locally.
export function getAreaProjects(area, limit = 3) {
  const local = projects.filter((project) =>
    project.location?.toLowerCase().includes(area.city.toLowerCase())
  );
  const pool = local.length ? local : projects.filter((project) => project.featured);
  return pool.slice(0, limit);
}
