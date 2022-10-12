import React from 'react';
// importing material UI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Logo from '../../assets/img/logo.svg';
import MapIcon from '@mui/icons-material/Map';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog from '@mui/material/Dialog';
import {func} from 'prop-types';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Stack, width} from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import ContactUsButton from '../../modules/header/ContactUsButton';

const IconTextField = ({iconStart, iconEnd, InputProps, ...props}) => {
 return (
  <TextField
   type='search'
   sx={{width: '480px', padding: '0.65rem 0.5rem'}}
   {...props}
   InputProps={{
    ...InputProps,
    startAdornment: iconStart ? (
     <InputAdornment position='start'>{iconStart}</InputAdornment>
    ) : null,
    endAdornment: iconEnd ? <InputAdornment position='end'>{iconEnd}</InputAdornment> : null,
   }}
  />
 );
};

function name(params) {}

export default function Header() {
 const theme = useTheme();
 const [open, setOpen] = React.useState(false);
 const [fullWidth, setFullWidth] = React.useState(true);
 const [maxWidth, setMaxWidth] = React.useState('sm');
 const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

 const handleClickOpen = (event) => {
  setOpen(true);
  setFullWidth(event.target.checked);
 };

 const handleClose = () => {
  setOpen(false);
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

    <div style={{display: 'flex', flexWrap: 'wrap'}}>
     <Typography
      variant='h6'
      component='div'
      sx={{flexGrow: 1}}
      style={{paddingLeft: '20px', color: '#292929'}}
     >
      info@ers.msk.ru
     </Typography>
     <Button
      component='div'
      style={{borderRadius: '0', backgroundColor: '#292929', textTransform: 'inherit'}}
      variant='contained'
      startIcon={<MapIcon />}
     >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Карта&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </Button>
    </div>

    <IconTextField
     style={{left: '-27px', borderRadius: '0', top: '16px'}}
     size='small'
     label=''
     iconEnd={<SearchIcon />}
    />

    <div style={{display: 'flex', flexWrap: 'wrap'}}>
     <ContactUsButton />
    </div>
   </Toolbar>
  </AppBar>
 );
}
