import { createTheme, lighten } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    sidebar: {
      background: '#4F2928',
      active: '#DAA34A',
      inactive: '#F0E6E2',
      hover:'#DAA34A',
    },
    primary: { main: '#4F2928' },
    secondary: { main: '#DAA34A' },
    error: { main: '#d32f2f' },
    warning: { main: '#ed6c02' },
    info: { main: '#0288d1' },
    success: { main: '#2e7d32' },
    background: { default: '#F1E2D7', secondary: '#E8D7C5' },
    text: { primary: '#232B2B', secondary: '#44403C', disabled: '#9CA3AF', },
    action: {
      hover: lighten('#4F2928', 0.3),
      selected: '#D5BFA7',
      disabled: '#A8A29E',
    },    
  },
  typography: {
    fontFamily: '"Nunito Sans", "Montserrat", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700, color: '#232B2B' },
    h2: { fontSize: '2rem', fontWeight: 600, color: '#44403C' },
    h3: { fontSize: '1.75rem', fontWeight: 500, color: '#44403C' },
    body1: { fontSize: '1rem', color: '#232B2B' },
    body2: { fontSize: '0.875rem', color: '#44403C' },
    caption: { fontSize: '0.85rem', color: '#6B7280' }, // textos chiquitos   
  },
});

export default theme;