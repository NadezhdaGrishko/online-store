import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Catalog = () => {
    const route = useParams()

    useEffect(() => {
    
        console.log(route.slug);
      }, 
      )
  return (
    <div>Catalog Page: {route.slug}</div>
  )
}

export default Catalog