import React from 'react';
import {makeStyles} from '@mui/styles';
import ButtonBase from '@mui/material/ButtonBase';
import {Link} from 'react-router-dom';
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
