import Button from '@/components/button';

type HeroProps = {
  readonly heading: string;
  readonly subtext: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
};

export default function Hero({
  heading,
  subtext,
  ctaLabel,
  ctaHref,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary px-6 py-24 text-white md:px-10">
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6">
        <p className="inline-flex w-fit rounded-full border border-white/50 px-4 py-2 text-xs uppercase tracking-[0.2em]">
          Digital Product Partner
        </p>
        <h1 className="max-w-4xl font-theme text-5xl leading-tight md:text-7xl">
          {heading}
        </h1>
        <p className="max-w-3xl text-lg text-white/85 md:text-xl">{subtext}</p>
        <div className="pt-2">
          <Button href={ctaHref} variant="accent">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
