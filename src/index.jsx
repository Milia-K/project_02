import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react';
import App from './App.jsx'
import wordStore from './Store/WordStore.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider wordStore={wordStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
