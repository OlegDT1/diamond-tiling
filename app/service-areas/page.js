import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import { serviceAreas } from '@/lib/areas';
import { siteConfig } from '@/lib/site';

export const metadata = {
  title: 'Service Areas | Tile Installation Across Toronto & the GTA',
  description:
    'Diamond Tiling provides premium tile installation, custom showers and bathroom renovations across Toronto and the GTA — including Richmond Hill, Vaughan, Markham, Mississauga, Oakville and more.',
  alternates: { canonical: '/service-areas' },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        title="Tile installation across Toronto & the GTA"
        breadcrumb="Service Areas"
        description="From downtown Toronto condos to estate homes across the suburbs, Diamond Tiling brings custom-home craftsmanship to communities throughout the Greater Toronto Area. Find your city below."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Reveal key={area.slug}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-charcoal p-7 transition-colors hover:border-accent/50"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink text-accent">
                    <Icon.pin width={20} height={20} />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold text-white">
                    {area.city}, {area.region}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-platinum-dim">
                    {area.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Tile installation in {area.city}
                    <Icon.arrow
                      width={16}
                      height={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-12 max-w-2xl text-sm leading-relaxed text-platinum-dim">
              Don’t see your community listed? We serve the entire Greater Toronto Area. Call{' '}
              <a href={siteConfig.phoneHref} className="text-accent hover:underline">
                {siteConfig.phone}
              </a>{' '}
              and we’ll let you know if your project is in range.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
