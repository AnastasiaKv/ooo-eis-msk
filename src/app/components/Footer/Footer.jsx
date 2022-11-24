import * as React from 'react';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LeftDecor from './decor/left/DecorLeft';
import RightDecor from './decor/right/DecorRight';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FooterLogo from '../../../assets/img/Footer/Footer_1017x1017.svg';

const copyrightStyle = {
 color: 'white',
 paddingRight: '25em',
 paddingTop: '2em',
};

const useStyles = makeStyles((theme) => ({
 customizeToolbar: {
  height: 90,
 },
}));

export default function Footer() {
 const [value, setValue] = React.useState(0);
 const classes = useStyles();
 return (
  <div className='ees-footer-content' style={{height: '91px'}}>
   <LeftDecor />
   <RightDecor />
   <BottomNavigation
    elev
    disableFocusRipple={true}
    style={{paddingRight: '250px', height: '90px'}}
    sx={{bgcolor: 'transparent'}}
    showLabels
    value={value}
    onChange={(event, newValue) => {
     setValue(newValue);
    }}
   >
    <Typography style={copyrightStyle}>©Copyright</Typography>
   </BottomNavigation>
  </div>
 );
}
