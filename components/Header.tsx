"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: 'System', href: '/system' },
  { label: 'Services', href: '/services' },
  { label: 'Samples', href: '/samples' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

export function Header() {
  const shouldReduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  const overlayMotion = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' as const },
    }),
    [shouldReduceMotion],
  );

  const panelMotion = useMemo(
    () => ({
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: shouldReduceMotion ? 0 : 0.24, ease: 'easeOut' as const },
    }),
    [shouldReduceMotion],
  );

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  // Prevent background scrolling when menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-[rgba(255,255,255,0.08)] bg-[#050506]/92 backdrop-blur">
      <div className="mx-auto flex h-full w-full max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506]"
          aria-label="Pitch Bhai home"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/PitchBhaiLogoIcon.svg"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9 shrink-0 rounded-[8px]"
            aria-hidden="true"
          />
          <span className="truncate text-sm font-semibold text-[#F4F0E8] sm:text-[15px]">Pitch Bhai</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative rounded-[6px] text-sm font-medium text-[#B8B8BE] transition-colors duration-200 hover:text-[#F4F0E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none after:absolute after:left-0 after:top-[calc(100%+6px)] after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,rgba(166,107,255,0.82),rgba(244,240,232,0.8))] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="group hidden h-[42px] shrink-0 items-center justify-center gap-2 rounded-[8px] bg-[#F4F0E8] px-4 text-sm font-semibold text-[#050506] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] sm:inline-flex motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <span className="hidden sm:inline">Book a Free Strategy Call</span>
            <span className="sm:hidden">Book Call</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Link>

          <Link
            href="/contact"
            className="group inline-flex h-[42px] shrink-0 items-center justify-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.03] px-3 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] sm:hidden motion-reduce:transition-none"
          >
            Book Call
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-[42px] w-[42px] place-items-center rounded-[10px] border border-white/10 bg-white/[0.03] text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] md:hidden motion-reduce:transition-none"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            {...overlayMotion}
            className="fixed inset-0 z-50 bg-black/55 px-4 pt-[84px] md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              {...panelMotion}
              className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[18px] border border-white/10 bg-[#0B0B0F]/92 shadow-[0_30px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-b border-white/8 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Navigation</p>
              </div>

              <nav className="p-2" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-[14px] px-4 py-3 text-[15px] font-medium text-[#F4F0E8] transition hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF]/60 motion-reduce:transition-none"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4 text-[#A66BFF]" aria-hidden="true" />
                  </Link>
                ))}
              </nav>

              <div className="border-t border-white/8 p-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="group inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-[10px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  Book a Free Strategy Call
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
