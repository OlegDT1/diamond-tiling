import Link from 'next/link';
import { navLinks, siteConfig } from '@/lib/site';
import { services } from '@/lib/data';
import { serviceAreas } from '@/lib/areas';
import Logo from './Logo';
import Icon from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-ink-soft">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-platinum-dim">
              Premium tile installation, custom showers and bathroom renovations for discerning
              homeowners, builders and contractors across Toronto &amp; the GTA.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-platinum-dim transition-colors hover:border-accent hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.instagram width={18} height={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-platinum-dim transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-platinum-dim transition-colors hover:text-accent"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-3 text-platinum-dim transition-colors hover:text-accent"
                >
                  <Icon.phone width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="flex items-start gap-3 text-platinum-dim transition-colors hover:text-accent"
                >
                  <Icon.mail width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-platinum-dim">
                <Icon.pin width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.region}{' '}
                  {siteConfig.address.postalCode}
                </span>
              </li>
              <li className="flex items-start gap-3 text-platinum-dim">
                <Icon.clock width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 hairline" />

        <div className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Service Areas
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="text-sm text-platinum-dim transition-colors hover:text-accent"
                >
                  Tile Installation {area.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 hairline" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-platinum-dim sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Tile Installer Toronto · Bathroom Renovations · Porcelain Slabs · Tile Contractor GTA
          </p>
        </div>
      </div>
    </footer>
  );
}
