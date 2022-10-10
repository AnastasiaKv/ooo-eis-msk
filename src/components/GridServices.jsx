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
import ButtonBase from '@mui/material/ButtonBase';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import RepairMotorsPage from '../app/pages/services/1_RepairMotorsPage';
import GeneratorRepairPage from '../app/pages/services/2_GeneratorRepairPage';
import RepairTransformersPage from '../app/pages/services/3_RepairTransformersPage';
import RefrigerationMachineRepair from '../app/pages/services/4_RefrigerationMachineRepairPage';

import r1 from '../assets/img/services/Ремонт электродвигателей.png';
import r2 from '../assets/img/services/Ремонт генераторов.png';
import r3 from '../assets/img/services/Ремонт трансформаторов.png';

import r4 from '../assets/img/services/Ремонт холодильных машин.png';
import r5 from '../assets/img/services/Перемотка.png';
import r6 from '../assets/img/services/Ремонт электронагревателей.png';

import r7 from '../assets/img/services/Продажа компонентов.png';
import r8 from '../assets/img/services/Ремонт плат.png';
import r9 from '../assets/img/services/ТО.png';

import r10 from '../assets/img/services/Наплавка.png';

const useStyles = styled((theme) => ({
 flexGrow: {
  flex: '1',
 },
 Item: {
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
 },
 button: {
  backgroundColor: '#808080',
  color: '#fff',
  '&:hover': {
   backgroundColor: 'rgba(241, 43, 41, 1)',
   color: '#fff',
  },
 },
}));
function LinkButton(props) {
 return (
  <ButtonBase
   sx={{minWidth: '100px', minHeight: '25px'}}
   component={Link}
   onClick={(event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.preventDefault());
   }}
   {...props}
  />
 );
}
function RowsItem1(props) {
 const [value, setValue] = React.useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
 };

 const classes = useStyles();
 return (
  <>
   <Stack direction='row' spacing={3}>
    <LinkButton onClick={value} to='repair-motors-page'>
     <Paper key='1' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r1} />
     </Paper>
    </LinkButton>
    <LinkButton onClick={handleClick} to='generator-repair-page'>
     <Paper key='2' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r2} />
     </Paper>
    </LinkButton>
    <LinkButton onClick={handleClick} to='repair-transformers-page'>
     <Paper key='3' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r3} />
     </Paper>
    </LinkButton>
   </Stack>
   <Routes>
    <Route path='repair-motors-page' element={<RepairMotorsPage />} />
    <Route path='generator-repair-page' element={<GeneratorRepairPage />} />
    <Route path='repair-transformers-page' element={<RepairTransformersPage />} />
   </Routes>
  </>
 );
}

function RowsItem2() {
 const classes = useStyles();
 return (
  <>
   <Stack direction='row' spacing={1}>
    <LinkButton>
     <Paper key='4' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r4} />
     </Paper>
    </LinkButton>
    <LinkButton key='5'>
     <Paper key='5' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r5} />
     </Paper>
    </LinkButton>
    <LinkButton key='6'>
     <Paper key='6' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r6} />
     </Paper>
    </LinkButton>
   </Stack>
  </>
 );
}
function RowsItem3() {
 const classes = useStyles();
 return (
  <>
   <Stack direction='row' spacing={1}>
    <Paper key='7' sx={{boxShadow: 'none'}} className={classes.Item}>
     <ButtonBase key='7'>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r7} />
     </ButtonBase>
    </Paper>
    <Paper key='8' sx={{boxShadow: 'none'}} className={classes.Item}>
     <ButtonBase key='8'>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r8} />
     </ButtonBase>
    </Paper>
    <Paper key='9' sx={{boxShadow: 'none'}} className={classes.Item}>
     <ButtonBase key='9'>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r9} />
     </ButtonBase>
    </Paper>
   </Stack>
  </>
 );
}
function RowsItem4() {
 const classes = useStyles();
 return (
  <>
   <Stack direction='row' spacing={1}>
    <Paper key='10' sx={{boxShadow: 'none'}} className={classes.Item}>
     <ButtonBase key='10'>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r10} />
     </ButtonBase>
    </Paper>
   </Stack>
  </>
 );
}

export default function GridServices() {
 const [value, setValue] = React.useState(0);

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };
 const classes = useStyles();

 return (
  <main className='ees-content'>
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
     <p style={{paddingLeft: 0, paddingTop: '14px', paddingBottom: '4px'}}>
      <Typography
       variant='h4'
       component='h2'
       sx={{flexGrow: 1}}
       style={{
        position: 'relative',
        fontSize: '30px',
        paddingRight: '89px',
        paddingBottom: '30px',
        textAlign: 'center',
        color: '#292929',
       }}
      >
       Наши услуги
      </Typography>
     </p>
     <Box sx={{flexGrow: 1}}>
      <RowsItem1 classes={classes}></RowsItem1>
      <RowsItem2 classes={classes} />
      <RowsItem3 classes={classes} />
      <RowsItem4 classes={classes} />
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
  </main>
 );
}
