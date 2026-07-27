import { Stagger, StaggerItem } from './Reveal';

// Keep every figure here factually defensible — these are public claims.
const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '600+', label: 'Projects Completed' },
  { value: 'Free', label: 'On-Site Quotes' },
  { value: '100%', label: 'Waterproofing Warranty' },
];

export default function StatsBand() {
  return (
    <section className="border-y border-white/10 bg-charcoal/40">
      <div className="container-px py-12">
        <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="font-display text-4xl font-semibold text-white sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-widest text-platinum-dim sm:text-sm">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
