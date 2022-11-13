import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function GridItem({image}) {
 return (
  <Grid item>
   <ButtonBase>
    <Paper elevation={10} sx={{height: '38.6em', width: '56em'}}>
     <Box
      sx={{
       marginRight: 0,
       height: '32em',
       paddingTop: '23px',
       width: '56em',
      }}
      component='img'
      alt='Company logo.'
      src={image}
     />

     <Box sx={{p: '1.7px'}}>
      <Typography variant='h6' sx={{fontFamily: 'Furore', paddingTop: '1em'}}>
       Пример названия
      </Typography>
      <Typography
       variant='subtitle1'
       component='p'
       sx={{
        paddingLeft: '1em',
        paddingRight: '1em',
        fontFamily: 'Roboto',
        textAlign: 'justify',
        color: '#292929',
        lineHeight: '1.4em',
       }}
      >
       Пример первого абзаца статьи для визуализации визуализации объёма и демонстрации. Пример
       абзаца.
      </Typography>
     </Box>
    </Paper>
   </ButtonBase>
  </Grid>
 );
}
