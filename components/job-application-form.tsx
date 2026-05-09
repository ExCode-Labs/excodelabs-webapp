'use client';

import { useMemo, useState } from 'react';

import Button from '@/components/button';

type JobApplicationFormProps = {
  roles: string[];
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  yearsExperience: string;
  portfolioUrl: string;
  coverLetter: string;
};

type FormStatus = {
  type: 'idle' | 'error' | 'success';
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlPattern = /^https?:\/\/.+/;

export default function JobApplicationForm({ roles }: JobApplicationFormProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    role: roles[0] ?? '',
    yearsExperience: '',
    portfolioUrl: '',
    coverLetter: '',
  });
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = useMemo(() => {
    const years = Number(form.yearsExperience);
    const validPortfolio =
      form.portfolioUrl.trim().length === 0 ||
      urlPattern.test(form.portfolioUrl.trim());

    return (
      form.fullName.trim().length >= 2 &&
      emailPattern.test(form.email.trim()) &&
      form.phone.trim().length >= 8 &&
      form.role.trim().length > 0 &&
      Number.isFinite(years) &&
      years >= 0 &&
      years <= 50 &&
      validPortfolio &&
      form.coverLetter.trim().length >= 40
    );
  }, [form]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) {
      setStatus({
        type: 'error',
        message:
          'Please complete all required fields. Cover letter must be at least 40 characters and links must start with http or https.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          yearsExperience: Number(form.yearsExperience),
          portfolioUrl: form.portfolioUrl.trim() || null,
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? 'Could not submit application.');
      }

      setStatus({
        type: 'success',
        message:
          'Application submitted successfully. Our team will review and get back to you soon.',
      });
      setForm((prev) => ({
        fullName: '',
        email: '',
        phone: '',
        role: prev.role,
        yearsExperience: '',
        portfolioUrl: '',
        coverLetter: '',
      }));
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Unexpected error while submitting application.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-surface p-6 shadow-sm"
      id="apply"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-primary">
          Full Name
          <input
            type="text"
            value={form.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            className="rounded-xl border border-border bg-input-bg px-4 py-3 text-foreground outline-none transition focus:border-primary"
            placeholder="Alex Johnson"
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-primary">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="rounded-xl border border-border bg-input-bg px-4 py-3 text-foreground outline-none transition focus:border-primary"
            placeholder="alex@email.com"
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-primary">
          Phone
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            className="rounded-xl border border-border bg-input-bg px-4 py-3 text-foreground outline-none transition focus:border-primary"
            placeholder="+1 (555) 000-1234"
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-primary">
          Role
          <select
            value={form.role}
            onChange={(event) => updateField('role', event.target.value)}
            className="rounded-xl border border-border bg-input-bg px-4 py-3 text-foreground outline-none transition focus:border-primary"
            required
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-primary">
          Years of Experience
          <input
            type="number"
            min={0}
            max={50}
            step={1}
            value={form.yearsExperience}
            onChange={(event) =>
              updateField('yearsExperience', event.target.value)
            }
            className="rounded-xl border border-border bg-input-bg px-4 py-3 text-foreground outline-none transition focus:border-primary"
            placeholder="3"
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-primary">
          Portfolio / LinkedIn (Optional)
          <input
            type="url"
            value={form.portfolioUrl}
            onChange={(event) =>
              updateField('portfolioUrl', event.target.value)
            }
            className="rounded-xl border border-border bg-input-bg px-4 py-3 text-foreground outline-none transition focus:border-primary"
            placeholder="https://linkedin.com/in/your-name"
          />
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-primary">
        Cover Letter
        <textarea
          rows={6}
          value={form.coverLetter}
          onChange={(event) => updateField('coverLetter', event.target.value)}
          className="rounded-xl border border-border bg-input-bg px-4 py-3 text-foreground outline-none transition focus:border-primary"
          placeholder="Share your strengths, relevant work, and why you are interested in EXCODE Labs."
          required
        />
      </label>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <Button
          variant="accent"
          type="submit"
          disabled={isSubmitting || !isValid}
          className="disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
