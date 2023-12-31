import React, {useRef, useState} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import {makeStyles} from '@mui/styles';
import Paper from '@mui/material/Paper';
import {Stack} from '@mui/system';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import SEO from '../app/components/SEO';
import {Button} from '@mui/material';
import emailjs from '@emailjs/browser';
import CustomTextInput from '../app/modules/common/CustomTextInput';
import SubmittionResultDialog from '../app/components/Header/components/SubmittionResultDialog';

const textStyle = {
 fontFamily: 'Roboto',
 color: '#292929',
 paddingLeft: '0em',
 lineHeight: '1.7',
 width: '40em',
 marginLeft: 0,
 textAlign: '-webkit-auto',
};
const useStyles = makeStyles({
 flexGrow: {
  flex: '1',
 },
 button: {
  backgroundColor: '#808080',
  color: '#F1F1F1',
  '&:hover': {
   backgroundColor: '#f00000',
   color: '#F1F1F1',
  },
 },
});
export default function Contacts() {
 const classes = makeStyles();
 const contactUs2Form = useRef();
 const [emailjsResponse, setEmailjsResponse] = useState({});
 const [isOpenSubmittionResultDialog, setOpenSubmittionResultDialog] = useState(false);
 function handleCloseSubmittionResultDialog() {
  setOpenSubmittionResultDialog(false);
 }

 emailjs.init('GaqOI812E6KDw78sT');

 return (
  <>
   <main className='ees-content-card'>
    <SEO
     title='Контакты'
     description='г. Москва ОГРН 1127746704986, ИНН 7701969621, КПП 770801001, ОКПО 11448465'
     siteTitle='ООО "ЭИС"'
     keywords='эис, эис мск, ооо эис, ЭИС, Электронные Инженерные Системы'
     href='https://eis-msk.ru/contacts'
    />
    <Box
     sx={{
      paddingTop: '1em',
      '& .MuiTextField-root': {m: 1, width: '25ch'},
      paddingBottom: '1em',
     }}
     /* noValidate */
     autoComplete='off'
    >
     <div>
      <Stack style={{margin: '-2em 0em 0em 2em'}}>
       <p style={{paddingTop: '20px'}}>
        <span
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
           <p style={{paddingLeft: '7em', marginRight: '-6em'}}>
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
            emailjs.sendForm('service_6netdbf', 'contactUsForm', contactUs2Form.current).then(
             (result) => {
              setEmailjsResponse(result);
              setOpenSubmittionResultDialog(true);
              setSubmitting(false);
             },
             (error) => {
              setEmailjsResponse(error);
              setOpenSubmittionResultDialog(true);
              setSubmitting(false);
             }
            );
           }}
          >
           {(props) => (
            <Form
             ref={contactUs2Form}
             style={{width: '22em', height: '30em', paddingTop: 0}}
             onSubmit={props.handleSubmit}
            >
             <Paper elevation={10} sx={{width: '-webkit-fill-available'}}>
              <Stack
               sx={{
                paddingLeft: '1.5em',
                paddingTop: '1em',
                paddingBottom: '1.5em',
                paddingRight: '1em',
               }}
               direction='column'
              >
               <CustomTextInput label='Имя' name='name' type='text' placeholder='' />
               <CustomTextInput label='E-mail' name='email' type='email' placeholder='' />
               <CustomTextInput label='Телефон' name='phone' type='text' placeholder='' />
               <Button
                sx={{
                 left: 0,
                 marginLeft: '110px',
                 marginTop: '15px',
                 marginBottom: '15px',
                 width: '15em',
                 height: '50px',
                 borderRadius: '1',
                 color: '#F1F1F1F1',
                 backgroundColor: '#2d3748',
                 '&:hover': {
                  backgroundColor: '#e53e3e',
                 },
                }}
                type='submit'
                className='btn btn-primary'
                variant='contained'
                disabled={props.isSubmitting}
               >
                Отправить
               </Button>
              </Stack>
             </Paper>
            </Form>
           )}
          </Formik>
         </Stack>
        </span>
       </p>
      </Stack>
     </div>
     <Box sx={{height: '2em'}} />
    </Box>
   </main>
   <SubmittionResultDialog
    isOpenSubmittionResultDialog={isOpenSubmittionResultDialog}
    handleCloseSubmittionResultDialog={handleCloseSubmittionResultDialog}
    emailjsResponse={emailjsResponse}
   />
  </>
 );
}
