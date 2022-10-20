import React, {useState} from 'react';
import Box from '@mui/material/Box';
import {makeStyles} from '@material-ui/styles';
import ButtonBase from '@mui/material/ButtonBase';
import {Link, Outlet, useMatch, useMatches} from 'react-router-dom';

import Paper from '@mui/material/Paper';
const useStyles = makeStyles({
 flexGrow: {
  flex: '1',
 },
});

export default function LinkButton(props) {
 const classes = useStyles();

 console.log('ClickClick: ', this);
 return (
  <>
   <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
    <ButtonBase
     sx={{minWidth: '100px', minHeight: '25px'}}
     component={Link}
     onClick={(event) => {
      event.preventDefault();
     }}
     {...props}
    />
   </Paper>
  </>
 );
}
