import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {withStyles} from '@material-ui/core/styles';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import {
 Button,
 Dialog,
 DialogTitle,
 DialogContent,
 DialogContentText,
 DialogActions,
 Paper,
} from '@mui/material';
import {Alert, FormControlLabel, Switch, Slide} from '@mui/material';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {Stack} from '@mui/system';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MyTextInput from './MyTextInput';
import {useMatch} from 'react-router-dom';
// import { DisplayFormikState } from './formikHelper';
import '../../../../assets/css/style.css';
import '../../../../assets/css/styles-custom.css';
import SubmitResultDialog from './SubmitResultDialog';
import ContactUsForm from './ContactUsForm';

const styles = {};

const theme = createTheme({
 components: {
  // todo: remove once the issue is addressed: https://github.com/mui/material-ui/issues/31185
  MuiDialogContent: {
   styleOverrides: {root: {paddingTop: `${20}px !important`, left: 'unset'}},
  },
 },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
 });

function Contact(props) {
 emailjs.init('GaqOI812E6KDw78sT');

 const contactUsForm = useRef();
 const [isOpenContactUsDialog, setOpenContactUsDialog] = useState(false);

 const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
 const [emailjsResponse, setEmailjsResponse] = useState({});

 const [isOpenSubmitResultForm, setOpenSubmitResultDialog] = useState(false);


 function handleCloseContactUsDialog() {
  setOpenContactUsDialog(false);
 }

 function handleClickBackcallButton() {
  setOpenContactUsDialog(true);
 }
 
 function handleCloseSubmitResultDialog() {
  setOpenSubmitResultDialog(false);
 }

 const handleSendEmail = (e) => {
  e.preventDefault();
  console.log('Sending e-mail');
  emailjs.sendForm('service_6netdbf', 'backCallForm', contactUsForm.current).then(
   (result) => {
    setIsSubmittedSuccessfully(true);
    setEmailjsResponse(result);
   },
   (error) => {
    setIsSubmittedSuccessfully(false);
    setEmailjsResponse(error);
    console.error(error);
   }
  );
 };

 var enableDebugButtons = useMatch("/debug");

 return (
  <React.Fragment>
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
     Обратный звонок
    </Button>

    <Dialog
     sx={{width: '1000px'}}
     open={isOpenContactUsDialog}
     onClose={handleCloseContactUsDialog}
     TransitionComponent={Transition}
     aria-labelledby='form-dialog-title'
    >
     <DialogTitle style={{paddingLeft: '1em'}} id='form-dialog-title'>
      Оставьте свои данные - и мы Вам перезвоним!
     </DialogTitle>
     <ThemeProvider theme={theme}>
      <DialogContent>
       {/* --------------------------------------------------------------------------------------------------------------------- */}
       <ContactUsForm/>
       {/* --------------------------------------------------------------------------------------------------------------------- */}
      </DialogContent>
     </ThemeProvider>
    </Dialog>

    <SubmitResultDialog
     isOpenSubmitResultForm = {isOpenSubmitResultForm}
     handleCloseSubmitResultDialog = {handleCloseSubmitResultDialog}
     emailjsResponse = {emailjsResponse}
    />
   </div>
  </React.Fragment>
 );
}

export default withStyles(styles)(Contact);
