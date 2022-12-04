import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, Slide, Typography} from '@mui/material';
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

/* const SlideTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
 }); */

 export default function SendUsEmailDialog({isOpenContactUsDialog, setOpenContactUsDialog})
 {
 console.log('SendUsEmailDialog:');

 console.table(arguments);
 console.log(isOpenContactUsDialog);
 console.log(setOpenContactUsDialog);
 //const [isOpenContactUsDialog, setOpenContactUsDialog] = useState(false);
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
 console.log('isOpenContactUsDialog');
 console.log(isOpenContactUsDialog);
    return (
        <>
    <Dialog 
     maxWidth='sm'
     fullWidth={false}
     /* style={{maxWidth: '400px, right: 0, top: 0}} */
     //sx={{/* width: '600px', */ m:0, p:0}}
     //PaperProps={{ sx: { mt: "50px", verticalAlign: "top", textAlign: 'center', justifySelf: 'auto'} }}
     scroll='body'
     open={isOpenContactUsDialog}
     onClose={handleCloseContactUsDialog}
     /* TransitionComponent={SlideTransition}
     transitionDuration={{appear: 1000, enter: 1000, exit: 1000}} */
     aria-labelledby='form-dialog-title'
     PaperProps={{ sx: { top:10, left:10, m:0 }}}
     /* sx={{'& .MuiDialog-container': {
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
     }}} */
    >
     <DialogTitle sx={{p: '1em', m:0}} id='form-dialog-title'>
      <Typography sx={{fontSize: '1.8em' , textAlign: 'center'}}>
       Оставьте свои данные и мы Вам перезвоним!
      </Typography>
     </DialogTitle>
     <ThemeProvider theme={theme}>
      <DialogContent sx={{mt:0, pt:0}}>
       <ContactUsForm {...{setEmailjsResponse, setOpenContactUsDialog, setOpenSubmittionResultDialog}} />
      </DialogContent>
     </ThemeProvider>
    </Dialog>
    <SubmittionResultDialog {...{isOpenSubmittionResultDialog, handleCloseSubmittionResultDialog, emailjsResponse}} />
    </>)
}