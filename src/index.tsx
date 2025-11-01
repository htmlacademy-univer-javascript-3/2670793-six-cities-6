import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/css/main.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store, fetchOffers } from './store'

// Загружаем предложения с сервера при старте приложения
store.dispatch(fetchOffers());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
