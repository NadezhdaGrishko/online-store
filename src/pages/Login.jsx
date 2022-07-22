import { Breadcrumbs, Button, Grid, Link, List, IconButton, ListItem, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import theme from '../theme'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
    <>
      <Breadcrumbs aria-label='breadcrumb' >
        <Link underline='hover' color='inherit' href='/' sx={{ fontSize: '12px', fontWeight: '300' }}>
          Home
        </Link>
        <Typography color='text.primary' underline='hover' sx={{ fontSize: '12px', fontWeight: '400' }}>
          Login
        </Typography>
      </Breadcrumbs>

      <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '32px' }}>Customer Login</Typography>


      <Grid container spacing={3}
        sx={{ justifyContent: 'center', mt: '1rem', ml: '8rem' }}>
        <Grid item xs={12} md={6}>
          <Box
            component='form'
            noValidate
            autoComplete='off'
            sx={{
              display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'start', backgroundColor: theme.lightTheme.palette.lightWhite.main,
              px: '56px', py: '38px'
            }}>

            <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '18px' }}>Register Customers</Typography>
            <Typography color='text.primary' sx={{ fontWeight: '300', fontSize: '14px' }}>If you have an account, sign in with your email address.</Typography>

            <TextField
              required
              id='email-required'
              label='Email'
              placeholder='Your Email'
              fullWidth
              sx={{ backgroundColor: '#fff', }}
            />

            <TextField
              required
              id='password-required'
              label='Password'
              type='password'
              autoComplete='current-password'
              placeholder='Your Password'
              fullWidth
              sx={{ backgroundColor: '#fff' }}
            />
            <Box sx={{ mt: '12px', display: 'flex', gap: '12px', width: '100%' }}>
              <Button variant='contained' color='primary' sx={{ border: 'none', py: '10px', px: '2.5rem' }}>
                Sign In
              </Button>
              <Button color='primary' sx={{ border: 'none', py: '10px', }}>
                Forgot Your Password?
              </Button>


              <IconButton 
            color='inherit'
            size='large'
            sx={{ ml: 'auto', }}
            //onClick={}
            >
              <GoogleIcon color='primary' fontSize='large'/>
            </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{
              display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'start', backgroundColor: theme.lightTheme.palette.lightWhite.main,
              px: '56px', py: '38px', maxWidth: '546px', height: '100%'
            }}>

            <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '18px' }}>New Customer?</Typography>
            <Typography color='text.primary' sx={{ fontWeight: '300', fontSize: '14px' }}>Creating an account has many benefits:</Typography>
            <List sx={{fontSize: '14px'}}>
              <ListItem sx={{py:'0'}}>
              <Brightness1Icon sx={{width: '4px', mr: '6px'}}/>Check out faster
              </ListItem >
              <ListItem sx={{py:'0'}}>
              <Brightness1Icon sx={{width: '4px', mr: '6px'}}/>Keep more than address
              </ListItem>
              <ListItem sx={{py:'0'}}>
              <Brightness1Icon sx={{width: '4px', mr: '6px',}}/>Track orders and more
              </ListItem>
            </List>

            
            <Box sx={{    display: 'flex', gap: '12px' }}>
              <Button variant='contained' color='primary' sx={{ border: 'none', py: '10px', px: '2.5rem' }}>
                Create An Account
              </Button>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Login