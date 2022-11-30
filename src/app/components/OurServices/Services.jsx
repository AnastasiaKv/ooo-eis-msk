import React, {useState, useRef} from 'react';
import {styled} from '@mui/material/styles';
import '../../../assets/css/styles-custom.css';
import '../../../assets/css/decor-top.css';
import '../../../assets/css/decor-bottom.css';
import {Box, Typography, Paper} from '@mui/material';
import {Stack} from '@mui/system';
import {Routes, Route, useMatch} from 'react-router-dom';
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
   <Box
    component='img'
    width='90'
    className={!visability ? 'decor-top' : 'decor-top-hidden'}
    src={decorTop}
    alt='DecorTop'
   />
  </div>
 );
}
function DecorBottom({visability}) {
 return (
  <div>
   <Box
    component='img'
    className={!visability ? 'decor-bottom' : 'decor-bottom-hidden'}
    src={decorBottom}
    alt='DecorBottom'
   />
  </div>
 );
}

function ServiceLinkButton({linkUrl, image}) {
 const classes = useStyles();
 const isUrlExpected = useMatch(linkUrl);
 console.log('matchCurrent: ' + isUrlExpected);
 return (
  <LinkButton to={isUrlExpected ? '/' : linkUrl}>
   {isUrlExpected && <DecorTop />}
   <Paper sx={{boxShadow: 'none', width: '250px'}} className={classes.Item}>
    <Box sx={{height: '250px', width: '250px'}} component='img' alt='button' src={image} />
   </Paper>
   {isUrlExpected && <DecorBottom />}
  </LinkButton>
 );
}

function Page1() {
 const classes = useStyles();
 const expectedUrl = '/services/repair-motors-page';
 const isUrlExpected = useMatch(expectedUrl);
 console.log('matchCurrent: ' + isUrlExpected);
 return (
  <LinkButton to={isUrlExpected ? '/' : expectedUrl}>
   {isUrlExpected && <DecorTop />}
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
   {isUrlExpected && <DecorBottom />}
  </LinkButton>
 );
}

function Page2() {
 const classes = useStyles();
 const expectedUrl = '/services/generator-repair-page';
 const isUrlExpected = useMatch(expectedUrl);
 return (
  <LinkButton to={isUrlExpected ? '/' : expectedUrl}>
   {isUrlExpected && <DecorTop />}
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
   {isUrlExpected && <DecorBottom />}
  </LinkButton>
 );
}

function Page3() {
 const classes = useStyles();
 const expectedUrl = 'services/repair-transformers-page';
 const isUrlExpected = useMatch(expectedUrl);
 return (
  <LinkButton to={isUrlExpected ? '/' : expectedUrl}>
   {isUrlExpected && <DecorTop />}
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
      style={{
       paddingLeft: '1.1em',
       width: '7em' /* Выравнивание по правому краю  */,
       height: '5.2em',
       margin: '-6px 0px 0px 17px',
       filter: 'grayscale(100%)',
      }}
      loading='lazy'
      component='img'
      alt='Ремонт трансформаторов'
      src={img3}
     />
    </Stack>
   </Paper>
   {isUrlExpected && <DecorBottom />}
  </LinkButton>
 );
}

