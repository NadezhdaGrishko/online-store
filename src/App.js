import { createTheme, ThemeProvider, CssBaseline, IconButton, Paper, Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Catalog from './pages/products/Catalog.jsx';
import theme from './theme';
import Layout from './components/layout/Layout.jsx';
//import Products from './pages/Products.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import UserAccount from './pages/UserAccount.jsx';

import { useContext } from 'react';
import Context from './context/Context';
import ContactUs from './pages/ContactUs.jsx';
import Register from './pages/Register.jsx';

const App = () => {
  const ctx = useContext(Context)
  const [dark, setDark] = useState(localStorage.theme === 'dark')

  const toggleDark = () => {
   localStorage.theme = !dark ? 'dark' : 'light'
     setDark(!dark)
   }


  // только для Next
  //const router = useRouter()

  //const [isUser, setIsUser] = useState(false)
  const auth = getAuth()


  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(auth);
      //console.log(user);
      ctx.setIsUser(true)

    } else {
      //ЭТО ТОЖЕ НУЖНО!!
      ctx.setIsUser(false)
      //console.log(user);
      //только для Next - делаем redirect
      //if(router.pathname !== './login') {
      //router.push('/login')}
    }
  })
  },[])
  

  return (

    <ThemeProvider theme={ctx.dark ? theme.darkTheme : theme.lightTheme}>
      <CssBaseline />
      <Layout 
      //dark={dark} toggleDark={toggleDark} 
      //isUser={isUser}
      >
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
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />    
            <Route path='/register' element={<Register />} /> 
            <Route path='/contacts' element={<ContactUs />} />        
            <Route path='/userAccount' element={<UserAccount />} />
            <Route path='/products/:slug' element={<Catalog />} />
            
          </Routes>
        </Container>

      </Layout>
    </ThemeProvider>

  );
}

export default App;
