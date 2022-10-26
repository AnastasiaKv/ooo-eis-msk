import React, {useState} from 'react';
import Box from '@mui/material/Box';
import {makeStyles} from '@material-ui/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
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
  name: 'Замена обмотки и пропитка',
 },
 {
  id: 5,
  name: 'Ремонт и сборка',
 },
 {
  id: 6,
  name: 'Испытательные мероприятия',
 },
];
export default function JobsType() {
 return (
  <Stack direction='row' spacing={14}>
   {steps.map((i) => (
    <>
     <Paper
      sx={{
       width: '2.4em',
       height: '2.4em',
       textAlign: 'center',
       borderRadius: 10,
       bgcolor: '#e53e3e',
       boxShadow: 'none',
      }}
     >
      <Typography variant='h5' sx={{color: 'white', paddingTop: '0.6em', paddingBottom: '1em'}}>
       <b>{i.id}</b>
      </Typography>
      <Typography sx={{paddingTop: '0.5em', fontSize: '16px', margin: '0 0 0 -10px'}}>
       <i>{i.name}</i>
      </Typography>
     </Paper>
    </>
   ))}
  </Stack>
 );
}
