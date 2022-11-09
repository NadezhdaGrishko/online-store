import React, { useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, InputBase, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, ListItemText, Avatar, Drawer, Badge } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Contacts from './Contacts';
import Navigation from './Navigation'
import { Container } from '@mui/system';
import logo from '../../images/logo.png'
import search from '../../images/icons/icon-search.png'
import cart from '../../images/icons/icon-shopping-cart.png'
import theme from '../../theme';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { getAuth, signOut } from 'firebase/auth';

import { useContext } from 'react';
import Context from '../../context/Context';
import CartInformer from './CartInformer';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color: 'black',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Navbar = () => {

  const ctx = useContext(Context);

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const auth = getAuth();

  const username = auth.currentUser  ? (auth.currentUser.displayName || ctx.userName) : 'guest'

  console.log(ctx.userName);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleClickCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setOpenDialog(false);
      navigate('/');
    }).catch((error) => {
      alert(error.code)
    });
  }

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
        <Contacts />
        <Toolbar>
          <Container sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            justifyContent: 'space-between',
            p: { xs: 0, md: '.5rem' },
            // maxWidth: { 
            //   xs: '376px',
            //   sm: '376px',
            //    md: '1200px',
            //    lg: '1400px',
            //   xl: '1400px',
            //   }
          }}>

            <Typography
              variant="h6"
              noWrap
              component={NavLink}
              to="/"
              sx={{

                display: 'flex',
                fontFamily: 'Poppins',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                width: '100%',
              }}
            >
              <PhoneIphoneIcon sx={{ width: 36, height: 36 }} />
              NewTell
            </Typography>

            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <Navigation type='toolbar' />
            </Box>

            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              ml: 'auto',
            }}>
              <Typography component={NavLink} to='/userAccount'
              sx={{ display: { xs: 'none', md: 'block' }, color: 'inherit', textDecoration: 'none', fontStyle: 'italic', mr: '.5rem', whiteSpace: { xs: 'nowrap', lg: 'normal' } }}>Hello, {username}</Typography>
              
              <Search sx={{display: {xs: 'none', sm: 'block'}}}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>

              <CartInformer />

              {ctx.isUser ?
                <Button sx={{ px: '1rem' }} onClick={handleClickOpenDialog}>Logout</Button>
                :
                <IconButton onClick={handleSignIn}>
                  <AccountCircleIcon sx={{ width: '36px', height: '36px', }} />
                </IconButton>
              }

              <IconButton
                color='inherit'
                size='large'
                sx={{ display: { xs: 'flex', alignItems: 'center', justifyContent: 'center', lg: 'none' }, width: '44px', height: '44px' }}
                onClick={handleOpen}
              >
                <MenuIcon />
              </IconButton>

              <Dialog
                open={openDialog}
                onClose={handleClickCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Log Out"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to log out?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleLogout}>OK</Button>
                  <Button onClick={handleClickCloseDialog} autoFocus>
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Container>

        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Navbar