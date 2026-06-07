"use client";

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { clamp, wrap } from 'popmotion';
import { AnimatePresence, motion, type PanInfo } from 'motion/react';
import { useHydratedReducedMotion } from './useHydratedReducedMotion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

type Scenario = {
  title: string;
  perspective: string;
  pills: [string, string, string];
  accent: string;
  gradient: string;
  tint: string;
};

const scenarios: Scenario[] = [
  {
    title: 'SaaS Founder',
    perspective:
      'I can explain the product for an hour, but my profile still makes the work sound smaller and more generic than it really is.',
    pills: ['Clear positioning', 'Technical insights', 'Founder-led trust'],
    accent: '#A66BFF',
    gradient: 'linear-gradient(135deg, #211736 0%, #101014 50%, #050506 100%)',
    tint: 'rgba(166,107,255,0.12)',
  },
  {
    title: 'Agency Owner',
    perspective:
      'Most prospects only understand our value after the first call. I want the content to do more of that trust-building before we meet.',
    pills: ['Service authority', 'Case-led content', 'Better conversations'],
    accent: '#72DA83',
    gradient: 'linear-gradient(135deg, #15301e 0%, #101014 52%, #050506 100%)',
    tint: 'rgba(114,218,131,0.10)',
  },
  {
    title: 'Independent Consultant',
    perspective:
      'My best thinking lives inside client work and private conversations. Buyers cannot value an approach they never get to see.',
    pills: ['Point of view', 'Offer clarity', 'Trust signals'],
    accent: '#F4F0E8',
    gradient: 'linear-gradient(135deg, #25231f 0%, #101014 50%, #050506 100%)',
    tint: 'rgba(244,240,232,0.08)',
  },
  {
    title: 'Executive Coach',
    perspective:
      'I do not want louder motivational content. I want a thoughtful presence that reflects the depth and care of the actual work.',
    pills: ['Audience clarity', 'Story-based trust', 'Premium positioning'],
    accent: '#A66BFF',
    gradient: 'linear-gradient(135deg, #1f1832 0%, #101014 50%, #050506 100%)',
    tint: 'rgba(166,107,255,0.10)',
  },
  {
    title: 'Technical Founder',
    perspective:
      'The product is credible, but our story is still written for people who already understand the category. The market needs a clearer bridge.',
    pills: ['Category clarity', 'Expert translation', 'Buyer relevance'],
    accent: '#7AB8FF',
    gradient: 'linear-gradient(135deg, #14263a 0%, #101014 52%, #050506 100%)',
    tint: 'rgba(122,184,255,0.11)',
  },
  {
    title: 'Fractional Leader',
    perspective:
      'Referrals know what I can do. Everyone else sees a broad list of skills instead of the specific problems I am trusted to solve.',
    pills: ['Specific expertise', 'Credibility signals', 'Offer narrative'],
    accent: '#E7B66C',
    gradient: 'linear-gradient(135deg, #302414 0%, #101014 52%, #050506 100%)',
    tint: 'rgba(231,182,108,0.10)',
  },
  {
    title: 'Product Studio Founder',
    perspective:
      'Our portfolio shows what we made, not how we think. I want prospects to understand the judgment behind the output.',
    pills: ['Process thinking', 'Strategic proof', 'Distinct perspective'],
    accent: '#E58DA8',
    gradient: 'linear-gradient(135deg, #301923 0%, #101014 52%, #050506 100%)',
    tint: 'rgba(229,141,168,0.10)',
  },
  {
    title: 'B2B Operator',
    perspective:
      'I have years of pattern recognition, but no system for turning it into useful ideas people can remember and share.',
    pills: ['Operator insight', 'Repeatable content', 'Market memory'],
    accent: '#72DA83',
    gradient: 'linear-gradient(135deg, #15301e 0%, #101014 52%, #050506 100%)',
    tint: 'rgba(114,218,131,0.10)',
  },
  {
    title: 'Boutique Firm Partner',
    perspective:
      'Our work is high-touch and premium, yet our online presence feels interchangeable. The positioning needs to carry the same standard.',
    pills: ['Premium signal', 'Firm expertise', 'Decision confidence'],
    accent: '#C99BFF',
    gradient: 'linear-gradient(135deg, #251a34 0%, #101014 52%, #050506 100%)',
    tint: 'rgba(201,155,255,0.10)',
  },
  {
    title: 'Independent Advisor',
    perspective:
      'I do not need to post every day. I need the right people to encounter a body of thinking that makes the next conversation feel obvious.',
    pills: ['Focused publishing', 'Trust over volume', 'Warm demand'],
    accent: '#F4F0E8',
    gradient: 'linear-gradient(135deg, #292722 0%, #101014 52%, #050506 100%)',
    tint: 'rgba(244,240,232,0.08)',
  },
];

