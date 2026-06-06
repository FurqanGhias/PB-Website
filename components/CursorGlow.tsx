"use client";

import type { CSSProperties, ReactNode } from 'react';
import { useRef } from 'react';
import { clamp } from 'popmotion';
import { useReducedMotion } from 'motion/react';

type CursorGlowProps = {
  children: ReactNode;
  className?: string;
  glow?: string;
  radius?: number;
};

export function CursorGlow({
  children,
  className = '',
  glow = 'rgba(166,107,255,0.10)',
  radius = 520,
}: CursorGlowProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className={`relative ${className}`.trim()}
      style={
        {
          // Default center.
          ['--glow-x' as any]: '50%',
          ['--glow-y' as any]: '36%',
          ['--glow' as any]: glow,
          ['--glow-r' as any]: `${radius}px`,
        } as CSSProperties
      }
      onPointerMove={(event) => {
        if (shouldReduceMotion) return;
        const node = ref.current;
        if (!node) return;

        const rect = node.getBoundingClientRect();
        const px = clamp(0, 1, (event.clientX - rect.left) / rect.width);
        const py = clamp(0, 1, (event.clientY - rect.top) / rect.height);

        node.style.setProperty('--glow-x', `${(px * 100).toFixed(2)}%`);
        node.style.setProperty('--glow-y', `${(py * 100).toFixed(2)}%`);
      }}
      onPointerLeave={() => {
        if (shouldReduceMotion) return;
        const node = ref.current;
        if (!node) return;
        node.style.setProperty('--glow-x', '50%');
        node.style.setProperty('--glow-y', '36%');
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-100"
        style={{
          background:
            'radial-gradient(var(--glow-r) circle at var(--glow-x) var(--glow-y), var(--glow), transparent 62%)',
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
