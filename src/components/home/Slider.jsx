import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import slide from '../../images/slider/slide.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/slider.css";
import { Navigation } from "swiper";


function Slider(props) {

    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop={true} grabCursor={true}>
            <SwiperSlide><img src={require('../../images/slider/slide.png')} alt="slide" /></SwiperSlide>
            <SwiperSlide><img src={require('../../images/slider/slide.png')} alt="slide" /></SwiperSlide>
            <SwiperSlide><img src={require('../../images/slider/slide.png')} alt="slide" /></SwiperSlide>
            <SwiperSlide><img src={require('../../images/slider/slide.png')} alt="slide" /></SwiperSlide>
            <SwiperSlide><img src={require('../../images/slider/slide.png')} alt="slide" /></SwiperSlide>
            <SwiperSlide><img src={require('../../images/slider/slide.png')} alt="slide" /></SwiperSlide>
        </Swiper>
    );
}

export default Slider;