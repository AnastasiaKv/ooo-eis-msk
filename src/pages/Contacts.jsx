import React, {useRef, useState} from 'react';
import {Formik, Form, useField, useFormikContext} from 'formik';
import emailjs, {init, SMTPClient} from '@emailjs/browser';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import '../assets/css/style.css';
import '../assets/css/styles-custom.css';
import { Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Stack} from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import SEO from '../app/components/SEO';
import {Button} from '@material-ui/core';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const theme = createTheme({
  components: {
   // todo: remove once the issue is addressed: https://github.com/mui/material-ui/issues/31185
   MuiDialogContent: {
    styleOverrides: {root: {paddingTop: `${20}px !important`}},
   },
  },
 });

const textStyle = {
 fontFamily: 'Roboto',
 lineHeight: '1.7',
 width: '40em',
 marginLeft: 0,
 textAlign: '-webkit-auto',
};
const MyTextInput = ({label, ...props}) => {
 // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
 // which we can spread on <input> and alse replace ErrorMessage entirely.
 const [field, meta] = useField(props);
 return (
  <>
   <label htmlFor={props.id || props.name}>{label}</label>
   <input className='text-input' {...field} {...props} />
   {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
  </>
 );
};

export default function Contacts() {
  emailjs.init('GaqOI812E6KDw78sT');

 const contactUsForm = useRef();
 const [open, setOpen] = useState(false);
 const [isSubmitionFinished, setSubmitionFinished] = useState(false);
 const [emailjsResponse, setEmailjsResponse] = useState({});
 const [isSendedSuccessfully, setIsSendedSuccessfully] = useState(false);

 const handleSendEmail = (e) => {
  e.preventDefault();
  console.log('Sending e-mail');
  emailjs.sendForm('rudenko_es', 'backCallForm', contactUsForm.current).then(
   (result) => {
    setOpen(true);
    setIsSendedSuccessfully(true);
    setEmailjsResponse(result);
   },
   (error) => {
    setIsSendedSuccessfully(false);
    setEmailjsResponse(error);
    console.log(error);
   }
  );
  setSubmitionFinished(true);
 };

 function handleCloseGratitude() {
  setOpen(false);
 }

 var enableDebugButtons = true;

 return (
  <main className='ees-content-card'>
   <SEO
    title='Контакты'
    description='В случае, если Вы хотите обсудить какие-либо вопросы, 
    свяжитесь с нами: по телефону: +7 (495) 135 82 88'
    name='ООО "ЭИС"'
   />
   <Box
    component='form'
    sx={{
     paddingTop: '1em',
     '& .MuiTextField-root': {m: 1, width: '25ch'},
     paddingBottom: '1em',
    }}
    noValidate
    autoComplete='off'
   >
    <div>
     <Stack>
      <p style={{paddingTop: '20px'}}>
       <ul
        style={{
         paddingLeft: '2em',
         textAlign: 'justify',
         listStyle: 'none',
        }}
       >
        <h1>
         <Typography
          style={{
           color: '#292929',
           paddingLeft: '7.8em',
           fontFamily: 'Furore',
           fontSize: '28px',
          }}
          variant='h4'
          component='h1'
         >
          Контактная информация
         </Typography>
        </h1>
        <br />
        <Stack style={{paddingLeft: '3em', width: '29em', paddingRight: '2em'}}>
         <Typography
          sx={{
           fontFamily: 'Roboto',
           color: '#292929',
           paddingLeft: '7em',
          }}
          style={textStyle}
          component='p'
         >
          <p>
           В случае, если Вы хотите обсудить какие-либо вопросы,
           <br /> свяжитесь с нами:
          </p>
          <br />
         </Typography>

         <Stack style={{width: '29em', paddingRight: '5em'}}>
          <Stack
           direction='row'
           spacing={3}
           sx={{fontFamily: 'Roboto', color: '#292929', paddingLeft: '5.3em'}}
          >
           <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7}} />
           <Typography style={textStyle} component='p'>
            по телефону: <strong>+7 (495) 135 82 88</strong>
           </Typography>
          </Stack>
          <Stack
           direction='row'
           spacing={3}
           sx={{fontFamily: 'Roboto', color: '#292929', paddingLeft: '5.3em'}}
          >
           <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7}} />
           <Typography style={textStyle} component='p'>
            по электронной почте: <strong>i.timoshenkov@eis-msk.ru</strong>
           </Typography>
          </Stack>
          <Stack
           direction='row'
           spacing={3}
           sx={{fontFamily: 'Roboto', color: '#292929', paddingLeft: '5.3em'}}
          >
           <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7}} />
           <Typography style={textStyle} component='p'>
            заполнив форму обратной связи. Наши менеджеры свяжутся с Вами в ближайшее время
           </Typography>
          </Stack>
         </Stack>
        </Stack>
        <br />
        <Box sx={{height: '1em'}}></Box>
        
        



      <React.Fragment>
        fdfds
       <ThemeProvider theme={theme}>
        <DialogContent sx={{overflow: 'hidden'}}>
         {/* <DialogContentText>Оставьте свои данные - и мы Вам перезвоним!</DialogContentText> */}
         <Formik
          initialValues={{email: '', name: '', phone: ''}}
          validationSchema={Yup.object().shape({
           email: Yup.string()
            .email('Вы ввели некорректный адрес электронной почты')
            .required('Поле обязательно для заполнения'),
           name: Yup.string().required('Поле обязательно для заполнения'),
           phone: Yup.string().required('Поле обязательно для заполнения'),
          })}
         >
          {(props) => {
           const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
           } = props;
           return (
            <Form
             ref={contactUsForm}
             onSubmit={handleSendEmail}
             style={{width: '22em', height: '24em'}}
            >
             <Stack
              sx={{
               paddingLeft: '60px',
               paddingBottom: '1.5em',
              }}
              direction='column'
              spacing={2}
              noValidate
             >
              <MyTextInput label='Имя' name='name' type='text' placeholder='' />
              <MyTextInput label='E-mail' name='email' type='email' placeholder='' />
              <MyTextInput label='Телефоsdн' name='phone' type='text' placeholder='' />
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

               {/*Кнопки для теста, имитирующие отправку формы: успешную или с ошибкой */
               enableDebugButtons = true}
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
                    
    setOpen(true);
                   setIsSendedSuccessfully(true);
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
                   color: '#F1F1F1F1',
                   height: '20px',
                   backgroundColor: '#2d3748',
                  }}
                  onClick={() => {
                    
    setOpen(true);
                   setIsSendedSuccessfully(false);
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
              {/* <DisplayFormikState {...props} /> */}
             </DialogActions>
            </Form>
           );
          }}
         </Formik>
        </DialogContent>
       </ThemeProvider>
      </React.Fragment>


         
     {isSubmitionFinished && (
      <Dialog
      sx={{width: '1000px'}}
      open={open}
      onClose={handleCloseGratitude}
      aria-labelledby='form-dialog-title'
     >
       <DialogTitle id='form-dialog-title'>
        {isSendedSuccessfully
         ? 'Ваша заявка зарегистрирована.'
         : <Alert 
             variant="outlined" 
             severity="error"
             SX={{fontSize: '1.2em', fontWeight: '500'}}
           >
             При отправке заявки произошла непредвиденная ошибка!
           </Alert>
          }
       </DialogTitle>
       <DialogContent>
        <DialogContentText>
         {isSendedSuccessfully && (
          <div>
           Спасибо за Ваше обращение!
           <br />
           Мы позвоним Вам в ближайшее время.
          </div>
         )}
         {!isSendedSuccessfully && (
          <div>
           Код ответа: {emailjsResponse.status}
           <br />
           Ошибка: {emailjsResponse.text}
           <br />
           Пожалуйста попробуйте ещё раз или свяжитесь с нами другим способом.
          </div>
         )}
        </DialogContentText>
        <DialogActions>
         <div style={{marginRight: '1em'}}>
          <Button type='button' className='outline' onClick={handleCloseGratitude}>
           Вернуться
          </Button>
         </div>
         {/* <DisplayFormikState {...props} /> */}
        </DialogActions>
       </DialogContent>       
     </Dialog>
     )}
       </ul>
      </p>
     </Stack>
    </div>
    <Box sx={{height: '2em'}} />
   </Box>
  </main>
 );
}
