import React, {useRef /* , useState */} from 'react';
import emailjs from '@emailjs/browser';
/* import {withStyles} from '@mui/material/styles';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close'; */
import {
 Button,
 /* Dialog,
 DialogTitle,
 DialogContent,
 DialogContentText, */
 DialogActions,
 /*  Paper, */
} from '@mui/material';
/* import {Alert, FormControlLabel, Switch,  Slide} from '@mui/material'; */
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {Stack} from '@mui/system';
/* import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles'; */
import MyTextInput from '../../../modules/common/MyTextInput';
// import { DisplayFormikState } from './formikHelper';
import '../../../../assets/css/style.css';
import '../../../../assets/css/styles-custom.css';
/* import SubmitResultDialog from './SubmitResultDialog'; */
import {useMatch} from 'react-router-dom';

/* const Transition = React.forwardRef(function Transition(props, ref) {
 return <Slide direction='up' ref={ref} {...props} />;
}); */

export default function ContactUsForm({
 setEmailjsResponse,
 setOpenContactUsDialog,
 setOpenSubmittionResultDialog,
}) {
 emailjs.init('GaqOI812E6KDw78sT');
 function handleSubmitContactUsForm( values, {setSubmitting}) {
  console.log('Sending e-mail');
  console.log(values);
  emailjs.sendForm('service_6netdbf', 'backCallForm', contactUsForm.current).then(
   (result) => {
    console.info('Email sent succesfully.');
    console.info(result);
    setEmailjsResponse(result);
    setOpenContactUsDialog(false);
    setOpenSubmittionResultDialog(true);
    setSubmitting(false);
   },
   (error) => {
    console.info('Error: Email did not sent.');
    console.info(error);
    setEmailjsResponse(error);
    setOpenContactUsDialog(false);
    setOpenSubmittionResultDialog(true);
    setSubmitting(false);
   }
  );
 }

 /*  const handleSendEmail = (e) => {
  e.preventDefault();
  console.log('Sending e-mail');
  emailjs.sendForm('service_6netdbf', 'backCallForm', contactUsForm.current).then(
   (result) => {
    setEmailjsResponse(result);
   },
   (error) => {
    setEmailjsResponse(error);
    console.error(error);
   }
  );
 }; */

 const contactUsForm = useRef();

 var enableDebugButtons = useMatch('/debug');
 //return (<br/>);
 return (
  <>
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
        left:0,
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
        //Кнопки для теста, имитирующие отправку формы: успешную или с ошибкой
        enableDebugButtons && (
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
            setEmailjsResponse({status: 200, text: ' OK '});
            setOpenSubmittionResultDialog(true);
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
            setEmailjsResponse({
             status: 410,
             text:
              "SMTP: Can't send mail - all recipients were rejected: 554 5.7.1 <recipient@mailserver.ru>: Relay access denied",
            });
            setOpenSubmittionResultDialog(true);
            setOpenContactUsDialog(false);
           }}
          >
           Test Error
          </Button>
         </div>
        )
       }
      </div>
     </DialogActions>
    </Form>
   </Formik>
  </>
 );
}
