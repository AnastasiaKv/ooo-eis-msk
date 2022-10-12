import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const divStyle = {
 width: '36em',
 borderTop: '0.9em solid rgba(241, 43, 41, 1)',
 borderRadius: '2px',
};
const stackStyle = {
 textAlign: 'justify',
};
const paperStyle = {
 fontFamily: 'Roboto',
 lineHeight: '1rem',
 paddingLeft: '1rem',
 paddingRight: '1em',
 width: '11rem',
 height: '12rem',
 borderRadius: '2px',
};
export default function JobsType() {
 return (
  <div style={divStyle}>
   <Stack style={stackStyle} direction={'row'} spacing={0}>
    <Paper style={paperStyle} elevation={3}>
     <p>
      <h6>
       <Typography variant='h6' component='h6'>
        <strong>Диагностика</strong>
       </Typography>
      </h6>
      <br />
      <span>
       <Typography variant='caption' component='span' style={{fontSize: '13px', lineHeight: 1}}>
        Наш ремонт
        <br />
        прозрачен. После
        <br />
        получения двигателя
        <br />
        доводим его..
       </Typography>
      </span>
     </p>
    </Paper>
    <Paper style={paperStyle} elevation={3}>
     <p>
      <h6>
       <Typography variant='h6' component='h6' style={{fontSize: '18px'}}>
        <strong>Демонтаж начинки двигателя</strong>
       </Typography>
      </h6>
      <br />
      <span>
       <Typography variant='caption' component='span' style={{fontSize: '13px', lineHeight: 1}}>
        Проводим демонтаж <br />с помошью..
       </Typography>
      </span>
     </p>
    </Paper>
    <Paper style={paperStyle} elevation={3}>
     <p>
      <h6>
       <Typography variant='h6' component='h6' style={{fontSize: '18px'}}>
        <b>
         Замена обмотки <br />и пропитка
        </b>
       </Typography>
      </h6>
      <br />
      <span>
       <Typography variant='caption' component='span' style={{fontSize: '13px', lineHeight: 1}}>
        Производим <br />
        намотку провода в..
       </Typography>
      </span>
     </p>
    </Paper>
    <Paper style={paperStyle} elevation={3}>
     <p>
      <h6>
       <Typography variant='h6' component='h6' style={{fontSize: '18px'}}>
        <strong>Испытания</strong>
       </Typography>
      </h6>
      <br />
      <span>
       <Typography variant='caption' component='span' style={{fontSize: '13px', lineHeight: 1}}>
        Для удаления влаги из <br />
        изоляции обмоток
        <br /> и повышения <br />
        сопротивления до...
       </Typography>
      </span>
     </p>
    </Paper>
    <Paper style={paperStyle} elevation={3}>
     <p>
      <h6>
       <Typography variant='h6' component='h6' style={{fontSize: '18px'}}>
        <strong>
         Выдача
         <br /> двигателя
        </strong>
       </Typography>
      </h6>
      <br />
      <span>
       <Typography variant='caption' component='span' style={{fontSize: '13px', lineHeight: 1}}>
        Вы получаете его
        <br /> после проведения
        <br /> нами <br />
        испытаний на...
       </Typography>
      </span>
     </p>
    </Paper>
   </Stack>
  </div>
 );
}
