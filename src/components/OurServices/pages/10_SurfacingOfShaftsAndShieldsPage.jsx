import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Handyman from '@mui/icons-material/Handyman';
import image10 from '../../../assets/img/services/Наплавка2.png';

{
 /* <h4>
<Typography variant='caption'>от 4000 руб.</Typography>
</h4>
<br />


<br />
<p>
<Typography variant='caption'>Пример наших работ:</Typography>
</p>
<ul>
<li>Восстановление вала</li>
<li>Восстановление шлицов</li>
<li>Восстановление шпоночного паза</li>
<li>Наплавка валов</li>
<li>Ремонт вала</li>
</ul> */
}
export default function SurfacingOfShaftsAndShieldsPage() {
 return (
  <>
   <Stack
    direction='column'
    spacing={0}
    sx={{color: '#1a202c', paddingTop: '1em', paddingLeft: '1em', paddingBottom: '1.6em'}}
   >
    <Typography
     variant='h4'
     component='span'
     sx={{
      marginRight: '1em',
      textAlign: 'left',
      paddingBottom: '1em',
     }}
    >
     Наплавка валов и щитов <br />
     <br /> от 4000 руб.
    </Typography>

    <Typography
     variant='h5'
     component='p'
     style={{
      textAlign: 'left',
      color: '#1a202c',
      paddingTop: '1em',
      paddingRight: '15em',
      paddingBottom: '15px',
     }}
    >
     Примеры наших работ:
    </Typography>
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
        borderRadius: '7px',
        height: '25em',
        width: '36em',
        float: 'right' /* Выравнивание по правому краю  */,
        margin: '0px -69px 0px 1px' /* Отступы вокруг картинки */,
       }}
       component='img'
       alt='Изображение неведомой детали'
       src={image10}
      />
     </Stack>
     <ul>
      <Stack
       sx={{
        marginRight: '2em',
        color: '#1a202c',
       }}
      >
       <Stack direction='row' sx={{paddingTop: '2em', paddingBottom: '1.6em'}}>
        <Handyman
         fontSize='medium'
         color='action'
         style={{
          margin: '4px 0px 0px 0px',
         }}
        />
        <Typography
         variant='body2'
         component='p'
         style={{
          fontFamily: 'Roboto',
          paddingLeft: '3px',
          fontSize: '20px',
          marginLeft: '11px',
         }}
        >
         Восстановление вала
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3} sx={{paddingBottom: '1.6em'}}>
        <Handyman
         fontSize='medium'
         color='action'
         style={{
          margin: '4px 0px 0px 0px',
         }}
        />
        <Typography
         variant='body2'
         component='p'
         style={{paddingLeft: '3px', fontSize: '20px', marginLeft: '11px'}}
        >
         Восстановление шлицов
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3} sx={{paddingBottom: '1.6em'}}>
        <Handyman
         fontSize='medium'
         color='action'
         style={{
          margin: '4px 0px 0px 0px',
         }}
        />
        <Typography
         variant='body2'
         component='p'
         style={{paddingLeft: '3px', fontSize: '20px', marginLeft: '11px'}}
        >
         Восстановление шпоночного паза
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3} sx={{paddingBottom: '1.6em'}}>
        <Handyman
         fontSize='medium'
         color='action'
         style={{
          margin: '4px 0px 0px 0px',
         }}
        />
        <Typography
         variant='body2'
         component='p'
         style={{paddingLeft: '3px', fontSize: '20px', marginLeft: '11px'}}
        >
         Наплавка валов
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3} sx={{paddingBottom: '1.6em'}}>
        <Handyman
         fontSize='medium'
         color='action'
         style={{
          margin: '4px 0px 0px 0px',
         }}
        />
        <Typography
         variant='body2'
         component='p'
         style={{paddingLeft: '3px', fontSize: '20px', marginLeft: '11px'}}
        >
         Ремонт вала
        </Typography>
       </Stack>
      </Stack>
     </ul>
    </Stack>
   </Stack>
  </>
 );
}
