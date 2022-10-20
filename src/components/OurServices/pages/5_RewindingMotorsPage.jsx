import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomizedTables from '../../../modules/common/CustomizedTables';
import image5 from '../../../assets/img/services/Перемотка1.png';
import CircleIcon from '@mui/icons-material/Circle';
import Paper from '@mui/material/Paper';
import BoltIcon from '@mui/icons-material/Bolt';
import Bolt from '@mui/icons-material/Bolt';
import {lineHeight} from '@mui/system';

export default function RewindingMotorsPage() {
 return (
  <>
   <Paper elevation={4} sx={{bgcolor: '#f7f7f7', marginBottom: 5}}>
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
       <Typography variant='h4' component='h4' style={{fontFamily: 'Furore', fontSize: '28px'}}>
        Ремонт и перемотка двигателей
       </Typography>
      </h4>
     </p>
     <br />
     <ul style={{color: '#1a202c', paddingLeft: '25px', textAlign: 'left', listStyle: 'none'}}>
      <Typography variant='h6' component='h6' sx={{paddingRight: '20px'}}>
       При выходе из строя электрообмоток производятся
       <br /> следующие работы:
      </Typography>
      <Stack direction='row' spacing={3} sx={{paddingTop: '1em'}}>
       <Bolt
        style={{
         margin: '0px 0px 0px 0px',
         width: '25px',
         height: '26px',
         color: '	#ffcf40',
        }}
       />
       <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
        Разборка и очистка
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <Bolt
        style={{
         margin: '0px 0px 0px 0px',
         width: '25px',
         height: '26px',
         color: '	#ffcf40',
        }}
       />
       <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
        Расчет и подбор материалов для обмотки
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <Bolt
        style={{
         margin: '0px 0px 0px 0px',
         width: '25px',
         height: '26px',
         color: '	#ffcf40',
        }}
       />
       <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
        Устранение дефектов ротора и/или статора с обработкой пазов
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <Bolt
        style={{
         margin: '0px 0px 0px 0px',
         width: '25px',
         height: '26px',
         color: '	#ffcf40',
        }}
       />
       <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
        Намотка катушек
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <Bolt
        style={{
         margin: '0px 0px 0px 0px',
         width: '25px',
         height: '26px',
         color: '	#ffcf40',
        }}
       />
       <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
        Подготовка изоляции с последующей установкой обмотки
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <Bolt
        style={{
         margin: '0px 0px 0px 0px',
         width: '25px',
         height: '26px',
         color: '	#ffcf40',
        }}
       />
       <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
        Пропитка токоведущих элементов
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <Bolt
        style={{
         margin: '0px 0px 0px 0px',
         width: '25px',
         height: '26px',
         color: '	#ffcf40',
        }}
       />
       <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
        Просушка изоляции и тестирование обмоток
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <Bolt
        style={{
         margin: '0px 0px 0px 0px',
         width: '25px',
         height: '26px',
         color: '	#ffcf40',
        }}
       />
       <Typography variant='caption' component='span' style={{fontSize: '16px', marginLeft: 0}}>
        Сборка и испытание электродвигателя
       </Typography>
      </Stack>
     </ul>
     <CustomizedTables />
    </Stack>
   </Paper>
  </>
 );
}
