import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import {makeStyles} from '@material-ui/styles';
import Typography from '@mui/material/Typography';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import MenuServices from '../components/MenuServices';
import Contacts from '../pages/actions/Contacts';
import Prices from '../pages/actions/Prices';
import News from '../pages/actions/News';
import Main from '../pages/actions/Main';

import Page1 from '../pages/services/1_RepairMotorsPage';
import Page2 from '../pages/services/2_GeneratorRepairPage';
import Page3 from '../pages/services/3_RepairTransformersPage';
import Error404 from '../core/errors/Error404';
import GridServices from '../../components/GridServices';

const buttonStyle = {
 borderRadius: '1px',
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

function LinkTab(props) {
 return (
  <Tab
   sx={{bgcolor: '#808080', minWidth: '100px', minHeight: '25px'}}
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
export default function NavTabs() {
 const [value, setValue] = React.useState(0);

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };
 const classes = useStyles();

 return (
  <div style={{color: '#FFFFFF'}}>
   <Tabs
    onChange={handleChange}
    sx={{
     '.MuiTabs-indicator': {
      left: '0px',
      width: 'auto',
      height: '0px',
     },
    }}
   >
    <Stack sx={{marginLeft: '-35px', paddingLeft: '0px'}} direction='row' spacing={4}>
     <LinkTab
      onClick={value}
      label='Главная'
      to='/service'
      className={classes.button}
      style={buttonStyle}
     />
     <LinkTab
      onClick={value}
      label='О нас'
      to='/about'
      className={classes.button}
      style={buttonStyle}
     />
     <LinkTab
      onClick={value}
      label='Стоимость'
      to='prices'
      className={classes.button}
      style={buttonStyle}
     />
     <LinkTab
      onClick={value}
      label='Статьи'
      to='news'
      className={classes.button}
      style={buttonStyle}
     />
     <LinkTab
      onClick={value}
      label='Контакты'
      to='contacts'
      className={classes.button}
      style={buttonStyle}
     />
    </Stack>
   </Tabs>
   <Routes>
    <Route path='/' element={<Main />} />
    <Route path='service/*' element={<GridServices />}>
     <Route index element={<GridServices />} />
     <Route path='repair-motors-page' element={<Page1 />} />
     <Route path='generator-repair-page' element={<Page2 />} />
     <Route path='repair-transformers-page' element={<Page3 />} />
     <Route path='*' element={<Error404 />} />
    </Route>
    <Route path='/about' element={<></>} />
    <Route path='/prices' element={<Prices />} />
    <Route path='/news' element={<News />} />
    <Route path='/contacts' element={<Contacts />} />
    <Route path='*' element={<Error404 />} />
   </Routes>
  </div>
 );
}

/* <Route path='repair-motors-page' element={<RepairMotorsPage />} />
    <Route path='generator-repair-page' element={<GeneratorRepairPage />} />
    <Route path='repair-transformers-page' element={<RepairTransformersPage />} /> */
