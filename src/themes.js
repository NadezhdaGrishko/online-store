import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0156FF', // color 3
      contrastText: '#fff',
    },
    secondary: {
      main: '#01A4FF', // color 4
      contrastText: '#fff',
    },
    lightWhite: {
      main: '#F5F7FF', // color 1
    },
    gray: {
      main: '#A2A6B0', // color 5
    },
    lightGray: {
      main: '#CACDD8', // color 6
    },
    darkGray: {
      main: '#666666', // color 10
    },
    error: {
      main: '#C94D3F', // color 8
    },
    success: {
      main: '#78A962', // color 9
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          border: '2px solid'

        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // secondary: {
    //   main: '#f44336',
    // },
    // error: {
    //   main: '#f44336',
    // },
    // warning: {
    //   main: '#f44336',
    // },
    // info: {
    //   main: '#f44336',
    // },
    // success: {
    //   main: '#f44336',
    // }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          border: '2px solid'

        },
      },
    },
  },
});

const themes = {
  darkTheme,
  lightTheme
}

export default themes