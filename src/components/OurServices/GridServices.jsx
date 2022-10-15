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

import LinkButton from '../../modules/common/LinkButton';
import RepairMotorsPage from './pages/1_RepairMotorsPage';
import GeneratorRepairPage from './pages/2_GeneratorRepairPage';
import RepairTransformersPage from './pages/3_RepairTransformersPage';

import RefrigerationMachineRepair from './pages/4_RefrigerationMachineRepairPage';
import RewindingMotorsPage from './pages/5_RewindingMotorsPage';
import RepairOfElectricHeatersPage from './pages/6_RepairOfElectricHeatersPage';

import SaleOfElectricalComponentsPage from './pages/7_SaleOfElectricalComponentsPage';
import RepairOfBoardsAndBlocksPage from './pages/8_RepairOfBoardsAndBlocksPage';
import TORepairOfPassengerCarsPage from './pages/9_TORepairOfPassengerCarsPage';

import SurfacingOfShaftsAndShieldsPage from './pages/10_SurfacingOfShaftsAndShieldsPage';

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

function ItemsRow1() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <>
   <Stack direction='row' spacing={1}>
    {FirstRow.map((service) => (
     <LinkButton key={service.id} onClick={handleClick} to={service.path}>
      <Paper key={service.id} sx={{boxShadow: 'none'}} className={classes.Item}>
       <Box
        sx={{height: '250px', width: '250px'}}
        component='img'
        alt='button'
        src={service.image}
       />
      </Paper>
     </LinkButton>
    ))}
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

function ItemsRow2() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = React.useState(null);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <>
   <Stack direction='row' spacing={1}>
    {SecondRow.map((service) => (
     <LinkButton key={service.id} onClick={handleClick} to={service.path}>
      <Paper key={service.id} sx={{boxShadow: 'none'}} className={classes.Item}>
       <Box
        sx={{height: '250px', width: '250px'}}
        component='img'
        alt='button'
        src={service.image}
       />
      </Paper>
     </LinkButton>
    ))}
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
function ItemsRow3() {
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
    {ThirdRow.map((service) => (
     <LinkButton key={service.id} onClick={handleClick} to={service.path}>
      <Paper key={service.id} sx={{boxShadow: 'none'}} className={classes.Item}>
       <Box
        sx={{height: '250px', width: '250px'}}
        component='img'
        alt='button'
        src={service.image}
       />
      </Paper>
     </LinkButton>
    ))}
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
      element={<TORepairOfPassengerCarsPage />}
     />
    )}
   </Routes>
  </>
 );
}
function ItemsRow4() {
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
    {FourthRow.map((service) => (
     <LinkButton key={service.id} onClick={handleClick} to={service.path}>
      <Paper key={service.id} sx={{boxShadow: 'none'}} className={classes.Item}>
       <Box
        sx={{height: '250px', width: '250px'}}
        component='img'
        alt='button'
        src={service.image}
       />
      </Paper>
     </LinkButton>
    ))}
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
  setIsShown((current) => !current);
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
    <div style={{paddingLeft: '63px'}}>
     <p style={{paddingLeft: 0, paddingTop: '14px', paddingBottom: '4px'}}>
      <Typography
       variant='h4'
       component='h2'
       sx={{flexGrow: 1}}
       style={{
        fontSize: '30px',
        textAlign: 'center',
        color: '#292929',
       }}
      >
       Наши услуги
      </Typography>
     </p>
     <Box sx={{flexGrow: 1}}>
      <Stack direction='column' spacing={0}>
       <ItemsRow1 classes={classes} />
       <ItemsRow2 classes={classes} />
       <ItemsRow3 classes={classes} />
       <ItemsRow4 classes={classes} />
      </Stack>
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
