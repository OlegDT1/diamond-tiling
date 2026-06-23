import { siteConfig } from '@/lib/site';

export default function sitemap() {
  const routes = ['', '/about', '/services', '/portfolio', '/reviews', '/contact'];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
