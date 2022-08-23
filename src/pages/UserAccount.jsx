import React, { useState } from 'react'
import { Breadcrumbs, Tabs, Tab, Link, Box, Typography, Divider } from '@mui/material'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const UserAccount = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Breadcrumbs aria-label='breadcrumb' sx={{ my: '1rem' }}>
        <Link underline='hover' color='inherit' href='/' sx={{ fontSize: '12px', fontWeight: '300' }}>
          Home
        </Link>
        <Typography color='text.primary' underline='hover' sx={{ fontSize: '12px', fontWeight: '400' }}>
          My Dashboard
        </Typography>
      </Breadcrumbs>

      <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '32px', mt: '.5rem', mb: '2rem' }}>My Dashboard</Typography>



      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',  height: '100%', }}
      >
        <Tabs
        
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          
          sx={{  backgroundColor: 'rgba(204,222,255,.2)',  py: '1rem', minWidth: '326px', mr: '2.5rem'}}
        >
          <Tab sx={{ textTransform: 'capitalize', alignSelf: 'start',  fontSize: '15px', pl: '1.5rem' }} label="Account Dashboard" {...a11yProps(0)} />
          <Tab sx={{ textTransform: 'capitalize', alignSelf: 'start', fontSize: '15px', pl: '1.5rem' }} label="Account Information" {...a11yProps(1)} />
          <Tab sx={{ textTransform: 'capitalize', alignSelf: 'start', fontSize: '15px', pl: '1.5rem' }} label="Address Book" {...a11yProps(2)} />
          <Tab sx={{ textTransform: 'capitalize', alignSelf: 'start', fontSize: '15px', pl: '1.5rem' }} label="My Orders" {...a11yProps(3)} />
          <Divider sx={{ ml: '.75rem', mr: '1rem' }} />
          <Tab sx={{ textTransform: 'capitalize', alignSelf: 'start', fontSize: '15px', pl: '1.5rem' }} label="My Wish List" {...a11yProps(4)} />
          <Tab sx={{ textTransform: 'capitalize', alignSelf: 'start', fontSize: '15px', pl: '1.5rem' }} label="My Product Reviews" {...a11yProps(5)} />
          <Tab sx={{ textTransform: 'capitalize', alignSelf: 'start', fontSize: '15px', pl: '1.5rem'}} label="Newsletter Subscriptions" {...a11yProps(6)} />
          
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', py: '1rem',  borderTop: '.5rem solid white' }}>
            <Typography sx={{fontWeight: '700', fontSize: '16px'}}>
              Compare Products
            </Typography>
            <Typography sx={{fontWeight: '400', fontSize: '13px'}}>
              You have not items to compare
            </Typography>
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', py: '1rem',  borderTop: '.5rem solid white' }}>
            <Typography sx={{fontWeight: '700', fontSize: '16px'}}>
              My Wish List
            </Typography>
            <Typography sx={{fontWeight: '400', fontSize: '13px'}}>
              You have not items in your wish list
            </Typography>
          </Box>
        </Tabs>

        <TabPanel value={value} index={0}>
          Account Dashboard
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography sx={{ fontSize: '18px', fontWeight: '700' }}>
            Account Information
          </Typography>
          <Divider sx={{my: '1rem', width: '980px'}}  />
          <Box sx={{ display: 'flex', gap: '5rem',  }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px'}}>
              <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
                Contact Information
              </Typography>
              <Typography sx={{ fontSize: '16px', fontWeight: '300', my: '1rem' }}>
                Alex Driver<br />
                alex.driver@gmail.com
              </Typography>
              <Box sx={{ display: 'flex', gap: '1rem'}}>
                <Typography component={Link} href='#' color='main' sx={{ fontSize: '14px', fontWeight: '300' }}>
                  Edit
                </Typography>
                <Typography component={Link} href='#' color='main' sx={{ fontSize: '14px', fontWeight: '300' }}>
                  Change Password
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px'}}>
              <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
                Newsletters
              </Typography>
              <Typography sx={{ fontSize: '16px', fontWeight: '300', my: '1rem' }}>
              You don't subscribe to our <br/>newsletter.
              </Typography>
              <Box sx={{ display: 'flex', gap: '1rem'}}>
                <Typography component={Link} href='#' color='main' sx={{ fontSize: '14px', fontWeight: '300' }}>
                  Edit
                </Typography>
              </Box>
            </Box>
          </Box>


          <Typography sx={{ fontSize: '18px', fontWeight: '700', mt: '3rem' }}>
            Address Book <Typography component={Link} href='#' color='main' sx={{ fontSize: '14px', fontWeight: '300', ml: '1rem' }}>
                  Manage Address
                </Typography>
          </Typography>
          <Divider sx={{my: '1rem', width: '980px'}}  />
          <Box sx={{ display: 'flex', gap: '5rem',  }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px'}}>
              <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
              Default Billing Address
              </Typography>
              <Typography sx={{ fontSize: '16px', fontWeight: '300', my: '1rem' }}>
              You have not set a default billing address.
              </Typography>
              <Box sx={{ display: 'flex', gap: '1rem'}}>
                <Typography component={Link} href='#' color='main' sx={{ fontSize: '14px', fontWeight: '300' }}>
                  Edit Address
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px'}}>
              <Typography sx={{ fontSize: '16px', fontWeight: '500' }}>
              Default Shipping Address
              </Typography>
              <Typography sx={{ fontSize: '16px', fontWeight: '300', my: '1rem' }}>
              You have not set a default shipping address.
              </Typography>
              <Box sx={{ display: 'flex', gap: '1rem'}}>
                <Typography component={Link} href='#' color='main' sx={{ fontSize: '14px', fontWeight: '300' }}>
                  Edit Address
                </Typography>
              </Box>
            </Box>
          </Box>

        </TabPanel>
        <TabPanel value={value} index={2}>
          Address Book
        </TabPanel>
        <TabPanel value={value} index={3}>
          My Orders
        </TabPanel>
        <TabPanel value={value} index={4}>
          My Wish List
        </TabPanel>
        <TabPanel value={value} index={5}>
        My Wish List
        </TabPanel>
        <TabPanel value={value} index={6}>
          My Productes Reviews
        </TabPanel>
        <TabPanel value={value} index={7}>
          Newsletter Subscriptions
        </TabPanel>
      </Box>

    </>
  )
}

export default UserAccount