import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {color} from '@mui/system';

const steps = [
 'Диагностика',
 'Демонтаж начинки двигателя',
 'Замена обмотки и пропитка',
 'Испытания',
 'Выдача двигателя',
];
const divStyle = {
 width: '36em',
};
//#f12b29
export default function HorizontalLabelPositionBelowStepper() {
 return (
  <div style={divStyle}>
   <Box sx={{width: '100%'}}>
    <Stepper activeStep={1} alternativeLabel={5}>
     {steps.map((label) => (
      <Step key={label}>
       <StepLabel>{label}</StepLabel>
      </Step>
     ))}
    </Stepper>
   </Box>
  </div>
 );
}
