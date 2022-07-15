import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Layout = ({ children }, props) => {
  const { dark, toggleDark } = props
  return (
    <>
      <Navbar />
      {/* <IconButton onClick={toggleDark}
        sx={{
          // ml: 'auto',
          //color: 'white'
        }}>
        {dark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout