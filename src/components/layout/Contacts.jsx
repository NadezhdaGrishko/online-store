import React from 'react'
import { Typography, IconButton } from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Contacts = (props) => {
  const { dark, toggleDark } = props
  return (
    <>
       <Typography sx={{
        padding: '1rem',
        backgroundColor: '#666',
        display: 'flex',
       }}>
       some contacts must be there...
       <IconButton onClick={toggleDark}
       sx={{
        ml: 'auto',
       }}>
          {dark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
       </Typography>
       
    </>
  )
}

export default Contacts