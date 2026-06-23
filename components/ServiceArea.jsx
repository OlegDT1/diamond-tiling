import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { siteConfig } from '@/lib/site';
import Icon from './Icons';

export default function ServiceArea() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Service Area"
              title="Proudly serving Toronto & the GTA"
              description="From downtown condos to estate homes in the suburbs, our crews work across the Greater Toronto Area. If your project is nearby, we would love to take a look."
            />

            <Reveal delay={0.1}>
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                {siteConfig.serviceAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-platinum">
                    <Icon.pin width={16} height={16} className="shrink-0 text-accent" />
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <a href={siteConfig.phoneHref} className="btn-primary mt-10">
                <Icon.phone width={18} height={18} />
                Call {siteConfig.phone}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title={`${siteConfig.name} service area map — Toronto & GTA`}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-79.85%2C43.45%2C-79.10%2C43.95&layer=mapnik&marker=43.6489%2C-79.3835"
                className="h-[420px] w-full grayscale-[0.3]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
