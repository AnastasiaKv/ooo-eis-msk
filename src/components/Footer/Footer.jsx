import * as React from 'react';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RedLine from './decor/RedLine';
import LeftDecor from './decor/DecorLeft';
import RightDecor from './decor/DecorRight';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CopyrightIcon from '@mui/icons-material/Copyright';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PolicyIcon from '@mui/icons-material/Policy';
import MapIcon from '@mui/icons-material/Map';

const color = {
 color: 'white',
 paddingRight: '260px',
};
const spacing_10cm = {
 color: 'white',
};
const spacing_40px = {
 color: 'white',
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
   {/* <RedLine /> */}
   {/* Витя, AppBar генерит тег <header>, а тебе нужен тут просто <div> */}
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
    <BottomNavigationAction disableRipple style={color} label='©Copyright' />
    <BottomNavigationAction style={spacing_10cm} label='Карта сайта' />
    <BottomNavigationAction style={spacing_40px} label='Политика' />
    <BottomNavigationAction style={spacing_40px} label='Конфеденциальность' />
   </BottomNavigation>
  </div>
 );
}
