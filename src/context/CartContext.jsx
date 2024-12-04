import { createContext, useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'
import toast from 'react-hot-toast'

export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('tuportatil-cart', [])

  const addItemToCart = (item, stock) => {
    const updateItemQuantity = (item, stock) => {
      const itemInCart = cart.find(i => i.id === item.id)
      const existingQuantity = itemInCart.quantity

      itemInCart.quantity + item.quantity > stock
        ? itemInCart.quantity = stock
        : itemInCart.quantity += item.quantity

      // Notificar al usuario que el carrito ya tiene el máximo de unidades disponibles
      itemInCart.quantity === stock && itemInCart.quantity === existingQuantity &&
        toast.error(
          <p>
            El carrito tiene el máximo de unidades disponibles de este artículo:
            <span className='font-bold'> {stock}</span><br />
            Se agregaron <span className='font-bold'>{itemInCart.quantity - existingQuantity}</span> unidades.
          </p>
        )

      setCart(prev => prev.filter(i => i.id !== item.id).concat(itemInCart))
    }

    const addItem = (item) => {
      setCart(prev => [...prev, item])
    }

    isItemInCart(item.id)
      ? updateItemQuantity(item, stock)
      : addItem(item)
  }

  const removeItemFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
  }

  const isItemInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  const cartQuantity = () => {
    const cantItems = cart.reduce((acc, item) => acc + item.quantity, 0)
    return cantItems
  }

  const cartTotalAmount = () => {
    const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    return totalAmount
  }

  return (
    <CartContext.Provider value={{
      cart,
      isItemInCart,
      addItemToCart,
      removeItemFromCart,
      clearCart,
      cartQuantity,
      cartTotalAmount
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
