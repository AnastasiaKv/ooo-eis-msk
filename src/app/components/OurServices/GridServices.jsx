import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FirstRow from '../../containers/FirstRow';
import SecondRow from '../../containers/SecondRow';
import ThirdRow from '../../containers/ThirdRow';
import FourthRow from '../../containers/FourthRow';
import {Stack} from '@mui/system';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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

import decorTop from '../../../assets/img/Decor/decorTop.png';
import decorBottom from '../../../assets/img/Decor/decorBottom.png';
import '../../../assets/css/styles-custom.css';
import SEO from '../SEO';

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
  <>
   <Stack direction='row' spacing={1}>
    {FirstRow.map((service) => (
     <LinkButton key={service.id} onClick={handleClick} to={service.path}>
      <Paper key={service.id} sx={{boxShadow: 'none'}} className={classes.Item}>
       <Box
        sx={{height: '250px', width: '250px'}}
        loading='lazy'
        alt={service.title}
        component='img'
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
        loading='lazy'
        alt={service.title}
        component='img'
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
        loading='lazy'
        alt={service.title}
        component='img'
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
   <Stack direction='row' sx={{paddingRight: '1.7em'}} spacing={1} justifyContent='center'>
    {FourthRow.map((service) => (
     <LinkButton key={service.id} onClick={handleClick} to={service.path}>
      <Paper key={service.id} sx={{boxShadow: 'none'}} className={classes.Item}>
       <Box
        sx={{height: '250px', width: '250px'}}
        loading='lazy'
        alt={service.title}
        component='img'
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
  <main className='ees-content-card'>
   <div>
    <p
     style={{
      textAlign: 'left',
      paddingLeft: '0px',
      paddingTop: '2em',
      margin: '5px 0',
      width: '23cm',
      paddingBottom: '2em',
     }}
     className='blocktext'
    >
     <h1>
      <Typography
       variant='h1'
       sx={{
        paddingLeft: '4em',
        textAlign: 'center',
        flexGrow: 1,
        paddingBottom: '2em',
        fontFamily: 'Furore',
        fontSize: '28px',
        color: '#2d3748',
       }}
      >
       Ремонт электрооборудования
      </Typography>
     </h1>
     <Typography
      component='p'
      sx={{
       textIndent: '2ch',
       lineHeight: '2.3em',
       flexGrow: 1,
       fontFamily: 'Roboto',
       position: 'relative',
       justifyContent: 'space-around',
       textAlign: 'justify',
       color: '#292929',
      }}
     >
      Наша компания занимается ремонтом электрооборудования всех типов, представленных в каталоге
      ниже. Более десяти лет мы ремонтируем оборудование для пассажирских поездов и теперь готовы
      помочь вам с ремонтом любой электронной техники. Не спешите приобретать новые устройства, ведь
      ремонт старых обойдётся гораздо дешевле.
     </Typography>
    </p>
    <div style={{paddingLeft: '63px', paddingBottom: '5em'}}>
     <Stack direction='column' sx={{textAlign: 'left'}}>
      <h2>
       <Typography
        variant='h1'
        sx={{
         flexGrow: 1,
         paddingLeft: '1.2em',
         paddingTop: '20px',
         paddingBottom: '2em',
         fontFamily: 'Furore',
         fontSize: '28px',

         textAlign: 'center',
         color: '#292929',
        }}
       >
        Наши услуги
       </Typography>
      </h2>
      <Box sx={{flexGrow: 1}}>
       <Stack direction='column' spacing={0}>
        <ItemsRow1 classes={classes} />
        <ItemsRow2 classes={classes} />
        <ItemsRow3 classes={classes} />
        <ItemsRow4 classes={classes} />
       </Stack>
      </Box>
     </Stack>
     {/* {SecondRow.map((service) => ())};
      {ThirdRow.map((service) => ())};
      {FourthRow.map((service) => ())};
       <ItemsRow1 classes={classes} />
       <ItemsRow2 classes={classes} />
       <ItemsRow3 classes={classes} />
       <ItemsRow4 classes={classes} /> */}
    </div>
    <p
     style={{
      textAlign: 'left',
      paddingLeft: '0px',
      paddingTop: '20px',
      margin: '5px 0',
      width: '23cm',
      paddingBottom: '2em',
     }}
     className='blocktext'
    >
     <h3>
      <Typography
       variant='h1'
       sx={{
        paddingLeft: '4em',
        textAlign: 'center',
        flexGrow: 1,
        paddingBottom: '2em',
        fontFamily: 'Furore',
        fontSize: '28px',
        color: '#292929',
       }}
      >
       РЕМОНТ БЫТОВОГО И ПРОМЫШЛЕННОГО ЭЛЕКТРООБОРУДОВАНИЯ
      </Typography>
     </h3>
     <Typography
      component='p'
      sx={{
       textIndent: '2ch',
       lineHeight: '2.3em',
       flexGrow: 1,
       fontFamily: 'Roboto',
       position: 'relative',
       justifyContent: 'space-around',
       textAlign: 'justify',
       color: '#292929',
      }}
     >
      Качество нашего ремонта проверено годами непрерывной работы, и вы получите гарантию на
      устройство после ремонта. Мы готовы работать как с бытовыми устройствами , так и с
      промышленным оборудованием.
     </Typography>
    </p>
   </div>
  </main>
 );
}
