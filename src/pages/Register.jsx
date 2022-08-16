import { Breadcrumbs, Button, Grid, Link, List, IconButton, ListItem, TextField, Typography, Divider } from '@mui/material'
import { Box } from '@mui/system';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useState, shouldComponentUpdate } from 'react';
import { useContext } from 'react';
import Context from '../context/Context';
import { useNavigate, useHistory } from 'react-router-dom';

const Register = () => {
    const ctx = useContext(Context);
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');

    const validatePassword = (e) => {
        setUserPassword(e.target.value)
        if (userPassword === '') {
            setPasswordError('This field is required')
        }
        else if (userPassword.length < 6) {
            setPasswordError('Password should be at least 6 characters')
        }
        else {
            setPasswordError('')
        }
    }

    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        let isValid = true
        if (confirmPassword === '') {
            setConfirmPasswordError('This field is required')
        }
        else if (userPassword !== '' && confirmPassword !== '') {
            if (userPassword !== confirmPassword) {
                isValid = false
                setConfirmPasswordError('Passwords don\'t match')
            } else {
                setConfirmPasswordError('')
            }
        }
        return isValid
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
                alert(errorCode)
            })
    };

    const [errorName, setErrorName] = useState('')
    const [emailError, setEmailError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')


    const validateName = (e) => {
        ctx.setUserName(e.target.value);
        ctx.userName === '' ? setErrorName('This field is required') : setErrorName('');

    }

    const validateEmail = (e) => {
        setUserEmail(e.target.value);
        if (userEmail === '') {
            setEmailError('This field is required')
            //} else if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(userEmail)) {
        } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(userEmail)) {
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
                    display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'stretch', width: '520px'

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
                    error={emailError ? true : false}
                    id='email-required'
                    label='E-mail'
                    type='email'
                    value={userEmail}
                    onChange={validateEmail}
                    onBlur={validateEmail}
                    placeholder='Your Email'
                    helperText={emailError}
                />
                <TextField
                    required
                    error={passwordError ? true : false}
                    id='password-required'
                    label='Password'
                    type='password'
                    value={userPassword}
                    onChange={validatePassword}
                    onBlur={validatePassword}
                    //onChange={(e) => setUserPassword(e.target.value)}
                    autoComplete='current-password'
                    placeholder='Your Password'
                    helperText={passwordError}
                />
                <TextField
                    required
                    error={confirmPasswordError ? true : false}
                    helperText={confirmPasswordError}
                    id='confirm-required'
                    label='Confirm Password'
                    type='password'
                    value={confirmPassword}
                    onChange={validateConfirmPassword}
                    onBlur={validateConfirmPassword}
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
                    <Button color='primary' sx={{ border: 'none', py: '12px', px: '1.5rem', }}>
                        Forgot Your Password?
                    </Button>
                </Box>
            </Box>

        </>
    )
}

export default Register