import Image from 'next/image';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ProcessTimeline from '@/components/ProcessTimeline';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import Icon from '@/components/Icons';
import { siteConfig } from '@/lib/site';
import { craftImage } from '@/lib/data';

export const metadata = {
  title: 'About Diamond Tiling | Toronto Tile Contractor',
  description:
    'Learn about Diamond Tiling — a Toronto tile contractor delivering custom-home quality tile installation, waterproofing and bathroom renovations across the GTA for over 15 years.',
  alternates: { canonical: '/about' },
};

const values = [
  {
    title: 'Craftsmanship First',
    description: 'We would rather do it once and do it right. Precision is our default, not an upgrade.',
    icon: 'diamond',
  },
  {
    title: 'Built to Last',
    description: 'Proper substrates and certified waterproofing mean our work performs for decades.',
    icon: 'shield',
  },
  {
    title: 'Honest & Accountable',
    description: 'Clear quotes, tidy sites and straight answers. We treat your home like our own.',
    icon: 'badge',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Toronto’s detail-obsessed tile specialists"
        description="Diamond Tiling was founded on a simple belief: tile, done properly, is one of the most beautiful and durable finishes in any home. We bring that conviction to every project across the GTA."
      />

      <section className="py-24 sm:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={craftImage}
                alt="Luxury marble shower with gold accents by Diamond Tiling in a Toronto custom home"
                width={720}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A custom-home standard, on every job"
              description="What began as a single skilled installer has grown into a trusted GTA crew known for flawless large-format and porcelain slab work."
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-platinum-dim">
                <p>
                  For more than 15 years we have specialised in the work other trades find difficult —
                  oversized porcelain slabs, curbless wet rooms, intricate niches and dead-level heated
                  floors. It is exacting work, and it is exactly what we love.
                </p>
                <p>
                  Today, custom home builders and general contractors across {siteConfig.address.city}{' '}
                  and the GTA rely on us as their tile partner, while homeowners trust us with the
                  spaces they use every single day. Whatever the scope, the standard never changes.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-10 grid gap-5 sm:grid-cols-3">
              {values.map((value) => {
                const IconComp = Icon[value.icon] || Icon.diamond;
                return (
                  <StaggerItem key={value.title}>
                    <div className="h-full rounded-2xl border border-white/10 bg-charcoal/40 p-5">
                      <IconComp width={22} height={22} className="text-accent" />
                      <h3 className="mt-3 text-sm font-semibold text-white">{value.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-platinum-dim">
                        {value.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <WhyChooseUs />
      <CTASection
        title="Let’s talk about your project"
        description="Whether you are renovating a single bathroom or tiling an entire custom home, we would love to help. Reach out for a transparent quote."
      />
    </>
  );
}
