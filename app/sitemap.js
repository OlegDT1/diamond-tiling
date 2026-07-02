import { siteConfig } from '@/lib/site';
import { serviceAreas } from '@/lib/areas';

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
  const lastModified = new Date();

  const corePages = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const areaPages = serviceAreas.map((area) => ({
    url: `${siteConfig.url}/service-areas/${area.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...corePages, ...areaPages];
}
