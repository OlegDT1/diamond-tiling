'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { transformations } from '@/lib/data';

function BeforeAfterSlider({ item }) {
  const containerRef = useRef(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(50);

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (!draggingRef.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(clientX);
    };
    const up = () => {
      draggingRef.current = false;
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
  }, [setFromClientX]);

  const start = (e) => {
    draggingRef.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setFromClientX(clientX);
  };

  return (
    <div>
      <div
        ref={containerRef}
        onPointerDown={start}
        onTouchStart={start}
        className="group relative aspect-[4/5] cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-white/10"
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-label={`${item.title} before and after comparison`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4));
          if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4));
        }}
      >
        {/* After (full) */}
        <Image
          src={item.after}
          alt={`${item.title} — after`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Before (clipped to slider position) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image
            src={item.before}
            alt={`${item.title} — before`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/20 bg-ink/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full border border-accent/40 bg-ink/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur">
          After
        </span>

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-ink text-accent shadow-lg">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M9 7l-5 5 5 5V7zm6 0v10l5-5-5-5z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="mt-5">
        <span className="eyebrow">
          <span className="h-px w-6 bg-accent" aria-hidden />
          {item.category}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-platinum-dim">{item.caption}</p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="Before & After"
          title="Watch the transformation"
          description="Drag the slider to reveal how Diamond Tiling turns a bare, properly-prepped space into a flawless finished surface."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2">
          {transformations.map((item) => (
            <Reveal key={item.title}>
              <BeforeAfterSlider item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
