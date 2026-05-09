import type { Metadata } from 'next';

import ContactForm from '@/components/contact-form';
import Section from '@/components/section';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact | EXCODE Labs',
  description:
    'Contact EXCODE Labs to discuss your product, engineering, and growth goals.',
};

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      subtitle="Tell us about your business goals and we will propose a practical roadmap and delivery plan."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-primary">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li>Email: {siteConfig.contact.email}</li>
              <li>Phone: {siteConfig.contact.phone}</li>
              <li>Address: {siteConfig.contact.addressFull}</li>
            </ul>
          </div>
          <iframe
            title="EXCODE Labs Office Location"
            src={siteConfig.contact.mapEmbedUrl}
            className="h-72 w-full rounded-3xl border border-border"
            loading="lazy"
          />
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
