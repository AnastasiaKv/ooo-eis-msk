import React from 'react';
import {LayoutProvider} from './layouts/LayoutProvider';
import Layout from './layouts/Layout';
import {Routes, Route, Link, Outlet} from 'react-router-dom';
import '../assets/css/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import TopMediaBlock from '../components/containers/TopMediaBlock';
import BottomMediaBlock from '../components/containers/BottomMediaBlock';
import GridServices from '../components/GridServices';

import {Error404} from '../app/core/errors/Error404';
import RepairMotorsPage from './pages/services/1_RepairMotorsPage';
import GeneratorRepairPage from './pages/services/2_GeneratorRepairPage';
import RepairTransformersPage from './pages/services/3_RepairTransformersPage';

function App() {
 return (
  <div>
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
         <main className='ees-content'>
          <GridServices />
          <Outlet />
         </main>
        </div>
       </div>
       <footer className='ees-footer'>
        <Footer />
       </footer>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default App;
