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


function Carousel(props) {
    const { collection, itemsToShow } = props

    let collectionName = props.collection.toString()
   
//    console.log(collectionName);
//    console.log(collection);
//    console.log(collection[0]);
   
//    console.log(collection[0].data());
    return (
        <Swiper
            navigation={false}
            slidesPerView={5}
            autoHeight={true}
            spaceBetween={8}
            modules={[Navigation]}
            // modules={[ Pagination, Navigation]}
            // pagination={{
            //     clickable: true,
            // }}

            className="mySwiper"
            loop={true}
            grabCursor={true}>

            {collection.length === 0 ?
                (<Typography sx={{ whiteSpace: 'nowrap', width: '100%', fontStyle: 'italic', py: '8px' }}>
                    No products yet...
                </Typography>) :
                (collection.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CarouselCard image={item.data().url} productName={item.data().title} oldPrice={item.data().oldPrice} price={item.data().price} 
                        availability={item.data().availability} rating={item.data().rating}
                        collection={collectionName} 
                        product={item}
                        />
                    </SwiperSlide>
                ))
                )}
        </Swiper>
    );
}

export default Carousel;