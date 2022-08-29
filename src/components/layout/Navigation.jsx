import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material'
import theme from '../../theme';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Box } from '@mui/system';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import UsbIcon from '@mui/icons-material/Usb';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';

const Navigation = (props) => {
  const { type } = props
  return (
    <Box sx={{
      // p: theme.lightTheme.spacing(2),
    }}>
      {type === 'drawer' &&
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          m: 2,
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'Poppins',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
          minWidth: '224px'
        }}
      >
        <PhoneIphoneIcon sx={{ width: 36, height: 36 }} />
        NewTell
      </Typography>}


      <List component='nav'
        sx={{
          display: 'flex',
          flexDirection: type === 'toolbar' ? 'row' : 'column',
          
          // color: type === 'toolbar' ? 'red' : theme.lightTheme.palette.primary.main,
        }}>
        <ListItem button to='/products/headphones' component={NavLink} className='nav-link'>
        {type === 'drawer' && <HeadphonesIcon sx={{mr: '.5rem', }}/>}
          <ListItemText primary='Headphones' />
        </ListItem>
        <ListItem button to='/products/usb' component={NavLink} className='nav-link'>
        {type === 'drawer' && <UsbIcon sx={{mr: '.5rem', }}/>}
          <ListItemText primary='USB' />
        </ListItem>
        <ListItem button to='/products/chargets' component={NavLink} className='nav-link'>
        {type === 'drawer' && <BatteryChargingFullIcon sx={{mr: '.5rem', }}/>}
          <ListItemText primary='Chargets' />
        </ListItem>
        <ListItem button to='/products/accessories' component={NavLink} className='nav-link'>
        {type === 'drawer' && <ImportantDevicesIcon sx={{mr: '.5rem', }}/>}
          <ListItemText sx={{whiteSpace: 'nowrap'}} primary='Mobile Accessories' />
        </ListItem>
        <ListItem>
        <Button to='/products/catalog' sx={{px: '1.5rem', fontSize: '1rem'}} className='nav-link-catalog' component={NavLink} >
          Catalog
        </Button>
        </ListItem>
        {/* <nav className='menu'> */}
        {/* <NavLink to='/' className='nav-link'>Наушники</NavLink>
            <NavLink to='/about' className='nav-link'>Зарядные устройства</NavLink>
            <NavLink to='/about' className='nav-link'>Power Bank</NavLink>
            <NavLink to='/about' className='nav-link'>Кабеля</NavLink>
            <NavLink to='/about' className='nav-link'>Флешки USB</NavLink>
            <NavLink to='/about' className='nav-link'>Аккумуляторы</NavLink> */}
      </List>
    </Box>
  )
}

export default Navigation