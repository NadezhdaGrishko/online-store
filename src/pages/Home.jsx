import { Box, Button } from '@mui/material';
import React from 'react';
import {useParams} from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import Carousel from '../components/home/Carousel';
import News from '../components/home/News';
import Slider from '../components/home/Slider';

const Home = (props) => {
  const params = useParams()
    const slug = params.slug || 'all'
  return (
    <Box>     
      {/* <Link to='article/my-article'>
        Go to my article
      </Link> */}
      <Slider/>

      

<Carousel/>

      
      
      
      <Button
      variant='contained'
      color='secondary'
      to='/about'
      component={NavLink}>
        To about
      </Button>
      <News/>
      </Box>
  )
}

export default Home