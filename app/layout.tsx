import type { Metadata } from 'next';
import { Alan_Sans } from 'next/font/google';
import LocalFont from 'next/font/local';

import NextTopLoader from 'nextjs-toploader';

import SiteLayout from '@/components/site-layout';
import ThemeProvider from '@/components/theme-provider';
import './globals.css';

const stedelijk = LocalFont({
  variable: '--font-stedelijk',
  src: '../public/fonts/Stedelijk-Regular.woff2',
});
const alan = Alan_Sans({
  variable: '--font-alan',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  adjustFontFallback: false,
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EXCode Labs - Building Scalable IT Solutions for Modern Businesses.',
  description:
    "We design and develop reliable, scalable software solutions tailored to your business needs. From idea to deployment, we provide end-to-end IT services including custom software development, web application development, and system design. Our focus is on building high-quality, performance-driven digital products that help businesses streamline operations, improve efficiency, and achieve real results. Whether you're a startup or a growing company, we deliver secure, scalable, and user-focused solutions designed for long-term success.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${stedelijk.variable} ${alan.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="ExCode Labs" />
      </head>
      <body>
        <ThemeProvider>
          <NextTopLoader color="var(--color-accent)" showSpinner={false} />
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
