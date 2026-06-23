'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { videos } from '@/lib/data';
import SectionHeading from './SectionHeading';
import Icon from './Icons';

const filters = [
  { slug: 'all', label: 'All Videos' },
  { slug: 'reveal', label: 'Finished Reveals' },
  { slug: 'process', label: 'On the Job' },
];

function PlayBadge({ size = 'md' }) {
  const dim = size === 'lg' ? 'h-16 w-16' : 'h-12 w-12';
  return (
    <span
      className={`inline-flex ${dim} items-center justify-center rounded-full border border-white/30 bg-ink/40 backdrop-blur-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent`}
    >
      <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-white transition-colors group-hover:fill-ink">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export default function VideoGallery({
  eyebrow = 'Video Gallery',
  title = 'See our work in motion',
  description = 'Real walkthroughs and on-the-job footage from Diamond Tiling projects across Toronto & the GTA.',
}) {
  const [active, setActive] = useState('all');
  const [current, setCurrent] = useState(null);

  const list = active === 'all' ? videos : videos.filter((v) => v.kind === active);

  useEffect(() => {
    document.body.style.overflow = current ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [current]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setCurrent(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading align="center" eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => {
            const isActive = active === f.slug;
            return (
              <button
                key={f.slug}
                type="button"
                onClick={() => setActive(f.slug)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-accent bg-accent text-ink'
                    : 'border-white/15 text-platinum hover:border-accent/50 hover:text-white'
                }`}
                aria-pressed={isActive}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((video) => (
              <motion.button
                key={video.slug}
                layout
                type="button"
                onClick={() => setCurrent(video)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-charcoal text-left"
                aria-label={`Play ${video.title}`}
              >
                <Image
                  src={video.poster}
                  alt={`${video.title} — Diamond Tiling`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" aria-hidden />
                <span className="absolute inset-0 flex items-center justify-center">
                  <PlayBadge />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="inline-flex rounded-full border border-white/20 bg-ink/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur">
                    {video.kind === 'reveal' ? 'Reveal' : 'On the Job'}
                  </span>
                  <span className="mt-2 block text-sm font-semibold text-white">{video.title}</span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
            onClick={() => setCurrent(null)}
          >
            <button
              type="button"
              onClick={() => setCurrent(null)}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
              aria-label="Close video"
            >
              <Icon.close width={22} height={22} />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[88vh] w-auto overflow-hidden rounded-2xl border border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                playsInline
                className="max-h-[88vh] w-auto max-w-[94vw] sm:max-w-[440px]"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
