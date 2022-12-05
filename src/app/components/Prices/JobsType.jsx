import React /* , {useState} */ from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import {Typography} from '@mui/material';

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

const steps = [
 {
  id: 1,
  name: 'Предварительная диагностика',
 },
 {
  id: 2,
  name: 'Разборка',
 },
 {
  id: 3,
  name: 'Заключительная дефектация',
 },
 {
  id: 4,
  name: 'Ремонт и сборка',
 },
 {
  id: 5,
  name: 'Испытательные мероприятия',
 },
];
export default function JobsType() {
 return (
  <Stack direction='row' spacing={15}>
   {steps.map((i) => (
    <>
     <Paper
      sx={{
       width: '2.3em',
       height: '2.4em',
       textAlign: 'center',
       borderRadius: 10,
       bgcolor: '#e53e3e',
       boxShadow: 'none',
      }}
     >
      <Typography variant='h5' style={{color: 'white', paddingTop: '1.3em', paddingBottom: '1em'}}>
       <b>{i.id}</b>
      </Typography>
      <Typography
       style={{
        paddingTop: '0.2em',
        fontSize: '15px',
        margin: '0 0 0 -10px',
        textAlign: '-webkit-auto',
       }}
      >
       <i>{i.name}</i>
      </Typography>
     </Paper>
    </>
   ))}
  </Stack>
 );
}
