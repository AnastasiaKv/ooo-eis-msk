import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './app/core/reports/reportWebVitals';
import registerServiceWorker from './app/core/registerServiceWorker';
import App from './app/App';
import './assets/fonts/Furore.otf';
import './assets/css/index.css';
import {Provider} from 'react-redux';
import ServerModal from './app/core/errors/ServerModal';
import {createStore} from 'react-redux';
import {hydrate, render} from 'react-dom';

async function getComponent() {
 const element = document.createElement('div');
 const {default: _} = await import('lodash');
 const rootElement = document.getElementById('root');

 if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement, rootElement.firstElementChild);
 } else {
  render(<App />, rootElement);
 }
 console.log(process.env);
 reportWebVitals(console.log);
 return element;
}

getComponent().then((component) => {
 document.body.appendChild(component);
});
