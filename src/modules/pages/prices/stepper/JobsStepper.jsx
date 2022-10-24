import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {color} from '@mui/system';
import {withStyles} from '@material-ui/core/styles';
import {useStyles} from './useStyles';
const steps = [
 'Диагностика',
 'Демонтаж начинки двигателя',
 'Замена обмотки и пропитка',
 'Испытания',
 'Выдача двигателя',
];
const divStyle = {flexGrow: 1, width: '36em'};

export default function HorizontalLabelPositionBelowStepper() {
 return (
  <>
   <div style={divStyle}>
    <Box sx={{width: '100%'}}>
     <Stepper activeStep={0} alternativeLabel={5} ic>
      {steps.map((label) => (
       <Step key={label}>
        <StepLabel
         sx={{
          '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
           width: '40px',
           height: '40px',
           color: '#e53e3e',
          },
          '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root': {
           width: '40px',
           height: '40px',
          },
         }}
        >
         {label}
        </StepLabel>
       </Step>
      ))}
     </Stepper>
    </Box>
   </div>
  </>
 );
}
