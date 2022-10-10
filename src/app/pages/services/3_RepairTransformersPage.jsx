import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../components/SimpleTable';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import r3 from '../../../assets/img/services/Ремонт трансформаторов.png';

const data = [
 {
  name: 'ТДМ315',
  price: '9800',
 },
 {
  name: 'ТДМ317',
  price: '10000',
 },
 {
  name: 'ТДМ 401,402',
  price: '11400',
 },
 {
  name: 'ТДМ 500',
  price: '11900',
 },
 {
  name: 'ВД 250',
  price: '9870',
 },
 {
  name: 'ВД 306 СЭ',
  price: '16520',
 },
 {
  name: 'ВД 306 СЭМ',
  price: '20790',
 },
 {
  name: 'ВД 406 СЭ',
  price: '17950',
 },
 {
  name: 'ВД 505',
  price: '27916',
 },
 {
  name: 'ВД 505',
  price: '41890',
 },
 {
  name: 'ВДУ 350',
  price: '41890',
 },
 {
  name: 'ВДУ 506',
  price: '33000',
 },
 {
  name: 'ВДУ 601',
  price: '37800',
 },
 {
  name: 'ТК - 75 кВт',
  price: '20000',
 },
 {
  name: 'ТК - 100 кВт',
  price: '25000',
 },
 {
  name: 'ТК - 150 кВт',
  price: '30000',
 },
];

const RepairTransformersPage = () => {
 return (
  <div className='ees-content-card'>
   <Stack direction='column' spacing={0} style={{paddingLeft: '7em', paddingBottom: '20px'}}>
    <p style={{paddingLeft: '2rem'}}>
     <h4>
      <Typography variant='h4' component='h4' style={{fontSize: '25px'}}>
       Цены на перемотку трансформаторов
      </Typography>
     </h4>
     <h6>
      <span>
       <Typography variant='h6' component='span' style={{fontSize: '16px'}}>
        от 9000 руб.
       </Typography>
      </span>
     </h6>
    </p>

    <SimpleTable data={data} />
   </Stack>
  </div>
 );
};
export default RepairTransformersPage;
