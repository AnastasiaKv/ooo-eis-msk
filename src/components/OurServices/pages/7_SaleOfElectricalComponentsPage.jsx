import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../../modules/common/SimpleTable';
import CurrencyRubleRoundedIcon from '@mui/icons-material/CurrencyRubleRounded';
import image7 from '../../../assets/img/services/Продажа компонентов1.png';

export default function SaleOfElectricalComponentsPage() {
 return (
  <>
   <Stack direction='column' spacing={0} sx={{paddingLeft: '2em', paddingBottom: '2em'}}>
    <h4 style={{paddingTop: '10px'}}>
     <Typography variant='h4' component='h4' sx={{textAlign: 'left', fontSize: '28px'}}>
      Продажа электрокомпонентов
     </Typography>
    </h4>
    <Stack
     direction='row-reverse'
     sx={{
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
        height: '17em',
        width: '23em',
        float: 'right' /* Выравнивание по правому краю  */,
        margin: '0px 0 7px 25px' /* Отступы вокруг картинки */,
       }}
       component='img'
       alt='Изображение неведомой детали'
       src={image7}
      />
     </Stack>
     <ul>
      <Stack
       sx={{
        marginRight: '2em',
        color: '#1a202c',
       }}
      >
       <Stack direction='row' spacing={3}>
        <CurrencyRubleRoundedIcon
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
          paddingLeft: '3px',
          fontSize: '15px',
          marginLeft: 0,
         }}
        >
         Осуществляем розничную продажу электрокомпонетов по очень выгодным ценам!
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3} sx={{paddingTop: '10px'}}>
        <CurrencyRubleRoundedIcon
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
         style={{paddingLeft: '3px', fontSize: '15px', marginLeft: 0}}
        >
         Перечень деталей в наличии.
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3} sx={{paddingTop: '10px'}}>
        <CurrencyRubleRoundedIcon
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
         style={{paddingLeft: '3px', fontSize: '15px', marginLeft: 0}}
        >
         Проффесиональная консультация по подбору.
        </Typography>
       </Stack>
      </Stack>
     </ul>
    </Stack>
   </Stack>
  </>
 );
}
