import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type BaseProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

type PrimaryButtonProps =
  | (BaseProps &
      { href: string; buttonProps?: never } &
      Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'>)
  | (BaseProps & { href?: never; buttonProps?: ButtonHTMLAttributes<HTMLButtonElement> });

const baseClass =
  'inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[var(--text-primary)] px-5 text-sm font-semibold text-[var(--background)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-purple)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] motion-reduce:transition-none motion-reduce:hover:translate-y-0';

export function PrimaryButton(props: PrimaryButtonProps) {
  const { children, className = '', showArrow = false } = props;

  if ('href' in props && typeof props.href === 'string') {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href} {...anchorProps} className={`${baseClass} ${className}`.trim()}>
        <span>{children}</span>
        {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
      </Link>
    );
  }

  return (
    <button
      {...props.buttonProps}
      className={`${baseClass} ${className}`.trim()}
      type={props.buttonProps?.type ?? 'button'}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </button>
  );
}
