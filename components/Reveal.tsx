"use client";

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useHydratedReducedMotion } from './useHydratedReducedMotion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.55,
  y = 14,
  once = true,
  amount = 0.25,
}: RevealProps) {
  const shouldReduceMotion = useHydratedReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: shouldReduceMotion ? 0 : duration, delay: shouldReduceMotion ? 0 : delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
};

export function RevealStagger({
  children,
  className = '',
  stagger = 0.06,
  delayChildren = 0.02,
  once = true,
  amount = 0.25,
}: RevealStaggerProps) {
  const shouldReduceMotion = useHydratedReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {},
      }}
      transition={{
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  const shouldReduceMotion = useHydratedReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

