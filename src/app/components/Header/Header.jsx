import React, {useState} from 'react';
// importing material UI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Logo from '../../../assets/img/logo.svg';
import {func} from 'prop-types';
import {Stack, width} from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import ContactUsButton from './components/ContactUsButton';
import YMapButton from './components/YMapButton';
import LiveSearch from './components/LiveSearch';

export default function Header() {
 const theme = useTheme();

 const [isShown, setIsShown] = useState(false);
 const [fullWidth, setFullWidth] = useState(true);
 const [maxWidth, setMaxWidth] = useState('sm');
 const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

 const handleClick = (event) => {
  // 👇️ toggle shown state

  setIsShown((current) => !current);
  // 👇️ or simply set it to true
  //setIsShown(true);
  setFullWidth(event.target.checked);
 };

 const handleClose = () => {
  setIsShown(false);
 };

 return (
  <AppBar className='ees-header-content' elevation={0} sx={{bgcolor: 'white'}}>
   <Toolbar>
    <Box
     sx={{marginRight: 0, height: '93px', paddingTop: '28px'}}
     component='img'
     alt='Company logo.'
     src={Logo}
    />
    <YMapButton />
    <LiveSearch iconEnd={<SearchIcon />} />
    <ContactUsButton />
   </Toolbar>
  </AppBar>
 );
}
