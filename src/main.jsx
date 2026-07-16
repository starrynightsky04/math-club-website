import React from 'react'
import ReactDOM from 'react-dom/client'
// HashRouter is used (instead of BrowserRouter) so the site works on
// GitHub Pages: every page can be opened or refreshed directly without
// hitting a "404 Not Found" error.
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
