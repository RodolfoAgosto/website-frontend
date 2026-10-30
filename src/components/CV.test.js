import { render, screen } from '@testing-library/react';
import CV, { CV_PATH } from './CV';

describe('CV', () => {
  test('offers the base CV as a PDF download', () => {
    render(<CV />);
    const link = screen.getByRole('link', { name: /descargar cv/i });
    expect(link).toHaveAttribute('href', CV_PATH);
    expect(link).toHaveAttribute('download', 'CV-Rodolfo-Agosto.pdf');
  });

  test('keeps the option to request a tailored version', () => {
    render(<CV />);
    expect(screen.getByRole('button', { name: /pedime una versión adaptada/i })).toBeInTheDocument();
  });
});
