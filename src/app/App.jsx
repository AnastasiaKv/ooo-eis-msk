import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {HelmetProvider, Helmet} from 'react-helmet-async';
import '../assets/css/App.css';
import LayoutProvider from './layouts/LayoutProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TopMediaBlock from './layouts/TopMediaBlockLayout';
import SEO from './components/SEO';
import MyThemeProvider from './MyThemeProvider';

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
      siteTitle='ООО "ЭИС"'
      keywords='ОГРН 1127746704986, ИНН 7701969621, КПП 770801001, ОКПО 11448465, эис москва, эис мск, ооо эис, ЭИС, Электронные Инженерные Системы'
      href='https://eis-msk.ru/'
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
            <MyThemeProvider>
             <TopMediaBlock />
            </MyThemeProvider>
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
