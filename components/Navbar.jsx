'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, siteConfig } from '@/lib/site';
import Logo from './Logo';
import Icon from './Icons';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between lg:h-28" aria-label="Primary">
        <Link href="/" className="relative z-10" aria-label={`${siteConfig.name} home`}>
          <Logo className="h-14 w-auto lg:h-20" />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`link-underline text-sm font-medium transition-colors ${
                    active ? 'text-accent' : 'text-platinum hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.phoneHref}
            aria-label={`Call Diamond Tiling at ${siteConfig.phoneDisplay}`}
            className="group flex items-center gap-2.5"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink">
              <Icon.phone width={16} height={16} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-medium uppercase tracking-widest text-platinum-dim">
                Call Now
              </span>
              <span className="text-[15px] font-semibold text-white transition-colors duration-300 group-hover:text-accent">
                {siteConfig.phoneDisplay}
              </span>
            </span>
          </a>
          <Link href="/contact" className="btn-primary !px-5 !py-2.5">
            Request a Quote
          </Link>
        </div>

        <div className="relative z-10 flex items-center gap-2 lg:hidden">
          <a
            href={siteConfig.phoneHref}
            aria-label={`Call Diamond Tiling at ${siteConfig.phoneDisplay}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-ink shadow-[0_6px_20px_-6px_rgba(200,163,91,0.7)]"
          >
            <Icon.phone width={18} height={18} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <Icon.close width={20} height={20} /> : <Icon.menu width={20} height={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-px flex flex-col gap-1 pb-6 pt-2">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      active ? 'bg-white/5 text-accent' : 'text-platinum hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-3 flex flex-col gap-3">
                <a href={siteConfig.phoneHref} className="btn-secondary w-full">
                  <Icon.phone width={16} height={16} />
                  Call {siteConfig.phoneDisplay}
                </a>
                <Link href="/contact" className="btn-primary w-full">
                  Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
