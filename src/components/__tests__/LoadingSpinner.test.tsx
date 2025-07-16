import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByRole('generic');
    expect(spinner).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    const testText = 'Loading...';
    render(<LoadingSpinner text={testText} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    render(<LoadingSpinner size="lg" />);
    const spinner = screen.getByRole('generic');
    expect(spinner.querySelector('div')).toHaveClass('w-12', 'h-12');
  });

  it('applies correct color classes', () => {
    render(<LoadingSpinner color="secondary" />);
    const spinner = screen.getByRole('generic');
    expect(spinner.querySelector('div')).toHaveClass('text-[#EF9202]');
  });
}); 