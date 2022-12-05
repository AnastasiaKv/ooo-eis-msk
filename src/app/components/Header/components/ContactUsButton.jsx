import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {withStyles} from '@material-ui/core/styles';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import {
 Button,
 Dialog,
 DialogTitle,
 DialogContent,
 DialogContentText,
 DialogActions,
 Paper,
} from '@material-ui/core';
import {Alert, FormControlLabel, Switch, Slide} from '@mui/material';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {Stack} from '@mui/system';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MyTextInput from '../../../modules/common/MyTextInput';
// import { DisplayFormikState } from './formikHelper';
import '../../../../assets/css/style.css';
import '../../../../assets/css/styles-custom.css';
import {useMatch} from 'react-router-dom';
import SubmittionResultDialog from './SubmittionResultDialog';
import ContactUsForm from './ContactUsForm';
import SendUsEmailDialog from './SendUsEmailDialog'

const theme = createTheme({
 components: {
  // todo: remove once the issue is addressed: https://github.com/mui/material-ui/issues/31185
  MuiDialogContent: {
   styleOverrides: {root: {paddingTop: `${20}px !important`, left: 'unset'}},
  },
 },
});

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
     backgroundColor: '#F12B29',
     height: '37.1px',
    }}
    variant='contained'
    startIcon={<HeadsetMicIcon />}
   >
    <span>Обратный звонок</span>
   </Button>
   <SendUsEmailDialog {...{isOpenContactUsDialog, setOpenContactUsDialog}}/>
  </div>
 );
}
