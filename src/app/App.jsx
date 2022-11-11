import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import {HelmetProvider, Helmet} from 'react-helmet-async';
import '../assets/css/App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TopMediaBlock from '../layouts/TopMediaBlockLayout';

import RepairMotors from '../components/OurServices/pages/1_RepairMotorsPage';
import GeneratorRepair from '../components/OurServices/pages/2_GeneratorRepairPage';
import RepairTransformers from '../components/OurServices/pages/3_RepairTransformersPage';
import RefrigerationMachineRepair from '../components/OurServices/pages/4_RefrigerationMachineRepairPage';
import RewindingMotors from '../components/OurServices/pages/5_RewindingMotorsPage';
import RepairOfElectricHeaters from '../components/OurServices/pages/6_RepairOfElectricHeatersPage';
import SaleOfElectricalComponents from '../components/OurServices/pages/7_SaleOfElectricalComponentsPage';
import RepairOfBoardsAndBlocks from '../components/OurServices/pages/8_RepairOfBoardsAndBlocksPage';
import MaintenanceAndRepairOfPassengerCars from '../components/OurServices/pages/9_TORepairOfPassengerCarsPage';
import SurfacingOfShaftsAndShields from '../components/OurServices/pages/10_SurfacingOfShaftsAndShieldsPage';

import Prices from '../pages/Prices';
import News from '../pages/News';
import SEO from '../components/SEO';

const helmetContext = {};
function App() {
 return (
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
 );
}

export default App;
