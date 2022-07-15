import { createTheme, ThemeProvider, CssBaseline, IconButton, Paper, Container } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import theme from './theme';
import Layout from './components/layout/Layout.jsx';
//import Products from './pages/Products.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const App = () => {
  const [dark, setDark] = useState(localStorage.theme === 'dark')

  const toggleDark = () => {
    localStorage.theme = !dark ? 'dark' : 'light'
    setDark(!dark)
  }
  return (

    <ThemeProvider theme={dark ? theme.darkTheme : theme.lightTheme}>
      <CssBaseline />
      <Layout dark={dark} toggleDark={toggleDark}>
        {/* <Navbar dark={dark} toggleDark={toggleDark} /> */}
        <Container
          sx={{
            maxWidth: {
              xs: '376px',
              //sm: '376px',
              md: '1200px',
              lg: '1400px',
              //xl: '1400px',
            }
          }}
        // sx={{mt: {xs: theme.lightTheme.spacing(8), sm: theme.lightTheme.spacing(10), lg: theme.lightTheme.spacing(12)}}} 
        >
          <IconButton onClick={toggleDark}
            sx={{
              // ml: 'auto',
              //color: 'white'
            }}>
            {dark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:slug' element={<About />} />
          </Routes>
        </Container>

      </Layout>
    </ThemeProvider>

  );
}

export default App;
