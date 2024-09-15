import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './index.js'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
