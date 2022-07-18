import React from 'react'
import { Box, Card, Button, CardContent, CardHeader, CardMedia, Rating, Grid, Typography, CardActions, IconButton } from '@mui/material';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import product1 from '../../images/carousel/product1.png'
import product2 from '../../images/carousel/product2.png'
import product3 from '../../images/carousel/product3.png'
import product4 from '../../images/carousel/product4.png'
import theme from '../../theme';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { NavLink } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import CallIcon from '@mui/icons-material/Call';

const CarouselCard = (props) => {

    const [ratingValue, setRatingValue] = useState(2);
    return (
        <>
            <Card
                sx={{ width: { xs: '174px', md: '230px', lg: '234px' } }}>

                    {props.availability ? 
                <CardContent sx={{
                    color: theme.lightTheme.palette.success.main,
                    //color: theme.success,
                    fontWeight: '400',
                    fontSize: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '2px',
                }}>
                    {/* отображать в зависимости от availability 'in stock'/'check availability' */}
                    <CheckCircleIcon sx={{ width: '10px', height: '10px' }} />
                    in stock
                </CardContent>
                :
                <CardContent sx={{
                    color: theme.lightTheme.palette.error.main,
                    //color: theme.success,
                    fontWeight: '400',
                    fontSize: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '2px',
                }}>
                    {/* отображать в зависимости от availability 'in stock'/'check availability' */}
                    <CallIcon sx={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: theme.lightTheme.palette.error.main, color: 'white', border: '1px solid #C94D3F'}} />
                    chech availability
                </CardContent>
}
                <CardMedia
                    component='img'
                    image={props.image}
                    alt='product'
                />

                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'nowrap', }}>
                        <Rating
                            name='rating'
                            value={ratingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }}
                            sx={{ fontSize: '12px', }}
                        />
                        <Typography sx={{
                            color: theme.lightTheme.palette.gray.main,
                            whiteSpace: 'nowrap',
                            fontSize: '12px',
                        }}>
                            Reviews ({ratingValue})
                        </Typography>
                    </Box>
                    <Typography component={NavLink} to='/'
                        sx={{ color: 'black', fontWeight: '400', fontSize: '14px', paddingTop: '6px', textDecoration: 'none', }}>
                        {props.productName}
                    </Typography>

                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', }}>
                        <Box sx={{ paddingTop: '8px' }}>
                            <Typography sx={{
                                color: theme.lightTheme.palette.darkGray.main,
                                fontSize: '14px',
                                fontWeight: '400',
                                textDecoration: 'line-through',

                            }}>
                                {props.oldPrice}
                            </Typography>
                            <Typography sx={{
                                color: 'black',
                                fontSize: '18px',
                                fontWeight: '600',
                            }}>
                                {props.price}
                            </Typography>
                        </Box>

                        <Button
                            variant='outlined'
                            color='primary'
                            to='/about'
                            component={NavLink}
                            sx={{
                                minWidth: 'auto',
                                height: '36px',
                                width: '36px',
                            }}
                        >
                            <img src={require('../../images/icons/icon-cart.png')} alt='cart' />
                        </Button>
                        <Button
                            variant='outlined'
                            color='error'
                            to='/about'
                            component={NavLink}
                            sx={{
                                minWidth: 'auto',
                                height: '36px',
                                width: '36px',
                            }}>
                            <ClearIcon />
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </>
    )
}

export default CarouselCard