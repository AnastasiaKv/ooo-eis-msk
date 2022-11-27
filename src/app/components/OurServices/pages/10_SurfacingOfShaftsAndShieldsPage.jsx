import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Typography} from '@material-ui/core';
import Handyman from '@mui/icons-material/Handyman';
import image10 from '../../../../assets/img/services/10_1.png';
import Paper from '@mui/material/Paper';
import SEO from '../../SEO';

export default function SurfacingOfShaftsAndShieldsPage() {
 return (
  <form style={{height: '100%'}}>
   <SEO
    title='Наплавка валов и щитов'
    description='Наплавка валов и щитов от 4000 руб.'
    name='ООО ЭИС'
    keywords=''
    href='https://eis-msk.ru/services/surfacing-of-shafts-and-shields-page'
   />
   <Paper elevation={4} style={{backgroundColor: '#f7f7f7', width: '31.2em'}}>
    <Stack
     mt={2}
     direction='column'
     spacing={0}
     style={{color: '#1a202c', paddingTop: '0em', paddingLeft: '1em', paddingBottom: '1em'}}
    >
     <h1>
      <Typography
       variant='h4'
       component='h4'
       style={{textAlign: 'left', fontFamily: 'Furore', fontSize: '28px'}}
      >
       Наплавка валов и щитов от 4000 руб.
      </Typography>
     </h1>

     <h6>
      <Typography
       variant='h6'
       component='p'
       style={{
        textAlign: 'left',
        color: '#1a202c',
        paddingTop: '0em',
        paddingRight: '15em',
        paddingBottom: '15px',
       }}
      >
       Примеры наших работ:
      </Typography>
     </h6>
     <Stack
      direction='row-reverse'
      sx={{
       display: 'flex',
       textAlign: 'justify',
       alignItems: 'center',
       maxWidth: '800px',
       fontSize: 15,
       color: '#292929',
      }}
     >
      <Stack direction='row' sx={{paddingRight: '5em'}}>
       <Box
        sx={{
         borderRadius: '7px',
         height: '19em',
         width: '27em',
         float: 'right' /* Выравнивание по правому краю  */,
         margin: '-49px -4px 0px 2px' /* Отступы вокруг картинки */,
        }}
        loading='lazy'
        component='img'
        alt='Наплавка валов и щитов'
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
        <Stack direction='row' sx={{paddingTop: '0.6em', paddingBottom: '2em'}}>
         <Handyman
          fontSize='medium'
          color='action'
          style={{
           margin: '3px 0px 0px 0px',
           height: '19px',
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
          }}
         >
          Восстановление вала
         </Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{paddingBottom: '2em'}}>
         <Handyman
          fontSize='medium'
          color='action'
          style={{
           margin: '3px 0px 0px 0px',
           height: '19px',
          }}
         />
         <Typography
          variant='body2'
          component='p'
          style={{paddingLeft: '3px', fontSize: '16px', marginLeft: '11px'}}
         >
          Восстановление шлицов
         </Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{paddingBottom: '2em'}}>
         <Handyman
          fontSize='medium'
          color='action'
          style={{
           margin: '3px 0px 0px 0px',
           height: '19px',
          }}
         />
         <Typography
          variant='body2'
          component='p'
          style={{
           fontSize: '16px',
           paddingLeft: '3px',
           marginLeft: '11px',
           textAlign: '-webkit-auto',
          }}
         >
          Восстановление шпоночного паза
         </Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{paddingBottom: '2em'}}>
         <Handyman
          fontSize='medium'
          color='action'
          style={{
           margin: '3px 0px 0px 0px',
           height: '19px',
          }}
         />
         <Typography
          variant='body2'
          component='p'
          style={{paddingLeft: '3px', fontSize: '16px', marginLeft: '11px', height: '19px'}}
         >
          Наплавка валов
         </Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{paddingBottom: '2em'}}>
         <Handyman
          fontSize='medium'
          color='action'
          style={{
           margin: '3px 0px 0px 0px',
           height: '19px',
          }}
         />
         <Typography
          variant='body2'
          component='p'
          style={{paddingLeft: '3px', fontSize: '16px', marginLeft: '11px', height: '19px'}}
         >
          Ремонт вала
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
