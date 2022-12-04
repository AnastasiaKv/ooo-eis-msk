import React, {useState} from 'react';
import {withStyles} from '@mui/styles';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import {Button, Typography} from '@mui/material';
import '../../../../assets/css/style.css';
import '../../../../assets/css/styles-custom.css';

export default function ContactUsButton({setOpenContactUsDialog}) {
  function handleClickBackcallButton() {
    console.log(setOpenContactUsDialog);
  console.log('ContactUsButton     setOpenContactUsDialog(true);');
  setOpenContactUsDialog(true);
 }

 return (
  <div style={{display: 'flex', flexWrap: 'wrap'}}>
   <div>
    <Typography
     variant='h6'
     component='div'
     style={{flexGrow: 1, paddingLeft: '44px', color: '#2d3748'}}
    >
     8 (495)-135-82-88
    </Typography>
   </div>
   <Button
    onClick={handleClickBackcallButton}
    style={{
     borderRadius: 3,
     textTransform: 'inherit',
     color: '#ffffff',
     backgroundColor: '#F12B29',
     height: '37.1px',
    }}
    variant='contained'
    startIcon={<HeadsetMicIcon />}
   >
    <span>Обратный звонок</span>
   </Button>

  </div>
 );
}
