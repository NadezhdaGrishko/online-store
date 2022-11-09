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


  // const [headphones, setHeadphones] = useState([])
  // const headphonesCollection = collection(firestore, 'headphones');

  // let unsub

  // const getHeadphones = async () => {
  //   //const headphonesQuery = query(headphonesCollection, where('availability', '==', true), limit(20))
  //   const headphonesQuery = query(headphonesCollection, 
  //     //where('availability', 'in', [true, false]), limit(20)
  //     )
  //   unsub = onSnapshot(headphonesQuery, (snapshot) => {
  //     const result = []
  //     snapshot.forEach((doc) => result.push(doc))
  //     setHeadphones(result)
  //     //setLoading(false)
  //   })
  // }

  const [cart, setCart] = useState(localStorage.cart ? JSON.parse(localStorage.cart) : [])

  const saveCart = (newCart) => {
    localStorage.cart = JSON.stringify(newCart)
    //localStorage.setItem('cart', JSON.stringify(newCart)); 
  }

  const addToCart = (product) => {
    const foundIndex = cart.findIndex(item => item.id === product.id)
    if (foundIndex !== -1) {
      const tmp = cart;
      tmp[foundIndex].quantity++;
      setCart([...tmp]);
    } else {
      product.quantity = 1
      setCart([...cart, product]);
    //saveCart([...cart, product]);
    }

    // product.quantity = 1;
    // setCart([...cart, product]);
    // console.log(cart);


    //const tmp = cart;
    //tmp.push(product);

    // let newCart = [];
    // newCart.push(product);
    // setCart(newCart);
    // 
  }

  const removeFromCart = (product_id) => {
    const foundIndex = cart.findIndex(item => item.id === product_id)
    if (foundIndex !== -1) {
      const tmp = cart;
      tmp.splice(foundIndex, 1);
      setCart([...tmp]);
    //saveCart([...tmp]);
    }
  }

  const increaseQuantity = (product_id) => {
    const foundIndex = cart.findIndex(item => item.id === product_id)
    if (foundIndex !== -1) {
      const tmp = cart;
      tmp[foundIndex].quantity++;
      setCart([...tmp]);
    //saveCart([...tmp]);
    }
  }

  const decreaseQuantity = (product_id) => {
    const foundIndex = cart.findIndex(item => item.id === product_id)
    if (foundIndex !== -1 && cart[foundIndex].quantity > 1) {
      const tmp = cart;
      tmp[foundIndex].quantity--;
      setCart([...tmp]);
    //saveCart([...tmp]);
    }
  }

  const getTotalQuantity = () => {
    let summ = 0;
    cart.forEach(item => summ += item.quantity);
    return summ;
  }

  const getTotalPrice = () => {
    let price = 0
    cart.forEach(item => price += item.quantity * item.data().price)
    return price;
  }

  const isInCart = (product_id) => {
    return cart.findIndex(item => item.id === product_id) !== -1;
  }

  const ctxValue = {
    dark,
    toggleDark,
    isUser,
    setIsUser,
    userName,
    setUserName,

    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalQuantity,
    getTotalPrice,
    isInCart,
  }

  return (
    <Context.Provider value={ctxValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider