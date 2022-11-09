import { Paper } from '@mui/material'
import React from 'react'
import { Breadcrumbs, Link, Box, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <>
     <Breadcrumbs aria-label='breadcrumb' sx={{ my: '1rem' }}>
                <Link underline='hover' color='inherit' href='/' sx={{ fontSize: '12px', fontWeight: '300' }}>
                    Home
                </Link>
                <Typography color='text.primary' underline='hover' sx={{ fontSize: '12px', fontWeight: '400' }}>
                    About Us
                </Typography>
            </Breadcrumbs>

            
            <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '32px', my: '.5rem' }}>About Us</Typography>

            <Box sx={{backgroundColor: 'black', dislay: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
              <Box>
                <Typography sx={{color: 'white', fontSize: '44px', fontWeight: '500'}}>
                A Family That Keeps On Growing
                </Typography>
                <Typography sx={{color: 'white', fontSize: '18px', fontWeight: '300'}}>
                We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.<br/>

Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                </Typography>
              </Box>
              <Box>
                <img src='../images/about/room.png'/>
              </Box>
            </Box>
    </>
  )
}

export default AboutUs