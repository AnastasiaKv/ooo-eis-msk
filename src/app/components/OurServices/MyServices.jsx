import * as React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Services from '../OurServices/Services';

const theme = createTheme({
 components: {
  MuiTypography: {
   styleOverrides: {
    root: {
     textSizeAdjust: 'none',
     fontSize: '1rem',
    },
   },
  },
 },
});

export default function MyServices() {
  return (
    <ThemeProvider theme={theme}>
      <Services />
    </ThemeProvider>
  );
}