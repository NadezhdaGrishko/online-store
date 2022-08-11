import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
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
          border: '2px solid #0156FF',
          textTransform: 'none',
          fontSize: '14px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px',
          },
          paddingLeft: '0px',
          paddingRight: '0px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          paddingLeft: '22px',
          paddingRight: '22px',
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          fontSize: '10px',
        }
      }
    }

  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 376,
      md: 768,
      lg: 1200,
      xl: 1536,
    }
  }
});

const darkTheme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    mode: 'dark',

    primary: {
      main: '#0156FF', // color 3
      contrastText: '#fff',
    },
    secondary: {
      main: '#01A4FF', // color 4
      contrastText: '#fff',
    },
    lightWhite: {
      main: '#303030', // color 1
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
          border: '2px solid #0156FF',
          textTransform: 'none',
          fontSize: '14px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px',
          },
          paddingLeft: '0px',
          paddingRight: '0px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          paddingLeft: '22px',
          paddingRight: '22px',
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          fontSize: '10px',
        }
      }
    }
  },
    breakpoints: {
    values: {
      xs: 0,
      sm: 376,
      md: 768,
      lg: 1200,
      xl: 1536,
    }
  }
});

const theme = {
  darkTheme,
  lightTheme
}

export default theme