import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../../modules/common/SimpleTable';
import Paper from '@mui/material/Paper';
import image3 from '../../../../assets/img/Services/Ремонт трансформаторов1.png';
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
  <form style={{height: '100%', width: '33.1em', marginTop: '0em', marginRight: '0em'}}>
   <SEO
    title='Перемотка трансформаторов'
    description='Цены на перемотку трансформаторов от 9000 руб.'
    name='ООО ЭИС'
   />
   <Paper
    elevation={4}
    sx={{bgcolor: '#f7f7f7', marginLeft: '1.8em', marginBottom: 5, width: '31.2em'}}
   >
    <Stack direction='column' spacing={0} sx={{paddingLeft: '1em', paddingBottom: '2em'}}>
     <Stack direction='row' style={{paddingTop: '0em'}}>
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
        loading='lazy'
        component='img'
        alt='Цены на перемотку трансформаторов'
        src={image3}
       />
       <h1 style={{paddingTop: '10px'}}>
        <Typography variant='h4' component='h1' style={{fontFamily: 'Furore', fontSize: '28px'}}>
         Цены на перемотку трансформаторов от 9000 руб.
        </Typography>
       </h1>
      </p>
     </Stack>
     <SimpleTable data={data} />
    </Stack>
   </Paper>
  </form>
 );
};
export default RepairTransformersPage;
