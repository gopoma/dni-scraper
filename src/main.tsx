import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { OCRProvider } from './context/OCRProvider'

const foo = 'bar'
const bar = 'foo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OCRProvider>
      <App />
    </OCRProvider>
  </React.StrictMode>
)
