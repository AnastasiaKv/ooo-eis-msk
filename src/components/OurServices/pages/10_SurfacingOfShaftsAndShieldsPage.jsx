import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Handyman from '@mui/icons-material/Handyman';
import image10 from '../../../assets/img/services/Наплавка2.png';
import Paper from '@mui/material/Paper';

export default function SurfacingOfShaftsAndShieldsPage() {
 return (
  <>
   <Paper elevation={4} sx={{bgcolor: '#f7f7f7', marginBottom: 5}}>
    <Stack
     direction='column'
     spacing={0}
     sx={{color: '#1a202c', paddingTop: '1em', paddingLeft: '1em', paddingBottom: '1.6em'}}
    >
     <Typography
      variant='h4'
      component='h4'
      style={{fontFamily: 'Furore', textAlign: 'left', fontSize: '28px'}}
     >
      Наплавка валов и щитов от 4000 руб.
     </Typography>
     <br />
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
       maxWidth: '800px',
       fontSize: 15,
       lineHeight: '1.5',
       color: '#292929',
      }}
     >
      <Stack direction='row' sx={{paddingRight: '5em'}}>
       <Box
        sx={{
         borderRadius: '7px',
         height: '21em',
         width: '32em',
         float: 'right' /* Выравнивание по правому краю  */,
         margin: '0px -35px 0px 1px' /* Отступы вокруг картинки */,
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
   </Paper>
  </>
 );
}
