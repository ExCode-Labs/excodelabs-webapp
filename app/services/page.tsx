import type { Metadata } from 'next';

import Button from '@/components/button';
import Card from '@/components/card';
import Section from '@/components/section';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Services | EXCODE Labs',
  description:
    'Detailed software development services from strategy to delivery and scale.',
};

export default function ServicesPage() {
  return (
    <Section
      title="Services"
      subtitle="From product strategy to launch and scale, we help teams build reliable digital products that move business metrics."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {siteConfig.services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            description={service.description}
            image={<span>{service.icon}</span>}
            footer={
              <Button href="/contact" variant="accent">
                Request a Quote
              </Button>
            }
          />
        ))}
      </div>
    </Section>
  );
}
