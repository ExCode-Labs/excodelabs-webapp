'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { siteConfig } from '@/lib/site-config';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface backdrop-blur-xl">
      <nav className="mx-auto w-full max-w-6xl px-6 py-4 md:px-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-theme text-3xl tracking-wide text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteConfig.company.shortName}
          </Link>

          <ul className="hidden items-center gap-6 text-sm font-semibold md:flex">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-colors ${
                      isActive
                        ? 'text-accent'
                        : 'text-text-muted hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hidden rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-accent-strong md:inline-flex"
            >
              Start Project
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-border p-2 text-primary md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-5 flex-col gap-1">
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
                <span className="h-0.5 w-full bg-current" />
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="mt-4 rounded-2xl border border-border bg-surface p-4 shadow-sm md:hidden">
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block rounded-lg px-3 py-2 text-sm font-semibold ${
                        isActive
                          ? 'bg-secondary text-accent'
                          : 'text-text-muted hover:bg-secondary hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 inline-flex w-full justify-center rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-accent-strong"
            >
              Start Project
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
