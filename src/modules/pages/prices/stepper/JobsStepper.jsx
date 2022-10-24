import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {createTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import {withStyles} from '@material-ui/core/styles';
import {useStyles} from './useStyles';

const steps = [
 'Предварительная диагностика',
 'Разборка',
 'Заключительная дефектация',
 'Замена обмотки и пропитка',
 'Ремонт и сборка',
 'Испытательные мероприятия',
];
const divStyle = {flexGrow: 1, width: '36em'};

const outerTheme = createTheme({
 palette: {
  primary: {
   main: '#e53e3e',
  },
  secondary: {
   main: '#e53e3e',
  },
 },
});
export default function HorizontalLabelPositionBelowStepper() {
 let theme = createTheme();
 theme = responsiveFontSizes(theme);

 return (
  <div style={divStyle}>
   <Box sx={{width: '100%'}}>
    <Stepper
     activeStep={0}
     alternativeLabel={5}
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
     {steps.map((label) => (
      <Step key={label}>
       <ThemeProvider theme={outerTheme}>
        <StepLabel
         sx={{
          '& .MuiStepLabel-iconContainer Mui-active MuiStepLabel-alternativeLabel css-vnkopk-MuiStepLabel-iconContainer':
           {width: '40px', height: '40px', color: '#e53e3e'},
         }}
        >
         {label}
        </StepLabel>
       </ThemeProvider>
      </Step>
     ))}
    </Stepper>
   </Box>
  </div>
 );
}
