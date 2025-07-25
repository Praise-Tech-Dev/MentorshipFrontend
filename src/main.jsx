import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {UserProvider} from './components/UserContext.jsx'
import './index.css'
import 'primeicons/primeicons.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
    
  </StrictMode>,
)
