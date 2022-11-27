import React from 'react';
import Box from '@mui/material/Box';
import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';
import Paper from '@mui/material/Paper';
import trkLogo from '../assets/img/companiesLogos/trk/trkLogo.svg';
import mlrzLogo from '../assets/img/companiesLogos/mlrz/MLRZ-logo.png';
import vrmLogo from '../assets/img/companiesLogos/vrm/logo4.png';
import image1 from '../assets/img/gallery/Gallery_Crew_gang_bang.png';
import image2 from '../assets/img/gallery/Gallery_Naplavka.png';
import image3 from '../assets/img/gallery/Gallery_Svarka.png';
import SEO from '../app/components/SEO';

export default function about() {
 return (
  <>
   <main className='ees-content'>
    <SEO
     title='О нас'
     description='Мы осуществляем ремонт электронного, электрического и механического оборудования для нужд АО "РЖД" и АО "ФПК" с 2007 года.'
     siteTitle='ООО "ЭИС"'
     keywords='ЭИС'
     href='https://eis-msk.ru/about'
    />
    <Paper elevation={0} sx={{paddingTop: '4.5em', marginBottom: 5}}>
     <Stack sx={{width: '37em'}}>
      <Typography
       component='p'
       style={{
        textIndent: '2ch',
        lineHeight: '2.3em',
        flexGrow: 1,
        fontFamily: 'Roboto',
        position: 'relative',
        justifyContent: 'space-around',
        textAlign: 'justify',
        color: '#292929',
        marginRight: '1.4em',
       }}
      >
       Мы осуществляем ремонт электронного, электрического и механического оборудования для нужд АО
       "РЖД" и АО "ФПК" с 2007 года. На сегодняшний день наш опыт и технические возможности
       позволяют ремонтировать оборудование и устройства для различных отраслей промышленности.
      </Typography>

      <Stack direction='column' spacing={0} sx={{paddingLeft: '1.5em', paddingTop: '1em'}}>
       <h2>
        <Typography
         variant='h2'
         style={{
          flexGrow: 1,
          paddingRight: '0.5em',
          paddingTop: '20px',
          paddingBottom: '2em',
          fontFamily: 'Furore',
          fontSize: '28px',

          textAlign: 'center',
          color: '#292929',
         }}
        >
         Наш коллектив
        </Typography>
       </h2>
       <Stack>
        <Paper elevation={0}>
         <Box
          sx={{
           borderRadius: 3,
           height: '36em',
           width: '36em',
          }}
          loading='lazy'
          component='img'
          alt='Team'
          src={image1}
         />
        </Paper>
       </Stack>
       <Stack direction='row' spacing={1}>
        <Paper elevation={0}>
         <Box
          sx={{
           borderRadius: 3,
           height: '17.9em',
           width: '17.9em',
          }}
          loading='lazy'
          component='img'
          alt='WorkProcess1'
          src={image2}
         />
        </Paper>
        <Paper elevation={0}>
         <Box
          sx={{
           borderRadius: 3,
           height: '17.9em',
           width: '17.9em',
          }}
          loading='lazy'
          component='img'
          alt='WorkProcess2'
          src={image3}
         />
        </Paper>
       </Stack>
      </Stack>
      <Box sx={{height: '1em'}}></Box>
     </Stack>
     <Stack>
      <h1>
       <Typography
        variant='h4'
        component='h1'
        style={{
         textAlign: 'center',
         flexGrow: 1,
         fontFamily: 'Furore',
         fontSize: '28px',
         color: '#292929',
         paddingTop: '3em',
         paddingBottom: '2em',
        }}
       >
        Наши партнеры:
       </Typography>
      </h1>
      <br />
      <Stack direction='row' spacing={12} sx={{paddingLeft: '4em'}}>
       <Paper elevation={0}>
        <Box
         sx={{
          borderRadius: 30,
          bgcolor: 'rgb(55, 96, 146)',
          height: '6em',
          width: '6em',
         }}
         component='img'
         src={trkLogo}
        />
       </Paper>
       <Paper elevation={0}>
        <Box
         sx={{
          borderRadius: 10,
          height: '6em',
          width: '10em',
         }}
         component='img'
         src={mlrzLogo}
        />
       </Paper>
       <Paper elevation={0}>
        <Box
         sx={{
          height: '5em',
          width: '10em',
         }}
         component='img'
         src={vrmLogo}
        />
       </Paper>
      </Stack>
     </Stack>
    </Paper>
   </main>
  </>
 );
}
