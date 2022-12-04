import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

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
