"use client";

import { useId, useMemo, useRef } from 'react';
import { motion } from 'motion/react';
import { useHydratedReducedMotion } from './useHydratedReducedMotion';

export type AnimatedTabsOption = {
  value: string;
  label: string;
};

type AnimatedTabsProps = {
  value: string;
  onChange: (value: string) => void;
  tabs: AnimatedTabsOption[];
  className?: string;
  ariaLabel?: string;
};

export function AnimatedTabs({
  value,
  onChange,
  tabs,
  className = '',
  ariaLabel = 'Tabs',
}: AnimatedTabsProps) {
  const shouldReduceMotion = useHydratedReducedMotion();
  const layoutId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = useMemo(() => {
    const idx = tabs.findIndex((tab) => tab.value === value);
    return idx >= 0 ? idx : 0;
  }, [tabs, value]);

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={(event) => {
        if (!tabs.length) return;
        const isHorizontalKey = event.key === 'ArrowLeft' || event.key === 'ArrowRight';
        const isEdgeKey = event.key === 'Home' || event.key === 'End';
        if (!isHorizontalKey && !isEdgeKey) return;

        event.preventDefault();

        const lastIndex = tabs.length - 1;
        let nextIndex = activeIndex;

        if (event.key === 'ArrowRight') nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
        if (event.key === 'ArrowLeft') nextIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = lastIndex;

        onChange(tabs[nextIndex].value);
        tabRefs.current[nextIndex]?.focus();
      }}
      className={`inline-flex items-center rounded-[14px] border border-white/10 bg-white/[0.03] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${className}`.trim()}
    >
      {tabs.map((tab, index) => {
        const isActive = tab.value === value;

        return (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.value)}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            className="relative isolate rounded-[12px] px-4 py-2 text-[13px] font-semibold tracking-[-0.01em] text-[#A4A4AA] transition-colors duration-200 hover:text-[#F4F0E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506] motion-reduce:transition-none"
          >
            {isActive ? (
              <motion.span
                layoutId={`tabs-indicator-${layoutId}`}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        type: 'spring',
                        stiffness: 260,
                        damping: 30,
                        mass: 0.75,
                      }
                }
                className="absolute inset-0 -z-10 rounded-[12px] border border-white/10 bg-white/[0.06] shadow-[0_18px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)]"
                aria-hidden="true"
              />
            ) : null}
            <span className={isActive ? 'text-[#F4F0E8]' : undefined}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
