import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import image6 from '../../../assets/img/services/Ремонт электронагревателей1.png';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import Paper from '@mui/material/Paper';

export default function RepairOfElectricHeatersPage() {
 return (
  <>
   <Paper elevation={4} sx={{marginBottom: 5}}>
    <Stack direction='column' sx={{color: '#1a202c', paddingBottom: '2em', paddingTop: '1em'}}>
     <Stack direction='row' spacing={10}>
      <Stack direction='column' sx={{paddingLeft: '2em', textAlign: 'left'}}>
       <h4 style={{paddingTop: '20px'}}>
        <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
         Ремонт электронагревателей
        </Typography>
       </h4>

       <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
        от 500 руб.
       </Typography>
      </Stack>
      <Stack direction='row'>
       <Box
        sx={{paddingTop: '30px', width: '10em', height: '7em'}}
        component='img'
        alt='Изображение неведомой детали'
        src={image6}
       />
      </Stack>
     </Stack>
     <Stack sx={{paddingLeft: '2em', marginRight: '2em'}}>
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
         <Stack direction='row' spacing={3} sx={{paddingTop: '1.9em'}}>
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
        sx={{
         fontStyle: 'oblique',
         textAlign: 'justify',
         fontSize: '18px',
         color: '#1a202c',
        }}
       >
        *Наши специалисты устранят любые поломки накопительных водонагревателей,
        <br />
        ремонт которых оправдан из экономических соображений. Обращайтесь к нам,
        <br /> чтобы заказать выполнение профилактических работ для продления
        <br /> срока службы бойлера.
       </Typography>
      </Stack>
     </Stack>
    </Stack>
   </Paper>
  </>
 );
}