import { useState } from 'react'

import CartContext from './cartContext'

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((product) => product.id === item.id)

      if (existingItem) {
        return prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product,
        )
      }

      return [...prevCart, { ...item, quantity }]
    })
  }

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== itemId))
  }

  const clear = () => {
    setCart([])
  }

  const isInCart = (id) => cart.some((product) => product.id === id)

  const totalItems = cart.reduce((total, product) => total + product.quantity, 0)
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}