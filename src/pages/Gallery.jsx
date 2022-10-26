import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import {Stack} from '@mui/system';
import image1 from '../assets/img/empty/Coming-Soon1.png';

import CircleIcon from '@mui/icons-material/Circle';

const componentStyle = {
 color: '#3c3c3c',
 paddingTop: '15px',
 paddingBottom: '15px',
 paddingRight: '53rem',
 paddingLeft: '37px',
};

const headerStyle = {
 fontFamily: 'Furore',
 fontSize: '23px',
 color: '#292929',
};
const bodyStyle = {
 fontFamily: 'Roboto',
 fontSize: '14px',
 display: 'block',
 textAlign: 'justify',
 maxWidth: '1000px',
};

const body2Style = {
 fontFamily: 'Roboto',
 fontSize: '14px',
 display: 'block',
 textAlign: 'justify',
 maxWidth: '1000px',
};

export default function Gallery() {
 return (
  <main className='ees-content'>
   <Stack sx={{   paddingLeft: '5.6em', paddingTop: '10em',   paddingBottom: '15em',}}>
    <Box
     sx={{
      paddingTop: '5em',
      paddingRight: '4em',
      paddingLeft: '4em',
      paddingBottom: '5em',
      marginRight: 0,
      height: '22em',

      width: '30em',
     }}
     component='img'
     alt='empty page'
     src={image1}
    />
   </Stack>
  </main>
 );
}
