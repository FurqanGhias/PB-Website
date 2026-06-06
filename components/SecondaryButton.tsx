import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

type SecondaryButtonProps =
  | ({ children: ReactNode; href: string; className?: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'>)
  | ({ children: ReactNode; href?: never; className?: string; buttonProps?: ButtonHTMLAttributes<HTMLButtonElement> });

const baseClass =
  'inline-flex h-12 items-center justify-center rounded-[8px] border border-[var(--border)] bg-transparent px-5 text-sm font-medium text-[var(--text-primary)] transition duration-200 hover:border-[var(--color-accent-purple)] hover:bg-[var(--accent-purple-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] motion-reduce:transition-none';

export function SecondaryButton(props: SecondaryButtonProps) {
  const { children, className = '' } = props;

  if ('href' in props && typeof props.href === 'string') {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href} {...anchorProps} className={`${baseClass} ${className}`.trim()}>
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props.buttonProps}
      className={`${baseClass} ${className}`.trim()}
      type={props.buttonProps?.type ?? 'button'}
    >
      {children}
    </button>
  );
}
