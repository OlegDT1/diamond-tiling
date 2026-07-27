// Central business + SEO configuration. Update these values to reflect
// real contact details before going live.

export const siteConfig = {
  name: 'Diamond Tiling',
  legalName: 'Diamond Tiling Inc.',
  tagline: 'Premium Tile Installation in Toronto & GTA',
  description:
    'Diamond Tiling delivers premium tile installation, bathroom renovations, porcelain slabs, heated floors, waterproofing and custom showers across Toronto and the GTA.',
  url: 'https://www.diamond-tiling.com',
  phone: '647 774 8449',
  phoneDisplay: '647-774-8449',
  phoneHref: 'tel:+16477748449',
  email: 'oleg@diamond-tiling.com',
  emailHref: 'mailto:oleg@diamond-tiling.com',
  address: {
    // Matches the Google Business Profile for consistent local-SEO NAP.
    street: '90 Stadium Rd',
    city: 'Toronto',
    region: 'ON',
    postalCode: 'M5V 3W5',
    country: 'CA',
  },
  geo: {
    latitude: 43.6329,
    longitude: -79.4056,
  },
  hours: 'Mon–Sat 7:00 AM – 6:00 PM',
  // Public Google Business Profile link — real reviews live here. Paste the
  // "Share > Copy link" URL from the profile; falls back to a Maps search.
  googleBusinessUrl: '',
  social: {
    instagram: 'https://www.instagram.com/diamond_tiling_/',
  },
  serviceAreas: [
    'Toronto',
    'North York',
    'Etobicoke',
    'Scarborough',
    'Vaughan',
    'Markham',
    'Richmond Hill',
    'Mississauga',
    'Oakville',
    'Burlington',
    'Brampton',
    'Aurora',
  ],
};

// Where visitors go to read or leave a real review. Uses the Google Business
// Profile link when configured, otherwise a Maps search for the business.
export function googleReviewsUrl() {
  if (siteConfig.googleBusinessUrl) return siteConfig.googleBusinessUrl;
  const query = encodeURIComponent(`${siteConfig.name} ${siteConfig.address.city}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];
