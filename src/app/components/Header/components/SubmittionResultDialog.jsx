import React, {useState} from 'react';
/* import CloseIcon, SendIcon from '@mui/icons-material/Close'; */
import {
 ErrorOutlineRounded as ErrorOutlineRoundedIcon,
 CheckCircleOutline as CheckCircleOutlineIcon,
} from '@mui/icons-material';
import {
 Button,
 Dialog,
 DialogTitle,
 DialogContent,
 DialogContentText,
 DialogActions,
 Paper,
 Typography,
 Alert,
 FormControlLabel,
 Switch,
 Slide,
} from '@mui/material';

const SlideTransition = React.forwardRef(function Transition(props, ref) {
 return <Slide direction='up' ref={ref} {...props} />;
});

function SubmittionResultDialog({
 isOpenSubmittionResultDialog,
 handleCloseSubmittionResultDialog,
 emailjsResponse,
}) {
 console.log('SubmittionResultDialog:');
 console.log(emailjsResponse);
 const [isShowErrorDetails, setShowErrorDetails] = useState(false);
 return (
  <Dialog
   maxWidth='md'
   disableScrollLock
   scroll='body'
   TransitionComponent={SlideTransition}
   transitionDuration={{appear: 0, enter: 350, exit: 350}}
   /* PaperProps={{
    sx: {width: '700px' 'fitContent', left: 0},
   }} */
   /* sx={{ width: '1200px', left:0, 
    '& .MuiDialog-container': {
     justifyContent: 'flex-start',
     alignItems: 'flex-start',
    },
   }} */
   /* style={{width: '1000px', position: 'absolute', right: 0, top: 0}}
   sx={{width: '1000px', left:'45', m:0}} */
   open={isOpenSubmittionResultDialog}
   onClose={handleCloseSubmittionResultDialog}
   aria-labelledby='form-dialog-title'
  >
   <DialogTitle>
    {emailjsResponse.status === 200 ? (
     <Alert
      icon={<CheckCircleOutlineIcon style={{fontSize: '2em'}} />}
      variant='filled'
      severity='success'
      //style={{textAlign: 'left', textSize: '6rem'}}
     >
      <Typography component='p' sx={{fontSize: '2em'}}>
       Ваша заявка зарегистрирована.
      </Typography>
     </Alert>
    ) : (
     <Alert
      icon={<ErrorOutlineRoundedIcon style={{fontSize: '2em'}} />}
      variant='filled'
      severity='error'
     >
      <Typography component='p' sx={{fontSize: '2em'}}>
       Не удалось отправить заявку на обратный
      </Typography>
      <Typography component='p' sx={{fontSize: '2em'}}>
       звонок в связи с технической проблемой.
      </Typography>
     </Alert>
    )}
   </DialogTitle>
   <DialogContent>
    <DialogContentText>
     {emailjsResponse.status === 200 ? (
      <>
       <Typography component='p' sx={{fontSize: '1.5em'}}>
        Спасибо за Ваше обращение!
       </Typography>
       <Typography component='p' sx={{fontSize: '1.5em'}}>
        Мы свяжемся с Вами в ближайшее время.
       </Typography>
      </>
     ) : (
      <div sx={{pl:'3em', pr:'3em'}}>
       <Typography component='p' sx={{fontSize: '2em'}}>
        Пожалуйста, попробуйте ещё раз позже
       </Typography>
       <Typography component='p' sx={{fontSize: '2em'}}>
        или свяжитесь с нами другим способом.
       </Typography>
       <FormControlLabel
        sx={{marginLeft: '-43px', '& .MuiFormControlLabel-label': {fontSize: '1.5em', paddingTop: '2px'}}}
        control={
         <Switch
          sx={{marginRight: '35px', fontSize: '1.5em'}}
          checked={isShowErrorDetails}
          onChange={() => {
           setShowErrorDetails((prev) => !prev);
          }}
         />
        }
        label='Подробности ошибки'
       />
       <br />
       <Paper
        //sx={{fontSize: '0.3rem', fontFamily: 'Roboto', lineHeight: 1.5}}
        elevation={0}
        hidden={!isShowErrorDetails}
       >
        <Typography component='p'>Код ответа: {emailjsResponse.status}</Typography>

        <Typography component='p' style={{paddingLeft: '4.29em'}} sx={{fontSize:1}}>
         <p style={{textIndent: '-4.29em'}}>Ошибка: {emailjsResponse.text}</p>
        </Typography>
       </Paper>
      </div>
     )}
    </DialogContentText>
    <DialogActions>{/* {emailjsResponse.text} */}
     <Button
      style={{left: 0}}
      className='outline'
      onClick={() => handleCloseSubmittionResultDialog()}
     >
      Вернуться
     </Button>
    </DialogActions>
   </DialogContent>
  </Dialog>
 );
}
export default SubmittionResultDialog;
