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
    <Paper sx={{width: 225}}>
     <Box
      sx={{
       marginRight: 0,
       height: '140px',
       paddingTop: '23px',
       width: '225px',
      }}
      component='img'
      alt='Company logo.'
      src={image}
     />

     <Box sx={{p: 1}}>
      <Typography variant='subtitle1'>
       <b>Пример названия</b>
      </Typography>
      <Typography variant='caption' style={{lineHeight: 1}}>
       Пример первого абзаца статьи для визуализации визуализации объёма и демонстрации. Пример
       абзаца.
      </Typography>
     </Box>
    </Paper>
   </ButtonBase>
  </Grid>
 );
}
