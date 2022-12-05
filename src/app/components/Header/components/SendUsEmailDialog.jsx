import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, Slide, Typography} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import '../../../../assets/css/style.css';
import '../../../../assets/css/styles-custom.css';
import SubmittionResultDialog from './SubmittionResultDialog';
import ContactUsForm from './ContactUsForm';

const theme = createTheme({
 components: {
  // todo: remove once the issue is addressed: https://github.com/mui/material-ui/issues/31185
  MuiDialogContent: {
   styleOverrides: {root: {paddingTop: `${20}px !important`, left: 'unset'}},
  },
 },
});

const SlideTransition = React.forwardRef(function Transition(props, ref) {
 return <Slide direction='up' ref={ref} {...props} />;
});

export default function SendUsEmailDialog({isOpenContactUsDialog, setOpenContactUsDialog}) {
 const [emailjsResponse, setEmailjsResponse] = useState({});
 const [isOpenSubmittionResultDialog, setOpenSubmittionResultDialog] = useState(false);
 function handleCloseContactUsDialog() {
  setOpenContactUsDialog(false);
 }
 function handleCloseSubmittionResultDialog() {
  setOpenSubmittionResultDialog(false);
 }
 return (
  <>
   <Dialog
    disableScrollLock
    scroll='body'
    open={isOpenContactUsDialog}
    onClose={handleCloseContactUsDialog}
    TransitionComponent={SlideTransition}
    transitionDuration={{appear: 0, enter: 350, exit: 350}}
    aria-labelledby='form-dialog-title'
    PaperProps={{
     sx: {width: 'fitContext', left: 0},
    }} /* {{sx: {position:'fixed', top:10, left:10, m:2}}} */ /* {{sx: {width:'90%', height:'90%', left:0}}} */
    sx={{
     '& .MuiDialog-container': {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
     },
    }}
   >
    <DialogTitle sx={{p: '1em', m: 0}} id='form-dialog-title'>
     <Typography sx={{fontSize: '1.8em', textAlign: 'center'}}>
      Оставьте свои данные <br /> и мы Вам перезвоним!
     </Typography>
    </DialogTitle>
    <ThemeProvider theme={theme}>
     <DialogContent /* sx={{mt: 0, pt: 0}} */>
      <ContactUsForm
       {...{setEmailjsResponse, setOpenContactUsDialog, setOpenSubmittionResultDialog}}
      />
     </DialogContent>
    </ThemeProvider>
   </Dialog>
   <SubmittionResultDialog
    {...{isOpenSubmittionResultDialog, handleCloseSubmittionResultDialog, emailjsResponse}}
   />
  </>
 );
}
