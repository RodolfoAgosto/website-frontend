import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import Recommendations from './Recommendations';
import recommendations from '../../data/recommendations';

// The data module is replaced by a mutable list that each test fills.
jest.mock('../../data/recommendations', () => ({
  __esModule: true,
  default: [],
  MAX_RECOMMENDATIONS: 12,
  EXAMPLE_RECOMMENDATIONS: Array.from({ length: 9 }, (_, i) => ({
    name: `Ejemplo ${i + 1}`,
    role: 'Puesto',
    company: 'Empresa X',
    text: `Texto de ejemplo ${i + 1}`,
  })),
}));

const fill = (count) => {
  recommendations.length = 0;
  for (let i = 1; i <= count; i += 1) {
    recommendations.push({
      name: `Persona ${i}`,
      role: 'Puesto de prueba',
      company: 'Empresa de prueba',
      text: `Texto de prueba ${i}`,
    });
  }
};

const renderSection = () =>
  render(
    <ThemeProvider theme={theme}>
      <Recommendations />
    </ThemeProvider>
  );

beforeAll(() => {
  // jsdom has no matchMedia: simulate a desktop screen (3 cards per page).
  window.matchMedia = (query) => ({
    matches: true,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
  });
});

test('with no recommendations it shows the generic examples as a 3-page carousel', () => {
  fill(0);
  renderSection();
  expect(screen.getByText('En construcción')).toBeInTheDocument();
  expect(screen.getAllByTestId('recommendation')).toHaveLength(3);
  expect(screen.getByText('Ejemplo 1')).toBeInTheDocument();
  expect(screen.getAllByLabelText(/Ir a la página/)).toHaveLength(3);
});

test('with one real recommendation the examples disappear', () => {
  fill(1);
  renderSection();
  expect(screen.getAllByTestId('recommendation')).toHaveLength(1);
  expect(screen.getByText('Persona 1')).toBeInTheDocument();
  expect(screen.queryByText('Ejemplo 1')).not.toBeInTheDocument();
  expect(screen.queryByText('En construcción')).not.toBeInTheDocument();
  // A single page: no carousel controls.
  expect(screen.queryAllByLabelText(/Ir a la página/)).toHaveLength(0);
});

test('with 9 recommendations it shows 3 at a time and paginates', () => {
  fill(9);
  renderSection();
  expect(screen.getAllByTestId('recommendation')).toHaveLength(3);
  expect(screen.getByText(/Texto de prueba 1”/)).toBeInTheDocument();

  fireEvent.click(screen.getByLabelText('Recomendaciones siguientes'));
  expect(screen.getByText(/Texto de prueba 4”/)).toBeInTheDocument();
  expect(screen.queryByText(/Texto de prueba 1”/)).not.toBeInTheDocument();
});

test('never shows more than the maximum number of recommendations', () => {
  fill(15);
  renderSection();
  // 12 recommendations / 3 per page = 4 pages.
  expect(screen.getAllByLabelText(/Ir a la página/)).toHaveLength(4);
});

test('a real card shows the role, the company and a LinkedIn link', () => {
  fill(0);
  recommendations.push({
    name: 'Persona Uno',
    role: 'Líder de equipo',
    company: 'Empresa de prueba',
    text: 'Texto de prueba',
    linkedin: 'https://www.linkedin.com/in/persona-uno/',
  });
  renderSection();
  expect(screen.getByText('Líder de equipo')).toBeInTheDocument();
  expect(screen.getByText('Empresa de prueba')).toBeInTheDocument();
  expect(screen.getByLabelText('Perfil de LinkedIn de Persona Uno')).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/persona-uno/'
  );
});
