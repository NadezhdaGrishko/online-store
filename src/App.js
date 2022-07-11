import { createTheme, ThemeProvider, CssBaseline, Paper, Container } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import themes from './themes';
import Layout from './components/layout/Layout.jsx';
import Products from './pages/Products.jsx';

const App = () => {
  const [dark, setDark] = useState(localStorage.theme === 'dark')

  const toggleDark = () => {
    localStorage.theme = !dark ? 'dark' : 'light'
    setDark(!dark)
  }
  return (

    <ThemeProvider theme={dark ? themes.darkTheme : themes.lightTheme}>
      <CssBaseline />
      <Layout dark={dark} toggleDark={toggleDark}>
        {/* <Navbar dark={dark} toggleDark={toggleDark} /> */}


        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products/:slug' element={<Products />} />
        </Routes>


      </Layout>
    </ThemeProvider>

  );
}

export default App;
