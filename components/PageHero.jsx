import Link from 'next/link';
import Reveal from './Reveal';
import Icon from './Icons';

export default function PageHero({ eyebrow, title, description, breadcrumb }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink pt-20 lg:pt-28">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden />
      <div className="container-px relative py-20 sm:py-24">
        <Reveal>
          <nav className="flex items-center gap-2 text-xs text-platinum-dim" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <Icon.arrow width={12} height={12} className="text-white/30" />
            <span className="text-platinum">{breadcrumb || title}</span>
          </nav>
        </Reveal>

        {eyebrow ? (
          <Reveal delay={0.05}>
            <span className="eyebrow mt-6">
              <span className="h-px w-6 bg-accent" aria-hidden />
              {eyebrow}
            </span>
          </Reveal>
        ) : null}

        <Reveal delay={0.1}>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>

        {description ? (
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-platinum-dim">{description}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
