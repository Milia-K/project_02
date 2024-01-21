import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ComponentContext } from './Context/MyContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComponentContext>
      <App />
    </ComponentContext>
  </React.StrictMode>,
)
