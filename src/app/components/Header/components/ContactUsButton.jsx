import React, {useState} from 'react';
import {withStyles} from '@mui/styles';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import {
 Button,
 Dialog,
 DialogTitle,
 DialogContent,
 Slide,
 Typography,
} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import '../../../../assets/css/style.css';
import '../../../../assets/css/styles-custom.css';
import SubmittionResultDialog from './SubmittionResultDialog';
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

/* const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
 }); */

function Contact(props) {
 const [isOpenContactUsDialog, setOpenContactUsDialog] = useState(false);

 const [emailjsResponse, setEmailjsResponse] = useState({});

 const [isOpenSubmittionResultDialog, setOpenSubmittionResultDialog] = useState(false);


 function handleCloseContactUsDialog() {
  setOpenContactUsDialog(false);
 }

 function handleClickBackcallButton() {
  setOpenContactUsDialog(true);
 }
 
 function handleCloseSubmittionResultDialog() {
  setOpenSubmittionResultDialog(false);
 }

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
     /* TransitionComponent={Transition} */
     aria-labelledby='form-dialog-title'
    >
     <DialogTitle style={{paddingLeft: '1em'}} id='form-dialog-title'>
      Оставьте свои данные - и мы Вам перезвоним!
     </DialogTitle>
     <ThemeProvider theme={theme}>
      <DialogContent>
       {/* --------------------------------------------------------------------------------------------------------------------- */}
       <ContactUsForm 
        setEmailjsResponse={setEmailjsResponse}
        setOpenContactUsDialog={setOpenContactUsDialog}
        setOpenSubmittionResultDialog={setOpenSubmittionResultDialog}/>
       {/* --------------------------------------------------------------------------------------------------------------------- */}
      </DialogContent>
     </ThemeProvider>
    </Dialog>

    <SubmittionResultDialog
     isOpenSubmittionResultDialog={isOpenSubmittionResultDialog}
     handleCloseSubmittionResultDialog={handleCloseSubmittionResultDialog}
     emailjsResponse={emailjsResponse}
    />
   </div>
  </React.Fragment>
 );
}

export default withStyles(styles)(Contact);
