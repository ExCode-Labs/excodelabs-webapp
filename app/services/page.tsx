'use client';

import { useEffect, useState } from 'react';

import Button from '@/components/button';
import Card from '@/components/card';
import Section from '@/components/section';

type Service = {
  title: string;
  description: string;
  icon: string;
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <>
      <Section
        title="Services"
        subtitle="From product strategy to launch and scale, we help teams build reliable digital products that move business metrics."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
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
    </>
  );
}
