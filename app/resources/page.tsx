"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { useHydratedReducedMotion } from '../../components/useHydratedReducedMotion';
import { ArrowRight, BookOpen, FileText, Layers3, ListChecks, MessageSquare, CalendarDays } from 'lucide-react';
import { Reveal, RevealItem, RevealStagger } from '../../components/Reveal';

const resources = [
  {
    title: 'Founder LinkedIn Growth Playbook',
    description: 'A clear foundation to build founder authority through positioning and content systems.',
    type: 'Playbook',
    icon: BookOpen,
  },
  {
    title: 'LinkedIn Profile Optimization Checklist',
    description: 'A practical checklist to tighten clarity, trust signals, and conversion cues.',
    type: 'Checklist',
    icon: ListChecks,
  },
  {
    title: 'Content Pillar Template',
    description: 'Turn your expertise into pillars that make your value understandable and repeatable.',
    type: 'Template',
    icon: Layers3,
  },
  {
    title: 'Founder Brand Audit Guide',
    description: 'A diagnostic way to spot weak signals across profile, content, and conversion.',
    type: 'Guide',
    icon: FileText,
  },
  {
    title: 'Warm DM Conversation Guide',
    description: 'A simple structure for starting high-signal conversations without being salesy.',
    type: 'Guide',
    icon: MessageSquare,
  },
  {
    title: 'Weekly Content Calendar Template',
    description: 'A repeatable cadence for publishing strategy-led content that builds trust.',
    type: 'Template',
    icon: CalendarDays,
  },
];

export default function ResourcesPage() {
  const shouldReduceMotion = useHydratedReducedMotion();

  return (
    <main className="bg-[#050506] text-[#F4F0E8]">
      <section className="relative overflow-hidden px-5 pb-28 pt-12 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,black,black_76%,transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-14 h-[260px] w-[760px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-[44%] h-[340px] w-[640px] -translate-x-1/2 rounded-full bg-[rgba(166,107,255,0.05)] blur-[150px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <Reveal className="mx-auto max-w-[900px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              RESOURCES
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(44px,7vw,59px)] font-bold leading-[1.02] tracking-normal text-[#F4F0E8]">
              Resources to build founder authority.
            </h1>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              Tools and templates to improve positioning, content clarity, and conversion signals on LinkedIn.
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

          <RevealStagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {resources.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title}>
                  <motion.article
                    data-cursor="view"
                    data-cursor-label="Open"
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
                    className="group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,11,15,0.86)_42%,rgba(5,5,6,0.94))] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-white/16 motion-reduce:transform-none"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                    <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[rgba(166,107,255,0.05)] blur-[120px]" />

                    <div className="relative flex items-start justify-between gap-5">
                      <span className="grid h-11 w-11 place-items-center rounded-[14px] border border-white/10 bg-[#101014] text-[#A66BFF] shadow-[0_16px_44px_rgba(0,0,0,0.26)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">
                        {item.type}
                      </span>
                    </div>

                    <h2 className="mt-6 text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#F4F0E8]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-[1.7] text-[#A4A4AA]">{item.description}</p>

                    <Link
                      href="/free-audit"
                      className="group mt-7 inline-flex h-[48px] w-fit items-center gap-3 rounded-[10px] border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
                    >
                      Get this resource
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </Link>
                  </motion.article>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
