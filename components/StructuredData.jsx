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
    logo: `${siteConfig.url}/favicon.svg`,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
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
