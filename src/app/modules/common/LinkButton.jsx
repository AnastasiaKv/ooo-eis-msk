import React/* , {useState} */ from 'react';
/* import Box from '@mui/material/Box'; */
import {makeStyles} from '@mui/styles';
import ButtonBase from '@mui/material/ButtonBase';
import {Link/* , Outlet, useMatch, useMatches */} from 'react-router-dom';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
 flexGrow: {
  flex: '1',
 },
});

export default function LinkButton(props) {
 const classes = useStyles();
 return (
  <>
   <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
    <ButtonBase
     style={{minWidth: '100px', minHeight: '25px'}}
     component={Link}
     {...props}
    />
   </Paper>
  </>
 );
}
