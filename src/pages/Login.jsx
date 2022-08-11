import { Breadcrumbs, Button, Grid, Link, List, IconButton, ListItem, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import theme from '../theme';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import GoogleIcon from '@mui/icons-material/Google';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [passwordHelperText, setPasswordHelperText] = useState('')

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [emailHelperText, setEmailHelperText] = useState('')

  const validatePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError(false)
    setPasswordHelperText('')
  }

  const validateEmail = (e) => {
    setEmail(e.target.value)
    setEmailError(false)
    setEmailHelperText('')
  }

  const handleSignIn = () => {
    if (password == '' && email == '') {
      setPasswordError(true)
      setPasswordHelperText('Password field can\'t be empty')
      setEmailError(true)
      setEmailHelperText('Email field can\'t be empty')
    } else if (password == '') {
      setPasswordError(true)
      setPasswordHelperText('Password field can\'t be empty')
    } else if (email == '') {
      setEmailError(true)
      setEmailHelperText('Email field can\'t be empty')
    } else {
      //sign in method must be here
      alert('Sign In not implemented yet')
    }
  }


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
        //console.log(result);
        navigate('/userAccount')
      }).catch((error) => {
        // const errorMessage = error.message;
        // const errorCode = error.code;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      })
  }
  return (
    <>
      <Breadcrumbs aria-label='breadcrumb' sx={{ my: '1rem' }}>
        <Link underline='hover' color='inherit' href='/' sx={{ fontSize: '12px', fontWeight: '300' }}>
          Home
        </Link>
        <Typography color='text.primary' underline='hover' sx={{ fontSize: '12px', fontWeight: '400' }}>
          Login
        </Typography>
      </Breadcrumbs>

      <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '32px' }}>Customer Login</Typography>


      <Grid container spacing={3}
        sx={{ justifyContent: 'center', mt: '1rem', ml: '4rem' }}>
        <Grid item xs={12} md={6}>
          <Box
            component='form'
            noValidate
            autoComplete='off'
            sx={{
              display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'start', backgroundColor: 'rgba(204,222,255,.2)',
              px: '56px', py: '38px'
            }}>

            <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '18px' }}>Registered Customers</Typography>
            <Typography color='text.primary' sx={{ fontWeight: '300', fontSize: '14px' }}>If you have an account, sign in with your email address.</Typography>

            <TextField
              required
              error={emailError}
              id='email-required'
              label='Email'
              placeholder='Your Email'
              fullWidth
              variant='filled'
              color='primary'
              value={email}
              helperText={emailHelperText}
              onChange={validateEmail}
            // sx={{ backgroundColor: '#fff', }}
            />

            <TextField
              required
              error={passwordError}
              id='password-required'
              label='Password'
              type='password'
              autoComplete='current-password'
              placeholder='Your Password'
              fullWidth
              variant='filled'
              color='primary'
              value={password}
              helperText={passwordHelperText}
              onChange={validatePassword}
            //onChange={(e) => setPassword(e.target.value)}

            />
            <Box sx={{ mt: '12px', display: 'flex', gap: '12px', width: '100%', alignItems: 'center' }}>
              <Button variant='contained' color='primary' onClick={handleSignIn}
                sx={{ border: 'none', py: '12px', px: '2.5rem', whiteSpace: 'nowrap' }}>
                Sign In
              </Button>
              <Button color='primary' sx={{ border: 'none', py: '12px', px: '1.5rem', whiteSpace: 'nowrap' }}>
                Forgot Your Password?
              </Button>


              <IconButton
                color='inherit'
                size='large'
                sx={{ ml: 'auto', }}
                onClick={handleGoogleSignIn}
              >
                <GoogleIcon color='primary' fontSize='large' />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{
            display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'start', backgroundColor: 'rgba(204,222,255,.2)',
            px: '56px', py: '38px', maxWidth: '546px', height: '100%'
          }}>

            <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '18px' }}>New Customer?</Typography>
            <Typography color='text.primary' sx={{ fontWeight: '300', fontSize: '14px' }}>Creating an account has many benefits:</Typography>
            <List sx={{ fontSize: '14px' }}>
              <ListItem sx={{ py: '0' }}>
                <Brightness1Icon sx={{ width: '4px', mr: '6px' }} />Check out faster
              </ListItem >
              <ListItem sx={{ py: '0' }}>
                <Brightness1Icon sx={{ width: '4px', mr: '6px' }} />Keep more than address
              </ListItem>
              <ListItem sx={{ py: '0' }}>
                <Brightness1Icon sx={{ width: '4px', mr: '6px', }} />Track orders and more
              </ListItem>
            </List>


            <Button component={NavLink} to='/register' variant='contained' color='primary' sx={{ border: 'none', py: '12px', px: '2.5rem', whiteSpace: 'nowrap' }}>
              Create An Account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Login