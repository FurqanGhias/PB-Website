import type { ReactNode } from 'react';

type SectionBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function SectionBadge({ children, className = '' }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-secondary)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
