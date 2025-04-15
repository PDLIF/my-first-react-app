import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Apple from './Greeting.jsx'
import PackingList from './PackingList.jsx'
import App2 from './App2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apple />
  </StrictMode>,
)
