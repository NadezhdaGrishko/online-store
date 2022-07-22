import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import Carousel from '../components/home/Carousel';
import News from '../components/home/News';
import Slider from '../components/home/Slider';

import { firestore, auth } from '../firebase/clientApp';
import { collection, onSnapshot, QueryDocumentSpanshot, DocumentData, query, where, limit, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

//import {getAllProducts, getUsb, getHeadphones} from '../services/services.jsx'



const Home = (props) => {
  const params = useParams()
  const slug = params.slug || 'all'

  //const navigate = useNavigate()

  const [loading, setLoading] = useState(true)


  const [headphones, setHeadphones] = useState([])
  const headphonesCollection = collection(firestore, 'headphones');

  let unsub

  const getHeadphones = async () => {
    //const headphonesQuery = query(headphonesCollection, where('availability', '==', true), limit(20))
    const headphonesQuery = query(headphonesCollection, where('availability', 'in', [true, false]), limit(20))

    unsub = onSnapshot(headphonesQuery, (snapshot) => {
      const result = []
      snapshot.forEach((doc) => result.push(doc))
      setHeadphones(result)
      setLoading(false)
    })
  }


  //функции getAll(), getAllByCategory() импортируем из отдельного файла с функциями
  // useEffect(()=> {
  //   if(slug === 'all') setProducts(getAll())
  //   else setProducts(getAllByCategory(slug))
  // }, [slug])

  const [usb, setUsb] = useState([])
  const usbCollection = collection(firestore, 'usb');

  const getUsb = async () => {
    //const headphonesQuery = query(headphonesCollection, where('availability', '==', true), limit(20))
    const usbQuery = query(usbCollection, where('title', '!=', ''), limit(20))

    const unsub = onSnapshot(usbQuery, (snapshot) => {
      const result = []
      snapshot.forEach((doc) => result.push(doc))
      setUsb(result)
      setLoading(false)
    })
  }

  //не работает нормально - написать нор функцию для получения всех товаров
  const [allProgucts, setAllProducts] = useState([])
  const getAllProducts = async () => {
    const result = await headphones.concat(usb).concat(usb)
    setAllProducts(result)
    console.log(result);
  }

  useEffect(() => {
    //navigate('/login')
    //if (!auth.currentUser) navigate('/login')
    getHeadphones()
    getUsb()

    return () => { unsub() }
  }, 
  //[auth.currentUser]
  )

  return (
    <Box>
      <Slider />

      <Typography>{slug}</Typography>

      {loading && <Typography>loading...</Typography>}

      <Divider textAlign='left' sx={{ py: '30px' }}>HEADPHONES</Divider>
      <Carousel collection={headphones} />

      <Divider >USB</Divider>
      <Carousel collection={usb} />

      <News />
    </Box>
  )
}

export default Home