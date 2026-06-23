'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { categories, projects } from '@/lib/data';

export default function PortfolioGallery() {
  const [active, setActive] = useState('all');
  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-20 sm:py-24">
      <div className="container-px">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => {
            const isActive = active === category.slug;
            return (
              <button
                key={category.slug}
                type="button"
                onClick={() => setActive(category.slug)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-accent bg-accent text-ink'
                    : 'border-white/15 text-platinum hover:border-accent/50 hover:text-white'
                }`}
                aria-pressed={isActive}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} priority={i < 3} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-platinum-dim">No projects in this category yet.</p>
        ) : null}
      </div>
    </section>
  );
}
