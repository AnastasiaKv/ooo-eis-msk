import React, {useEffect} from 'react';
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
import SEO from '../app/components/SEO';
import {Button} from '@material-ui/core';

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

export default function contacts() {
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
        <Stack
         direction='row'
         spacing={0}
         sx={{fontFamily: 'Roboto', color: '#292929', marginLeft: '7em', paddingRight: '7em'}}
        >
         <Formik
          initialValues={{
           firstName: '',
           tel: '',
           email: '',
           acceptedTerms: false, // added for our checkbox
           jobType: '', // added for our select
          }}
          validationSchema={Yup.object({
           firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
           tel: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
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
          <Paper elevation={10} sx={{width: '-webkit-fill-available'}}>
           <Form style={{width: '22em', height: '24em'}}>
            <Stack sx={{paddingLeft: '60px', paddingTop: '2.5em'}} direction='column'>
             <MyTextInput label='Имя' name='firstName' type='text' placeholder='' />
             <MyTextInput label='Номер' name='tel' type='text' placeholder='' />
             <MyTextInput label='E-mail' name='email' type='email' placeholder='' />
             <button
              style={{marginLeft: '84px', marginTop: '50px', width: '15em', height: '50px'}}
              type='submit'
             >
              Принять
             </button>
            </Stack>
           </Form>
          </Paper>
         </Formik>
        </Stack>
       </ul>
      </p>
     </Stack>
    </div>
    <Box sx={{height: '2em'}}/>
   </Box>
  </main>
 );
}
