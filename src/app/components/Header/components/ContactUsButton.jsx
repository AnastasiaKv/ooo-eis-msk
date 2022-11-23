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
import { Alert } from '@mui/material';
import axios from 'axios';
import {Formik, Form, useField, useFormikContext} from 'formik';
import * as Yup from 'yup';
import {Stack, width} from '@mui/system';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';

// import { DisplayFormikState } from './formikHelper';
import '../../../../assets/css/style.css';
import '../../../../assets/css/styles-custom.css';
const styles = {};

const theme = createTheme({
 components: {
  // todo: remove once the issue is addressed: https://github.com/mui/material-ui/issues/31185
  MuiDialogContent: {
   styleOverrides: {root: {paddingTop: `${20}px !important`}},
  },
 },
});
const contactFormEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT;
const MyTextInput = ({label, ...props}) => {
 // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
 // which we can spread on <input> and alse replace ErrorMessage entirely.
 const [field, meta] = useField(props);
 return (
  <div style={{textAlign: 'left', marginTop: '1px'}}>
   <label htmlFor={props.id || props.name}>{label}</label>
   <input className='text-input' {...field} {...props} />
   {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
  </div>
 );
};
function Contact(props) {
 emailjs.init('GaqOI812E6KDw78sT');

 const contactUsForm = useRef();
 const {classes} = props;
 const [open, setOpen] = useState(false);
 const [isSubmitionFinished, setSubmitionFinished] = useState(false);
 const [emailjsResponse, setEmailjsResponse] = useState({});
 const [isSendedSuccessfully, setIsSendedSuccessfully] = useState(false);

 const handleSendEmail = (e) => {
  e.preventDefault();
  console.log('Sending e-mail');
  emailjs.sendForm('service_6netdbf', 'backCallForm', contactUsForm.current).then(
   (result) => {
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

 function handleOpenContactUs() {
  setSubmitionFinished(false);
  setOpen(true);
 }
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
     onClick={handleOpenContactUs}
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
     open={open}
     onClose={handleCloseGratitude}
     aria-labelledby='form-dialog-title'
    >
     {!isSubmitionFinished && (
      <React.Fragment>
       <DialogTitle style={{paddingLeft: '1em'}} id='form-dialog-title'>
        Оставьте свои данные - и мы Вам перезвоним!
       </DialogTitle>
       <ThemeProvider theme={theme}>
        <DialogContent sx={{overflow: 'hidden'}}>
         {/* <DialogContentText>Оставьте свои данные - и мы Вам перезвоним!</DialogContentText> */}
         <Formik
          initialValues={{email: '', name: '', phone: ''}}
          /* onSubmit={(values, {setSubmitting}) => {
           setSubmitting(true);
           setSubmitting(true);
           axios
            .post(contactFormEndpoint, values, {
             headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
             },
            })
            .then((resp) => {
             setSubmitionFinished(true);
            });
          }} */
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
     )}
     {isSubmitionFinished && (
      <React.Fragment>
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
      </React.Fragment>
     )}
    </Dialog>
   </div>
  </React.Fragment>
 );
}

export default withStyles(styles)(Contact);
