import { Breadcrumbs, Button, Grid, Link, List, IconButton, ListItem, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import theme from '../theme';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import GoogleIcon from '@mui/icons-material/Google';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
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
    if(e.target.value === ''){
      setPasswordHelperText(`Password field can't be empty`)
      setPasswordError(true)
    } else {
      setPasswordError(false)
    setPasswordHelperText('')
    }
  }

  const validateEmail = (e) => {
    setEmail(e.target.value)
    if(e.target.value === '') {
      setEmailHelperText(`Email field can't be empty`)
      setEmailError(true)
    } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)) {
      setEmailHelperText('');
      setEmailError(false);
  } else {
    setEmailHelperText('Email is not valid');
    setEmailError(true)
  }
  }

  const formIsValid = () => {
    const isValid = email && password && passwordError === false &&  emailError === false
    return isValid;
}

  const handleSignIn = () => {
    if (password === '' && email === '') {
      setPasswordError(true)
      setPasswordHelperText('Password field can\'t be empty')
      setEmailError(true)
      setEmailHelperText('Email field can\'t be empty')
    } else if (password === '') {
      setPasswordError(true)
      setPasswordHelperText('Password field can\'t be empty')
    } else if (email === '') {
      setEmailError(true)
      setEmailHelperText('Email field can\'t be empty')
    } else {
      signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/userAccount');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                console.log(errorCode);
                console.log(errorMessage);
                alert(errorCode)
            })
    }
  }

  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        console.log(result);
        navigate('/userAccount')
      }).catch((error) => {
        console.log(error);
        alert(error)
        // const errorMessage = error.message;
        // const errorCode = error.code;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      })
  }
  return (
    <>
      <Breadcrumbs aria-label='breadcrumb' sx={{ my: '1rem' }}>
        <Link underline='hover' color='inherit' href='/' sx={{ fontSize: '12px', fontWeight: '300', mb: '5px' }}>
          Home
        </Link>
        <Typography color='text.primary' underline='hover' sx={{ fontSize: '12px', fontWeight: '400' }}>
          Login
        </Typography>
      </Breadcrumbs>

      <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '32px' }}>Customer Login</Typography>


      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'stretch', alignItems: 'stretch', gap: '2rem', mt: '1rem', ml: {xs: '0', lg: '4rem'} }}>

        <Box
          component='form'
          noValidate
          autoComplete='off'
          sx={{
            display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'start', backgroundColor: 'rgba(204,222,255,.2)', px: {xs: '56px', md: '36px', lg: '56px'}, py: '38px', 
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
            onBlur={validateEmail}
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
            onBlur={validatePassword}
          //onChange={(e) => setPassword(e.target.value)}

          />
          <Box sx={{ mt: '12px', display: 'flex', gap: '12px', width: '100%', alignItems: 'center' }}>
            <Button variant='contained' color='primary' onClick={handleSignIn} disabled={!formIsValid()}
              sx={{ border: 'none', py: '12px', px: '2.5rem', whiteSpace: 'nowrap' }}>
              Sign In
            </Button>
            <Button color='primary' onClick={()=>alert(`Sorry! We can't help you. Create a new account`)} sx={{ border: 'none', py: '12px', px: '1.5rem', whiteSpace: {xs: 'wrap', sm: 'nowrap'} }}>
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

        <Box sx={{
          display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'start', backgroundColor: 'rgba(204,222,255,.2)', px: {xs: '56px', md: '36px', lg: '56px'}, pt: '38px', pb: '4rem', width: {xs: '100%', md: '546px'},
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
      </Box>
    </>
  )
}

export default Login