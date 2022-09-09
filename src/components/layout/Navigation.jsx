import React, { useRef } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Button, List, ListItem, Divider, ListItemText, Typography } from '@mui/material'
import theme from '../../theme';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Box } from '@mui/system';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import UsbIcon from '@mui/icons-material/Usb';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import KeyboardIcon from '@mui/icons-material/Keyboard';

import { ControlledMenu, MenuHeader, MenuItem, SubMenu, MenuDivider, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const Navigation = (props) => {
  const ref = useRef(null);
  const [menuProps, toggleMenu] = useMenuState({ transition: true })

  const history = useNavigate()
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
        </Typography>
        }

{type === 'drawer' && <Divider/>}


      <List component='nav'
        sx={{
          display: 'flex',
          flexDirection: type === 'toolbar' ? 'row' : 'column',

          // color: type === 'toolbar' ? 'red' : theme.lightTheme.palette.primary.main,
        }}>
        <ListItem button to='/products/headphones' component={NavLink} className='nav-link'>
          {type === 'drawer' && <HeadphonesIcon sx={{ mr: '.5rem', }} />}
          <ListItemText primary='Headphones' />
        </ListItem>
        <ListItem button to='/products/usb' component={NavLink} className='nav-link'>
          {type === 'drawer' && <UsbIcon sx={{ mr: '.5rem', }} />}
          <ListItemText primary='USB' />
        </ListItem>
        <ListItem button to='/products/chargets' component={NavLink} className='nav-link'>
          {type === 'drawer' && <BatteryChargingFullIcon sx={{ mr: '.5rem', }} />}
          <ListItemText primary='Chargets' />
        </ListItem>
        <ListItem button to='/products/powerbank' component={NavLink} className='nav-link'>
          {type === 'drawer' && <ImportantDevicesIcon sx={{ mr: '.5rem', }} />}
          <ListItemText sx={{ whiteSpace: 'nowrap', }} primary='Power Bank' />
        </ListItem>
        {type === 'drawer' && 
        <ListItem button to='/products/adapters' component={NavLink} className='nav-link'>
          <ElectricalServicesIcon sx={{ mr: '.5rem', }} />
          <ListItemText primary='Adapters' />
        </ListItem>}
        {type === 'drawer' && 
        <ListItem button to='/products/keyboard' component={NavLink} className='nav-link'>
          <KeyboardIcon sx={{ mr: '.5rem', }} />
          <ListItemText primary='Keyboard' />
        </ListItem>}
        <ListItem>

          <Box ref={ref} onMouseEnter={() => toggleMenu(true)}>
            <Button to='/products/catalog' sx={{ px: '1.5rem', fontSize: '1rem' }} className='nav-link-catalog' component={NavLink} >
              Catalog
            </Button>
          </Box>
        </ListItem>

<Box sx={{display: {xs: 'none', lg: 'block'}}}>
        <ControlledMenu {...menuProps} anchorRef={ref}
          onMouseLeave={() => toggleMenu(false)}
          onClose={() => toggleMenu(false)}>
          <SubMenu label='Headphones'
          // onClick={(e)=>{
          //   e.preventDefault();
          //   history('/')
          // }}
          >
            <MenuHeader>
              BRAND
            </MenuHeader>
            <MenuItem>
            <NavLink style={{color: 'inherit', textDecoration:'none'}}
            to='/products/headphones'>
              Sony
            </NavLink>
              
            </MenuItem>
            <MenuItem>
              Hoco
            </MenuItem>
            <MenuItem>
              Sanfu
            </MenuItem>
            <MenuItem>
              Fantech
            </MenuItem>
            <MenuDivider />
            <MenuHeader>
              Portable Speakers
            </MenuHeader>
            <MenuItem>
              Borofone
            </MenuItem>
            <MenuItem>
              Konfulon
            </MenuItem>
            <MenuItem>
              Hopestar
            </MenuItem>
          </SubMenu>

          <SubMenu label='USB'>
            <MenuHeader>
              Capacity
            </MenuHeader>
            <MenuItem>
              4GB
            </MenuItem>
            <MenuItem>
              8GB
            </MenuItem>
            <MenuItem>
              16GB
            </MenuItem>
            <MenuItem>
              32GB
            </MenuItem>
            <MenuItem>
              64GB
            </MenuItem>
            <MenuItem>
              128GB
            </MenuItem>
            <MenuItem>
              256GB
            </MenuItem>
          </SubMenu>

          <SubMenu label='Chargets'>
            <MenuHeader>
              Brand
            </MenuHeader>
            <MenuItem>
              XO
            </MenuItem>
            <MenuItem>
              iEnergy
            </MenuItem>
            <MenuItem>
              Baseus
            </MenuItem>
            <MenuItem>
              Borofone
            </MenuItem>
            <MenuItem>
              Moxom
            </MenuItem>
            <MenuItem>
              Hoco
            </MenuItem>
            <MenuHeader>
              Type of charger
            </MenuHeader>
            <MenuItem>
              Automotive
            </MenuItem>
            <MenuItem>
              Network
            </MenuItem>
            <MenuItem>
              Wireless
            </MenuItem>
            <MenuItem>
              Universal
            </MenuItem>
          </SubMenu>

          <SubMenu label='Power Bank'>
            <MenuHeader>
              Brand
            </MenuHeader>
            <MenuItem>
              Apacer
            </MenuItem>
            <MenuItem>
              Kingston
            </MenuItem>
            <MenuItem>
              Mibrand
            </MenuItem>
            <MenuItem>
              Samsung
            </MenuItem>
            <MenuItem>
              SanDisk
            </MenuItem>
            <MenuItem>
              Verbatim
            </MenuItem>
          </SubMenu>

          <SubMenu label='Adapters'>
            <MenuHeader>
              Brand
            </MenuHeader>
            <MenuItem>
              Hoco
            </MenuItem>
            <MenuItem>
              XO
            </MenuItem>
            <MenuItem>
              Remax
            </MenuItem>
            <MenuItem>
              Borofone
            </MenuItem>
            <MenuItem>
              iEnergy
            </MenuItem>
            <MenuHeader>
              Cable type
            </MenuHeader>
            <MenuItem>
              USB Type-C
            </MenuItem>
            <MenuItem>
              Micro USB
            </MenuItem>
            <MenuItem>
              Lightning
            </MenuItem>
          </SubMenu>

          <SubMenu label='Keyboard'>
            <MenuHeader>
              Brand
            </MenuHeader>
            <MenuItem>
              ASUS
            </MenuItem>
            <MenuItem>
              Defender
            </MenuItem>
            <MenuItem>
              Ergo
            </MenuItem>
            <MenuItem>
              Hator
            </MenuItem>
            <MenuHeader>
              Connection type
            </MenuHeader>
            <MenuItem>
              Wireless
            </MenuItem>
            <MenuItem>
              Wired
            </MenuItem>
          </SubMenu>


        </ControlledMenu>
</Box>        
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