import Link from 'next/link';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import { Stagger, StaggerItem } from './Reveal';
import { services } from '@/lib/data';
import Icon from './Icons';

export default function ServicesOverview({ limit }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Tile & renovation services built to last"
            description="A complete tile and wet-area scope under one roof — from full bathroom renovations to oversized porcelain slabs and radiant heated floors."
          />
          <Link href="/services" className="btn-ghost shrink-0">
            View all services
            <Icon.arrow width={16} height={16} />
          </Link>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
