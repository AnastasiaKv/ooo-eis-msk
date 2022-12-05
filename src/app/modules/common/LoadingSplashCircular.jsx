import React from 'react';
import {makeStyles} from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
 progress: {
  margin: theme.spacing(2),
 },
}));

export default function LoadingSplashCircular() {
 const classes = useStyles();
 return (
  <div id='splash'>
   <Grid
    className=''
    container
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    style={{minHeight: '100vh'}}
   >
    <Grid item xs={3}>
     <CircularProgress className={classes.progress} color='secondary' />
    </Grid>
    <Grid item xs={3}>
     Идет загрузка....
    </Grid>
   </Grid>
  </div>
 );
}
