"use client";

import type { FormEvent } from 'react';
import { useRef, useState } from 'react';
import Image from 'next/image';
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Check,
  CircleGauge,
  Columns3,
  Compass,
  DoorClosed,
  EyeOff,
  FileSearch,
  Layers3,
  ListChecks,
  Megaphone,
  MessageCircleOff,
  Newspaper,
  Play,
  Quote,
  ScanSearch,
  SearchCheck,
  ShieldOff,
  ShieldCheck,
  Share2,
  Target,
  TrendingDown,
  UserRound,
  UserSquare2,
  Zap,
} from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { useHydratedReducedMotion } from '../components/useHydratedReducedMotion';
import { AnimatedInput } from '../components/AnimatedInput';
import { AnimatedProgressBar } from '../components/AnimatedProgressBar';
import { AnimatedTabs } from '../components/AnimatedTabs';
import { CursorGlow } from '../components/CursorGlow';
import { AnimatedFAQ } from '../components/AnimatedFAQ';
import { FounderScenarioCarousel } from '../components/FounderScenarioCarousel';
import { Tilt } from '../components/Tilt';

const trustPoints = [
  { label: 'Founder-first approach', icon: UserSquare2 },
  { label: 'Strategy backed by insight', icon: ShieldCheck },
  { label: 'Done-for-you execution', icon: Zap },
];

const audience = ['Startup Founders', 'Agency Owners', 'Consultants', 'Coaches', 'B2B Operators'];

const indicators = [
  ['Profile Visibility', 'Improving'],
  ['Connection Quality', 'Stronger'],
  ['Opportunity Signals', 'Active'],
];

const problemCards = [
  {
    title: 'Your profile does not position you clearly.',
    body: 'Visitors do not instantly understand what you do, who you help, and why it matters.',
    icon: UserSquare2,
  },
  {
    title: 'Your content does not create authority.',
    body: 'You post often, but it does not show depth, perspective, or real expertise.',
    icon: Layers3,
  },
  {
    title: 'Your audience does not see the value.',
    body: 'They do not know why they should trust you, remember you, or work with you.',
    icon: EyeOff,
  },
  {
    title: 'You are consistent, but not strategic.',
    body: 'Effort without direction creates invisible results.',
    icon: TrendingDown,
  },
];

const consequences = [
  {
    title: 'No Trust',
    body: 'People do not trust what they do not understand.',
    icon: ShieldOff,
  },
  {
    title: 'No Conversations',
    body: 'No engagement means no relationships, no pipeline.',
    icon: MessageCircleOff,
  },
  {
    title: 'No Opportunities',
    body: 'No authority signals = no inbound opportunities.',
    icon: DoorClosed,
  },
  {
    title: 'No Leverage',
    body: 'You stay stuck in low-value conversations and price-sensitive deals.',
    icon: TrendingDown,
  },
];

const diagnosisItems = [
  'Profile clarity',
  'Authority signals',
  'Content depth',
  'Audience alignment',
  'Conversion readiness',
];

const diagnosisBlocks = [
  {
    title: 'Positioning Gap',
    body: 'Are you clearly known for one valuable thing?',
    icon: SearchCheck,
  },
  {
    title: 'Trust Gap',
    body: 'Does your profile prove why people should listen?',
    icon: ShieldCheck,
  },
  {
    title: 'Content Gap',
    body: 'Does your content make your expertise visible?',
    icon: Layers3,
  },
  {
    title: 'Conversion Gap',
    body: 'Is there a clear path from attention to conversation?',
    icon: ScanSearch,
  },
];

const trustSystemSteps = [
  {
    title: 'Position',
    body: 'We define your authority angle, ideal audience, and core message.',
    output: 'Clear positioning that makes you easier to trust.',
    icon: Compass,
  },
  {
    title: 'Package',
    body: 'We turn your expertise into content pillars, stories, and offer messaging.',
    output: 'A content system that communicates your value.',
    icon: Layers3,
  },
  {
    title: 'Publish',
    body: 'We create strategic posts that build authority, not random noise.',
    output: 'Consistent content with a clear purpose.',
    icon: Megaphone,
  },
  {
    title: 'Distribute',
    body: 'We expand your reach through relevant comments, engagement, and conversations.',
    output: 'More visibility with the right audience.',
    icon: Share2,
  },
  {
    title: 'Convert',
    body: 'We turn attention into warm conversations and opportunities.',
    output: 'More meaningful business conversations.',
    icon: Target,
  },
];

const transformationProblems = ['Generic headline', 'Unclear audience', 'Weak differentiation'];

const transformationImprovements = ['Clear audience', 'Clear outcome', 'Stronger authority angle'];

const contentStrategyRows = [
  {
    title: 'Insight posts',
    result: 'show thinking',
    icon: ScanSearch,
  },
  {
    title: 'Framework posts',
    result: 'build authority',
    icon: Layers3,
  },
  {
    title: 'Story posts',
    result: 'build connection',
    icon: UserRound,
  },
  {
    title: 'Offer posts',
    result: 'create opportunities',
    icon: Target,
  },
];

const positioningMapItems = [
  {
    label: 'Audience',
    icon: UserRound,
    className: 'left-1/2 top-2 -translate-x-1/2',
  },
  {
    label: 'Problem',
    icon: AlertCircle,
    className: 'right-1 top-[34%]',
  },
  {
    label: 'Proof',
    icon: ShieldCheck,
    className: 'bottom-6 right-[16%]',
  },
  {
    label: 'Offer',
    icon: Target,
    className: 'bottom-6 left-[16%]',
  },
  {
    label: 'Difference',
    icon: ScanSearch,
    className: 'left-1 top-[34%]',
  },
];

const proofThinkingDetails = [
  {
    title: 'Deep Research',
    body: 'We study your industry, audience and competitors before creating anything.',
    icon: ScanSearch,
  },
  {
    title: 'Data-Backed Strategy',
    body: 'Decisions are backed by insights, not assumptions or trends.',
    icon: FileSearch,
  },
  {
    title: 'Customized For You',
    body: 'No templates. No copy-paste. Every strategy is built around you and your goals.',
    icon: CircleGauge,
  },
  {
    title: 'Measurable Impact',
    body: 'We track what matters and continuously optimize for real business outcomes.',
    icon: ArrowRight,
  },
];

const serviceCards = [
  {
    title: 'Founder Brand Strategy',
    body: 'For founders who need clarity before content.',
    cta: 'Explore Strategy',
    icon: Compass,
    includes: [
      'Profile audit',
      'Positioning strategy',
      'Audience clarity',
      'Content pillars',
      'Messaging framework',
      'Offer narrative',
    ],
  },
  {
    title: 'LinkedIn Growth Engine',
    body: 'For founders who want consistent authority content.',
    cta: 'Explore Growth Engine',
    icon: Megaphone,
    includes: [
      'Monthly content strategy',
      'Post writing',
      'Carousel direction',
      'Engagement strategy',
      'Performance review',
      'Content improvement loop',
    ],
  },
  {
    title: 'Done-For-You Founder Brand',
    body: 'For founders who want strategy, content, and execution handled.',
    cta: 'Explore Done-For-You',
    icon: ShieldCheck,
    includes: [
      'Profile optimization',
      'Content calendar',
      'Post writing',
      'Distribution system',
      'Warm conversation support',
      'Monthly reporting',
    ],
  },
];

const strategicSamples = [
  {
    title: 'SaaS Founder Profile Teardown',
    body: 'How unclear positioning weakens authority.',
    cta: 'View More Examples',
    type: 'headline',
  },
  {
    title: 'Agency Owner Content Map',
    body: 'How to turn service expertise into weekly authority content.',
    cta: 'View More Examples',
    type: 'pillars',
  },
  {
    title: 'Consultant Authority System',
    body: 'How to move from random posting to trust-building.',
    cta: 'View More Examples',
    type: 'funnel',
  },
];

