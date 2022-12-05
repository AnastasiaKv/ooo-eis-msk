import * as React from 'react';
/* import {styled} from '@mui/material/styles'; */
import Slider from './ImageSlider/Slider';

import Box from '@mui/material/Box';
/* import Paper from '@mui/material/Paper'; */
import Grid from '@mui/material/Unstable_Grid2';
import NavTabs from './NavMenu';

/* const Item = styled(Paper)(({theme}) => ({
 backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
 ...theme.typography.body2,
 padding: theme.spacing(1),
 textAlign: 'center',
 color: theme.palette.text.secondary,
})); */

export default function MediaBlock() {
 return (
  <>
   <Box
    sx={(theme) => ({
     display: 'flex',
     flexDirection: 'column',
     gap: 3,

     width: 'auto',
     '& > div': {
      overflow: 'hidden',
      '&::-webkit-scrollbar': {height: 10, WebkitAppearance: 'none'},
      '&::-webkit-scrollbar-thumb': {
       borderRadius: 8,
       border: '2px solid',
       borderColor: theme.palette.mode === 'dark' ? '' : '#E7EBF0',
       backgroundColor: 'rgba(0 0 0 / 0.5)',
      },
     },
    })}
   >
    <div className='ees-top-media'>
     <Grid container spacing={3} disableEqualOverflow sx={{flexGrow: 1}}>
      <Grid xs={12}>
       <Slider />
      </Grid>
     </Grid>
    </div>
    <div>
     <Grid container spacing={0} disableEqualOverflow sx={{flexGrow: 1}}>
      <Grid xs={12}>
       <NavTabs />
      </Grid>
     </Grid>
    </div>
   </Box>
  </>
 );
}
