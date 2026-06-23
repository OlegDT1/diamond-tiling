import Link from 'next/link';
import Icon from './Icons';

export default function ServiceCard({ service }) {
  const IconComp = Icon[service.icon] || Icon.grid;
  return (
    <Link
      href="/services"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-charcoal-light/60"
    >
      <span
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-ink text-accent transition-colors duration-300 group-hover:border-accent/40">
        <IconComp width={24} height={24} />
      </span>
      <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-platinum-dim">{service.short}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
        Learn more
        <Icon.arrow
          width={16}
          height={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
