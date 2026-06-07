"use client";

import type { FormEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useHydratedReducedMotion } from '../../components/useHydratedReducedMotion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatedInput } from '../../components/AnimatedInput';
import { AnimatedProgressBar } from '../../components/AnimatedProgressBar';
import { Reveal } from '../../components/Reveal';

const scores = [
  { label: 'Profile Clarity', value: 72 },
  { label: 'Authority Signals', value: 64 },
  { label: 'Content Depth', value: 58 },
  { label: 'Audience Alignment', value: 76 },
  { label: 'Conversion Readiness', value: 61 },
];

export default function FreeAuditPage() {
  const shouldReduceMotion = useHydratedReducedMotion();
  const [form, setForm] = useState({
    linkedinUrl: '',
    offer: '',
    audience: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#050506] text-[#F4F0E8]">
      <section className="relative overflow-hidden px-5 pb-28 pt-12 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,black,black_76%,transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-14 h-[260px] w-[760px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />
        <div className="pointer-events-none absolute right-[10%] top-[22%] h-[420px] w-[420px] rounded-full bg-[rgba(166,107,255,0.05)] blur-[150px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <Reveal className="mx-auto max-w-[920px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              FREE FOUNDER BRAND AUDIT
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(44px,7vw,59px)] font-bold leading-[1.02] tracking-normal text-[#F4F0E8]">
              Get your Founder Brand Audit.
            </h1>

            <p className="mx-auto mt-6 max-w-[820px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              Get a personalized breakdown of what&apos;s working, what&apos;s missing, and what to fix next in your profile,
              positioning, and content.
            </p>
          </Reveal>

          <div className="mt-14 grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="relative mx-auto w-full max-w-[560px]">
                <div className="absolute inset-x-7 top-5 h-full translate-x-4 translate-y-4 rounded-[22px] border border-[#A66BFF]/14 bg-[#0B0B0F]/20" />
                <div className="absolute inset-x-3 top-2 h-full -rotate-[2deg] rounded-[22px] border border-white/[0.05] bg-[#101014]/18" />

                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(11,11,15,0.95)_24%,rgba(5,5,6,0.98))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.55),0_0_50px_rgba(166,107,255,0.06),inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.08),transparent_55%)]" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-[#A66BFF]">Audit report</div>
                      <h2 className="mt-3 text-[24px] font-semibold text-[#F4F0E8]">Founder Brand Audit</h2>
                    </div>
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/12 bg-white/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                      <Image src="/founder-avatar.jpg" alt="Founder avatar" fill sizes="44px" className="object-cover" />
                    </div>
                  </div>

                  <div className="relative mt-6 rounded-[18px] border border-white/10 bg-black/20 p-5">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">
                      Sample signal snapshot
                    </div>
                    <div className="mt-4 grid gap-4">
                      {scores.map((s, idx) => (
                        <AnimatedProgressBar
                          key={s.label}
                          label={s.label}
                          value={s.value}
                          delay={shouldReduceMotion ? 0 : 0.05 * idx}
                          ariaLabel={`${s.label} score`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="relative mt-6 text-[13px] leading-[1.7] text-[#6F6F78]">
                    Preview only. Your audit is based on your profile, positioning, content, and conversion path.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,11,15,0.9)_42%,rgba(5,5,6,0.96))] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                {!submitted ? (
                  <form onSubmit={onSubmit} className="relative">
                    <div className="grid gap-4">
                      <AnimatedInput
                        label="LinkedIn profile URL"
                        value={form.linkedinUrl}
                        onChange={(v) => setForm((s) => ({ ...s, linkedinUrl: v }))}
                        placeholder="https://linkedin.com/in/your-profile"
                        type="url"
                        required
                        autoComplete="url"
                      />
                      <AnimatedInput
                        label="What do you sell?"
                        value={form.offer}
                        onChange={(v) => setForm((s) => ({ ...s, offer: v }))}
                        placeholder="e.g. consulting, SaaS, agency services"
                        required
                        autoComplete="off"
                      />
                      <AnimatedInput
                        label="Who do you want to attract?"
                        value={form.audience}
                        onChange={(v) => setForm((s) => ({ ...s, audience: v }))}
                        placeholder="e.g. founders, CEOs, clients, investors"
                        required
                        autoComplete="off"
                      />
                      <AnimatedInput
                        label="Email"
                        value={form.email}
                        onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                        placeholder="you@company.com"
                        type="email"
                        required
                        autoComplete="email"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group mt-6 inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-[10px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      Request My Free Audit
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </button>

                    <p className="mt-4 text-center text-[13px] text-[#6F6F78]">Takes 60 seconds. No spam. No obligation.</p>
                  </form>
                ) : (
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: 'easeOut' }}
                    className="relative text-center"
                  >
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[#72DA83] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-[22px] font-semibold text-[#F4F0E8]">Your audit request is received.</h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-[#A4A4AA]">
                      We&apos;ll review your profile and respond soon.
                    </p>
                  </motion.div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
