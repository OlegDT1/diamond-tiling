import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ProjectGallery from '@/components/ProjectGallery';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import { siteConfig } from '@/lib/site';

const SLUG = '/projects/shower-leak-repair-toronto';
const PUBLISHED = '2026-11-12';

// The four photographs from this project, in the order the work happened.
// These are the owner's own site photos — captions describe only what is
// visible in them, with no invented project details.
const photos = [
  {
    src: '/media/projects/shower-leak-repair-toronto-01-demolition.webp',
    title: 'Affected materials removed',
    caption:
      'The shower floor opened up after the affected materials were taken out, exposing the base, the drain assembly and the curb for inspection.',
    alt: 'Shower floor demolition during a leak repair in Toronto, exposing the shower base, drain and curb',
  },
  {
    src: '/media/projects/shower-leak-repair-toronto-02-base-preparation.webp',
    title: 'Shower base exposed and prepared',
    caption:
      'The existing base cleaned down and prepared, with the perimeter banded at the wall and curb junctions ready to receive waterproofing.',
    alt: 'Prepared shower base in Toronto with perimeter waterproofing banding before membrane installation',
  },
  {
    src: '/media/projects/shower-leak-repair-toronto-03-prova-mat-waterproofing.webp',
    title: 'PROVA-MAT waterproofing installed',
    caption:
      'PROVA-MAT membrane bonded across the shower floor and detailed into the drain, carrying the waterproofing through to the perimeter.',
    alt: 'Red PROVA-MAT waterproofing membrane installed across a shower floor and sealed around the drain',
  },
  {
    src: '/media/projects/shower-leak-repair-toronto-04-completed-tile.webp',
    title: 'Completed shower floor',
    caption:
      'The finished shower floor — new white tile, consistent grout joints throughout and the drain set flush with the surrounding surface.',
    alt: 'Completed shower floor repair in Toronto with white tile, clean grout joints and a new flush-set drain',
  },
];

const steps = [
  {
    title: 'Removal of the affected shower floor materials',
    body: 'We opened up the area implicated by the investigation, taking out the affected floor materials so the assembly underneath could be seen and assessed directly.',
  },
  {
    title: 'Exposure and preparation of the existing shower base',
    body: 'With the floor materials removed, the existing base was exposed, cleaned down and prepared so new waterproofing could bond to a sound substrate.',
  },
  {
    title: 'Reconstruction of the affected shower floor',
    body: 'The affected section of shower floor was rebuilt, re-establishing the surface that the new waterproofing and tile would be installed over.',
  },
  {
    title: 'Installation of PROVA-MAT waterproofing membrane',
    body: 'PROVA-MAT membrane was bonded across the shower floor, forming a continuous waterproofing layer beneath the finished surface rather than relying on tile and grout to hold back water.',
  },
  {
    title: 'Drain integration and waterproofing details',
    body: 'The membrane was detailed into the drain and carried through the perimeter junctions — the transitions where wet-area assemblies most often fail.',
  },
  {
    title: 'Installation of new shower floor tiles',
    body: 'New floor tile was set over the completed waterproofing, with the layout worked out so cuts and joints ran consistently across the floor.',
  },
  {
    title: 'Grouting and finishing',
    body: 'The floor was grouted and finished, and the drain was set flush with the surrounding tile.',
  },
];

const related = [
  {
    href: '/services/waterproofing-systems',
    icon: 'shield',
    title: 'Waterproofing Systems',
    text: 'Bonded membranes, sloped pans and leak-tested wet-area assemblies.',
  },
  {
    href: '/services/custom-showers',
    icon: 'shower',
    title: 'Custom Showers',
    text: 'Curbless entries, linear drains, niches, benches and frameless glass.',
  },
  {
    href: '/services/tile-installation',
    icon: 'grid',
    title: 'Tile Installation',
    text: 'Floor and wall tile with dead-level layouts and tight grout joints.',
  },
  {
    href: '/services/bathroom-renovations',
    icon: 'bath',
    title: 'Bathroom Renovations',
    text: 'Full bathroom transformations managed end to end by one crew.',
  },
];

const outcomes = [
  { icon: 'pin', label: 'Source of the leak located and addressed' },
  { icon: 'shield', label: 'Shower floor rebuilt with new waterproofing' },
  { icon: 'check', label: 'Finished with professionally installed tile' },
];

export const metadata = {
  // The root layout appends "| Diamond Tiling" via its title template.
  title: 'Shower Leak Repair Toronto | Shower Waterproofing',
  description:
    'Looking for shower leak repair in Toronto? Diamond Tiling locates difficult shower leaks and provides professional waterproofing and tile repairs throughout the GTA.',
  keywords: [
    'Shower leak repair Toronto',
    'Shower leak detection Toronto',
    'Shower leaking but cannot find leak',
    'Shower waterproofing repair',
    'Shower base repair Toronto',
    'Shower tile repair GTA',
    'Shower repair without extensive demolition',
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    type: 'article',
    locale: 'en_CA',
    url: `${siteConfig.url}${SLUG}`,
    siteName: siteConfig.name,
    title: 'Shower Leak Repair Toronto | Shower Waterproofing | Diamond Tiling',
    description:
      'A Toronto shower leak located and repaired without extensive demolition — shower base reconstruction, PROVA-MAT waterproofing and new tile.',
    images: [
      {
        url: photos[2].src,
        width: 1219,
        height: 917,
        alt: photos[2].alt,
      },
    ],
  },
};

