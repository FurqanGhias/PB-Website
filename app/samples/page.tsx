"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check, LayoutGrid, Map, PenLine, Target } from 'lucide-react';
import { Reveal, RevealItem, RevealStagger } from '../../components/Reveal';

const samples = [
  {
    title: 'SaaS Founder Profile Teardown',
    body: 'How unclear positioning weakens authority.',
    icon: PenLine,
    type: 'headline' as const,
  },
  {
    title: 'Agency Owner Content Map',
    body: 'How to turn service expertise into weekly authority content.',
    icon: LayoutGrid,
    type: 'pillars' as const,
  },
  {
    title: 'Consultant Authority System',
    body: 'How to move from random posting to trust-building.',
    icon: Map,
    type: 'funnel' as const,
  },
];

export default function SamplesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="bg-[#050506] text-[#F4F0E8]">
      <section className="relative overflow-hidden px-5 pb-28 pt-12 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,black,black_74%,transparent)]" />
        <div className="pointer-events-none absolute left-[10%] top-[18%] h-72 w-72 rounded-full bg-white/[0.02] blur-[125px]" />
        <div className="pointer-events-none absolute right-[8%] top-[28%] h-[440px] w-[440px] rounded-full bg-[rgba(166,107,255,0.05)] blur-[148px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <Reveal className="mx-auto max-w-[900px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              STRATEGIC SAMPLES
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(44px,7vw,59px)] font-bold leading-[1.02] tracking-normal text-[#F4F0E8]">
              See how we think before you work with us.
            </h1>

            <p className="mx-auto mt-6 max-w-[780px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              No fake case studies. No inflated numbers. Just clear examples of how we diagnose and improve founder brands.
            </p>
          </Reveal>

          <RevealStagger className="mt-14 grid gap-5 lg:grid-cols-3" stagger={0.07}>
            {samples.map(({ title, body, icon: Icon, type }, index) => (
              <RevealItem key={title}>
                <motion.article
                  whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
                  className="group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,11,15,0.84)_42%,rgba(5,5,6,0.94))] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-white/16 sm:p-7 motion-reduce:transform-none"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
                        <span className="grid h-8 w-8 place-items-center rounded-[10px] border border-white/10 bg-[#101014] text-[#A66BFF]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        Sample {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">
                        Sample Strategy
                      </span>
                    </div>

                    <h2 className="mt-6 text-[28px] font-semibold leading-[1.14] tracking-[-0.02em] text-[#F4F0E8]">
                      {title}
                    </h2>
                    <p className="mt-4 max-w-[330px] text-[16px] leading-[1.7] text-[#A4A4AA]">{body}</p>

                    <div className="mt-8 rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(5,5,6,0.56))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-5">
                      {type === 'headline' ? (
                        <div className="space-y-4">
                          <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-black/20">
                            <div className="relative aspect-[16/9] w-full">
                              <Image
                                src="/before-after-linkedin-optimization.png"
                                alt="LinkedIn headline before and after preview"
                                fill
                                sizes="(max-width: 1024px) 100vw, 360px"
                                className="object-cover opacity-75"
                              />
                              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.18),rgba(5,5,6,0.92))]" />
                            </div>
                          </div>

                          <div className="grid gap-3">
                            <div className="rounded-[14px] border border-white/8 bg-white/[0.03] p-4">
                              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">Before</div>
                              <p className="mt-3 text-[14px] leading-[1.55] text-[#F4F0E8]">“SaaS Founder”</p>
                              <p className="mt-1 text-[13px] leading-[1.55] text-[#A4A4AA]">
                                “Building products. Helping businesses grow.”
                              </p>
                            </div>
                            <div className="rounded-[14px] border border-[#A66BFF]/18 bg-[#A66BFF]/8 p-4">
                              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A66BFF]">After</div>
                              <p className="mt-3 text-[14px] leading-[1.55] text-[#F4F0E8]">
                                “Helping B2B SaaS founders turn product expertise into trusted LinkedIn authority.”
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : null}

                      {type === 'pillars' ? (
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">Content pillars</div>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {['Positioning', 'Frameworks', 'Stories', 'Offer'].map((item) => (
                              <div
                                key={item}
                                className="rounded-[14px] border border-white/8 bg-white/[0.03] p-4 text-[14px] font-medium text-[#F4F0E8]"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#6F6F78]">
                            <span className="h-px flex-1 bg-white/8" />
                            Weekly authority cadence
                            <span className="h-px flex-1 bg-white/8" />
                          </div>
                        </div>
                      ) : null}

                      {type === 'funnel' ? (
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">Mini funnel</div>
                          <div className="mt-5 grid gap-3">
                            {['Position', 'Publish', 'Distribute', 'Convert'].map((item, idx) => (
                              <div key={item} className="flex items-center gap-3">
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-[#101014] text-[12px] font-semibold text-[#A66BFF]">
                                  {idx + 1}
                                </span>
                                <div className="flex-1 rounded-[12px] border border-white/8 bg-white/[0.03] px-4 py-3 text-[15px] font-medium text-[#F4F0E8]">
                                  {item}
                                </div>
                                {idx < 3 ? <ArrowRight className="h-4 w-4 text-[#6F6F78]" aria-hidden="true" /> : null}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <Link
                      href="/resources"
                      className="group mt-7 inline-flex h-[48px] items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-4 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
                    >
                      View More Examples
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </motion.article>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal className="mt-14 rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,11,15,0.86))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-[680px]">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F6F78]">Sample Strategy</p>
                <p className="mt-4 text-[18px] font-semibold text-[#F4F0E8]">
                  We don&apos;t guess. We research, analyze, position, and build.
                </p>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#A4A4AA]">
                  Anyone can post. Few can turn founder expertise into a clear market position.
                </p>
              </div>

              <Link
                href="/free-audit"
                className="group inline-flex h-[48px] w-fit items-center justify-center gap-3 rounded-[10px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Get My Free Founder Brand Audit
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {[
                'Clear positioning',
                'Authority messaging',
                'Conversion path',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[14px] border border-white/10 bg-black/20 p-4">
                  <Check className="h-4 w-4 text-[#A66BFF]" aria-hidden="true" />
                  <span className="text-[14px] font-medium text-[#F4F0E8]">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
