import { siteConfig } from '@/lib/site';
import { services } from '@/lib/data';

// LocalBusiness + service schema for local SEO. Rendered once in the root layout.
export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/media/photos/backlit-mirror-ensuite.jpg`,
    // The real wordmark logo, not the favicon — this is what Google associates
    // with the business. Dark-on-transparent reads correctly on light surfaces.
    logo: `${siteConfig.url}/assets/logo-ink.png`,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      ...(siteConfig.address.street ? { streetAddress: siteConfig.address.street } : {}),
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      ...(siteConfig.address.postalCode ? { postalCode: siteConfig.address.postalCode } : {}),
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    openingHours: 'Mo-Sa 07:00-18:00',
    sameAs: Object.values(siteConfig.social),
    // No aggregateRating here on purpose: review markup must describe real,
    // verifiable reviews. Add it back only from genuine review data.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tile & Renovation Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.short,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
