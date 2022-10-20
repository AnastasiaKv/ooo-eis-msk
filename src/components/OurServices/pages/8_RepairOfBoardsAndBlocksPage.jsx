import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function RepairOfBoardsAndBlocksPage() {
 return (
  <>
   <Paper
    elevation={4}
    sx={{bgcolor: '#f7f7f7', marginBottom: 5, paddingLeft: '2em', paddingBottom: '2em'}}
   >
    <Typography
     variant='h4'
     component='h4'
     style={{fontFamily: 'Furore', textAlign: 'left', fontSize: '25px', paddingTop: '1em'}}
    >
     Ремонт плат и электронных блоков
    </Typography>
    <br />
    <br />
    <h2>
     <Typography
      variant='caption'
      style={{fontFamily: 'Furore', textAlign: 'left', fontSize: '20px'}}
     >
      Список ремонтируемой электроники:
     </Typography>
    </h2>
    <ul>
     <li>Ремонт плат от бытовой техники </li>
     <li>Ремонт плат от автомобильной электроники</li>
     <li>Ремонт электронных блоков управления</li>
     <li>Ремонт микропроцессорных печатных плат</li>
     <li>Ремонт микроэлектроники специального назначения</li>
     <li>Ремонт электронных модулей</li>
     <li>Ремонт компьютеризованных панелей управления</li>
     <li>Ремонт различных источников питания (в т.ч. специального назначения)</li>
    </ul>
   </Paper>
  </>
 );
}
