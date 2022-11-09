import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography, InputLabel, Breadcrumbs, Link,MenuItem, FormControl, Select, SelectChangeEvent, Grid } from '@mui/material';
import product1 from '../../images/carousel/product1.png';
import CarouselCard from '../../components/home/CarouselCard';
import { collection, onSnapshot, QueryDocumentSpanshot, DocumentData, query,orderBy, where, limit, getDocs } from 'firebase/firestore';
import { firestore, auth } from '../../firebase/clientApp';

const Catalog = () => {
  const params = useParams()
  const slug = params.slug || 'all'

  const [products, setProducts] = useState([])
  const [sort, setSort] = useState('');
  const [limitProducts, setLimitProducts] = useState('');
  
  //const [loading, setLoading] = useState(true)

  //const [usb, setUsb] = useState([])
  const productsCollection = collection(firestore, slug);

  const [queryState, setQueryState] = useState()

  const defineProductQuery = () => {
    if(sort==='default') {
      setQueryState(query(productsCollection, where('title', '!=', ''), limit(limitProducts)))
    }
    else if(sort==='price_asc') {
      setQueryState(query(productsCollection, orderBy("price"), limit(limitProducts)))
    }
    else if(sort==='price_desc') {
      setQueryState(query(productsCollection, orderBy("price", "desc"), limit(limitProducts)))
    }
    else if(sort==='rating') {
      setQueryState(query(productsCollection, orderBy("rating"), limit(limitProducts)))
    }
  }

  let unsub;
  const getProducts = async () => {
    //const headphonesQuery = query(headphonesCollection, where('availability', '==', true), limit(20))
    const productsQuery = query(productsCollection, where('title', '!=', ''), limit(100))

    unsub = onSnapshot(productsQuery, (snapshot) => {
      const result = []
      snapshot.forEach((doc) => result.push(doc))
      setProducts(result)
      //setLoading(false)
    })
  }


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

    if (sortType === 'default') return productsArray.sort((a, b) => a.id - b.id)
    if (sortType === 'price_asc') return productsArray.sort((a, b) => a.price - b.price)
    return productsArray.sort((a, b) => b.price - a.price)
    //ф-я для получения и сортировки данных из firebase
    // sort = price_asc, price_desc, default
  }

  useEffect(() => {
    //setProducts(getSorted(sort, slug))
    // console.log(params.slug);
    //console.log(slug);
    getProducts();
    //defineProductQuery();

    return () => { unsub() }
  }, [sort, slug, limitProducts])


  // const handleSortSelect = (e) => {
  //   setSort(e.target.value);
  //   console.log(sort);
  //   if (sort === 'default') return products.sort((a, b) => a.id - b.id)
  //   if (sort === 'price_asc') return products.sort((a, b) => a.price - b.price)
  //   return products.sort((a, b) => b.price - a.price)
  // };


  const handleSortSelect = async (e) => {
    setSort(e.target.value);
    //const headphonesQuery = query(headphonesCollection, where('availability', '==', true), limit(20))
    let productsQuery;
    if(sort==='default') {
      productsQuery = query(productsCollection, where('title', '!=', ''), limit(100))
    }
    else if(sort==='price_asc') {
      productsQuery = query(productsCollection, orderBy("price"), limit(100))
    }
    else if(sort==='price_desc') {
      productsQuery = query(productsCollection, orderBy("price", "desc"), limit(100))
    }
    else if(sort==='rating') {
      productsQuery = query(productsCollection, orderBy("rating"), limit(100))
    }
    //const productsQuery = query(productsCollection, where('title', '!=', ''), limit(100))

    unsub = onSnapshot(productsQuery, (snapshot) => {
      const result = []
      snapshot.forEach((doc) => result.push(doc))
      setProducts(result)
      console.log(products);
      console.log(sort);
      //setLoading(false)
    })
  }

  const handleLimitSelect = (e) => {
    setLimitProducts(e.target.value);
    console.log(limitProducts);
  };
  
  return (
    <div>
      <Breadcrumbs aria-label='breadcrumb' sx={{ my: '1rem' }}>
                <Link underline='hover' color='inherit' href='/' sx={{ fontSize: '12px', fontWeight: '300' }}>
                    Home
                </Link>
                <Typography color='text.primary' underline='hover' sx={{ fontSize: '12px', fontWeight: '400' }}>
                    {params.slug}
                </Typography>
            </Breadcrumbs>
      <Typography sx={{textTransform: 'capitalize', fontSize: '32px', fontWeight: '600'}}>
        {params.slug}
      </Typography>
      
      <Box sx={{display: 'flex', justifyContent: 'end', gap: '.5rem', mb: '2rem'}}>
        <FormControl sx={{ minWidth: '176px',}}>
        <InputLabel id="sort-type-label">Sort by</InputLabel>
        <Select
          labelId="sort-type-label"
          id="sort-type"
          value={sort}
          label="Sort by"
          onChange={(e)=>setSort(e.target.value)}
        >
          <MenuItem value='default'>Default</MenuItem>
          <MenuItem value='price_asc'>Price Ascending</MenuItem>
          <MenuItem value='price_desc'>Price Descending</MenuItem>
          <MenuItem value='rating'>Rating</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: '176px', }}>
        <InputLabel id="limit-type-label">Show</InputLabel>
        <Select
          labelId="limit-type-label"
          id="limit-type"
          value={limitProducts}
          label="Show"
          onChange={(e)=>setLimitProducts(e.target.value)}
        >
          <MenuItem value='limit_10'>10 per page</MenuItem>
          <MenuItem value='limit_15'>15 per page</MenuItem>
          <MenuItem value='limit_20'>20 per page</MenuItem>
        </Select>
      </FormControl>
      </Box>
      

      <Grid rowSpacing={3} columnSpacing={3}
      sx={{justifyContent: 'flex-start', }}
      className='gridCarouselCardInCatalog' container 
      //gap={3} 
      >
        {products.length === 0 ?
          (<Typography sx={{ whiteSpace: 'nowrap', width: '100%', fontStyle: 'italic', py: '8px' }}>
            loading...
          </Typography>) :

          (products.map((item) => (
            <Grid item key={item.id} xs={6} sm={4} md={3} lg={2.4}
            //sx={{ width: '210px'}}
            >
              <CarouselCard
              sx={{ height: '100%',}} 
              image={item.data().url}
              //image='slide.png'
              //image={product1} 
              
              productName={item.data().title} oldPrice={item.data().oldPrice} 
              price={item.data().price} availability={item.data().availability} 
              rating={item.data().rating} collection={slug}
              product={item}/>
            </Grid>
          ))
          )}

      </Grid>
    </div>
  )
}

export default Catalog