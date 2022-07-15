import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from '@mui/material';

const Layout = ({ children }, props) => {
  const { dark, toggleDark } = props
  return (
    <>
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout