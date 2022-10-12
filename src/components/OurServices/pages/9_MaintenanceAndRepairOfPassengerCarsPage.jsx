import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../../modules/common/SimpleTable';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

export default function MaintenanceAndRepairOfPassengerCarsPage() {
 return (
  <main className='ees-content'>
   <div>
    <h2>
     <Typography variant='caption'>ТО и ремонт электрооборудования пассажирских вагонов</Typography>
    </h2>
    <Box
     sx={{
      float: 'right' /* Выравнивание по правому краю  */,
      margin: '7px 0 7px 7px' /* Отступы вокруг картинки */,
     }}
     component='img'
     alt='Изображение неведомой детали'
    />
    <br />
    <br />

    <ul>
     <li>
      <Typography variant='caption'>
       Наша фирма занимается обслуживанием всех видов ватного электрооборудования.
      </Typography>
     </li>
     <li>
      <Typography variant='caption'>Являемся подрядчиками 000 РЖД и 000 ФПК.</Typography>
     </li>
     <li>
      <Typography variant='caption'>
       Мы можем ремантировать все узлы и агрегаты на вагонах поездов.
      </Typography>
     </li>
    </ul>
   </div>
  </main>
 );
}
