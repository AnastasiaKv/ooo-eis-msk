import NeoSansProBold from '../../assets/fonts/NeoSansPro-Bold.otf'
import NeoSansProMedium from '../../assets/fonts/NeoSansPro-Medium.otf'
import NeoSansProRegular from '../../assets/fonts/NeoSansPro-Regular.otf'
import NeoSansProUltra from '../../assets/fonts/NeoSansPro-Ultra.otf'
import NeoSansProLight from '../../assets/fonts/NeoSansPro-Light.otf'
import Furore from '../../assets/fonts/Furore.otf'
import {createTheme} from '@material-ui/core/styles'

const neoSansPro = {
  fontFamily: 'NeoSansPro',
  fontStyle: 'semi-bold',
  fontDisplay: 'swap',
  fontWeight: '600',
  src: `
   local('NeoSansPro'),
   local('NeoSansPro-Regular'),
   local('NeoSansPro-Light'),
   local('NeoSansPro-Medium'),
   local('NeoSansPro-Bold'),
   local('NeoSansPro-Ultra')
   url(${NeoSansProRegular}) format('otf')
 `,
}

const theme = createTheme({
  typography: {
    h6: {
      fontFamily: 'NeoSansPro',
    },
    button: {
      fontFamily: 'NeoSansPro',
    },
    text: {
      fontFamily: 'NeoSansPro',
    },
    typography: {
      fontFamily: ['NeoSansPro'].join(','),
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [neoSansPro],
      },
    },
  },
})

export default theme
