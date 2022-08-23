import React from 'react';
import { Breadcrumbs, Button, Grid, Link, List, IconButton, ListItem, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function ContactUs() {

    return (
        <>
            <Breadcrumbs aria-label='breadcrumb' sx={{ my: '1rem' }}>
                <Link underline='hover' color='inherit' href='/' sx={{ fontSize: '12px', fontWeight: '300' }}>
                    Home
                </Link>
                <Typography color='text.primary' underline='hover' sx={{ fontSize: '12px', fontWeight: '400' }}>
                    Contact Us
                </Typography>
            </Breadcrumbs>

            <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '32px', my: '.5rem' }}>Contact Us</Typography>

            <Box sx={{ display: 'flex', gap: '3rem', alignItems: 'start'}}>

                <Box className='contacts-form' sx={{flexBasis: '50%', flexGrow: '1'}}>
                    <Typography color='text.primary' sx={{ fontWeight: '300', fontSize: '14px', mb: '1rem' }}>We love hearting from you, our Shop customers.<br /> Please contact us and we make sure to get back to you as soon as we possibly can.</Typography>

                    <Box
                        component='form'
                        noValidate
                        autoComplete='off'
                    >

                        <Box sx={{
                            display: 'flex', gap: '1.5rem', alignItems: 'start',

                        }}>
                            <Box sx={{
                                display: 'flex', flexDirection: 'column', gap: '1.5rem', flexBasis: '50%', flexShrink: '0',
                            }}>
                                <TextField
                                    required
                                    id='name-required'
                                    label='Your Name'
                                    type='text'
                                    placeholder='Your Name'
                                    fullWidth
                                />

                                <TextField
                                    required
                                    id='password-required'
                                    label='Your Phone Number'
                                    placeholder='Your Phone Number'
                                    fullWidth
                                />

                            </Box>
                            <TextField
                                required
                                id='password-required'
                                label='Your Email'
                                placeholder='Your Email'
                                fullWidth
                            />
                        </Box>
                        <TextField
                            required
                            id='password-required'
                            label='What is on your mind?'
                            placeholder='Your Email'
                            fullWidth
                            multiline
                            rows={6}
                            sx={{ my: '1.5rem' }}
                        />

                        <Button
                            variant='contained'
                            sx={{ px: '2rem' }}>
                            Submit
                        </Button>



                    </Box>
                </Box>

                <Box className='address-form'
                    sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', p: '1.5rem 6rem 3rem 2rem', backgroundColor: 'rgba(204,222,255,.2)' }}>

                    <Box className='address-item' sx={{ display: 'flex', gap: '.5rem', }}>
                        <LocationOnIcon sx={{ mt: '4px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                                Address:
                            </Typography>
                            <Typography sx={{ fontSize: '13px', fontWeight: '400' }}>
                                1234 Street Address Citi Address, 1234
                            </Typography>
                        </Box>
                    </Box>

                    <Box className='address-item' sx={{ display: 'flex', gap: '.5rem', }}>
                        <PhoneIcon fontSize='small' sx={{ mt: '4px', borderRadius: '50%', border: '1px solid', p: '2px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                                Phone:
                            </Typography>
                            <Typography sx={{ fontSize: '13px', fontWeight: '400' }}>
                                (071)324-64-24
                            </Typography>
                        </Box>
                    </Box>

                    <Box className='address-item' sx={{ display: 'flex', gap: '.5rem', }}>
                        <AccessTimeIcon sx={{ mt: '4px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                                We are open:
                            </Typography>
                            <Typography sx={{ fontSize: '13px', fontWeight: '400' }}>
                                Monday - Thursday: 9:00 AM - 5:30 PM <br/>
                                Friday: 9:00 AM - 6:00 PM <br/>
                                Saturday: 11:00 AM - 5:00 PM
                            </Typography>
                        </Box>
                    </Box>

                    <Box className='address-item' sx={{ display: 'flex', gap: '.5rem', }}>
                        <AlternateEmailIcon sx={{ mt: '4px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                                E-mail:
                            </Typography>
                            <Typography component={Link} sx={{ fontSize: '13px', fontWeight: '400', textDecoration: 'none' }}>
                                shop@email.com
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default ContactUs;