function Page4() {
 const classes = useStyles();
 const expectedUrl = '/services/refrigeration-machine-repair-page';
 const isUrlExpected = useMatch(expectedUrl);
 return (
  <LinkButton to={isUrlExpected ? '/' : expectedUrl}>
   {isUrlExpected && <DecorTop />}
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
   {isUrlExpected && <DecorBottom />}
  </LinkButton>
 );
}
function Page5() {
 const classes = useStyles();
 const expectedUrl = '/services/rewinding-motors-page';
 const isUrlExpected = useMatch(expectedUrl);
 return (
  <LinkButton to={isUrlExpected ? '/' : expectedUrl}>
   {isUrlExpected && <DecorTop />}
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
   {isUrlExpected && <DecorBottom />}
  </LinkButton>
 );
}
function Page6() {
 const classes = useStyles();
 const expectedUrl = '/services/repair-of-electric-heaters-page';
 const isUrlExpected = useMatch(expectedUrl);
 return (
  <LinkButton to={isUrlExpected ? '/' : expectedUrl}>
   {isUrlExpected && <DecorTop />}
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
   {isUrlExpected && <DecorBottom />}
  </LinkButton>
 );
}
function Page7() {
 const classes = useStyles();
 const expectedUrl = '/services/sale-of-electrical-components-page';
 const isUrlExpected = useMatch(expectedUrl);
 return (
  <LinkButton to={isUrlExpected ? '/' : expectedUrl}>
   {isUrlExpected && <DecorTop />}
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
   {isUrlExpected && <DecorBottom />}
  </LinkButton>
 );
}
function Page8() {
 const classes = useStyles();
 const expectedUrl = '/services/repair-of-boards-and-blocks-page';
 const isUrlExpected = useMatch(expectedUrl);
 return (
  <LinkButton to={isUrlExpected ? '/' : expectedUrl}>
   {isUrlExpected && <DecorTop />}
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
   {isUrlExpected && <DecorBottom />}
  </LinkButton>
 );
}
function Page9() {
 const classes = useStyles();
 const expectedUrl = '/services/maintenance-and-repair-of-passenger-cars-page';
 const isUrlExpected = useMatch(expectedUrl);
 return (
  <LinkButton to={isUrlExpected ? '/' : expectedUrl}>
   {isUrlExpected && <DecorTop />}
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
   {isUrlExpected && <DecorBottom />}
  </LinkButton>
 );
}
function Page10() {
 const classes = useStyles();
 const expectedUrl = '/services/surfacing-of-shafts-and-shields-page';
 const isUrlExpected = useMatch(expectedUrl);
 return (
  <LinkButton to={isUrlExpected ? '/' : expectedUrl}>
   {isUrlExpected && <DecorTop />}
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
      alt='Наплавка валов и щитов электрических машин'
      src={img10}
     />
    </Stack>
   </Paper>
   {isUrlExpected && <DecorBottom />}
  </LinkButton>
 );
}

export default function Gridservices() {
 const ref = useRef({
  renderCount: 0,
 });
 const classes = useStyles();

 ref.current.renderCount++;
 console.log('renderCount: ' + ref.current.renderCount);

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
      <Page1 />
      <Page2 />
      <Page3 />
     </Stack>
     <div style={{marginLeft: '1.8em', marginBottom: 5, marginTop: '0em', marginRight: '0em'}}>
      <Routes>
       <Route path='/services/repair-motors-page' element={<RepairMotorsPage />} />
       <Route path='/services/generator-repair-page' element={<GeneratorRepairPage />} />
       <Route path='/services/repair-transformers-page' element={<RepairTransformersPage />} />
      </Routes>
     </div>
     <Stack direction='row' spacing={1}>
      <Page4 />
      <Page5 />
      <Page6 />
     </Stack>
     <div style={{marginLeft: '1.2em', marginBottom: 5, marginTop: '0em', marginRight: '0em'}}>
      <Routes>
       <Route
        path='/services/refrigeration-machine-repair-page'
        element={<RefrigerationMachineRepair />}
       />
       <Route path='/services/rewinding-motors-page' element={<RewindingMotorsPage />} />
       <Route
        path='/services/repair-of-electric-heaters-page'
        element={<RepairOfElectricHeatersPage />}
       />
      </Routes>
     </div>
     <Stack direction='row' spacing={1}>
      <Page7 />
      <Page8 title='Ремонт плат и электронных блоков'/>
      <Page9 />
     </Stack>
     <div style={{marginLeft: '1.2em', marginBottom: 5, marginTop: '0.2em', marginRight: '0em'}}>
      <Routes>
       <Route
        path='/services/sale-of-electrical-components-page'
        element={<SaleOfElectricalComponentsPage />}
       />
       <Route
        path='/services/repair-of-boards-and-blocks-page'
        element={<RepairOfBoardsAndBlocksPage />}
       />
       <Route
        path='/services/maintenance-and-repair-of-passenger-cars-page'
        element={<TORepairOfPassengerCarsPage />}
       />
      </Routes>
     </div>
     <Stack direction='row' sx={{paddingRight: '2.9em'}} spacing={2} justifyContent='center'>
      <Page10 />
     </Stack>
     <div style={{marginLeft: '1.5em', marginBottom: 5, marginTop: '0.4em', marginRight: '0em'}}>
      <Routes>
       <Route
        path='/services/surfacing-of-shafts-and-shields-page'
        element={<SurfacingOfShaftsAndShieldsPage />}
       />
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
