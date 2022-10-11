import React from 'react';
// importing material UI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Logo from '././../assets/img/logo.svg';
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

const IconTextField = ({iconStart, iconEnd, InputProps, ...props}) => {
 return (
  <TextField
   style={{}}
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

    <div>
     <Typography
      variant='h6'
      component='div'
      sx={{flexGrow: 1}}
      style={{paddingLeft: 70, color: '#292929'}}
     >
      info@ers.msk.ru
     </Typography>
     <Button
      component='div'
      style={{borderRadius: '0', backgroundColor: '#292929'}}
      variant='contained'
      startIcon={<MapIcon />}
     >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Карта&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </Button>
    </div>

    <IconTextField
     style={{left: '-10px', borderRadius: '0', top: 16}}
     size='small'
     label=''
     iconEnd={<SearchIcon />}
    />

    <div>
     <div style={{top: 16}}>
      <Typography
       variant='h6'
       component='div'
       sx={{flexGrow: 1}}
       style={{paddingLeft: 70, color: '#292929'}}
      >
       8-800-232-32-22
      </Typography>
     </div>

     <div style={{display: 'flex'}}>
      <Button
       style={{borderRadius: '0', backgroundColor: '#f12b29'}}
       variant='contained'
       onClick={handleClickOpen}
       startIcon={<HeadsetMicIcon />}
      >
       Обратный звонок
      </Button>
      <Dialog
       sx={{width: '900px', padding: '25px 0px'}}
       fullWidth='1000px'
       maxWidth='1000px'
       open={open}
       onClose={handleClose}
      >
       <DialogContent sx={{padding: '25px 0px'}}>
        <DialogContentText>
         <strong>Оставьте свои данные - и мы Вам перезвоним!</strong>
        </DialogContentText>
        <br />
        <Stack
         sx={{overflow: 'hidden', padding: '10px 0px'}}
         direction='row'
         spacing={2}
         noValidate
         component='form'
        >
         <TextField
          id='text'
          type='text'
          size='small'
          label=''
          variant='outlined'
          InputLabelProps={{
           shrink: true,
           left: '20px',
          }}
         />

         <TextField
          id='tel'
          type='tel'
          size='small'
          label=''
          variant='outlined'
          InputLabelProps={{
           left: 20,
           shrink: false,
          }}
         />

         <TextField
          id='mail'
          type='tel'
          size='small'
          label=''
          variant='outlined'
          InputLabelProps={{
           shrink: true,
          }}
         />
        </Stack>
       </DialogContent>
       <DialogActions>
        <div style={{paddingBottom: '20px', paddingRight: '15.5em'}}>
         <Button
          onClick={handleClose}
          style={{width: '12em', height: '45px', borderRadius: '1', backgroundColor: '#292929'}}
          variant='contained'
         >
          Отправить
         </Button>
        </div>
       </DialogActions>
      </Dialog>
     </div>
    </div>
   </Toolbar>
  </AppBar>
 );
}
