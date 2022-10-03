import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './app/core/reports/reportWebVitals';
import * as serviceWorker from './app/core/serviceWorker';
import App from './app/App';
import './assets/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

console.log(process.env);
reportWebVitals(console.log);
serviceWorker.unregister();
