import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../../modules/common/SimpleTable';
import Grid from '@mui/material/Unstable_Grid2';
import image1 from '../../../assets/img/services/Ремонт электродвигателей1.png';
import {width} from '@mui/system';

import Paper from '@mui/material/Paper';

const data = [
 {
  name: 'Замена щеточного узла (для некоторых моделей)',
  price: 'от 900 руб.',
 },
 {
  name: 'Замена реле-регулятора напряжения',
  price: 'от 1300 руб.',
 },
 {
  name: 'Замена диодного моста',
  price: 'от 1600 руб.',
 },
 {
  name: 'Замена диодов',
  price: 'от 550 руб.',
 },
 {
  name: 'Замена роторных колец',
  price: 'от 900 руб.',
 },
 {
  name: 'Замена подшипников',
  price: 'от 700 руб.',
 },
 {
  name: 'Замена или ремонт ротора',
  price: 'от 2000 руб.',
 },
 {
  name: 'Замена статорной обмотки',
  price: 'от 1800 руб.',
 },
 {
  name: 'Замена проставок под подшипники — только работа',
  price: 'от 500 руб.',
 },
 {
  name: 'Замена шкива',
  price: 'от 700 руб.',
 },
 {
  name: 'Замена обгонной муфты (для некоторых моделей)',
  price: 'от 2300 руб.',
 },
];

export default function RepairMotorsPage() {
 return (
  <>
   <Paper elevation={4} sx={{marginBottom: 5}}>
    <Stack direction='column' spacing={0} sx={{paddingLeft: '2em', paddingBottom: '2em'}}>
     <p
      style={{
       paddingTop: '45px',
       paddingLeft: '2rem',
       width: '600px',
       height: '211px',
       textAlign: 'left',
       paddingBottom: '0',
      }}
     >
      <Box
       sx={{
        paddingTop: '18px',
        width: '8em',
        height: '7em',
        float: 'right' /* Выравнивание по правому краю  */,
       }}
       component='img'
       alt='Изображение неведомой детали'
       src={image1}
      />
      <h4 style={{paddingTop: '20px'}}>
       <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
        Ремонт электродвигателя
       </Typography>
      </h4>
      <h4 style={{paddingTop: '30px'}}>
       <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
        от 500 руб.
       </Typography>
      </h4>
     </p>

     <SimpleTable data={data} />
    </Stack>
   </Paper>
  </>
 );
}