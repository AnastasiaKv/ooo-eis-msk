import React from 'react';
/* import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; */
/* import {Stack} from '@mui/system'; */
/* import ButtonBase from '@mui/material/ButtonBase'; */
import Box from '@mui/material/Box';
import {Typography, Stack} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const divStyle = {
 color: '#FFFFFF',
};
const textStyle = {
 fontFamily: 'Roboto',
 display: 'block',
 textAlign: 'justify',
 fontSize: 17,
 lineHeight: '1.7',
 color: '#FFFFFF',
 marginLeft: 0,
};
export default function TrustedBox() {
 return (
  <div style={divStyle}>
   <Box
    style={{
     borderRadius: '2px',
     float: 'right' /* Выравнивание по правому краю  */,
     margin: '2px 0 7px 72px' /* Отступы вокруг картинки */,
     height: '250px',
     width: '420px',
     background:
      'linear-gradient(to left top, #F12B29 0%/*bottom-right color*/,rgba(207, 97, 97, 1) 50% /*middle color*/, #f12b29 100% /*top-left color*/)',
    }}
   >
    <p style={{paddingTop: '24px'}}>
     <ul
      style={{
       paddingLeft: '70px',
       textAlign: 'justify',
       listStyle: 'none',
      }}
     >
      <Typography style={textStyle} variant='caption' component='p'>
       <strong> Нам доверяют. С нами работают.</strong>
      </Typography>
      <Stack direction='row' spacing={3}>
       <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7, color: '#FFFFFF'}} />
       <Typography style={textStyle} variant='caption' component='p'>
        Гарантия и сопровождение
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7, color: '#FFFFFF'}} />
       <Typography style={textStyle} variant='caption' component='p'>
        Срочные ремонтные работы
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7, color: '#FFFFFF'}} />
       <Typography style={textStyle} variant='caption' component='p'>
        Бытовая техника
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7, color: '#FFFFFF'}} />
       <Typography style={textStyle} variant='caption' component='p'>
        Промышленное оборудование
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7, color: '#FFFFFF'}} />
       <Typography style={textStyle} variant='caption' component='p'>
        Документооборот
       </Typography>
      </Stack>
      <Stack direction='row' spacing={3}>
       <CircleIcon style={{margin: '11px 0px 0px 0px', height: 7, color: '#FFFFFF'}} />
       <Typography style={textStyle} variant='caption' component='p'>
        Долгосрочное сотрудничество
       </Typography>
      </Stack>
     </ul>
    </p>
   </Box>
  </div>
 );
}
