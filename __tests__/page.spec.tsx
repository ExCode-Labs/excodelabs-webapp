import { render, screen } from '@testing-library/react';

import Home from '@/app/page';
import { siteConfig } from '@/lib/site-config';

describe('Home Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            services: [
              // put the service objects expected by your component here
            ],
          }),
      } as Response)
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the hero heading from site config', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(siteConfig.home.hero.heading);
  });

  it('renders the services and portfolio sections', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Services' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Portfolio Highlights',
      })
    ).toBeInTheDocument();
  });

  /* it('renders all configured service cards', () => {
    render(<Home />);

    for (const service of siteConfig.services) {
      expect(
        screen.getByRole('heading', { level: 3, name: service.title })
      ).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    }
  });*/

  it('renders testimonials and client chips from config', () => {
    render(<Home />);

    for (const testimonial of siteConfig.testimonials) {
      expect(
        screen.getByRole('heading', { level: 3, name: testimonial.author })
      ).toBeInTheDocument();
      expect(screen.getByText(testimonial.role)).toBeInTheDocument();
    }

    for (const client of siteConfig.clients) {
      const chips = screen.getAllByText(client);
      expect(chips.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('renders contact promo CTA with configured destination', () => {
    render(<Home />);

    const cta = screen.getByRole('link', {
      name: siteConfig.home.contactPromo.ctaLabel,
    });

    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', siteConfig.home.contactPromo.ctaHref);
  });
});
