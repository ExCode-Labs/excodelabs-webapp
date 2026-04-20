import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('displays EXCODE Labs text', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('EXCODE Labs');
  });

  it('has correct styling classes', () => {
    render(<Home />);
    const container = screen.getByRole('heading', { level: 1 }).parentElement;
    expect(container).toHaveClass(
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'min-h-screen'
    );
  });

  it('renders without crashing', () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
  });
});
