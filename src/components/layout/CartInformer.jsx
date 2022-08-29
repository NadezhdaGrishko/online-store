import React from 'react'
import { useContext } from 'react';
import Context from '../../context/Context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from '@mui/material';

const CartInformer = () => {

    const { getTotalQuantity } = useContext(Context)

    return (
        <React.Fragment>
            <IconButton aria-label='cart' size='large'
                color={getTotalQuantity() > 0 ? 'inherit' : 'default'}
            //color='inherit'
            >
                <Badge badgeContent={getTotalQuantity()} color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </React.Fragment>
    )
}

export default CartInformer