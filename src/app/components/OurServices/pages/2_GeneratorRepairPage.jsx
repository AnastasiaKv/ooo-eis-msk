import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Typography} from '@material-ui/core';
import SimpleTable from '../../../modules/common/SimpleTable';
import Paper from '@mui/material/Paper';
import image2 from '../../../../assets/img/services/2.png';
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
  <form style={{height: '100%'}}>
   <SEO
    title='Ремонт генератора'
    description='Ремонт генератора от 500 руб.'
    siteTitle='ООО "ЭИС"'
    keywords=''
    href='https://eis-msk.ru/services/generator-repair-page'
   />
   <Paper elevation={4} style={{backgroundColor: '#f7f7f7', width: '31.2em'}}>
    <Stack
     mt={2}
     direction='column'
     spacing={0}
     style={{paddingLeft: '0.6em', paddingBottom: '2em'}}
    >
     <p
      style={{
       paddingTop: '1em',
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
        margin: '2em -95px 13px 0px',
       }}
       loading='lazy'
       component='img'
       alt='Ремонт генератора'
       src={image2}
      />
      <h1 style={{paddingTop: '1em'}}>
       <Typography variant='h4' component='h1' style={{fontFamily: 'Furore', fontSize: '28px'}}>
        Ремонт генератора от 500 руб.
       </Typography>
      </h1>
     </p>
     <SimpleTable data={data} />
    </Stack>
   </Paper>
  </form>
 );
};

export default GeneratorRepairPage;
