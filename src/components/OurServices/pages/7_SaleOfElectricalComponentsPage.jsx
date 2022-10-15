import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CurrencyRubleRoundedIcon from '@mui/icons-material/CurrencyRubleRounded';
import image7 from '../../../assets/img/services/Продажа компонентов1.png';
import Paper from '@mui/material/Paper';

export default function SaleOfElectricalComponentsPage() {
 return (
  <>
   <Paper elevation={4} sx={{marginBottom: 5}}>
    <Stack direction='column' sx={{paddingBottom: '2em'}}>
     <Typography variant='h4' component='h4' sx={{paddingTop: '2em', textAlign: 'left'}}>
      Продажа электрокомпонентов
     </Typography>

     <Stack
      direction='row-reverse'
      sx={{
       paddingTop: '2em',
       display: 'flex',
       textAlign: 'justify',
       alignItems: 'center',
       maxWidth: '800px',
       fontSize: 15,
       lineHeight: '1.5',
       color: '#292929',
      }}
     >
      <Stack direction='row' sx={{paddingRight: '5em'}}>
       <Box
        sx={{
         height: '17em',
         width: '23em',
         borderRadius: '7px',

         float: 'right' /* Выравнивание по правому краю  */,
         margin: '0px -22px 29px 9px' /* Отступы вокруг картинки */,
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
        <Stack direction='row' spacing={3} sx={{paddingTop: '1em', paddingBottom: '1.6em'}}>
         <CurrencyRubleRoundedIcon
          style={{
           margin: '5px 0px 0px 0px',
           width: '25px',
           height: '26px',
           color: '#f12b21',
          }}
         />
         <Typography
          variant='caption'
          component='span'
          style={{
           paddingLeft: '3px',
           fontSize: '17px',
           marginLeft: '11px',
          }}
         >
          Осуществляем розничную продажу электрокомпонетов по очень выгодным ценам!
         </Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{paddingBottom: '1.6em'}}>
         <CurrencyRubleRoundedIcon
          style={{
           margin: '5px 0px 0px 0px',
           width: '25px',
           height: '26px',
           color: '#f12b29',
          }}
         />
         <Typography
          variant='caption'
          component='span'
          style={{paddingLeft: '3px', fontSize: '17px', marginLeft: '11px'}}
         >
          Перечень деталей в наличии.
         </Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{}}>
         <CurrencyRubleRoundedIcon
          style={{
           margin: '5px 0px 0px 0px',
           width: '25px',
           height: '26px',
           color: '#f12b29',
          }}
         />
         <Typography
          variant='caption'
          component='span'
          style={{paddingLeft: '3px', fontSize: '17px', marginLeft: '11px'}}
         >
          Проффесиональная консультация по подбору.
         </Typography>
        </Stack>
       </Stack>
      </ul>
     </Stack>
    </Stack>
   </Paper>
  </>
 );
}
