import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Cards from './Cards.tsx'
import Navbar from './Navbar.tsx'
import Footer from './Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Cards />
    <App />
    <Footer />
  </StrictMode>,
)
 