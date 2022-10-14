import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../../modules/common/SimpleTable';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import image6 from '../../../assets/img/services/Ремонт электронагревателей1.png';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';

export default function RepairOfElectricHeatersPage() {
 return (
  <>
   <Stack
    direction='column'
    spacing={0}
    sx={{color: '#1a202c', paddingLeft: '2em', paddingBottom: '2em'}}
   >
    <p
     style={{
      paddingTop: '45px',
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
      src={image6}
     />
     <h4 style={{paddingTop: '20px'}}>
      <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
       Ремонт электронагревателей
      </Typography>
     </h4>
     <h4 style={{paddingTop: '30px'}}>
      <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
       от 500 руб.
      </Typography>
     </h4>
    </p>
    <Stack sx={{marginRight: '2em'}}>
     <h2>
      <Typography variant='h4' component='h4' style={{textAlign: 'left', fontSize: '28px'}}>
       Виды поломок
      </Typography>
     </h2>
     <Stack direction='column' spacing={0} alignItems='flex-start'>
      <Typography
       variant='caption'
       component='p'
       sx={{textAlign: 'left', fontSize: '18px', color: '#1a202c'}}
      >
       Несмотря на относительную простоту конструкции, ремонт накопительных
       <br /> водонагревателей или бойлеров проточно типа может потребоваться в<br /> нескольким
       распространенных случаях:
      </Typography>
      <ul>
       <Stack sx={{paddingLeft: '1.5em', marginRight: '2em'}}>
        <Stack direction='row' spacing={3} sx={{paddingTop: '1.5em'}}>
         <ReportProblemRoundedIcon
          style={{
           margin: '0px 0px 0px 0px',
           width: '25px',
           height: '26px',
           color: '#f12b29',
          }}
         />
         <Typography
          variant='caption'
          component='span'
          style={{
           paddingLeft: '10px',
           fontSize: '17px',
           marginLeft: 0,
          }}
         >
          Выход из строя нагревательного элемента
         </Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{paddingTop: '10px'}}>
         <ReportProblemRoundedIcon
          style={{
           margin: '0px 0px 0px 0px',
           width: '25px',
           height: '26px',
           color: '#f12b29',
          }}
         />
         <Typography
          variant='caption'
          component='span'
          style={{paddingLeft: '10px', fontSize: '17px', marginLeft: 0}}
         >
          Поломка терморегулятора
         </Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{paddingTop: '10px'}}>
         <ReportProblemRoundedIcon
          style={{
           margin: '0px 0px 0px 0px',
           width: '25px',
           height: '26px',
           color: '#f12b29',
          }}
         />
         <Typography
          variant='caption'
          component='span'
          style={{paddingLeft: '10px', fontSize: '17px', marginLeft: 0}}
         >
          Ухудшение эксплуатационных параметров, связанное с образованием накипи
         </Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{paddingTop: '10px', paddingBottom: '1.5em'}}>
         <ReportProblemRoundedIcon
          style={{
           margin: '0px 0px 0px 0px',
           width: '25px',
           height: '26px',
           color: '#f12b29',
          }}
         />
         <Typography
          variant='caption'
          component='span'
          style={{paddingLeft: '10px', fontSize: '17px', marginLeft: 0}}
         >
          Возникновение коррозионных процессов в баке
         </Typography>
        </Stack>
       </Stack>
      </ul>

      <Typography
       variant='caption'
       component='p'
       sx={{textAlign: 'justify', fontSize: '18px', color: '#1a202c'}}
      >
       <b>
        *Наши специалисты устранят любые поломки накопительных водонагревателей,
        <br />
        ремонт которых оправдан из экономических соображений. Обращайтесь к нам,
        <br /> чтобы заказать выполнение профилактических работ для продления
        <br /> срока службы бойлера.
       </b>
      </Typography>
     </Stack>
    </Stack>
   </Stack>
  </>
 );
}
