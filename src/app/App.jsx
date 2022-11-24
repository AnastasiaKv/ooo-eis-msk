import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {HelmetProvider, Helmet} from 'react-helmet-async';
import '../assets/css/App.css';
import LayoutProvider from './layouts/LayoutProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TopMediaBlock from './layouts/TopMediaBlockLayout';
import SEO from './components/SEO';

const helmetContext = {};

function App() {
 return (
  <React.StrictMode>
   <LayoutProvider>
    <HelmetProvider context={helmetContext}>
     <SEO
      title='ООО "Электронные Инженерные Системы"'
      description='Качество нашего ремонта проверено годами непрерывной работы, и вы получите гарантию на
      устройство после ремонта. Мы готовы работать как с бытовыми устройствами , так и с
      промышленным оборудованием.'
      name='ООО "ЭИС"'
     />
     <Router>
      <div className='ees-parent'>
       <div className='ees-container'>
        <div className='ees-container-helper'>
         <div className='ees-pillar'>
          <header className='ees-header'>
           <Header />
          </header>
          <div className='ees-main'>
           <div className='ees-main-row'>
            <TopMediaBlock />
           </div>
          </div>
          <footer className='ees-footer'>
           <Footer />
          </footer>
         </div>
        </div>
       </div>
      </div>
     </Router>
    </HelmetProvider>
   </LayoutProvider>
  </React.StrictMode>
 );
}

export default App;