function Schema() {
  const url = `${siteConfig.url}${SLUG}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}/#article`,
        headline: 'Shower Leak Detection & Repair in Toronto, Ontario',
        description:
          'A persistent shower leak in Toronto located and repaired without extensive demolition of the surrounding bathroom, including shower base reconstruction, PROVA-MAT waterproofing and new tile.',
        url,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        inLanguage: 'en-CA',
        image: photos.map((photo) => `${siteConfig.url}${photo.src}`),
        author: { '@id': `${siteConfig.url}/#business` },
        publisher: { '@id': `${siteConfig.url}/#business` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        about: {
          '@type': 'Service',
          name: 'Shower Leak Repair & Waterproofing',
          serviceType: 'Shower leak detection, waterproofing and tile repair',
          provider: { '@id': `${siteConfig.url}/#business` },
          areaServed: siteConfig.serviceAreas.map((city) => ({ '@type': 'City', name: city })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: `${siteConfig.url}/portfolio`,
          },
          { '@type': 'ListItem', position: 3, name: 'Shower Leak Repair, Toronto', item: url },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ShowerLeakRepairCaseStudy() {
  return (
    <>
      <Schema />

      <PageHero
        eyebrow="Project Case Study"
        title="Shower Leak Detection & Repair in Toronto, Ontario"
        breadcrumb="Shower Leak Repair"
        description="A persistent shower leak that earlier attempts had failed to locate — found and repaired without extensive demolition of the surrounding bathroom."
      />

      {/* Section 1 + 2: the problem and the investigation */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="The Problem"
                title="A leak nobody could find"
                description="The homeowner had been experiencing a persistent shower leak that previous attempts had failed to locate. The source of the water intrusion was difficult to identify."
              />
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl leading-relaxed text-platinum-dim">
                  It is one of the more frustrating problems in a bathroom. Water appears where it
                  should not be, while the shower itself can look perfectly sound — tile intact,
                  grout in place, nothing obviously wrong on the surface. Until the assembly is
                  opened up, there is no way to see what is happening underneath it.
                </p>
              </Reveal>
            </div>

            <div>
              <SectionHeading
                eyebrow="The Investigation"
                title="Find the source before setting the scope"
                description="Diamond Tiling investigated the shower assembly to locate the source of the leak."
              />
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl leading-relaxed text-platinum-dim">
                  Rather than immediately recommending a complete bathroom demolition, we focused on
                  identifying the affected area and determining the appropriate repair. That order
                  matters: establishing where water was actually getting through is what made it
                  possible to keep the work contained to the shower floor instead of stripping out
                  the surrounding bathroom.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Chronological project gallery */}
      <section className="border-t border-white/10 bg-ink-soft py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Project Gallery"
            title="The repair, stage by stage"
            description="Photographs from this project in the order the work happened. Select any photo to enlarge it."
          />
          <div className="mt-12">
            <ProjectGallery images={photos} />
          </div>
        </div>
      </section>

      {/* Section 3: the repair process */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="The Repair Process"
            title="What the work involved"
            description="The shower floor was taken back to a sound base, waterproofed as a system, and rebuilt."
          />
          <ol className="mx-auto mt-12 max-w-3xl space-y-5">
            {steps.map((step, index) => (
              <Reveal key={step.title}>
                <li className="flex gap-5 rounded-2xl border border-white/10 bg-charcoal/40 p-6 sm:p-7">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-platinum-dim">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-3xl text-sm leading-relaxed text-platinum-dim">
              The waterproofing stage matters most and is the part nobody ever sees again. Tile and
              grout are not waterproof on their own — water moves through grout, and what protects
              the structure is the bonded membrane underneath. There is more on how we build wet
              areas on our{' '}
              <Link
                href="/services/waterproofing-systems"
                className="text-accent underline-offset-4 hover:underline"
              >
                waterproofing systems
              </Link>{' '}
              page, and on the finishing work on our{' '}
              <Link
                href="/services/tile-installation"
                className="text-accent underline-offset-4 hover:underline"
              >
                tile installation
              </Link>{' '}
              page.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section 4: the result */}
      <section className="border-t border-white/10 bg-ink-soft py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="The Result"
            title="Repaired without extensive demolition"
            description="We successfully located and addressed the source of the leak without extensive demolition of the surrounding bathroom."
          />
          <Reveal delay={0.1}>
            <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
              {outcomes.map((item) => {
                const IconComp = Icon[item.icon] || Icon.check;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-charcoal/40 p-6"
                  >
                    <IconComp width={20} height={20} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-platinum">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-10 max-w-3xl leading-relaxed text-platinum-dim">
              The affected shower floor was reconstructed with a new waterproofing installation and
              finished with professionally installed tile. Diamond Tiling carries out this work for
              homeowners and builders across{' '}
              <Link
                href="/service-areas/toronto"
                className="text-accent underline-offset-4 hover:underline"
              >
                Toronto
              </Link>{' '}
              and the wider GTA — there is more of our work in the{' '}
              <Link href="/portfolio" className="text-accent underline-offset-4 hover:underline">
                portfolio
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Related Services"
            title="Services used on this project"
            description="Most wet-area repairs draw on more than one of our specialities."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => {
              const IconComp = Icon[item.icon] || Icon.grid;
              return (
                <Reveal key={item.href}>
                  <Link
                    href={item.href}
                    className="group block h-full rounded-2xl border border-white/10 bg-charcoal/40 p-7 transition-colors hover:border-accent/40"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <IconComp width={22} height={22} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-platinum-dim">{item.text}</p>
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

      {/* Section 5: call to action */}
      <CTASection
        title="Dealing With a Shower Leak That Nobody Can Find?"
        description="Diamond Tiling provides professional shower leak investigation, shower waterproofing, tile repair and shower reconstruction throughout Toronto and the GTA."
      />
    </>
  );
}
