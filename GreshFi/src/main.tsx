import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MobileOnly from './MobileOnly.tsx'
import { Provider } from 'react-redux';
import { store } from './redux/store';
createRoot(document.getElementById('root')!).render(
  <MobileOnly>
    <Provider store={store}>
    <App />
    </Provider>
  </MobileOnly>,
)
