import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Outlet} from 'react-router-dom';

export default function SaleOfElectricalComponentsPage() {
 return (
  <div>
   <h2>
    <Typography variant='caption'>Продажа электрокомпонентов</Typography>
   </h2>
   <br />
   <br />
   <ul>
    <li>Осуществляем розничную продажу электрокомпонетов по очень выгодным ценам!</li>
    <li>Перечень деталей в наличии.</li>
    <li>Проффесиональная консультация по подбору.</li>
   </ul>
   <Outlet />
  </div>
 );
}
