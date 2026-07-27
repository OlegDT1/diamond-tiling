import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import ProcessTimeline from '@/components/ProcessTimeline';
import CTASection from '@/components/CTASection';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import { services, projects } from '@/lib/data';
import { getServiceDetail } from '@/lib/service-details';
import { serviceAreas } from '@/lib/areas';
import { siteConfig } from '@/lib/site';

// Portfolio category that best represents each service, for the "recent work"
// strip. Falls back to featured projects when nothing matches.
const projectCategoryFor = {
  'tile-installation': 'floors',
  'bathroom-renovations': 'bathrooms',
  'porcelain-slab-installation': 'porcelain-slabs',
  'heated-floors': 'floors',
  'waterproofing-systems': 'showers',
  'custom-showers': 'showers',
  backsplashes: 'porcelain-slabs',
  'large-format-tile': 'floors',
};

function relatedProjects(slug, limit = 3) {
  const category = projectCategoryFor[slug];
  const matches = projects.filter((p) => p.category === category);
  const pool = matches.length ? matches : projects.filter((p) => p.featured);
  return pool.slice(0, limit);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  const detail = getServiceDetail(params.slug);
  if (!service || !detail) return {};

  const url = `${siteConfig.url}/services/${service.slug}`;

  return {
    // The root layout appends "| Diamond Tiling", so keep these brand-free.
    title: detail.metaTitle,
    description: detail.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: 'website',
      locale: 'en_CA',
      url,
      siteName: siteConfig.name,
      title: `${detail.metaTitle} | ${siteConfig.name}`,
      description: detail.metaDescription,
      images: [
        {
          url: service.image,
          width: 1440,
          height: 1080,
          alt: `${service.title} by ${siteConfig.name} in Toronto`,
        },
      ],
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  const detail = getServiceDetail(params.slug);
  if (!service || !detail) notFound();

  const url = `${siteConfig.url}/services/${service.slug}`;
  const work = relatedProjects(service.slug);
  const related = (detail.related || [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        name: service.title,
        serviceType: service.title,
        description: detail.metaDescription,
        url,
        provider: { '@id': `${siteConfig.url}/#business` },
        areaServed: siteConfig.serviceAreas.map((city) => ({ '@type': 'City', name: city })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.title} options`,
          itemListElement: service.features.map((feature) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: feature },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}/#faq`,
        mainEntity: detail.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        eyebrow={service.title}
        title={detail.h1}
        breadcrumb={service.title}
        description={detail.lede}
      />

      {/* Intro + hero image */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <div className="space-y-5">
                {detail.intro.map((para) => (
                  <Reveal key={para.slice(0, 40)}>
                    <p className="text-lg leading-relaxed text-platinum-dim">{para}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
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
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={service.image}
                  alt={`${service.title} in Toronto by ${siteConfig.name}`}
                  width={1440}
                  height={1080}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-white/10 bg-ink-soft py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="What's Included"
            title={`Our ${service.title.toLowerCase()} scope`}
            description={service.description}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature) => (
              <Reveal key={feature}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-charcoal/40 p-6">
                  <Icon.check width={20} height={20} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-white">{feature}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-dive sections */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="mx-auto max-w-3xl space-y-12">
            {detail.sections.map((section) => (
              <Reveal key={section.title}>
                <article>
                  <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-platinum-dim">{section.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      {work.length ? (
        <section className="border-t border-white/10 bg-ink-soft py-20 sm:py-24">
          <div className="container-px">
            <SectionHeading
              eyebrow="Recent Work"
              title="Projects from this service"
              description="A look at the craftsmanship we bring to homes across Toronto and the GTA."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {work.map((project) => (
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

      {/* FAQs */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title={`${service.title} questions, answered`}
            description="The questions homeowners ask us most about this service."
          />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/10">
            {detail.faqs.map((faq) => (
              <Reveal key={faq.question}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-white">
                    {faq.question}
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-accent transition-transform duration-300 group-open:rotate-45">
                      <Icon.arrow width={14} height={14} className="rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-platinum-dim">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where we offer it — internal links to city pages */}
      <section className="border-t border-white/10 bg-ink-soft py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Service Areas"
            title={`${service.title} across the GTA`}
            description={`We deliver ${service.title.toLowerCase()} throughout Toronto and the surrounding Greater Toronto Area.`}
          />
          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-charcoal/40 px-4 py-2 text-sm text-platinum transition-colors hover:border-accent/40 hover:text-white"
                  >
                    <Icon.pin width={14} height={14} className="text-accent" />
                    {area.city}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Related services */}
      {related.length ? (
        <section className="py-20 sm:py-24">
          <div className="container-px">
            <SectionHeading
              eyebrow="Related Services"
              title="Often paired with"
              description="Most projects combine more than one of our specialities."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => {
                const IconComp = Icon[item.icon] || Icon.grid;
                return (
                  <Reveal key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group block h-full rounded-2xl border border-white/10 bg-charcoal/40 p-7 transition-colors hover:border-accent/40"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <IconComp width={22} height={22} />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-platinum-dim">
                        {item.short}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                        Learn more
                        <Icon.arrow
                          width={14}
                          height={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <ProcessTimeline />
      <CTASection
        title={`Ready to discuss your ${service.title.toLowerCase()} project?`}
        description="Tell us about your space and we’ll provide a clear, transparent quote — no pressure, just expert advice."
      />
    </>
  );
}
