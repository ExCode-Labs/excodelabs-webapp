import type { Metadata } from 'next';

import Card from '@/components/card';
import Section from '@/components/section';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Portfolio | EXCODE Labs',
  description: 'Case studies of product outcomes delivered by EXCODE Labs.',
};

export default function PortfolioPage() {
  return (
    <Section
      title="Portfolio"
      subtitle="A snapshot of outcome-driven products delivered for education, hospitality, and agritech teams."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {siteConfig.portfolioProjects.map((project) => (
          <Card
            key={project.name}
            title={project.name}
            description={project.summary}
            badges={project.stack}
            footer={
              <div className="space-y-3 text-sm text-text-muted">
                <p>
                  <span className="font-semibold text-primary">Problem:</span>{' '}
                  {project.problem}
                </p>
                <p>
                  <span className="font-semibold text-primary">Solution:</span>{' '}
                  {project.solution}
                </p>
                <p>
                  <span className="font-semibold text-primary">Outcome:</span>{' '}
                  {project.outcome}
                </p>
              </div>
            }
          />
        ))}
      </div>
    </Section>
  );
}
