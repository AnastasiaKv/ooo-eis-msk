import React, {useRef, useState} from 'react';
import emailjs, {init, SMTPClient} from '@emailjs/browser';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Alert, AlertTitle } from '@mui/material';
import {Formik, Form, useField, useFormikContext} from 'formik';
import * as Yup from 'yup';
import {Stack, width} from '@mui/system';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';

// import { DisplayFormikState } from './formikHelper';
import '../../../../assets/css/style.css';
import '../../../../assets/css/styles-custom.css';
import MyTextInput from './MyTextInput';





function Contact(props) {
emailjs.init('GaqOI812E6KDw78sT');

<Formik
 initialValues={{email: '', name: '', phone: ''}}
 onSubmit={(values, {setSubmitting}) => {
  handleSendEmail();
  setSubmitionFinished(true);
  setSubmitting(false);
 }}
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
        color: '#F1F1F1F1',
        height: '20px',
        backgroundColor: '#2d3748',
       }}
       onClick={() => {
        setIsSubmitSuccessfully(true);
        setEmailjsResponse({status: 200, text: ' OK '});
        console.log(emailjsResponse);
        setSubmitionFinished(true);
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
        setIsSubmitSuccessfully(false);
        setEmailjsResponse({
         status: 412,
         text:
          "SMTP: Can't send mail - all recipients were rejected: 554 5.7.1 <orozov@bk.ru>: Relay access denied",
        });
        setSubmitionFinished(true);
       }}
      >
       Test Error
      </Button>
     </div>
    )}
   </div>
  </DialogActions>
 </Form>
</Formik>;
