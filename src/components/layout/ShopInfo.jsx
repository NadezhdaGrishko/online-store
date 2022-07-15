import React, { useState } from 'react'
import { List, Typography, ListItemButton, ListItemText, Collapse, Tooltip, Button } from '@mui/material';

const ShopInfo = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => { setOpen(!open); }
    return (
        <>
            Some shop information must be here
        </>

        // <List>
        //   <ListItemButton onClick={handleClick}>
        //     <Typography sx={{color: theme.lightTheme.palette.gray.main,
        //     fontWeight: '600', fontSize: '12px'}}>
        //       Mon-Thu: 
        //     </Typography>
        //     <ListItemText primary="9:00 AM - 5:30 PM"
        //     sx={{color: 'white',
        //     fontWeight: '600', fontSize: '12px'}}
        //     />
        //     {open ? <ExpandLess/> : <ExpandMore/>}
        //   </ListItemButton>
        //   <Collapse in={open} timeout='auto' unmountOnExit>
        //     <List component='div' disablePadding>
        //       <ListItemButton>
        //         <Box>
        //           <IconButton aria-label='time'>
        //             <img src={require('../../images/icons/icon-time.png')} alt="time" />
        //           </IconButton>
        //           <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', rowGap: '8px', color: theme.lightTheme.palette.gray.main,
        //     fontWeight: '600', fontSize: '13px'}}>
        //             <Typography sx={{fontWeight: '400', fontSize: '12px', color: 'black'}}>
        //             We are open:
        //           </Typography>
        //           <Typography>Mon-Thu: 9:00 AM - 5:30 PM</Typography>
        //           <Typography>Fr: 9:00 AM - 6:00 PM</Typography>
        //           <Typography>Sat: 11:00 AM - 5:00 PM</Typography>
        //           </Box>

        //         </Box>
        //       </ListItemButton>
        //     </List>
        //   </Collapse>
        // </List> 
    )
}

export default ShopInfo