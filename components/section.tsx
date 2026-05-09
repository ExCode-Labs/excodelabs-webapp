import type { ReactNode } from 'react';

type SectionProps = {
  title: string;
  subtitle?: string;
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  title,
  subtitle,
  id,
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-6 py-16 md:px-10 ${className}`}
    >
      <div className="mb-8 max-w-3xl">
        <h2 className="text-4xl leading-tight font-semibold text-primary md:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-base text-text-muted md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
