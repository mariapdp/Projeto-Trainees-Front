import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AtualizacaoProvider } from './context/AtualizacaoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AtualizacaoProvider>
        <App />
      </AtualizacaoProvider>
    </BrowserRouter>
  </StrictMode>,
)
