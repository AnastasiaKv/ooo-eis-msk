import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';
import Paper from '@mui/material/Paper';
import trkLogo from '../assets/img/companiesLogos/trk/logo.svg';
import mlrzLogo from '../assets/img/companiesLogos/mlrz/MLRZ-logo.png';
import vrmLogo from '../assets/img/companiesLogos/vrm/logo4.png';

export default function About() {
 return (
  <>
   <main className='ees-content'>
    <Paper elevation={0} sx={{paddingTop: '4.5em', marginBottom: 5}}>
     <Stack sx={{width: '37em'}}>
      <Typography
       component='p'
       sx={{
        textIndent: '2ch',
        lineHeight: '2.3em',
        flexGrow: 1,
        fontFamily: 'Roboto',
        position: 'relative',
        justifyContent: 'space-around',
        textAlign: 'justify',
        color: '#292929',
       }}
      >
       Мы являемся компанией, производящей ремонт, подвагонного оборудования для нужд ООО "РЖД" и
       ООО "ФПК" с 2007 года. В 2022 году мы освоили большую часть направлений, ремонта любых
       электрических и механических устройств, и решили выйти на рынок железнодорожного бизнеса
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
     <Box sx={{height: '10em'}}></Box>

     <Stack sx={{paddingTop: '3em'}}>
      <Typography
       variant='h4'
       component='h2'
       sx={{textAlign: 'center', flexGrow: 1}}
       style={{
        fontFamily: 'Furore',
        fontSize: '28px',
        color: '#292929',
        paddingBottom: '2em',
       }}
      >
       Наши партнеры:
      </Typography>
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
