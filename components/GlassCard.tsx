import type { ReactNode } from 'react';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`rounded-[24px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl ${className}`.trim()}
    >
      {children}
    </div>
  );
}
