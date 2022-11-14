import React, {useState} from 'react';
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
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Stack, width} from '@mui/system';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
// import { DisplayFormikState } from './formikHelper';
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

function Contact(props) {
 const {classes} = props;
 const [open, setOpen] = useState(false);
 const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

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
       <DialogTitle id='form-dialog-title'>Оставьте свои данные - и мы Вам перезвоним!</DialogTitle>
       <ThemeProvider theme={theme}>
        <DialogContent>
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
            <form onSubmit={handleSubmit}>
             <Stack
              sx={{
               overflow: 'hidden',
               padding: '10px 10em 10px 0px',
               flexDirection: 'column',
               alignItems: 'baseline',
              }}
              direction='row'
              spacing={2}
              noValidate
              component='form'
             >
              <TextField
               InputLabelProps={{shrink: true}}
               label='Имя'
               name='name'
               className={classes.textField}
               value={values.name}
               onChange={handleChange}
               onBlur={handleBlur}
               helperText={errors.name && touched.name && errors.name}
              />

              <TextField
               InputLabelProps={{shrink: true}}
               error={errors.email && touched.email}
               label='E-mail'
               name='email'
               className={classes.textField}
               value={values.email}
               onChange={handleChange}
               onBlur={handleBlur}
               helperText={errors.email && touched.email && errors.email}
              />

              <TextField
               InputLabelProps={{shrink: true}}
               label='Телефон'
               name='tel'
               className={classes.textField}
               value={values.tel}
               onChange={handleChange}
               onBlur={handleBlur}
               helperText={errors.tel && touched.tel && errors.tel}
              />
             </Stack>
             <DialogActions>
              <div style={{paddingBottom: '20px', paddingRight: '8.8em'}}>
               <Button
                onClick={handleClose}
                style={{
                 width: '12em',
                 height: '45px',
                 borderRadius: '1',
                 color: '#F1F1F1F1',
                 backgroundColor: '#2d3748',
                }}
                variant='contained'
               >
                Отправить
               </Button>
              </div>
              {/* <DisplayFormikState {...props} /> */}
             </DialogActions>
            </form>
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
