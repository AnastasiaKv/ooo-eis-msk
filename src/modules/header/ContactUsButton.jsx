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
// import { DisplayFormikState } from './formikHelper';

const styles = {};

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
   <div>
    <Typography
     variant='h6'
     component='div'
     sx={{flexGrow: 1, paddingLeft: '49px', color: '#292929'}}
    >
     8-800-232-32-22
    </Typography>
   </div>
   <Button
    onClick={handleClickOpen}
    style={{
     textTransform: 'inherit',
     borderRadius: '0',
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
    sx={{width: '900px'}}
    open={open}
    onClose={handleClose}
    aria-labelledby='form-dialog-title'
   >
    {!isSubmitionCompleted && (
     <React.Fragment>
      <DialogTitle id='form-dialog-title'>Оставьте свои данные - и мы Вам перезвоним!</DialogTitle>
      <DialogContent>
       {/* <DialogContentText>Оставьте свои данные - и мы Вам перезвоним!</DialogContentText> */}
       <Formik
        initialValues={{email: '', name: '', tel: 'ddd'}}
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
            sx={{overflow: 'hidden', padding: '10px 0px'}}
            direction='row'
            spacing={2}
            noValidate
            component='form'
           >
            <TextField
             label='Имя'
             name='name'
             className={classes.textField}
             value={values.name}
             onChange={handleChange}
             onBlur={handleBlur}
             helperText={errors.name && touched.name && errors.name}
            />

            <TextField
             error={errors.email && touched.email}
             label='E-mail'
             name='email'
             className={classes.textField}
             value={values.email}
             onChange={handleChange}
             onBlur={handleBlur}
             helperText={errors.email && touched.email && errors.email}
             margin='normal'
            />

            <TextField
             label='Телефон'
             name='tel'
             className={classes.textField}
             value={values.tel}
             onChange={handleChange}
             onBlur={handleBlur}
             helperText={errors.tel && touched.tel && errors.tel}
             margin='normal'
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
               backgroundColor: '#292929',
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
  </React.Fragment>
 );
}

export default withStyles(styles)(Contact);
