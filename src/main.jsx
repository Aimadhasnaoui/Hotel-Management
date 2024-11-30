import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { storeApi } from './ContexApi.jsx'
import {ContexApi} from './ContexApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContexApi>
    <App />
    </ContexApi>
  </React.StrictMode>,
)
