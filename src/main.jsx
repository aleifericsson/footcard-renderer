import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <Helmet>
        <title>Footcard Renderer</title>
      </Helmet>
    <App />
    </HelmetProvider>
  </React.StrictMode>,
)
document.getElementById("path7").style.fill='green';

