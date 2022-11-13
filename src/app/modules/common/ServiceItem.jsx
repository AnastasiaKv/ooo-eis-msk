import React, {useState} from 'react';
import decorTop from '../../assets/img/Decor/decorTop.png';
import decorBottom from '../../assets/img/Decor/decorBottom.png';
import '../../assets/css/styles-custom.css';

import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Stack} from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

import LinkButton from '../../modules/common/LinkButton';
import {Container} from './ServiceItem.styles';
import Grid from '@mui/material/Grid';
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
 decorTop: {
  position: 'absolute',
  left: '0px',
  top: '0px',
  width: '1920px',
  height: '3291px',
  zIndex: 33,
 },
}));

function DecorTop() {
 return <Box component='img' width='90' className='decor-top' src={decorTop} alt='DecorTop' />;
}
function DecorBottom() {
 return <Box component='img' className='decor-bottom' src={decorBottom} alt='DecorBottom' />;
}
export default function ServiceItem(props) {
 const [isShown, setIsShown] = useState(0);
 const [value, setValue] = useState(0);

 const handleClick = (event, newValue) => {
  setValue(newValue);
  setIsShown((newValue) => !newValue);
 };

 const classes = useStyles();
 return (
  <LinkButton
   key={props.id}
   onClick={handleClick}
   to={props.path}
   sx={{
    bgcolor: '#f56565',
    boxShadow: 3,
    backgroundColor: '#FFFFFF',
    color: '#F1F1F1',
    '&:hover': {
     backgroundColor: '#f56565',
     color: '#F1F1F1',
    },
   }}
  >
   <Grid item key={props.id} sx={{height: '250px', width: '250px'}}>
    {isShown && <DecorTop />}
    <Container
     sx={{
      bgcolor: '#f56565',
      boxShadow: 3,
      backgroundColor: '#FFFFFF',
      color: '#F1F1F1',
      '&:hover': {
       backgroundColor: '#f56565',
       color: '#F1F1F1',
      },
     }}
    >
     <Paper key={props.id} sx={{boxShadow: 'none'}} className={classes.Item}>
      <Box
       sx={{height: '250px', width: '250px'}}
       component='img'
       alt='button'
       src={props.image}
       {...props}
      />
     </Paper>
    </Container>
    {isShown && <DecorBottom />}
   </Grid>
  </LinkButton>
 );
}
