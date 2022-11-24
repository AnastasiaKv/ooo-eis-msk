import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export default function SimpleTable2({data}) {
 return (
  <Stack spacing={0} style={{paddingTop: '1em', paddingLeft: '1em'}}>
   <Paper elevation={8} sx={{maxWidth: '670px'}}>
    <Table aria-label='simple table' sx={{bgcolor: '#f7f7f7'}}>
     <TableHead>
      <TableRow>
       <TableCell style={{fontSize: '18px'}}>
        <b>Услуга</b>
       </TableCell>
       <TableCell style={{fontSize: '18px'}} align='right'>
        <b>Цена</b>
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {data.map((row) => (
       <TableRow key={row.name}>
        <TableCell style={{fontSize: '16px'}} component='th' scope='row'>
         {row.name}
        </TableCell>
        <TableCell align='right'>{row.price}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </Paper>
  </Stack>
 );
}
