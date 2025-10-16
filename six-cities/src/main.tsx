import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.tsx'
import { offers } from './mocks/offers'

interface AppData {
  placesCount: number;
}

const appData: AppData = {
  placesCount: 312
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App placesCount={appData.placesCount} offers={offers} />
  </StrictMode>
)
