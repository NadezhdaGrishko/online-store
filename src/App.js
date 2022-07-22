import { createTheme, ThemeProvider, CssBaseline, IconButton, Paper, Container } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import theme from './theme';
import Layout from './components/layout/Layout.jsx';
//import Products from './pages/Products.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useParams, useNavigate } from 'react-router-dom';

const App = () => {
  const [dark, setDark] = useState(localStorage.theme === 'dark')

  const toggleDark = () => {
    localStorage.theme = !dark ? 'dark' : 'light'
    setDark(!dark)
  }


  const navigate = useNavigate()
  const params = useParams()
  const auth = getAuth()



  // только для Next
  //const router = useRouter()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);

    } else {

      //только для Next
      //if(router.pathname !== './login') {
      //router.push('/login')}
    }
  })

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
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/products/:slug'  /> */}
          </Routes>
        </Container>

      </Layout>
    </ThemeProvider>

  );
}

export default App;
