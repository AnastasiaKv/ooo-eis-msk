import * as React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';

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

export default function MyThemeProvider({children}) {
 return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
