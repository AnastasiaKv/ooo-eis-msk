import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../components/SimpleTable';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

export default function RepairOfBoardsAndBlocksPage() {
 return (<main className='ees-content'>
  <div>
   <h2>
    <Typography variant='caption'>Ремонт электронагревателей</Typography>
   </h2>
   <h4>
    <Typography variant='caption'>от 900 руб.</Typography>
   </h4>
   <br />
   <br />
   <h2>
    <Typography variant='caption'>
     Вот небольшщой список принимаемой в ремонт электроники:
    </Typography>
   </h2>
   <br />
   <ul>
    <li>Ремонт плат от бытовой техники </li>
    <li>Ремонт плат от автомобильной электроники</li>
    <li>image.png</li>
    <li>Ремонт электронных блоков управления</li>
    <li>Ремонт микропроцессорных печатных плат</li>
    <li>Ремонт микроэлектроники специального назначения</li>
    <li>Ремонт электронных модулей</li>
    <li>Ремонт компьютеризованных панелей управления</li>
    <li>Ремонт различных источников питания (в т.ч. специального назначения)</li>
   </ul>
  </div></main>
 );
}
