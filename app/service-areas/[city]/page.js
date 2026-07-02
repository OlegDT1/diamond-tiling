import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import ProcessTimeline from '@/components/ProcessTimeline';
import CTASection from '@/components/CTASection';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import { serviceAreas, getServiceArea, getAreaProjects } from '@/lib/areas';
import { services } from '@/lib/data';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ city: area.slug }));
}

export function generateMetadata({ params }) {
  const area = getServiceArea(params.city);
  if (!area) return {};

  // The root layout's title template appends "| Diamond Tiling", so keep the
  // page title brand-free to avoid doubling it.
  const title = `Tile Installation in ${area.city}`;
  const ogTitle = `${title} | ${siteConfig.name}`;
  const description = `Diamond Tiling delivers premium tile installation, custom showers and bathroom renovations in ${area.city}, ${area.region}. Certified waterproofing, porcelain slabs and heated floors — built to a custom-home standard.`;

  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: {
      type: 'website',
      locale: 'en_CA',
      url: `${siteConfig.url}/service-areas/${area.slug}`,
      siteName: siteConfig.name,
      title: ogTitle,
      description,
      images: [
        {
          url: '/media/photos/backlit-mirror-ensuite.jpg',
          width: 1440,
          height: 1080,
          alt: `Tile installation in ${area.city} by Diamond Tiling`,
        },
      ],
    },
  };
}

export default function ServiceAreaPage({ params }) {
  const area = getServiceArea(params.city);
  if (!area) notFound();

  const url = `${siteConfig.url}/service-areas/${area.slug}`;
  const localProjects = getAreaProjects(area);

  // Per-city LocalBusiness + Service schema so Google understands we serve
  // this specific city, plus a breadcrumb trail.
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        name: `Tile Installation in ${area.city}`,
        serviceType: 'Tile Installation',
        description: `Premium tile installation, custom showers and bathroom renovations in ${area.city}, ${area.region}.`,
        url,
        provider: { '@id': `${siteConfig.url}/#business` },
        areaServed: {
          '@type': 'City',
          name: area.city,
          '@id': `https://www.geonames.org/`,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Tile & Renovation Services in ${area.city}`,
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: service.title },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Service Areas',
            item: `${siteConfig.url}/service-areas`,
          },
          { '@type': 'ListItem', position: 3, name: area.city, item: url },
        ],
      },
    ],
  };

  const bbox = [area.lng - 0.14, area.lat - 0.07, area.lng + 0.14, area.lat + 0.07]
    .map((n) => n.toFixed(4))
    .join('%2C');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow={`Serving ${area.city}, ${area.region}`}
        title={`Tile Installation in ${area.city}`}
        breadcrumb={area.city}
        description={area.blurb}
      />

      {/* Intro + services offered */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Local Tile Contractor"
                title={`Your tile specialists in ${area.city}`}
                description={area.intro}
              />

              <Reveal delay={0.1}>
                <div className="mt-10">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                    Popular {area.city} neighbourhoods we serve
                  </h3>
                  <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                    {area.neighbourhoods.map((hood) => (
                      <li key={hood} className="flex items-center gap-2 text-sm text-platinum">
                        <Icon.pin width={16} height={16} className="shrink-0 text-accent" />
                        {hood}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact" className="btn-primary">
                    Request a Quote
                    <Icon.arrow width={18} height={18} />
                  </Link>
                  <a href={siteConfig.phoneHref} className="btn-secondary">
                    <Icon.phone width={18} height={18} />
                    {siteConfig.phone}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-charcoal p-8 sm:p-10">
                <h3 className="text-lg font-semibold text-white">
                  Services offered in {area.city}
                </h3>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <li
                      key={service.slug}
                      className="flex items-center gap-2.5 text-sm text-platinum"
                    >
                      <Icon.check width={18} height={18} className="shrink-0 text-accent" />
                      {service.title}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="btn-secondary mt-8">
                  Explore all services
                  <Icon.arrow width={16} height={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Local work */}
      {localProjects.length ? (
        <section className="border-t border-white/10 bg-ink-soft py-20 sm:py-24">
          <div className="container-px">
            <SectionHeading
              eyebrow="Recent Work"
              title={`Tile projects near ${area.city}`}
              description="A look at the craftsmanship we bring to homes across the Greater Toronto Area."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {localProjects.map((project) => (
                <Reveal key={project.slug}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <Link href="/portfolio" className="btn-secondary mt-12">
                View full portfolio
                <Icon.arrow width={16} height={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Map */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Service Area"
              title={`Proudly serving ${area.city} & the GTA`}
              description={`Our crews work across ${area.city} and the surrounding Greater Toronto Area. If your project is nearby, we would love to take a look and provide a transparent quote.`}
            />
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title={`Diamond Tiling service area map — ${area.city}, ${area.region}`}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${area.lat}%2C${area.lng}`}
                  className="h-[420px] w-full grayscale-[0.3]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                  aria-hidden
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <CTASection
        title={`Ready to start your ${area.city} project?`}
        description={`Tell us about your tile or bathroom renovation in ${area.city} and we will provide a clear, transparent quote — no pressure, just expert advice.`}
      />
    </>
  );
}
