import React from 'react';
import Layout from './layouts/Layout';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import '../assets/css/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import TopMediaBlock from '../components/containers/TopMediaBlock';
import BottomMediaBlock from '../components/containers/BottomMediaBlock';
import GridServices from '../components/GridServices';

import RepairMotors from './pages/services/1_RepairMotorsPage';
import GeneratorRepair from './pages/services/2_GeneratorRepairPage';
import RepairTransformers from './pages/services/3_RepairTransformersPage';
import RefrigerationMachineRepair from './pages/services/4_RefrigerationMachineRepairPage';
import RewindingMotors from './pages/services/5_RewindingMotorsPage';
import RepairOfElectricHeaters from './pages/services/6_RepairOfElectricHeatersPage';
import SaleOfElectricalComponents from './pages/services/7_SaleOfElectricalComponentsPage';
import RepairOfBoardsAndBlocks from './pages/services/8_RepairOfBoardsAndBlocksPage';
import MaintenanceAndRepairOfPassengerCars from './pages/services/9_MaintenanceAndRepairOfPassengerCarsPage';
import SurfacingOfShaftsAndShields from './pages/services/10_SurfacingOfShaftsAndShieldsPage';

import Prices from './pages/actions/Prices';
import News from './pages/actions/News';
const elements = [
 {
  path: '/',
  element: GridServices,
 },
 {
  path: '/about',
  element: '',
 },
 {
  path: '/prices',
  element: Prices,
 },
 {
  path: '/news',
  element: News,
 },
];

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
         {/* <main className='ees-content'>
          
         </main> */}
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
