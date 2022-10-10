import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../components/SimpleTable';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

export default function SaleOfElectricalComponentsPage() {
 return (<main className='ees-content'>
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
  </div></main>
 );
}
