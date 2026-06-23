import Image from 'next/image';
import { categories } from '@/lib/data';

export default function ProjectCard({ project, priority = false }) {
  const category = categories.find((c) => c.slug === project.category);
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} — ${category?.label || 'tile project'} in ${project.location}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority={priority}
          unoptimized={project.image.endsWith('.svg')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" aria-hidden />
      </div>

      <figcaption className="absolute inset-x-0 bottom-0 p-6">
        {category ? (
          <span className="inline-flex rounded-full border border-white/20 bg-ink/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent backdrop-blur">
            {category.label}
          </span>
        ) : null}
        <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-platinum-dim">{project.location}</p>
        <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-platinum-dim opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
          {project.blurb}
        </p>
      </figcaption>
    </figure>
  );
}
