import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {StyledEngineProvider} from '@mui/material/styles'
import './assets/index.css'
import reportWebVitals from './app/core/reports/reportWebVitals'
import * as serviceWorker from './app/core/serviceWorker'
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// ReactDOM.render(App, document.getElementById('root'))

// console.log(process.env)

// reportWebVitals(console.log)

serviceWorker.unregister()
