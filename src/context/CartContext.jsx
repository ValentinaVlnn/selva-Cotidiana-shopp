import { useState } from 'react'

import CartContext from './cartContext'

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    const stock = Number(item.stock)
    const maxQuantity = Number.isFinite(stock) ? stock : Infinity

    setCart((prevCart) => {
      const existingItem = prevCart.find((product) => product.id === item.id)

      if (existingItem) {
        return prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: Math.min(product.quantity + quantity, maxQuantity) }
            : product,
        )
      }

      const newQuantity = Math.min(quantity, maxQuantity)

      return newQuantity > 0 ? [...prevCart, { ...item, quantity: newQuantity }] : prevCart
    })
  }

  const getItemQuantity = (id) => cart.find((product) => product.id === id)?.quantity ?? 0

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
      value={{ cart, addItem, removeItem, clear, isInCart, getItemQuantity, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}