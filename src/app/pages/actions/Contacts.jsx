import React from 'react';
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

export default function Contacts() {
 return (
  <div className='ees-content-card'>
   <Box
    component='form'
    sx={{
     '& .MuiTextField-root': {m: 1, width: '25ch'},
    }}
    noValidate
    autoComplete='off'
   >
    <div>
     <p style={{paddingTop: '33px'}}>
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
        <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7}} />
        <Typography style={textStyle} variant='caption' component='p'>
         по телефону: +74955404190 +7 (495) 540-41-90
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3}>
        <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7}} />
        <Typography style={textStyle} variant='caption' component='p'>
         по электронной почте: info@ers.msk.ru
        </Typography>
       </Stack>
       <Stack direction='row' spacing={3}>
        <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7}} />
        <Typography style={textStyle} variant='caption' component='p'>
         заполнив форму обратной связи. Наши менеджеры свяжутся с Вами в ближайшее время
        </Typography>
       </Stack>
       <br />
       <Stack direction='row' spacing={3}>
        <FormControl>
         <TextField
          helperText='Please enter your name'
          id='demo-helper-text-misaligned'
          label='Name'
         />
         <TextField id='demo-helper-text-misaligned-no-helper' label='Name' />
         <InputLabel htmlFor='my-input'>Email address</InputLabel>
         <Input id='my-input' aria-describedby='my-helper-text' />
         <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText>
        </FormControl>
       </Stack>
      </ul>
     </p>
    </div>
   </Box>
  </div>
 );
}
