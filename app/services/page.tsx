"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { useHydratedReducedMotion } from '../../components/useHydratedReducedMotion';
import { ArrowRight, Check, Layers3, PenTool, Rocket } from 'lucide-react';
import { AnimatedTabs } from '../../components/AnimatedTabs';
import { Reveal } from '../../components/Reveal';

const serviceCards = [
  {
    key: 'strategy',
    tab: 'Strategy',
    title: 'Founder Brand Strategy',
    body: 'For founders who need clarity before content.',
    icon: PenTool,
    includes: [
      'Profile audit',
      'Positioning strategy',
      'Audience clarity',
      'Content pillars',
      'Messaging framework',
      'Offer narrative',
    ],
    cta: 'Explore Strategy',
  },
  {
    key: 'growth',
    tab: 'Growth Engine',
    title: 'LinkedIn Growth Engine',
    body: 'For founders who want consistent authority content.',
    icon: Rocket,
    includes: [
      'Monthly content strategy',
      'Post writing',
      'Carousel direction',
      'Engagement strategy',
      'Performance review',
      'Content improvement loop',
    ],
    cta: 'Explore Growth Engine',
  },
  {
    key: 'done',
    tab: 'Done For You',
    title: 'Done-For-You Founder Brand',
    body: 'For founders who want strategy, content, and execution handled.',
    icon: Layers3,
    includes: [
      'Profile optimization',
      'Content calendar',
      'Post writing',
      'Distribution system',
      'Warm conversation support',
      'Monthly reporting',
    ],
    cta: 'Explore Done-For-You',
  },
] as const;

type ServiceKey = (typeof serviceCards)[number]['key'];

