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
    navBlack:'#000000',
    myRed:'#ED1C24'
  },
  typography: {
    h1: { // for main Heading
      fontFamily: "PT Sans",
      fontWeight: 'bold',
      fontSize: "74px"
    },
    h2: { // for secondary Heading
      fontFamily: "PT Sans",
      fontWeight: 'bold',
      fontSize: "56px"
    },
    h3: {  //for red subHeadings
      fontFamily: 'Noto Sans',
      fontWeight: '400',
      fontSize: "14px"
    },
    body1: { // for ParaGraph

      fontFamily: 'Noto Sans',
      fontWeight: '300',
      fontSize: "15px"

    },
    subtitle1: { // for SubHeading of Main heading
      fontFamily: 'Noto Sans',
      fontWeight: '400',
      fontSize: "20px"
    }
  }
});
