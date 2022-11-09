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

// import { useParams } from 'react-router-dom'

function Carousel(props) {
    const { collection, collectionStringName } = props

    //let collectionName = props.collection.toString()

    // console.log(collection);
    //    console.log(collection);
    //    console.log(collection[0]);

    //    console.log(collection[0].data());
    return (
        <Swiper
            navigation={false}
            //slidesPerView={1}
            autoHeight={true}
            spaceBetween={8}
            modules={[Navigation]}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                400: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                900: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
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
                    <SwiperSlide
                        className='swiperSlideInCarousel'
                        key={item.id}>
                        <CarouselCard image={item.data().url} productName={item.data().title} 
                        oldPrice={item.data().oldPrice} price={item.data().price}
                            availability={item.data().availability} rating={item.data().rating}
                            collection={collectionStringName}
                            product={item}
                        />
                    </SwiperSlide>
                ))
                )}
        </Swiper>
    );
}

export default Carousel;