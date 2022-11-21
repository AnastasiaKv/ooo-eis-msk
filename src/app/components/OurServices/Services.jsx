import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import '../../../assets/css/styles-custom.css';
import '../../../assets/css/decor-top.css';
import '../../../assets/css/decor-bottom.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Stack} from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LinkButton from '../../modules/common/LinkButton';
import decorTop from '../../../assets/img/Decor/decorTop.png';
import decorBottom from '../../../assets/img/Decor/decorBottom.png';

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

function DecorTop({visability}) {
 return (
  <div>
   {!visability ? (
    <Box component='img' width='90' className='decor-top' src={decorTop} alt='DecorTop' />
   ) : (
    <Box component='img' width='90' className='decor-top-hidden' src={decorTop} alt='DecorTop' />
   )}
  </div>
 );
}
function DecorBottom({visability}) {
 return (
  <div>
   {!visability ? (
    <Box component='img' className='decor-bottom' src={decorBottom} alt='DecorBottom' />
   ) : (
    <Box component='img' className='decor-bottom-hidden' src={decorBottom} alt='DecorBottom' />
   )}
  </div>
 );
}

function Page1({title, children, isActive, onShow, visability}) {
 const classes = useStyles();
 return (
  <LinkButton onClick={onShow} to='/services/repair-motors-page'>
   {isActive && <DecorTop />}
   <Paper sx={{boxShadow: 'none', width: '250px'}} className={classes.Item}>
    <Box
     sx={{height: '250px', width: '250px'}}
     loading='lazy'
     component='img'
     alt='button'
     src={image1}
    />
   </Paper>
   {isActive && <DecorBottom />}
  </LinkButton>
 );
}

function Page2({title, children, isActive, onShow}) {
 const classes = useStyles();
 return (
  <LinkButton onClick={onShow} to='/services/generator-repair-page'>
   {isActive && <DecorTop />}
   <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
    <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image2} />
   </Paper>
   {isActive && <DecorBottom />}
  </LinkButton>
 );
}

function Page3({title, children, isActive, onShow}) {
 const classes = useStyles();
 return (
  <LinkButton onClick={onShow} to='services/repair-transformers-page'>
   {isActive && <DecorTop />}
   <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
    <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image3} />
   </Paper>
   {isActive && <DecorBottom />}
  </LinkButton>
 );
}

function Page4({title, children, isActive, onShow}) {
 const classes = useStyles();
 return (
  <LinkButton onClick={onShow} to='/services/refrigeration-machine-repair-page'>
   {isActive && <DecorTop />}
   <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
    <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image4} />
   </Paper>
   {isActive && <DecorBottom />}
  </LinkButton>
 );
}
function Page5({title, children, isActive, onShow}) {
 const classes = useStyles();
 return (
  <LinkButton onClick={onShow} to='/services/rewinding-motors-page'>
   {isActive && <DecorTop />}
   <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
    <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image5} />
   </Paper>
   {isActive && <DecorBottom />}
  </LinkButton>
 );
}
function Page6({title, children, isActive, onShow}) {
 const classes = useStyles();
 return (
  <LinkButton onClick={onShow} to='/services/repair-of-electric-heaters-page'>
   {isActive && <DecorTop />}
   <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
    <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image6} />
   </Paper>
   {isActive && <DecorBottom />}
  </LinkButton>
 );
}
function Page7({title, children, isActive, onShow}) {
 const classes = useStyles();
 return (
  <LinkButton onClick={onShow} to='/services/sale-of-electrical-components-page'>
   {isActive && <DecorTop />}
   <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
    <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image7} />
   </Paper>
   {isActive && <DecorBottom />}
  </LinkButton>
 );
}
function Page8({title, children, isActive, onShow}) {
 const classes = useStyles();
 return (
  <LinkButton onClick={onShow} to='/services/repair-of-boards-and-blocks-page'>
   {isActive && <DecorTop />}
   <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
    <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image8} />
   </Paper>
   {isActive && <DecorBottom />}
  </LinkButton>
 );
}
function Page9({title, children, isActive, onShow}) {
 const classes = useStyles();
 return (
  <LinkButton onClick={onShow} to='/services/maintenance-and-repair-of-passenger-cars-page'>
   {isActive && <DecorTop />}
   <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
    <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image9} />
   </Paper>
   {isActive && <DecorBottom />}
  </LinkButton>
 );
}
function Page10({title, children, isActive, onShow}) {
 const classes = useStyles();
 return (
  <LinkButton onClick={onShow} to='/services/surfacing-of-shafts-and-shields-page'>
   {isActive && <DecorTop />}
   <Paper sx={{boxShadow: 'none'}} className={classes.Item}>
    <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image10} />
   </Paper>
   {isActive && <DecorBottom />}
  </LinkButton>
 );
}

