import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import slide from '../../images/slider/slide.png'

function Slider(props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Box sx={{display: 'flex', p: {xs: '16px', md: '20px', xl: '0'}}}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: '#252931',
            opacity: '.5',
            border: 'none',
            borderRadius: '30px 0px 0px 30px',
            color: 'white',
            paddingRight: '1px',
            cursor: 'pointer',
            fontSize: '24px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '300',
            height: 48,
            lineHeight: 1,
            textAlign: 'center',
            width: 36,
            transform: 'translateX(-36px)',
           
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: '#252931',
            border: 'none',
            opacity: '.5',
            borderRadius: '0px 30px 30px 0px',
            color: 'white',
            cursor: 'pointer',
            fontSize: '24px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '300',
            height: 48,
            lineHeight: 1,
            textAlign: 'center',
            width: 36,
            transform: 'translateX(36px)',
            zIndex: 5,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            // minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        
        <Box sx={{  flexShrink: '1', width: '100%', height: {xs: '82px', md: '174px', xl: '328px'} }}>
          <img src={slide} alt="slide" />
        </Box>
        <Box sx={{  flexShrink: '1', width: '100%', height: '328px' }}>
          <img src={slide} alt="slide" />
        </Box>
        {/* <Box sx={{ width: '1398px', height: '328px'}}>
          <img src={slide} alt="slide" />
          hello
        </Box>
        <Box sx={{ width: '1398px', height: '328px' }}>
          <img src={slide} alt="slide" />
        </Box>
        <Box sx={{ width: '1398px', height: '328px' }}>
          <img src={slide} alt="slide" />
        </Box>       */}
        
      </ReactSimplyCarousel>
    </Box>
  );
}

export default Slider;