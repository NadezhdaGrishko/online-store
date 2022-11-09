import { createTheme, ThemeProvider, CssBaseline, IconButton, Paper, Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route,useNavigate, Navigate } from 'react-router-dom';
import AboutUs from './pages/AboutUs.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Catalog from './pages/products/Catalog.jsx';
import Product from './pages/products/Product.jsx';
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
import Cart from './pages/Cart.jsx';

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
  const navigate = useNavigate();

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log(auth);
      //console.log(user);
      ctx.setIsUser(true)

    } else {
      ctx.setIsUser(false)
      //console.log(user);
      //только для Next - делаем redirect
      //if(router.pathname !== './login') {
      //router.push('/login')}
    }
  })
  },[])
  

  let isUser = ctx.isUser
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
            // maxWidth: {
            //   xs: '376px',
            //   //sm: '376px',
            //   md: '1200px',
            //   lg: '1400px',
            //   //xl: '1400px',
            // }
          }}
        // sx={{mt: {xs: theme.lightTheme.spacing(8), sm: theme.lightTheme.spacing(10), lg: theme.lightTheme.spacing(12)}}} 
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/login' element={<Login />} />    
            <Route path='/register' element={<Register />} /> 
            <Route path='/contacts' element={<ContactUs />} /> 

            <Route path='/userAccount' element={
            isUser ? (<UserAccount />)
          : (
            <Navigate replace to='/'/>
          )
          } />
            <Route path='/products/:slug' element={<Catalog />} />
            <Route path='/cart' element={<Cart />} />
            
            <Route path='/products/headphones/:productSlug' element={<Product/>} />
            <Route path='/products/usb/:productSlug' element={<Product/>} />
            <Route path='/products/chargets/:productSlug' element={<Product/>} />
            <Route path='/products/powerbank/:productSlug' element={<Product/>} />
            <Route path='/products/adapters/:productSlug' element={<Product/>} />
            <Route path='/products/keyboard/:productSlug' element={<Product/>} />
            
          </Routes>
        </Container>

      </Layout>
    </ThemeProvider>

  );
}

export default App;
