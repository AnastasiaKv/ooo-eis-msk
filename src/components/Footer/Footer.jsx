import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RedLine from './Decor/RedLine';
import LeftDecor from './Decor/DecorLeft';
import RightDecor from './Decor/DecorRight';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';

const leftPadding = {
  paddingLeft: '8cm',
};
const spacing_10cm = {
  paddingLeft: '10cm',
};
const spacing_40px = {
  paddingLeft: '40px',
};

const useStyles = makeStyles((theme) => ({
  customizeToolbar: {
    height: 90,
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    
      <div className='ees-footer-content'>
        <LeftDecor />
        <RightDecor />
        {/* <RedLine /> */}
        {/* Витя, AppBar генерит тег <header>, а тебе нужен тут просто <div> */}
        <AppBar elevation={0} sx={{bgcolor: 'transparent'}} position='static'>
          <Toolbar className={classes.customizeToolbar}>
            <div>
              {' '}
              <Typography variant='caption'>©Copyright</Typography>
            </div>
            <div style={spacing_10cm}>
              {' '}
              <Typography variant='caption'>Карта сайта</Typography>
            </div>
            <div style={spacing_40px}>
              {' '}
              <Typography variant='caption'>Политика</Typography>
            </div>
            <div style={spacing_40px}>
              {' '}
              <Typography variant='caption'>Конфеденциальность</Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
  );
}
