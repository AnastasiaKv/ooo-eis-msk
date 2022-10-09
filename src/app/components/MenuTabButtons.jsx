import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import {makeStyles} from '@material-ui/styles';
import Typography from '@mui/material/Typography';

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
   component='a'
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
    value={value}
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
     <LinkTab label='Главная' href='/' className={classes.button} style={buttonStyle}></LinkTab>
     <LinkTab label='О нас' href='/about' className={classes.button} style={buttonStyle} />
     <LinkTab label='Стоимость' href='/prices' className={classes.button} style={buttonStyle} />
     <LinkTab label='Статьи' href='/news' className={classes.button} style={buttonStyle} />
     <LinkTab label='Контакты' href='/contacts' className={classes.button} style={buttonStyle} />
    </Stack>
   </Tabs>
  </div>
 );
}
