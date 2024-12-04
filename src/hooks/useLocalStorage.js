import { useState, useEffect } from 'react'

function useLocalStorage (key, initialValue) {
  // Estado para guardar el valor
  // Pasar el valor inicial a useState para que solo se ejecute la primera vez

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      // Permitir que el valor sea una función para que tenga el mismo API que useState
      // Esto es, para permitir el uso de callback como éste: setValue(prev => prev + 1)
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Guardar el estado
      setStoredValue(valueToStore)
      // Guardar en localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  // Handler para el evento de cambio de localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const item = window.localStorage.getItem(key)
        setStoredValue(item ? JSON.parse(item) : initialValue)
      } catch (error) {
        console.log(error)
        setStoredValue(initialValue)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [key, initialValue])

  return [storedValue, setValue]
}

export default useLocalStorage
