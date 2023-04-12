import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import ContextAPIDemo from './ContextAPIDemo'

const contextDemo = false

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {contextDemo ? <ContextAPIDemo /> : <App />}
  </React.StrictMode>,
)
