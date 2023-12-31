import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
/* import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close'; */
import {Button, DialogActions, Stack} from '@mui/material';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../../modules/common/CustomTextInput';
import {useMatch} from 'react-router-dom';
/* import AccountCircle from '@mui/icons-material/AccountCircle'; */

export default function ContactUsForm({
 setEmailjsResponse,
 setOpenContactUsDialog,
 setOpenSubmittionResultDialog,
}) {
 emailjs.init('GaqOI812E6KDw78sT');

 function handleSubmitContactUsForm(values, {setSubmitting}) {
  setSubmitting(true);
  emailjs.sendForm('service_6netdbf', 'backCallForm', contactUsForm.current).then(
   (result) => {
    setEmailjsResponse(result);
    setOpenContactUsDialog(false);
    setOpenSubmittionResultDialog(true);
    setSubmitting(false);
   },
   (error) => {
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
     <Form
      ref={contactUsForm}
      style={{width: 'fitContent' /* width: '22em', height: '24em' */}}
      onSubmit={props.handleSubmit}
     >
      <Stack direction='column' /* noValidate */>
       <CustomTextInput label='Имя' name='name' type='text' placeholder='' />
       <CustomTextInput label='E-mail' name='email' type='email' placeholder='' />
       <CustomTextInput label='Телефон' name='phone' type='text' placeholder='' />
      </Stack>
      <DialogActions
       style={{justifyContent: 'center' /*, boxSizing: 'contentBox', width: 'fitContent' */}}
      >
       <div style={{justifyContent: 'center', textAlign: 'center', boxSizing: 'contentBox'}}>
        <Button
         sx={{
          left: '0',
          width: '12em',
          height: '45px',
          borderRadius: '1',
          color: '#F1F1F1F1',
          backgroundColor: '#2d3748',
          margin: '10px',
          '&:hover': {
           backgroundColor: '#e53e3e',
          },
         }}
         type='submit'
         variant='contained'
         disabled={props.isSubmitting}
        >
         Отправить
        </Button>

        {
         //Кнопки для теста, имитирующие отправку формы: успешную или с ошибкой
         enableDebugButtons && (
          <div>
           <Button
            sx={{
             left: '0',
             width: '12em',
             height: '45px',
             borderRadius: '2',
             backgroundColor: 'green',
             margin: '10px',
             color: 'white',
             '&:hover': {
              backgroundColor: 'blue',
              color: 'green',
             },
            }}
            variant='outlined'
            onClick={() => {
             var response = {status: 200, text: ' OK '};
             setEmailjsResponse(response);
             setOpenContactUsDialog(false);
             setOpenSubmittionResultDialog(true);
            }}
           >
            Test OK
           </Button>

           <Button
            sx={{
             left: '0',
             width: '12em',
             height: '45px',
             borderRadius: '2',
             backgroundColor: 'red',
             margin: '10px',
             color: 'white',
             '&:hover': {
              backgroundColor: 'blue',
              color: 'red',
             },
            }}
            variant='outlined'
            onClick={() => {
             var response = {
              status: 410,
              text:
               "SMTP: Can't send mail - all recipients were rejected: 554 5.7.1 <recipient@mailserver.ru>: Relay access denied",
             };
             setEmailjsResponse(response);
             setOpenContactUsDialog(false);
             setOpenSubmittionResultDialog(true);
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
    )}
   </Formik>
  </>
 );

 /* const StyledButton = withStyles({
  root: {
   left: '0',
   width: '12em',
   height: '45px',
   borderRadius: '1',
   color: '#F1F1F1F1',
   backgroundColor: '#2d3748',
   margin: '20px',
   '&:hover': {
    backgroundColor: '#FFFFFF',
    color: '#000000',
   },
  },
 })(Button);*/
}
