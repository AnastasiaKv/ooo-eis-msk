import * as React from 'react';
import {Typography} from '@mui/material';
import LeftDecor from './decor/left/DecorLeft';
import RightDecor from './decor/right/DecorRight';
import BottomNavigation from '@mui/material/BottomNavigation';

const copyrightStyle = {
 color: 'white',
 paddingRight: '25em',
 paddingTop: '2em',
};

export default function Footer() {
 return (
  <div className='ees-footer-content' style={{height: '91px'}}>
   <LeftDecor />
   <RightDecor />
   <BottomNavigation
    style={{paddingRight: '250px', height: '90px'}}
    sx={{bgcolor: 'transparent'}}
    value={0}
   >
    <Typography style={copyrightStyle}>©Copyright</Typography>
   </BottomNavigation>
  </div>
 );
}
