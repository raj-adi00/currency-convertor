import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Pagestate from './context/Pagestate.jsx'
// import Pagestate from './context/Pagestate.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pagestate >
      <App />
    </Pagestate>

  </React.StrictMode>
)
