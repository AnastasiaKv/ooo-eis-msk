import React, {useState} from 'react';
/* import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CheckIcon from '@mui/icons-material/Check'; */
import {Send as SendIcon, CheckCircleOutline as CheckCircleOutlineIcon} from '@mui/icons-material';
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

function SubmittionResultDialog(
 {isOpenSubmittionResultDialog,
 handleCloseSubmittionResultDialog,
 emailjsResponse}
) {
 console.log('SubmittionResultDialog:');
 console.log(emailjsResponse);
 const [isShowErrorDetails, setShowErrorDetails] = useState(false);
 return (
  <Dialog
   style={{width: '1000px'/* , position: 'absolute', right: 0, top: 0 */}}
   //sx={{width: '1000px', left:'45', m:0}}
   open={isOpenSubmittionResultDialog}
   onClose={handleCloseSubmittionResultDialog}
   TransitionComponent={SlideTransition}
   aria-labelledby='form-dialog-title'
  >
   <DialogTitle>
    {emailjsResponse.status === 200 ? (
     <Alert
      icon={<CheckCircleOutlineIcon style={{fontSize: '1.7rem'}} />}
      variant='filled'
      severity='success'
      style={{textAlign: 'left', fontSize: '1.7rem'}}
     >
      Ваша заявка зарегистрирована.
     </Alert>
    ) : (
     <Alert variant='filled' severity='error' sx={{textAlign: 'left', fontSize: '1.3em'}}>
      <p style={{fontWeight: 400, marginTop: '-0.15em'}}>
       Не удалось отправить заявку на обратный звонок в связи с технической проблемой.
      </p>
     </Alert>
    )}
   </DialogTitle>
   <DialogContent>
    <DialogContentText>
     {emailjsResponse.status === 200 ? (
      <Typography component='div' sx={{textAlign: 'left', textSize: '4rem'}}>
       Спасибо за Ваше обращение!
       <br />
       Мы свяжемся с Вами в ближайшее время.
      </Typography>
     ) : (
      <div style={{textAlign: 'left', fontSize: '1.2em'}}>
       <p>
        Пожалуйста, попробуйте ещё раз позже или свяжитесь с нами другим способом.
        <br />
        <br />
       </p>
       <FormControlLabel
        sx={{marginLeft: '-43px', fontSize: '1.1rem'}}
        control={
         <Switch
          sx={{marginRight: '30px'}}
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

        <Typography component='div' style={{paddingLeft: '4.29em'}}>
         <p style={{textIndent: '-4.29em'}}>Ошибка: {emailjsResponse.text}</p>
        </Typography>
       </Paper>
      </div>
     )}
    </DialogContentText>
    <DialogActions>
     <Button
      style={{left: 0}}
      //sx={{all:{left: '0'}}}
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
