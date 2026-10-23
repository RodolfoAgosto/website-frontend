import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './styles/theme';

// jsdom does not implement these browser APIs, which the layout relies on.
beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  window.scrollTo = jest.fn();
});

const renderAt = (path) => {
  window.history.pushState({}, '', path);
  return render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

test('renders the home page with the main sections in the menu', () => {
  renderAt('/');
  expect(screen.getAllByText(/Proyectos/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Contacto/i).length).toBeGreaterThan(0);
});

test('renders the Lirium project page at its route', () => {
  renderAt('/pages/lirium_project');
  expect(
    screen.getAllByText(/Lirium Nutrition Planning/i).length
  ).toBeGreaterThan(0);
  expect(screen.getByText('CONTENIDOS')).toBeInTheDocument();
});
