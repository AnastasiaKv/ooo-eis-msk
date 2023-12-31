import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import {makeStyles} from '@mui/styles';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import About from '../../pages/About';
import Contacts from '../../pages/Contacts';
import Prices from '../../pages/Prices';
import Gallery from '../../pages/Gallery';
import Main from '../../pages/Main';
/* import ServerModal from '../core/errors/ServerModal'; */

import Page1 from './OurServices/pages/1_RepairMotorsPage';
import Page2 from './OurServices/pages/2_GeneratorRepairPage';
import Page3 from './OurServices/pages/3_RepairTransformersPage';
import Page4 from './OurServices/pages/4_RefrigerationMachineRepairPage';
import Page5 from './OurServices/pages/5_RewindingMotorsPage';
import Page6 from './OurServices/pages/6_RepairOfElectricHeatersPage';
import Page7 from './OurServices/pages/7_SaleOfElectricalComponentsPage';
import Page8 from './OurServices/pages/8_RepairOfBoardsAndBlocksPage';
import Page9 from './OurServices/pages/9_TORepairOfPassengerCarsPage';
import Page10 from './OurServices/pages/10_SurfacingOfShaftsAndShieldsPage';

import Error404 from '../core/errors/Error404';

const buttonStyle = {
 borderRadius: 2,
 width: '151.5px',
 height: '30px',
};

const useStyles = makeStyles({
 flexGrow: {
  flex: '1',
 },
 button: {
  backgroundColor: '#808080',
  color: '#F1F1F1',
  '&:hover': {
   backgroundColor: '#f00000',
   color: '#F1F1F1',
  },
 },
});

const LinkTab = (props) => {
 return (
  <Tab
   sx={{
    textTransform: 'inherit',
    bgcolor: '#808080',
    minWidth: '100px',
    minHeight: '25px',
   }}
   component={Link}
   /* onClick={(event) => {
             event.preventDefault();
             console.log(event.target);
             console.log(event.preventDefault());
            }} */
   {...props}
  />
 );
};
export default function NavTabs() {
 /*  const [value, setValue] = React.useState(0); */

 /*  const handleChange = (event, newValue) => {
  setValue(newValue);
 }; */
 const classes = useStyles();

 return (
  <div style={{color: '#FFFFFF'}}>
   <Tabs
    value={0}
    /* onChange={handleChange} */
    sx={{
     '.MuiTabs-indicator': {
      left: '0px',
      width: 'auto',
      height: '0px',
     },
    }}
    /* indicator='' */
   >
    <Stack sx={{marginLeft: '-35px', paddingLeft: '0px'}} direction='row' spacing={4}>
    <LinkTab
     /* onClick={value} */
     /* value={0} */
     label='Главная'
     to='/'
     className={classes.button}
     style={buttonStyle}
    />
    <LinkTab
     /* onClick={value} */
     /* value={1} */
     label='О нас'
     to='/about'
     className={classes.button}
     style={buttonStyle}
    />
    <LinkTab
     /* onClick={value} */
     /* value={2} */
     label='Стоимость'
     to='/prices'
     className={classes.button}
     style={buttonStyle}
    />
    <LinkTab
     /* onClick={value} */
     /* value={3} */
     label='Галерея'
     to='/gallery'
     className={classes.button}
     style={buttonStyle}
    />
    <LinkTab
     /* onClick={value} */
     /* value={4} */
     label='Контакты'
     to='/contacts'
     className={classes.button}
     style={buttonStyle}
    />
    </Stack>
   </Tabs>
   <Routes>
    <Route exact path='/' element={<Main />}>
     <Route index path='/' element={<Main />} />
     <Route exact path='/services/repair-motors-page' element={<Page1 />} />
     <Route exact path='/services/generator-repair-page' element={<Page2 />} />
     <Route exact path='/services/repair-transformers-page' element={<Page3 />} />
     <Route exact path='/services/refrigeration-machine-repair-page' element={<Page4 />} />
     <Route exact path='/services/rewinding-motors-page' element={<Page5 />} />
     <Route exact path='/services/repair-of-electric-heaters-page' element={<Page6 />} />
     <Route exact path='/services/sale-of-electrical-components-page' element={<Page7 />} />
     <Route exact path='/services/repair-of-boards-and-blocks-page' element={<Page8 />} />
     <Route
      exact
      path='/services/maintenance-and-repair-of-passenger-cars-page'
      element={<Page9 />}
     />
     <Route exact path='services/surfacing-of-shafts-and-shields-page' element={<Page10 />} />
     <Route path='*' element={<Error404 />} />
    </Route>
    <Route exact path='/about' element={<About />} />
    <Route exact path='/prices' element={<Prices />} />
    <Route exact path='/gallery' element={<Gallery />} />
    <Route exact path='/contacts' element={<Contacts />} />
    <Route path='*' element={<Error404 />} />
   </Routes>
  </div>
 );
}

/* <Route path='repair-motors-page' element={<RepairMotorsPage />} />
    <Route path='generator-repair-page' element={<GeneratorRepairPage />} />
    <Route path='repair-transformers-page' element={<RepairTransformersPage />} /> */
