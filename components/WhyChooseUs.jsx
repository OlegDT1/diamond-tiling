import SectionHeading from './SectionHeading';
import { Stagger, StaggerItem } from './Reveal';
import { whyChooseUs } from '@/lib/data';
import Icon from './Icons';

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink-soft py-24 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="container-px relative">
        <SectionHeading
          align="center"
          eyebrow="Why Diamond Tiling"
          title="The difference is in the details"
          description="Builders and homeowners choose us because we treat every project like a custom home — meticulous, accountable and built to outlast trends."
        />

        <Stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const IconComp = Icon[item.icon] || Icon.diamond;
            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-2xl border border-white/10 bg-charcoal/40 p-8 transition-colors duration-300 hover:border-accent/40">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <IconComp width={24} height={24} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-platinum-dim">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
