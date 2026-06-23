'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from './Icons';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const trustIndicators = [
  'WSIB Insured',
  'Certified Waterproofing',
  '5-Star Client Reviews',
  'Serving Toronto & GTA',
];

// Image natural size: 1942 × 809 → aspect ratio ~2.4 : 1
const ASPECT = (809 / 1942) * 100; // 41.66 %

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink lg:min-h-[100svh]">

      {/* ═══════════════════════════════════════════════════════════════
          MOBILE  (< lg)  —  image flows in the document, text below
          ═══════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden">
        {/* Nav clearance + image at natural aspect ratio */}
        <div className="relative pt-20">
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingBottom: `${ASPECT}%`, minHeight: '45vmin' }}
          >
            <Image
              src="/media/photos/hero-spa-sauna.jpg"
              alt="Diamond Tiling luxury spa bathroom with sauna and walk-in shower"
              fill
              priority
              quality={90}
              sizes="100vw"
              style={{ objectFit: 'contain', objectPosition: 'center center' }}
            />
            {/* Bottom fade into text panel */}
            <div
              className="absolute inset-x-0 bottom-0 h-20"
              style={{ background: 'linear-gradient(to top, #0a0a0a, transparent)' }}
              aria-hidden
            />
          </div>
        </div>

        {/* Text panel */}
        <div className="container-px bg-ink py-10">
          <MobileText />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          DESKTOP  (lg+)  —  full-viewport hero, image on right, text on left
          ═══════════════════════════════════════════════════════════════ */}

      {/*  Image — shifted 10 % to the right so the frame reveals more of the
          shower + vanity on the left and clips a sliver of the sauna on the right.
          No scale change = no zoom. The exposed left strip is the ink background. */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{ transform: 'translateX(10%)' }}
        aria-hidden
      >
        <Image
          src="/media/photos/hero-spa-sauna.jpg"
          alt="Diamond Tiling luxury spa bathroom with sauna and walk-in shower — Toronto custom tile installation"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: 'contain', objectPosition: 'center center' }}
        />
      </div>

      {/* Gradient overlays — ink fades to transparent so image reads clearly on right */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(to right, rgba(10,10,10,1) 0%, rgba(10,10,10,0.90) 16%, rgba(10,10,10,0.35) 38%, transparent 56%)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 hidden h-36 lg:block"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), transparent)' }}
        aria-hidden
      />

      {/* Desktop text
          · min-h-[100svh] makes this div drive the section height
          · justify-center + pt-28 keeps the block centred in the viewport AND below the fixed nav */}
      <div className="container-px relative z-10 hidden min-h-[100svh] flex-col justify-center pt-28 lg:flex">
        <div className="max-w-lg pb-16">
          <DesktopText />
        </div>
      </div>
    </section>
  );
}

/* ─── Shared text blocks ──────────────────────────────────────────────────── */

function DesktopText() {
  return (
    <>
      <motion.span variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow">
        <span className="h-px w-8 bg-accent" aria-hidden />
        Toronto &amp; GTA • Tile &amp; Renovation Specialists
      </motion.span>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[4.25rem]"
      >
        Luxury Tile Installation &amp;{' '}
        <span className="bg-gradient-to-r from-accent-soft to-accent bg-clip-text text-transparent">
          Bathroom Renovations
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="mt-7 max-w-sm text-lg leading-relaxed text-platinum"
      >
        Custom bathrooms, porcelain slabs, heated floors, waterproofing, and premium tile
        craftsmanship throughout Toronto and the GTA.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
      >
        <Link href="/contact" className="btn-primary text-base">
          Request a Quote
          <Icon.arrow width={18} height={18} />
        </Link>
        <Link href="/portfolio" className="btn-secondary text-base">
          View Our Work
          <Icon.arrow width={18} height={18} />
        </Link>
      </motion.div>

      <motion.ul
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:gap-x-7"
      >
        {trustIndicators.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm font-medium text-platinum">
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Icon.check width={13} height={13} />
            </span>
            {item}
          </li>
        ))}
      </motion.ul>
    </>
  );
}

function MobileText() {
  return (
    <>
      <span className="eyebrow">
        <span className="h-px w-8 bg-accent" aria-hidden />
        Toronto &amp; GTA • Tile &amp; Renovation Specialists
      </span>

      <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05]">
        Luxury Tile Installation &amp;{' '}
        <span className="bg-gradient-to-r from-accent-soft to-accent bg-clip-text text-transparent">
          Bathroom Renovations
        </span>
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-platinum">
        Custom bathrooms, porcelain slabs, heated floors, waterproofing, and premium tile
        craftsmanship throughout Toronto and the GTA.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <Link href="/contact" className="btn-primary text-base">
          Request a Quote
          <Icon.arrow width={18} height={18} />
        </Link>
        <Link href="/portfolio" className="btn-secondary text-base">
          View Our Work
          <Icon.arrow width={18} height={18} />
        </Link>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
        {trustIndicators.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm font-medium text-platinum">
            <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Icon.check width={13} height={13} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
