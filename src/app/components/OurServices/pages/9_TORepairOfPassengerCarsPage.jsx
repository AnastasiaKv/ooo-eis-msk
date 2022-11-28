import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Typography} from '@material-ui/core';
import GppGoodSvg from '@mui/icons-material/GppGoodRounded';
import image9 from '../../../../assets/img/services/9_1.png';
import Paper from '@mui/material/Paper';
import SEO from '../../SEO';
import '../../../../assets/css/browser-typography.css';
import {isSafari, isMobileSafari, isChrome, isFirefox, isDesktop} from 'react-device-detect';

export default function TORepairOfPassengerCarsPage() {
 return (
  <form style={{height: '100%'}}>
   <SEO
    title='ТО и ремонт электрооборудования пассажирских вагонов'
    description='Наша фирма занимается обслуживанием всех видов ватного электрооборудования.'
    siteTitle='ООО "ЭИС"'
    keywords=''
    href='https://eis-msk.ru/services/maintenance-and-repair-of-passenger-cars-page'
   />
   <Paper elevation={4} style={{backgroundColor: '#f7f7f7', width: '31.2em'}}>
    <Stack
     mt={2}
     direction='column'
     spacing={0}
     style={{paddingLeft: '0.5em', paddingTop: '0em', paddingBottom: '1em'}}
    >
     <h1>
      <Typography
       variant='h4'
       component='h4'
       style={{fontFamily: 'Furore', textAlign: 'center', fontSize: '21px'}}
      >
       ТО и ремонт электрооборудования пассажирских вагонов
      </Typography>
     </h1>
     <br />
     <br />
     <Stack direction='row-reverse' sx={{paddingRight: '3em'}}>
      <Box
       sx={{
        borderRadius: '7px',
        height: '11em',
        width: '38em',
        float: 'right' /* Выравнивание по правому краю  */,
        margin: '-7px -22px 29px 85px' /* Отступы вокруг картинки */,
       }}
       loading='lazy'
       component='img'
       alt='ТО и ремонт электрооборудования пассажирских вагонов'
       src={image9}
      />

      <Stack component='ul' spacing={3} style={{textAlign: 'left'}}>
       <Typography
        variant='body2'
        component='p'
        style={{
         fontFamily: 'Roboto',
         paddingLeft: '3px',
         fontSize: '16px',
         marginLeft: '11px',
         textAlign: '-webkit-auto',
        }}
       >
        <GppGoodSvg
         style={{
          margin: '0px 10px -8px 0em',
          width: '25px',
          height: '26px',
          color: 'green',
         }}
        />
        Наша фирма занимается обслуживанием всех видов ватного электрооборудования.
       </Typography>

       <Typography
        variant='body2'
        component='p'
        style={{
         fontFamily: 'Roboto',
         paddingLeft: '3px',
         fontSize: '16px',
         marginLeft: '11px',
         textAlign: '-webkit-auto',
        }}
       >
        <GppGoodSvg
         style={{
          margin: '0px 10px -8px 0em',
          width: '25px',
          height: '26px',
          color: 'green',
         }}
        />
        Являемся подрядчиками ООО РЖД и ООО ФПК.
       </Typography>

       <Typography
        variant='body2'
        component='p'
        style={{
         fontFamily: 'Roboto',
         paddingLeft: '3px',
         fontSize: '16px',
         marginLeft: '11px',
         textAlign: '-webkit-auto',
        }}
       >
        <GppGoodSvg
         style={{
          margin: '0px 10px -8px 0em',
          width: '25px',
          height: '26px',
          color: 'green',
         }}
        />
        Мы можем ремантировать все узлы и агрегаты на вагонах поездов.
       </Typography>
      </Stack>
     </Stack>
    </Stack>
   </Paper>
  </form>
 );
}
