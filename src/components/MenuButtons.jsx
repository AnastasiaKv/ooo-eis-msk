import React from 'react';
import {styled} from '@mui/material/styles';
import {makeStyles} from '@material-ui/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import GridServices from './GridServices';

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

export default function MenuButtons({route}) {
 const classes = useStyles();
 return (
  <div style={{marginTop: '1px', paddingLeft: '6px'}} className={classes.flexGrow}>
   <Stack  direction='row' spacing={4}>
    <Button
    sx={{bgcolor: '#b1b1b1'}}
     className={classes.button}
     style={{borderRadius: 0, width: '150px', height: '25px'}}
     variant='contained'
    >
     Главная
    </Button>
    <Button
     className={classes.button}
     style={{borderRadius: 0, width: '150px', height: '25px', backgroundColor: '#b1b1b1'}}
     variant='contained'
    >
     О нас
    </Button>
    <Button
     className={classes.button}
     style={{borderRadius: 0, width: '150px', height: '25px', backgroundColor: '#b1b1b1'}}
     variant='contained'
    >
     Стоимость
    </Button>
    <Button
     to='/news'
     className={classes.button}
     style={{borderRadius: 0, width: '150px', height: '25px', backgroundColor: '#b1b1b1'}}
     variant='contained'
    >
     Статьи
    </Button>
    <Button
     className={classes.button}
     style={{borderRadius: 0, width: '150px', height: '25px', backgroundColor: '#b1b1b1'}}
     variant='contained'
    >
     Контакты
    </Button>
   </Stack>
  </div>
 );
}
