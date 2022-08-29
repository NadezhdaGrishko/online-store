import React, { useState } from 'react'
import { List, Typography, ListItemButton, ListItemText, Box, IconButton, Collapse, Tooltip, Button, Divider } from '@mui/material';

const ShopInfo = () => {

  return (
    <Box sx={{ position: 'absolute', zIndex: '55', width: '262px', top: '100%', left: 0, backgroundColor: '#fff', py: '.3rem', mt: '.5rem', boxShadow: '0px 0px 15px 10px rgba(0,0,0, .5)'}}>

      <Box sx={{ display: 'flex', px: '.5rem', gap: '.5rem', py: '.5rem' }}>
        <Box>
          <img src={require('../../images/icons/icon-time.png')} alt="time" />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography sx={{ fontWeight: '400', fontSize: '13px', color: '#000' }}>We are open:</Typography>
          <Box sx={{ display: 'flex', gap: '4px' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '13px', color: '#A2A6B0' }}>Mon-Thu:</Typography>
            <Typography sx={{ fontWeight: '600', fontSize: '13px', color: '#000' }}>9:00 AM - 5:30 PM</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '4px' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '13px', color: '#A2A6B0' }}>Fr:</Typography>
            <Typography sx={{ fontWeight: '600', fontSize: '13px', color: '#000' }}>9:00 AM - 6:00 PM</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '4px' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '13px', color: '#A2A6B0' }}>Sat:</Typography>
            <Typography sx={{ fontWeight: '600', fontSize: '13px', color: '#000' }}>11:00 AM - 5:00 PM</Typography>
          </Box>
          {/* {open ? <ExpandLess/> : <ExpandMore/>} */}
        </Box>
      </Box>

      <Divider />
      <Divider />

      <Box sx={{ display: 'flex', gap: '.5rem', px: '.5rem', py: '.5rem' }}>
        <Box>
          <img src={require('../../images/icons/icon-map.png')} alt="map" />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography sx={{ fontWeight: '400', fontSize: '13px', color: '#000' }}>Address: 1234 Street Adress, <br />City Address, 1234</Typography>
        </Box>

      </Box>

      <Divider />
      <Divider />

      <Box sx={{ display: 'flex', flexDirection:'column', gap: '.3rem', px: '1rem', py: '.5rem' }}>
        <Box sx={{ display: 'flex', gap: '4px' }}>
          <Typography sx={{ fontWeight: '400', fontSize: '13px', color: '#000' }}>
            Phones:
          </Typography>
          <Typography sx={{ fontWeight: '400', fontSize: '13px', color: '#0156FF' }}>
            00 1234 5678 
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '4px' }}>
          <Typography sx={{ fontWeight: '400', fontSize: '13px', color: '#000' }}>
            E-mail:
          </Typography>
          <Typography sx={{ fontWeight: '400', fontSize: '13px', color: '#0156FF' }}>
            shop@email.com5678 
          </Typography>
        </Box>
      </Box>

    </Box>
  )
}

export default ShopInfo