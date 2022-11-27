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
} from '@material-ui/core';
import {Box, Alert, AlertTitle, FormControlLabel, Switch, Slide} from '@mui/material';
import {Formik, Form, useField, useFormikContext} from 'formik';
import * as Yup from 'yup';
import {Stack} from '@mui/system';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MyTextInput from './MyTextInput';

// import { DisplayFormikState } from './formikHelper';
import '../../../../assets/css/style.css';
import '../../../../assets/css/styles-custom.css';

const styles = {};

const theme = createTheme({
 components: {
  // todo: remove once the issue is addressed: https://github.com/mui/material-ui/issues/31185
  MuiDialogContent: {
   styleOverrides: {root: {paddingTop: `${20}px !important`, left: 'unset'}},
  },
 },
});

function Contact(props) {
 emailjs.init('GaqOI812E6KDw78sT');

 const contactUsForm = useRef();
 const [isOpenContactUsDialog, setOpenContactUsDialog] = useState(false);

 const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
 const [emailjsResponse, setEmailjsResponse] = useState({});
 const [isShowErrorDetails, setShowErrorDetails] = useState(false);

 const [isOpenSubmitResultForm, setOpenSubmitResultDialog] = useState(false);

 function handleSubmitContactUsForm(values, {setSubmitting}) {
  handleSendEmail();
  setOpenSubmitResultDialog(true);
  setOpenContactUsDialog(false);
  setSubmitting(false);
 }

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

 var enableDebugButtons = true;

 return (
  <React.Fragment>
   <div style={{display: 'flex', flexWrap: 'wrap'}}>
    <div>
     <Typography
      variant='h6'
      component='div'
      sx={{flexGrow: 1, paddingLeft: '44px', color: '#2d3748'}}
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
     aria-labelledby='form-dialog-title'
     Dialog
    >
     <DialogTitle style={{paddingLeft: '1em'}} id='form-dialog-title'>
      Оставьте свои данные - и мы Вам перезвоним!
     </DialogTitle>
     <ThemeProvider theme={theme}>
      <DialogContent>
       {/* --------------------------------------------------------------------------------------------------------------------- */}
       <Formik
        initialValues={{email: '', name: '', phone: ''}}
        onSubmit={handleSubmitContactUsForm}
        validationSchema={Yup.object().shape({
         email: Yup.string()
          .email('Вы ввели некорректный адрес электронной почты')
          .required('Поле обязательно для заполнения'),
         name: Yup.string().required('Поле обязательно для заполнения'),
         phone: Yup.string().required('Поле обязательно для заполнения'),
        })}
       >
        <Form ref={contactUsForm} style={{width: '22em', height: '24em'}}>
         <Stack sx={{paddingLeft: '60px', paddingBottom: '1.5em'}} direction='column' noValidate>
          <MyTextInput label='Имя' name='name' type='text' placeholder='' />
          <MyTextInput label='E-mail' name='email' type='email' placeholder='' />
          <MyTextInput label='Телефон' name='phone' type='text' placeholder='' />
         </Stack>
         <DialogActions>
          <div style={{paddingRight: '7.5em'}}>
           <Button
            style={{
             width: '12em',
             height: '45px',
             borderRadius: '1',
             color: '#F1F1F1F1',
             backgroundColor: '#2d3748',
            }}
            type='submit'
            className='btn btn-primary'
            variant='contained'
           >
            Отправить
           </Button>

           {
            /*Кнопки для теста, имитирующие отправку формы: успешную или с ошибкой */
            (enableDebugButtons = true)
           }
           {enableDebugButtons && (
            <div>
             <Button
              style={{
               margin: '6px',
               width: '6em',
               color: 'green',
               height: '20px',
               backgroundColor: '#2d3748',
              }}
              onClick={() => {
               setIsSubmittedSuccessfully(true);
               setEmailjsResponse({status: 200, text: ' OK '});
               console.log(emailjsResponse);
               setOpenSubmitResultDialog(true);
               setOpenContactUsDialog(false);
              }}
             >
              Test OK
             </Button>
             <Button
              style={{
               margin: '6px',
               width: '8em',
               color: 'red',
               height: '20px',
               backgroundColor: '#2d3748',
              }}
              onClick={() => {
               setIsSubmittedSuccessfully(false);
               setEmailjsResponse({
                status: 412,
                text:
                 "SMTP: Can't send mail - all recipients were rejected: 554 5.7.1 <orozov@bk.ru>: Relay access denied",
               });
               setOpenSubmitResultDialog(true);
               setOpenContactUsDialog(false);
              }}
             >
              Test Error
             </Button>
            </div>
           )}
          </div>
         </DialogActions>
        </Form>
       </Formik>
       {/* --------------------------------------------------------------------------------------------------------------------- */}
      </DialogContent>
     </ThemeProvider>
    </Dialog>

    <Dialog
     sx={{width: '1000px'}}
     open={isOpenSubmitResultForm}
     onClose={handleCloseSubmitResultDialog}
     aria-labelledby='form-dialog-title'
    >
     <DialogTitle>
      {isSubmittedSuccessfully ? (
        <>
         'Ваша заявка зарегистрирована.'
       </>
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
       {isSubmittedSuccessfully ? (
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
        //sx={{all:{left: '0'}}}
        className='outline'
        onClick={() => setOpenSubmitResultDialog(false)}
       >
        Вернуться
       </Button>
      </DialogActions>
     </DialogContent>
    </Dialog>
   </div>
  </React.Fragment>
 );
}

export default withStyles(styles)(Contact);
