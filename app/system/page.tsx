"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { useHydratedReducedMotion } from '../../components/useHydratedReducedMotion';
import { ArrowRight, Compass, Layers3, Megaphone, Share2, Target } from 'lucide-react';
import { AnimatedTabs } from '../../components/AnimatedTabs';
import { Reveal, RevealItem, RevealStagger } from '../../components/Reveal';

const steps = [
  {
    key: 'position',
    label: 'Position',
    icon: Compass,
    body: 'We define your authority angle, ideal audience, and core message.',
    output: 'Clear positioning that makes you easier to trust.',
  },
  {
    key: 'package',
    label: 'Package',
    icon: Layers3,
    body: 'We turn your expertise into content pillars, stories, and offer messaging.',
    output: 'A content system that communicates your value.',
  },
  {
    key: 'publish',
    label: 'Publish',
    icon: Megaphone,
    body: 'We create strategic posts that build authority, not random noise.',
    output: 'Consistent content with a clear purpose.',
  },
  {
    key: 'distribute',
    label: 'Distribute',
    icon: Share2,
    body: 'We expand your reach through relevant comments, engagement, and conversations.',
    output: 'More visibility with the right audience.',
  },
  {
    key: 'convert',
    label: 'Convert',
    icon: Target,
    body: 'We turn attention into warm conversations and opportunities.',
    output: 'More meaningful business conversations.',
  },
] as const;

export default function SystemPage() {
  const shouldReduceMotion = useHydratedReducedMotion();
  const [tab, setTab] = useState<(typeof steps)[number]['key']>('position');

  const active = useMemo(() => steps.find((s) => s.key === tab) ?? steps[0], [tab]);
  const ActiveIcon = active.icon;

  return (
    <main className="bg-[#050506] text-[#F4F0E8]">
      <section className="relative overflow-hidden px-5 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,black,black_74%,transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-12 h-[260px] w-[760px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <Reveal className="mx-auto max-w-[900px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              OUR FRAMEWORK
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(44px,7vw,59px)] font-bold leading-[1.02] tracking-normal text-[#F4F0E8]">
              The system behind founder trust.
            </h1>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              A five-part system to turn your LinkedIn into a growth asset that compounds.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/free-audit"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[8px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Get My Free Founder Brand Audit
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-5 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
              >
                Book a Free Strategy Call
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>

          <Reveal className="mt-14 flex justify-center">
            <AnimatedTabs
              value={tab}
              onChange={(v) => setTab(v as typeof tab)}
              tabs={steps.map((s) => ({ value: s.key, label: s.label }))}
              ariaLabel="Founder Trust System steps"
            />
          </Reveal>

          <Reveal className="mt-10">
            <AnimatePresence mode="wait">
              <motion.article
                data-cursor="interactive"
                key={active.key}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.99 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: 'easeOut' }}
                className="relative mx-auto grid w-full max-w-[980px] gap-8 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,11,15,0.88)_42%,rgba(5,5,6,0.96))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8 lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[rgba(166,107,255,0.06)] blur-[110px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-6">
                    <span className="grid h-[56px] w-[56px] place-items-center rounded-[18px] border border-white/10 bg-[#101014] text-[#A66BFF] shadow-[0_16px_44px_rgba(0,0,0,0.26)]">
                      <ActiveIcon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-[12px] uppercase tracking-[0.18em] text-white/28">
                      {String(steps.findIndex((s) => s.key === active.key) + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="mt-7 text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#F4F0E8]">
                    {active.label}
                  </h2>
                  <p className="mt-4 max-w-[520px] text-[16px] leading-[1.72] text-[#A4A4AA]">{active.body}</p>
                </div>

                <div className="relative rounded-[18px] border border-white/10 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">Output</div>
                  <p className="mt-4 text-[16px] leading-[1.7] text-[#F4F0E8]">{active.output}</p>

                  <div className="mt-6 rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">
                      Why it compounds
                    </div>
                    <p className="mt-3 text-[15px] leading-[1.7] text-[#A4A4AA]">
                      Positioning, content, distribution, and conversion work as one system, not disconnected tactics.
                    </p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 pb-28 pt-6 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:110px_110px] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_88%,transparent)]" />
        <div className="relative mx-auto max-w-[1320px]">
          <Reveal className="mx-auto max-w-[920px] text-center">
            <p className="font-[family-name:var(--font-cormorant)] text-[clamp(28px,3.9vw,44px)] font-bold leading-[1.12] text-[#F4F0E8]">
              We don&apos;t chase vanity metrics.
              <br />
              We build trust that compounds.
            </p>
          </Reveal>

          <RevealStagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5" stagger={0.06}>
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <RevealItem
                  key={s.key}
                  className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,11,15,0.84))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-[12px] border border-white/10 bg-[#101014] text-[#A4A4AA]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-[12px] uppercase tracking-[0.18em] text-white/28">{s.label}</span>
                  </div>
                  <p className="mt-5 text-[14px] leading-[1.65] text-[#A4A4AA]">{s.output}</p>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
