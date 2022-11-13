import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Stack} from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LinkButton from '../../../modules/common/LinkButton';
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
import decorTop from '../../../assets/img/Decor/decorTop.png';
import decorBottom from '../../../assets/img/Decor/decorBottom.png';
import '../../../assets/css/styles-custom.css';
import image1 from '../../../assets/img/services/Ремонт электродвигателей.png';
import image2 from '../../../assets/img/services/Ремонт генераторов.png';
import image3 from '../../../assets/img/services/Ремонт трансформаторов.png';
import image4 from '../../../assets/img/services/Ремонт холодильных машин.png';
import image5 from '../../../assets/img/services/Перемотка.png';
import image6 from '../../../assets/img/services/Ремонт электронагревателей.png';
import image7 from '../../../assets/img/services/Продажа компонентов.png';
import image8 from '../../../assets/img/services/Ремонт плат.png';
import image9 from '../../../assets/img/services/ТО.png';
import image10 from '../../../assets/img/services/Наплавка.png';

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

function DecorTop() {
 return <Box component='img' width='90' className='decor-top' src={decorTop} alt='DecorTop' />;
}
function DecorBottom() {
 return <Box component='img' className='decor-bottom' src={decorBottom} alt='DecorBottom' />;
}

function ItemsRow1() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <Box
   sx={{
    display: 'inline-block',
   }}
  >
   <LinkButton onClick={handleClick} to='services/repair-motors-page'>
    {isShown && <DecorTop />}
    <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
     <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image1} />
    </Paper>
    {isShown && <DecorBottom />}
   </LinkButton>
   <Routes>
    {isShown && <Route path='services/repair-motors-page' element={<RepairMotorsPage />} />}
   </Routes>
  </Box>
 );
}

function ItemsRow2() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <Box sx={{flexGrow: 1}}>
   <LinkButton onClick={handleClick} to='services/generator-repair-page'>
    {isShown && <DecorTop />}
    <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
     <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image2} />
    </Paper>
    {isShown && <DecorBottom />}
   </LinkButton>
   <Routes>
    {isShown && <Route path='services/generator-repair-page' element={<GeneratorRepairPage />} />}
   </Routes>
  </Box>
 );
}

function ItemsRow3() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <Box sx={{flexGrow: 1}}>
   <LinkButton onClick={handleClick} to='services/repair-transformers-page'>
    {isShown && <DecorTop />}
    <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
     <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image3} />
    </Paper>
    {isShown && <DecorBottom />}
   </LinkButton>
   <Routes>
    {isShown && (
     <Route path='services/repair-transformers-page' element={<RepairTransformersPage />} />
    )}
   </Routes>
  </Box>
 );
}

function ItemsRow4() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <Box sx={{flexGrow: 1}}>
   <LinkButton onClick={handleClick} to='services/refrigeration-machine-repair-page'>
    {isShown && <DecorTop />}
    <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
     <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image4} />
    </Paper>
    {isShown && <DecorBottom />}
   </LinkButton>
   <Routes>
    {isShown && (
     <Route
      path='services/refrigeration-machine-repair-page'
      element={<RefrigerationMachineRepair />}
     />
    )}
   </Routes>
  </Box>
 );
}
function ItemsRow5() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <Box sx={{flexGrow: 1}}>
   <LinkButton onClick={handleClick} to='services/rewinding-motors-page'>
    {isShown && <DecorTop />}
    <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
     <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image5} />
    </Paper>
    {isShown && <DecorBottom />}
   </LinkButton>
   <Routes>
    {isShown && <Route path='services/rewinding-motors-page' element={<RewindingMotorsPage />} />}
   </Routes>
  </Box>
 );
}
function ItemsRow6() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <Box sx={{flexGrow: 1}}>
   <LinkButton onClick={handleClick} to='services/repair-of-electric-heaters-page'>
    {isShown && <DecorTop />}
    <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
     <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image6} />
    </Paper>
    {isShown && <DecorBottom />}
   </LinkButton>
   <Routes>
    {isShown && (
     <Route
      path='services/repair-of-electric-heaters-page'
      element={<RepairOfElectricHeatersPage />}
     />
    )}
   </Routes>
  </Box>
 );
}
function ItemsRow7() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <Box sx={{flexGrow: 1}}>
   <LinkButton onClick={handleClick} to='services/sale-of-electrical-components-page'>
    {isShown && <DecorTop />}
    <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
     <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image7} />
    </Paper>
    {isShown && <DecorBottom />}
   </LinkButton>
   <Routes>
    {isShown && (
     <Route
      path='services/sale-of-electrical-components-page'
      element={<SaleOfElectricalComponentsPage />}
     />
    )}
   </Routes>
  </Box>
 );
}
function ItemsRow8() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <Box sx={{flexGrow: 1}}>
   <LinkButton onClick={handleClick} to='services/repair-of-boards-and-blocks-page'>
    {isShown && <DecorTop />}
    <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
     <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image8} />
    </Paper>
    {isShown && <DecorBottom />}
   </LinkButton>
   <Routes>
    {isShown && (
     <Route
      path='services/repair-of-boards-and-blocks-page'
      element={<RepairOfBoardsAndBlocksPage />}
     />
    )}
   </Routes>
  </Box>
 );
}
function ItemsRow9() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <Box sx={{flexGrow: 1}}>
   <LinkButton onClick={handleClick} to='services/maintenance-and-repair-of-passenger-cars-page'>
    {isShown && <DecorTop />}
    <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
     <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image9} />
    </Paper>
    {isShown && <DecorBottom />}
   </LinkButton>
   <Routes>
    {isShown && (
     <Route
      path='services/maintenance-and-repair-of-passenger-cars-page'
      element={<TORepairOfPassengerCarsPage />}
     />
    )}
   </Routes>
  </Box>
 );
}
function ItemsRow10() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
 };

 const classes = useStyles();
 return (
  <Box sx={{flexGrow: 1}}>
   {isShown && <DecorTop />}
   <LinkButton onClick={handleClick} to='services/surfacing-of-shafts-and-shields-page'>
    <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
     <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image10} />
    </Paper>
   </LinkButton>
   {isShown && <DecorBottom />}
   <Routes>
    {isShown && (
     <Route
      path='services/surfacing-of-shafts-and-shields-page'
      element={<SurfacingOfShaftsAndShieldsPage />}
     />
    )}
   </Routes>
  </Box>
 );
}

export default function GridServices() {
 const [isShown, setIsShown] = useState(false);
 const [value, setValue] = React.useState(0);

 const handleChange = (event, newValue) => {
  setValue(newValue);
  setIsShown((current) => !current);
  event.preventDefault();
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

    <Typography
     variant='h4'
     component='h2'
     sx={{flexGrow: 1}}
     style={{
      paddingRight: '1.8em',
      paddingTop: '20px',
      paddingBottom: '18px',
      fontFamily: 'Furore',
      fontSize: '28px',

      textAlign: 'center',
      color: '#292929',
     }}
    >
     Наши услуги
    </Typography>

    <Stack direction='row'>
     <ItemsRow1 classes={classes} />
     <ItemsRow2 classes={classes} />
     <ItemsRow3 classes={classes} />
    </Stack>
    <Stack direction='row'>
     <ItemsRow4 classes={classes} />
     <ItemsRow5 classes={classes} />
     <ItemsRow6 classes={classes} />
    </Stack>
    <Stack direction='row'>
     <ItemsRow7 classes={classes} />
     <ItemsRow8 classes={classes} />
     <ItemsRow9 classes={classes} />
    </Stack>
    <ItemsRow10 classes={classes} />
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
  </main>
 );
}
