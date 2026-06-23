import Link from 'next/link';
import Reveal from './Reveal';
import { siteConfig } from '@/lib/site';
import Icon from './Icons';

export default function CTASection({
  title = 'Ready to build something flawless?',
  description = 'Tell us about your project and we will provide a clear, transparent quote. No pressure — just expert advice from Toronto’s tile specialists.',
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div className="absolute inset-0 bg-radial-fade" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="container-px relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-charcoal-light/80 to-charcoal/40 px-8 py-16 text-center sm:px-16">
            <span className="eyebrow justify-center">
              <span className="h-px w-6 bg-accent" aria-hidden />
              Request a Quote
              <span className="h-px w-6 bg-accent" aria-hidden />
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-platinum-dim sm:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Request a Quote
                <Icon.arrow width={18} height={18} />
              </Link>
              <a href={siteConfig.phoneHref} className="btn-secondary text-base">
                <Icon.phone width={18} height={18} />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
