import Button from '@/components/button';
import Card from '@/components/card';
import ContactForm from '@/components/contact-form';
import Hero from '@/components/hero';
import Section from '@/components/section';
import { siteConfig } from '@/lib/site-config';

export default function Home() {
  return (
    <>
      <Hero
        heading={siteConfig.home.hero.heading}
        subtext={siteConfig.home.hero.subtext}
        ctaLabel={siteConfig.home.hero.ctaLabel}
        ctaHref={siteConfig.home.hero.ctaHref}
      />

      <Section
        id="services"
        title="Services"
        subtitle="Outcome-driven engineering capabilities tailored to your stage, team, and growth targets."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              image={<span>{service.icon}</span>}
            />
          ))}
        </div>
      </Section>

      <Section
        id="portfolio"
        title="Portfolio Highlights"
        subtitle="Selected projects where product thinking and technical depth produced measurable outcomes."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.portfolioProjects.map((project) => (
            <Card
              key={project.name}
              title={project.name}
              description={project.summary}
              badges={project.stack}
            />
          ))}
        </div>
      </Section>

      <Section
        id="testimonials"
        title="Testimonials & Clients"
        subtitle="Trusted by teams who need delivery speed without compromising quality."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.testimonials.map((item) => (
            <Card
              key={item.author}
              title={item.author}
              description={`\"${item.quote}\"`}
              footer={
                <p className="text-sm font-semibold text-primary">
                  {item.role}
                </p>
              }
            />
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl py-4">
          <div className="client-track">
            {[...siteConfig.clients, ...siteConfig.clients].map(
              (client, index) => (
                <span key={`${client}-${index}`} className="client-chip">
                  {client}
                </span>
              )
            )}
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        title="Start Your Project"
        subtitle="Share your challenge and we will get back with a clear, practical plan."
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-primary p-6 text-white">
              <h3 className="text-3xl font-semibold">
                {siteConfig.home.contactPromo.heading}
              </h3>
              <p className="mt-3 text-sm text-white/85">
                {siteConfig.home.contactPromo.text}
              </p>
              <div className="mt-5">
                <Button
                  href={siteConfig.home.contactPromo.ctaHref}
                  variant="accent"
                >
                  {siteConfig.home.contactPromo.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
