import { siteConfig } from '@/lib/site';
import { serviceAreas } from '@/lib/areas';
import { services } from '@/lib/data';

// Build-time timestamp. Using a fixed value per deploy (rather than a fresh
// Date on every request) keeps lastModified honest — it changes when the site
// actually changes, not every time a crawler asks.
const lastModified = new Date();

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/reviews',
    '/contact',
    '/service-areas',
  ];

  const corePages = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Service detail pages carry the primary commercial keywords, so they rank
  // just below the homepage in priority.
  const servicePages = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const areaPages = serviceAreas.map((area) => ({
    url: `${siteConfig.url}/service-areas/${area.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...corePages, ...servicePages, ...areaPages];
}
