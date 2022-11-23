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

import img1 from '../../../assets/img/services/1.png';
import img2 from '../../../assets/img/services/2.png';
import img3 from '../../../assets/img/services/3.png';
import img4 from '../../../assets/img/services/4.png';
import img5 from '../../../assets/img/services/5.png';
import img6 from '../../../assets/img/services/6.png';
import img7 from '../../../assets/img/services/7.png';
import img8 from '../../../assets/img/services/8.png';
import img9 from '../../../assets/img/services/9.png';
import img10 from '../../../assets/img/services/10.png';

const useStyles = styled((theme) => ({
 flexGrow: {
  flex: '1',
 },
 Item: {
  padding: theme.spacing(10),
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
   <Paper elevation={3} className={classes.Item}>
    <Stack direction='column' sx={{height: '250px', width: '240px'}}>
     <Typography
      style={{paddingTop: '1.8em', paddingBottom: '1.5em'}}
      sx={{
       lineHeight: '1.1em',
       fontFamily: 'Roboto',

       fontSize: 'medium',
       fontVariant: 'menu',
       textAlign: 'center',
      }}
     >
      <b>
       Ремонт
       <br />
       электродвигателей
      </b>
     </Typography>
     <Box
      style={{filter: 'grayscale(100%)'}}
      sx={{
       paddingLeft: '1.1em',
       width: '8em',
       height: '5.7em' /* Выравнивание по правому краю  */,
       margin: '-5px 0px 0px 9px',
      }}
      loading='lazy'
      component='img'
      alt='Ремонт электродвигателя'
      src={img1}
     />
    </Stack>
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
   <Paper elevation={3} className={classes.Item}>
    <Stack direction='column' sx={{height: '250px', width: '240px'}}>
     <Typography
      style={{paddingTop: '1.8em', paddingBottom: '1.9em'}}
      sx={{
       lineHeight: '1.1em',
       fontFamily: 'Roboto',

       fontSize: 'medium',
       fontVariant: 'menu',
       textAlign: 'center',
      }}
     >
      <b>
       Ремонт
       <br />
       генераторов
      </b>
     </Typography>
     <Box
      style={{filter: 'grayscale(100%)'}}
      sx={{
       paddingLeft: '1.1em',
       width: '8.7em',
       height: '5.2em' /* Выравнивание по правому краю  */,
       margin: '-10px 0px 0px 1px',
      }}
      loading='lazy'
      component='img'
      alt='Ремонт генераторов'
      src={img2}
     />
    </Stack>
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
   <Paper elevation={3} className={classes.Item}>
    <Stack direction='column' sx={{height: '250px', width: '240px'}}>
     <Typography
      style={{paddingTop: '1.8em', paddingBottom: '1.5em'}}
      sx={{
       lineHeight: '1.1em',
       fontFamily: 'Roboto',

       fontSize: 'medium',
       fontVariant: 'menu',
       textAlign: 'center',
      }}
     >
      <b>
       Ремонт
       <br />
       трансформаторов
      </b>
     </Typography>
     <Box
      style={{filter: 'grayscale(100%)'}}
      sx={{
       paddingLeft: '1.1em',
       width: '7.5em',
       height: '6em' /* Выравнивание по правому краю  */,
       margin: '-9px 0px 0px 14px',
      }}
      loading='lazy'
      component='img'
      alt='Ремонт трансформаторов'
      src={img3}
     />
    </Stack>
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
   <Paper elevation={3} className={classes.Item}>
    <Stack direction='column' sx={{height: '250px', width: '240px'}}>
     <Typography
      style={{paddingTop: '1.8em', paddingBottom: '1.5em'}}
      sx={{
       lineHeight: '1.1em',
       fontFamily: 'Roboto',

       fontSize: 'medium',
       fontVariant: 'menu',
       textAlign: 'center',
      }}
     >
      <b>
       Ремонт
       <br />
       холодильных машин
      </b>
     </Typography>
     <Box
      style={{filter: 'grayscale(100%)'}}
      sx={{
       paddingLeft: '1.1em',
       width: '10em',
       height: '8em' /* Выравнивание по правому краю  */,
       margin: '-15px 0px 10px -12px',
      }}
      loading='lazy'
      component='img'
      alt='Ремонт холодильных машин'
      src={img4}
     />
    </Stack>
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
   <Paper elevation={3} className={classes.Item}>
    <Stack direction='column' sx={{height: '250px', width: '240px'}}>
     <Typography
      style={{paddingTop: '1.8em', paddingBottom: '1.5em'}}
      sx={{
       lineHeight: '1.1em',
       fontFamily: 'Roboto',

       fontSize: 'medium',
       fontVariant: 'menu',
       textAlign: 'center',
      }}
     >
      <b>
       Перемотка
       <br />
       электродвигателей
      </b>
     </Typography>
     <Box
      style={{filter: 'grayscale(100%)'}}
      sx={{
       paddingLeft: '1.1em',
       width: '6.5em',
       height: '5em' /* Выравнивание по правому краю  */,
       margin: '0px 0px 0px 25px',
      }}
      loading='lazy'
      component='img'
      alt='Перемотка электродвигателей'
      src={img5}
     />
    </Stack>
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
   <Paper elevation={3} className={classes.Item}>
    <Stack direction='column' sx={{height: '250px', width: '240px'}}>
     <Typography
      style={{paddingTop: '1.8em', paddingBottom: '1.5em'}}
      sx={{
       lineHeight: '1.1em',
       fontFamily: 'Roboto',

       fontSize: 'medium',
       fontVariant: 'menu',
       textAlign: 'center',
      }}
     >
      <b>
       Ремонт
       <br />
       электронагревателей
      </b>
     </Typography>
     <Box
      style={{filter: 'grayscale(100%)'}}
      sx={{
       paddingLeft: '1.1em',
       width: '8em',
       height: '5.8em' /* Выравнивание по правому краю  */,
       margin: '-10px 0px 0px 4px',
      }}
      loading='lazy'
      component='img'
      alt='Ремонт электронагревателей'
      src={img6}
     />
    </Stack>
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
   <Paper elevation={3} className={classes.Item}>
    <Stack direction='column' sx={{height: '250px', width: '240px'}}>
     <Typography
      style={{paddingTop: '1.8em', paddingBottom: '1em'}}
      sx={{
       lineHeight: '1.1em',
       fontFamily: 'Roboto',

       fontSize: 'medium',
       fontVariant: 'menu',
       textAlign: 'center',
      }}
     >
      <b>
       Продажа электронных
       <br />
       компонентов
      </b>
     </Typography>
     <Box
      style={{filter: 'grayscale(100%)'}}
      sx={{
       paddingLeft: '1.1em',
       width: '8em',
       height: '5.5em' /* Выравнивание по правому краю  */,
       margin: '0px 0px 0px 10px',
      }}
      loading='lazy'
      component='img'
      alt=' Продажа электронных компонентов'
      src={img7}
     />
    </Stack>
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
   <Paper elevation={3} className={classes.Item}>
    <Stack direction='column' sx={{height: '250px', width: '240px'}}>
     <Typography
      style={{paddingTop: '1.8em', paddingBottom: '1.5em'}}
      sx={{
       lineHeight: '1.1em',
       fontFamily: 'Roboto',

       fontSize: 'medium',
       fontVariant: 'menu',
       textAlign: 'center',
      }}
     >
      <b>
       Ремонт
       <br />
       электродвигателей
      </b>
     </Typography>
     <Box
      style={{filter: 'grayscale(100%)'}}
      sx={{
       paddingLeft: '1.1em',
       width: '9.4em',
       height: '7.2em' /* Выравнивание по правому краю  */,
       margin: '-25px 0px 0px -9px',
      }}
      loading='lazy'
      component='img'
      alt='Ремонт плат'
      src={img8}
     />
    </Stack>
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
   <Paper elevation={3} className={classes.Item}>
    <Stack direction='column' sx={{height: '250px', width: '240px'}}>
     <Typography
      style={{paddingTop: '1.8em', paddingBottom: '1.5em'}}
      sx={{
       lineHeight: '1.1em',
       fontFamily: 'Roboto',

       fontSize: 'medium',
       fontVariant: 'menu',
       textAlign: 'center',
      }}
     >
      <b>
       ТО и ремонт
       <br />
       электрооборудования
       <br />
       пассажирских вагонов
      </b>
     </Typography>
     <Box
      style={{filter: 'grayscale(100%)'}}
      sx={{
       color: 'transparent',
       paddingLeft: '1.1em',
       width: '8.4em',
       height: '4.5em' /* Выравнивание по правому краю  */,
       margin: '-2px 0px 0px 10px',
      }}
      loading='lazy'
      component='img'
      alt='ТО и ремонт электрооборудования пассажирских вагонов'
      src={img9}
     />
    </Stack>
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
   <Paper elevation={3} className={classes.Item}>
    <Stack direction='column' sx={{height: '250px', width: '240px'}}>
     <Typography
      style={{paddingTop: '1.8em', paddingBottom: '1.5em'}}
      sx={{
       lineHeight: '1.1em',
       fontFamily: 'Roboto',

       fontSize: 'medium',
       fontVariant: 'menu',
       textAlign: 'center',
      }}
     >
      <b>
       Наплавка валов и щитов
       <br />
       электрических машин
      </b>
     </Typography>
     <Box
      style={{filter: 'grayscale(100%)'}}
      sx={{
       paddingLeft: '1.1em',
       width: '8.7em',
       height: '5.3em' /* Выравнивание по правому краю  */,
       margin: '0px 0px 0px 1px',
      }}
      loading='lazy'
      component='img'
      alt='  Наплавка валов и щитов электрических машин'
      src={img10}
     />
    </Stack>
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
       paddingLeft: '3em',
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
       paddingLeft: '1em',
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
    <Box sx={{flexGrow: 1, paddingLeft: '1em'}}>
     <Stack direction='row' spacing={1}>
      <Page1
       title='Ремонт электродвигателей'
       isActive={activeIndex === 0}
       onShow={() => (activeIndex === 0 ? setActiveIndex(10) : setActiveIndex(0))}
       visability={() => setVisability(true)}
       classes={classes}
      />
      <Page2
       title='Ремонт генераторов'
       isActive={activeIndex === 1}
       onShow={() => (activeIndex === 1 ? setActiveIndex(10) : setActiveIndex(1))}
       classes={classes}
      />
      <Page3
       title='Ремонт трансформаторов'
       isActive={activeIndex === 2}
       onShow={() => (activeIndex === 2 ? setActiveIndex(10) : setActiveIndex(2))}
       classes={classes}
      />
     </Stack>
     <div style={{marginLeft: '1.2em', marginBottom: 5, marginTop: '0.2em', marginRight: '0em'}}>
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
       title='Ремонт холодильных машин и компрессоров'
       isActive={activeIndex === 3}
       onShow={() => (activeIndex === 3 ? setActiveIndex(10) : setActiveIndex(3))}
       classes={classes}
      />
      <Page5
       title='Ремонт и перемотка двигателей'
       isActive={activeIndex === 4}
       onShow={() => (activeIndex === 4 ? setActiveIndex(10) : setActiveIndex(4))}
       classes={classes}
      />
      <Page6
       title='Ремонт электронагревателей'
       isActive={activeIndex === 5}
       onShow={() => (activeIndex === 5 ? setActiveIndex(10) : setActiveIndex(5))}
       classes={classes}
      />
     </Stack>
     <div style={{marginLeft: '1.2em', marginBottom: 5, marginTop: '0em', marginRight: '0em'}}>
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
       title='Продажа электрокомпонентов'
       isActive={activeIndex === 6}
       onShow={() => (activeIndex === 6 ? setActiveIndex(10) : setActiveIndex(6))}
       classes={classes}
      />
      <Page8
       title='Ремонт плат и электронных блоков'
       isActive={activeIndex === 7}
       onShow={() => (activeIndex === 7 ? setActiveIndex(10) : setActiveIndex(7))}
       classes={classes}
      />
      <Page9
       title='ТО и ремонт электрооборудования пассажирских вагонов'
       isActive={activeIndex === 8}
       onShow={() => (activeIndex === 8 ? setActiveIndex(10) : setActiveIndex(8))}
       classes={classes}
      />
     </Stack>
     <div style={{marginLeft: '1.2em', marginBottom: 5, marginTop: '0.2em', marginRight: '0em'}}>
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
     <Stack direction='row' sx={{paddingRight: '2.9em'}} spacing={2} justifyContent='center'>
      <Page10
       title='Наплавка валов и щитов'
       isActive={activeIndex === 9}
       onShow={() => (activeIndex === 9 ? setActiveIndex(10) : setActiveIndex(9))}
       classes={classes}
      />
     </Stack>
     <div style={{marginLeft: '1.5em', marginBottom: 5, marginTop: '0.4em', marginRight: '0em'}}>
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
       paddingLeft: '1em',
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
