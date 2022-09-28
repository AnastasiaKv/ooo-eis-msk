import React from 'react';
import {LayoutProvider} from './layouts/LayoutProvider';
import {Routes, Route} from 'react-router-dom';
import '../assets/css/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import TopMediaBlock from '../components/containers/TopMediaBlock';
import BottomMediaBlock from '../components/containers/BottomMediaBlock';
import GridServices from '../components/GridServices';

import {Error404} from '../app/core/errors/Error404';
import RepairMotorsPage from './pages/services/RepairMotorsPage';
import GeneratorRepairPage from './pages/services/2_GeneratorRepairPage';
import RepairTransformersPage from './pages/services/3_RepairTransformersPage';

function App() {
  return (
    <div>
      <LayoutProvider>
        <div className='ees-parent'>
          <div className='ees-container'>
            <div className='ees-container-helper'>
              <div className='ees-pillar'>
                <Header />
                <div className='ees-main'>
                  <div className='ees-main-row'>
                    <main className='ees-content'>
                      <TopMediaBlock />
                      <GridServices />
                    </main>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </LayoutProvider>
      <Routes>
        <Route path='*' element={App} />
        <Route path='/services/repairMotors' element={<RepairMotorsPage />} />
        <Route path='/services/generatorRepair' element={<GeneratorRepairPage />} />
      </Routes>
    </div>
  );
}

export default App;
