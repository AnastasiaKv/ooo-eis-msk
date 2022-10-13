import React from 'react';
import {makeStyles} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../../components/containers/PowerKwData';
import Stack from '@mui/material/Stack';

export default function CustomizedTables() {
 return (
  <Stack spacing={0} style={{paddingLeft: '1em'}}>
   <Paper>
    <Table aria-label='simple table'>
     <TableHead>
      <TableRow>
       <TableCell />
       <TableCell style={{fontSize: '16px'}} align='center' colSpan={2}>
        <b>Частота врашения, об\мин</b>
       </TableCell>
      </TableRow>
      <TableRow>
       <TableCell style={{fontSize: '16px'}}>
        <b>Мощность, (кВт)</b>
       </TableCell>
       <TableCell style={{fontSize: '16px'}} align='right'>
        <b>3000</b>
       </TableCell>
       <TableCell style={{fontSize: '16px'}} align='right'>
        <b>1500</b>
       </TableCell>
       <TableCell style={{fontSize: '16px'}} align='right'>
        <b>1000</b>
       </TableCell>
       <TableCell style={{fontSize: '16px'}} align='right'>
        <b>750</b>
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {data.map((row) => (
       <TableRow key={row.PowerKBr}>
        <TableCell style={{fontSize: '16px'}} component='th' scope='row'>
         <b>{row.PowerKBr}</b>
        </TableCell>
        <TableCell align='right'>{row.col13000}</TableCell>
        <TableCell align='right'>{row.col21500}</TableCell>
        <TableCell align='right'>{row.col31000}</TableCell>
        <TableCell align='right'>{row.col4750}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </Paper>
  </Stack>
 );
}
