import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../components/SimpleTable';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

export default function RepairOfElectricHeatersPage() {
 return (<main className='ees-content'>
  <div>
   <h2>
    <Typography variant='caption'>Ремонт электронагревателей</Typography>
   </h2>
   <h4>
    <Typography variant='caption'>от 500 руб.</Typography>
   </h4>
   <br />
   <br />
   <h2>
    <Typography variant='caption'>Виды поломок</Typography>
   </h2>
   <p>
    <Typography variant='caption'>
     Несмотря на относительную простоту конструкции, ремонт накопительных водонагревателей или
     бойлеров проточно типа может потребоваться в нескольким распространенных случаях:
    </Typography>
   </p>
   <ul>
    <li>Выход из строя нагревательного элемента</li>
    <li>Поломка терморегулятора</li>
    <li>Ухудшение эксплуатационных параметров, связанное с образованием накипи</li>
    <li>Возникновение коррозионных процессов в баке</li>
   </ul>
   <p>
    <Typography variant='caption'>
     Наши специалисты уо1рв1нн любые поломки наш! кнельных во доны реьелелей. ремеш ко I орых ш
     юсшдси из экономических ссобоахений, Обращайтесь к: нам, чтобь заказать зыполнение
     профилактических работ для продления срока службы бойлера.
    </Typography>
   </p>
  </div></main>
 );
}
