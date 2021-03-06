import React from 'react'
import { Typography, Container, IconButton, List, ListItemButton, ListItemText, Collapse, Tooltip, Button } from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import theme from '../../theme';
import { Box } from '@mui/system';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShopInfo from './ShopInfo';

const Contacts = (props) => {
  //const { dark, toggleDark } = props


  return (  
    <Box sx={{backgroundColor:  '#020202' , py: '8px', }}>
    <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    maxWidth: { 
      xs: '376px',
      sm: '376px',
       md: '1200px',
       lg: '1400px',
      xl: '1400px',
      }
  }}>
    <Typography sx={{
      color: theme.lightTheme.palette.gray.main,
            fontWeight: '600', fontSize: '12px'}}>
              Mon-Thu: 9:00 AM - 5:30 PM 
    </Typography>
           <Typography sx={{color: '#ACACAC',
            fontWeight: '600', fontSize: '12px'}}>
           Visit our showroom in 1234 Street Adress City Address, 1234  Contact Us
           </Typography>

      
       {/* <IconButton onClick={toggleDark}
       sx={{
        // ml: 'auto',
        color: 'white'
       }}>
          {dark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton> */}
      
       
    </Container>
    </Box>
  )
}

export default Contacts