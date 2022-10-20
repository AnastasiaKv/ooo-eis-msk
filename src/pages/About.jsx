import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';
import Paper from '@mui/material/Paper';
import trkLogo from '../assets/img/companiesLogos/trk/logo.svg';
import mlrzLogo from '../assets/img/companiesLogos/mlrz/toper.jpg';
import vrmLogo from '../assets/img/companiesLogos/vrm/logo4.png';

export default function About() {
 return (
  <>
   <main className='ees-content'>
    <Paper elevation={0} sx={{marginBottom: 5}}>
     <Stack>
      <Typography
       variant='body2'
       component='span'
       sx={{textAlign: 'justify', flexGrow: 1, lineHeight: '1.80'}}
       style={{
        fontFamily: 'Roboto',
        fontSize: '15px',
        position: 'relative',
        justifyContent: 'space-around',
        textAlign: 'justify',
        color: '#292929',
       }}
      >
       Мы являемся компанией, производящей ремонт, подвагонного оборудования для нужд ООО "РЖД" и
       ООО "ФПК" с 2007 года.
       <br />В 2022 году мы освоили большую часть направлений, ремонта любых электрических и
       механических устройств,
       <br /> и решили выйти на рынок железнодорожного бизнеса
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3} sx={{paddingLeft: '4em', paddingTop: '1em'}}>
      <Paper elevation={0}>
       <Box
        sx={{
         height: '8em',
         width: '10em',
        }}
        component='img'
       />
      </Paper>
      <Paper elevation={0}>
       <Box
        sx={{
         height: '8em',
         width: '10em',
        }}
        component='img'
       />
      </Paper>
      <Paper elevation={0}>
       <Box
        sx={{
         height: '8em',
         width: '10em',
        }}
        component='img'
       />
      </Paper>
     </Stack>

     <Stack sx={{paddingTop: '1em'}}>
      <Typography
       variant='h4'
       component='h4'
       sx={{textAlign: 'justify', flexGrow: 1}}
       style={{
        fontFamily: 'Roboto',
        fontSize: '18px',
        position: 'relative',
        justifyContent: 'space-around',
        textAlign: 'justify',
        color: '#292929',
       }}
      >
       <b>Наши партнеры:</b>
       <br />
       <Stack direction='row' spacing={8} sx={{paddingLeft: '4em', paddingTop: '1em'}}>
        <Paper elevation={0}>
         <Box
          sx={{
           borderRadius: 30,
           bgcolor: 'rgb(55, 96, 146)',
           height: '8em',
           width: '8em',
          }}
          component='img'
          src={trkLogo}
         />
        </Paper>
        <Paper elevation={0}>
         <Box
          sx={{
           borderRadius: 10,
           height: '8em',
           width: '17em',
          }}
          component='img'
          src={mlrzLogo}
         />
        </Paper>
        <Paper elevation={0}>
         <Box
          sx={{
           height: '7em',
           width: '13em',
          }}
          component='img'
          src={vrmLogo}
         />
        </Paper>
       </Stack>
      </Typography>
     </Stack>
    </Paper>
   </main>
  </>
 );
}
