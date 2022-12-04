import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
/* import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close'; */
import {
 Button,
 DialogActions,
 Stack,
} from '@mui/material';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../modules/common/MyTextInput';
import '../../../../assets/css/style.css';
import '../../../../assets/css/styles-custom.css';
import {useMatch} from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function ContactUsForm(
 {setEmailjsResponse,
 setOpenContactUsDialog,
 setOpenSubmittionResultDialog}) 
 {
  console.log("ContactUsForm");
  console.log(arguments);
  console.table(arguments);
 emailjs.init('GaqOI812E6KDw78sT');

 function handleSubmitContactUsForm(values, {setSubmitting}) {
  setSubmitting(true);
  console.log('Sending e-mail');
  console.table(values);
  emailjs.sendForm('service_6netdbf', 'backCallForm', contactUsForm.current).then(
   (result) => {
    console.info('Email sent succesfully.');
    console.table(result);
    setEmailjsResponse(result);
    setOpenContactUsDialog(false);
    setOpenSubmittionResultDialog(true);
    setSubmitting(false);
   },
   (error) => {
    console.info('Error: Email did not sent.');
    console.table(error);
    setEmailjsResponse(error);
    setOpenContactUsDialog(false);
    setOpenSubmittionResultDialog(true);
    setSubmitting(false);
   }
  );
 }

 const contactUsForm = useRef();

 var enableDebugButtons = useMatch('/debug');
 return (
  <>
   <Formik
    initialValues={{email: '', name: '', phone: ''}}
    onSubmit={handleSubmitContactUsForm}
    /* validationSchema = {
     Yup.object().shape({
      email: Yup.string()
       .when('phone', {
        is: (phone) => !phone || phone.length === 0,
        then: Yup.string()
         .required('Обязательно заполнить хотя бы одно средство связи')
         .email('Вы ввели некорректный адрес электронной почты'),
        }),
      name: Yup.string().required('Поле обязательно для заполнения'),
      phone: Yup.string()
       .when('email', {
        is: (email) => !email || email.length === 0,
        then: Yup.string().required('Обязательно заполнить хотя бы одно средство связи')
       })
     })
    } */
      /* .test(
          'email or phone',
          'Обязательно заполнить E-mmail или Телефон',
          (value) => has(value, 'email') || has(value, 'phone')
      ); */
    validationSchema={Yup.object().shape({
     email: Yup.string()
      .email('Вы ввели некорректный адрес электронной почты')
      .required('Поле обязательно для заполнения'),
     name: Yup.string().required('Поле обязательно для заполнения'),
     phone: Yup.string().required('Поле обязательно для заполнения'),
    })}
   >
    {(props) => (
    <Form ref={contactUsForm} style={{width: 'fitContent'/* width: '22em', height: '24em' */}} onSubmit={props.handleSubmit}>
     <Stack direction='column' noValidate>
      <MyTextInput label='Имя' name='name' type='text' placeholder='' />
      <MyTextInput label='E-mail' name='email' type='email' placeholder='' />
      <MyTextInput label='Телефон' name='phone' type='text' placeholder='' />
     </Stack>
     <DialogActions style={{justifyContent: 'center' /*, boxSizing: 'contentBox', width: 'fitContent' */}}>
      <div/*  style={{ justifyContent: 'center', textAlign: 'center', boxSizing: 'contentBox', }} */>
       <Button
         sx={{
         left:0,
         width: '12em',
         height: '45px',
         borderRadius: '1',
         color: '#F1F1F1F1',
         backgroundColor: '#2d3748',
         margin: '10px',
         
        }}
        type='submit'
        className='btn btn-primary'
        variant='contained'
        disabled={props.isSubmitting}
       >
        Отправить
       </Button>

       {//Кнопки для теста, имитирующие отправку формы: успешную или с ошибкой
        enableDebugButtons && (
         <div>
          <Button
           style={{
            left: 0,
            margin: '6px',
            width: '10em',
            color: 'green',
            height: '35px',
            backgroundColor: '#2d3748',
           }}
           onClick={() => {
            var response = {status: 200, text: ' OK '};
            console.info('Testing Email sent succesfully.');
            console.info(response);
            setEmailjsResponse(response);
            setOpenContactUsDialog(false);
            setOpenSubmittionResultDialog(true);
           }}
          >
          Test OK
          </Button>
          <Button
           style={{
            left: 0,
            margin: '6px',
            width: '10em',
            color: 'red',
            height: '35px',
            backgroundColor: '#2d3748',
           }}
           onClick={() => {
            var response = {
             status: 410,
             text:
              "SMTP: Can't send mail - all recipients were rejected: 554 5.7.1 <recipient@mailserver.ru>: Relay access denied",
            };
           console.info('Testing Email sent succesfully.');
           console.info(response);
           setEmailjsResponse(response);
           setOpenContactUsDialog(false);
           setOpenSubmittionResultDialog(true);
           }
          }>
           Test Error
          </Button>
         </div>
        )
       }
      </div>
     </DialogActions>
    </Form>
    )}
   </Formik>
  </>
 );
}
