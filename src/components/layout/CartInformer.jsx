import React from 'react'
import { useContext, useState } from 'react';
import Context from '../../context/Context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge, Menu, MenuItem, Divider, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const CartInformer = () => {

    const { cart, getTotalQuantity, getTotalPrice } = useContext(Context)

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleAnchor = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <React.Fragment>
            <IconButton aria-label='cart' size='large'
                //color={getTotalQuantity() > 0 ? 'inherit' : 'default'}
                //color='inherit'
                onClick={handleAnchor}
            >
                <Badge badgeContent={getTotalQuantity()}
                    color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>

            {cart.length > 0 &&
                (
                    <Menu
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        sx={{ maxWidth: '324px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '.5rem', px: '30px', py: '16px' }}>
                            <Typography sx={{ fontWeight: '600', fontSize: '18px', textAlign: 'center' }}>
                                My Cart
                            </Typography>
                            <Typography sx={{ fontWeight: '400', color: '#A2A6B0', fontSize: '12px', textAlign: 'center' }}>
                                2 items in cart
                            </Typography>
                            <Button 
                            component={NavLink} 
                            to='/cart' 
                            onClick={handleClose}
                            sx={{ width: '250px', fontSize: '14px', fontWeight: '600' }}>
                                View or Edit Your Cart
                            </Button>

                        </Box>


                        <Divider />

                        {
                            cart.map((item, index) => (
                                <MenuItem key={index}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: '400' }}>
                                            {item.quantity} &times;
                                        </Typography>
                                        <Box sx={{ width: '65px', height: '65px', mx: '.5rem' }}>
                                            <img className='productImageInCart'
                                                src={require(`../../images/products/${item.data().url}`)} alt='product' />
                                        </Box>
                                        <Typography sx={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'normal', }}>
                                            {item.data().title}
                                        </Typography>
                                    </Box>
                                </MenuItem>
                            ))
                        }
                        <Divider />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '16px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: '600', color: '#A2A6B0', whiteSpace: 'normal', }}>
                                Total: 
                                <Typography component='span' sx={{ ml: '4px', fontSize: '18px', fontWeight: '600', color: '#000', whiteSpace: 'normal' }}>
                                    {getTotalQuantity()} items
                                </Typography>
                                
                            </Typography>
                            <Typography sx={{ fontSize: '14px', color: '#A2A6B0', fontWeight: '600', whiteSpace: 'normal' }}>
                                Summ: 
                                <Typography component='span' sx={{ ml: '4px', fontSize: '18px', fontWeight: '600', color: '#000', whiteSpace: 'normal' }}>
                                  $ {getTotalPrice()} 
                                    </Typography>
                            </Typography>
                        </Box>

                    </Menu>
                )
            }




            {cart.length <= 0 &&
                (
                    <Menu
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        sx={{}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '.5rem', px: '30px', py: '16px' }}>
                            <Typography sx={{ fontWeight: '600', fontSize: '18px', textAlign: 'center' }}>
                                My Cart
                            </Typography>
                            <Typography sx={{ fontWeight: '400', color: '#A2A6B0', fontSize: '12px', textAlign: 'center' }}>
                                0 items in cart
                            </Typography>
                            <Typography sx={{ fontWeight: '600', color: '#000', fontSize: '18px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                                The Cart is Empty
                            </Typography>

                        </Box>


                        <Divider />

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '16px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: '600', color: '#A2A6B0', whiteSpace: 'normal' }}>
                                Total: <Typography component='span' sx={{ fontSize: '18px', fontWeight: '600', color: '#000', whiteSpace: 'normal' }}>0</Typography>
                            </Typography>
                            <Typography sx={{ fontSize: '14px', color: '#A2A6B0', fontWeight: '600', whiteSpace: 'normal' }}>
                                Summ: <Typography component='span' sx={{ fontSize: '18px', fontWeight: '600', color: '#000', whiteSpace: 'normal' }}>0</Typography>
                            </Typography>
                        </Box>
                    </Menu>
                )
            }
        </React.Fragment>
    )
}

export default CartInformer