import React from 'react'
import ReactDOM from 'react-dom/client'
import {StyledEngineProvider} from '@mui/material/styles'
import './assets/index.css'
import App from './app/App'
import reportWebVitals from './app/reportWebVitals'
import * as serviceWorker from './app/serviceWorker'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
)

ReactDOM.render(App, document.getElementById('root'))

console.log(process.env)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()
