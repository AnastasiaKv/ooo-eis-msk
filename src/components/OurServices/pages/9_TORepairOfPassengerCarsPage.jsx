import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../../modules/common/SimpleTable';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import image9 from '../../../assets/img/services/ТО2.png';
export default function TORepairOfPassengerCarsPage() {
 return (
  <>
   <Stack
    direction='column'
    spacing={0}
    sx={{paddingTop: '2em', paddingBottom: '2em'}}
   >
    <Typography
     variant='h4'
     component='h4'
     sx={{
      marginRight: '1em',
      textAlign: 'left',
      fontSize: '28px',
     }}
    >
     ТО и ремонт электрооборудования пассажирских вагонов
    </Typography>
    <Stack
     direction='row-reverse'
     sx={{
      paddingTop: '3em',
      display: 'flex',
      textAlign: 'justify',
      alignItems: 'center',
      maxWidth: '1000px',
      fontSize: 15,
      lineHeight: '1.5',
      color: '#292929',
     }}
    >
     <Stack direction='row' sx={{paddingRight: '16em'}}>
      <Box
       sx={{
        borderRadius: '7px',
        height: '19em',
        width: '25em',
        float: 'right' /* Выравнивание по правому краю  */,
        margin: '0px -22px 29px 9px' /* Отступы вокруг картинки */,
       }}
       component='img'
       alt='Изображение неведомой детали'
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
          fontSize: '18px',
          marginLeft: '11px',
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
         style={{paddingLeft: '3px', fontSize: '18px', marginLeft: '11px'}}
        >
         Являемся подрядчиками 000 РЖД и 000 ФПК.
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
         style={{paddingLeft: '3px', fontSize: '18px', marginLeft: '11px'}}
        >
         Мы можем ремантировать все узлы и агрегаты на вагонах поездов.
        </Typography>
       </Stack>
      </Stack>
     </ul>
    </Stack>
   </Stack>
  </>
 );
}
