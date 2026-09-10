import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import './styles/base.css'
import './styles/slots.css'
import './styles/sections.css'
import './styles/finder.css'
import './styles/configurator.css'
import './styles/valve-alignment.css'
import './styles/signature-series.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
