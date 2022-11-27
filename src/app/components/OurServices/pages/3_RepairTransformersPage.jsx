import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Typography} from '@material-ui/core';
import SimpleTable from '../../../modules/common/SimpleTable';
import Paper from '@mui/material/Paper';
import image3 from '../../../../assets/img/services/3.png';
import SEO from '../../SEO';

const data = [
 {
  name: 'ТДМ315',
  price: '9800 руб.',
 },
 {
  name: 'ТДМ317',
  price: '10000 руб.',
 },
 {
  name: 'ТДМ 401,402',
  price: '11400 руб.',
 },
 {
  name: 'ТДМ 500',
  price: '11900 руб.',
 },
 {
  name: 'ВД 250',
  price: '9870 руб.',
 },
 {
  name: 'ВД 306 СЭ',
  price: '16520 руб.',
 },
 {
  name: 'ВД 306 СЭМ',
  price: '20790 руб.',
 },
 {
  name: 'ВД 406 СЭ',
  price: '17950 руб.',
 },
 {
  name: 'ВД 505',
  price: '27916 руб.',
 },
 {
  name: 'ВД 505',
  price: '41890 руб.',
 },
 {
  name: 'ВДУ 350',
  price: '41890 руб.',
 },
 {
  name: 'ВДУ 506',
  price: '33000 руб.',
 },
 {
  name: 'ВДУ 601',
  price: '37800 руб.',
 },
 {
  name: 'ТК - 75 кВт',
  price: '20000 руб.',
 },
 {
  name: 'ТК - 100 кВт',
  price: '25000 руб.',
 },
 {
  name: 'ТК - 150 кВт',
  price: '30000 руб.',
 },
];

const RepairTransformersPage = () => {
 return (
  <div className='eis-service-page'>
   <form style={{height: '100%'}}>
    <SEO
     title='Перемотка трансформаторов'
     description='Цены на перемотку трансформаторов от 9000 руб.'
     name='ООО ЭИС'
    />
    <Paper elevation={4} sx={{backgroundColor: '#f7f7f7', width: '31.2em'}}>
     <Stack mt={2} direction='column' spacing={0} sx={{paddingLeft: '0.6em', paddingBottom: '2em'}}>
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
         width: '6em',
         height: '6em',
         float: 'right' /* Выравнивание по правому краю  */,
         margin: '1em -95px 13px 0px',
        }}
        component='img'
        loading='lazy'
        alt='Цены на перемотку трансформаторов'
        src={image3}
       />
       <h1 style={{paddingTop: '10px'}}>
        <Typography variant='h4' component='h1' style={{fontFamily: 'Furore', fontSize: '28px'}}>
         Цены на перемотку трансформаторов от 9000 руб.
        </Typography>
       </h1>
      </p>
      <SimpleTable data={data} />
     </Stack>
    </Paper>
   </form>
  </div>
 );
};
export default RepairTransformersPage;
