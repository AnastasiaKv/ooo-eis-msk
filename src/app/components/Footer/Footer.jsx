import * as React from 'react';
import {Typography} from '@mui/material';
import LeftDecor from './decor/left/DecorLeft';
import RightDecor from './decor/right/DecorRight';
/* import {makeStyles} from '@mui/styles'; */
import BottomNavigation from '@mui/material/BottomNavigation';

const copyrightStyle = {
 color: 'white',
 paddingRight: '25em',
 paddingTop: '2em',
};

/* const useStyles = makeStyles((theme) => ({
 customizeToolbar: {
  height: 90,
 },
})); */

export default function Footer() {
/*  const [value, setValue] = React.useState(0); */
/*  const classes = useStyles(); */
 return (
  <div className='ees-footer-content' style={{height: '91px'}}>
   <LeftDecor />
   <RightDecor />
   <BottomNavigation
    /* elev */
    /* disableFocusRipple={true} */
    style={{paddingRight: '250px', height: '90px'}}
    sx={{bgcolor: 'transparent'}}
    /* showLabels */
    value={0}
    /* onChange={(event, newValue) => {
     setValue(newValue);
    }} */
   >
    <Typography style={copyrightStyle}>©Copyright</Typography>
   </BottomNavigation>
  </div>
 );
}
