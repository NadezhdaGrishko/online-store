import React from 'react'
import {useParams} from 'react-router-dom'
import Slider from '../components/home/Carousel'

const Products = (props) => {
    const params = useParams()
    const slug = params.slug || 'all'
  return (
    <>
    <Slider/>
    <div>Products</div>
    </>
  )
}

export default Products