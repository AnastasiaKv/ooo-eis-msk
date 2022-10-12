import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../modules/common/SimpleTable';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import r4 from '../../assets/img/services/Ремонт холодильных машин1.png';

export default function RefrigerationMachineRepairPage() {
 return (
  <>
   <Stack direction='column' spacing={0} sx={{paddingLeft: '2em', paddingBottom: '2em'}}>
    <p
     style={{
      paddingTop: '45px',
      paddingLeft: '2rem',
      width: '600px',
      height: '211px',
      textAlign: 'left',
      paddingBottom: '0',
     }}
    >
     <Box
      sx={{
       paddingTop: '18px',
       width: '8em',
       height: '7em',
       float: 'right' /* Выравнивание по правому краю  */,
      }}
      component='img'
      alt='Изображение неведомой детали'
      src={r4}
     />
     <h4 style={{paddingTop: '20px'}}>
      <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
       Ремонт холодильных машин и компрессоров
      </Typography>
     </h4>
     <h4 style={{paddingTop: '30px'}}>
      <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
       от 4000 руб.
      </Typography>
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
    </p>
   </Stack>
  </>
 );
}
