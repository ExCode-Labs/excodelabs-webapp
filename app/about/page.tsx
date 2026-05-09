import type { Metadata } from 'next';
import Image from 'next/image';

import Card from '@/components/card';
import Section from '@/components/section';
import { siteConfig } from '@/lib/site-config';
import { team, values } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About | EXCODE Labs',
  description: 'Our mission, vision, and team behind EXCODE Labs.',
};

export default function AboutPage() {
  return (
    <>
      <Section
        title="About EXCODE Labs"
        subtitle="Our mission is to help businesses build scalable digital solutions that create measurable value."
      >
        <div className="grid gap-6 rounded-3xl border border-border bg-surface p-8 shadow-sm md:grid-cols-[220px_1fr] md:items-center">
          <div className="mx-auto flex w-full max-w-55 items-center justify-center rounded-2xl p-4">
            <Image
              src={siteConfig.company.logoPath}
              alt={`${siteConfig.company.name} logo`}
              width={180}
              height={180}
              priority
            />
          </div>
          <p className="text-lg leading-relaxed text-text-muted">
            {siteConfig.about.mission}
          </p>
        </div>
      </Section>

      <Section
        title="Our Team"
        subtitle="A cross-functional leadership group with product and engineering depth."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <Card
              key={member.name}
              title={member.name}
              description={`${member.role}. ${member.bio}`}
              image={<span>👤</span>}
            />
          ))}
        </div>
      </Section>

      <Section
        title="Vision & Values"
        subtitle="Innovation, reliability, and accessibility shape how we build."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
