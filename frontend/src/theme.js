import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b70000', // Your primary brand color
    },
    secondary: {
      main: '#333',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h6: {
      fontWeight: 'bold',
    },
  },
});

export default theme;
