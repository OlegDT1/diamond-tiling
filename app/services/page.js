import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ProcessTimeline from '@/components/ProcessTimeline';
import CTASection from '@/components/CTASection';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icons';
import { services } from '@/lib/data';

export const metadata = {
  title: 'Tile Installation Services in Toronto & GTA',
  description:
    'Explore Diamond Tiling’s services: tile installation, bathroom renovations, porcelain slab installation, heated floors, waterproofing, custom showers, backsplashes and large format tile across Toronto & the GTA.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete tile & wet-area expertise"
        description="One specialist team for the full scope — from a single backsplash to a whole-home tile package. Every service is delivered to a custom-home standard."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px space-y-20 sm:space-y-28">
          {services.map((service, index) => {
            const IconComp = Icon[service.icon] || Icon.grid;
            const reversed = index % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={reversed ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    {service.video ? (
                      <video
                        className="aspect-[4/3] h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={service.poster}
                        aria-label={`${service.title} by Diamond Tiling in Toronto & the GTA`}
                      >
                        <source src={service.video} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={service.image}
                        alt={`${service.title} by Diamond Tiling in Toronto & the GTA`}
                        width={720}
                        height={540}
                        className="aspect-[4/3] h-full w-full object-cover"
                        unoptimized={service.image.endsWith('.svg')}
                      />
                    )}
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={reversed ? 'lg:order-1' : ''}>
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-charcoal text-accent">
                      <IconComp width={24} height={24} />
                    </span>
                    <h2 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-platinum-dim">{service.description}</p>
                    <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm text-platinum">
                          <Icon.check width={18} height={18} className="shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-secondary mt-8">
                      Request a Quote
                      <Icon.arrow width={16} height={16} />
                    </Link>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <ProcessTimeline />
      <CTASection />
    </>
  );
}
