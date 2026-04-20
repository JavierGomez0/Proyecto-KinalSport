import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@material-tailwind/react';
import { BrowserRouter } from 'react-router-dom';

import './../styles/index.css'
import App from './App.jsx'

console.log("comprobando Variables", import.meta.env.VITE_AUTH_URL)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>
)
