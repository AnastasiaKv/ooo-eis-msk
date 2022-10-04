import React from 'react';
import Layout from './layouts/Layout';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import '../assets/css/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import TopMediaBlock from '../components/containers/TopMediaBlock';
import BottomMediaBlock from '../components/containers/BottomMediaBlock';
import GridServices from '../components/GridServices';

import RepairMotorsPage from './pages/services/1_RepairMotorsPage';
import GeneratorRepairPage from './pages/services/2_GeneratorRepairPage';
import RepairTransformersPage from './pages/services/3_RepairTransformersPage';
import Prices from './pages/actions/Prices';
import News from './pages/actions/News';

function App() {
 return (
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
         <main className='ees-content'>
          <Routes>
           <Route path='/' element={<News />} />
          </Routes>
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
  </Router>
 );
}

export default App;
