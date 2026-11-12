'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icons';

// Chronological project gallery with an accessible lightbox.
// Tiles use a fixed ratio so mixed portrait/landscape photos align on a grid;
// the lightbox shows each photo uncropped.
export default function ProjectGallery({ images = [], ratio = 'aspect-[4/3]' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  if (!images.length) return null;
  const active = isOpen ? images[openIndex] : null;

  return (
    <>
      <ol className="grid gap-6 sm:grid-cols-2">
        {images.map((img, i) => (
          <li key={img.src}>
            <figure className="h-full">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Enlarge photo ${i + 1}: ${img.caption}`}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-charcoal/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <div className={`relative w-full ${ratio}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    priority={i === 0}
                    loading={i === 0 ? undefined : 'lazy'}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-ink/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent backdrop-blur-sm">
                  Step {i + 1}
                </span>
                <span
                  className="absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                >
                  <Icon.expand width={16} height={16} />
                </span>
              </button>
              <figcaption className="mt-4">
                <h3 className="text-base font-semibold text-white">{img.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-platinum-dim">{img.caption}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ol>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
            onClick={close}
          >
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Step {openIndex + 1} of {images.length}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close photo viewer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <Icon.close width={20} height={20} />
              </button>
            </div>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              {images.length > 1 ? (
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white transition-colors hover:border-accent hover:text-accent sm:left-5"
                >
                  <Icon.arrow width={18} height={18} className="rotate-180" />
                </button>
              ) : null}

              <motion.div
                key={active.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.22 }}
                className="relative h-full w-full"
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>

              {images.length > 1 ? (
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white transition-colors hover:border-accent hover:text-accent sm:right-5"
                >
                  <Icon.arrow width={18} height={18} />
                </button>
              ) : null}
            </div>

            <div className="px-5 pb-8 pt-4 text-center sm:px-8" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-base font-semibold text-white">{active.title}</h3>
              <p className="mx-auto mt-1.5 max-w-2xl text-sm leading-relaxed text-platinum-dim">
                {active.caption}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
