import type { Metadata } from 'next';

import Button from '@/components/button';
import Card from '@/components/card';
import JobApplicationForm from '@/components/job-application-form';
import Section from '@/components/section';
import { siteConfig } from '@/lib/site-config';
import { jobs } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Careers | EXCODE Labs',
  description: 'Open opportunities and team culture at EXCODE Labs.',
};

export default function CareersPage() {
  return (
    <>
      <Section
        title="Careers"
        subtitle="We are building a focused team of builders, thinkers, and problem-solvers who care about meaningful work."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.jobs.map((job) => (
            <Card
              key={job.title}
              title={job.title}
              description={`${job.description} Location: ${job.location}.`}
              footer={
                <Button href="#apply" variant="accent">
                  Apply Now
                </Button>
              }
            />
          ))}
        </div>
      </Section>

      <Section
        title="Why Work With Us"
        subtitle="A culture built on ownership, growth, and respect for both craft and people."
      >
        <div className="grid gap-4 rounded-3xl bg-secondary p-8 md:grid-cols-3">
          {siteConfig.careers.whyWorkWithUs.map((item) => (
            <div key={item.title}>
              <h3 className="text-2xl font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Job Application"
        subtitle="Submit your details through our application form and we will review your profile shortly."
      >
        <JobApplicationForm roles={jobs.map((job) => job.title)} />
      </Section>
    </>
  );
}
