import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'accent' | 'ghost';

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = BaseProps & {
  href: string;
};

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-strong)]',
  accent:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-strong)]',
  ghost:
    'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]';

export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', className = '' } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ('href' in props) {
    return (
      <Link href={props.href!} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props;

  return (
    <button
      type={buttonProps.type ?? 'button'}
      {...buttonProps}
      className={classes}
    >
      {children}
    </button>
  );
}
