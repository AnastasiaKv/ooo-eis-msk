import React from 'react';
import Layout from '../layouts/Layout';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import '../assets/css/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import TopMediaBlock from '../layouts/TopMediaBlockLayout';

import RepairMotors from '../components/pages/1_RepairMotorsPage';
import GeneratorRepair from '../components/pages/2_GeneratorRepairPage';
import RepairTransformers from '../components/pages/3_RepairTransformersPage';
import RefrigerationMachineRepair from '../components/pages/4_RefrigerationMachineRepairPage';
import RewindingMotors from '../components/pages/5_RewindingMotorsPage';
import RepairOfElectricHeaters from '../components/pages/6_RepairOfElectricHeatersPage';
import SaleOfElectricalComponents from '../components/pages/7_SaleOfElectricalComponentsPage';
import RepairOfBoardsAndBlocks from '../components/pages/8_RepairOfBoardsAndBlocksPage';
import MaintenanceAndRepairOfPassengerCars from '../components/pages/9_MaintenanceAndRepairOfPassengerCarsPage';
import SurfacingOfShaftsAndShields from '../components/pages/10_SurfacingOfShaftsAndShieldsPage';

import Prices from '../pages/Prices';
import News from '../pages/News';

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
         <main className='ees-content'></main>
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
