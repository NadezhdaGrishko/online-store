import React, { useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Paper, List, ListItem, ListItemText, Avatar, Drawer } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Contacts from './Contacts';
import Home from '../../pages/Home'
import About from '../../pages/About'
import Navigation from './Navigation'
import { Container } from '@mui/system';
import logo from '../../images/logo.png'
import search from '../../images/icons/icon-search.png'
import cart from '../../images/icons/icon-shopping-cart.png'
import theme from '../../theme';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import PersonIcon from '@mui/icons-material/Person';
import { getAuth, signOut } from 'firebase/auth';

import { useContext } from 'react';
import Context from '../../context/Context';


const Navbar = ( ) => {
  //const { dark, toggleDark } = props
const ctx = useContext(Context);

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const auth = getAuth();
  const username = auth.currentUser ? auth.currentUser.displayName : 'guest'
  const handleLogout = () => {
    signOut(auth)
  }

  const navigate = useNavigate();

  const handleSignIn = () => {
      navigate('/login')
  }

  return (
    <React.Fragment>
      <Drawer open={open} onClose={handleClose}>
        <Navigation type='drawer' />
      </Drawer>

      <AppBar
        position='sticky' color='lightWhite'
        //color='{theme.lightTheme.palette.lightWhite.main}'
        // color='lightWhite'
      >
        <Contacts/>
        <Toolbar>
          <Container sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            justifyContent: 'space-between',
            p: { xs: 0, md: '.5rem' },
            maxWidth: { 
              xs: '376px',
              sm: '376px',
               md: '1200px',
               lg: '1400px',
              xl: '1400px',
              }
          }}>

            <Typography
              variant="h6"
              noWrap
              component={NavLink}
              to="/"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'Poppins',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <PhoneIphoneIcon sx={{ width: 36, height: 36 }} />
              NewTell
            </Typography>

            {/* не работает */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            
              <Navigation sx={{ display: { xs: 'block', sm: 'none' } }} type='toolbar' />
            </Box>

            <IconButton 
            color='inherit'
            size='large'
            sx={{ display: {xs: 'block', sm: 'none'}, width: 56, height: 56}}
            onClick={handleOpen}>
              <MenuIcon/>
            </IconButton>

            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '.5rem',
              ml: 'auto',
            }}>
              <Typography sx={{fontStyle:'italic'}}>Hello, {username}</Typography>
              <IconButton aria-label='search' size='large'>
                <img src={search} alt='search'/>
              </IconButton>
              <IconButton aria-label='cart' size='large'>
                <img src={cart} alt='cart' />
              </IconButton>


              {ctx.isUser ?
              <Button onClick={handleLogout}>Logout</Button>
              :
              <IconButton onClick={handleSignIn}>
                 <AccountCircleIcon sx={{ width: '36px', height: '36px'}}/> 
              </IconButton>
              }
              {/* <Avatar
                alt='logo'
                src={logo}
                sx={{
                  width: 36,
                  height: 36,
                }} /> */}
            </Box>
          </Container>

        </Toolbar>

      </AppBar>
    </React.Fragment>
  )
}

export default Navbar