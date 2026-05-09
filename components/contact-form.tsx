'use client';

import { useMemo, useState } from 'react';

import Button from '@/components/button';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = {
  type: 'idle' | 'error' | 'success';
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      form.message.trim().length >= 10
    );
  }, [form]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) {
      setStatus({
        type: 'error',
        message:
          'Please enter a valid name, email, and message (minimum 10 characters).',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? 'Failed to submit your message.');
      }

      setStatus({
        type: 'success',
        message: 'Thanks! We received your message and will reply shortly.',
      });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Unexpected error while submitting form.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-surface p-6 shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-primary">
          Name
          <input
            type="text"
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            className="rounded-xl border border-border bg-input-bg px-4 py-3 text-foreground outline-none transition focus:border-primary"
            placeholder="Jane Doe"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-primary">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            className="rounded-xl border border-border bg-input-bg px-4 py-3 text-foreground outline-none transition focus:border-primary"
            placeholder="jane@company.com"
          />
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-primary">
        Message
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          className="rounded-xl border border-border bg-input-bg px-4 py-3 text-foreground outline-none transition focus:border-primary"
          placeholder="Tell us about your goals, timeline, and budget."
        />
      </label>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <Button
          variant="accent"
          type="submit"
          disabled={!isValid || isSubmitting}
          className="disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        {status.message ? (
          <p
            className={`text-sm ${
              status.type === 'success' ? 'text-emerald-700' : 'text-rose-700'
            }`}
            role="status"
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
