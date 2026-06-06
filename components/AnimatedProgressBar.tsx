"use client";

import { useRef } from 'react';
import { clamp } from 'popmotion';
import { motion, useInView, useReducedMotion } from 'motion/react';

type AnimatedProgressBarProps = {
  value: number;
  label?: string;
  color?: string;
  className?: string;
  wrapperClassName?: string;
  barClassName?: string;
  labelClassName?: string;
  delay?: number;
  ariaLabel?: string;
  animateOnView?: boolean;
};

export function AnimatedProgressBar({
  value,
  label,
  color = '#A66BFF',
  className = '',
  wrapperClassName = '',
  barClassName = '',
  labelClassName = '',
  delay = 0,
  ariaLabel = 'Progress',
  animateOnView = true,
}: AnimatedProgressBarProps) {
  const shouldReduceMotion = useReducedMotion();
  const barRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(barRef, { once: true, amount: 0.65 });

  const safeValue = clamp(0, 100, value);
  const width = `${safeValue}%`;
  const targetWidth = !animateOnView || inView || shouldReduceMotion ? width : '0%';

  return (
    <div className={wrapperClassName}>
      {label ? (
        <div className={`mb-2 flex items-center justify-between text-sm text-[#A4A4AA] ${labelClassName}`.trim()}>
          <span className="font-medium text-[#F4F0E8]">{label}</span>
          <span className="tabular-nums">{Math.round(safeValue)}%</span>
        </div>
      ) : null}

      <div
        ref={barRef}
        role="progressbar"
        aria-label={ariaLabel}
        aria-valuenow={Math.round(safeValue)}
        aria-valuemin={0}
        aria-valuemax={100}
        className={`relative h-3 w-full overflow-hidden rounded-full border border-white/10 bg-[#0B0B0F] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${className}`.trim()}
      >
        <motion.div
          className={`absolute left-0 top-0 h-full rounded-full ${barClassName}`.trim()}
          style={{ backgroundColor: color }}
          initial={{ width: shouldReduceMotion ? width : '0%' }}
          animate={{ width: targetWidth }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            ease: 'easeOut',
            delay: shouldReduceMotion ? 0 : delay,
          }}
        />
      </div>
    </div>
  );
}
