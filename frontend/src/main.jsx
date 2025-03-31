import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GridSmallBackgroundDemo } from './components/ui/gridBackground.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GridSmallBackgroundDemo>
        <App />
      </GridSmallBackgroundDemo>  
    </BrowserRouter>
  </StrictMode>,
)