export function FounderScenarioCarousel({ className = '' }: { className?: string }) {
  const shouldReduceMotion = useHydratedReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const safeIndex = useMemo(() => clamp(0, scenarios.length - 1, index), [index]);
  const prevIndex = wrap(0, scenarios.length, safeIndex - 1);
  const nextIndex = wrap(0, scenarios.length, safeIndex + 1);
  const active = scenarios[safeIndex];

  const setPrev = () => setIndex((current) => wrap(0, scenarios.length, current - 1));
  const setNext = () => setIndex((current) => wrap(0, scenarios.length, current + 1));

  useEffect(() => {
    if (shouldReduceMotion || paused) return;

    const timer = window.setInterval(() => {
      setIndex((current) => wrap(0, scenarios.length, current + 1));
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, shouldReduceMotion]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setPaused(false);
    if (info.offset.x <= -64 || info.velocity.x <= -420) {
      setNext();
      return;
    }
    if (info.offset.x >= 64 || info.velocity.x >= 420) {
      setPrev();
    }
  };

  const stack = [
    {
      key: `prev-${scenarios[prevIndex].title}`,
      scenario: scenarios[prevIndex],
      style: { x: -42, y: 18, scale: 0.94, rotate: -3.5, opacity: 0.42 },
      z: 10,
      active: false,
    },
    {
      key: `active-${active.title}`,
      scenario: active,
      style: { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 },
      z: 20,
      active: true,
    },
    {
      key: `next-${scenarios[nextIndex].title}`,
      scenario: scenarios[nextIndex],
      style: { x: 42, y: 18, scale: 0.94, rotate: 3.5, opacity: 0.4 },
      z: 10,
      active: false,
    },
  ] as const;

  return (
    <section
      className={`relative ${className}`.trim()}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Illustrative founder perspectives"
    >
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
            Founder Perspective Scenarios
          </p>
          <p className="mt-2 max-w-[620px] text-[14px] leading-[1.6] text-[#6F6F78]">
            Representative founder situations, written as illustrations rather than customer testimonials.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={setPrev}
            aria-label="Previous perspective"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={setNext}
            aria-label="Next perspective"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="relative mt-8 h-[390px] w-full overflow-hidden sm:h-[360px]">
        <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,#0B0B0F,#050506)]" />

        <div className="absolute inset-0 grid place-items-center">
          <AnimatePresence initial={false}>
            {stack.map(({ key, scenario, style, z, active: isActive }) => (
              <motion.div
                key={key}
                initial={false}
                animate={style}
                transition={{ duration: shouldReduceMotion ? 0 : 0.36, ease: 'easeOut' }}
                className={`absolute w-[min(620px,88%)] touch-pan-y ${isActive ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}`}
                style={{ zIndex: z }}
                drag={!shouldReduceMotion && isActive ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragStart={() => setPaused(true)}
                onDragEnd={handleDragEnd}
                whileDrag={shouldReduceMotion ? undefined : { scale: 0.985, rotate: 0.5 }}
              >
                <motion.article
                  data-cursor="view"
                  data-cursor-label="Swipe"
                  whileHover={shouldReduceMotion || !isActive ? undefined : { y: -4, scale: 1.008 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
                  className="group relative min-h-[278px] overflow-hidden rounded-[22px] border border-white/10 p-6 shadow-[0_28px_76px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-7"
                  style={{ background: scenario.gradient }}
                  aria-hidden={!isActive}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                  <div
                    className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full blur-[110px]"
                    style={{ background: scenario.tint }}
                  />

                  <div className="relative flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D2D2D7]">
                      <span className="h-2 w-2 rounded-full" style={{ background: scenario.accent }} aria-hidden="true" />
                      Illustrative perspective
                    </span>

                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
                      <Image
                        src="/founder-avatar.jpg"
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover opacity-85"
                      />
                    </div>
                  </div>

                  <div className="relative mt-6 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                    <Quote className="mt-1 h-6 w-6 text-[#A66BFF]" aria-hidden="true" />
                    <div>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-[32px] font-bold leading-[1.02] tracking-[-0.02em] text-[#F4F0E8]">
                        {scenario.title}
                      </h3>
                      <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#D0D0D5]">
                        &ldquo;{scenario.perspective}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-6 flex flex-wrap gap-2 sm:pl-10">
                    {scenario.pills.map((pill) => (
                      <span
                        key={pill}
                        className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[12px] font-medium text-[#F4F0E8]/88"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" aria-label="Perspective selection">
        {scenarios.map((item, itemIndex) => {
          const isActive = itemIndex === safeIndex;
          return (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title}`}
              aria-current={isActive ? 'true' : undefined}
              onClick={() => setIndex(itemIndex)}
              className={`h-2.5 rounded-full border transition-all ${
                isActive
                  ? 'w-7 border-[#A66BFF]/50 bg-[#A66BFF]'
                  : 'w-2.5 border-white/12 bg-white/10 hover:border-white/18'
              } motion-reduce:transition-none`}
            />
          );
        })}
      </div>
    </section>
  );
}
