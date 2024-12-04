import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link } from 'react-router-dom'

import { pluralize } from '../../../utils/textUtils'
import clsx from 'clsx'
import toast from 'react-hot-toast'

// Componentes
import Price from '@/modules/item/Price'
import IconButton from '@/modules/ui/IconButton'
import CrossIcon from '@/modules/ui/Icons/CrossIcon'
import Badge from '@/modules/ui/Badge/Badge'
import CartIcon from '@/modules/ui/Icons/CartIcon'

// Mock cart
import useCartMock from '@/mocks/useCartMock'
import { LOAD_CART_MOCK } from '@/utils/globalConstants'

function CartWidget ({ ...props }) {
  const { cartQuantity, cartTotalAmount, clearCart } = useContext(CartContext)
  const quantity = cartQuantity()

  // Mock cart
  useCartMock(LOAD_CART_MOCK)

  return (
    <div className={clsx('dropdown dropdown-end', props.className)}>

      {/* Badge */}
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <div className='indicator'>
          <CartIcon />
          {quantity > 0 && <Badge>{quantity}</Badge>}
        </div>
      </label>

      {/* Cart badge menu */}
      <div tabIndex={0} className='mt-3 shadow card card-compact dropdown-content w-60 bg-base-100'>
        <div className='text-center card-body'>
          {quantity === 0
            ? <span className='text-lg font-bold'>El carrito está vacío</span>
            : (
              <>
                <span className='text-lg font-bold'>{pluralize(quantity, 'artículo')}</span>
                <Price className='text-lg text-info' price={cartTotalAmount()} currency='ARS' />
                <div className='card-actions'>
                  <IconButton
                    className='w-full mt-0 btn-error btn-outline'
                    icon={<CrossIcon />}
                    onClick={() => {
                      clearCart()
                      toast.success(<p>Carrito eliminado.</p>)
                    }}
                  >
                    Limpiar carrito
                  </IconButton>
                  <IconButton
                    className='btn-primary btn-sm sm:btn-md btn-block'
                    icon={<CartIcon />}
                  >
                    <Link to='/cart'>Ver carrito</Link>
                  </IconButton>
                </div>
              </>
              )}
        </div>
      </div>

    </div>

  )
}

export default CartWidget
