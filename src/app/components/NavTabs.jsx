import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import {makeStyles} from '@material-ui/styles';
import Typography from '@mui/material/Typography';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import GridServices from '../../components/GridServices';
import Prices from '../pages/actions/Prices';
import News from '../pages/actions/News';

const buttonStyle = {
 borderRadius: '1px',
 width: '151.5px',
 height: '30px',
};
//
const useStyles = makeStyles({
 flexGrow: {
  flex: '1',
 },
 button: {
  backgroundColor: '#b1b1b1',
  color: '#fff',
  '&:hover': {
   backgroundColor: 'rgba(241, 43, 41, 1)',
   color: '#fff',
  },
 },
});

function LinkTab(props) {
 return (
  <Tab
   sx={{bgcolor: 'GrayText', minWidth: '100px', minHeight: '25px'}}
   component={Link}
   onClick={(event) => {
    event.preventDefault();
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
      to='/'
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
      to='/prices'
      className={classes.button}
      style={buttonStyle}
     />
     <LinkTab
      onClick={value}
      label='Статьи'
      to='/news'
      className={classes.button}
      style={buttonStyle}
     />
     <LinkTab
      onClick={value}
      label='Контакты'
      to='/contacts'
      className={classes.button}
      style={buttonStyle}
     />
    </Stack>
   </Tabs>
   <Routes>
    <Route path='/' element={<GridServices />} />
    <Route path='/about' element={<></>} />
    <Route path='/prices' element={<Prices />} />
    <Route path='/news' element={<News />} />
    <Route path='/contacts' element={<></>} />
   </Routes>
  </div>
 );
}
