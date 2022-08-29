import { Box, Button, IconButton, Divider, Grid, Typography, TextField, Container } from '@mui/material'
import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  //const [value, setValue] = useState(0);

  return (
    <Box className='general-footer'>
      <Box className='footer-advantages'
        sx={{ display: 'flex', justifyContent: 'center', gap: '2rem', my: '3rem' }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', maxWidth: '264px' }}>
          <img src={require('../../images/footer/support-icon.png')} alt='account' />
          <Typography sx={{ fontSize: '18', fontWeight: '700', mt: '.5rem' }}>
            Product Support
          </Typography>
          <Typography sx={{ fontSize: '14', fontWeight: '400', textAlign: 'center' }}>
            Up to 3 years on-site warranty available for your peace of mind.
          </Typography>
        </Box>


        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', maxWidth: '300px' }}>
          <img src={require('../../images/footer/account-icon.png')} alt='account' />
          <Typography sx={{ fontSize: '18', fontWeight: '700', mt: '.5rem' }}>
            Personal Account
          </Typography>
          <Typography sx={{ fontSize: '14', fontWeight: '400', textAlign: 'center' }}>
            With big discounts, free delivery and a dedicated support specialist.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', maxWidth: '264px' }}>
          <img src={require('../../images/footer/saving-icon.png')} alt='account' />
          <Typography sx={{ fontSize: '18', fontWeight: '700', mt: '.5rem' }}>
            Amazing Saving
          </Typography>
          <Typography sx={{ fontSize: '14', fontWeight: '400', textAlign: 'center' }}>
            Up to 70% off new Products, you can be sure of the best price.
          </Typography>
        </Box>
      </Box>

      <Box className='footer' sx={{ backgroundColor: '#020203', width: '100%', pt: '2rem', pb:'1rem' }}>
        <Container>
          <Box sx={{ display: 'flex', gap: '1rem', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mb: '2rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '.5rem' }}>
              <Typography sx={{ fontWeight: '500', color: '#fff', fontSize: '38px' }}>
                Sign Up To Our Newsletter
              </Typography>
              <Typography sx={{ fontWeight: '300', color: '#fff', fontSize: '16px' }}>
                Be the first to hear about the latest offers.
              </Typography>
            </Box>
            <Box sx={{ alignSelf: { sx: 'space-between', md: 'center' }, display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'start', lg: 'center' }, gap: '1rem' }}>
              <TextField color='primary' id='email-text-field' placeholder='Your Email' label='Your Email' variant='outlined' sx={{ backgroundColor: 'rgba(255,255,255, .8)', borderRadius: '4px', width: '390px' }} />
              <Button variant='contained' sx={{ px: '2rem' }}>Subscribe</Button>
            </Box>


          </Box>

          <Grid container rowSpacing={4}
            sx={{ justifyContent: 'space-between' }}
          >
            <Grid item xs={12} sm={6} lg={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'start', justifyContent: 'start' }}>
                <Typography sx={{ fontWeight: '700', fontSize: '14', color: 'rgba(255,255,255, .5)', mb: '1rem' }}>
                  Information
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  About Us
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Privacy Policy
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Search
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Tearms
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Contact Us
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Newsletter Subscription
                </Typography>

              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'start', justifyContent: 'start' }}>
                <Typography sx={{ fontWeight: '700', fontSize: '14', color: 'rgba(255,255,255, .5)', mb: '1rem' }}>
                  PC Parts
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  CPUS
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Hard Drives
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Graphic Cards
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Keyboards / Mice
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  RAM (Memory)

                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Software
                </Typography>

              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'start', justifyContent: 'start' }}>
                <Typography sx={{ fontWeight: '700', fontSize: '14', color: 'rgba(255,255,255, .5)', mb: '1rem' }}>
                  Desktop PCs
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Custom PCs
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Servers
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  MSI All-In-One PCs

                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  ASUS PCs

                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Tecs PCs
                </Typography>

              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'start', justifyContent: 'start' }}>
                <Typography sx={{ fontWeight: '700', fontSize: '14', color: 'rgba(255,255,255, .5)', mb: '1rem' }}>
                  Address
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Address: 1234 Street Adress City Address, 1234
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Phones: <Typography component='span' sx={{ color: '#01A4FF' }}>(00) 1234 5678</Typography>
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Friday: 9:00 AM - 6:00 PM

                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  Saturday: 11:00 AM - 5:00 PM

                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '14', color: 'rgb(255,255,255)' }}>
                  E-mail: <Typography component='span' sx={{ color: '#01A4FF' }}>shop@email.com</Typography>
                </Typography>

              </Box>
            </Grid>
          </Grid>


          <Box color='white' sx={{mt: '2rem', borderTop: '1px solid', borderColor: 'rgba(255,255,255,.5)'}}></Box>
          <Box sx={{ display: 'flex', mt: '1rem', alignItems: 'center', justifyContent: 'space-between', gap: '4px' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '12', color: 'white', }}>
              Call Us:
              <Typography component='span' sx={{ color: '#01A4FF', ml: '4px' }}>(00) 1234 5678</Typography>
              </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              <IconButton sx={{ color: 'white' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
              <InstagramIcon />
            </IconButton>
            </Box>
            
          </Box>
        </Container>




      </Box>



    </Box>
  )
}

export default Footer