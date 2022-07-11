import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }, props) => {
  const {dark, toggleDark}=props
  return (
    <>
      <div>
        
        <Navbar dark={dark} toggleDark={toggleDark}/>
        
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout