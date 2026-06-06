"use client";

import type { FormEvent } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { AnimatedInput } from '../../components/AnimatedInput';
import { Reveal } from '../../components/Reveal';

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    linkedinUrl: '',
    message: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

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
              CONTACT
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(44px,7vw,59px)] font-bold leading-[1.02] tracking-normal text-[#F4F0E8]">
              Ready to build founder trust?
            </h1>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              Pick the path that makes sense. We&apos;ll keep it simple and founder-first.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,11,15,0.88)_42%,rgba(5,5,6,0.96))] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                <div className="grid gap-4">
                  <Link
                    href="mailto:hello@pitchbhai.com?subject=Book%20a%20Free%20Strategy%20Call"
                    className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[10px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    Book a Free Strategy Call
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                  </Link>

                  <Link
                    href="/free-audit"
                    className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[10px] border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
                  >
                    Request Free Audit
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                  </Link>

                  <a
                    href="https://www.linkedin.com/company/pitchbhaiofficial"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[10px] border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
                  >
                    Pitch Bhai LinkedIn
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                  </a>

                  <a
                    href="mailto:hello@pitchbhai.com"
                    className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[10px] border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
                  >
                    Email Pitch Bhai
                    <Mail className="h-4 w-4 text-[#A66BFF]" aria-hidden="true" />
                  </a>
                </div>

                <p className="mt-6 text-[13px] leading-[1.7] text-[#6F6F78]">
                  Prefer async? Send your LinkedIn URL and what you sell. We&apos;ll respond with next steps.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,11,15,0.9)_42%,rgba(5,5,6,0.96))] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                {!submitted ? (
                  <form onSubmit={onSubmit} className="relative">
                    <div className="grid gap-4">
                      <AnimatedInput
                        label="Name"
                        value={form.name}
                        onChange={(v) => setForm((s) => ({ ...s, name: v }))}
                        placeholder="Your name"
                        required
                        autoComplete="name"
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
                      <AnimatedInput
                        label="LinkedIn URL"
                        value={form.linkedinUrl}
                        onChange={(v) => setForm((s) => ({ ...s, linkedinUrl: v }))}
                        placeholder="https://linkedin.com/in/your-profile"
                        type="url"
                        autoComplete="url"
                      />

                      <div className="relative">
                        <label className="mb-2 block text-[13px] font-medium text-[#A4A4AA]">Message</label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                          rows={5}
                          className="w-full resize-none rounded-[14px] border border-white/10 bg-white/[0.03] px-4 py-4 text-[15px] text-[#F4F0E8] outline-none placeholder:text-[#6F6F78] focus:border-[#A66BFF]/45 focus:ring-2 focus:ring-[#A66BFF]/20 motion-reduce:transition-none"
                          placeholder="What are you building and what do you want LinkedIn to do for your business?"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group mt-6 inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-[10px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      Send Message
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                    </button>
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
                    <h3 className="mt-6 text-[22px] font-semibold text-[#F4F0E8]">Message received.</h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-[#A4A4AA]">We&apos;ll respond soon.</p>
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
