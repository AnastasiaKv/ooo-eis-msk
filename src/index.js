import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './app/core/reports/reportWebVitals';
import registerServiceWorker from './registerServiceWorker';
import App from './app/App';
import './assets/fonts/Furore.otf';
import './assets/css/index.css';
/* import {Provider} from 'react-redux';
import {createStore} from 'react-redux'; */

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
 ReactDOM.hydrate(<App />, rootElement, rootElement.firstElementChild);
} else {
 ReactDOM.render(<App />, rootElement);
}

console.log(process.env);
reportWebVitals(console.log);
registerServiceWorker();
