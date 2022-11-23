import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../../modules/common/SimpleTable';
import image1 from '../../../../assets/img/services/1.png';
import Paper from '@mui/material/Paper';
import {Outlet} from 'react-router-dom';
import SEO from '../../SEO';

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
  <form style={{height: '100%'}}>
   <SEO
    title='Ремонт электродвигателя'
    description='Ремонт электродвигателя от 500 руб.'
    name='ООО ЭИС'
   />
   <Paper elevation={4} sx={{bgcolor: '#f7f7f7', width: '31.2em'}}>
    <Stack direction='column' spacing={0} sx={{paddingLeft: '0.6em', paddingBottom: '2em'}}>
     <Stack direction='row' style={{paddingTop: '0em'}}>
      <p
       style={{
        paddingTop: '0em',
        paddingLeft: '2rem',
        width: '600px',
        height: '211px',
        textAlign: 'left',
        paddingBottom: '0',
       }}
      >
       <Box
        sx={{
         color: 'transparent',
         paddingTop: '18px',
         width: '8em',
         height: '7em',
         float: 'right' /* Выравнивание по правому краю  */,
         margin: '2em -95px 13px 0px',
        }}
        loading='lazy'
        component='img'
        alt='Ремонт электродвигателя'
        src={image1}
       />
       <h1 style={{paddingTop: '1em'}}>
        <Typography variant='h4' component='h1' style={{fontFamily: 'Furore', fontSize: '28px'}}>
         Ремонт электродвигателя от 500 руб.
        </Typography>
       </h1>
      </p>
     </Stack>
     <SimpleTable data={data} />
    </Stack>
   </Paper>
  </form>
 );
}
