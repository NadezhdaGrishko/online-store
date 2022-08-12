import { Breadcrumbs, Button, Grid, Link, List, IconButton, ListItem, TextField, Typography, Divider } from '@mui/material'
import { Box } from '@mui/system';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useState, shouldComponentUpdate } from 'react';
import { useContext } from 'react';
import Context from '../context/Context';
import { useNavigate, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const Register = () => {
    const ctx = useContext(Context);
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
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

    const [errors, setErrors] = useState({})
    const [errorName, setErrorName] = useState('')
    const [emailError, setEmailError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')


    const validateName = (e) => {
        ctx.setUserName(e.target.value);
        ctx.userName == '' ? setErrorName('This field is required') : setErrorName('');
    }

    const validateEmail = (e) => {
        setUserEmail(e.target.value);
        if(userEmail === '') {
            setEmailError('This field is required')
        } else if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(userEmail)) {
            setEmailError('');
        } else {
            setEmailError('Email is not valid');
        }
    }




    const formIsValid = () => {
        const isValid = ctx.userName && userEmail && userPassword && confirmPassword &&
            errorName === '' && passwordError === '' && confirmPasswordError === '' && emailError === ''
        return isValid;
    }

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
                    error={errorName ? true : false}
                    id='first-name-required'
                    label='First Name'
                    value={ctx.userName}
                    onChange={validateName}
                    onBlur={validateName}
                    helperText={errorName}
                    //onChange={(e) => ctx.setUserName(e.target.value)}
                    placeholder='Your Name'
                />
                <TextField
                    id='last-name'
                    label='Last Name'
                    placeholder='Your Last Name'
                />
                <TextField
                    id='phone'
                    label='Phone Number'
                    placeholder='+38(___)___-__-__'
                    value={userPhoneNumber}
                    onChange={(e) => setUserPhoneNumber(e.target.value)}
                />
                <TextField
                    required
                    id='email-required'
                    label='E-mail'
                    type='email'
                    value={userEmail}
                    //onChange={(e) => setUserEmail(e.target.value)}
                    onChange={validateEmail}
                    //onBlur={validateEmail}
                    // autoComplete='current-password'
                    placeholder='Your Email'
                    helperText={emailError}
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
                    <Button
                        onClick={handleRegister}
                        disabled={!formIsValid()}
                        variant='contained' color='primary'
                        sx={{ border: 'none', py: '12px', px: '2.5rem', whiteSpace: 'nowrap' }}>
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