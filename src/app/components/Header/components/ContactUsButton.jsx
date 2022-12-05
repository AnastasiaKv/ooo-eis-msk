import React, {useState} from 'react';
/* import {withStyles} from '@mui/styles'; */
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import {Button, Typography} from '@mui/material';
import '../../../../assets/css/style.css';
import '../../../../assets/css/styles-custom.css';
import SendUsEmailDialog from './SendUsEmailDialog';

export default function ContactUsButton() {
 function handleClickBackcallButton() {
  setOpenContactUsDialog(true);
 }
 const [isOpenContactUsDialog, setOpenContactUsDialog] = useState(false);

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
     backgroundColor: '#e53e3e',
     height: '37.1px',
    }}
    variant='contained'
    startIcon={<HeadsetMicIcon />}
   >
    <span>Обратный звонок</span>
   </Button>
   <SendUsEmailDialog {...{isOpenContactUsDialog, setOpenContactUsDialog}} />
  </div>
 );
}
