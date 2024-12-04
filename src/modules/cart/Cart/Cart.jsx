import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

// Notificaciones
import toast from 'react-hot-toast'

// Componentes
import CartItem from '../CartItem/CartItem'
import Price from '../../item/Price'
import CrossIcon from '@/modules/ui/Icons/CrossIcon'
import BackIcon from '@/modules/ui/Icons/BackIcon'
import IconButton from '@/modules/ui/IconButton'
import CartIcon from '@/modules/ui/Icons/CartIcon'
import CartBreadcrumbs from '@/modules/cart/CartBreadcrumbs'

// Constantes
import { cartSteps } from '@/utils/globalConstants'
const CURRENT_CART_STEP = 0
const NEXT_CART_STEP = 1

function Cart () {
  const navigate = useNavigate()
  const { cart, clearCart, cartQuantity, cartTotalAmount } = useContext(CartContext)

  const quantity = cartQuantity()
  const isCartEmpty = quantity === 0

  const CartActions = () => {
    return (
      <div className='flex flex-col justify-between w-full gap-2 sm:max-w-4xl sm:flex-row'>
        <IconButton
          className='mb-8 sm:mr-auto btn-primary btn-outline btn-sm sm:btn-md sm:mb-0'
          icon={<BackIcon />}
        >
          <Link to='/'>Seguir comprando</Link>
        </IconButton>

        <IconButton
          className='btn-error btn-outline btn-sm sm:btn-md'
          icon={<CrossIcon />}
          onClick={() => {
            clearCart()
            toast.success(<p>Carrito eliminado.</p>)
          }}
        >
          Limpiar carrito
        </IconButton>

        <IconButton
          className='btn-primary btn-sm sm:btn-md'
          icon={<CartIcon />}
        >
          <Link to={cartSteps[NEXT_CART_STEP].path}>{cartSteps[NEXT_CART_STEP].label}</Link>
        </IconButton>
      </div>
    )
  }

  const CartItemsTable = () => {
    return (
      <table className='table w-full max-w-4xl table-zebra'>
        {/* head */}
        <thead className='text-center'>
          <tr>
            <th />
            <th>Producto</th>
            <th>Cant.</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => <CartItem key={item.id} {...item} />)}
        </tbody>
        <tfoot>
          <tr>
            <th />
            <th />
            <th className='text-right'><h3>Total: </h3></th>
            <th className='text-right'>
              <Price className='text-xl text-info ' price={cartTotalAmount()} currency='ARS' />
            </th>
          </tr>
        </tfoot>
      </table>
    )
  }

  return (
    <div className='flex flex-col items-center w-full gap-4 px-4'>
      {
        isCartEmpty
          ? showEmptyCartNotice(() => navigate(-1))
          : (
            <>
              <CartBreadcrumbs steps={cartSteps} currentStep={CURRENT_CART_STEP} />
              <CartItemsTable />
              <CartActions />
            </>
            )
      }

    </div>
  )
}

const showEmptyCartNotice = (onClick) => {
  return (
    <div className='flex flex-col items-center justify-center h-96'>
      <h1 className='text-4xl font-bold'>El carrito está vacío</h1>
      <IconButton
        className='mt-4 btn-primary btn-md'
        icon={<BackIcon />}
        onClick={onClick}
      >
        Volver
      </IconButton>
    </div>
  )
}

export default Cart
