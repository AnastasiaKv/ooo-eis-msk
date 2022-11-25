import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Typography} from '@material-ui/core';
import CustomizedTables from '../../../modules/common/CustomizedTables';
import image5 from '../../../../assets/img/services/5.png';
import Paper from '@mui/material/Paper';
import Bolt from '@mui/icons-material/Bolt';
import SEO from '../../SEO';

export default function RewindingMotorsPage() {
 return (
  <form style={{height: '100%'}}>
   <SEO
    title='Ремонт и перемотка двигателей'
    description=' Разборка и очистка,  Расчет и подбор материалов для обмотки, Устранение дефектов ротора и/или статора с обработкой пазов,  Намотка катушек'
    name='ООО ЭИС'
   />
   <Paper elevation={4} sx={{bgcolor: '#f7f7f7', width: '31.2em'}}>
    <Stack direction='column' spacing={0} sx={{paddingLeft: '2em', paddingBottom: '2em'}}>
     <p
      style={{
       paddingTop: '0em',
       width: '646px',
       height: '211px',
       textAlign: 'left',
       paddingBottom: '0',
      }}
     >
      <Box
       style={{
        paddingTop: '18px',
        paddingLeft: '20px',
        width: '7em',
        height: '7em',
        float: 'right' /* Выравнивание по правому краю  */,
       }}
       loading='lazy'
       component='img'
       alt='Ремонт и перемотка двигателей'
       src={image5}
      />
      <h1 style={{paddingTop: '0em'}}>
       <Typography variant='h4' style={{fontFamily: 'Furore', fontSize: '28px'}}>
        Ремонт и перемотка двигателей
       </Typography>
      </h1>
     </p>
     <br />
     <ul style={{color: '#1a202c', textAlign: 'left', listStyle: 'none'}}>
      <h6>
       <Typography variant='h6' style={{paddingRight: '20px', paddingBottom: '0px'}}>
        При выходе из строя электрообмоток производятся следующие работы:
       </Typography>
      </h6>
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
  </form>
 );
}
