import React, { useState, useEffect } from 'react';
import { useLocation, useParams, NavLink } from 'react-router-dom';
import { Tab, Tabs, Box, Typography, TextField, IconButton, Breadcrumbs, Link, Paper, Table, TableCell, TableContainer, TableRow, TableBody, Button } from '@mui/material';
import { collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { useContext } from 'react';

import Context from '../../context/Context';
import { firestore, auth } from '../../firebase/clientApp';

function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography sx={{ fontWeight: '600' }}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function createData(
    name,
    property,
) {
    return { name, property };
}


const Product = () => {

    const { cart, addToCart, removeFromCart, isInCart } = useContext(Context)
    const params = useParams()
    const productSlug = params.productSlug || 'all'

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const location = useLocation()
    let collectionName = location.pathname.split('/')[2]

    const [product, setProduct] = useState({ title: "", description: "", availability: "", price: "", url: "headphone1.png", rating: '', oldPrice: '' })
    //const [product, setProduct] = useState({})
    // const [products, setProducts] = useState([])

    let unsub;

    const getProduct = async () => {
        const productQuery = query(collection(firestore, collectionName), where("title", "==", productSlug));
        const querySnapshot = await getDocs(productQuery);

        let updatedProduct = {};
        unsub = querySnapshot.forEach((doc) => {
            updatedProduct = { title: doc.data().title, description: doc.data().description, availability: doc.data().availability, url: doc.data().url, rating: doc.data().rating, price: doc.data().price, oldPrice: doc.data().oldPprice, };
            console.log(doc.id, " => ", doc.data().url);
            setProduct(product => ({
                ...product,
                ...updatedProduct
            }))
        })
    }




    const [productPrice, setProductPrice] = useState('1190')
    const [productOldPrice, setProductOldPrice] = useState('1250')
    const [products, setProducts] = useState([])
    const productsCollection = collection(firestore, collectionName);
    
    const getProducts = async () => {
        //const headphonesQuery = query(headphonesCollection, where('availability', '==', true), limit(20))
        const productsQuery = query(productsCollection, where("title", "==", productSlug));

        unsub = onSnapshot(productsQuery, (snapshot) => {
            const result = []
            snapshot.forEach((doc) => result.push(doc))
            setProducts(result)
            setProductPrice(products[0].data().price)
            setProductOldPrice(products[0].data().oldPrice)    
        })
        
    }
    useEffect(() => {
        //navigate('/login')
        //if (!auth.currentUser) navigate('/login')
        getProduct()
        getProducts()
        //getUsb()

        return () => {
            //unsub() 
        }
    }, [cart, productPrice, productOldPrice]
        //[product] 
        //[auth.currentUser]
    )

    const rows = [
        createData('CPU', 'N/A'),
        createData('Featured', 'N/A'),
        createData('I/O Parts', 'N/A'),
    ];


    return (
        <div>

            {/* 
            <br />Product: {product.url} $
            {product.title}
            {collectionName} */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Breadcrumbs aria-label='breadcrumb' sx={{ my: '1rem' }}>
                    <Link underline='hover' color='inherit' href='/' sx={{ fontSize: '12px', fontWeight: '300' }}>
                        Home
                    </Link>
                    <Link underline='hover' color='inherit' href={`/products/${collectionName}`} sx={{ textTransform: 'capitalize', fontSize: '12px', fontWeight: '300' }}>
                        {collectionName}
                    </Link>
                    <Typography color='text.primary' underline='hover' sx={{ fontSize: '12px', fontWeight: '400', textTransform: 'capitalize' }}>
                        {productSlug}
                    </Typography>
                </Breadcrumbs>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            sx={{ width: '70px', height: '58px', backgroundColor: '#F5F7FF', borderRadius: '6px', }}
                            //value={item.quantity}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton
                                // onClick={() => ctx.increaseQuantity(item.id)}

                                sx={{ borderRadius: '4px', p: '6px', }}>
                                <img src={require('../../images/icons/icon-arrow-top.png')} alt='top' />
                            </IconButton>
                            <IconButton
                                // onClick={() => ctx.decreaseQuantity(item.id)}
                                // disabled={item.quantity === 1}
                                sx={{ borderRadius: '4px', p: '6px', backgroundColor: '#F5F7FF' }}>
                                <img src={require('../../images/icons/icon-arrow-bottom.png')} alt='bottom' />
                            </IconButton>
                        </Box>
                    </Box>
                     <Button variant='contained'
                     
                        onClick={() => addToCart(products[0])}>
                        Add To Cart
                    </Button>
                </Box>
            </Box>


            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="product tabs">
                        <Tab sx={{ textTransform: 'capitalize' }} label="About Product" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize' }} label="Details" {...a11yProps(1)} />
                        <Tab sx={{ textTransform: 'capitalize' }} label="Specs" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Box sx={{ position: 'relative', flexBasis: '60%' }}>
                        <Box sx={{ position: 'absolute', width: '60vw', height: '100%', backgroundColor: '#F5F7FF', top: '0', left: '0', transform: 'translateX(calc((-200% + 1336px)/2))', zIndex: '-55' }}></Box>

                        <TabPanel value={value} index={0}>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '1rem', backgroundColor: '#F5F7FF', py: '2rem', px: '3rem', height: '528px' }}>

                                <Typography sx={{ fontSize: '32px', fontWeight: '500', lineHeight: '40px' }}>
                                    {productSlug}
                                </Typography>

                                <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#0156FF' }}>
                                    Be the first to review this product
                                </Typography>

                                <Typography sx={{ fontSize: '18px', fontWeight: '300' }}>
                                    {product.description}
                                </Typography>
                                <Typography sx={{ fontSize: '12px', fontWeight: '400', mt: '1rem' }}>
                                    Have a Question? <Typography sx={{ fontSize: '12px', fontWeight: '400', pl: '2px' }} to='/contacts' component={NavLink}>Contact Us</Typography>
                                </Typography>

                            </Box>
                        </TabPanel>

                        <TabPanel value={value} index={1}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '1rem', backgroundColor: '#F5F7FF', py: '2rem', px: '3rem', height: '528px' }}>

                                <Typography sx={{ fontSize: '32px', fontWeight: '500', lineHeight: '40px' }}>
                                    {productSlug}
                                </Typography>

                                <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#0156FF' }}>
                                    Be the first to review this product
                                </Typography>

                                <Typography sx={{ fontSize: '14px', fontWeight: '300', lineHeight: '24px' }}>
                                    •  Intel Core i7-10700F<br />
                                    •  Intel H410<br />
                                    •  WHITE<br />
                                    •  NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6<br />
                                    •  SO-DIMM 16GB (16GB x 1) DDR4 2666MHz<br />
                                    •  2 total slots (64GB Max)<br />
                                    •  512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM<br />
                                    •  Gaming Keyboard GK30 + Gaming Mouse GM11<br />
                                    •  3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)<br />
                                    •  Intel WGI219Vethernet (10/100/1000M)<br />
                                    •  AX200 (WIFI 6)+BT5.1<br />
                                    •  PSU 330W<br />
                                    •  Fan Cooler
                                </Typography>

                                <Typography sx={{ fontSize: '12px', fontWeight: '400', mt: '1rem' }}>
                                    Have a Question? <Typography sx={{ fontSize: '12px', fontWeight: '400', pl: '2px' }} to='/contacts' component={NavLink}>Contact Us</Typography>
                                </Typography>

                            </Box>
                        </TabPanel>

                        <TabPanel value={value} index={2}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '1rem', backgroundColor: '#F5F7FF', py: '2rem', px: '3rem', height: '528px' }}>

                                <Typography sx={{ fontSize: '32px', fontWeight: '500', lineHeight: '40px' }}>
                                    {productSlug}
                                </Typography>

                                <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#0156FF' }}>
                                    Be the first to review this product
                                </Typography>


                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                                        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="left">{row.name}</TableCell>
                                                    <TableCell align="left">{row.property}</TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>




                                <Typography sx={{ fontSize: '12px', fontWeight: '400', mt: '1rem', }}>
                                    Have a Question? <Typography sx={{ fontSize: '12px', fontWeight: '400', pl: '2px', color: 'inherit' }} to='/contacts' component={NavLink}>Contact Us</Typography>
                                </Typography>

                            </Box>
                        </TabPanel>
                    </Box>

                    <Box sx={{ flexBasis: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ backgroundColor: '#fff', display: 'flex', pt: '36px', flexGrow: '1', width: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', gap: '.5rem', mx: '24px' }}>
                                <img src={require('../../images/icons/icon-like.png')} alt='like' />
                                <img src={require('../../images/icons/icon-chart.png')} alt='chart' />
                                <img src={require('../../images/icons/icon-message.png')} alt='message' />
                            </Box>
                            <Box sx={{ width: '100%' }}>
                                {/* <img src={require(`../../images/products/${product.url}`)} alt='product' /> */}
                                <img src={require(`../../images/products/${product.url}`)} alt='product'
                                    className='productImageInProductPage'
                                />
                            </Box>

                        </Box>
                        <Box sx={{ alignSelf: 'start', margin: '24px' }}>
                            {productOldPrice &&
                                <Typography sx={{
                                    color: '#666',
                                    fontSize: '24px',
                                    fontWeight: '400',
                                    textDecoration: 'line-through',

                                }}>
                                    ${productOldPrice}
                                </Typography>
                            }
                            <Typography sx={{
                                color: 'black',
                                fontSize: '32px',
                                fontWeight: '600',
                            }}>
                                ${productPrice}
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </div>
    )
}

export default Product