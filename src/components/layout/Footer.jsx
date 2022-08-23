
import { Box, Paper,BottomNavigation, BottomNavigationAction, Typography  } from '@mui/material'
import React, {useState} from 'react'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} elevation={3}>

        <Box sx={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>

          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', maxWidth: '264px'}}>
            <img src={require('../../images/footer/support-icon.png')} alt='account'/>
            <Typography sx={{fontSize: '18', fontWeight: '700', mt: '.5rem'}}>
              Product Support
            </Typography>
            <Typography sx={{fontSize: '14', fontWeight: '400', textAlign: 'center'}}>
            Up to 3 years on-site warranty available for your peace of mind.
            </Typography>
          </Box>
        
        
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', maxWidth: '264px'}}>
            <img src={require('../../images/footer/account-icon.png')} alt='account'/>
            <Typography sx={{fontSize: '18', fontWeight: '700', mt: '.5rem'}}>
             Personal Account
            </Typography>
            <Typography sx={{fontSize: '14', fontWeight: '400', textAlign: 'center'}}>
            With big discounts, free delivery and a dedicated support specialist.
            </Typography>
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', maxWidth: '264px'}}>
            <img src={require('../../images/footer/saving-icon.png')} alt='account'/>
            <Typography sx={{fontSize: '18', fontWeight: '700', mt: '.5rem'}}>
              Amazing Saving
            </Typography>
            <Typography sx={{fontSize: '14', fontWeight: '400', textAlign: 'center'}}>
            Up to 70% off new Products, you can be sure of the best price.
            </Typography>
          </Box>
        </Box>

        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default Footer