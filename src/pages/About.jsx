import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';
import Paper from '@mui/material/Paper';
export default function About() {
 return (
  <>
   <main className='ees-content'>
    <Paper elevation={0} sx={{marginBottom: 5}}>
     <Stack>
      <Typography variant='body2' component='span' sx={{flexGrow: 1}}>
       Мы являемся компанией
      </Typography>
     </Stack>
    </Paper>
   </main>
  </>
 );
}
