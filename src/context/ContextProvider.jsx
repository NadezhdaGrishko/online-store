import React, { useState } from 'react'
import Context from './Context';

const ContextProvider = (props) => {

    const [dark, setDark] = useState(localStorage.theme === 'dark')

    const toggleDark = () => {
        localStorage.theme = !dark ? 'dark' : 'light'
        setDark(!dark)
    }

    const [isUser, setIsUser] = useState(false)

    const [userName, setUserName] = useState('')
    const ctxValue = {
        dark,
        toggleDark,
        isUser,
        setIsUser,
        userName, 
        setUserName,
    }

    return (
        <Context.Provider value={ctxValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider