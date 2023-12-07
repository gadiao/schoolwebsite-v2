import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: grey[300],
    },
    text: {
      secondary: red[200]
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  }
});

export default theme;
