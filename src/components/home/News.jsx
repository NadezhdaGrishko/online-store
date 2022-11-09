import { Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../theme'

const News = () => {
  return (
    <Grid container spacing={4}>
      <Grid item component={Typography} xs={12} sx={{ color: 'black', fontWeight: '600', fontSize: '22px', mt:'2rem' }}>Follow us on Instagram for News, Offers & More</Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', pl: '0px'}}>
        <img src={require('../../images/news/element1.png')} />
        <Typography sx={{ color: 'black', fontWeight: '400', fontSize: '12px', maxWidth: '225px', py: '8px', px: { xs: '8px', sm: '10px', md: '12px' }, textAlign: 'center' }}>
          If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
        </Typography>
        <Typography sx={{ color: theme.lightTheme.palette.gray.main, fontWeight: '400', fontSize: '10px' }}>
          01.09.2020
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', }}>
        <img src={require('../../images/news/element2.png')} />
        <Typography sx={{ color: 'black', fontWeight: '400', fontSize: '12px', maxWidth: '225px', py: '8px', px: { xs: '8px', sm: '10px', md: '12px' }, textAlign: 'center' }}>
        As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task...
        </Typography>
        <Typography sx={{ color: theme.lightTheme.palette.gray.main, fontWeight: '400', fontSize: '10px' }}>
          01.09.2020
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', }}>
        <img src={require('../../images/news/element3.png')} />
        <Typography sx={{ color: 'black', fontWeight: '400', fontSize: '12px', maxWidth: '225px', py: '8px', px: { xs: '8px', sm: '10px', md: '12px' }, textAlign: 'center' }}>
          If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
        </Typography>
        <Typography sx={{ color: theme.lightTheme.palette.gray.main, fontWeight: '400', fontSize: '10px' }}>
          02.09.2020
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', }}>
        <img src={require('../../images/news/element4.png')} />
        <Typography sx={{ color: 'black', fontWeight: '400', fontSize: '12px', maxWidth: '225px', py: '8px', px: { xs: '8px', sm: '10px', md: '12px' }, textAlign: 'center' }}>
          If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
        </Typography>
        <Typography sx={{ color: theme.lightTheme.palette.gray.main, fontWeight: '400', fontSize: '10px' }}>
          01.09.2020
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', }}>
        <img src={require('../../images/news/element5.png')} />
        <Typography sx={{ color: 'black', fontWeight: '400', fontSize: '12px', maxWidth: '225px', py: '8px', px: { xs: '8px', sm: '10px', md: '12px' }, textAlign: 'center' }}>
          If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
        </Typography>
        <Typography sx={{ color: theme.lightTheme.palette.gray.main, fontWeight: '400', fontSize: '10px' }}>
          01.09.2020
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', }}>
        <img src={require('../../images/news/element6.png')} />
        <Typography sx={{ color: 'black', fontWeight: '400', fontSize: '12px', maxWidth: '225px', py: '8px', px: { xs: '8px', sm: '10px', md: '12px' }, textAlign: 'center' }}>
          If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
        </Typography>
        <Typography sx={{ color: theme.lightTheme.palette.gray.main, fontWeight: '400', fontSize: '10px' }}>
          01.09.2020
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', }}>
        <img src={require('../../images/news/element7.png')} />
        <Typography sx={{ color: 'black', fontWeight: '400', fontSize: '12px', maxWidth: '225px', py: '8px', px: { xs: '8px', sm: '10px', md: '12px' }, textAlign: 'center' }}>
          If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
        </Typography>
        <Typography sx={{ color: theme.lightTheme.palette.gray.main, fontWeight: '400', fontSize: '10px' }}>
          01.09.2020
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', }}>
        <img src={require('../../images/news/element8.png')} />
        <Typography sx={{ color: 'black', fontWeight: '400', fontSize: '12px', maxWidth: '225px', py: '8px', px: { xs: '8px', sm: '10px', md: '12px' }, textAlign: 'center' }}>
          If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
        </Typography>
        <Typography sx={{ color: theme.lightTheme.palette.gray.main, fontWeight: '400', fontSize: '10px' }}>
          01.09.2020
        </Typography>
      </Grid>

    </Grid>
  )
}

export default News