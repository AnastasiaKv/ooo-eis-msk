import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../../modules/common/SimpleTable';
import Paper from '@mui/material/Paper';
import image2 from '../../../assets/img/services/Ремонт генераторов1.png';

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
  price: '500 руб.',
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

const GeneratorRepairPage = () => {
 return (
  <>
   <Paper elevation={4} sx={{bgcolor: '#f7f7f7', marginBottom: 5}}>
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
        width: '9em',
        height: '6em',
        float: 'right' /* Выравнивание по правому краю  */,
        margin: '0px -95px 13px 0px',
       }}
       component='img'
       alt='Изображение неведомой детали'
       src={image2}
      />
      <h4 style={{paddingTop: '20px'}}>
       <Typography variant='h4' component='h4' style={{fontFamily: 'Furore', fontSize: '28px'}}>
        Ремонт генератора от 500 руб.
       </Typography>
      </h4>
     </p>

     <SimpleTable data={data} />
    </Stack>
   </Paper>
  </>
 );
};

export default GeneratorRepairPage;
