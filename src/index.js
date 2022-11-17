import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './app/core/reports/reportWebVitals';
import registerServiceWorker from './app/core/registerServiceWorker';
import App from './app/App';
import './assets/fonts/Furore.otf';
import './assets/css/index.css';
import ServerModal from './app/core/errors/ServerModal';

import {hydrate, render} from 'react-dom';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
 hydrate(<App />, rootElement, rootElement.firstElementChild);
} else {
 render(<App />, rootElement);
}
console.log(process.env);
reportWebVitals(console.log);
registerServiceWorker();
