import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box, InputLabel , MenuItem, FormControl, Select, SelectChangeEvent  } from '@mui/material';

const Catalog = () => {
    const params = useParams()
    const slug = params.slug || 'all'

    const [products, setProducts] = useState([])

  const [sort, setSort] = useState('');

  const getAll = () => {
    return products
  }

  const getAllByCategory = (categorySlug) => {
    return products.filter(p => p.category === categorySlug)
  }
  const getOne = (productSlug) => {
    return products.find(p => p.slug === productSlug)
  }

    const getSorted = (sortType, slug) => {
      const productsArray = slug === 'all' ? getAll() : getAllByCategory(slug)

      if(sortType === 'default') return productsArray.sort((a,b) => a.id - b.id)
      if(sortType === 'price_asc') return productsArray.sort((a,b) => a.price - b.price)
      return productsArray.sort((a,b) => b.price - a.price)
      //ф-я для получения и сортировки данных из firebase
      // sort = price_asc, price_desc, default
    }

    useEffect(() => {
      setProducts(getSorted(sort, slug))
        // console.log(params.slug);
        // console.log(slug);
      },[sort, slug])


  const handleSortSelect = (e) => {
    setSort(e.target.value);
    console.log(sort);
  };
  return (
    <div>
      Catalog Page: {params.slug}
      <FormControl sx={{minWidth: '176px', ml: 'auto'}}>
        <InputLabel id="sort-type-label">Sort by</InputLabel>
        <Select
          labelId="sort-type-label"
          id="sort-type"
          value={sort}
          label="Sort by"
          onChange={handleSortSelect}
        >
          <MenuItem value='default'>Default</MenuItem>
          <MenuItem value='price_asc'>Price Ascending</MenuItem>
          <MenuItem value='price_desc'>Price Descending</MenuItem>
        </Select>
      </FormControl>
      
      </div>
  )
}

export default Catalog