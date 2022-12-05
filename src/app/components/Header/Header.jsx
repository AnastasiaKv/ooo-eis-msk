import React from 'react';
// importing material UI components
import {AppBar} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../../assets/img/Header/logo.png';
/* import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles'; */
import ContactUsButton from './components/ContactUsButton';
import YMapButton from './components/YMapButton';
import LiveSearch from './components/LiveSearch';

export default function Header() {
 
 return (
  <>
  <AppBar className='ees-header-content' elevation={0} sx={{bgcolor: 'white'}}>
   <Toolbar>
    <Box
     style={{marginRight: 0, height: '93px', paddingTop: '28px'}}
     component='img'
     alt='Company logo.'
     src={Logo}
    />
    <YMapButton />
    <LiveSearch iconEnd={<SearchIcon />} />
    <ContactUsButton />
   </Toolbar>
  </AppBar>
  </>
 );
}
