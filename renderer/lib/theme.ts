import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main:  '#00b0ff'//'#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
        },
        outlined: {
          color:'gray'
        }
        
      }
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          height : 43
        }
      }
    }
  }
});

export default theme;