export default function Gridservices() {
 const [activeIndex, setActiveIndex] = useState(10);
 const [visability, setVisability] = useState(false);
 const classes = useStyles();

 return (
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

   <Stack direction='column' sx={{paddingLeft: '1.6em', paddingBottom: '5em'}}>
    <h2>
     <Typography
      variant='h2'
      sx={{
       flexGrow: 1,
       paddingRight: '0.5em',
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
     <Stack direction='row' spacing={1}>
      <Page1
       title='Etymology'
       isActive={activeIndex === 0}
       onShow={() => (activeIndex === 0 ? setActiveIndex(10) : setActiveIndex(0))}
       visability={() => setVisability(true)}
       classes={classes}
      />
      <Page2
       title='Etymology'
       isActive={activeIndex === 1}
       onShow={() => (activeIndex === 1 ? setActiveIndex(10) : setActiveIndex(1))}
       classes={classes}
      />
      <Page3
       title='Etymology'
       isActive={activeIndex === 2}
       onShow={() => (activeIndex === 2 ? setActiveIndex(10) : setActiveIndex(2))}
       classes={classes}
      />
      \
     </Stack>
     <div style={{marginLeft: '1.8em', marginBottom: 5, marginTop: '0em', marginRight: '0em'}}>
      <Routes>
       {activeIndex === 0 ? (
        <Route path='/services/repair-motors-page' element={<RepairMotorsPage />} />
       ) : (
        <></>
       )}
       {activeIndex === 1 ? (
        <Route path='/services/generator-repair-page' element={<GeneratorRepairPage />} />
       ) : (
        <></>
       )}
       {activeIndex === 2 ? (
        <Route path='services/repair-transformers-page' element={<RepairTransformersPage />} />
       ) : (
        <></>
       )}
      </Routes>
     </div>
     <Stack direction='row' spacing={1}>
      <Page4
       title='Etymology'
       isActive={activeIndex === 3}
       onShow={() => (activeIndex === 3 ? setActiveIndex(10) : setActiveIndex(3))}
       classes={classes}
      />
      <Page5
       title='Etymology'
       isActive={activeIndex === 4}
       onShow={() => (activeIndex === 4 ? setActiveIndex(10) : setActiveIndex(4))}
       classes={classes}
      />
      <Page6
       title='Etymology'
       isActive={activeIndex === 5}
       onShow={() => (activeIndex === 5 ? setActiveIndex(10) : setActiveIndex(5))}
       classes={classes}
      />
     </Stack>
     <div style={{marginLeft: '1.8em', marginBottom: 5, marginTop: '0em', marginRight: '0em'}}>
      <Routes>
       {activeIndex === 3 ? (
        <Route
         path='/services/refrigeration-machine-repair-page'
         element={<RefrigerationMachineRepair />}
        />
       ) : (
        <></>
       )}
       {activeIndex === 4 ? (
        <Route path='/services/rewinding-motors-page' element={<RewindingMotorsPage />} />
       ) : (
        <></>
       )}
       {activeIndex === 5 ? (
        <Route
         path='/services/repair-of-electric-heaters-page'
         element={<RepairOfElectricHeatersPage />}
        />
       ) : (
        <></>
       )}
      </Routes>
     </div>
     <Stack direction='row' spacing={1}>
      <Page7
       title='Etymology'
       isActive={activeIndex === 6}
       onShow={() => (activeIndex === 6 ? setActiveIndex(10) : setActiveIndex(6))}
       classes={classes}
      />
      <Page8
       title='Etymology'
       isActive={activeIndex === 7}
       onShow={() => (activeIndex === 7 ? setActiveIndex(10) : setActiveIndex(7))}
       classes={classes}
      />
      <Page9
       title='Etymology'
       isActive={activeIndex === 8}
       onShow={() => (activeIndex === 8 ? setActiveIndex(10) : setActiveIndex(8))}
       classes={classes}
      />
     </Stack>
     <div style={{marginLeft: '1.8em', marginBottom: 5, marginTop: '0em', marginRight: '0em'}}>
      <Routes>
       {activeIndex === 6 ? (
        <Route
         path='/services/sale-of-electrical-components-page'
         element={<SaleOfElectricalComponentsPage />}
        />
       ) : (
        <></>
       )}
       {activeIndex === 7 ? (
        <Route
         path='/services/repair-of-boards-and-blocks-page'
         element={<RepairOfBoardsAndBlocksPage />}
        />
       ) : (
        <></>
       )}
       {activeIndex === 8 ? (
        <Route
         path='/services/maintenance-and-repair-of-passenger-cars-page'
         element={<TORepairOfPassengerCarsPage />}
        />
       ) : (
        <></>
       )}
      </Routes>
     </div>
     <Stack direction='row' sx={{paddingRight: '2.7em'}} spacing={1} justifyContent='center'>
      <Page10
       title='Etymology'
       isActive={activeIndex === 9}
       onShow={() => (activeIndex === 9 ? setActiveIndex(10) : setActiveIndex(9))}
       classes={classes}
      />
     </Stack>
     <div style={{marginLeft: '1.8em', marginBottom: 5, marginTop: '0em', marginRight: '0em'}}>
      <Routes>
       {activeIndex === 9 ? (
        <Route
         path='/services/surfacing-of-shafts-and-shields-page'
         element={<SurfacingOfShaftsAndShieldsPage />}
        />
       ) : (
        <></>
       )}
      </Routes>
     </div>
    </Box>
   </Stack>
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
     устройство после ремонта. Мы готовы работать как с бытовыми устройствами , так и с промышленным
     оборудованием.
    </Typography>
   </p>
  </div>
 );
}