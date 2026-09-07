import type { ReactNode } from 'react';

type CardProps = {
  readonly title: string;
  readonly description: string;
  readonly image?: ReactNode;
  readonly badges?: string[];
  readonly footer?: ReactNode;
  readonly className?: string;
};

export default function Card({
  title,
  description,
  image,
  badges,
  footer,
  className = '',
}: CardProps) {
  return (
    <article
      className={`rounded-3xl border border-border bg-surface p-6 shadow-[0_14px_40px_rgba(0,43,102,0.08)] transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {image ? <div className="mb-4 text-4xl">{image}</div> : null}
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">
        {description}
      </p>
      {badges && badges.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
            >
              {badge}
            </span>
          ))}
        </div>
      ) : null}
      {footer ? <div className="mt-6">{footer}</div> : null}
    </article>
  );
}
