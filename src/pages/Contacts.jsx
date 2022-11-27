import React, {useRef, useState, useEffect} from 'react';
import {Formik, Form, useField, useFormikContext} from 'formik';
import * as Yup from 'yup';
import '../assets/css/style.css';
import '../assets/css/styles-custom.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Stack} from '@mui/system';
import Box from '@mui/material/Box';
import {Typography} from '@material-ui/core';
import CircleIcon from '@mui/icons-material/Circle';
import SEO from '../app/components/SEO';
import {Button} from '@material-ui/core';
import emailjs, {init, SMTPClient} from '@emailjs/browser';

const textStyle = {
 fontFamily: 'Roboto',
 color: '#292929',
 paddingLeft: '0em',
 lineHeight: '1.7',
 width: '40em',
 marginLeft: 0,
 textAlign: '-webkit-auto',
};
const MyTextInput = ({labelText, inputName, ...props}) => {
 // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
 // which we can spread on <input> and alse replace ErrorMessage entirely.
 const [field, meta] = useField(props);
 return (
  <>
   <label for={inputName}>{labelText}</label>
   <input className='text-input' id={inputName} name={inputName} {...field} {...props} />
   {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
  </>
 );
};

export default function Contacts() {
 const contactUsForm = useRef();
 const [emailjsResponse, setEmailjsResponse] = useState({});
 const [isSendedSuccessfully, setIsSendedSuccessfully] = useState(false);

 return (
  <main className='ees-content-card'>
   <SEO
    title='Контакты'
    description='В случае, если Вы хотите обсудить какие-либо вопросы, 
    свяжитесь с нами: по телефону: +7 (495) 135 82 88'
    siteTitle='ООО "ЭИС"'
    keywords='эис, эис мск, ооо эис, ЭИС, Электронные Инженерные Системы'
    href='https://eis-msk.ru/contacts'
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
         <Typography style={textStyle} component='p'>
          <p style={{paddingLeft: '7em'}}>
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
            По телефону: <strong>+7 (495) 135 82 88</strong>
           </Typography>
          </Stack>
          <Stack
           direction='row'
           spacing={3}
           sx={{fontFamily: 'Roboto', color: '#292929', paddingLeft: '5.3em'}}
          >
           <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7}} />
           <Typography style={textStyle} component='p'>
            По электронной почте: <strong>i.timoshenkov@eis-msk.ru</strong>
           </Typography>
          </Stack>
          <Stack
           direction='row'
           spacing={3}
           sx={{fontFamily: 'Roboto', color: '#292929', paddingLeft: '5.3em'}}
          >
           <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7}} />
           <Typography style={textStyle} component='p'>
            Заполните форму обратной связи. Наши менеджеры свяжутся с Вами в ближайшее время
           </Typography>
          </Stack>
         </Stack>
        </Stack>
        <br />
        <Box sx={{height: '1em'}}></Box>
        <Stack
         direction='row'
         spacing={0}
         style={{fontFamily: 'Roboto', color: '#292929', marginLeft: '7em', paddingRight: '7em'}}
        >
         <Formik
          initialValues={{
           name: '',
           phone: '',
           email: '',
           acceptedTerms: false, // added for our checkbox
           jobType: '', // added for our select
          }}
          validationSchema={Yup.object().shape({
           email: Yup.string()
            .email('Вы ввели некорректный адрес электронной почты')
            .required('Поле обязательно для заполнения'),
           name: Yup.string().required('Поле обязательно для заполнения'),
           phone: Yup.string().required('Поле обязательно для заполнения'),
          })}
          onSubmit={async (values, {setSubmitting}) => {
           console.log('Sending e-mail');
           emailjs.sendForm('service_6netdbf', 'contactUsForm', contactUsForm.current).then(
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
           setSubmitting(false);
          }}
         >
          <Paper elevation={10} sx={{width: '-webkit-fill-available'}}>
           <Form ref={contactUsForm} style={{width: '22em', height: '24em'}}>
            <Stack sx={{paddingLeft: '60px', paddingTop: '2.5em'}} direction='column'>
             <MyTextInput labelText='Имя' label='Имя' name='name' type='text' placeholder='' />
             <MyTextInput
              labelText='E-mail'
              label='E-mail'
              name='email'
              type='email'
              placeholder=''
             />
             <MyTextInput
              labelText='Телефон'
              label='Телефон'
              name='phone'
              type='text'
              placeholder=''
             />

             <button
              style={{marginLeft: '84px', marginTop: '50px', width: '15em', height: '50px'}}
              type='submit'
             >
              Отправить
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
    <Box sx={{height: '2em'}} />
   </Box>
  </main>
 );
}
