import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../components/SimpleTable';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

export default function RefrigerationMachineRepairPage() {
 return (
  <main className='ees-content-card'>
   <div>
    <h2>
     <Typography variant='caption'>Ремонт холодильных машин и компрессоров</Typography>
    </h2>
    <h4>
     <Typography variant='caption'>от 4000 руб.</Typography>
    </h4>
    <br />
    <br />
    <p>
     <Typography variant='caption'>Выполняем следующие технологические операции:</Typography>
    </p>
    <ul>
     <li>Тщательная диагностика и дефектовка холодильного компрессора</li>
     <li>Оценка уровня изношенности</li>
     <li>Выпрессовка статоров любого типа и любых размеров (проводится наспециальном стенде)</li>
     <li>Перемотка статора фреоностойким проводом высочайшего качества</li>
     <li>Вакуумная пропитка</li>
     <li>Металлообработка различного уровня сложности</li>
     <li>Сборка холодильного компрессора</li>
     <li>Испытание компрессора под максимальной нагрузкой</li>
    </ul>
   </div>
  </main>
 );
}
