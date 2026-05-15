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
    activeSidebar : "#f0c040",
    mainTheme :"#fffafa",
    dark: '#2B2B2B', // for Headings
    semiDark: '#494949',//paragraph
    navBlack: '#000000',
    myRed: '#ED1C24',
    background: {
      default: '#FFF8F8',
      paper: '#FFFFFF',
    },
    sidebar: {
      bg: '#2B2B2B',
      text: '#FFFFFF',
      hover: 'rgba(255, 255, 255, 0.1)',
      active: 'rgba(237, 28, 36, 0.2)',
    }
  },
  breakpoints: {
    values: {
      lg: 1140,
      xl:1600
     }
  }
});
