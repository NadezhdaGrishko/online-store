import { Box, Button } from '@mui/material';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Carousel from '../components/home/Carousel';
import Products from '../components/home/Products';
import Slider from '../components/home/Slider';

const Home = () => {
  return (
    <Box>
    
      <h1 sx={{
        mr: '5rem'
      }}>Home</h1>
      {/* <Link to='article/my-article'>
        Go to my article
      </Link> */}
      <Slider/>
      <Carousel/>
      <Products/>
      <Button
      variant='contained'
      color='secondary'
      to='/about'
      component={NavLink}>
        To about
      </Button>
      </Box>
  )
}

export default Home