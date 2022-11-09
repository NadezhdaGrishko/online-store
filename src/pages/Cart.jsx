import React, { useState } from 'react'
import { Box, TextField, Button, Typography, InputLabel, IconButton, Table, TableCell, TableHead, TableBody, TableRow, Breadcrumbs, Link, Grid } from '@mui/material';
import { useContext } from 'react';
import Context from '../context/Context';
import { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const CartTableRow = (props) => {
  const { item } = props
  const ctx = useContext(Context)

  const [openCartDialog, setOpenCartDialog] = useState(false);

  const handleClickOpenCartDialog = () => {
    setOpenCartDialog(true);
  };

  const handleCloseCartDialog = () => {
    setOpenCartDialog(false);
  };

  const handleRemoveItemFromProductCart = () => {
    ctx.removeFromCart(item.id)
    setOpenCartDialog(false);
  };

  return (
    <>
    <TableRow>
      <TableCell sx={{ width: '120px', height: '120px', }}>
        <img className='productImageInCart'
          src={require(`../images/products/${item.data().url}`)} alt='product' />
      </TableCell>
      <TableCell>
        <Typography>
          {item.data().title}
        </Typography>
      </TableCell>
      <TableCell>
        ${item.data().price}
      </TableCell>
      <TableCell>
        {item.quantity}
      </TableCell>
      <TableCell >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            sx={{ width: '70px', height: '58px', backgroundColor: '#F5F7FF', borderRadius: '6px', }}
            value={item.quantity} />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton
              onClick={() => ctx.increaseQuantity(item.id)}

              sx={{ borderRadius: '4px', p: '6px', }}>
              <img src={require('../images/icons/icon-arrow-top.png')} alt='top' />
            </IconButton>
            <IconButton
              onClick={() => ctx.decreaseQuantity(item.id)}
              disabled={item.quantity === 1}
              sx={{ borderRadius: '4px', p: '6px', backgroundColor: '#F5F7FF' }}>
              <img src={require('../images/icons/icon-arrow-bottom.png')} alt='bottom' />
            </IconButton>
          </Box>
        </Box>

      </TableCell>
      <TableCell>
        <IconButton
         onClick={handleClickOpenCartDialog}
          //onClick={() => ctx.removeFromCart(item.id)}
          >
          <img src={require('../images/icons/icon-delete.png')} alt='delete' />
        </IconButton>
      </TableCell>
    </TableRow>

    <Dialog
        open={openCartDialog}
        onClose={handleCloseCartDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remove item"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to remove this item from your cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCartDialog}>Disagree</Button>
          <Button onClick={handleRemoveItemFromProductCart} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const Cart = () => {

  const [rows, setRows] = useState([])
  const ctx = useContext(Context)
  useEffect(() => {
    setRows(ctx.cart)
  }, [ctx.cart])

  return (
    <>
      <Breadcrumbs aria-label='breadcrumb' sx={{ my: '1rem' }}>
        <Link underline='hover' color='inherit' href='/' sx={{ fontSize: '12px', fontWeight: '300' }}>
          Home
        </Link>
        <Typography color='text.primary' underline='hover' sx={{ fontSize: '12px', fontWeight: '400' }}>
          Cart
        </Typography>
      </Breadcrumbs>

      <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '32px', my: '.5rem' }}>Shopping Cart</Typography>

      <Box sx={{ overflowX: 'auto', minWidth: 700 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '16px', fontWeight: '600' }}>
                Item
              </TableCell>
              <TableCell>

              </TableCell>
              <TableCell sx={{ fontSize: '16px', fontWeight: '600' }}>
                Price
              </TableCell>
              <TableCell sx={{ fontSize: '16px', fontWeight: '600' }}>
                Quantity
              </TableCell>
              <TableCell sx={{ fontSize: '16px', fontWeight: '600' }}>
                Subtotal
              </TableCell>
              <TableCell>

              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 &&
              rows.map((item, index) => (
                <CartTableRow key={index} item={item} />
              ))}
          </TableBody>
        </Table>

        <Grid container justifyContent='space-between' sx={{mt:'1rem'}}>
          <Grid item>
            <Typography sx={{fontSize: '18px', fontWeight: '400'}}>
              Total items: <Typography component='span' sx={{fontSize: '20px', fontWeight: '600'}}>{ctx.getTotalQuantity()}</Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{fontSize: '18px', fontWeight: '400'}}>
              Total price:  <Typography component='span' sx={{fontSize: '20px', fontWeight: '600'}}>${ctx.getTotalPrice()}</Typography>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Cart