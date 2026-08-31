import Link from 'next/link';

import ThemeSwitcher from '@/components/theme-switcher';
import { siteConfig } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <h3 className="font-theme text-3xl">{siteConfig.company.name}</h3>
          <p className="mt-3 text-sm text-white/80">
            {siteConfig.company.description}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/70">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.navigation.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/85 transition hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/70">
            Connect
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>Email: {siteConfig.contact.email}</li>
            <li>Phone: {siteConfig.contact.phone}</li>
            <li>Address: {siteConfig.contact.address}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {siteConfig.socialLinks.map((social) => (
              <a
                target={social.target}
                key={social.label}
                href={social.href}
                className="footer-pill"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-xs text-white/75">
        © {new Date().getFullYear()} {siteConfig.company.name}. All rights
        reserved.
      </div>
    </footer>
  );
}
