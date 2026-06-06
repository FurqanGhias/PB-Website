"use client";

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal, RevealItem, RevealStagger } from '../../components/Reveal';

const whoWeServe = ['Founders', 'Consultants', 'Coaches', 'Agency owners', 'B2B operators'];

const differences = [
  'Positioning before posting.',
  'Authority messaging before volume.',
  'Distribution systems before “growth hacks”.',
  'Conversion paths before vanity metrics.',
];

export default function AboutPage() {
  return (
    <main className="bg-[#050506] text-[#F4F0E8]">
      <section className="relative overflow-hidden px-5 pb-28 pt-12 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,black,black_76%,transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-14 h-[260px] w-[760px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <Reveal className="mx-auto max-w-[920px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              ABOUT
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(44px,7vw,59px)] font-bold leading-[1.02] tracking-normal text-[#F4F0E8]">
              Founder-led. Strategy-first.
              <br />
              Built for long-term trust.
            </h1>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              Pitch Bhai helps founders build authority on LinkedIn through positioning, content systems, distribution, and conversion paths.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/free-audit"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[8px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Get My Free Founder Brand Audit
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-5 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
              >
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <RevealStagger className="mt-16 grid gap-5 md:grid-cols-2" stagger={0.07}>
            <RevealItem className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,11,15,0.88))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Why Pitch Bhai exists</p>
              <h2 className="mt-5 text-[26px] font-semibold leading-[1.15] text-[#F4F0E8]">The signal is the problem.</h2>
              <p className="mt-4 text-[15px] leading-[1.72] text-[#A4A4AA]">
                Most founders are active on LinkedIn, but their profile and content don&apos;t clearly communicate what they&apos;re known for.
                The result is visibility without trust and activity without outcomes.
              </p>
            </RevealItem>

            <RevealItem className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,11,15,0.88))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Our belief</p>
              <h2 className="mt-5 text-[26px] font-semibold leading-[1.15] text-[#F4F0E8]">Positioning compounds.</h2>
              <p className="mt-4 text-[15px] leading-[1.72] text-[#A4A4AA]">
                Authority comes from clear positioning, proof of thinking, and a consistent system that turns attention into conversation.
              </p>
            </RevealItem>
          </RevealStagger>

          <Reveal className="mt-5 rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,11,15,0.88))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">What we do differently</p>
                <h2 className="mt-5 text-[28px] font-semibold leading-[1.12] text-[#F4F0E8]">Strategy-first execution.</h2>
                <p className="mt-4 text-[15px] leading-[1.72] text-[#A4A4AA]">
                  We treat LinkedIn like a trust engine: positioning, content, distribution, and conversion working together as one system.
                </p>
              </div>

              <div className="rounded-[18px] border border-white/10 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <ul className="grid gap-3">
                  {differences.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.55] text-[#F4F0E8]/88">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#A66BFF]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-5 rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,11,15,0.88))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Who we serve</p>
                <h2 className="mt-5 text-[28px] font-semibold leading-[1.12] text-[#F4F0E8]">Founder-first by design.</h2>
                <p className="mt-4 text-[15px] leading-[1.72] text-[#A4A4AA]">
                  We mainly work with founders, consultants, coaches, agency owners, and service business operators who want to build authority through LinkedIn.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {whoWeServe.map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-white/10 bg-black/20 p-5 text-[15px] font-medium text-[#F4F0E8] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-5 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,11,15,0.9)_40%,rgba(5,5,6,0.96))] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Honest note</p>
            <p className="mt-5 max-w-[980px] font-[family-name:var(--font-cormorant)] text-[clamp(22px,3.2vw,34px)] font-bold leading-[1.18] text-[#F4F0E8]">
              We&apos;re early, focused, and selective. That means every audit, strategy, and piece of content gets founder-level attention.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
