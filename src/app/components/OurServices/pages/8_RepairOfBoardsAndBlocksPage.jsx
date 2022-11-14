import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import SEO from '../../SEO';
import image6 from '../../../../assets/img/services/Ремонт плат1.png';
import ComputerIcon from '@mui/icons-material/Computer';

export default function RepairOfBoardsAndBlocksPage() {
 return (
  <form style={{height: '100%', width: '33.1em', marginTop: '0em', marginRight: '0em'}}>
   <SEO
    title='Ремонт плат и электронных блоков'
    description='Ремонт плат от автомобильной электроники'
    name='ООО ЭИС'
   />
   <Paper
    elevation={4}
    sx={{
     bgcolor: '#f7f7f7',
     marginLeft: '2.7em',
     marginBottom: 5,
     paddingLeft: '2em',
     paddingBottom: '0.6em',
     width: '30em',
    }}
   >
    <Stack direction='row' sx={{paddingLeft: '0em', textAlign: 'left'}}>
     <p
      style={{
       paddingTop: '0em',
       width: '23em',
       height: '211px',
       textAlign: 'left',
       paddingBottom: '0',
      }}
     >
      <Box
       sx={{
        paddingTop: '18px',
        width: '8em',
        height: '7em',
        float: 'right' /* Выравнивание по правому краю  */,
        margin: '1em -83px 13px 0px',
       }}
       loading='lazy'
       component='img'
       alt='Ремонт плат и электронных блоков'
       src={image6}
      />
      <h1>
       <Typography
        variant='h4'
        component='h4'
        style={{fontFamily: 'Furore', textAlign: 'left', fontSize: '25px', paddingTop: '1em'}}
       >
        Ремонт плат и электронных блоков
       </Typography>
      </h1>
     </p>
    </Stack>
    <h3>
     <Typography variant='h6' sx={{paddingRight: '20px', paddingBottom: '1em'}}>
      Список ремонтируемой электроники:
     </Typography>
    </h3>
    <ul style={{fontFamily: 'Roboto', fontSize: '16px', marginLeft: 0}}>
     <Stack direction='row' spacing={3}>
      <ComputerIcon color='action' style={{margin: '3px 0px 0px 0px', height: '20px'}} />
      <Typography
       variant='caption'
       component='span'
       style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
      >
       Ремонт плат от бытовой техники
      </Typography>
     </Stack>

     <Stack direction='row' spacing={3}>
      <ComputerIcon color='action' style={{margin: '3px 0px 0px 0px', height: '20px'}} />
      <Typography
       variant='caption'
       component='span'
       style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
      >
       Ремонт плат от автомобильной электроники
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <ComputerIcon color='action' style={{margin: '3px 0px 0px 0px', height: '20px'}} />
      <Typography
       variant='caption'
       component='span'
       style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
      >
       Ремонт электронных блоков управления
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <ComputerIcon color='action' style={{margin: '3px 0px 0px 0px', height: '20px'}} />
      <Typography
       variant='caption'
       component='span'
       style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
      >
       Ремонт микропроцессорных печатных плат
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <ComputerIcon color='action' style={{margin: '3px 0px 0px 0px', height: '20px'}} />
      <Typography
       variant='caption'
       component='span'
       style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
      >
       Ремонт микроэлектроники специального назначения
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <ComputerIcon color='action' style={{margin: '3px 0px 0px 0px', height: '20px'}} />
      <Typography
       variant='caption'
       component='span'
       style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
      >
       Ремонт электронных модулей
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <ComputerIcon color='action' style={{margin: '3px 0px 0px 0px', height: '20px'}} />
      <Typography
       variant='caption'
       component='span'
       style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
      >
       Ремонт компьютеризованных панелей управления
      </Typography>
     </Stack>
     <Stack direction='row' spacing={3}>
      <ComputerIcon color='action' style={{margin: '3px 0px 0px 0px', height: '20px'}} />
      <Typography
       variant='caption'
       component='span'
       style={{paddingLeft: '10px', fontSize: '16px', marginLeft: 0}}
      >
       Ремонт различных источников питания (в т.ч. специального назначения)
      </Typography>
     </Stack>
    </ul>
   </Paper>
  </form>
 );
}
