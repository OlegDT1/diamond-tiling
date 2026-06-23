import SectionHeading from './SectionHeading';
import { Stagger, StaggerItem } from './Reveal';
import { process } from '@/lib/data';

export default function ProcessTimeline() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="Our Process"
          title="A clear path from quote to finished space"
          description="No surprises, no mess left behind. Four straightforward steps that keep your project on track and on budget."
        />

        <Stagger className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <StaggerItem key={item.step}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-charcoal/40 p-7">
                <span className="font-display text-5xl font-semibold text-accent/30">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-platinum-dim">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
