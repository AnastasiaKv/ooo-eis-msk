import React from 'react';
import {Paper, Box, Stack, Typography} from '@mui/material';
import GppGoodSvg from '@mui/icons-material/GppGoodRounded';
import image9 from '../../../../assets/img/services/9_1.png';
import SEO from '../../SEO';
import '../../../../assets/css/browser-typography.css';
import {isMobileSafari} from 'react-device-detect';

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
     style={{paddingLeft: '1em', paddingTop: '1em', paddingBottom: '1em', paddingRight: '1em'}}
    >
     
      <Typography
       variant='h4'
       component='h4'
       style={{fontFamily: 'Furore', textAlign: 'center', fontSize: '25px', marginBottom: '3em'}}
      >
       ТО и ремонт электрооборудования пассажирских вагонов
      </Typography>

     <Stack direction='row-reverse'>
      <Box
       sx={{
        borderRadius: '7px',
        height: '12em',
        width: '20em',
        float: 'right' /* Выравнивание по правому краю  */,
        margin: '0px 0px 0px -0px'/* '-8px 11px 25px -45px' */ /* Отступы вокруг картинки */,
       }}
       loading='lazy'
       component='img'
       alt='ТО и ремонт электрооборудования пассажирских вагонов'
       src={image9}
      />

      <Stack
       component='ul'
       spacing={2}
       style={{margin: 0/* '-7px' */, textAlign: 'left'}}
       className={isMobileSafari ? 'safari-medium-large' : 'medium'}
      >
       <Typography
        variant=''
        style={{marginRight: '53px'}}
        className={isMobileSafari ? 'safari-medium-large' : 'medium3'}
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
        variant=''
        style={{marginRight: '53px'}}
        className={isMobileSafari ? 'safari-medium-large' : 'medium'}
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
        variant=''
        style={{marginRight: '53px'}}
        className={isMobileSafari ? 'safari-medium-large' : 'medium'}
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
