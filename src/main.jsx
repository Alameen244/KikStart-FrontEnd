import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import App from './App.jsx'
import { theme } from './theme.js'

createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
,
)
