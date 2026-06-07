"use client";

import { useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react';

type CursorMode = 'default' | 'interactive' | 'view' | 'text';

const interactiveSelector =
  'a, button, [role="button"], input, textarea, select, [contenteditable="true"], [data-cursor]';

export default function SmoothCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 520, damping: 42, mass: 0.24 });
  const ringY = useSpring(mouseY, { stiffness: 520, damping: 42, mass: 0.24 });
  const glowX = useSpring(mouseX, { stiffness: 260, damping: 34, mass: 0.38 });
  const glowY = useSpring(mouseY, { stiffness: 260, damping: 34, mass: 0.38 });

  const dotTransform = useMotionTemplate`translate3d(${mouseX}px, ${mouseY}px, 0) translate3d(-50%, -50%, 0)`;
  const ringTransform = useMotionTemplate`translate3d(${ringX}px, ${ringY}px, 0) translate3d(-50%, -50%, 0)`;
  const glowTransform = useMotionTemplate`translate3d(${glowX}px, ${glowY}px, 0) translate3d(-50%, -50%, 0)`;

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>('default');
  const [label, setLabel] = useState('');

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncEnabled = () => {
      const hasTouch = navigator.maxTouchPoints > 0 || window.matchMedia('(any-pointer: coarse)').matches;
      setEnabled(desktopQuery.matches && !reducedMotionQuery.matches && !hasTouch);
    };

    syncEnabled();
    desktopQuery.addEventListener('change', syncEnabled);
    reducedMotionQuery.addEventListener('change', syncEnabled);

    return () => {
      desktopQuery.removeEventListener('change', syncEnabled);
      reducedMotionQuery.removeEventListener('change', syncEnabled);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (!enabled) {
      root.classList.remove('smooth-cursor-active');
      setVisible(false);
      return;
    }

    root.classList.add('smooth-cursor-active');

    const updateTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        setMode('default');
        setLabel('');
        return;
      }

      const interactive = target.closest<HTMLElement>(interactiveSelector);
      if (!interactive) {
        setMode('default');
        setLabel('');
        return;
      }

      const isTextControl = interactive.matches('input, textarea, select, [contenteditable="true"]');
      if (isTextControl) {
        setMode('text');
        setLabel('');
        return;
      }

      const requestedMode = interactive.dataset.cursor;
      setMode(requestedMode === 'view' ? 'view' : 'interactive');
      setLabel(interactive.dataset.cursorLabel ?? '');
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);
      updateTarget(event.target);
    };

    const onPointerEnter = () => setVisible(true);
    const onPointerLeave = () => setVisible(false);
    const onMouseOver = (event: MouseEvent) => updateTarget(event.target);
    const onMouseOut = (event: MouseEvent) => updateTarget(event.relatedTarget);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.documentElement.addEventListener('pointerenter', onPointerEnter);
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    return () => {
      root.classList.remove('smooth-cursor-active');
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerenter', onPointerEnter);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  const isInteractive = mode === 'interactive' || mode === 'view';
  const isTextMode = mode === 'text';
  const ringScale = isTextMode ? 0.38 : isInteractive ? (mode === 'view' ? 1.08 : 1) : 0.53125;

  return (
    <div className="smooth-cursor" aria-hidden="true">
      <motion.div
        className="smooth-cursor__glow"
        style={{ transform: glowTransform }}
        animate={{
          opacity: visible ? (isTextMode ? 0.06 : isInteractive ? 0.72 : 0.38) : 0,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        <motion.span
          animate={{ scale: isTextMode ? 0.56 : isInteractive ? 1.08 : 0.84 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </motion.div>

      <motion.div
        className="smooth-cursor__ring"
        style={{ transform: ringTransform }}
        animate={{ opacity: visible ? (isTextMode ? 0.24 : 1) : 0 }}
        transition={{ duration: 0.16, ease: 'easeOut' }}
      >
        <motion.span
          animate={{ scale: ringScale }}
          transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.28 }}
        >
          <AnimatePresence mode="wait">
            {label && isInteractive ? (
              <motion.b
                key={label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.16, ease: 'easeOut' }}
              >
                {label}
              </motion.b>
            ) : null}
          </AnimatePresence>
        </motion.span>
      </motion.div>

      <motion.div
        className="smooth-cursor__dot"
        style={{ transform: dotTransform }}
        animate={{ opacity: visible ? (isTextMode ? 0.42 : 1) : 0 }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      >
        <motion.span
          animate={{
            scale: isTextMode ? 0.55 : isInteractive ? 1.35 : 1,
            backgroundColor: isInteractive ? '#A66BFF' : '#F4F0E8',
          }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        />
      </motion.div>
    </div>
  );
}
