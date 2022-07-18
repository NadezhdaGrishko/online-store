import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import Carousel from '../components/home/Carousel';
import News from '../components/home/News';
import Slider from '../components/home/Slider';

import { firestore } from '../firebase/clientApp';
import { collection, onSnapshot, QueryDocumentSpanshot, DocumentData, query, where, limit, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';


const Home = (props) => {
  const params = useParams()
  const slug = params.slug || 'all'


  const [headphones, setHeadphones] = useState([])
  const [loading, setLoading] = useState(true)
  const headphonesCollection = collection(firestore, 'headphones');

  // const getHeadphones = async () => {
  //   //const headphonesQuery = query(headphonesCollection, where('availability', '==', true), limit(20))
  //   const headphonesQuery = query(headphonesCollection, where('availability', 'in', [true, false]), limit(20))
  //   const querySnapshot = await getDocs(headphonesQuery)
  //   const result = []
  //   querySnapshot.forEach((snapshot) => result.push(snapshot))
  //   setHeadphones(result)
  //   console.log(result)
  //   setLoading(false)
  // }


  const getHeadphones = async () => {
    //const headphonesQuery = query(headphonesCollection, where('availability', '==', true), limit(20))
    const headphonesQuery = query(headphonesCollection, where('availability', 'in', [true, false]), limit(20))

    const unsub = onSnapshot(headphonesQuery, (snapshot) => {
      const result = []
      snapshot.forEach((doc) => result.push(doc))
      setHeadphones(result)
      console.log(result)
      setLoading(false)
    })
  }

  useEffect(() => {
    getHeadphones()
  }, [])



  return (
    <Box>
      {/* <Link to='/about'>
        To about
      </Link> */}
      {/* <Button
      variant='contained'
      color='secondary'
      to='/about'
      component={NavLink}>
        To about
      </Button> */}
      <Slider />

      {loading && <Typography>loading...</Typography>}

      <Carousel collection={headphones} />

      {/* <Carousel itemsToShow='6' collection={headphones} /> */}
      {/* <Carousel itemsToShow='5' collection={usb} /> */}

      <News />
    </Box>
  )
}

export default Home