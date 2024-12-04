import { useContext, useEffect, useRef } from 'react'
import { cartMock } from './cartMock'
import { CartContext } from '@/context/CartContext'

const useCartMock = (shouldExecute) => {
  const { addItemToCart } = useContext(CartContext)
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (shouldExecute && isFirstRun.current) {
      cartMock.map((item) => addItemToCart(item, 20))
      isFirstRun.current = false
    }
  }, [])
}

export default useCartMock
