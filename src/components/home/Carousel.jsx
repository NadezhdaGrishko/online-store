import React from 'react';
import CarouselCard from './CarouselCard';
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/carousel.css";
import { Navigation, Pagination } from "swiper";
import product1 from '../../images/carousel/product1.png';



function Carousel2(props) {
    const { collection, itemsToShow } = props
    return (
        <Swiper
            navigation={false}
            slidesPerView={5}
            spaceBetween={8}
            pagination={{
                clickable: false,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            loop={true}
            grabCursor={true}>

            {collection.length === 0 ?
                (<Typography sx={{ whiteSpace: 'nowrap', width: '100%', fontStyle: 'italic', py: '8px' }}>
                    No products yet...
                </Typography>) :
                (
                    collection.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CarouselCard image={product1} productName={item.data().title} oldPrice={item.data().oldPrice} price={item.data().price} availability={item.data().availability} />
                        </SwiperSlide>
                    ))
                )}
        </Swiper>
    );
}

export default Carousel2;