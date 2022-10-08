import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FirstRow from '../containers/FirstRow';
import SecondRow from '../containers/SecondRow';
import ThirdRow from '../containers/ThirdRow';
import FourthRow from '../containers/FourthRow';
import {Stack} from '@mui/system';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import RepairMotorsPage from '../app/pages/services/1_RepairMotorsPage';
import GeneratorRepairPage from '../app/pages/services/2_GeneratorRepairPage';
import RepairTransformersPage from '../app/pages/services/3_RepairTransformersPage';
import RefrigerationMachineRepair from '../app/pages/services/4_RefrigerationMachineRepairPage';

const useStyles = styled((theme) => ({
 Item: {
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
 },
}));

function StackItem1({classes}) {
 return (
  <Stack direction='row' spacing={1}>
   {FirstRow.map((work, index) => (
    <Paper key={index} sx={{boxShadow: 'none'}} className={classes.Item}>
     <Button key={work.id}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={work.image} />
     </Button>
    </Paper>
   ))}
  </Stack>
 );
}

function StackItem2({classes}) {
 return (
  <Stack direction='row' spacing={1}>
   {SecondRow.map((work, index) => (
    <Paper key={index} sx={{boxShadow: 'none'}} className={classes.Item}>
     <Button>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={work.image} />
     </Button>
    </Paper>
   ))}
  </Stack>
 );
}
function StackItem3({classes}) {
 return (
  <Stack direction='row' spacing={1}>
   {ThirdRow.map((work, index) => (
    <Paper key={index} sx={{boxShadow: 'none'}} className={classes.Item}>
     <Button>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={work.image} />
     </Button>
    </Paper>
   ))}
  </Stack>
 );
}
function StackItem4({classes}) {
 return (
  <Stack direction='row' spacing={1}>
   {FourthRow.map((work, index) => (
    <Paper key={index} sx={{boxShadow: 'none'}} className={classes.Item}>
     <Button>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={work.image} />
     </Button>
    </Paper>
   ))}
  </Stack>
 );
}

export default function ResponsiveGridService({selected}) {
 const classes = useStyles();
 return (
  <div>
   <p
    style={{
     textAlign: 'left',
     paddingLeft: '0px',
     paddingTop: '20px',
     margin: '5px 0',
     width: '23cm',
    }}
    className='blocktext'
   >
    <Typography
     variant='body2'
     component='span'
     sx={{flexGrow: 1}}
     style={{
      fontFamily: 'Roboto',
      fontSize: '14px',
      position: 'relative',
      justifyContent: 'space-around',
      textAlign: 'justify',
      color: '#292929',
     }}
    >
     Также как перспективное планирование предоставляет широкие возможности для системы массового
     участия. Следует отметить, что сложившаяся структура организации позволяет оценить значение
     поставленных обществом задач. Каждый из нас понимает очевидную вещь: консультация с широким
     активом позволяет выполнить важные задания по разработке распределения внутренних резервов и
     ресурсов.
    </Typography>
   </p>
   <div style={{paddingLeft: '30px'}}>
    <p style={{paddingLeft: '35px', paddingTop: '14px', paddingBottom: '4px'}}>
     <Typography
      variant='body2'
      component='span'
      sx={{flexGrow: 1}}
      style={{
       position: 'relative',
       fontSize: 21,
       textAlign: 'center',
       fontWeight: 'bold',
       color: '#292929',
      }}
     >
      Наши услуги
     </Typography>
    </p>
    <Box sx={{flexGrow: 1}}>
     <StackItem1 classes={classes} />
     <StackItem2 classes={classes} />
     <StackItem3 classes={classes} />
     <StackItem4 classes={classes} />
    </Box>

    <p
     style={{
      textAlign: 'left',
      paddingLeft: '0px',
      paddingTop: '20px',
      margin: '0px 0',
      width: '21cm',
     }}
     className='blocktext'
    >
     <Typography
      variant='body2'
      component='span'
      sx={{flexGrow: 1}}
      style={{
       position: 'relative',
       justifyContent: 'space-around',
       fontSize: 12,
       color: '#292929',
      }}
     >
      Также как перспективное планирование предоставляет широкие возможности для системы массового
      участия. Следует отметить, что сложившаяся структура организации позволяет оценить значение
      поставленных обществом задач. Каждый из нас понимает очевидную вещь: консультация с широким
      активом позволяет выполнить важные задания по разработке распределения внутренних резервов и
      ресурсов.
     </Typography>
    </p>
   </div>
  </div>
 );
}
