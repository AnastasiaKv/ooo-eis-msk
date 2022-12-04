import React from 'react';
import {Paper, Box, Stack, Typography} from '@mui/material';
import Handyman from '@mui/icons-material/Handyman';
import image10 from '../../../../assets/img/services/10_1.png';
import SEO from '../../SEO';
import '../../../../assets/css/browser-typography.css';
import {isSafari, isMobileSafari, isChrome, isFirefox, isDesktop} from 'react-device-detect';

export default function SurfacingOfShaftsAndShieldsPage() {
 return (
  <form style={{height: '100%'}}>
   <SEO
    title='Наплавка валов и щитов'
    description='Наплавка валов и щитов от 4000 руб.'
    siteTitle='ООО "ЭИС"'
    keywords=''
    href='https://eis-msk.ru/services/surfacing-of-shafts-and-shields-page'
   />
   <Paper elevation={4} style={{backgroundColor: '#f7f7f7', width: '31.2em', paddingTop: '1em', paddingLeft: '0.5em', paddingRight: '0.5em'}}>
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
     <br />
     <Typography
      variant=''
      style={{marginBottom: '20px'}}
      className={isMobileSafari ? 'safari-subtitle1' : 'subtitle1'}
     >
      Примеры наших работ:
     </Typography>

     <Stack direction='row-reverse'>
      <Box
       sx={{
        borderRadius: '7px',
        height: '12em',
        width: '20em',
        float: 'right' /* Выравнивание по правому краю  */,
        margin: '-4px 11px 25px -45px' /* Отступы вокруг картинки */,
       }}
       loading='lazy'
       component='img'
       alt='Наплавка валов и щитов'
       src={image10}
      />

      <Stack
       component='ul'
       spacing={2}
       style={{margin: '-7px', textAlign: 'left'}}
       className={isMobileSafari ? 'safari-medium-large' : 'medium'}
      >
       <Typography
        variant=''
        style={{marginRight: '53px'}}
        className={isMobileSafari ? 'safari-medium-large' : 'medium'}
       >
        <Handyman
         fontSize='medium'
         color='action'
         style={{
          margin: '0px 10px -4px 0em',
          height: '19px',
         }}
        />
        Восстановление вала
       </Typography>

       <Typography
        variant=''
        style={{marginRight: '53px'}}
        className={isMobileSafari ? 'safari-medium-large' : 'medium'}
       >
        <Handyman
         fontSize='medium'
         color='action'
         style={{
          margin: '0px 10px -4px 0em',
          height: '19px',
         }}
        />
        Восстановление шлицов
       </Typography>

       <Typography
        variant=''
        style={{marginRight: '53px'}}
        className={isMobileSafari ? 'safari-medium-large' : 'medium'}
       >
        <Handyman
         fontSize='medium'
         color='action'
         style={{
          margin: '0px 10px -4px 0em',
          height: '19px',
         }}
        />
        Восстановление шпоночного паза
       </Typography>

       <Typography
        variant=''
        style={{marginRight: '53px'}}
        className={isMobileSafari ? 'safari-medium-large' : 'medium'}
       >
        <Handyman
         fontSize='medium'
         color='action'
         style={{
          margin: '0px 10px -4px 0em',
          height: '19px',
         }}
        />
        Наплавка валов
       </Typography>

       <Typography
        variant=''
        style={{marginRight: '53px'}}
        className={isMobileSafari ? 'safari-medium-large' : 'medium'}
       >
        <Handyman
         fontSize='medium'
         color='action'
         style={{
          margin: '0px 10px -4px 0em',
          height: '19px',
         }}
        />
        Ремонт вала
       </Typography>
      </Stack>
     </Stack>
    </Stack>
   </Paper>
  </form>
 );
}
