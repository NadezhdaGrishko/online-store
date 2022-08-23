import React, { useState } from 'react'
import Context from './Context';
import { collection, onSnapshot, QueryDocumentSpanshot, DocumentData, query, where, limit, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/clientApp';

const ContextProvider = (props) => {

    const [dark, setDark] = useState(localStorage.theme === 'dark')

    const toggleDark = () => {
        localStorage.theme = !dark ? 'dark' : 'light'
        setDark(!dark)
    }

    const [isUser, setIsUser] = useState(false)

    const [userName, setUserName] = useState('')


    const [headphones, setHeadphones] = useState([])
    const headphonesCollection = collection(firestore, 'headphones');
  
    let unsub
  
    const getHeadphones = async () => {
      //const headphonesQuery = query(headphonesCollection, where('availability', '==', true), limit(20))
      const headphonesQuery = query(headphonesCollection, 
        //where('availability', 'in', [true, false]), limit(20)
        )
      unsub = onSnapshot(headphonesQuery, (snapshot) => {
        const result = []
        snapshot.forEach((doc) => result.push(doc))
        setHeadphones(result)
        //setLoading(false)
      })
    }







    const ctxValue = {
        dark,
        toggleDark,
        isUser,
        setIsUser,
        userName, 
        setUserName,

        headphones,
        getHeadphones,
        
    }

    return (
        <Context.Provider value={ctxValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider