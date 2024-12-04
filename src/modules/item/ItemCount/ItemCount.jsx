import useQuantity from '@/hooks/useQuantity'

// Componentes
import QuantitySelector from '@/modules/item/ItemCount/QuantitySelector'
import CartIcon from '@/modules/ui/Icons/CartIcon'
import IconButton from '@/modules/ui/IconButton'

function ItemCount ({ initial, stock, onAdd }) {
  const { quantity, increment, decrement } = useQuantity({ initial, min: 1, max: stock, step: 1 })

  return (
    <div className='relative w-40'>
      {stock === 0 && <p className='text-sm text-center text-gray-500'>Sin stock</p>}
      {stock === 1 && <p className='text-sm text-center text-gray-500'>Última unidad disponible</p>}
      {stock > 1 &&
        <QuantitySelector
          quantity={quantity}
          min={1} max={stock}
          handleIncrement={increment}
          handleDecrement={decrement}
        />}
      {stock > 0 && (
        <IconButton
          className='w-full mt-2 btn-primary btn-sm sm:btn-md'
          icon={<CartIcon />}
          onClick={() => onAdd(quantity, stock)}
        >
          Agregar&nbsp;&nbsp;
        </IconButton>
      )}
    </div>
  )
}

export default ItemCount
