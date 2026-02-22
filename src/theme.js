import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      dark: '#ED1C24',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ED1C24',
      dark: '#000000',
      contrastText: '#fff',
    },
    dark: '#2B2B2B', // for Headings
    semiDark: '#494949',//paragraph
    navBlack: '#000000',
    myRed: '#ED1C24'
  },
});
