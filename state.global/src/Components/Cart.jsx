import React, { useContext } from 'react'
import { cartContext } from '../context/cartContext'

const Cart = () => {
  const cart = useContext(cartContext)
  console.log(cart)
  return (
    <div>Cart</div>
  )
}

export default Cart