import React from 'react';
import {Routes, Route} from 'react-router-dom';

import ScreensApp from '../app/App';
import {Error404} from '../app/core/errors/Error404';
import RepairMotorsPage from '../components/pages/1_RepairMotorsPage';
import GeneratorRepairPage from '../components/pages/2_GeneratorRepairPage';
import RepairTransformersPage from '../components/pages/3_RepairTransformersPage';
import RefrigerationMachineRepair from '../components/pages/4_RefrigerationMachineRepairPage';

const ScreensRoot = () => (
 <Routes>
  <Route path='*' element={<ScreensApp />} />
  <Route path='/error404' element={<Error404 />} />
 </Routes>
);

export default ScreensRoot;
