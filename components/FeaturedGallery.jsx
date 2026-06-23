import Link from 'next/link';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { Stagger, StaggerItem } from './Reveal';
import { projects } from '@/lib/data';
import Icon from './Icons';

export default function FeaturedGallery({ limit = 6 }) {
  const featured = projects.slice(0, limit);
  return (
    <section className="py-24 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured Work"
            title="Recent projects across the GTA"
            description="A glimpse of the craftsmanship we bring to every bathroom, shower and feature wall — from Forest Hill to Oakville."
          />
          <Link href="/portfolio" className="btn-ghost shrink-0">
            View full portfolio
            <Icon.arrow width={16} height={16} />
          </Link>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} priority={i < 3} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
