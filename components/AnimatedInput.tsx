"use client";

import type { InputHTMLAttributes } from 'react';
import { useId, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type AnimatedInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export function AnimatedInput({ label, value, onChange, className = '', id, ...props }: AnimatedInputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const shouldReduceMotion = useReducedMotion();
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.trim().length > 0;
  const placeholder = props.placeholder ?? '';

  return (
    <div className={`relative ${className}`.trim()}>
      <input
        {...props}
        id={inputId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={(event) => {
          setIsFocused(true);
          props.onFocus?.(event);
        }}
        onBlur={(event) => {
          setIsFocused(false);
          props.onBlur?.(event);
        }}
        placeholder={isFloating ? placeholder : ''}
        className="h-[56px] w-full rounded-[14px] border border-white/10 bg-white/[0.03] px-4 pb-3 pt-6 text-[15px] text-[#F4F0E8] outline-none placeholder:text-[#6F6F78] focus:border-[#A66BFF]/45 focus:ring-2 focus:ring-[#A66BFF]/20 motion-reduce:transition-none"
      />
      <motion.label
        htmlFor={inputId}
        initial={false}
        animate={{
          y: isFloating ? -18 : 0,
          scale: isFloating ? 0.86 : 1,
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 0.25,
                ease: 'easeOut',
              }
        }
        className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 origin-left text-[14px] font-medium tracking-normal ${
          isFloating ? 'text-[#A66BFF]' : 'text-[#A4A4AA]'
        }`.trim()}
      >
        {label}
      </motion.label>
    </div>
  );
}
