import React from 'react'
import { Box, CardContent, CardHeader, CardMedia, Rating, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import product1 from '../../images/carousel/product1.png'
import product2 from '../../images/carousel/product2.png'
import product3 from '../../images/carousel/product3.png'
import product4 from '../../images/carousel/product4.png'
import theme from '../../theme';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CarouselCard from './CarouselCard';

//firebase imports
import { firestore } from '../../firebase/clientApp';
import { collection, QueryDocumentSpanshot, DocumentData, query, where, limit, getDocs } from 'firebase/firestore';



function Carousel(props) {

  //только для Typecript
  //const [headphones, setHeadphones] = useState<QueryDocumentSpanshot<DocumentData>[]>([])

  const [headphones, setHeadphones] = useState([])
  const [loading, setLoading] = useState(true)
  const headphonesCollection = collection(firestore, 'headphones');

  const getHeadphones = async () => {
    const headphonesQuery = query(headphonesCollection, where('availability', '==', true), limit(20))
    const querySnapshot = await getDocs(headphonesQuery)
    const result = []
    querySnapshot.forEach((snapshot) => result.push(snapshot))
    setHeadphones(result)
    console.log(result)
    setLoading(false)
  }

  useEffect(() => {
    getHeadphones()
  }, [])

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Box>

      {loading && <Typography>loading...</Typography>}

      <ReactSimplyCarousel

        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: props.itemsToShow,
            itemsToScroll: 4,
            //minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {headphones.length === 0 ?
          (<Typography>
            {/* No products yet... */}
          </Typography>) :
          (
            props.collection.map((item, index) => (
              <CarouselCard key={index} image={product1} productName={item.data().title} oldPrice={item.data().oldPrice} price={item.data().price}/>
            ))
          )}
        {/* <CarouselCard image={product1} productName='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...' />
        <CarouselCard image={product2} productName='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...' /> */}

      </ReactSimplyCarousel>
    </Box>
  );
}

export default Carousel;