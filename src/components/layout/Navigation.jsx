import React from 'react'
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import theme from '../../theme';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Box } from '@mui/system';

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
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'Poppins',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'primary',
          textDecoration: 'none',
        }}
      >
        <PhoneIphoneIcon sx={{ width: 36, height: 36 }} />
        NewTell
      </Typography>}


      <List component='div'
        sx={{
          display: 'flex',
          flexDirection: type === 'toolbar' ? 'row' : 'column',
          // color: type === 'toolbar' ? 'red' : theme.lightTheme.palette.primary.main,
        }}>
        <ListItem button to='/products/headphones' component={NavLink} className='nav-link'>
          <ListItemText primary='Headphones' />
        </ListItem>
        <ListItem button to='/products/USB' component={NavLink} className='nav-link'>
          <ListItemText primary='USB' />
        </ListItem>
        <ListItem button to='/products/camera' component={NavLink} className='nav-link'>
          <ListItemText primary='Cameras' />
        </ListItem>
        <ListItem button to='/products/watches' component={NavLink} className='nav-link'>
          <ListItemText primary='Watches' />
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