import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store, loadAllOffers } from './store'

// Инициализируем store начальными данными
store.dispatch(loadAllOffers());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
