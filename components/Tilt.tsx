"use client";

import type { ReactNode } from 'react';
import { useRef } from 'react';
import { clamp, interpolate } from 'popmotion';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

type TiltProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  hoverScale?: number;
};

export function Tilt({ children, className = '', maxTilt = 5, hoverScale = 1.01 }: TiltProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const scaleRaw = useMotionValue(1);

  // Premium feel: slightly damped springs to avoid "bouncy" overshoot.
  const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 24, mass: 0.7 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 24, mass: 0.7 });
  const scale = useSpring(scaleRaw, { stiffness: 220, damping: 26, mass: 0.55 });

  const reset = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
    scaleRaw.set(1);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1200,
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        scale: shouldReduceMotion ? 1 : scale,
      }}
      onPointerLeave={() => reset()}
      onPointerMove={(event) => {
        if (shouldReduceMotion) return;
        const node = ref.current;
        if (!node) return;

        const rect = node.getBoundingClientRect();
        const px = clamp(0, 1, (event.clientX - rect.left) / rect.width);
        const py = clamp(0, 1, (event.clientY - rect.top) / rect.height);

        // Centered range [-1..1].
        const dx = px * 2 - 1;
        const dy = py * 2 - 1;

        rotateYRaw.set(interpolate([-1, 1], [-maxTilt, maxTilt])(dx));
        rotateXRaw.set(interpolate([-1, 1], [maxTilt, -maxTilt])(dy));
        scaleRaw.set(hoverScale);
      }}
    >
      {children}
    </motion.div>
  );
}
