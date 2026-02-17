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
  },
  typography: {
    h1: {
      fontFamily: "PT Sans",
      fontWeight: 'bold',
      fontSize: "74px"
    },
    h2: {
      fontFamily: "PT Sans",
      fontWeight: 'bold',
      fontSize: "56px"
    },
    h3: {
      fontFamily: 'Noto Sans',
      fontWeight: '400',
      fontSize: "74px"
    },
    body1: {

      fontFamily: 'Noto Sans',
      fontWeight: '300',
      fontSize: "15px"

    },
    subtitle1: {
      fontFamily: 'Noto Sans',
      fontWeight: '400',
      fontSize: "20px"
    }
  }
});
