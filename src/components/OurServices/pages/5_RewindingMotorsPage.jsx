import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../../modules/common/SimpleTable';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import CustomizedTables from '../../../modules/common/CustomizedTables';
import image5 from '../../../assets/img/services/Перемотка1.png';
import CircleIcon from '@mui/icons-material/Circle';

export default function RewindingMotorsPage() {
 return (
  <>
   <Stack direction='column' spacing={0} sx={{paddingLeft: '2em', paddingBottom: '2em'}}>
    <p
     style={{
      paddingTop: '45px',
      paddingLeft: '2rem',
      width: '646px',
      height: '211px',
      textAlign: 'left',
      paddingBottom: '0',
     }}
    >
     <Box
      sx={{
       paddingTop: '18px',
       paddingLeft: '20px',
       width: '7em',
       height: '7em',
       float: 'right' /* Выравнивание по правому краю  */,
      }}
      component='img'
      alt='Изображение неведомой детали'
      src={image5}
     />
     <h4 style={{paddingTop: '10px'}}>
      <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
       Ремонт и перемотка двигателей
      </Typography>
     </h4>
    </p>
    <br />
    <ul style={{color: '#1a202c', paddingLeft: '25px', textAlign: 'left', listStyle: 'none'}}>
     <Typography
      variant='caption'
      component='p'
      sx={{lineHeight: '1.20', fontSize: '18px', color: '#1a202c'}}
     >
      При выходе из строя электроустановки или короткого замыкания
      <br />
      обмоток производятся работы в следующем порядке:
     </Typography>
     <Stack direction='row' spacing={3} sx={{paddingTop: '10px'}}>
      <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
       1. Разборка и очистка
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
       2. Расчет и подбор материалов для обмотки
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
       3. Устранение дефектов ротора и/или статора с обработкой пазов;
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
       4. Намотка катушек;
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
       5. Подготовка изоляции с последующей установкой обмотки;
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
       6. Пропитка токоведущих элементов:
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
       7. Просушка изоляции и тестирование обмоток;
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
       8. Сборка и испытание электродвигателя.
      </Typography>
     </Stack>
    </ul>
    <CustomizedTables />
   </Stack>
  </>
 );
}
