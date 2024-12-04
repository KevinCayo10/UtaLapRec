import { useState } from 'react'

/* Para usar con QuantitySelector */
function useQuantity ({ initial, min, max, step }) {
  const [quantity, setQuantity] = useState(initial)

  const decrement = (step) => {
    if (quantity > min) setQuantity(prevCount => prevCount - step)
  }

  const increment = (step) => {
    if (quantity < max) setQuantity(prevCount => prevCount + step)
  }

  return { quantity, setQuantity, decrement, increment }
}

export default useQuantity
