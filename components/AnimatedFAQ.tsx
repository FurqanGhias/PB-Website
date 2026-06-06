"use client";

import { useId, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export type FAQItem = {
  question: string;
  answer: string;
};

type AnimatedFAQProps = {
  items: FAQItem[];
  className?: string;
};

export function AnimatedFAQ({ items, className = '' }: AnimatedFAQProps) {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(-1);
  const baseId = useId();

  return (
    <div className={className}>
      <div className="divide-y divide-white/8 rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,11,15,0.88))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        {items.map((item, index) => {
          const isOpen = index === openIndex;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;

          return (
            <div key={item.question} className="px-5 py-1 sm:px-6">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                className="flex w-full items-center justify-between gap-4 rounded-[14px] py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66BFF]/60"
              >
                <span className="text-[16px] font-semibold leading-[1.35] text-[#F4F0E8] sm:text-[17px]">
                  {item.question}
                </span>
                <motion.span
                  initial={false}
                  animate={shouldReduceMotion ? { rotate: 0 } : { rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[#A4A4AA]"
                  aria-hidden="true"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              <motion.div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                initial={false}
                animate={{
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: 'easeOut' }}
                className="overflow-hidden"
                inert={!isOpen ? true : undefined}
              >
                <div className="max-w-[900px] pb-5 text-[15px] leading-[1.7] text-[#A4A4AA]">{item.answer}</div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
