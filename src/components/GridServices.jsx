import React, {useState} from 'react';
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
import RewindingMotorsPage from '../app/pages/services/5_RewindingMotorsPage';
import RepairOfElectricHeatersPage from '../app/pages/services/6_RepairOfElectricHeatersPage';

import SaleOfElectricalComponentsPage from '../app/pages/services/7_SaleOfElectricalComponentsPage';
import RepairOfBoardsAndBlocksPage from '../app/pages/services/8_RepairOfBoardsAndBlocksPage';
import MaintenanceAndRepairOfPassengerCarsPage from '../app/pages/services/9_MaintenanceAndRepairOfPassengerCarsPage';

import SurfacingOfShaftsAndShieldsPage from '../app/pages/services/10_SurfacingOfShaftsAndShieldsPage';

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
    console.log('ClickClick: ', this);
   }}
   {...props}
  />
 );
}
function RowsItem1(props) {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <>
   <Stack direction='row' spacing={2}>
    <LinkButton onClick={handleClick} to='services/repair-motors-page'>
     <Paper key='1' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r1} />
     </Paper>
    </LinkButton>
    <LinkButton onClick={handleClick} to='services/generator-repair-page'>
     <Paper key='2' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r2} />
     </Paper>
    </LinkButton>
    <LinkButton onClick={handleClick} to='services/repair-transformers-page'>
     <Paper key='3' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r3} />
     </Paper>
    </LinkButton>
   </Stack>
   <Routes>
    {isShown && <Route path='services/repair-motors-page' element={<RepairMotorsPage />} />}
    {isShown && <Route path='services/generator-repair-page' element={<GeneratorRepairPage />} />}
    {isShown && (
     <Route path='services/repair-transformers-page' element={<RepairTransformersPage />} />
    )}
   </Routes>
  </>
 );
}

function RowsItem2() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = React.useState(null);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <>
   <Stack direction='row' spacing={2}>
    <LinkButton onClick={handleClick} to='services/refrigeration-machine-repair-page'>
     <Paper key='4' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r4} />
     </Paper>
    </LinkButton>
    <LinkButton onClick={handleClick} to='services/rewinding-motors-page'>
     <Paper key='5' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r5} />
     </Paper>
    </LinkButton>
    <LinkButton onClick={handleClick} to='services/repair-of-electric-heaters-page'>
     <Paper key='6' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r6} />
     </Paper>
    </LinkButton>
   </Stack>
   <Routes>
    {isShown && (
     <Route
      path='services/refrigeration-machine-repair-page'
      element={<RefrigerationMachineRepair />}
     />
    )}
    {isShown && <Route path='services/rewinding-motors-page' element={<RewindingMotorsPage />} />}
    {isShown && (
     <Route
      path='services/repair-of-electric-heaters-page'
      element={<RepairOfElectricHeatersPage />}
     />
    )}
   </Routes>
  </>
 );
}
function RowsItem3() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = React.useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <>
   <Stack direction='row' spacing={2}>
    <LinkButton onClick={handleClick} to='services/sale-of-electrical-components-page'>
     <Paper key='7' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r7} />
     </Paper>
    </LinkButton>

    <LinkButton onClick={handleClick} to='services/repair-of-boards-and-blocks-page'>
     <Paper key='8' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r8} />
     </Paper>
    </LinkButton>

    <LinkButton onClick={handleClick} to='services/maintenance-and-repair-of-passenger-cars-page'>
     <Paper key='9' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r9} />
     </Paper>
    </LinkButton>
   </Stack>
   <Routes>
    {isShown && (
     <Route
      path='services/sale-of-electrical-components-page'
      element={<SaleOfElectricalComponentsPage />}
     />
    )}
    {isShown && (
     <Route
      path='services/repair-of-boards-and-blocks-page'
      element={<RepairOfBoardsAndBlocksPage />}
     />
    )}
    {isShown && (
     <Route
      path='services/maintenance-and-repair-of-passenger-cars-page'
      element={<MaintenanceAndRepairOfPassengerCarsPage />}
     />
    )}
   </Routes>
  </>
 );
}
function RowsItem4() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = React.useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <>
   <Stack direction='row' spacing={1}>
    <LinkButton onClick={handleClick} to='services/surfacing-of-shafts-and-shields-page'>
     <Paper key='10' sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={r10} />{' '}
     </Paper>
    </LinkButton>
   </Stack>
   <Routes>
    {isShown && (
     <Route
      path='services/surfacing-of-shafts-and-shields-page'
      element={<SurfacingOfShaftsAndShieldsPage />}
     />
    )}
   </Routes>
  </>
 );
}

export default function GridServices() {
 const [isShown, setIsShown] = useState(false);
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
