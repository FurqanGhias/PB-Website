"use client";

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { clamp, wrap } from 'popmotion';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Scenario = {
  title: 'SaaS Founder' | 'Agency Owner' | 'Consultant' | 'Coach';
  badge: string;
  subtitle: string;
  pills: [string, string, string];
  accent: string;
  gradient: string;
  tint: string;
};

const scenarios: Scenario[] = [
  {
    title: 'SaaS Founder',
    badge: 'Founder Brand Scenario',
    subtitle: 'Turn product expertise into trusted authority.',
    pills: ['Clear positioning', 'Technical insights', 'Founder-led trust'],
    accent: '#A66BFF',
    gradient: 'linear-gradient(135deg, #211736 0%, #101014 50%, #050506 100%)',
    tint: 'rgba(166,107,255,0.10)',
  },
  {
    title: 'Agency Owner',
    badge: 'Founder Brand Scenario',
    subtitle: 'Make your expertise visible before the first call.',
    pills: ['Service authority', 'Case-led content', 'Better conversations'],
    accent: '#72DA83',
    gradient: 'linear-gradient(135deg, #15301e 0%, #101014 52%, #050506 100%)',
    tint: 'rgba(114,218,131,0.10)',
  },
  {
    title: 'Consultant',
    badge: 'Founder Brand Scenario',
    subtitle: 'Package your thinking so buyers understand your value.',
    pills: ['Point of view', 'Offer clarity', 'Trust signals'],
    accent: '#F4F0E8',
    gradient: 'linear-gradient(135deg, #25231f 0%, #101014 50%, #050506 100%)',
    tint: 'rgba(244,240,232,0.08)',
  },
  {
    title: 'Coach',
    badge: 'Founder Brand Scenario',
    subtitle: 'Build credibility without sounding generic or motivational.',
    pills: ['Audience clarity', 'Story-based trust', 'Premium positioning'],
    accent: '#A66BFF',
    gradient: 'linear-gradient(135deg, #1f1832 0%, #101014 50%, #050506 100%)',
    tint: 'rgba(166,107,255,0.09)',
  },
];

export function FounderScenarioCarousel({ className = '' }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const safeIndex = useMemo(() => clamp(0, scenarios.length - 1, index), [index]);
  const prevIndex = wrap(0, scenarios.length, safeIndex - 1);
  const nextIndex = wrap(0, scenarios.length, safeIndex + 1);
  const active = scenarios[safeIndex];

  const setPrev = () => setIndex((i) => wrap(0, scenarios.length, i - 1));
  const setNext = () => setIndex((i) => wrap(0, scenarios.length, i + 1));

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (paused) return;
    const t = window.setInterval(() => {
      setIndex((i) => wrap(0, scenarios.length, i + 1));
    }, 4500);
    return () => window.clearInterval(t);
  }, [paused, shouldReduceMotion]);

  const stack = [
    {
      key: `prev-${scenarios[prevIndex].title}`,
      scenario: scenarios[prevIndex],
      style: { x: -34, y: 16, scale: 0.94, rotate: -4, opacity: 0.38 },
      z: 10,
    },
    {
      key: `active-${active.title}`,
      scenario: active,
      style: { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 },
      z: 20,
    },
    {
      key: `next-${scenarios[nextIndex].title}`,
      scenario: scenarios[nextIndex],
      style: { x: 34, y: 16, scale: 0.94, rotate: 4, opacity: 0.34 },
      z: 10,
    },
  ] as const;

  return (
    <section
      className={`relative ${className}`.trim()}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Founder Brand Scenarios</p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={setPrev}
            aria-label="Previous scenario"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={setNext}
            aria-label="Next scenario"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="relative mt-8 h-[320px] w-full">
        <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,#0B0B0F,#050506)]" />

        <div className="absolute inset-0 grid place-items-center">
          <AnimatePresence initial={false}>
            {stack.map(({ key, scenario, style, z }) => (
              <motion.div
                key={key}
                initial={false}
                animate={style}
                transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: 'easeOut' }}
                className="absolute w-[min(560px,92%)]"
                style={{ zIndex: z }}
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : scenario.title === active.title
                        ? { y: -4, scale: 1.01 }
                        : undefined
                  }
                  transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
                  className="group relative overflow-hidden rounded-[22px] border border-white/10 p-6 shadow-[0_26px_70px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.06)]"
                  style={{ background: scenario.gradient }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                  <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full blur-[110px]" style={{ background: scenario.tint }} />

                  <div className="relative flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A4A4AA]">
                      <span className="h-2 w-2 rounded-full" style={{ background: scenario.accent }} aria-hidden="true" />
                      {scenario.badge}
                    </span>

                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
                      <Image src="/founder-avatar.jpg" alt="Founder avatar" fill sizes="40px" className="object-cover" />
                    </div>
                  </div>

                  <div className="relative mt-6">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-[34px] font-bold leading-[1.02] tracking-[-0.03em] text-[#F4F0E8]">
                      {scenario.title}
                    </h3>
                    <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#A4A4AA]">{scenario.subtitle}</p>
                  </div>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {scenario.pills.map((pill) => (
                      <span
                        key={pill}
                        className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[12px] font-medium text-[#F4F0E8]/88"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" aria-label="Scenario selection">
        {scenarios.map((item, i) => {
          const isActive = i === safeIndex;
          return (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full border transition ${
                isActive ? 'border-[#A66BFF]/50 bg-[#A66BFF]' : 'border-white/12 bg-white/10 hover:border-white/18'
              } motion-reduce:transition-none`}
            />
          );
        })}
      </div>
    </section>
  );
}
