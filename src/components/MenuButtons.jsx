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
   backgroundColor: '#b1b1b1',
   color: '#fff',
  },
 },
});

export default function MenuButtons({route}) {
 const classes = useStyles();
 return (
  <div style={{marginTop: '1px', paddingLeft: '6px'}} className={classes.flexGrow}>
   <Stack direction='row' spacing={4}>
    <Button
     className={classes.button}
     style={{borderRadius: 0, width: '150px', height: '25px', backgroundColor: '#b1b1b1'}}
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
   <Stack direction='row' spacing={0}>
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
   </Stack>
  </div>
 );
}
