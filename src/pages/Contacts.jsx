import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Formik, Form, useField, useFormikContext} from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import '../assets/css/style.css';
import '../assets/css/styles-custom.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Stack} from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
const textStyle = {
 fontFamily: 'Roboto',
 display: 'block',
 textAlign: 'justify',
 fontSize: '14px',
 lineHeight: '1.7',
 marginLeft: 0,
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
 return (
  <main className='ees-content-card'>
   <Box
    component='form'
    sx={{
     '& .MuiTextField-root': {m: 1, width: '25ch'},
    }}
    noValidate
    autoComplete='off'
   >
    <div>
     <p style={{paddingTop: '20px'}}>
      <ul
       style={{
        paddingLeft: '70px',
        textAlign: 'justify',
        listStyle: 'none',
       }}
      >
       <Typography style={{fontFamily: 'Roboto', fontSize: '25px'}} component='h4'>
        <b>Контактная информация</b>
       </Typography>
       <br />
       <Typography style={textStyle} variant='caption' component='p'>
        <p>В случае, если Вы хотите обсудить какие-либо вопросы, свяжитесь с нами:</p>
       </Typography>
       <Stack direction='row' spacing={3}>
        <CircleIcon style={{margin: '8px 0px 0px 0px', height: 7}} />
        <Typography style={textStyle} variant='caption' component='p'>
         по телефону: <strong>+74955404190</strong> , &nbsp;
         <strong>+7 (495) 540-41-90</strong>
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3}>
        <CircleIcon style={{margin: '8px 0px 0px 0px', height: 7}} />
        <Typography style={textStyle} variant='caption' component='p'>
         по электронной почте: <strong>info@ers.msk.ru</strong>
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3}>
        <CircleIcon style={{margin: '8px 0px 0px 0px', height: 7}} />
        <Typography style={textStyle} variant='caption' component='p'>
         заполнив форму обратной связи. Наши менеджеры свяжутся с Вами в ближайшее время
        </Typography>
       </Stack>
       <br />
       <Stack direction='row' spacing={0}>
        <Formik
         initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
         }}
         validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
          email: Yup.string().email('Invalid email addresss`').required('Required'),
          acceptedTerms: Yup.boolean()
           .required('Required')
           .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
           // specify the set of valid values for job type
           // @see http://bit.ly/yup-mixed-oneOf
           .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
           .required('Required'),
         })}
         onSubmit={async (values, {setSubmitting}) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
         }}
        >
         <Form>
          <Stack sx={{paddingLeft: '150px'}} direction='column'>
           <MyTextInput label='Имя' name='firstName' type='text' placeholder='' />
           <MyTextInput label='Фамилия' name='lastName' type='text' placeholder='' />
           <MyTextInput label='E-mail' name='email' type='email' placeholder='' />
           <button
            style={{marginLeft: '84px', marginTop: '50px', width: '15em', height: '50px'}}
            type='submit'
           >
            Принять
           </button>
          </Stack>
         </Form>
        </Formik>
       </Stack>
      </ul>
     </p>
    </div>
   </Box>
  </main>
 );
}