export default function ServicesPage() {
  const shouldReduceMotion = useHydratedReducedMotion();
  const [tab, setTab] = useState<ServiceKey>('strategy');

  const activeIndex = useMemo(() => serviceCards.findIndex((s) => s.key === tab), [tab]);
  const active = serviceCards[Math.max(0, activeIndex)];
  const Icon = active.icon;

  return (
    <main className="bg-[#050506] text-[#F4F0E8]">
      <section className="relative overflow-hidden px-5 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,black,black_74%,transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-14 h-[260px] w-[760px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <Reveal className="mx-auto max-w-[900px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              WAYS WE CAN WORK TOGETHER
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(44px,7vw,59px)] font-bold leading-[1.02] tracking-normal text-[#F4F0E8]">
              Strategic. Done-for-you.
              <br />
              <span className="italic text-[#A66BFF] [text-shadow:0_0_14px_rgba(166,107,255,0.14)]">
                Built for founders.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              Choose the level of support based on where your founder brand stands today.
            </p>
          </Reveal>

          <Reveal className="mt-12 flex justify-center">
            <AnimatedTabs
              value={tab}
              onChange={(v) => setTab(v as ServiceKey)}
              tabs={serviceCards.map((s) => ({ value: s.key, label: s.tab }))}
              ariaLabel="Service options"
            />
          </Reveal>

          <Reveal className="mt-10">
            <AnimatePresence mode="wait">
              <motion.article
                data-cursor="view"
                data-cursor-label="Open"
                key={active.key}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.99 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: 'easeOut' }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="group relative mx-auto flex w-full max-w-[980px] overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(11,11,15,0.86)_42%,rgba(5,5,6,0.94))] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-white/16 sm:p-8 motion-reduce:transform-none"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[rgba(166,107,255,0.06)] blur-[110px]" />

                <div className="relative grid w-full gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <span className="grid h-[56px] w-[56px] place-items-center rounded-[18px] border border-white/10 bg-[#101014] text-[#A66BFF] shadow-[0_16px_44px_rgba(0,0,0,0.26)]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="text-[12px] uppercase tracking-[0.18em] text-white/28">
                        {String(activeIndex + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className="mt-7 text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#F4F0E8]">
                      {active.title}
                    </h2>
                    <p className="mt-4 max-w-[520px] text-[16px] leading-[1.72] text-[#A4A4AA]">{active.body}</p>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex h-[48px] w-fit items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-4 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
                    >
                      <span>{active.cta} →</span>
                    </Link>
                  </div>

                  <div className="rounded-[18px] border border-white/10 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">Includes</div>
                    <ul className="mt-5 grid gap-3">
                      {active.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.55] text-[#F4F0E8]/88">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-[#A66BFF]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </Reveal>

          <Reveal className="mt-12">
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,11,15,0.88))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="border-b border-white/8 px-6 py-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Comparison</p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-[920px] w-full text-left">
                  <thead className="bg-black/20">
                    <tr className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">
                      <th scope="col" className="px-6 py-4">
                        Category
                      </th>
                      {serviceCards.map((s) => (
                        <th key={s.key} scope="col" className="px-6 py-4 text-[#F4F0E8]">
                          {s.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8 text-[15px] text-[#A4A4AA]">
                    <tr>
                      <th scope="row" className="px-6 py-5 font-medium text-[#F4F0E8]">
                        Best for
                      </th>
                      <td className="px-6 py-5">Founders who need clarity before content.</td>
                      <td className="px-6 py-5">Founders who want consistent authority content.</td>
                      <td className="px-6 py-5">Founders who want strategy, content, and execution handled.</td>
                    </tr>
                    <tr>
                      <th scope="row" className="px-6 py-5 font-medium text-[#F4F0E8]">
                        Includes
                      </th>
                      <td className="px-6 py-5">Strategy inputs + messaging foundation.</td>
                      <td className="px-6 py-5">Strategy + content production loop.</td>
                      <td className="px-6 py-5">End-to-end strategy, content, and execution.</td>
                    </tr>
                    <tr>
                      <th scope="row" className="px-6 py-5 font-medium text-[#F4F0E8]">
                        Output
                      </th>
                      <td className="px-6 py-5">Clear positioning and a content system.</td>
                      <td className="px-6 py-5">Consistent content with a clear purpose.</td>
                      <td className="px-6 py-5">More meaningful business conversations.</td>
                    </tr>
                    <tr>
                      <th scope="row" className="px-6 py-5 font-medium text-[#F4F0E8]">
                        Timeline
                      </th>
                      <td className="px-6 py-5">Defined in scope after the audit.</td>
                      <td className="px-6 py-5">Monthly cadence.</td>
                      <td className="px-6 py-5">Ongoing system.</td>
                    </tr>
                    <tr>
                      <th scope="row" className="px-6 py-5 font-medium text-[#F4F0E8]">
                        CTA
                      </th>
                      <td className="px-6 py-5">
                        <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-[#F4F0E8] hover:text-white">
                          Book a call <ArrowRight className="h-4 w-4 text-[#A66BFF]" aria-hidden="true" />
                        </Link>
                      </td>
                      <td className="px-6 py-5">
                        <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-[#F4F0E8] hover:text-white">
                          Book a call <ArrowRight className="h-4 w-4 text-[#A66BFF]" aria-hidden="true" />
                        </Link>
                      </td>
                      <td className="px-6 py-5">
                        <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-[#F4F0E8] hover:text-white">
                          Book a call <ArrowRight className="h-4 w-4 text-[#A66BFF]" aria-hidden="true" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(90deg,rgba(166,107,255,0.095),rgba(255,255,255,0.025)_34%,rgba(11,11,15,0.88))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-7">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[20px] font-semibold text-[#F4F0E8]">Not sure what you need?</p>
                  <p className="mt-2 text-[16px] leading-[1.65] text-[#A4A4AA]">Start with a free Founder Brand Audit.</p>
                </div>

                <Link
                  href="/free-audit"
                  className="group inline-flex h-[48px] w-fit items-center justify-center gap-3 rounded-[8px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  Start with the Audit
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
