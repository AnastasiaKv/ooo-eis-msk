import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom';

import ScreensApp from './App';
import {Error404} from '../app/core/errors/Error404';
import RepairMotorsPage from './pages/services/RepairMotorsPage';
import GeneratorRepairPage from './pages/services/2_GeneratorRepairPage';
import RepairTransformersPage from './pages/services/3_RepairTransformersPage';
import RefrigerationMachineRepair from './pages/services/4_RefrigerationMachineRepairPage';

const ScreensRoot = () => (
  <Routes>
    <Route path='*' element={<ScreensApp />} />
    <Route path='/error404' element={<Error404 />} />
  </Routes>
);

export default ScreensRoot;
