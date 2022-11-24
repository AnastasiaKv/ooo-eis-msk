import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Typography} from '@material-ui/core';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import image9 from '../../../../assets/img/services/9_1.png';
import Paper from '@mui/material/Paper';
import SEO from '../../SEO';

export default function TORepairOfPassengerCarsPage() {
 return (
  <form style={{height: '100%'}}>
   <SEO
    title='ТО и ремонт электрооборудования пассажирских вагонов'
    description='Наша фирма занимается обслуживанием всех видов ватного электрооборудования.'
    name='ООО ЭИС'
   />
   <Paper elevation={4} sx={{bgcolor: '#f7f7f7', width: '31.2em'}}>
    <Stack
     direction='column'
     spacing={0}
     sx={{paddingLeft: '0.5em', paddingTop: '0em', paddingBottom: '1em'}}
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
     <Stack
      direction='row-reverse'
      sx={{
       paddingTop: '3em',
       display: 'flex',
       textAlign: 'justify',
       alignItems: 'center',
       maxWidth: '800px',
       fontSize: 15,
       lineHeight: '1.5',
       color: '#292929',
      }}
     >
      <Stack direction='row' sx={{paddingRight: '3em'}}>
       <Box
        sx={{
         borderRadius: '7px',
         height: '19em',
         width: '25em',
         float: 'right' /* Выравнивание по правому краю  */,
         margin: '0px -22px 29px 9px' /* Отступы вокруг картинки */,
        }}
        loading='lazy'
        component='img'
        alt='ТО и ремонт электрооборудования пассажирских вагонов'
        src={image9}
       />
      </Stack>
      <ul>
       <Stack
        sx={{
         marginRight: '2em',
         color: '#1a202c',
        }}
       >
        <Stack direction='row' spacing={3} sx={{fontFamily: 'Roboto', paddingBottom: '3em'}}>
         <GppGoodRoundedIcon
          style={{
           margin: '0px 0px 0px 0px',
           width: '25px',
           height: '26px',
           color: 'green',
          }}
         />
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
          Наша фирма занимается обслуживанием всех видов ватного электрооборудования.
         </Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{paddingBottom: '3em'}}>
         <GppGoodRoundedIcon
          style={{
           margin: '0px 0px 0px 0px',
           width: '25px',
           height: '26px',
           color: 'green',
          }}
         />
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
          Являемся подрядчиками ООО РЖД и ООО ФПК.
         </Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{}}>
         <GppGoodRoundedIcon
          style={{
           margin: '0px 0px 0px 0px',
           width: '25px',
           height: '26px',
           color: 'green',
          }}
         />
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
          Мы можем ремантировать все узлы и агрегаты на вагонах поездов.
         </Typography>
        </Stack>
       </Stack>
      </ul>
     </Stack>
    </Stack>
   </Paper>
  </form>
 );
}
