import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import App from './App.jsx'
import { theme } from './theme.js'
import { StyledEngineProvider } from "@mui/material/styles";

createRoot(document.getElementById('root')).render(
<StyledEngineProvider injectFirst>

  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</StyledEngineProvider>

)
