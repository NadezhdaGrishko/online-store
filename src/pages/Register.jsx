import { Breadcrumbs, Button, Grid, Link, List, IconButton, ListItem, TextField, Typography, Divider } from '@mui/material'
import { Box } from '@mui/system';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import Context from '../context/Context';
import { useNavigate, useHistory } from 'react-router-dom';

const Register = () => {
    const ctx = useContext(Context);
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('error');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');

    const validatePassword = () => {
        let isValid = true
        if (userPassword !== '' && confirmPassword !== '') {
            if (userPassword !== confirmPassword) {
                isValid = false
                setPasswordError('Passwords does not match')
            }
        }
        return isValid
    }


    const [isEmailValid, setIsEmailValid] = useState(false);
    const [emailMessage, setEmailMessage] = useState('');
    
    const emailRegex = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/;

    const validateEmail = (e) => {
        setUserEmail(e.target.value)
        //const emailRegex = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        if (emailRegex.test(userEmail)) {
            setIsEmailValid(true);
            setEmailMessage('Email is valid');
        } else {
            setIsEmailValid(false);
            setEmailMessage('Email not valid');
        }
    };

    const validateName = () => {
        
    }


    const navigate = useNavigate();
    const auth = getAuth();

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => { 
                const user = userCredential.user;
                console.log(user);
                navigate('/userAccount');
             })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                console.log(errorCode);
                console.log(errorMessage);
            })
    };

    // const handleRegister = (e) => {
    //     e.preventDefault()
    //     setError('')
    //     if (validatePassword()) {
    //         // Create a new user with email and password using firebase
    //         createUserWithEmailAndPassword(auth, userEmail, userPassword)
    //             .then(() => {
    //                 sendEmailVerification(auth.currentUser)
    //                     .then(() => {
    //                         navigate('/verify-email')
    //                     }).catch((err) => alert(err.message))
    //                 })

    //             }else {
    //                 alert('Passwords don\'t match')
    //                 console.log('Passwords not valid');
    //             }
    //    // setUserEmail('')
    //     setUserPassword('')
    //     setConfirmPassword('')
    //   }

        return (
            <>
                <Breadcrumbs aria-label='breadcrumb' sx={{ my: '1rem' }}>
                    <Link underline='hover' color='inherit' href='/' sx={{ fontSize: '12px', fontWeight: '300' }}>
                        Home
                    </Link>
                    <Link underline='hover' color='inherit' href='/login' sx={{ fontSize: '12px', fontWeight: '300' }}>
                        Customer Login
                    </Link>
                    <Typography color='text.primary' underline='hover' sx={{ fontSize: '12px', fontWeight: '400' }}>
                        Register
                    </Typography>
                </Breadcrumbs>

                <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '32px', mb: '1.5rem' }}>Register</Typography>
                <Typography color='text.primary' sx={{ fontWeight: '600', fontSize: '18px' }}>Contact Details</Typography>
                <Divider sx={{ my: '1rem' }} />
                <Box
                    component='form'
                    noValidate
                    autoComplete='off'
                    sx={{
                        display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'start',

                    }}>
                    <TextField
                        required
                        error={validateName}
                        id='first-name-required'
                        label='First Name'
                        value={ctx.userName}
                        onChange={(e) => ctx.setUserName(e.target.value)}
                        placeholder='Your Name'
                    />
                    <TextField
                        required
                        id='last-name-required'
                        label='Last Name'
                        placeholder='Your Last Name'
                    />
                    <TextField
                        required
                        id='phone-required'
                        label='Phone Number'
                        placeholder='+38(___)___-__-__'
                        value={userPhoneNumber}
                        //onChange={validatePhoneNumber}
                    />
                    <TextField
                        required
                        id='email-required'
                        label='E-mail'
                        type='email'
                        value={userEmail}
                        //onChange={(e) => setUserEmail(e.target.value)}
                        onChange={validateEmail}
                        // autoComplete='current-password'
                        placeholder='Your Email'
                    />
                    <TextField
                        required
                        id='password-required'
                        label='Password'
                        type='password'
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        autoComplete='current-password'
                        placeholder='Your Password'
                    />
                    <TextField
                        required
                        error
                        helperText={passwordError}
                        id='confirm-required'
                        label='Confirm Password'
                        type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoComplete='current-password'
                        placeholder='Confirm Your Password'
                    />

                    <Box sx={{ mt: '12px', display: 'flex', gap: '12px', width: '100%', alignItems: 'center' }}>
                        <Button onClick={handleRegister} variant='contained' color='primary' sx={{ border: 'none', py: '12px', px: '2.5rem', whiteSpace: 'nowrap' }}>
                            Sign Up
                        </Button>
                        <Button color='primary' sx={{ border: 'none', py: '8px', }}>
                            Forgot Your Password?
                        </Button>
                    </Box>
                </Box>

            </>
        )
    }

    export default Register