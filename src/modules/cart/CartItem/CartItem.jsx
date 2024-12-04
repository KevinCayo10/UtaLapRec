import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link } from 'react-router-dom'

// Notificaciones
import toast from 'react-hot-toast'

// Componentes
import Price from '@/modules/item/Price'
import TextWithLineBreaks from '@/modules/item/TextWithLineBreaks'
import CrossIcon from '@/modules/ui/Icons/CrossIcon'

function CartItem ({ id, ...props }) {
  const { name, price, quantity } = props
  const { removeItemFromCart } = useContext(CartContext)

  return (
    <tr>

      {/* Botón eliminar del carrito */}
      <td>
        <button
          className='btn btn-circle btn-outline btn-error btn-sm'
          onClick={() => {
            removeItemFromCart(id)
            toast.success(
              <p>
                <span className='flex gap-1 font-bold flex-column'>
                  {name.split('\n')[0]}
                </span> eliminado del carrito.
              </p>
            )
          }}
        >
          <CrossIcon />
        </button>
      </td>

      {/* Item */}
      <td className='text-lg'>
        <Link
          to={`/${id}`}
          title='Ver detalle'
        >
          <TextWithLineBreaks onlyBreakFirstLine styled>{name}</TextWithLineBreaks>
        </Link>
      </td>
      <td className='text-lg text-center'>
        {quantity}
      </td>

      {/* Subtotal */}
      <td className='text-xl text-right'>
        {/* Precio unitario, si más de una unidad */
          quantity > 1 &&
            <p className='text-sm font-normal text-right text-gray-600'>
              Unidad: <Price className='inline-block font-normal' price={price} currency='ARS' />
            </p>
        }
        <Price price={price * quantity} currency='ARS' />
      </td>
    </tr>
  )
}

export default CartItem
