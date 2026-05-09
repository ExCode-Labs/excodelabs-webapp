'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
] as const;

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const isClient = useSyncExternalStore(
    () => () => {
      // No subscription needed; this only provides a hydration-safe client flag.
    },
    () => true,
    () => false
  );
  const activeTheme = isClient
    ? (resolvedTheme ?? theme ?? 'system')
    : 'system';

  return (
    <div className="mt-6">
      <p className="text-xs font-bold uppercase tracking-widest text-white/70">
        Theme
      </p>
      <div className="mt-3 inline-flex rounded-full border border-white/30 p-1">
        {options.map((option) => {
          const isActive = activeTheme === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setTheme(option.value)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                isActive
                  ? 'bg-white text-[var(--color-primary)]'
                  : 'text-white/85 hover:bg-white/15'
              }`}
              aria-pressed={isActive}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
