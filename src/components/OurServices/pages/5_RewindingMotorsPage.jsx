import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SimpleTable from '../../../modules/common/SimpleTable';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import CustomizedTables from '../../../modules/common/CustomizedTables';
import image5 from '../../../assets/img/services/Перемотка1.png';

export default function RewindingMotorsPage() {
 return (
  <>
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
       width: '7em',
       height: '7em',
       float: 'right' /* Выравнивание по правому краю  */,
      }}
      component='img'
      alt='Изображение неведомой детали'
      src={image5}
     />
     <h4 style={{paddingTop: '10px'}}>
      <Typography variant='h4' component='h4' style={{fontSize: '28px'}}>
       Ремонт и перемотка двигателей
      </Typography>
     </h4>
     <h4>
      <Typography variant='h4' component='h4' style={{fontSize: '28px'}}></Typography>
     </h4>
    </p>
    <br />
    <CustomizedTables />
   </Stack>
  </>
 );
}
