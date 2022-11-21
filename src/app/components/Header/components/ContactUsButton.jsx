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
  <>
   <label htmlFor={props.id || props.name}>{label}</label>
   <input className='text-input' {...field} {...props} />
   {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
  </>
 );
};
function Contact(props) {
 init('user_xxxxxxxxxxxxxxxxxxx');
 const form = useRef();

 const {classes} = props;
 const [open, setOpen] = useState(false);
 const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm('SERVICE_D', 'TEMPLAE_ID', form.current, 'USER_ID').then(
   (result) => {
    alert('Message Sent Successfully');
    console.log(result.text);
   },
   (error) => {
    console.log(error.text);
   }
  );
  setOpen(false);
 };

 function handleClose() {
  setOpen(false);
 }

 function handleClickOpen() {
  setSubmitionCompleted(false);
  setOpen(true);
 }

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
     onClick={handleClickOpen}
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
     onClose={handleClose}
     aria-labelledby='form-dialog-title'
    >
     {!isSubmitionCompleted && (
      <React.Fragment>
       <DialogTitle style={{paddingLeft: '1em'}} id='form-dialog-title'>
        Оставьте свои данные - и мы Вам перезвоним!
       </DialogTitle>
       <ThemeProvider theme={theme}>
        <DialogContent sx={{overflow: 'hidden'}}>
         {/* <DialogContentText>Оставьте свои данные - и мы Вам перезвоним!</DialogContentText> */}
         <Formik
          initialValues={{email: '', name: '', tel: ''}}
          onSubmit={(values, {setSubmitting}) => {
           setSubmitting(true);
           axios
            .post(contactFormEndpoint, values, {
             headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
             },
            })
            .then((resp) => {
             setSubmitionCompleted(true);
            });
          }}
          validationSchema={Yup.object().shape({
           email: Yup.string().email().required('Required'),
           name: Yup.string().required('Required'),
           tel: Yup.string().required('Required'),
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
            <Form style={{width: '22em', height: '24em'}} onSubmit={handleSubmit}>
             <Stack
              sx={{
               paddingLeft: '60px',
               paddingBottom: '2.3em',
              }}
              direction='column'
              spacing={2}
              noValidate
             >
              <MyTextInput label='Имя' name='firstName' type='text' placeholder='' />
              <MyTextInput label='E-mail' name='email' type='email' placeholder='' />
              <MyTextInput label='Телефон' name='tel' type='text' placeholder='' />
             </Stack>
             <DialogActions>
              <div style={{paddingRight: '8.5em'}}>
               <Button
                onClick={handleSubmit}
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
     {isSubmitionCompleted && (
      <React.Fragment>
       <DialogTitle id='form-dialog-title'>Thanks!</DialogTitle>
       <DialogContent>
        <DialogContentText>Thanks</DialogContentText>
        <DialogActions>
         <Button type='button' className='outline' onClick={handleClose}>
          Back to app
         </Button>
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
