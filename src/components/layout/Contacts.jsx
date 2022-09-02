import React from 'react'
import { Typography, Container, IconButton, List, ListItemButton, ListItemText, Collapse, Tooltip, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import theme from '../../theme';
import { Box } from '@mui/system';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShopInfo from './ShopInfo';
import { useContext, useState } from 'react';
import Context from '../../context/Context';

const Contacts = () => {

  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show)
  }
  const ctx = useContext(Context)

  return (
    <Box sx={{ backgroundColor: '#020202', py: '8px', }}>
      <Container sx={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        // maxWidth: {
        //   xs: '376px',
        //   sm: '376px',
        //   md: '1200px',
        //   lg: '1400px',
        //   xl: '1400px',
        // }
      }}>
        <Box className='dropdown-contacts'
          sx={{
            position: 'relative', '&:hover': {
              // backgroundColor: 'red',
            },
          }}>

          <Box className='dropbtn-contacts'>
            <Typography
              sx={{
                display: 'flex', alignItems: 'center', mr: '2px',
                color: theme.lightTheme.palette.gray.main,
                fontWeight: '600', fontSize: '12px'
              }}>
              Mon-Thu: 9:00 AM - 5:30 PM
              <IconButton 
              color='inherit'
              onClick={toggleShow}
              //         sx={{'&hover': 'cursorPointer'}}
              >
                {show ? 
                <ExpandLessIcon
                //onClick={()=>setShow(false)}
                /> 
                : 
              <ExpandMoreIcon
              //onClick={()=>setShow(true)} 
              />}
              </IconButton>
            </Typography>
          
         
          {/* //sx={{display: 'none'}} */}
          {show && 
            <ShopInfo />}
          
          </Box>
          
          {/* <Box sx={{position: 'absolute', top:0, left: 0, color: 'white',  width: '100px', height: '100px', backgroundColor: '#666'}}>
           Hello world!
          </Box> */}

          

        </Box>

        <Typography sx={{
          display: {xs: 'none', md: 'block'},
          color: '#ACACAC',
          fontWeight: '600', fontSize: '12px'
        }}>
          Visit our showroom in 1234 Street Adress City Address, 1234
          <Typography to='/contacts' component={NavLink} sx={{
            color: '#fff',
            fontWeight: '600', fontSize: '12px', pl: '.3rem'
          }} >
            Contact Us
          </Typography>
        </Typography>

        <IconButton onClick={ctx.toggleDark}
          sx={{
            color: 'white'
          }}>
          {ctx.dark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

      </Container>
    </Box>
  )
}

export default Contacts