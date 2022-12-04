import React, {useState} from 'react';
/* import CloseIcon from '@mui/icons-material/Close'; */
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
/* import Typography from '@mui/material/Typography'; */

const Transition = React.forwardRef(function Transition(props, ref) {
 return <Slide direction='up' ref={ref} {...props} />;
});

function SubmitResultDialog({
 isOpenSubmitResultForm,
 handleCloseSubmitResultDialog,
 emailjsResponse}
) {
    console.log("SubmitResultDialog:");
    console.log(isOpenSubmitResultForm);
    console.log(handleCloseSubmitResultDialog);
    console.log(emailjsResponse);
 const [isShowErrorDetails, setShowErrorDetails] = useState(false);
 //return (<br/>);
 return (
  <Dialog
   sx={{width: '1000px'}}
   open={isOpenSubmitResultForm}
   onClose={handleCloseSubmitResultDialog}
   TransitionComponent={Transition}
   aria-labelledby='form-dialog-title'
  >
   <DialogTitle>
    {emailjsResponse.status === 200 ? (
     <>'Ваша заявка зарегистрирована.'</>
    ) : (
     <Alert variant='filled' severity='error' sx={{textAlign: 'left', fontSize: '1.1rem'}}>
      <p style={{fontWeight: 400, marginTop: '-0.15em'}}>
       Не удалось отправить заявку на обратный звонок в связи с технической проблемой.
      </p>
     </Alert>
    )}
   </DialogTitle>
   <DialogContent>
    <DialogContentText>
     {emailjsResponse.status === 200 ? (
      <div>
       Спасибо за Ваше обращение!
       <br />
       Мы позвоним Вам в ближайшее время.
      </div>
     ) : (
      <div style={{textAlign: 'left', fontSize: '1.6em'}}>
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
        sx={{fontSize: '0.3rem', fontFamily: 'Roboto', lineHeight: 1.5}}
        elevation={0}
        hidden={!isShowErrorDetails}
       >
        <div>
         Код ответа: {emailjsResponse.status}
         <br />
         Ошибка: {emailjsResponse.text}
        </div>
       </Paper>
      </div>
     )}
    </DialogContentText>
    <DialogActions>
     <Button
      style={{left: 0}}
      className='outline'
      onClick={() => handleCloseSubmitResultDialog()}
     >
      Вернуться
     </Button>
    </DialogActions>
   </DialogContent>
  </Dialog>
 );
}
export default SubmitResultDialog;
