import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const Img = makeStyles('img')({
     width: '320px',
     borderTopLeftRadius: '4px',
     borderTopRightRadius: '4px'
});


export default function GridItem({ image }) {
     return (
          <Grid item>
               <Paper sx={{ width: 320 }}>
                    <ButtonBase>
                         <Img alt="image" src={image} />
                    </ButtonBase>
                    <Box sx={{ p: 1 }}>
                         <Typography variant="subtitle1">Crowd Prediction</Typography>
                         <Typography variant="caption">
                              Crowd Predictions in Ford to forecast weekly vehicles sale volumes
                              across business units
                         </Typography>
                    </Box>
               </Paper>
          </Grid>
     );
}