const resourceCards = [
  {
    title: 'Free Playbook',
    description: 'A practical guide to turning founder expertise into a clear LinkedIn authority system.',
    href: '#audit',
    cta: 'Get the playbook',
    icon: BookOpen,
  },
  {
    title: 'LinkedIn Checklist',
    description: 'Review the profile signals buyers use to understand, trust, and remember your expertise.',
    href: '#audit',
    cta: 'Use the checklist',
    icon: ListChecks,
  },
  {
    title: 'Content Pillar Template',
    description: 'Organize your insights, frameworks, stories, and offers into a focused publishing rhythm.',
    href: '#samples',
    cta: 'View the template',
    icon: Columns3,
  },
  {
    title: 'Blog',
    description: 'Read practical thinking on founder positioning, content strategy, distribution, and conversion.',
    href: '/resources',
    cta: 'Explore resources',
    icon: Newspaper,
  },
];

const auditChecklist = [
  'Profile clarity',
  'Authority signal',
  'Content quality',
  'Audience fit',
  'Conversion path',
];

const faqItems = [
  {
    question: 'How is Pitch Bhai different from a social media agency?',
    answer:
      'We do not just post content. We build positioning, authority messaging, content strategy, distribution systems, and conversion paths for founders.',
  },
  {
    question: 'Do you only work with founders?',
    answer:
      'We mainly work with founders, consultants, coaches, agency owners, and service business operators who want to build authority through LinkedIn.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Profile clarity can improve quickly. Authority compounds over time. We focus on better positioning, stronger content, more relevant conversations, and long-term trust.',
  },
  {
    question: 'Do you guarantee leads?',
    answer:
      'No. We do not make fake guarantees. We build the system that improves visibility, trust, and opportunity quality.',
  },
  {
    question: 'Can you write in my voice?',
    answer:
      'Yes. We study your expertise, voice, offers, audience, and point of view before creating content.',
  },
  {
    question: 'What should I start with?',
    answer:
      'Start with the free Founder Brand Audit. It shows what is missing and what should be fixed first.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const headlineContainer = {
  hidden: {},
  show: {},
};

const headlineLine = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const shouldReduceMotion = useHydratedReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.25 });
  const chartInView = useInView(chartRef, { once: true, amount: 0.45 });
  const [auditForm, setAuditForm] = useState({
    linkedinUrl: '',
    offer: '',
    audience: '',
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [serviceTab, setServiceTab] = useState<'strategy' | 'growth' | 'done'>('strategy');
  const [heroCardTab, setHeroCardTab] = useState<'profile' | 'content' | 'opportunities'>('profile');

  const handleAuditFieldChange = (field: 'linkedinUrl' | 'offer' | 'audience', value: string) => {
    setAuditForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleAuditSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuditSubmitted(true);
  };

  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-[#050506] text-[#F4F0E8]">
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-[calc(100svh-72px)] overflow-x-hidden bg-[#050506]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:76px_76px] [mask-image:linear-gradient(to_bottom,black,black_72%,transparent)]" />
        <div className="pointer-events-none absolute left-[-19%] top-[9%] h-[320px] w-[650px] rounded-full bg-white/[0.048] blur-[94px]" />
        <div className="pointer-events-none absolute right-[-7%] top-[18%] h-[470px] w-[470px] rounded-full bg-[rgba(166,107,255,0.09)] blur-[112px]" />

        <div className="relative mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-[1320px] flex-col px-5 sm:px-6 lg:px-8">
          <div className="relative z-10 grid flex-1 items-center gap-9 pb-[98px] pt-8 md:gap-12 lg:grid-cols-[0.47fr_0.53fr] lg:gap-[64px] lg:pb-[122px] lg:pt-5">
            <div className="min-w-0 pb-2 text-center max-[639px]:mx-auto max-[639px]:max-w-[350px] sm:text-left">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? 'show' : 'hidden'}
                transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
                className="mb-6 inline-flex max-w-full items-center justify-center gap-2 whitespace-normal rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-center text-[10px] font-semibold uppercase leading-4 tracking-[0.14em] text-[#F4F0E8]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-4 sm:text-[11px] sm:tracking-[0.19em]"
              >
                <span className="relative grid h-3 w-3 place-items-center rounded-full border border-[#A66BFF]/40 bg-[#A66BFF]/10" aria-hidden="true">
                  <motion.span
                    className="absolute h-3 w-3 rounded-full border border-[#A66BFF]/28"
                    initial={false}
                    animate={
                      heroInView && !shouldReduceMotion
                        ? { scale: [1, 1.9], opacity: [0.6, 0] }
                        : { scale: 1, opacity: 0 }
                    }
                    transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
                  />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#A66BFF]" />
                </span>
                Founder Branding Growth Partner
              </motion.div>

              <motion.h1
                variants={headlineContainer}
                initial="hidden"
                animate={heroInView ? 'show' : 'hidden'}
                transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.09, delayChildren: shouldReduceMotion ? 0 : 0.04 }}
                className="max-w-full text-balance break-normal font-[family-name:var(--font-cormorant)] text-[clamp(38px,10.5vw,44px)] font-bold leading-[0.98] tracking-normal text-[#F4F0E8] sm:max-w-[640px] sm:text-[clamp(54px,7vw,59px)] lg:leading-[0.94]"
              >
                 <motion.span
                   variants={headlineLine}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
                   className="block"
                 >
                   Your expertise is real.
                 </motion.span>
                 <motion.span
                   variants={headlineLine}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
                   className="block"
                 >
                   Your LinkedIn presence
                 </motion.span>
                 <motion.span
                   variants={headlineLine}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
                   className="block"
                 >
                   should{' '}
                  <span className="italic text-[#A66BFF] [text-shadow:0_0_12px_rgba(166,107,255,0.16)]">prove</span>{' '}
                  it.
                </motion.span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? 'show' : 'hidden'}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 }}
                className="mx-auto mt-6 max-w-[610px] text-[15px] leading-[1.65] text-[#D1D1D5]/86 max-[639px]:max-w-[350px] sm:mx-0 sm:text-[17px] sm:leading-[1.62] lg:max-w-[585px]"
              >
                Pitch Bhai helps founders, consultants, and agency owners turn LinkedIn into a trust-building engine
                that attracts the right people, opens doors, and grows the business.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? 'show' : 'hidden'}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.15 }}
                className="mx-auto mt-8 flex flex-col gap-3 sm:mx-0 sm:flex-row sm:items-center sm:gap-5"
              >
                <a
                  href="mailto:hello@pitchbhai.com?subject=Free%20Founder%20Brand%20Audit"
                  data-cursor="interactive"
                  data-cursor-label="Audit"
                  className="group inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-[8px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] shadow-[0_18px_45px_rgba(244,240,232,0.08)] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-auto sm:min-w-[355px] sm:whitespace-nowrap"
                >
                  Get My Free Founder Brand Audit
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  data-cursor="interactive"
                  data-cursor-label="Play"
                  className="inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none sm:w-auto sm:whitespace-nowrap"
                >
                  See How It Works
                  <motion.span
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                    className="relative grid h-7 w-7 place-items-center rounded-full border border-[#A66BFF]/32 text-[#A66BFF]"
                  >
                    <Play className="relative h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  </motion.span>
                </button>
              </motion.div>

              <motion.ul
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? 'show' : 'hidden'}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
                className="mx-auto mt-9 grid gap-4 text-sm text-[#F4F0E8] sm:mx-0 sm:grid-cols-3 lg:max-w-[620px]"
              >
                {trustPoints.map(({ label, icon: Icon }) => (
                  <li key={label} className="relative flex items-center justify-center gap-3 sm:grid sm:grid-cols-[40px_1fr] sm:items-start sm:justify-start sm:gap-x-3 sm:gap-y-0">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] border border-white/10 bg-[#101014]/80 text-[#A66BFF] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="block max-w-[170px] leading-6 text-[#F4F0E8]/92">{label}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              data-cursor="view"
              data-cursor-label="Explore"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.08, ease: 'easeOut' }}
              className="relative mx-auto min-h-[460px] w-full max-w-[500px] max-[639px]:max-w-[350px] sm:min-h-[500px] lg:ml-auto lg:mr-0 lg:max-w-[500px] lg:translate-x-2 lg:rotate-[-1deg] xl:max-w-[500px] xl:translate-x-0"
            >
              <Tilt maxTilt={4} hoverScale={1.012} className="relative">
                <div className="pointer-events-none absolute inset-x-5 top-7 h-[calc(100%-8px)] translate-x-5 translate-y-4 rounded-[18px] border border-[#A66BFF]/10 bg-[#0B0B0F]/20 opacity-40" />
                <div className="pointer-events-none absolute inset-x-9 top-13 h-[calc(100%-12px)] translate-x-8 translate-y-6 rounded-[18px] border border-white/[0.05] bg-[#101014]/20 opacity-55" />

                <CursorGlow
                  glow="rgba(166,107,255,0.10)"
                  radius={520}
                  className="relative overflow-hidden rounded-[18px] border border-[rgba(255,255,255,0.11)] bg-[linear-gradient(145deg,rgba(255,255,255,0.085),rgba(11,11,15,0.96)_34%,rgba(5,5,6,0.94))] p-5 shadow-[0_30px_76px_rgba(0,0,0,0.62),0_0_36px_rgba(166,107,255,0.05),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-32 rounded-t-[18px] bg-[radial-gradient(circle_at_42%_0%,rgba(255,255,255,0.09),transparent_55%)]" />
                  <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-64 rounded-[18px] bg-[radial-gradient(circle_at_bottom_right,rgba(166,107,255,0.08),transparent_66%)]" />

                  <div className="relative overflow-visible rounded-[18px]">
                    <div className="relative flex items-center justify-between gap-4">
                      <motion.div
                        whileHover={shouldReduceMotion ? undefined : { y: -1.5, scale: 1.03 }}
                        className="grid h-10 w-10 place-items-center rounded-[10px] border border-white/10 bg-white/[0.04] text-[#A4A4AA]"
                      >
                        <span className="text-sm font-semibold" aria-hidden="true">in</span>
                      </motion.div>

                      <motion.div
                        whileHover={shouldReduceMotion ? undefined : { y: -1.5 }}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[#A4A4AA]"
                      >
                        Founder Profile
                      </motion.div>
                    </div>

                    <div className="relative mt-6 grid gap-5 sm:grid-cols-[96px_1fr]">
                      <Image
                        src="/founder-avatar.jpg"
                        alt="Founder avatar"
                        width={96}
                        height={96}
                        priority
                        className="h-24 w-24 rounded-full border border-white/12 object-cover shadow-[0_18px_45px_rgba(0,0,0,0.45),0_0_0_1px_rgba(166,107,255,0.14)]"
                      />
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-[#6F6F78]">Sample authority dashboard</div>
                        <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-[36px] font-bold leading-[0.95] tracking-normal text-[#F4F0E8] xl:text-[40px]">
                          Positioned.
                          <br />
                          Trusted.
                          <br />
                          <span className="text-[#A66BFF]">Chosen.</span>
                        </h2>
                        <p className="mt-3 max-w-[320px] text-sm leading-6 text-[#A4A4AA]">
                          Building authority that converts attention into opportunities.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <AnimatedTabs
                        value={heroCardTab}
                        onChange={(v) => setHeroCardTab(v as typeof heroCardTab)}
                        tabs={[
                          { value: 'profile', label: 'Profile' },
                          { value: 'content', label: 'Content' },
                          { value: 'opportunities', label: 'Opportunities' },
                        ]}
                        ariaLabel="Authority dashboard tabs"
                        className="w-full justify-between sm:w-auto"
                      />
                    </div>

                    <AnimatePresence mode="wait">
                      {heroCardTab === 'profile' ? (
                        <motion.div
                          key="profile"
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: 'easeOut' }}
                          className="mt-5"
                        >
                          <motion.div
                            whileHover={shouldReduceMotion ? undefined : { y: -2, borderColor: 'rgba(255,255,255,0.16)' }}
                            className="relative flex items-center justify-between gap-3 rounded-[14px] border border-white/10 bg-black/20 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                          >
                            <div className="flex items-center gap-3">
                              <div className="grid h-9 w-9 place-items-center rounded-[10px] bg-white/[0.05] text-[#A4A4AA]">
                                <UserRound className="h-4 w-4" aria-hidden="true" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 text-sm text-[#F4F0E8]">
                                  Founder Profile
                                  <span className="text-xs font-semibold text-[#A4A4AA]" aria-hidden="true">in</span>
                                </div>
                                <div className="mt-1 text-xs text-[#6F6F78]">Authority Built</div>
                              </div>
                            </div>
                            <span className="relative h-2 w-2 rounded-full bg-[#72DA83]" aria-label="Active status" />
                          </motion.div>

                          <div className="mt-3 rounded-[14px] border border-white/10 bg-white/[0.03] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                            <div className="flex items-center justify-between gap-4">
                              <div className="text-[11px] leading-4 text-[#6F6F78]">Positioning Score</div>
                              <div className="text-sm font-medium text-[#F4F0E8]">Clear</div>
                            </div>
                          </div>

                          <div className="mt-4 grid gap-3 sm:grid-cols-3">
                            {indicators.map(([label, status], index) => (
                              <motion.div
                                key={label}
                                whileHover={
                                  shouldReduceMotion ? undefined : { y: -4, scale: 1.012, borderColor: 'rgba(255,255,255,0.16)' }
                                }
                                transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
                                className="rounded-[14px] border border-white/10 bg-white/[0.035] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                              >
                                <div className="text-[11px] leading-4 text-[#6F6F78]">{label}</div>
                                <div className="mt-2 text-sm font-medium text-[#F4F0E8]">{status}</div>
                                <motion.div
                                  className="mt-2 h-px origin-left bg-gradient-to-r from-[#A66BFF]/60 via-[#A66BFF]/10 to-transparent"
                                  initial={false}
                                  animate={{ scaleX: 0.35, opacity: 0.6 }}
                                  whileHover={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                                  transition={{
                                    duration: shouldReduceMotion ? 0 : 0.22,
                                    delay: shouldReduceMotion ? 0 : index * 0.02,
                                    ease: 'easeOut',
                                  }}
                                />
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}

                      {heroCardTab === 'content' ? (
                        <motion.div
                          key="content"
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: 'easeOut' }}
                          className="mt-5"
                        >
                          <div className="grid gap-3 sm:grid-cols-2">
                            {['Content Pillars', 'Insight Posts', 'Framework Posts', 'Founder Stories'].map((item) => (
                              <motion.div
                                key={item}
                                whileHover={shouldReduceMotion ? undefined : { y: -4, borderColor: 'rgba(255,255,255,0.16)' }}
                                transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
                                className="rounded-[14px] border border-white/10 bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                              >
                                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">
                                  Content
                                </div>
                                <div className="mt-2 text-sm font-medium text-[#F4F0E8]">{item}</div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}

                      {heroCardTab === 'opportunities' ? (
                        <motion.div
                          key="opportunities"
                          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: 'easeOut' }}
                          className="mt-5"
                        >
                          <div className="grid gap-3">
                            {['Warm signals detected', 'High-intent conversations', 'Audit requests'].map((item) => (
                              <motion.div
                                key={item}
                                whileHover={shouldReduceMotion ? undefined : { y: -4, borderColor: 'rgba(255,255,255,0.16)' }}
                                transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
                                className="flex items-center justify-between gap-4 rounded-[14px] border border-white/10 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                              >
                                <div className="text-sm font-medium text-[#F4F0E8]">{item}</div>
                                <span className="h-2 w-2 rounded-full bg-[#72DA83]" aria-hidden="true" />
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>

                  <motion.div
                    ref={chartRef}
                    whileHover={shouldReduceMotion ? undefined : { y: -2, borderColor: 'rgba(255,255,255,0.14)' }}
                    className="relative mt-5 rounded-[14px] border border-white/10 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                  >
                    <svg viewBox="0 0 560 150" className="h-[136px] w-full overflow-visible xl:h-[150px]" role="img" aria-label="Smooth authority growth chart">
                      <defs>
                        <linearGradient id="hero-chart-fill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#A66BFF" stopOpacity="0.32" />
                          <stop offset="100%" stopColor="#A66BFF" stopOpacity="0" />
                        </linearGradient>
                        <filter id="hero-chart-glow" x="-10%" y="-30%" width="120%" height="160%">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0.65 0 1 0 0 0.42 0 0 1 0 1 0 0 0 0.45 0" />
                          <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <g stroke="rgba(255,255,255,0.045)" strokeWidth="1">
                        <path d="M0 25H560" />
                        <path d="M0 62H560" />
                        <path d="M0 99H560" />
                        <path d="M0 136H560" />
                      </g>
                      <path
                        d="M0 125 C48 112, 72 119, 112 98 C148 79, 176 92, 214 72 C250 53, 284 68, 322 50 C362 31, 392 43, 430 30 C482 12, 514 20, 560 8 V150 H0 Z"
                        fill="url(#hero-chart-fill)"
                      />
                      <motion.path
                        d="M0 125 C48 112, 72 119, 112 98 C148 79, 176 92, 214 72 C250 53, 284 68, 322 50 C362 31, 392 43, 430 30 C482 12, 514 20, 560 8"
                        fill="none"
                        stroke="#A66BFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="url(#hero-chart-glow)"
                        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
                        animate={{ pathLength: chartInView || shouldReduceMotion ? 1 : 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
                      />
                      <motion.circle
                        cx="560"
                        cy="8"
                        r="9"
                        fill="rgba(166,107,255,0.22)"
                        animate={chartInView && !shouldReduceMotion ? { scale: [1, 1.14, 1] } : { scale: 1 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
                      />
                      <circle cx="560" cy="8" r="4.5" fill="#A66BFF" />
                    </svg>
                  </motion.div>
                </div>
                </CursorGlow>

                <motion.div
                  animate={!shouldReduceMotion ? { y: [0, -4, 0] } : undefined}
                  transition={!shouldReduceMotion ? { duration: 3.8, repeat: Infinity, ease: 'easeInOut' } : undefined}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className="absolute right-3 top-[68px] z-20 w-[188px] rounded-[14px] border border-white/10 bg-[#0B0B0F]/92 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur md:right-[-18px]"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-[#F4F0E8]">
                    <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
                    Inbound Opportunities
                  </div>
                  <div className="mt-1 text-xs text-[#A4A4AA]">Warm signals detected</div>
                </motion.div>

                <motion.div
                  animate={!shouldReduceMotion ? { y: [0, 4, 0] } : undefined}
                  transition={!shouldReduceMotion ? { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.25 } : undefined}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  className="absolute bottom-5 left-3 z-20 w-[214px] rounded-[14px] border border-white/10 bg-[#0B0B0F]/92 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur md:left-[-16px]"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-[#F4F0E8]">
                    <Target className="h-4 w-4 text-[#A66BFF]" aria-hidden="true" />
                    Positioning Score
                  </div>
                  <div className="mt-1 text-xs text-[#A4A4AA]">Authority angle: Clear</div>
                </motion.div>
              </Tilt>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={heroInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
            className="pointer-events-none absolute inset-x-5 bottom-0 z-0 flex min-h-[72px] flex-col items-start justify-center gap-3 border-t border-white/[0.08] py-4 text-xs pt-6 uppercase tracking-[0.18em] text-[#6F6F78] sm:inset-x-6 md:flex-row md:items-center md:justify-between md:gap-8 lg:inset-x-8"
          >
            <div className="shrink-0 whitespace-nowrap">Built for</div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] tracking-[0.16em] text-[#A4A4AA] md:justify-end">
              {audience.map((item, index) => (
                <span key={item} className="flex items-center gap-4 whitespace-nowrap">
                  <span>{item}</span>
                  {index < audience.length - 1 ? <span className="text-white/16" aria-hidden="true">/</span> : null}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050506] px-5 pb-24 pt-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-40 w-[520px] rounded-full bg-white/[0.035] blur-[110px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
            className="mx-auto max-w-[900px] text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              THE REAL PROBLEM
            </div>

            <h2 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(42px,7vw,59px)] font-bold leading-[1.04] tracking-normal text-[#F4F0E8]">
              Most founders don&apos;t have
              <br />
              a content problem.
              <br />
              <span className="text-[#A66BFF]">
                They have a <span className="font-extrabold not-italic">positioning</span> problem.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.7] text-[#A4A4AA]">
              You are posting. You are active. But the right people still do not see you as the obvious choice.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {problemCards.map(({ title, body, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.05 }}
                className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,11,15,0.72))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#101014] text-[#A66BFF]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-[30px] leading-none text-white/28">{String(index + 1).padStart(2, '0')}</span>
                </div>

                <h3 className="max-w-[250px] text-[18px] font-medium leading-[1.4] text-[#F4F0E8]">{title}</h3>
                <p className="mt-4 max-w-[270px] text-[16px] leading-[1.75] text-[#A4A4AA]">{body}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.08 }}
            className="mt-8 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(90deg,rgba(166,107,255,0.12),rgba(255,255,255,0.02)_26%,rgba(11,11,15,0.94)_55%,rgba(11,11,15,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="border-b border-white/8 p-8 lg:border-b-0 lg:border-r lg:border-white/8 lg:p-12">
                <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">The cost of getting it wrong</div>
                <h3 className="mt-7 max-w-[500px] font-[family-name:var(--font-cormorant)] text-[clamp(30px,3.1vw,46px)] font-bold leading-[1.08] text-[#F4F0E8]">
                  It&apos;s not just about visibility.
                  <br />
                  It&apos;s about <span className="italic">missed</span> opportunities.
                </h3>

                <p className="mt-7 max-w-[430px] text-[16px] leading-[1.7] text-[#A4A4AA]">
                  A weak LinkedIn presence does not just make you invisible.
                  <br />
                  It makes you forgettable.
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-3 text-[16px] font-medium text-[#F4F0E8] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-[#A66BFF]/50 text-[#A66BFF]">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>Let&apos;s fix the root problem, not just the symptoms.</span>
                </button>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid gap-0">
                  {consequences.map(({ title, body, icon: Icon }, index) => (
                    <div
                      key={title}
                      className={`grid gap-3 py-5 md:grid-cols-[200px_1fr] md:items-start md:gap-6 ${index < consequences.length - 1 ? 'border-b border-white/8' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#A66BFF]/14 text-[#A66BFF]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-[18px] font-medium text-[#F4F0E8]">{title}</span>
                      </div>
                      <p className="max-w-[280px] text-[15px] leading-[1.65] text-[#A4A4AA]">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="diagnosis" className="relative overflow-hidden bg-[#050506] px-5 pb-28 pt-8 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.016)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.016)_1px,transparent_1px)] bg-[size:92px_92px] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_88%,transparent)]" />
        <div className="pointer-events-none absolute left-[12%] top-[18%] h-64 w-64 rounded-full bg-white/[0.025] blur-[120px]" />
        <div className="pointer-events-none absolute right-[10%] top-[26%] h-80 w-80 rounded-full bg-[rgba(166,107,255,0.06)] blur-[140px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
            className="mx-auto max-w-[880px] text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              FOUNDER BRAND DIAGNOSIS
            </div>

            <h2 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(40px,7vw,59px)] font-bold leading-[1.04] tracking-normal text-[#F4F0E8]">
              Before we create content, we diagnose what your brand is missing.
            </h2>

            <p className="mx-auto mt-6 max-w-[780px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              Your LinkedIn profile, positioning, content, and conversion path all send signals. We find the weak
              signals and turn them into authority.
            </p>
          </motion.div>

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="absolute inset-x-7 top-5 h-full translate-x-4 translate-y-4 rounded-[22px] border border-[#A66BFF]/14 bg-[#0B0B0F]/20" />
              <div className="absolute inset-x-3 top-2 h-full -rotate-[2deg] rounded-[22px] border border-white/[0.05] bg-[#101014]/18" />

              <div className="relative rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(11,11,15,0.96)_24%,rgba(5,5,6,0.98))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.55),0_0_50px_rgba(166,107,255,0.06),inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[#A66BFF]">Diagnostic report</div>
                    <h3 className="mt-3 text-[24px] font-semibold text-[#F4F0E8]">Founder Brand Diagnosis</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/12 bg-white/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                      <Image
                        src="/founder-avatar.jpg"
                        alt="Founder avatar"
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-[12px] border border-white/10 bg-white/[0.04] text-[#A66BFF]">
                      <FileSearch className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[18px] border border-white/10 bg-black/20 p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-[12px] uppercase tracking-[0.16em] text-[#6F6F78]">Signal review</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#A4A4AA]">
                      Review lens
                    </span>
                  </div>

                  <div className="space-y-3">
                    {diagnosisItems.map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#A66BFF]" aria-hidden="true" />
                        <span className="flex-1 text-[15px] text-[#F4F0E8]">{item}</span>
                        <div className="w-[112px]">
                          <AnimatedProgressBar
                            value={52 + index * 8}
                            delay={index * 0.08}
                            ariaLabel={`${item} strength`}
                            className="h-[6px]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[18px] border border-white/10 bg-[linear-gradient(90deg,rgba(166,107,255,0.12),rgba(255,255,255,0.02))] p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-[12px] border border-white/10 bg-[#101014] text-[#A66BFF]">
                      <CircleGauge className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-[12px] uppercase tracking-[0.16em] text-[#6F6F78]">Positioning Score</div>
                      <div className="mt-1 text-[26px] font-semibold text-[#F4F0E8]">62/100</div>
                      <div className="mt-3 w-[200px] max-w-full">
                        <AnimatedProgressBar value={62} ariaLabel="Positioning score" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.08 }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {diagnosisBlocks.map(({ title, body, icon: Icon }, index) => (
                  <motion.article
                    key={title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeUp}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.05 }}
                    className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,11,15,0.76))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-[12px] border border-white/10 bg-[#101014] text-[#A66BFF]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-[22px] font-medium leading-[1.28] text-[#F4F0E8]">{title}</h3>
                    <p className="mt-4 max-w-[280px] text-[16px] leading-[1.72] text-[#A4A4AA]">{body}</p>
                  </motion.article>
                ))}
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.12 }}
                className="mt-6"
              >
                <a
                  href="mailto:hello@pitchbhai.com?subject=Free%20Founder%20Brand%20Diagnosis"
                  className="inline-flex h-[52px] items-center justify-center gap-3 rounded-[8px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  Get My Free Diagnosis
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="system" className="relative overflow-hidden bg-[#050506] px-5 pb-28 pt-6 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_88%,transparent)]" />

        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
            className="mx-auto max-w-[860px] text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              OUR FRAMEWORK
            </div>

            <h2 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(42px,7vw,59px)] font-bold leading-[1.04] tracking-normal text-[#F4F0E8]">
              The Founder Trust System&trade;
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              A five-part system to turn your LinkedIn into a growth asset that compounds.
            </p>
          </motion.div>

          <div className="relative mt-16">
            <motion.div
              initial={false}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
              className="absolute left-[9%] right-[9%] top-[62px] hidden h-px origin-left bg-gradient-to-r from-transparent via-white/12 to-transparent lg:block"
            />

            <div className="grid gap-4 lg:grid-cols-5">
              {trustSystemSteps.map(({ title, body, output, icon: Icon }, index) => (
                <motion.article
                  key={title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.48, delay: shouldReduceMotion ? 0 : index * 0.06 }}
                  className="relative rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(11,11,15,0.84))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-[12px] border border-white/10 bg-[#101014] text-[#A4A4AA]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-[12px] uppercase tracking-[0.18em] text-white/28">{`0${index + 1}`}</span>
                  </div>

                  <h3 className="mt-6 text-[24px] font-medium text-[#F4F0E8]">{title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.72] text-[#A4A4AA]">{body}</p>

                  <div className="mt-6 rounded-[14px] border border-white/8 bg-black/18 p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">Output</div>
                    <p className="mt-2 text-[15px] leading-[1.65] text-[#F4F0E8]">{output}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.52, delay: shouldReduceMotion ? 0 : 0.08 }}
            className="mt-10 rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(11,11,15,0.86))] px-6 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-8"
          >
            <p className="font-[family-name:var(--font-cormorant)] text-[clamp(25px,3.2vw,36px)] font-bold leading-[1.14] text-[#F4F0E8]">
              We don&apos;t chase vanity metrics.
              <br />
              We build trust that compounds.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="proof" className="relative overflow-hidden bg-[#050506] px-5 pb-28 pt-8 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:92px_92px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_88%,transparent)]" />
        <div className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-white/[0.025] blur-[130px]" />
        <div className="pointer-events-none absolute right-[9%] top-[32%] h-[420px] w-[420px] rounded-full bg-[rgba(166,107,255,0.055)] blur-[150px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
            className="mx-auto max-w-[920px] text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              PROOF OF THINKING
            </div>

            <h2 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(44px,7vw,59px)] font-bold leading-[1] tracking-normal text-[#F4F0E8]">
              Strategy first.{' '}
              <span className="italic text-[#A66BFF] [text-shadow:0_0_24px_rgba(166,107,255,0.22)]">
                Content second.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[770px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              Anyone can post. Few can turn founder expertise into a clear market position.
            </p>

            <div className="mt-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A4A4AA]">
              Strategy sample
            </div>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.08fr_0.98fr_1.04fr]">
            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(11,11,15,0.84))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-white/16 sm:p-6"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#A66BFF]">
                Profile Transformation
              </div>

              <div className="mt-6">
                <span className="inline-flex rounded-[8px] border border-white/8 bg-white/[0.045] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F4F0E8]/78">
                  Before
                </span>

                <div className="mt-2 overflow-hidden rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(5,5,6,0.58))] shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
                  <div className="flex items-center gap-4 p-5">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/12 bg-white/[0.04]">
                      <Image
                        src="/founder-avatar.jpg"
                        alt="Sample founder profile"
                        fill
                        sizes="64px"
                        className="object-cover grayscale"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[18px] font-semibold leading-tight text-[#F4F0E8]">SaaS Founder</h3>
                      <p className="mt-1 text-[14px] leading-[1.55] text-[#A4A4AA]">
                        Building products. Helping businesses grow.
                      </p>
                    </div>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] border border-white/10 bg-white/[0.06] text-[15px] font-bold text-[#F4F0E8]">
                      in
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-white/8 bg-black/12 px-4 py-3">
                    {transformationProblems.map((item) => (
                      <span key={item} className="inline-flex items-center gap-2 text-[12px] text-[#A4A4AA]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#A66BFF]/70" aria-hidden="true" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="my-5 flex justify-center text-[#6F6F78]">
                <ArrowRight className="h-5 w-5 rotate-90" aria-hidden="true" />
              </div>

              <div>
                <span className="inline-flex rounded-[8px] border border-[#A66BFF]/18 bg-[#A66BFF]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A66BFF]">
                  After
                </span>

                <div className="mt-2 overflow-hidden rounded-[16px] border border-[#A66BFF]/16 bg-[linear-gradient(180deg,rgba(166,107,255,0.07),rgba(5,5,6,0.62))] shadow-[0_0_34px_rgba(166,107,255,0.055),inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <div className="flex items-start gap-4 p-5">
                    <div className="relative mt-1 h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/12 bg-white/[0.04]">
                      <Image
                        src="/founder-avatar.jpg"
                        alt="Sample founder profile"
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[18px] font-semibold leading-[1.28] text-[#F4F0E8]">
                        Helping B2B SaaS founders turn product expertise into trusted LinkedIn authority.
                      </h3>
                    </div>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] border border-white/10 bg-[#F4F0E8] text-[15px] font-bold text-[#050506]">
                      in
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-[#A66BFF]/14 bg-[#A66BFF]/8 px-4 py-3">
                    {transformationImprovements.map((item) => (
                      <span key={item} className="inline-flex items-center gap-2 text-[12px] text-[#F4F0E8]/88">
                        <Check className="h-3.5 w-3.5 text-[#A66BFF]" aria-hidden="true" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.05 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(11,11,15,0.84))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-white/16 sm:p-6"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#A66BFF]">
                Content Strategy Example
              </div>

              <h3 className="mt-6 max-w-[360px] text-[28px] font-semibold leading-[1.18] text-[#F4F0E8] sm:text-[32px]">
                Turn expertise into trust.
              </h3>

              <div className="mt-8 space-y-3">
                {contentStrategyRows.map(({ title, result, icon: Icon }, index) => (
                  <motion.div
                    key={title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.42, delay: shouldReduceMotion ? 0 : index * 0.06 }}
                    whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                    className="group grid gap-4 rounded-[16px] border border-white/8 bg-white/[0.035] p-4 transition hover:border-[#A66BFF]/24 hover:bg-white/[0.05] sm:grid-cols-[48px_1fr_auto] sm:items-center"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-[12px] border border-white/8 bg-[#101014] text-[#A66BFF] transition group-hover:border-[#A66BFF]/24 group-hover:bg-[#A66BFF]/10">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="text-[17px] font-semibold text-[#F4F0E8]">{title}</h4>
                      <p className="mt-1 text-[14px] leading-[1.55] text-[#A4A4AA]">{result}</p>
                    </div>
                    <ArrowRight className="hidden h-4 w-4 text-[#6F6F78] transition group-hover:text-[#A66BFF] sm:block" aria-hidden="true" />
                  </motion.div>
                ))}
              </div>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.1 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(11,11,15,0.84))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-white/16 sm:p-6"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#A66BFF]">Positioning Map</div>

              <div className="relative mx-auto mt-8 aspect-square w-full max-w-[390px]">
                <div className="absolute inset-[46px] rounded-full border border-[#A66BFF]/28" />
                <div className="absolute inset-[92px] rounded-full bg-[radial-gradient(circle,rgba(166,107,255,0.24),rgba(166,107,255,0.08)_56%,rgba(255,255,255,0.025))] shadow-[0_0_48px_rgba(166,107,255,0.16)]" />
                <div className="absolute left-1/2 top-1/2 grid h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#A66BFF]/34 bg-[linear-gradient(180deg,rgba(166,107,255,0.22),rgba(11,11,15,0.82))] px-5 text-center text-[17px] font-medium leading-[1.28] text-[#F4F0E8] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  Your Authority Angle
                </div>

                {positioningMapItems.map(({ label, icon: Icon, className }) => (
                  <motion.div
                    key={label}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                    className={`absolute flex min-w-[96px] flex-col items-center gap-2 text-center ${className}`}
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-[13px] border border-white/10 bg-[#101014] text-[#A66BFF] shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-[13px] font-semibold text-[#F4F0E8]">{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.08 }}
            className="mt-6 overflow-hidden rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(11,11,15,0.9))] shadow-[0_24px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            <div className="grid gap-0 lg:grid-cols-[1.18fr_repeat(4,1fr)]">
              <div className="flex gap-5 border-b border-white/8 p-6 lg:border-b-0 lg:border-r lg:border-white/8 lg:p-7">
                <Quote className="mt-1 h-8 w-8 shrink-0 fill-[#A66BFF] text-[#A66BFF]" aria-hidden="true" />
                <p className="max-w-[280px] text-[17px] leading-[1.7] text-[#F4F0E8]">
                  We don&apos;t guess.
                  <br />
                  We research, analyze and build.
                  <br />
                  <span className="font-semibold text-[#A66BFF]">That&apos;s why it works.</span>
                </p>
              </div>

              {proofThinkingDetails.map(({ title, body, icon: Icon }) => (
                <div
                  key={title}
                  className="group border-b border-white/8 p-6 transition hover:bg-white/[0.025] lg:border-b-0 lg:border-r lg:border-white/8 lg:p-7 last:lg:border-r-0"
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      className={`mt-0.5 h-6 w-6 shrink-0 text-[#A66BFF] ${title === 'Measurable Impact' ? '-rotate-45' : ''}`}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-[14px] font-semibold text-[#F4F0E8]">{title}</h3>
                      <p className="mt-3 max-w-[185px] text-[12px] leading-[1.75] text-[#A4A4AA]">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-[#050506] px-5 pb-28 pt-8 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_88%,transparent)]" />
        <div className="pointer-events-none absolute left-[14%] top-[20%] h-80 w-80 rounded-full bg-white/[0.024] blur-[130px]" />
        <div className="pointer-events-none absolute right-[12%] top-[24%] h-[460px] w-[460px] rounded-full bg-[rgba(166,107,255,0.055)] blur-[150px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
            className="mx-auto max-w-[900px] text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              WAYS WE CAN WORK TOGETHER
            </div>

            <h2 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(44px,7vw,59px)] font-bold leading-[1.02] tracking-normal text-[#F4F0E8]">
              Strategic. Done-for-you.
              <br />
              <span className="italic text-[#A66BFF] [text-shadow:0_0_14px_rgba(166,107,255,0.14)]">
                Built for founders.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              Choose the level of support based on where your founder brand stands today.
            </p>
          </motion.div>

          <div className="mt-12 flex justify-center">
            <AnimatedTabs
              value={serviceTab}
              onChange={(value) => setServiceTab(value as typeof serviceTab)}
              tabs={[
                { value: 'strategy', label: 'Strategy' },
                { value: 'growth', label: 'Growth Engine' },
                { value: 'done', label: 'Done For You' },
              ]}
              ariaLabel="Service options"
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="mt-10"
          >
            <AnimatePresence mode="wait">
              <motion.article
                data-cursor="view"
                data-cursor-label="Open"
                key={serviceTab}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10, scale: 0.99 }}
                animate={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.99 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.26, ease: 'easeOut' }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className="group relative mx-auto flex w-full max-w-[980px] overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(11,11,15,0.86)_42%,rgba(5,5,6,0.94))] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-white/16 sm:p-8"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[rgba(166,107,255,0.06)] blur-[110px]" />

                {(() => {
                  const activeIndex = serviceTab === 'strategy' ? 0 : serviceTab === 'growth' ? 1 : 2;
                  const { title, body, cta, icon: Icon, includes } = serviceCards[activeIndex];

                  return (
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

                        <h3 className="mt-7 text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#F4F0E8]">
                          {title}
                        </h3>
                        <p className="mt-4 max-w-[520px] text-[16px] leading-[1.72] text-[#A4A4AA]">{body}</p>

                        <a
                          href={`mailto:hello@pitchbhai.com?subject=${encodeURIComponent(title)}`}
                          className="mt-8 inline-flex h-[48px] w-fit items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-4 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
                        >
                          <span>{cta}</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                        </a>
                      </div>

                      <div className="rounded-[18px] border border-white/10 bg-black/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">Includes</div>
                        <ul className="mt-5 grid gap-3">
                          {includes.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.55] text-[#F4F0E8]/88">
                              <Check className="mt-1 h-4 w-4 shrink-0 text-[#A66BFF]" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })()}
              </motion.article>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.08 }}
            className="mt-8 rounded-[20px] border border-white/10 bg-[linear-gradient(90deg,rgba(166,107,255,0.095),rgba(255,255,255,0.025)_34%,rgba(11,11,15,0.88))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-7"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[20px] font-semibold text-[#F4F0E8]">Not sure what you need?</p>
                <p className="mt-2 text-[16px] leading-[1.65] text-[#A4A4AA]">
                  Start with a free Founder Brand Audit.
                </p>
              </div>

              <a
                href="mailto:hello@pitchbhai.com?subject=Free%20Founder%20Brand%20Audit"
                className="inline-flex h-[48px] w-fit items-center justify-center gap-3 rounded-[8px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Start with the Audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="samples" className="relative overflow-hidden bg-[#050506] px-5 pb-28 pt-8 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:94px_94px] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_88%,transparent)]" />
        <div className="pointer-events-none absolute left-[10%] top-[18%] h-72 w-72 rounded-full bg-white/[0.022] blur-[125px]" />
        <div className="pointer-events-none absolute right-[8%] top-[28%] h-[440px] w-[440px] rounded-full bg-[rgba(166,107,255,0.05)] blur-[148px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
            className="mx-auto max-w-[920px] text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              STRATEGIC SAMPLES
            </div>

            <h2 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(42px,7vw,59px)] font-bold leading-[1.03] tracking-normal text-[#F4F0E8]">
              See how we think before you work with us.
            </h2>

            <p className="mx-auto mt-6 max-w-[780px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              No fake case studies. No inflated numbers. Just clear examples of how we diagnose and improve founder
              brands.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:[grid-template-rows:repeat(2,minmax(0,1fr))]">
            {strategicSamples.map(({ title, body, cta, type }, index) => (
              <motion.article
                data-cursor="view"
                data-cursor-label="View"
                key={title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.07 }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className={`group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,11,15,0.84)_42%,rgba(5,5,6,0.94))] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors hover:border-white/16 sm:p-7 ${
                  index === 0 ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'
                }`}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
                      Sample {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">
                      Sample
                    </span>
                  </div>

                  <h3 className="mt-6 text-[28px] font-semibold leading-[1.14] tracking-[-0.02em] text-[#F4F0E8]">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-[330px] text-[16px] leading-[1.7] text-[#A4A4AA]">{body}</p>

                  <div className="mb-7 mt-8 rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(5,5,6,0.56))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-5">
                    {type === 'headline' ? (
                      <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-black/20">
                          <div className="relative aspect-[16/9] w-full">
                            <Image
                              src="/before-after-linkedin-optimization.png"
                              alt="LinkedIn profile before and after preview"
                              fill
                              sizes="(max-width: 1024px) 100vw, 360px"
                              className="object-cover opacity-65"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.18),rgba(5,5,6,0.92))]" />
                          </div>
                        </div>

                        <div className="rounded-[14px] border border-white/8 bg-white/[0.03] p-4">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">Before</div>
                          <div className="mt-3 flex items-start justify-between gap-3">
                            <div>
                              <p className="text-[18px] font-semibold text-[#F4F0E8]">SaaS Founder</p>
                              <p className="mt-1 text-[13px] leading-[1.6] text-[#A4A4AA]">
                                Building products. Helping businesses grow.
                              </p>
                            </div>
                            <span className="rounded-[8px] border border-white/10 bg-white/[0.05] px-2 py-1 text-[12px] font-bold text-[#F4F0E8]">
                              in
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-center text-[#6F6F78]">
                          <ArrowRight className="h-4 w-4 rotate-90" aria-hidden="true" />
                        </div>

                        <div className="rounded-[14px] border border-[#A66BFF]/18 bg-[#A66BFF]/8 p-4">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A66BFF]">After</div>
                          <p className="mt-3 text-[16px] font-semibold leading-[1.45] text-[#F4F0E8]">
                            Helping B2B SaaS founders turn product expertise into trusted LinkedIn authority.
                          </p>
                        </div>
                      </div>
                    ) : null}

                    {type === 'pillars' ? (
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">4 pillar content map</div>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          {['Insights', 'Frameworks', 'Stories', 'Offers'].map((item, itemIndex) => (
                            <div
                              key={item}
                              className={`rounded-[14px] border p-4 text-center text-[14px] font-medium ${
                                itemIndex === 0
                                  ? 'border-[#A66BFF]/24 bg-[#A66BFF]/10 text-[#F4F0E8]'
                                  : 'border-white/8 bg-white/[0.03] text-[#D5D5DA]'
                              }`}
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
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F6F78]">Mini trust funnel</div>
                        <div className="mt-5 grid gap-3">
                          {['Position', 'Publish', 'Distribute', 'Convert'].map((item, itemIndex) => (
                            <div key={item} className="flex items-center gap-3">
                              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-[#101014] text-[12px] font-semibold text-[#A66BFF]">
                                {itemIndex + 1}
                              </span>
                              <div className="flex-1 rounded-[12px] border border-white/8 bg-white/[0.03] px-4 py-3 text-[15px] font-medium text-[#F4F0E8]">
                                {item}
                              </div>
                              {itemIndex < 3 ? <ArrowRight className="h-4 w-4 text-[#6F6F78]" aria-hidden="true" /> : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <a
                    href="mailto:hello@pitchbhai.com?subject=Strategic%20Samples"
                    className="group mt-auto inline-flex h-[48px] w-fit items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-4 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
                  >
                    {cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.06 }}
            className="mt-14"
          >
            <FounderScenarioCarousel />
          </motion.div>
        </div>
      </section>

      <section id="audit" className="relative overflow-hidden bg-[#050506] px-5 pb-28 pt-8 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_88%,transparent)]" />
        <div className="pointer-events-none absolute left-[9%] top-[22%] h-72 w-72 rounded-full bg-white/[0.022] blur-[126px]" />
        <div className="pointer-events-none absolute right-[10%] top-[18%] h-[420px] w-[420px] rounded-full bg-[rgba(166,107,255,0.055)] blur-[150px]" />

        <div className="relative mx-auto max-w-[1320px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
            className="mx-auto max-w-[920px] text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              FREE FOUNDER BRAND AUDIT
            </div>

            <h2 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(42px,7vw,59px)] font-bold leading-[1.03] tracking-normal text-[#F4F0E8]">
              Find out what&apos;s weakening your LinkedIn presence.
            </h2>

            <p className="mx-auto mt-6 max-w-[790px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              Get a personalized breakdown of what&apos;s working, what&apos;s missing, and what to fix next in your
              profile, positioning, and content.
            </p>
          </motion.div>

          <div className="mt-14 grid items-start gap-6 lg:grid-cols-[0.94fr_1.06fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="absolute inset-x-7 top-5 h-full translate-x-4 translate-y-4 rounded-[22px] border border-[#A66BFF]/14 bg-[#0B0B0F]/20" />
              <div className="absolute inset-x-3 top-2 h-full -rotate-[2deg] rounded-[22px] border border-white/[0.05] bg-[#101014]/18" />

              <div className="relative rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(11,11,15,0.95)_24%,rgba(5,5,6,0.98))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.55),0_0_50px_rgba(166,107,255,0.06),inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[#A66BFF]">Audit framework</div>
                    <h3 className="mt-3 text-[24px] font-semibold text-[#F4F0E8]">Founder Brand Audit</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/12 bg-white/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                      <Image
                        src="/founder-avatar.jpg"
                        alt="Founder avatar"
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-[12px] border border-white/10 bg-white/[0.04] text-[#A66BFF]">
                      <FileSearch className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[18px] border border-white/10 bg-black/20 p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-[12px] uppercase tracking-[0.16em] text-[#6F6F78]">Review checklist</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#A4A4AA]">
                      Intake review
                    </span>
                  </div>

                  <div className="space-y-3">
                    {auditChecklist.map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-[#101014] text-[#A66BFF]">
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="flex-1 text-[15px] text-[#F4F0E8]">{item}</span>
                        <div className="w-[116px]">
                          <AnimatedProgressBar
                            value={56 + index * 7}
                            delay={index * 0.08}
                            ariaLabel={`${item} strength`}
                            className="h-[6px]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[18px] border border-white/10 bg-[linear-gradient(90deg,rgba(166,107,255,0.12),rgba(255,255,255,0.02))] p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-[12px] border border-white/10 bg-[#101014] text-[#A66BFF]">
                      <CircleGauge className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-[12px] uppercase tracking-[0.16em] text-[#6F6F78]">Output</div>
                      <div className="mt-1 text-[16px] leading-[1.55] text-[#F4F0E8]">
                        A focused breakdown of what to strengthen next.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.06 }}
              className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,11,15,0.88))] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-7"
            >
              <div className="flex flex-wrap items-center gap-3">
                {['Profile', 'Positioning', 'Content'].map((item, index) => (
                  <span
                    key={item}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                      index === 0
                        ? 'border-[#A66BFF]/24 bg-[#A66BFF]/10 text-[#A66BFF]'
                        : 'border-white/10 bg-white/[0.03] text-[#6F6F78]'
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-[#A66BFF]' : 'bg-white/20'}`} aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>

              {!auditSubmitted ? (
                <form className="mt-8" onSubmit={handleAuditSubmit}>
                  <div className="grid gap-5">
                    <AnimatedInput
                      label="LinkedIn profile URL"
                      type="url"
                      inputMode="url"
                      autoComplete="url"
                      value={auditForm.linkedinUrl}
                      onChange={(value) => handleAuditFieldChange('linkedinUrl', value)}
                      placeholder="https://linkedin.com/in/your-profile"
                      required
                    />

                    <AnimatedInput
                      label="What do you sell?"
                      type="text"
                      autoComplete="organization-title"
                      value={auditForm.offer}
                      onChange={(value) => handleAuditFieldChange('offer', value)}
                      placeholder="e.g. consulting, SaaS, agency services"
                      required
                    />

                    <AnimatedInput
                      label="Who do you want to attract?"
                      type="text"
                      autoComplete="off"
                      value={auditForm.audience}
                      onChange={(value) => handleAuditFieldChange('audience', value)}
                      placeholder="e.g. founders, CEOs, clients, investors"
                      required
                    />
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex h-[50px] items-center justify-center gap-3 rounded-[8px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      Get My Free Audit
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>

                    <p className="max-w-[260px] text-[13px] leading-[1.6] text-[#A4A4AA]">
                      Takes 60 seconds. No spam. No obligation.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="mt-8 rounded-[18px] border border-[#A66BFF]/18 bg-[linear-gradient(180deg,rgba(166,107,255,0.11),rgba(11,11,15,0.82))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-[12px] border border-white/10 bg-[#101014] text-[#A66BFF]">
                      <Check className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[20px] font-semibold text-[#F4F0E8]">Your audit request is received.</h3>
                      <p className="mt-3 max-w-[430px] text-[15px] leading-[1.7] text-[#A4A4AA]">
                        We&apos;ll review your profile and respond soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="resources" className="relative overflow-hidden bg-[#050506] px-5 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_88%,transparent)]" />

        <div className="relative mx-auto max-w-[1100px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
            className="mx-auto max-w-[820px] text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A66BFF]">
              <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
              COMMON QUESTIONS
            </div>

            <h2 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(40px,7vw,59px)] font-bold leading-[1.04] tracking-normal text-[#F4F0E8]">
              Questions founders ask before working with us.
            </h2>
            <p className="mx-auto mt-6 max-w-[680px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              Clear answers about our process, fit, expectations, and how a founder brand grows from stronger signals.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.04 }}
            className="mt-14"
          >
            <AnimatedFAQ items={faqItems} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.04 }}
            className="mt-14 grid gap-5 md:grid-cols-2"
          >
            {resourceCards.map(({ title, description, href, cta, icon: Icon }) => (
              <a
                key={title}
                href={href}
                className="group/resource relative overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(11,11,15,0.84))] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[rgba(166,107,255,0.06)] blur-[90px] opacity-0 transition group-hover/resource:opacity-100 motion-reduce:transition-none" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A4A4AA]">
                      <span className="h-2 w-2 rounded-full bg-[#A66BFF]" aria-hidden="true" />
                      Resource
                    </div>
                    <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.02em] text-[#F4F0E8]">{title}</h3>
                  </div>

                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] border border-white/10 bg-white/[0.035] text-[#A66BFF]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <p className="relative mt-6 max-w-[480px] text-[15px] leading-[1.72] text-[#A4A4AA]">{description}</p>

                <div className="relative mt-7 flex items-center justify-between gap-4 border-t border-white/8 pt-5">
                  <span className="text-[13px] font-semibold text-[#F4F0E8]">{cta}</span>
                  <div className="flex min-w-0 items-center justify-end gap-4">
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#A66BFF] transition-transform duration-200 group-hover/resource:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050506] px-5 pb-32 pt-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:98px_98px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />
        <div className="pointer-events-none absolute left-1/2 top-[16%] h-[300px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-[42%] h-[340px] w-[640px] -translate-x-1/2 rounded-full bg-[rgba(166,107,255,0.06)] blur-[150px]" />

        <div className="relative mx-auto max-w-[1240px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
            className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(11,11,15,0.9)_38%,rgba(5,5,6,0.96))] px-6 py-12 text-center shadow-[0_36px_100px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.05)] sm:px-8 sm:py-14 lg:px-14 lg:py-16"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[42%] h-[260px] w-[560px] -translate-x-1/2 rounded-full bg-[rgba(166,107,255,0.07)] blur-[130px]"
              initial={false}
              whileInView={{ opacity: shouldReduceMotion ? 0.18 : 0.26, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
            />

            <h2 className="mx-auto max-w-[920px] font-[family-name:var(--font-cormorant)] text-[clamp(42px,7vw,59px)] font-bold leading-[1.01] tracking-normal text-[#F4F0E8]">
              Stop posting to stay visible.
              <br />
              <span className="italic text-[#A66BFF] [text-shadow:0_0_14px_rgba(166,107,255,0.14)]">
                Start building trust that compounds.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.72] text-[#A4A4AA]">
              Turn your LinkedIn into a founder brand that makes buyers remember, trust, and choose you.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@pitchbhai.com?subject=Free%20Founder%20Brand%20Audit"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[8px] bg-[#F4F0E8] px-5 text-sm font-semibold text-[#050506] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Get My Free Founder Brand Audit
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
              </a>

              <a
                href="mailto:hello@pitchbhai.com?subject=Free%20Strategy%20Call"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-5 text-sm font-semibold text-[#F4F0E8] transition hover:border-white/16 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
              >
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
