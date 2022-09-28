import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import reportWebVitals from './app/core/reports/reportWebVitals';
import * as serviceWorker from './app/core/serviceWorker';
import App from './app/App';
import './assets/css/index.css';
import 'typeface-cormorant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
   <Route path='/' element={<App />} />
   <Route path='*' />
  </Routes>
 </BrowserRouter>
);
console.log(process.env);
reportWebVitals(console.log);
serviceWorker.unregister();
